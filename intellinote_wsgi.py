import sys
import os

project_home = os.path.expanduser('~/intellinote')
if project_home not in sys.path:
    sys.path.insert(0, project_home)

from app import app as application

os.chdir(project_home)

from database import init_db, seed_data
init_db()
seed_data()
