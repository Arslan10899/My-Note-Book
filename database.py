import sqlite3
import os
from datetime import datetime, timedelta

DATABASE = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'intellinote.db')


def get_db():
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA foreign_keys = ON")
    return conn


def init_db():
    conn = get_db()
    cursor = conn.cursor()

    cursor.executescript('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            password_hash TEXT NOT NULL,
            full_name TEXT DEFAULT '',
            email TEXT DEFAULT '',
            phone TEXT DEFAULT '',
            role TEXT DEFAULT 'User',
            image_path TEXT DEFAULT '',
            status TEXT DEFAULT 'pending',
            requested_at TEXT DEFAULT ''
        );

        CREATE TABLE IF NOT EXISTS pages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            icon TEXT DEFAULT '📄',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );

        CREATE TABLE IF NOT EXISTS blocks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            page_id INTEGER NOT NULL,
            block_type TEXT CHECK(block_type IN ('instruction', 'task', 'reminder', 'notepad')),
            content TEXT NOT NULL,
            subject TEXT DEFAULT '',
            status TEXT DEFAULT 'pending',
            due_date TEXT,
            recurrence TEXT,
            ref_date TEXT,
            ref_type TEXT DEFAULT 'none',
            ref_detail TEXT DEFAULT '',
            priority TEXT DEFAULT 'normal',
            is_active INTEGER DEFAULT 1,
            end_date TEXT,
            image_path TEXT DEFAULT '',
            task_priority TEXT DEFAULT 'medium',
            category TEXT DEFAULT 'general',
            description TEXT DEFAULT '',
            task_status TEXT DEFAULT 'pending',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY(page_id) REFERENCES pages(id) ON DELETE CASCADE
        );

        CREATE TABLE IF NOT EXISTS logs (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            log_type TEXT NOT NULL,
            log_date DATE NOT NULL,
            status TEXT NOT NULL
        );
    ''')

    conn.commit()
    conn.close()

    _migrate_db()


def _migrate_db():
    conn = get_db()
    cursor = conn.cursor()
    cols = [row[1] for row in cursor.execute("PRAGMA table_info(users)").fetchall()]
    if 'full_name' not in cols:
        cursor.execute("ALTER TABLE users ADD COLUMN full_name TEXT DEFAULT ''")
    if 'email' not in cols:
        cursor.execute("ALTER TABLE users ADD COLUMN email TEXT DEFAULT ''")
    if 'phone' not in cols:
        cursor.execute("ALTER TABLE users ADD COLUMN phone TEXT DEFAULT ''")
    if 'role' not in cols:
        cursor.execute("ALTER TABLE users ADD COLUMN role TEXT DEFAULT 'Admin'")
    if 'image_path' not in cols:
        cursor.execute("ALTER TABLE users ADD COLUMN image_path TEXT DEFAULT ''")
    conn.commit()

    block_cols = [row[1] for row in cursor.execute("PRAGMA table_info(blocks)").fetchall()]
    if 'reminder_time' not in block_cols:
        cursor.execute("ALTER TABLE blocks ADD COLUMN reminder_time TEXT DEFAULT ''")

    user_cols = [row[1] for row in cursor.execute("PRAGMA table_info(users)").fetchall()]
    if 'status' not in user_cols:
        cursor.execute("ALTER TABLE users ADD COLUMN status TEXT DEFAULT 'approved'")
    if 'requested_at' not in user_cols:
        cursor.execute("ALTER TABLE users ADD COLUMN requested_at TEXT DEFAULT ''")

    try:
        create_sql = cursor.execute("SELECT sql FROM sqlite_master WHERE type='table' AND name='blocks'").fetchone()
        if create_sql and 'notepad' not in create_sql[0]:
            cols = [r[1] for r in cursor.execute("PRAGMA table_info(blocks)").fetchall()]
            all_cols = ','.join(cols)
            cursor.execute("CREATE TABLE blocks_new AS SELECT * FROM blocks")
            cursor.execute("DROP TABLE blocks")
            cursor.execute("""CREATE TABLE blocks (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                page_id INTEGER NOT NULL,
                block_type TEXT CHECK(block_type IN ('instruction', 'task', 'reminder', 'notepad')),
                content TEXT NOT NULL,
                subject TEXT DEFAULT '',
                status TEXT DEFAULT 'pending',
                due_date TEXT,
                recurrence TEXT,
                ref_date TEXT,
                ref_type TEXT DEFAULT 'none',
                ref_detail TEXT DEFAULT '',
                priority TEXT DEFAULT 'normal',
                is_active INTEGER DEFAULT 1,
                end_date TEXT,
                image_path TEXT DEFAULT '',
                task_priority TEXT DEFAULT 'medium',
                category TEXT DEFAULT 'general',
                description TEXT DEFAULT '',
                task_status TEXT DEFAULT 'pending',
                reminder_time TEXT DEFAULT '',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY(page_id) REFERENCES pages(id) ON DELETE CASCADE
            )""")
            insert_cols = [c for c in cols if c != 'id']
            cols_str = ','.join(insert_cols)
            cursor.execute("INSERT INTO blocks(" + cols_str + ") SELECT " + cols_str + " FROM blocks_new")
            cursor.execute("DROP TABLE blocks_new")
    except Exception:
        pass

    conn.commit()
    conn.close()


def seed_data():
    from werkzeug.security import generate_password_hash

    conn = get_db()
    cursor = conn.cursor()

    cursor.execute("SELECT COUNT(*) FROM users")
    if cursor.fetchone()[0] == 0:
        cursor.execute(
            "INSERT INTO users (username, password_hash, full_name, email, phone, role, status) VALUES (?, ?, ?, ?, ?, ?, ?)",
            ('admin', generate_password_hash('admin123'), 'Muhammad Arslan', 'arslan@example.com', '+92 300 1234567', 'Admin', 'approved')
        )

        cursor.execute(
            "INSERT INTO pages (title, icon) VALUES (?, ?)",
            ('Billing Guidelines', '💰')
        )
        cursor.execute(
            "INSERT INTO pages (title, icon) VALUES (?, ?)",
            ('Daily Tasks', '✅')
        )
        cursor.execute(
            "INSERT INTO pages (title, icon) VALUES (?, ?)",
            ('SOP Documentation', '📋')
        )

        cursor.execute(
            "INSERT INTO blocks (page_id, block_type, content, subject, ref_date, ref_type, ref_detail, priority) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
            (1, 'instruction', 'Modifier 25: Significant, separately identifiable E/M service. Must document distinct diagnosis or service.',
             'Modifier 25 Rule', datetime.now().strftime('%Y-%m-%d'), 'email', 'Insurance Provider Update', 'important')
        )
        cursor.execute(
            "INSERT INTO blocks (page_id, block_type, content, subject, ref_date, ref_type, ref_detail, priority) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
            (1, 'instruction', 'CPT 99213: Office visit for established patient. Requires 2 of 3: History, Exam, Medical Decision Making.',
             'CPT 99213 Code', datetime.now().strftime('%Y-%m-%d'), 'call', 'Team Lead Discussion', 'normal')
        )
        cursor.execute(
            "INSERT INTO blocks (page_id, block_type, content, status, due_date, task_priority, category, description, task_status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
            (2, 'task', 'Submit daily attendance', 'pending', datetime.now().strftime('%Y-%m-%d'), 'high', 'attendance', 'Submit attendance via portal before 9 AM', 'pending')
        )
        cursor.execute(
            "INSERT INTO blocks (page_id, block_type, content, status, due_date, task_priority, category, description, task_status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
            (2, 'task', 'Review pending claims', 'pending', datetime.now().strftime('%Y-%m-%d'), 'medium', 'billing', 'Check all pending claims from last week and follow up', 'in_progress')
        )
        cursor.execute(
            "INSERT INTO blocks (page_id, block_type, content, status, due_date, task_priority, category, description, task_status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
            (2, 'task', 'Update patient records', 'pending', datetime.now().strftime('%Y-%m-%d'), 'low', 'documentation', 'Update any missing patient demographic info', 'pending')
        )
        cursor.execute(
            "INSERT INTO blocks (page_id, block_type, content, recurrence) VALUES (?, ?, ?, ?)",
            (2, 'reminder', 'Generate Weekly Claims Report', 'weekly_monday')
        )
        cursor.execute(
            "INSERT INTO blocks (page_id, block_type, content, recurrence) VALUES (?, ?, ?, ?)",
            (2, 'reminder', 'Submit daily attendance', 'daily')
        )
        cursor.execute(
            "INSERT INTO blocks (page_id, block_type, content, subject) VALUES (?, ?, ?, ?)",
            (3, 'instruction', 'When calling insurance, always have: Patient DOB, Member ID, Claim Number, Date of Service.', 'Insurance Call Checklist')
        )

        yesterday = (datetime.now() - timedelta(days=1)).strftime('%Y-%m-%d')
        cursor.execute(
            "INSERT INTO logs (log_type, log_date, status) VALUES (?, ?, ?)",
            ('attendance', yesterday, 'missed')
        )

    conn.commit()
    conn.close()
