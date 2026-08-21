const ICON_CATEGORIES = {
    emoji: ['📄','💰','✅','📋','📝','🏥','💊','📅','🔔','📊','📁','🔍','⚡','🎯','📌','🗂️','🏷️','📍','🚀','💡','🔥','⭐','🎨','📱','💻','🔧','📈','🗓️','⏰','📣','📮','📬','🏢','🏦','🎓','📚','📖','✏️','🖊️','📐','📏','🖥️','🎞️','🎬','🎥','📷','📸','📻','🎙️','🧵','🧹','🧰','⚙️','🔗','📎','🔖','🌿','🌸','🌺','🌻','🌹','🐶','🐱','🐭','🐰','🦊','🐻','🐼','🐨','🐯','🦁','🐮','🐷','🐸','🐵','🐔','🐧','🐦','🦄','🐝','🐛','🦋','🐞'],
    free: ['cil-3d','cil-4k','cil-account-logout','cil-action-redo','cil-action-undo','cil-address-book','cil-airplane-mode','cil-airplane-mode-off','cil-airplay','cil-alarm','cil-album','cil-align-center','cil-align-left','cil-align-right','cil-american-football','cil-animal','cil-aperture','cil-apple','cil-applications','cil-applications-settings','cil-apps','cil-apps-settings','cil-arrow-bottom','cil-arrow-circle-bottom','cil-arrow-circle-left','cil-arrow-circle-right','cil-arrow-circle-top','cil-arrow-left','cil-arrow-right','cil-arrow-thick-bottom','cil-arrow-thick-from-bottom','cil-arrow-thick-from-left','cil-arrow-thick-from-right','cil-arrow-thick-from-top','cil-arrow-thick-left','cil-arrow-thick-right','cil-arrow-thick-to-bottom','cil-arrow-thick-to-left','cil-arrow-thick-to-right','cil-arrow-thick-to-top','cil-arrow-top','cil-assistive-listening-system','cil-asterisk','cil-asterisk-circle','cil-at','cil-audio','cil-audio-description','cil-audio-spectrum','cil-av-timer','cil-baby','cil-baby-carriage','cil-backspace','cil-badge','cil-balance-scale','cil-ban','cil-bank','cil-bar-chart','cil-barcode','cil-baseball','cil-basket','cil-basketball','cil-bath','cil-bathroom','cil-battery-0','cil-battery-3','cil-battery-5','cil-battery-alert','cil-battery-empty','cil-battery-full','cil-battery-slash','cil-beach-access','cil-beaker','cil-bed','cil-bell','cil-bell-exclamation','cil-bike','cil-birthday-cake','cil-blind','cil-bluetooth','cil-blur','cil-blur-circular','cil-blur-linear','cil-boat-alt','cil-bold','cil-bolt','cil-bolt-circle','cil-book','cil-bookmark','cil-border-all','cil-border-bottom','cil-border-clear','cil-border-horizontal','cil-border-inner','cil-border-left','cil-border-outer','cil-border-right','cil-border-style','cil-border-top','cil-border-vertical','cil-bowling','cil-braille','cil-briefcase','cil-brightness','cil-british-pound','cil-browser','cil-brush','cil-brush-alt','cil-bug','cil-building','cil-bullhorn','cil-burger','cil-burn','cil-bus-alt','cil-calculator','cil-calendar','cil-calendar-check','cil-camera','cil-camera-control','cil-camera-roll','cil-car-alt','cil-caret-bottom','cil-caret-left','cil-caret-right','cil-caret-top','cil-cart','cil-cash','cil-casino','cil-cast','cil-cat','cil-cc','cil-center-focus','cil-chart','cil-chart-line','cil-chart-pie','cil-chat-bubble','cil-check','cil-check-alt','cil-check-circle','cil-chevron-bottom','cil-chevron-circle-down-alt','cil-chevron-circle-left-alt','cil-chevron-circle-right-alt','cil-chevron-circle-up-alt','cil-chevron-double-down','cil-chevron-double-left','cil-chevron-double-right','cil-chevron-double-up','cil-chevron-left','cil-chevron-right','cil-chevron-top','cil-child','cil-child-friendly','cil-circle','cil-clear-all','cil-clipboard','cil-clock','cil-clone','cil-closed-captioning','cil-cloud','cil-cloud-download','cil-cloud-upload','cil-cloudy','cil-code','cil-coffee','cil-cog','cil-color-border','cil-color-fill','cil-color-palette','cil-columns','cil-command','cil-comment-bubble','cil-comment-square','cil-compass','cil-compress','cil-contact','cil-contrast','cil-control','cil-copy','cil-couch','cil-credit-card','cil-crop','cil-crop-rotate','cil-cursor','cil-cursor-move','cil-cut','cil-data-transfer-down','cil-data-transfer-up','cil-deaf','cil-delete','cil-description','cil-devices','cil-dialpad','cil-diamond','cil-dinner','cil-disabled','cil-dog','cil-dollar','cil-door','cil-double-quote-sans-left','cil-double-quote-sans-right','cil-drink','cil-drink-alcohol','cil-drop','cil-eco','cil-education','cil-elevator','cil-envelope-closed','cil-envelope-letter','cil-envelope-open','cil-equalizer','cil-ethernet','cil-euro','cil-excerpt','cil-exit-to-app','cil-expand-down','cil-expand-left','cil-expand-right','cil-expand-up','cil-exposure','cil-external-link','cil-eyedropper','cil-face','cil-face-dead','cil-factory','cil-factory-slash','cil-fastfood','cil-fax','cil-featured-playlist','cil-file','cil-filter','cil-filter-frames','cil-filter-photo','cil-filter-square','cil-filter-x','cil-find-in-page','cil-fingerprint','cil-fire','cil-flag-alt','cil-flight-takeoff','cil-flip','cil-flip-to-back','cil-flip-to-front','cil-flower','cil-folder','cil-folder-open','cil-font','cil-football','cil-fork','cil-fridge','cil-frown','cil-fullscreen','cil-fullscreen-exit','cil-functions','cil-functions-alt','cil-gamepad','cil-garage','cil-gem','cil-gif','cil-gift','cil-globe-alt','cil-golf','cil-golf-alt','cil-gradient','cil-grain','cil-graph','cil-grid','cil-grid-slash','cil-group','cil-hamburger-menu','cil-hand-point-down','cil-hand-point-left','cil-hand-point-right','cil-hand-point-up','cil-happy','cil-hd','cil-hdr','cil-header','cil-headphones','cil-healing','cil-heart','cil-highlighter','cil-highligt','cil-history','cil-home','cil-hospital','cil-hot-tub','cil-house','cil-https','cil-image','cil-image-broken','cil-image-plus','cil-inbox','cil-indent-decrease','cil-indent-increase','cil-industry','cil-industry-slash','cil-infinity','cil-info','cil-input','cil-input-hdmi','cil-input-power','cil-institution','cil-italic','cil-justify-center','cil-justify-left','cil-justify-right','cil-keyboard','cil-lan','cil-language','cil-laptop','cil-layers','cil-leaf','cil-lemon','cil-level-down','cil-level-up','cil-library','cil-library-add','cil-library-building','cil-life-ring','cil-lightbulb','cil-line-spacing','cil-line-style','cil-line-weight','cil-link','cil-link-alt','cil-link-broken','cil-list','cil-list-filter','cil-list-high-priority','cil-list-low-priority','cil-list-numbered','cil-list-numbered-rtl','cil-list-rich','cil-location-pin','cil-lock-locked','cil-lock-unlocked','cil-locomotive','cil-loop','cil-loop-1','cil-loop-circular','cil-low-vision','cil-magnifying-glass','cil-map','cil-media-eject','cil-media-pause','cil-media-play','cil-media-record','cil-media-skip-backward','cil-media-skip-forward','cil-media-step-backward','cil-media-step-forward','cil-media-stop','cil-medical-cross','cil-meh','cil-memory','cil-menu','cil-mic','cil-microphone','cil-minus','cil-mobile','cil-mobile-landscape','cil-money','cil-monitor','cil-mood-bad','cil-mood-good','cil-mood-very-bad','cil-mood-very-good','cil-moon','cil-mouse','cil-mouth-slash','cil-move','cil-movie','cil-mug','cil-mug-tea','cil-music-note','cil-newspaper','cil-note-add','cil-notes','cil-object-group','cil-object-ungroup','cil-opacity','cil-opentype','cil-options','cil-paint','cil-paint-bucket','cil-paperclip','cil-paper-plane','cil-paragraph','cil-paw','cil-pen','cil-pen-alt','cil-pencil','cil-pen-nib','cil-people','cil-phone','cil-pin','cil-pizza','cil-plant','cil-playlist-add','cil-plus','cil-pool','cil-power-standby','cil-pregnant','cil-print','cil-pushchair','cil-puzzle','cil-qr-code','cil-rain','cil-rectangle','cil-recycle','cil-reload','cil-report-slash','cil-resize-both','cil-resize-height','cil-resize-width','cil-restaurant','cil-room','cil-router','cil-rowing','cil-rss','cil-ruble','cil-running','cil-sad','cil-satelite','cil-save','cil-school','cil-screen-desktop','cil-screen-smartphone','cil-scrubber','cil-search','cil-send','cil-settings','cil-share','cil-share-all','cil-share-alt','cil-share-boxed','cil-shield-alt','cil-short-text','cil-shower','cil-signal-cellular-0','cil-signal-cellular-3','cil-signal-cellular-4','cil-sign-language','cil-sim','cil-sitemap','cil-smile','cil-smile-plus','cil-smoke','cil-smoke-free','cil-smoke-slash','cil-smoking-room','cil-snowflake','cil-soccer','cil-sofa','cil-sort-alpha-down','cil-sort-alpha-up','cil-sort-ascending','cil-sort-descending','cil-sort-numeric-down','cil-sort-numeric-up','cil-spa','cil-space-bar','cil-speak','cil-speaker','cil-speech','cil-speedometer','cil-spreadsheet','cil-square','cil-star','cil-star-half','cil-storage','cil-stream','cil-strikethrough','cil-sun','cil-swap-horizontal','cil-swap-vertical','cil-swimming','cil-sync','cil-tablet','cil-tag','cil-tags','cil-task','cil-taxi','cil-tennis','cil-tennis-ball','cil-terminal','cil-terrain','cil-text','cil-text-shapes','cil-text-size','cil-text-square','cil-text-strike','cil-thumb-down','cil-thumb-up','cil-toggle-off','cil-toggle-on','cil-toilet','cil-touch-app','cil-transfer','cil-translate','cil-trash','cil-triangle','cil-truck','cil-tv','cil-underline','cil-usb','cil-user','cil-user-female','cil-user-follow','cil-user-plus','cil-user-unfollow','cil-user-x','cil-vector','cil-vertical-align-bottom','cil-vertical-align-center','cil-vertical-align-top','cil-video','cil-videogame','cil-view-column','cil-view-module','cil-view-quilt','cil-view-stream','cil-voice','cil-voice-over-record','cil-volume-high','cil-volume-low','cil-volume-off','cil-walk','cil-wallet','cil-wallpaper','cil-warning','cil-watch','cil-wc','cil-weightlifitng','cil-wheelchair','cil-wifi-signal-0','cil-wifi-signal-1','cil-wifi-signal-2','cil-wifi-signal-3','cil-wifi-signal-4','cil-wifi-signal-off','cil-window','cil-window-maximize','cil-window-minimize','cil-window-restore','cil-wrap-text','cil-x','cil-x-circle','cil-yen','cil-zoom','cil-zoom-in','cil-zoom-out'],
    brand: ['cib-500px','cib-about-me','cib-abstract','cib-acm','cib-addthis','cib-adguard','cib-adobe','cib-adobe-acrobat-reader','cib-adobe-after-effects','cib-adobe-audition','cib-adobe-creative-cloud','cib-adobe-dreamweaver','cib-adobe-illustrator','cib-adobe-indesign','cib-adobe-lightroom','cib-adobe-lightroom-classic','cib-adobe-photoshop','cib-adobe-premiere','cib-adobe-typekit','cib-adobe-xd','cib-airbnb','cib-algolia','cib-alipay','cib-allocine','cib-amazon','cib-amazon-aws','cib-amazon-pay','cib-amd','cib-american-express','cib-anaconda','cib-analogue','cib-android','cib-android-alt','cib-angellist','cib-angular','cib-angular-universal','cib-ansible','cib-apache','cib-apache-airflow','cib-apache-flink','cib-apache-spark','cib-app-store','cib-app-store-ios','cib-apple','cib-apple-music','cib-apple-pay','cib-apple-podcasts','cib-appveyor','cib-aral','cib-arch-linux','cib-archive-of-our-own','cib-arduino','cib-artstation','cib-arxiv','cib-asana','cib-at-and-t','cib-atlassian','cib-atom','cib-audible','cib-aurelia','cib-auth0','cib-automatic','cib-autotask','cib-aventrix','cib-azure-artifacts','cib-azure-devops','cib-azure-pipelines','cib-babel','cib-baidu','cib-bamboo','cib-bancontact','cib-bandcamp','cib-basecamp','cib-bathasu','cib-behance','cib-big-cartel','cib-bing','cib-bit','cib-bitbucket','cib-bitcoin','cib-bitdefender','cib-bitly','cib-blackberry','cib-blender','cib-blogger','cib-blogger-b','cib-bluetooth','cib-bluetooth-b','cib-boeing','cib-boost','cib-bootstrap','cib-bower','cib-brand-ai','cib-brave','cib-btc','cib-buddy','cib-buffer','cib-buy-me-a-coffee','cib-buysellads','cib-buzzfeed','cib-c','cib-cakephp','cib-campaign-monitor','cib-canva','cib-cashapp','cib-cassandra','cib-castro','cib-cc-amazon-pay','cib-cc-amex','cib-cc-apple-pay','cib-cc-diners-club','cib-cc-discover','cib-cc-jcb','cib-cc-mastercard','cib-cc-paypal','cib-cc-stripe','cib-cc-visa','cib-centos','cib-cevo','cib-chase','cib-chef','cib-chromecast','cib-circle','cib-circleci','cib-cirrusci','cib-cisco','cib-civicrm','cib-clockify','cib-clojure','cib-cloudbees','cib-cloudflare','cib-cmake','cib-co-op','cib-codacy','cib-code-climate','cib-codecademy','cib-codecov','cib-codeigniter','cib-codepen','cib-coderwall','cib-codesandbox','cib-codeship','cib-codewars','cib-codio','cib-coffeescript','cib-common-workflow-language','cib-composer','cib-conda-forge','cib-conekta','cib-confluence','cib-coreui','cib-coreui-c','cib-coursera','cib-coveralls','cib-cpanel','cib-cplusplus','cib-creative-commons','cib-creative-commons-by','cib-creative-commons-nc','cib-creative-commons-nc-eu','cib-creative-commons-nc-jp','cib-creative-commons-nd','cib-creative-commons-pd','cib-creative-commons-pd-alt','cib-creative-commons-remix','cib-creative-commons-sa','cib-creative-commons-sampling','cib-creative-commons-sampling-plus','cib-creative-commons-share','cib-creative-commons-zero','cib-crunchbase','cib-crunchyroll','cib-css3','cib-css3-shiled','cib-csswizardry','cib-d3-js','cib-dailymotion','cib-dashlane','cib-dazn','cib-dblp','cib-debian','cib-deepin','cib-deezer','cib-delicious','cib-dell','cib-deno','cib-dependabot','cib-designer-news','cib-dev-to','cib-deviantart','cib-devrant','cib-diaspora','cib-digg','cib-digital-ocean','cib-discord','cib-discourse','cib-discover','cib-disqus','cib-disroot','cib-django','cib-docker','cib-docusign','cib-dot-net','cib-draugiem-lv','cib-dribbble','cib-drone','cib-dropbox','cib-drupal','cib-dtube','cib-duckduckgo','cib-dynatrace','cib-ebay','cib-eclipseide','cib-elastic','cib-elastic-cloud','cib-elastic-search','cib-elastic-stack','cib-electron','cib-elementary','cib-eleventy','cib-ello','cib-elsevier','cib-emlakjet','cib-empirekred','cib-envato','cib-epic-games','cib-epson','cib-esea','cib-eslint','cib-ethereum','cib-etsy','cib-event-store','cib-eventbrite','cib-evernote','cib-everplaces','cib-evry','cib-exercism','cib-experts-exchange','cib-expo','cib-eyeem','cib-f-secure','cib-facebook','cib-facebook-f','cib-faceit','cib-fandango','cib-favro','cib-feathub','cib-fedex','cib-fedora','cib-feedly','cib-fido-alliance','cib-figma','cib-filezilla','cib-firebase','cib-fitbit','cib-flask','cib-flattr','cib-flickr','cib-flipboard','cib-flutter','cib-fnac','cib-foursquare','cib-framer','cib-freebsd','cib-freecodecamp','cib-fur-affinity','cib-furry-network','cib-garmin','cib-gatsby','cib-gauges','cib-genius','cib-gentoo','cib-geocaching','cib-gerrit','cib-gg','cib-ghost','cib-gimp','cib-git','cib-gitea','cib-github','cib-gitkraken','cib-gitlab','cib-gitpod','cib-gitter','cib-glassdoor','cib-glitch','cib-gmail','cib-gnu','cib-gnu-privacy-guard','cib-gnu-social','cib-go','cib-godot-engine','cib-gog-com','cib-goldenline','cib-goodreads','cib-google','cib-google-ads','cib-google-allo','cib-google-analytics','cib-google-chrome','cib-google-cloud','cib-google-keep','cib-google-pay','cib-google-play','cib-google-podcasts','cib-googles-cholar','cib-gov-uk','cib-gradle','cib-grafana','cib-graphcool','cib-graphql','cib-grav','cib-gravatar','cib-greenkeeper','cib-greensock','cib-groovy','cib-groupon','cib-grunt','cib-gulp','cib-gumroad','cib-gumtree','cib-habr','cib-hackaday','cib-hackerearth','cib-hackerone','cib-hackerrank','cib-hackhands','cib-hackster','cib-happycow','cib-hashnode','cib-haskell','cib-hatena-bookmark','cib-haxe','cib-helm','cib-here','cib-heroku','cib-hexo','cib-highly','cib-hipchat','cib-hitachi','cib-hockeyapp','cib-homify','cib-hootsuite','cib-hotjar','cib-houzz','cib-hp','cib-html5','cib-html5-shield','cib-htmlacademy','cib-huawei','cib-hubspot','cib-hulu','cib-humble-bundle','cib-iata','cib-ibm','cib-icloud','cib-iconjar','cib-icq','cib-ideal','cib-ifixit','cib-imdb','cib-indeed','cib-inkscape','cib-instacart','cib-instagram','cib-instapaper','cib-intel','cib-intellijidea','cib-intercom','cib-internet-explorer','cib-invision','cib-ionic','cib-issuu','cib-itch-io','cib-jabber','cib-java','cib-javascript','cib-jekyll','cib-jenkins','cib-jest','cib-jet','cib-jetbrains','cib-jira','cib-joomla','cib-jquery','cib-js','cib-jsdelivr','cib-jsfiddle','cib-json','cib-jupyter','cib-justgiving','cib-kaggle','cib-kaios','cib-kaspersky','cib-kentico','cib-keras','cib-keybase','cib-keycdn','cib-khan-academy','cib-kibana','cib-kickstarter','cib-kik','cib-kirby','cib-klout','cib-known','cib-kodi','cib-koding','cib-ko-fi','cib-kotlin','cib-krita','cib-kubernetes','cib-lanyrd','cib-laravel','cib-laravel-horizon','cib-laravel-nova','cib-last-fm','cib-latex','cib-launchpad','cib-leetcode','cib-lenovo','cib-less','cib-lets-encrypt','cib-letterboxd','cib-lgtm','cib-liberapay','cib-librarything','cib-libreoffice','cib-line','cib-linkedin','cib-linkedin-in','cib-linux','cib-linux-foundation','cib-linux-mint','cib-livejournal','cib-livestream','cib-logstash','cib-lua','cib-lumen','cib-lyft','cib-macys','cib-magento','cib-magisk','cib-mailchimp','cib-mail-ru','cib-makerbot','cib-manjaro','cib-markdown','cib-marketo','cib-mastercard','cib-mastodon','cib-material-design','cib-mathworks','cib-matrix','cib-mattermost','cib-matternet','cib-maxcdn','cib-mcafee','cib-mediafire','cib-media-temple','cib-medium','cib-medium-m','cib-meetup','cib-mega','cib-mendeley','cib-messenger','cib-meteor','cib-micro-blog','cib-microgenetics','cib-microsoft','cib-microsoft-edge','cib-minetest','cib-minutemailer','cib-mix','cib-mixcloud','cib-mixer','cib-mojang','cib-monero','cib-mongodb','cib-monkeytie','cib-monogram','cib-monzo','cib-moo','cib-mozilla','cib-mozilla-firefox','cib-musescore','cib-mxlinux','cib-myspace','cib-mysql','cib-nativescript','cib-nec','cib-neo4j','cib-netflix','cib-netlify','cib-nextcloud','cib-nextdoor','cib-next-js','cib-nginx','cib-nim','cib-nintendo','cib-nintendo-3ds','cib-nintendo-gamecube','cib-nintendo-switch','cib-node-js','cib-nodemon','cib-node-red','cib-nokia','cib-notion','cib-npm','cib-nucleo','cib-nuget','cib-nuxt-js','cib-nvidia','cib-ocaml','cib-octave','cib-octopus-deploy','cib-oculus','cib-odnoklassniki','cib-open-access','cib-open-collective','cib-open-id','cib-open-source-initiative','cib-openstreetmap','cib-opensuse','cib-openvpn','cib-opera','cib-opsgenie','cib-oracle','cib-orcid','cib-origin','cib-osi','cib-osmc','cib-overcast','cib-overleaf','cib-ovh','cib-pagekit','cib-palantir','cib-pandora','cib-pantheon','cib-patreon','cib-paypal','cib-periscope','cib-php','cib-picarto-tv','cib-pinboard','cib-pingdom','cib-pingup','cib-pinterest','cib-pinterest-p','cib-pivotaltracker','cib-plangrid','cib-player-fm','cib-player-me','cib-playstation','cib-playstation3','cib-playstation4','cib-plesk','cib-plex','cib-pluralsight','cib-plurk','cib-pocket','cib-postgresql','cib-postman','cib-postwoman','cib-powershell','cib-prettier','cib-prismic','cib-probot','cib-processwire','cib-product-hunt','cib-proto-io','cib-protonmail','cib-proxmox','cib-pypi','cib-python','cib-pytorch','cib-qgis','cib-qiita','cib-qq','cib-qualcomm','cib-quantcast','cib-quantopian','cib-quarkus','cib-quora','cib-qwiklabs','cib-qzone','cib-r','cib-radiopublic','cib-rails','cib-raspberry-pi','cib-react','cib-readme','cib-read-the-docs','cib-realm','cib-reason','cib-redbubble','cib-reddit','cib-reddit-alt','cib-redhat','cib-redis','cib-redux','cib-renren','cib-reverbnation','cib-riot','cib-ripple','cib-riseup','cib-rollup-js','cib-roots','cib-roundcube','cib-rss','cib-rstudio','cib-ruby','cib-rubygems','cib-runkeeper','cib-rust','cib-safari','cib-sahibinden','cib-salesforce','cib-saltstack','cib-samsung','cib-samsung-pay','cib-sap','cib-sass','cib-sass-alt','cib-saucelabs','cib-scala','cib-scaleway','cib-scribd','cib-scrutinizerci','cib-seagate','cib-sega','cib-sellfy','cib-semaphoreci','cib-sensu','cib-sentry','cib-server-fault','cib-shazam','cib-shell','cib-shopify','cib-showpad','cib-siemens','cib-signal','cib-sina-weibo','cib-sitepoint','cib-sketch','cib-skillshare','cib-skyliner','cib-skype','cib-slack','cib-slashdot','cib-slickpic','cib-slides','cib-slideshare','cib-smashingmagazine','cib-snapchat','cib-snapcraft','cib-snyk','cib-society6','cib-socket-io','cib-sogou','cib-solus','cib-songkick','cib-sonos','cib-soundcloud','cib-sourceforge','cib-sourcegraph','cib-spacemacs','cib-spacex','cib-sparkfun','cib-sparkpost','cib-spdx','cib-speaker-deck','cib-spectrum','cib-spotify','cib-spotlight','cib-spreaker','cib-spring','cib-sprint','cib-squarespace','cib-stackbit','cib-stackexchange','cib-stackoverflow','cib-stackpath','cib-stackshare','cib-stadia','cib-statamic','cib-staticman','cib-statuspage','cib-steam','cib-steem','cib-steemit','cib-stitcher','cib-storify','cib-storybook','cib-strapi','cib-strava','cib-stripe','cib-stripe-s','cib-stubhub','cib-stumbleupon','cib-styleshare','cib-stylus','cib-sublime-text','cib-subversion','cib-superuser','cib-svelte','cib-svg','cib-swagger','cib-swarm','cib-swift','cib-symantec','cib-symfony','cib-synology','cib-tableau','cib-tails','cib-tapas','cib-teamviewer','cib-ted','cib-teespring','cib-telegram','cib-telegram-plane','cib-tencent-qq','cib-tencent-weibo','cib-tensorflow','cib-terraform','cib-tesla','cib-the-mighty','cib-the-movie-database','cib-tidal','cib-tiktok','cib-tinder','cib-t-mobile','cib-todoist','cib-toggl','cib-topcoder','cib-toptal','cib-tor','cib-toshiba','cib-trainerroad','cib-trakt','cib-travisci','cib-treehouse','cib-trello','cib-tripadvisor','cib-trulia','cib-tumblr','cib-twilio','cib-twitch','cib-twitter','cib-twoo','cib-typescript','cib-typo3','cib-uber','cib-ubisoft','cib-ublock-origin','cib-ubuntu','cib-udacity','cib-udemy','cib-uikit','cib-umbraco','cib-unity','cib-unreal-engine','cib-unsplash','cib-untappd','cib-upwork','cib-usb','cib-v8','cib-vagrant','cib-venmo','cib-verizon','cib-viadeo','cib-viber','cib-vim','cib-vimeo','cib-vimeo-v','cib-vine','cib-virb','cib-visa','cib-visual-studio','cib-visual-studio-code','cib-vk','cib-vlc','cib-vsco','cib-vue-js','cib-wattpad','cib-weasyl','cib-webcomponents-org','cib-webpack','cib-webstorm','cib-wechat','cib-whatsapp','cib-when-i-work','cib-wii','cib-wiiu','cib-wikipedia','cib-windows','cib-wire','cib-wireguard','cib-wix','cib-wolfram','cib-wolfram-language','cib-wolfram-mathematica','cib-wordpress','cib-wpengine','cib-xbox','cib-xcode','cib-xero','cib-xiaomi','cib-xing','cib-x_pack','cib-xrp','cib-xsplit','cib-yahoo','cib-yammer','cib-yandex','cib-yarn','cib-y-combinator','cib-yelp','cib-youtube','cib-zalando','cib-zapier','cib-zeit','cib-zendesk','cib-zerply','cib-zillow','cib-zingat','cib-zoom','cib-zorin','cib-zulip'],
    flag: ['cif-ad','cif-ae','cif-af','cif-ag','cif-al','cif-am','cif-ao','cif-ar','cif-at','cif-au','cif-az','cif-ba','cif-bb','cif-bd','cif-be','cif-bf','cif-bg','cif-bh','cif-bi','cif-bj','cif-bn','cif-bo','cif-br','cif-bs','cif-bt','cif-bw','cif-by','cif-bz','cif-ca','cif-cd','cif-cf','cif-cg','cif-ch','cif-ci','cif-cl','cif-cm','cif-cn','cif-co','cif-cr','cif-cu','cif-cv','cif-cy','cif-cz','cif-de','cif-dj','cif-dk','cif-dm','cif-do','cif-dz','cif-ec','cif-ee','cif-eg','cif-er','cif-es','cif-et','cif-fi','cif-fj','cif-fm','cif-fr','cif-ga','cif-gb','cif-gd','cif-ge','cif-gh','cif-gm','cif-gn','cif-gq','cif-gr','cif-gt','cif-gw','cif-gy','cif-hk','cif-hn','cif-hr','cif-ht','cif-hu','cif-id','cif-ie','cif-il','cif-in','cif-iq','cif-ir','cif-is','cif-it','cif-jm','cif-jo','cif-jp','cif-ke','cif-kg','cif-kh','cif-ki','cif-km','cif-kn','cif-kp','cif-kr','cif-kw','cif-kz','cif-la','cif-lb','cif-lc','cif-li','cif-lk','cif-lr','cif-ls','cif-lt','cif-lu','cif-lv','cif-ly','cif-ma','cif-mc','cif-md','cif-me','cif-mg','cif-mh','cif-mk','cif-ml','cif-mm','cif-mn','cif-mr','cif-mt','cif-mu','cif-mv','cif-mw','cif-mx','cif-my','cif-mz','cif-na','cif-ne','cif-ng','cif-ni','cif-nl','cif-no','cif-np','cif-nr','cif-nu','cif-nz','cif-om','cif-pa','cif-pe','cif-pg','cif-ph','cif-pk','cif-pl','cif-pt','cif-pw','cif-py','cif-qa','cif-ro','cif-rs','cif-ru','cif-rw','cif-sa','cif-sb','cif-sc','cif-sd','cif-se','cif-sg','cif-si','cif-sk','cif-sl','cif-sm','cif-sn','cif-so','cif-sr','cif-ss','cif-st','cif-sv','cif-sy','cif-sz','cif-td','cif-tg','cif-th','cif-tj','cif-tl','cif-tm','cif-tn','cif-to','cif-tr','cif-tt','cif-tv','cif-tw','cif-tz','cif-ua','cif-ug','cif-us','cif-uy','cif-uz','cif-va','cif-vc','cif-ve','cif-vn','cif-ws','cif-xk','cif-ye','cif-za','cif-zm','cif-zw']
};

const ICON_TAB_LABELS = { emoji: 'Emojis', free: 'Free Icons', brand: 'Brand', flag: 'Flags' };
const ICONS = [...ICON_CATEGORIES.emoji, ...ICON_CATEGORIES.free, ...ICON_CATEGORIES.brand, ...ICON_CATEGORIES.flag];

function renderIcon(icon, cls) {
    if (!icon) icon = 'cil-file';
    if (icon.startsWith('cil-') || icon.startsWith('cib-') || icon.startsWith('cif-')) {
        return '<i class="' + icon + (cls ? ' ' + cls : '') + '"></i>';
    }
    return '<span' + (cls ? ' class="' + cls + '"' : '') + '>' + icon + '</span>';
}

function isCssIcon(icon) {
    return icon && (icon.startsWith('cil-') || icon.startsWith('cib-') || icon.startsWith('cif-'));
}

var _LH_B64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABNkAAAbbCAIAAAC8HeWSAAAACXBIWXMAABcSAAAXEgFnn9JSAACfuklEQVR4nOzdi3eV9Z3v8f4vASSAclWBIpCQQIIXUC4JEO4iooCKXFSQO961dbS1tnbGqm1tra2jtpaK01lz5syZ6azVMzM9nVnTm3a02qtjLaIgMOeRbWPMbT/ZJN/fvrxe6726HMjeT5KHfX75HAh8YlRDmyRJ/Td9+d6O216SJEkarD6R/OsbSVKZN6apo23Pc8lPLEmSVE3ZopKkIs268u7kx5UkSaqybFFJUn+NbVmz9MDh5MeVJEmqsmxRSVJ/tW58KPlZJUmSqi9bVJLUZxMvu2bZoSPJzypJklR92aKSpD6bt/Wx5AeVJEmqymxRSVLvTV60LfkpJUmSqjVbVJLUW43tC275RvJTSpIkVWu2qCSpl6Yv35v8iJIkSVWcLSpJ6t6Ypo62vc8nP6IkSVIVZ4tKkro368q7k59PkiSpurNFJUkfa2zLmqUHDic/nyRJUnVni0qSPlbrxoeSH06SJKnqs0UlSR818bJrlh06kvxwkiRJVZ8tKkn6qHlbH09+MkmSpFrIFpUkfdiURduSH0uSJKlGskUlSWdqbF9wyzeSH0uSJKlGskUlSR80ffm+5GeSJEmqnWxRSVLbmKaOtr3PJz+TJElS7WSLSpLamtbdk/xAkiRJNZUtKkm13tjWNUsPHE5+IEmSpJrKFpWkWq9140PJTyNJklRr2aKSVNNNvOzaZYeOJD+NJElSrWWLSlJNN2/r48mPIkmSVIPZopJUu01ZvD35OSRJkmozW1SSarXG9oU7n05+DkmSpNrMFpWkGm368n3JDyFJklSz2aKSVIuNaepo2/t88kNIkiTVbLaoJNViTevuSX4CSZKkWs4WlaSaa2zrmqUHDic/gSRJUi1ni0pSzTV30+eSHz+SJKnGs0UlqbaaeNm1yw4dSX78SJKkGs8WlaTaat62x5OfPZIkSbaoJNVQUxZvT37wSJIkddiiklRDNbYv3Pl08oNHkiSpwxaVpNppxor9yU8dSZKkQraoJNVEY5o62vY+n/zUkSRJKmSLSlJN1LTu3uRHjiRJUme2qCRVf2Nb1yw9cDj5kSNJktSZLSpJ1d/cTZ9Lft5IkiR1zRbtu8a2sZdde/6yPVOvvHfahgcvuvahadd8Zuq6+y7s2Dtu/qZRjUvSv4e1Vswdcd9VdU2ad+2yQ0eSnzeSJEldK68tOmb2ygtXHui/8Qu29PckjUuKPsPopmX9vxvZFJm+8aE5+16Ye9vf9NWc/Yenb/78uHmb+nySSzYUfU9KblLbLYP8nB17+/+cZJ+00p75go69k9puHjd/86hZpa+4QbkjkVfJ+enKPjM9H1vf0Hbhiv1FH5u9t8EvT1Vu87Y9nvywkSRJ6lZ5bdHsy+t+ZkChWTc/1c8zjG5aXvQZxrSs6evh4+ZtnLnl0aLP0LWZNz72wdDq8VTZBhvQ8wyohq2PD+4TZgOs/1uTfdLO8hItB15s2Pbl85feOnogv7U4iHck8io5P13ZJ6S3V8E1eR47fv51yV+wqoimLN6e/KSRJEnqWeVt0axzW1b39Qxns0Unr7mj9eCRElZW9qgpa+6s//iz2aJ9NXv3sxMW3Jjn18Pg3pHIq5zNFr1w5YFc96sx/QtWFVBj+8KdTyc/aSRJknpWkVv0/GW7+3qG0rbo6FnLBvrbYj2bueVL2fN0Pqct2k+th16aeuW9/VxuKO5I5FXOZovOuP4viz5wxqYvJH+1qiKasWJ/8mNGkiSp1ypyi06/rs8vxEvYovUN7TNvKP7Vf65ZcsNfZc9WeFpbtGiTV93e67WG6I5EXqXkLVrf0Nb/N6wWOn/prclfrSr/xjR3tO19PvkxI0mS1GsVuUX7+QOKJWzRaVc/MIj7atqGBwpPa4vmacIV1/e81hDdkcirlLxF87wEWg+9NGbOquSvVpV/TevuTX7GSJIk9VVFbtGs8Zf3/tfGDHSLZlto0PdV4W/6tUXzNOumr3f7fsuhuyORVyl5i1648mDRRzXueDL5S1Xl37jWtUsPHE5+xkiSJPVVpW7RqVfe3eszDGiLZiso20KDvkmabn6qvqHdFs3ZpPZbOq8ypHck8iolb9E8f2x4ytq7kr9UVf7N3fRw8gNGkiSpnyp1i87a8bVen2FAW3TSkl2DPkgKXbD0Vls0ZzNu+KvOqwzpHYm8SmlbNJuyeb5ZdNy8jclfqirzJs3buOzQkeQHjCRJUj9V6hb94FvmZq/s+QwD2qLZEhiiTdK4/au2aN5L7/9u53f/Dukd6fxYAq5S2hYdN6/4r/85e7+d89+qUS03b9sTyU8XSZKk/qvULZo1acmuns+Qf4uOaV6RDdr8l2s58GL+N86eefLKQ0M0eOZW1xbNOm/uuoA7Uvj/vAi6SklbNM+vmekbP5f8daoyb8ri7cmPFkmSpKJV8Ba9aOPDPZ8h/xaduGhbzgtlX/2f27o2e8iYOaumbcj7l6/mf8sSyrlFs4XZdPNTeWrc/pX+b03OcdW08+mJbTdlTVp80wUr9mX/Z55HTVhwQ8Admbh4R9hVStuiM28o/o+ddv32WqmXGtsX7nw6+dEiSZJUtAreor3+YcX8W3TyqtvyXKVxx5PdrpLzT3hOXXvP+Pmbe+2Cjj25ttCmh/t6hvGX5/prYLNnGKxbU9q4ylZcnt9XnLh4e8AdmbL69rCrlPDpqm9ob9n/3f7fvvXgkTHNK5K/TlXOzVixP/m5IkmSlKcK3qJze/tLXPJv0U9e9ek8l5i67p5ul5h65d15Hjht/f19fZjZu53nGT551X19PUPOqZN8i47K9zfWTmy7KeyOxFylhE9Xnl8VDduK/Pa1arwxzR3te7+d/FyRJEnKU2Vv0Slr7uz2DPm36LQND+a5xOTVt3W7xORVub4R9KJrPtvXh1lTW7Rh6xNFH1XYojF3JOYqJXy68vyGbeE3XaW+ar7qvuSHiiRJUs4qe4v2/C7H/Fv0omuGeJNca4t+UJ5vbS1s0Zg7EnOVEj5dM274q6JvP/aya5K/SFW2jWtdu/TA4eSHiiRJUs4qe4v2/PY5W7RrtmjPO1KmW7Sxreg3i87e/VzyV6jKubmbH05+okiSJOWvsrfo3A/+WtGbuz6DLdo1W7TnHSnPLZrnl8RF134m+StUZdukeRuXHTqS/ESRJEnKX8Vv0W6Tzxbtmi3a846U5xadvOr24p+lM/9ajNRr87c9kfw4kSRJGlAVv0Vn73m+6zPYol2zRXvekfLcojO3fKn/t2w5+OLopo7kr1CVZ1PbdiQ/SyRJkgZaxW/RrLGXbuh8Blu0a7ZozztSllu0fU6xbxZtuPHx5C9PlWmN7Qt3Pp38LJEkSRpo1bBFJ6/66B+6sEW7Zov2vCNluEXHzdtU/P1ZeSj5y1Pl2YwV+5MfJJIkSSVUDVu0YesTnc9gi3bNFu15R8pwi05ZXfybRcdefHXyl6fKsHObl7fv/Xbyg0SSJKmEqmGLthw80vmtdLZo12zRnnekDLdoQ7FvFp2965nkr02VZ81X3Zf8FJEkSSqtatiiWZMW7Sg8gy3atUrZohMWbgu7I+W3Rdtb9h/u/82mbXgg+WtTZdi41rVLDxxOfopIkiSVVpVs0WkbHiw8gy3atfLYok8UfdS4+ZvD7ki5bdHx8zcXfbPCVpe6NXfzw8mPEEmSpJKrki3afOtfF57BFu1aOWzRWTd9veijsrsWdkfKbYtOXnNH/2/TcuB7o2YtTf7aVLk1ad7GZYeOJD9CJEmSSq5KtujcP//lLrZot6kzcfH2vqpvaM9/a0rbomOaV2RTqv+HZGO18Ma1uUVn3vhY/28zc8ujyV+YKsPmb/ty8vNDkiTpbKqeLXrhyoOjbNGBNHrWsvy3JucVG3c8mb1l1rktq7MPc2axv5Una8rqD/9Jnhrcotmnq+hWn7L2ruQvTJVbU9t2JD88JEmSzrLq2aIzb3xslC06kIZiiw60OfteGD17ReESNbhFiw7RrOmbP5/8hakyq33hrm8mPzwkSZLOssrbon39paMtB14c3bTMFs1fOWzR85fu6rxEDW7RPM3e/WzyF6bKp/rs/wG5eP2caz+rAbXjoSOf/sa/5Okvvvmvn3nmR5IkKaDK26Izrnukr5+auHi7LZq/tFu05cCLF3bs7XoJW7Svzm1dm/y1qTIp26LD599S1363hqIRS+/591d+8z8AQIjK26KT2nf29VPTrnnQFs1fqi3acvDFGZu+cN7FV3W7hC3aV9mv+eSvTZVP9Y1L6xYeTD7bqrLPP/tPqQ9lAKghlbdFx8xeOWffC73+VPOtfz26uaP4M9iiZ0q1RRu2fWX85Zt7XsIW7fNXwtX3J39tqqwa2byqru3O5Mutylp/z7dOnz6d+lAGgBpSeVt0dNPyizZ9rq+fHT9/c9FnsEU//Ewm/TO60zc+NLqpo+slbNG+mnXT15K/NlVundN6bfLxVk01bP782++8l/pEBoDaUpFbdOLiHX397NQr7y76DLboh5/J1H930awdT2Z3s/MStmhftR48MrppADdLNdLweTuST7jqaNTyT/2/l3+d+jgGgJpTkVt0VOPSOfu/29e8KfoMtuiHn8nUWzRrxvVf7LyELdpPExbckPzlqXKrvmHJsAX7kg+5KuhrL/1r6rMYAGpRZW7Rhrbp132h159tPfRS0WewRT/8TJbBFv1gZV1xfeEStmg/TVlzR/KXp8qwkU0r6hbfnnzLVXTbPvud1AcxANSoSt2i/fxtukWrnS0647pHsk9XXw3o1uS8YvPOp89fsvNMuyavuq1597PF38k//9aoLdpPM7c8mvzlqfLsnJb1dW13JV90FdrF2x899t6J1AcxANSoSt2io2ctaznwvdK+rK+dLTp908ODdWtyXrFh25e7Puq8i68q+jvV2X0c1dAedkcqdIvO2fdCfeqXp8q2EZduTT7qKrGxq+//xet/SH0KA0DtqtQtmjXzhkdL+7LeFi2h0rZoVtMt3yz6qLGXbAi7IxW6RbPOu/Tq5K9QlWf1De3DrtidfNpVXC/843+mPoIBoKZV8Ba9YNme0r6mt0VLqOQt2rj1iaKPmrBgS9gdKc8t2nTzN4q+zQUde5K/QlW21c/qqFt8W/J1V0Ed/NLfpD5/AaDWVfAWHTNnVZ6/qahntmgJlbxFG7Y+XvRRExfvCLsjZbhFWw8embRkV45nfij5K1Tl3Mg5V/rG0Zwt2v3l4++fTH3+AkCtq+AtmtW4/Sv5v+LvzBYtoaHdom03hd2RMtyijVufGDNnddE3a9r1reSvUJV5Iy65LvnMK//OX/fgG394O/XhCwBU+BadvOq2/F/xd2aLlpAtOnRb9MJVh7KHzN7zfNG3HDN7ZfIXqcq5+oa2YZfvSj72yrnhS+75+397JfXJCwB8oLK36Llzr8r/Ff9HX9DbogPPFh26LXrexeuzh8zc8qWibzlp0Y7kL1KVefWNS+sWHUw++cq2B57+h9THLgDwocreollNO5/O/0V/IVu0hGzRIdqizbueKTz/1HX3Ff8lsa7PXxJSZyObV9e13Zl89ZVhq2576vTp06mPXQDgQxW/RaeuuyfnF/2d2aIlZIsO0Rb95Pq/KDz/pPZbir5xY49Pr9Rr58zdmHz4lVvTrv3cm28fS33mAgAfqfgtmnPXdc0WLSFbdIi2aOHfs8k67+Lif+C85cD3RjcuSf46VUU0fN5Nyedf+TRy2b3/8tPXUx+4AMDHVPwWzZq9+7mcX/cXskVLyBYdii06Z//hzm1Z39DWsv9w0YeMm7cp+etUFVF9w5JhC/cnH4Fl0mPf/WHq0xYA6K4atui0fOuiM1u0hGzRodii3f7MbeP2rxZ/x1YeSv46VaU0smll3eI7ku/A5G2+/9nURy0A0Itq2KITFtyY5+v+zmzRErJFh2KLdvt0TdvwQNGHzLjukeSvU1VQ57RcnXwKpm32li8effd46qMWAOhFNWzRUY1L5ux7Ic+X/oVs0RKyRQO26AUde4o+ZPae55O/TlVZDb9sW/JBmKoxKz/1k1d/l/qcBQB6VxVbtKFt+ubP5/nSv1Bhi067uvjvQZ3ZJLd3u9aF+TbJtGse7OvDrK0tuu3LRR9V2KIxdyTmKqV9unL+wjhv7pXJX6qqoOob2oct2JN8Fibpmf/149SHLADQpyrZopPad+b5Ir5QYYvm/MdgLuoxKXOOmX7+Kcia2qJNO79V9FGFLRpzR2KuUuKnq3Fp68EjRR81acmu5C9VVVb1s5bXLb4t+TIM7tZHvpf6hAUA+lMlWzT7wZaDL+b56n/un7donj8PmdWy/7vnzV3XeaFzW9bM2fedPA+8oGNvXx9m2BZt3v3s9Ou+kKeLrn2o/1tT2riasGhrnkdNXLg17I7EXKXk6T7rlm8UfdS0DQ8kf6mq4ho5Z11d213J92FY825+7Pj7J1OfsABAf6pki2bN3PKlPF/9z/3zFs3/D5PO2X942vr7L1i+b+q6+3IOkqxx8zf39WGGbdH8zdn3Qv+3Ju8/UrL324VxO+O6Rxq2fSXP7/Kd+VxtCrsjMVcpeYtetOlzRR816+ankr9UVYmNuOSG5BMxpglrH3j1t2+lPl4BgCKqZ4te0LE351oobNH6hvYB/Y1HAyqbMaMa2vv6MKt4i5bWmOaVYXck5iolb9HJK4t/V2q28Pt6FUj9VN/QNuzyXcmHYkDf/+HPU5+tAEBx1bNFs6/+Ww+9lGv5nNmiWRdd+5kh2iT9/CW6o2zRj9e861udV4m5IwFXKXmLTrhiS54HTlh4Y/JXqyqx+sZldYsOJd+KQ9rdX/271AcrAJBL9WzRrMYdT+b5Or5zi469dEPOP0Q6oLLnHHfpNf18mLboxz7M9Z/+6BdAyB0JuErJW3RM84o8D5yy9q7kr1ZVaCNnr6lruzP5Yhyilh148uSpU6kPVgAgl6raolNW357n6/jOLTpqaH6LbFq/vyk6yhbtUsvBI+ddfFXXC8XckaG+SslbNKt597PFH3jjY8lfrarcRszdlHw0DkVTrv7s7/77aOpTFQDIq6q26NiLr84zALpu0TFzVg3udw+27P/uuXNW9f9h2qIffYxX39/9QiF3ZKivcjZbdMb1f1n8fu0/XN/3NyRLRRs+/+bk03FwG7H0nn/+j1dTH6kAwABU1RbNatpV/F+z7LpFsyYs2JL/34MpMkgOHsnzjXy2aKHZu54Z07yi57Vi7siQXuVstuiUtXfneezYy/r7c+BS/9U3Lhm28EDyATmIPfLcD1KfpwDAwFTbFs32W9Fn6LZFs85fumtQNkn2PHk+TFt07pl//aXbn86NvyNDd5Wz2aITF+/I89gLlu9L/oJVRTeyaWVd2x3JN+SgdPU93zp9+nTq8xQAGJhq26Lj528u+gw9t+ioMwPgbP7QZvbY7Blyfpi26Kybvn7exev7v2LMHRmiq5zNFj239co8j71o48PJX7Cq9M5p3ZB8Rp59DZs///Y776U+TAGAAau2LVrf0DZ7z/P9P0OvW3TUBxtgbeO2L5eyrLZ/NdsP+T/MWt6is3c/N3nNHaMal+T5RMXckaG4ytls0aw887j51mcSvlRVNQ2/bHvyMXk2jVr+qR+//JvUJykAUIpq26KjcvwVqX1t0UITF25t3P7VvGvkpq9NXLx9oB9mTW3RlgPfa979bPYp/eT6T5/5XA34b9wJuCODfpWz3KINW5/I8/Axc1YP7gtQNVh9Q/uwBXuTT8qS+/r3/y31MQoAlKi8tmj5NH7+5mnr72+6+anWQy/13ABNt3xz2oYHxl9xQ/L3s3aKuSPuu2qw+lnL6xbfnnxVltD2h76T+gwFAEpnixZr1tKxl6wff/l1ExbcOP6K68deumH0rGXp36taLuaOuO+qpc6Zc1Vd213Jt+WAumTHo8feO5H6DAUASmeLSpLaRly6Jfm8zN/Y1fe//PqbqQ9QAOCs2KKSpA/+4rdhV+xOPjJz9sI//mfq0xMAOFu2qCTpg+pnLatbdCj5zizawcf+JvXRCQAMAltUkvRhI2evLfNvHF285ysn3j+Z+ugEAAaBLSpJ+qgRF29OPjj76vyrHnzjD2+nPjcBgMFhi0qSPqq+oW34/FuSz86eDV9yz//+0SupD00AYNDYopKkj1XfuLRu4YHk47NbD37zH1KfmADAYLJFJUndG9m8qq7tzuT7s7PVt3/j9OnTqU9MAGAw2aKSpF46p/Wa5BO00EUbH37z7WOpj0sAYJDZopKk3hs+b0fyITpy2b3/+rPXU5+VAMDgs0UlSb1X37Bk2IJ9abfo44d/mPqgBACGhC0qSeqzkU0r6hbfnmqIXvcXz6U+JQGAoWKLSpL665yW9XVtd8UP0dlbvnj03eOpT0kAYKjYopKkIo249MbgITpm5ad++trvUx+RAMAQskUlSUWqb2gbdsXuyC367N//e+rzEQAYWraoJKl49bM66hbdFjNEd3/xxdSHIwAw5GxRSVKuRs6+MuAbR+ff8vjx90+mPhwBgCFni0qS8jbi4uuGdIhOWPvAa799K/XJCABEsEUlSXmrb2gbfvnOoduif/t/f576WAQAgtiikqQBVN+4tG7RwaEYovc8+Xepz0QAII4tKkkaWCObV9e13Tm4Q7TjwNdOnjqV+kwEAOLYopKkAXfO3I2DOESnbnjo92+9k/pABABC2aKSpFIaPu+mQRmi5yy795//49XUpyEAEM0WlSSVUn3DkmEL95/9Fn3kuR+kPgoBgARsUUlSiY1sWlm3+I6zGaIb7n3m9OnTqY9CACABW1SSVHrntFxd8hBtvP4Lb7/zXupzEABIwxaVJJ1VIy7bWsIQHb3iUz9++TepD0EAIBlbVJJ0VtU3tA+7Ys9At+hT3/9R6hMQAEjJFpUknW31szrqFt+Wf4jueOiF1McfAJCYLSpJGoRGzllX13ZXniF6yY5Hj713IvXxBwAkZotKkganEZdcX3SIjl19/ytvvJn67AMA0rNFJUmDU31D27DLd/W/RQ//4CepDz4AoCzYopKkQau+cVndokN9DdFDj38/9akHAJQLW1SSNJiNnL2mru3OnkN08Z6vvH/yVOpTDwAoF7aoJGmQGzF3U7chev66B3/95p9SH3kAQBmxRSVJg9/w+Td3DtFhS+7+hx/9MvV5BwCUF1tUkjT41TcuGbZwf2GLfuab/yf1YQcAlJ1P/PyV1yRJGvRe+qcfj1p+38pDXzt9+nTqww4AKDufSP0OAFC1fvTzN46+ezz1ewEAlCNbFAAAgGi2KAAAANFsUQAAAKLZogAAAESzRQEAAIhmiwIAABDNFgUAACCaLQoAAEA0WxQAAIBotigAAADRbFEAAACi2aIAAABEs0UBAACIZosCAAAQzRYFAAAgmi0KAABANFsUAACAaLYoAAAA0WxRAAAAotmiAAAARLNFAQAAiGaLAgAAEM0WBQAAIJotCgAAQDRbFAAAgGi2KAAAANFsUQAAAKLZogAAAESzRQEAAIhmiwIAABDNFgUAACCaLQoAAEA0WxQAAIBotigAAADRbFEAAACi2aIAAABEs0UBAACIZosCAAAQzRYFAAAgmi0KAABANFsUAACAaLYoAAAA0WxRAAAAotmiAAAARLNFAQAAiGaLAgAAEM0WBQAAIJotCgAAQDRbFAAAgGi2KAAAANFsUQAAAKLZogAAAESzRQEAAIhmiwIAABDNFgUAACCaLQoAAEA0WxQAAIBotigAAADRbFEAAACi2aIAAABEs0UBAACIZosCAAAQzRYFAAAgmi0KAABANFsUAACAaLYoAAAA0WxRAAAAotmiAAAARLNFAQAAiGaLAgAAEM0WBQAAIJotCgAAQDRbFAAAgGi2KAAAANFsUQAAAKLZogAAAESzRQEAAIhmiwIAABDNFgUAACCaLQoAAEA0WxQAAIBotigAAADRbFEAAACi2aIAAABEs0UBAACIZosCAAAQzRYFAAAgmi0KAABANFsUAACAaLYoAAAA0WxRAAAAotmiAAAARLNFAQAAiGaLAgAAEM0WBQAAIJotCgAAQDRbFAAAgGi2KAAAANFsUQAAAKLZogAAAESzRQEAAIhmiwIAABDNFgUAACCaLQoAAEA0WxQAAIBotigAAADRbFEAAACi2aIAAABEs0UBAACIZosCAAAQzRYFAAAgmi0KAABANFsUAACAaLYoAAAA0WxRAAAAotmiAAAARLNFAQAAiGaLAgAAEM0WBQAAIJotCgAAQDRbFAAAgGi2KAAAANFsUQAAAKLZogAAAESzRQEAAIhmiwIAABDNFgUAACCaLQoAAEA0WxQAAIBotigAAADRbFEAAACi2aIAAABEs0UBAACIZosCAAAQzRYFAAAgmi0KAABANFsUAACAaLYoAAAA0WxRAAAAotmiAAAARLNFAQAAiGaLAgAAEM0WBQAAIJotCgAAQDRbFAAAgGi2KAAAANFsUQAAAKLZogAAAESzRQEAAIhmiwIAABDNFgUAACCaLQoAAEA0WxQAAIBotigAAADRbFEAAACi2aIAAABEs0UBAACIZosCAAAQzRYFAAAgmi0KAABANFsUAACAaLYoAAAA0WxRAAAAotmiAAAARLNFAQAAiGaLAgAAEM0WBQAAIJotCgAAQDRbFAAAgGi2KAAAANFsUQAAAKLZogAAAESzRQEAAIhmiwIAABDNFgUAACCaLQoAAEA0WxQAAIBotigAAADRbFEAAACi2aIAAABEs0UBAACIZosCAAAQzRYFAAAgmi0KAABANFsUAACAaLYoAAAA0WxRAAAAotmiAAAARLNFAQAAiGaLAgAAEM0WBQAAIJotCgAAQDRbFAAAgGi2KAAAANFsUQAAAKLZogAAAESzRQEAAIhmiwIAABDNFgUAACCaLQoAAEA0WxQAAIBotigAAADRbFEAAACi2aIAAABEs0UBAACIZosCAAAQzRYFAAAgmi0KAABANFsUAACAaLYoAAAA0WxRAAAAotmiAAAARLNFAQAAiGaLAgAAEM0WBQAAIJotCgAAQDRbFAAAgGi2KAAAANFsUQAAAKLZogAAAESzRQEAAIhmiwIAABDNFgUAACCaLQoAAEA0WxQAAIBotigAAADRbFEAAACi2aIAAABEs0UBAACIZosCAAAQzRYFAAAgmi0KAABANFsUAACAaLYoAAAA0WxRAAAAotmiAAAARLNFAQAAiGaLAgAAEM0WBQAAIJotCgAAQDRbFAAAgGi2KAAAANFsUQAAAKLZogAAAESzRQEAAIhmiwIAABDNFgUAACCaLQoAAEA0WxQAAIBotigAAADRbFEAAACi2aIAAABEs0UBAACIZosCAAAQzRYFAAAgmi0KAABANFsUAACAaLYoAAAA0WxRAAAAotmiAAAARLNFAQAAiGaLAgAAEM0WBQAAIJotCgAAQDRbFAAAgGi2KAAAANFsUQAAAKLZogAAAESzRQEAAIhmiwIAABDNFgUAACCaLQoAAEA0WxQAAIBotigAAADRbFEAAACi2aIAAABEs0UBAACIZosCAAAQzRYFAAAgmi0KAABANFsUAACAaLYoAAAA0WxRAAAAotmiAAAARLNFAQAAiGaLAgAAEM0WBQAAIJotCgAAQDRbFAAAgGi2KAAAANFsUQAAAKLZogAAAESzRQEAAIhmiwIAABDNFgUAACCaLQoAAEA0WxQAAIBotigAAADRbFEAAACi2aIAAABEs0UBAACIZosCAAAQzRYFAAAgmi0KAABANFsUAACAaLYoAAAA0WxRAAAAotmiAAAARLNFAQAAiGaLAgAAEM0WBQAAIJotCgAAQDRbFAAAgGi2KAAAANFsUQAAAKLZogAAAESzRQEAAIhmiwIAABDNFgUAACCaLQoAAEA0WxQAAIBotigAAADRbFEAAACi2aIAAABEs0UBAACIZosCAAAQzRYFAAAgmi0KAABANFsUAACAaLYoAAAA0WxRAAAAotmiAAAARLNFAQAAiGaLAgAAEM0WBQAAIJotCgAAQDRbFAAAgGi2KAAAANFsUQAAAKLZogAAAESzRQEAAIhmiwIAABDNFgUAACCaLQoAAEA0WxQAAIBotigAAADRbFEAAACi2aIAAABEs0UBAACIZosCAAAQzRYFAAAgmi0KAABANFsUAACAaLYoAAAA0WxRAAAAotmiAAAARLNFAQAAiGaLAgAAEM0WBQAAIJotCgAAQDRbFAAAgGi2KAAAANFsUQAAAKLZogAAAESzRQEAAIhmiwIAABDNFgUAACCaLQoAAEA0WxQAAIBotigAAADRbFEAAACi2aIAAABEs0UBAACIZosCAAAQzRYFAAAgmi0KAABANFsUAACAaLYoAAAA0WxRAAAAotmiAAAARLNFAQAAiGaLAgAAEM0WBQAAIJotCgAAQDRbFAAAgGi2KAAAANFsUQAAAKLZogAAAESzRQEAAIhmiwIAABDNFgUAACCaLQoAAEA0WxQAAIBotigAAADRbFEAAACi2aIAAABEs0UBAACIZosCAAAQzRYFAAAgmi0KAABANFsUAACAaLYoAAAA0WxRAAAAotmiAAAARLNFAQAAiGaLAgAAEM0WBQAAIJotCgAAQDRbFAAAgGi2KAAAANFsUQAAAKLZogAAAESzRQEAAIhmiwIAABDNFgUAACCaLQoAAEA0WxQAAIBotigAAADRbFEAAACi2aIAAABEs0UBAACIZosCAAAQzRYFAAAgmi0KAABANFsUAACAaLYoAAAA0WxRAAAAotmiAAAARLNFAQAAiGaLAgAAEM0WBQAAIJotCgAAQDRbFAAAgGi2KAAAANFsUQAAAKLZogAAAESzRQEAAIhmiwIAABDNFgUAACCaLQoAAEA0WxQAAIBotigAAADRbFEAAACi2aIAAABEs0UBAACIZosCAAAQzRYFAAAgmi0KAABANFsUAACAaLYoAAAA0WxRAAAAotmiAAAARLNFAQAAiGaLAgAAEM0WBQAAIJotCgAAQDRbFAAAgGi2KAAAANFsUQAAAKLZogAAAESzRQEAAIhmiwIAABDNFgUAACCaLQoAAEA0WxQAAIBotigAAADRbFEAAACi2aIAAABEs0UBAACIZosCAAAQzRYFAAAgmi0KAABANFsUAACAaLYoAAAA0WxRAAAAotmiAAAARLNFAQAAiGaLAgAAEM0WBQAAIJotCgAAQDRbFAAAgGi2KAAAANFsUQAAAKLZogAAAESzRQEAAIhmiwIAABDNFgUAACCaLQoAAEA0WxQAAIBotigAAADRbFEAAACi2aIAAABEs0UBAACIZosCAAAQzRYFAAAgmi0KAABANFsUAACAaLYoAAAA0WxRAAAAotmiAAAARLNFAQAAiGaLAgAAEM0WBQAAIJotCgAAQDRbFAAAgGi2KAAAANFsUQAAAKLZogAAAESzRQEAAIhmiwIAABDNFgUAACCaLQoAAEA0WxQAAIBotigAAADRbFEAAACi2aIAAABEs0UBAACIZosCAAAQzRYFAAAgmi0KAABANFsUAACAaLYoAAAA0WxRAAAAotmiAAAARLNFAQAAiGaLAgAAEM0WBQAAIJotCgAAQDRbFAAAgGi2KAAAANFsUQAAAKLZogAAAESzRQEAAIhmiwIAABDNFgUAACCaLQoAAEA0WxQAAIBotigAAADRbFEAAACi2aIAAABEs0UBAACIZosCAAAQzRYFAAAgmi0KAABANFsUAACAaLYoAAAA0WxRAAAAotmiAAAARLNFAQAAiGaLAgAAEM0WBQAAIJotCgAAQDRbFAAAgGi2KAAAANFsUQAAAKLZogAAAESzRQEAAIhmiwIAABDNFgUAACCaLQoAAEA0WxQAAIBotigAAADRbFEAAACi2aIAAABEs0UBAACIZosCAAAQzRYFAAAgmi0KAABANFsUAACAaLYoAAAA0WxRAAAAotmiAAAARLNFAQAAiGaLAgAAEM0WBQAAIJotCgAAQDRbFAAAgGi2KAAAANFsUQAAAKLZogAAAESzRQEAAIhmiwIAABDNFgUAACCaLQoAAEA0WxQAAIBotigAAADRbFEAAACi2aIAAABEs0UBAACIZosCAAAQzRYFAAAgmi0KAABANFsUAACAaLYoAAAA0WxRAAAAotmiAAAARLNFAQAAiGaLAgAAEM0WBQAAIJotCgAAQDRbFAAAgGi2KAAAANFsUQAAAKLZogAAAESzRQEAAIhmiwIAABDNFgUAACCaLQoAAEA0WxQAAIBotigAAADRbFEAAACi2aIAAABEs0UBAACIZosCAAAQzRYFAAAgmi0KAABANFsUAACAaLYoAAAA0WxRAAAAotmiAAAARLNFAQAAiGaLAgAAEM0WBQAAIJotCgAAQDRbFAAAgGi2KAAAANFsUQAAAKLZogAAAESzRQEAAIhmiwIAABDNFgUAACCaLQoAAEA0WxQAAIBotigAAADRbFEAAACi2aIAAABEs0UBAACIZosCAAAQzRYFAAAgmi0KAABANFsUAACAaLYoAAAA0WxRAAAAotmiAAAARLNFAQAAiGaLAgAAEM0WBQAAIJotCgAAQDRbFAAAgGi2KAAAANFsUQAAAKLZogAAAESzRQEAAIhmiwIAABDNFgUAACCaLQoAAEA0WxQAAIBotigAAADRbFEAAACi2aIAAABEs0UBAACIZosCAAAQzRYFAAAgmi0KAABANFsUAACAaLYoAAAA0WxRAAAAotmiAAAARLNFAQAAiGaLAgAAEM0WBQAAIJotCgAAQDRbFAAAgGi2KAAAANFsUQAAAKLZogAAAESzRQEAAIhmiwIAABDNFgUAACCaLQoAAEA0WxQAAIBotigAAADRbFEAAACi2aIAAABEs0UBAACIZosCAAAQzRYFAAAgmi0KAABANFsUAACAaLYoAAAA0WxRAAAAotmiAAAARLNFAQAAiGaLAgAAEM0WBQAAIJotCgAAQDRbFAAAgGi2KAAAANFsUQAAAKLZogAAAESzRQEAAIhmiwIAABDNFgUAACCaLQoAAEA0WxQAAIBotigAAADRbFEAAACi2aIAAABEs0UBAACIZosCAAAQzRYFAAAgmi0KAABANFsUACrJydOnjp468YeT7/7qxNFXT/wp67UTR984cfTNk+8dP3Uy9XsHAHnZogDV7/333//Tn/705ptv/v73v3/rrbfeeeed06dPp36nhlD20R07duyPf/zjH854++23T5w4EfDYIXX89Klsbb7x/juF/dlXb508Xt03F4CqYYsClJ1Tp069/PLLv/zlL3/+Z6+++mq3t8m25U+6+OlPf5oNzp5PdfTo0VdeeaXwNtnz/OxnP8veMvvv7D+yUdrtjX/3u991e86ffFz2qOwd++kZ2TtQeNSvfvWrwo9kP9vt4Z3PkH1EeT7wX//6112fIXuHs3e+8MzZf//Xf/1XNg77f6rsZ3/zm98Urpv9b/aoznfjtdde6/VTdJaPzW7Tz84ofHqz/7Prz2aPKvx4QeGZ33333TyfjY+e5PSpP5x8t9fl+dqJo6+fONr5G6SFfnvymDkKQPmzRQHKzh//+Mdst2TD7I033vjFL36R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R+fz/NP4q61dO58bALyaFgVI9cfvxlwrUk11kj9++QDgv4YWBfgD/mzJCKq38KEBwLvQogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAAAGTTogAA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";

class MyNoteBook {
    constructor() {
        this.pages = [];
        this.currentPage = null;
        this.currentBlocks = [];
        this._selectedPageIcon = 'cil-file';
        this.init();
    }

    _getLetterhead() { return 'data:image/png;base64,' + this._lhB64; }

    async init() {
        this.bindEvents();
        this.initProfileDropdown();
        this.restoreTheme();
        await this.loadPages();
        await this.loadProfile();
        var savedView = localStorage.getItem('nb_currentView');
        var savedPageId = localStorage.getItem('nb_currentPageId');
        if (savedView === 'pages') {
            this.showPages();
        } else if (savedView === 'portal') {
            this.showPortal();
        } else if (savedView === 'notepad') {
            this.showNotepad();
        } else if (savedView === 'page' && savedPageId) {
            this.loadPage(parseInt(savedPageId));
        } else {
            await this.showDashboard();
        }
        await this.initSearchIndex();
        this.startClock();
        document.getElementById('searchInput').value = '';
    }

    refreshIcons() {
        if (typeof lucide !== 'undefined') lucide.createIcons();
    }

    startClock() {
        const update = () => {
            const el = document.getElementById('heroTimezones');
            if (!el) return;
            const now = new Date();
            const pk = now.toLocaleTimeString('en-US', { timeZone: 'Asia/Karachi', hour: '2-digit', minute: '2-digit', hour12: true });
            const us = now.toLocaleTimeString('en-US', { timeZone: 'America/Chicago', hour: '2-digit', minute: '2-digit', hour12: true });
            el.innerHTML = '<span class="tz-item tz-pk">🇵🇰 ' + pk + '</span><span class="tz-divider">|</span><span class="tz-item tz-us">🇺🇸 ' + us + '</span>';
            this.refreshIcons();
        };
        update();
        setInterval(update, 30000);
    }

    restoreTheme() {
        const saved = localStorage.getItem('theme');
        if (saved === 'dark') {
            document.documentElement.setAttribute('data-coreui-theme', 'dark');
            const iconWrap = document.getElementById('themeIcon').parentElement;
            iconWrap.innerHTML = '<i data-lucide="moon" id="themeIcon"></i>';
            lucide.createIcons();
        } else if (!saved) {
            // Follow system preference (CoreUI color-modes.js default)
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            if (prefersDark) {
                document.documentElement.setAttribute('data-coreui-theme', 'dark');
                const iconWrap = document.getElementById('themeIcon').parentElement;
                iconWrap.innerHTML = '<i data-lucide="moon" id="themeIcon"></i>';
                lucide.createIcons();
            }
        }
    }

    bindEvents() {
        document.getElementById('btnDashboard').addEventListener('click', () => { this.showDashboard(); if (window.innerWidth <= 991) this.closeMobileSidebar(); });
        document.getElementById('btnPortal').addEventListener('click', () => { this.showPortal(); if (window.innerWidth <= 991) this.closeMobileSidebar(); });
        document.getElementById('btnNotepad').addEventListener('click', () => { this.showNotepad(); if (window.innerWidth <= 991) this.closeMobileSidebar(); });
        document.getElementById('btnPages').addEventListener('click', () => { this.showPages(); if (window.innerWidth <= 991) this.closeMobileSidebar(); });
        document.getElementById('btnLogout').addEventListener('click', () => this.logout());
        document.getElementById('btnSidebarLogout').addEventListener('click', () => this.logout());
        document.getElementById('btnSidebarToggle').addEventListener('click', () => this.toggleSidebar());
        document.getElementById('appLogo').addEventListener('click', () => this.toggleSidebar());
        document.getElementById('sidebarOverlay').addEventListener('click', () => this.closeMobileSidebar());
        document.getElementById('btnAddPortalLink').addEventListener('click', () => this.addPortalLink());
        document.getElementById('btnNotepadNew').addEventListener('click', () => this.openNotepadNew());
        document.getElementById('notepadSaveBtn').addEventListener('click', () => this.notepadSave());
        document.getElementById('notepadEditBtn').addEventListener('click', () => this.notepadEdit());
        document.getElementById('notepadPrintBtn').addEventListener('click', () => this.notepadPrint());
        document.getElementById('btnNotepadBack').addEventListener('click', () => this.notepadBack());
        document.getElementById('btnAddPageFromPages').addEventListener('click', () => this.showAddPageModal());
        document.getElementById('notepadEditor').addEventListener('click', (e) => {
            if (e.target.tagName === 'IMG') {
                var w = prompt('Enter image width in pixels (e.g. 150, 300):', parseInt(e.target.style.width) || 200);
                if (w && !isNaN(w)) { e.target.style.width = w + 'px'; e.target.style.height = 'auto'; }
            }
        });
        document.getElementById('btnAdminUsers').addEventListener('click', () => this.openAdminUsers());
        document.getElementById('btnProfileUsers').addEventListener('click', () => { this.openAdminUsers(); document.getElementById('profileDropdown').classList.remove('show'); });
        document.getElementById('btnBackup').addEventListener('click', () => { this.openBackupModal(); document.getElementById('profileDropdown').classList.remove('show'); });
        document.getElementById('btnAddBlock').addEventListener('click', () => this.toggleBlockTypeMenu());
        document.getElementById('btnDeletePage').addEventListener('click', () => this.deleteCurrentPage());
        document.getElementById('btnBackToDash').addEventListener('click', () => this.showDashboard());
        document.getElementById('pageTitleInput').addEventListener('blur', (e) => this.updatePageTitle(e.target.value));
        document.getElementById('pageTitleInput').addEventListener('keydown', (e) => {
            if (e.key === 'Enter') e.target.blur();
        });
        document.getElementById('pageIconBtn').addEventListener('click', () => this.toggleIconPicker());
        document.getElementById('btnThemeToggle').addEventListener('click', () => this.toggleTheme());
        document.getElementById('btnNotifications').addEventListener('click', (e) => {
            e.stopPropagation();
            const dd = document.getElementById('notifDropdown');
            const isOpen = !dd.classList.contains('hidden');
            dd.classList.toggle('hidden');
            document.getElementById('msgDropdown').classList.add('hidden');
            if (!isOpen) this.refreshNotifDropdown();
        });
        document.getElementById('btnMessages').addEventListener('click', (e) => {
            e.stopPropagation();
            const dd = document.getElementById('msgDropdown');
            const isOpen = !dd.classList.contains('hidden');
            dd.classList.toggle('hidden');
            document.getElementById('notifDropdown').classList.add('hidden');
            if (!isOpen) this.refreshMsgDropdown();
        });

        document.querySelectorAll('.block-type-option').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const type = e.currentTarget.dataset.type;
                this.showAddBlockModal(type);
                this.hideBlockTypeMenu();
            });
        });

        document.getElementById('taskFilters').addEventListener('click', (e) => {
            const btn = e.target.closest('.task-filter-btn');
            if (!btn) return;
            document.querySelectorAll('.task-filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            this.renderBlocks();
        });

        document.getElementById('btnCloseModal').addEventListener('click', () => this.hideModal());
        document.getElementById('modalOverlay').addEventListener('click', (e) => {
            if (e.target === e.currentTarget) this.hideModal();
        });
        document.getElementById('btnBackDetail').addEventListener('click', () => this.hideDetailView());
        document.getElementById('btnPrintDetail').addEventListener('click', () => this.printDetail());

        const searchInput = document.getElementById('searchInput');
        let searchTimeout;
        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => this.handleSearch(e.target.value), 30);
        });

        searchInput.addEventListener('focus', () => {
            if (searchInput.value) this.handleSearch(searchInput.value);
            else this.showSearchHistory();
        });

        document.addEventListener('click', (e) => {
            if (!e.target.closest('.header-search')) {
                document.getElementById('searchResults').classList.remove('visible');
            }
            if (!e.target.closest('.add-block-bar')) {
                this.hideBlockTypeMenu();
            }
            if (!e.target.closest('.page-icon-wrapper')) {
                document.getElementById('iconPicker').classList.add('hidden');
            }
            if (!e.target.closest('.sidebar-page-item')) {
                this.hideContextMenu();
            }
            if (!e.target.closest('#notifWrap')) {
                document.getElementById('notifDropdown').classList.add('hidden');
            }
            if (!e.target.closest('#msgWrap')) {
                document.getElementById('msgDropdown').classList.add('hidden');
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.hideModal();
                document.getElementById('searchResults').classList.remove('visible');
                document.getElementById('notifDropdown').classList.add('hidden');
                document.getElementById('msgDropdown').classList.add('hidden');
                this.hideContextMenu();
                searchInput.blur();
            }
        });

        document.getElementById('searchInput').addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                e.target.value = '';
                document.getElementById('searchResults').classList.remove('visible');
            }
        });
    }

    async loadPages() {
        try {
            const res = await fetch('/api/pages');
            this.pages = await res.json();
            this.renderPagesList();
            this.refreshIcons();
        } catch (err) {
            console.error('Failed to load pages:', err);
        }
    }

    renderPagesList() {
        const list = document.getElementById('pagesList');
        if (!list) return;
        list.innerHTML = this.pages.map(page => {
            const active = this.currentPage && this.currentPage.id === page.id ? ' active' : '';
            const icon = page.icon || 'cil-file';
            return '<li class="nav-item sidebar-page-item' + active + '" data-id="' + page.id + '" oncontextmenu="window.app.showPageContextMenu(event, ' + page.id + ')">' +
                '<span class="nav-icon-box">' + renderIcon(icon, 'nav-icon-emoji') + '</span>' +
                '<span class="nav-text">' + this.escapeHtml(page.title) + '</span>' +
                '<span class="sidebar-tooltip">' + this.escapeHtml(page.title) + '</span>' +
                '</li>';
        }).join('');

        list.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', () => {
                const pageId = parseInt(item.dataset.id);
                this.loadPage(pageId);
                if (window.innerWidth <= 991) this.closeMobileSidebar();
            });
        });
    }

    showPageContextMenu(e, pageId) {
        e.preventDefault();
        e.stopPropagation();
        this.hideContextMenu();

        const page = this.pages.find(p => p.id === pageId);
        if (!page) return;

        const menu = document.createElement('div');
        menu.className = 'context-menu';
        menu.id = 'contextMenu';
        menu.innerHTML = '<div class="context-menu-item" data-action="edit"><i data-lucide="pencil"></i> Edit Page</div>' +
            '<div class="context-menu-item" data-action="rename"><i data-lucide="type"></i> Rename</div>' +
            '<div class="context-menu-item context-menu-danger" data-action="delete"><i data-lucide="trash-2"></i> Delete</div>';
        menu.style.left = e.clientX + 'px';
        menu.style.top = e.clientY + 'px';
        document.body.appendChild(menu);
        lucide.createIcons();

        menu.querySelectorAll('.context-menu-item').forEach(item => {
            item.addEventListener('click', () => {
                const action = item.dataset.action;
                if (action === 'edit') this.showEditPageModal(pageId);
                else if (action === 'rename') this.startInlineRename(pageId);
                else if (action === 'delete') this.deletePageById(pageId);
                this.hideContextMenu();
            });
        });
    }

    hideContextMenu() {
        const existing = document.getElementById('contextMenu');
        if (existing) existing.remove();
    }

    startInlineRename(pageId) {
        const page = this.pages.find(p => p.id === pageId);
        if (!page) return;
        this.loadPage(pageId).then(() => {
            const input = document.getElementById('pageTitleInput');
            input.focus();
            input.select();
        });
    }

    async deletePageById(pageId) {
        const page = this.pages.find(p => p.id === pageId);
        if (!page) return;
        if (!confirm('Delete "' + page.title + '"? This cannot be undone.')) return;

        try {
            const res = await fetch('/api/pages/' + pageId, { method: 'DELETE' });
            if (res.ok) {
                if (this.currentPage && this.currentPage.id === pageId) {
                    this.currentPage = null;
                }
                await this.loadPages();
                var isPagesView = !document.getElementById('pagesView').classList.contains('hidden');
                if (isPagesView) {
                    this.renderPagesGrid();
                } else {
                    await this.showDashboard();
                }
            }
        } catch (err) {
            console.error('Failed to delete page:', err);
        }
    }

    async     showDashboard() {
        localStorage.setItem('nb_currentView', 'dashboard');
        localStorage.removeItem('nb_currentPageId');
        this.currentPage = null;
        this.renderPagesList();
        document.getElementById('dashboardView').classList.remove('hidden');
        document.getElementById('pageView').classList.add('hidden');
        document.getElementById('detailView').classList.add('hidden');
        document.getElementById('portalView').classList.add('hidden');
        document.getElementById('notepadView').classList.add('hidden');
        document.getElementById('pagesView').classList.add('hidden');
        this.setActiveSidebar('btnDashboard');

        const now = new Date();
        document.getElementById('dashboardDate').textContent = now.toLocaleDateString('en-US', {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
        });

        try {
            const res = await fetch('/api/dashboard-data');
            const data = await res.json();
            this.renderTodayTasks(data.today_tasks);
            this.renderUpcomingReminders(data.upcoming_reminders);
            this.populateNotifDropdown(data.upcoming_reminders);
            this.populateMsgDropdown(data.today_tasks);
            this.refreshIcons();
        } catch (err) {
            console.error('Dashboard load failed:', err);
        }
    }

    showPortal() {
        localStorage.setItem('nb_currentView', 'portal');
        localStorage.removeItem('nb_currentPageId');
        this.currentPage = null;
        this.renderPagesList();
        document.getElementById('dashboardView').classList.add('hidden');
        document.getElementById('pageView').classList.add('hidden');
        document.getElementById('detailView').classList.add('hidden');
        document.getElementById('notepadView').classList.add('hidden');
        document.getElementById('pagesView').classList.add('hidden');
        document.getElementById('portalView').classList.remove('hidden');
        this.renderPortalLinks();
        this.setActiveSidebar('btnPortal');
    }

    showNotepad() {
        localStorage.setItem('nb_currentView', 'notepad');
        localStorage.removeItem('nb_currentPageId');
        this.currentPage = null;
        this.renderPagesList();
        document.getElementById('dashboardView').classList.add('hidden');
        document.getElementById('pageView').classList.add('hidden');
        document.getElementById('detailView').classList.add('hidden');
        document.getElementById('portalView').classList.add('hidden');
        document.getElementById('pagesView').classList.add('hidden');
        document.getElementById('notepadView').classList.remove('hidden');
        this._showNotepadDashboard();
        this.renderNotepadDashboard();
        this.setActiveSidebar('btnNotepad');
    }

    showPages() {
        localStorage.setItem('nb_currentView', 'pages');
        localStorage.removeItem('nb_currentPageId');
        this.currentPage = null;
        this.renderPagesList();
        document.getElementById('dashboardView').classList.add('hidden');
        document.getElementById('pageView').classList.add('hidden');
        document.getElementById('detailView').classList.add('hidden');
        document.getElementById('portalView').classList.add('hidden');
        document.getElementById('notepadView').classList.add('hidden');
        document.getElementById('pagesView').classList.remove('hidden');
        this.renderPagesGrid();
        this.setActiveSidebar('btnPages');
    }

    async renderPagesGrid() {
        const container = document.getElementById('pagesGrid');
        if (!container) return;
        try {
            const res = await fetch('/api/dashboard-data');
            const data = await res.json();
            const pages = data.recent_pages || [];
            if (pages.length === 0) {
                container.innerHTML = '<div class="np-empty">No pages yet. Click "+ New Page"!</div>';
                this.refreshIcons();
                return;
            }
            container.innerHTML = pages.map((p, i) => {
                const colorClass = 'np-card-' + (i % 6);
                const bc = p.block_counts || {};
                const instructions = bc.instruction || 0;
                const tasks = bc.task || 0;
                const reminders = bc.reminder || 0;
                const total = p.total_blocks || 0;
                let statsHtml = '';
                if (total > 0) {
                    statsHtml = '<div class="card-stats" style="margin-top:6px;">';
                    if (instructions > 0) statsHtml += '<span class="card-stat"><i data-lucide="clipboard"></i> ' + instructions + '</span>';
                    if (tasks > 0) statsHtml += '<span class="card-stat"><i data-lucide="check-square"></i> ' + tasks + '</span>';
                    if (reminders > 0) statsHtml += '<span class="card-stat"><i data-lucide="bell"></i> ' + reminders + '</span>';
                    statsHtml += '</div>';
                } else {
                    statsHtml = '<div class="card-stats" style="margin-top:6px;"><span class="card-stat-empty">Empty</span></div>';
                }
                const pageIcon = renderIcon(p.icon || 'cil-file', 'pages-card-icon');
                const created = p.created_at ? this._formatDate(p.created_at) : '';
                const modified = p.last_modified ? this._formatDate(p.last_modified) : created;
                return '<div class="np-card ' + colorClass + '" onclick="window.app.loadPage(' + p.id + ')">' +
                    '<div class="np-card-top">' +
                        '<span class="pages-card-icon-wrap">' + pageIcon + '</span>' +
                        '<div class="np-card-title">' + this.escapeHtml(p.title) + '</div>' +
                    '</div>' +
                    statsHtml +
                    '<div class="np-card-dates">' +
                        '<span>Created: ' + created + '</span>' +
                        '<span>Modified: ' + modified + '</span>' +
                    '</div>' +
                '</div>';
            }).join('');
            this.refreshIcons();
        } catch (err) {
            container.innerHTML = '<div class="np-empty">Failed to load pages</div>';
        }
    }

    async deletePageFromPages(pageId) {
        if (!confirm('Delete this page?')) return;
        try {
            await fetch('/api/pages/' + pageId, { method: 'DELETE' });
            this.renderPagesGrid();
            this.renderPagesList();
        } catch (err) {}
    }

    _formatDate(dateStr) {
        if (!dateStr) return '';
        const d = new Date(dateStr);
        if (isNaN(d)) return dateStr;
        const day = String(d.getDate()).padStart(2, '0');
        const mon = String(d.getMonth() + 1).padStart(2, '0');
        const yr = d.getFullYear();
        return day + '/' + mon + '/' + yr;
    }

    setActiveSidebar(activeId) {
        ['btnDashboard', 'btnPortal', 'btnNotepad', 'btnPages'].forEach(id => {
            document.getElementById(id).classList.remove('active');
        });
        document.getElementById(activeId).classList.add('active');
    }

    renderPortalLinks() {
        const links = JSON.parse(localStorage.getItem('portalLinks') || '[]');
        const container = document.getElementById('portalLinks');
        const defaultIcons = ['cil-file', 'cil-link', 'cil-globe-alt', 'cil-calculator', 'cil-chart-line', 'cil-star'];
        if (links.length === 0) {
            container.innerHTML = '<div class="np-empty"><i data-lucide="external-link" style="width:28px;height:28px;margin-bottom:8px;opacity:0.4;"></i><br>No links yet. Click "+ Add Link"!</div>';
            this.refreshIcons();
            return;
        }
        container.innerHTML = links.map((link, i) => {
            const colorClass = 'np-card-' + (i % 6);
            const noteHtml = link.note ? '<div class="np-card-note">' + this.escapeHtml(link.note) + '</div>' : '';
            const linkIcon = link.icon || defaultIcons[i % defaultIcons.length];
            const iconHtml = renderIcon(linkIcon, 'pages-card-icon');
            const typeHtml = link.type ? '<span class="portal-type-badge">' + this.escapeHtml(link.type) + '</span>' : '';
            var href = link.url;
            if (href && !href.match(/^https?:\/\//i)) href = 'https://' + href;
            return '<div class="np-card ' + colorClass + '">' +
                '<div class="np-card-top">' +
                    '<span class="pages-card-icon-wrap">' + iconHtml + '</span>' +
                    '<div>' +
                        '<div class="np-card-title">' + this.escapeHtml(link.name) + '</div>' +
                        typeHtml +
                    '</div>' +
                '</div>' +
                noteHtml +
                '<a class="np-card-url" href="' + this.escapeHtml(href) + '" target="_blank" rel="noopener" onclick="event.stopPropagation()">' +
                    '<i data-lucide="external-link"></i> ' + this.escapeHtml(link.url) +
                '</a>' +
                '<div class="np-card-footer">' +
                    '<button class="np-card-delete" onclick="event.stopPropagation();window.app.editPortalLink(' + i + ')">&#9998; Edit</button>' +
                    '<button class="np-card-delete" onclick="event.stopPropagation();window.app.removePortalLink(' + i + ')">&#128465; Delete</button>' +
                '</div>' +
            '</div>';
        }).join('');
        this.refreshIcons();
    }

    addPortalLink() {
        this._selectedPortalIcon = 'cil-file';
        const iconGrid = this.renderIconPickerGrid('cil-file', 'portalModalIconGrid');

        this.showModal('Add Portal Link',
            '<div class="form-group">' +
            '<label class="form-label">Choose Icon</label>' +
            iconGrid +
            '</div>' +
            '<div class="form-group">' +
            '<label class="form-label">Link Name</label>' +
            '<input type="text" class="modal-input" id="portalLinkName" placeholder="e.g. Payroll Sheet" autofocus>' +
            '</div>' +
            '<div class="form-group">' +
            '<label class="form-label">Type</label>' +
            '<select class="modal-input" id="portalLinkType">' +
                '<option value="Google Sheet">Google Sheet</option>' +
                '<option value="Portal">Portal</option>' +
                '<option value="Website">Website</option>' +
                '<option value="Document">Document</option>' +
                '<option value="Dashboard">Dashboard</option>' +
                '<option value="App">App</option>' +
                '<option value="Other">Other</option>' +
            '</select>' +
            '</div>' +
            '<div class="form-group">' +
            '<label class="form-label">URL</label>' +
            '<input type="text" class="modal-input" id="portalLinkUrl" placeholder="https://...">' +
            '</div>' +
            '<div class="form-group">' +
            '<label class="form-label">Note (optional)</label>' +
            '<input type="text" class="modal-input" id="portalLinkNote" placeholder="Add a note...">' +
            '</div>',
            '<button class="btn-modal btn-modal-secondary" onclick="window.app.hideModal()">Cancel</button>' +
            '<button class="btn-modal btn-modal-primary" onclick="window.app.savePortalLink()">Add</button>'
        );
        setTimeout(() => {
            const input = document.getElementById('portalLinkName');
            if (input) {
                input.focus();
                input.addEventListener('keydown', (e) => { if (e.key === 'Enter') this.savePortalLink(); });
            }
            this._bindModalIconGrid('portalModalIconGrid', '_selectedPortalIcon');
        }, 100);
    }

    savePortalLink() {
        const name = document.getElementById('portalLinkName').value.trim();
        const url = document.getElementById('portalLinkUrl').value.trim();
        const note = document.getElementById('portalLinkNote').value.trim();
        const type = document.getElementById('portalLinkType').value;
        if (!name) { alert('Please enter a name.'); return; }
        if (!url) { alert('Please enter a URL.'); return; }
        const links = JSON.parse(localStorage.getItem('portalLinks') || '[]');
        links.push({ name, url, note, type, icon: this._selectedPortalIcon || 'cil-file' });
        localStorage.setItem('portalLinks', JSON.stringify(links));
        this.hideModal();
        this.renderPortalLinks();
        this.refreshPortalSearchIndex();
    }

    editPortalLink(index) {
        const links = JSON.parse(localStorage.getItem('portalLinks') || '[]');
        if (!links[index]) return;
        const link = links[index];
        this._editingPortalIndex = index;
        this._selectedPortalIcon = link.icon || 'cil-file';
        const iconGrid = this.renderIconPickerGrid(link.icon || 'cil-file', 'portalModalIconGrid');
        const currentType = link.type || 'Google Sheet';
        const typeOptions = ['Google Sheet', 'Portal', 'Website', 'Document', 'Dashboard', 'App', 'Other']
            .map(t => '<option value="' + t + '"' + (t === currentType ? ' selected' : '') + '>' + t + '</option>')
            .join('');

        this.showModal('Edit Portal Link',
            '<div class="form-group">' +
            '<label class="form-label">Choose Icon</label>' +
            iconGrid +
            '</div>' +
            '<div class="form-group">' +
            '<label class="form-label">Link Name</label>' +
            '<input type="text" class="modal-input" id="portalLinkName" value="' + this.escapeHtml(link.name) + '">' +
            '</div>' +
            '<div class="form-group">' +
            '<label class="form-label">Type</label>' +
            '<select class="modal-input" id="portalLinkType">' + typeOptions + '</select>' +
            '</div>' +
            '<div class="form-group">' +
            '<label class="form-label">URL</label>' +
            '<input type="text" class="modal-input" id="portalLinkUrl" value="' + this.escapeHtml(link.url) + '">' +
            '</div>' +
            '<div class="form-group">' +
            '<label class="form-label">Note (optional)</label>' +
            '<input type="text" class="modal-input" id="portalLinkNote" value="' + this.escapeHtml(link.note || '') + '">' +
            '</div>',
            '<button class="btn-modal btn-modal-secondary" onclick="window.app.hideModal()">Cancel</button>' +
            '<button class="btn-modal btn-modal-primary" onclick="window.app.updatePortalLink()">Save Changes</button>'
        );
        setTimeout(() => {
            const input = document.getElementById('portalLinkName');
            if (input) { input.focus(); input.select(); }
            this._bindModalIconGrid('portalModalIconGrid', '_selectedPortalIcon');
        }, 100);
    }

    updatePortalLink() {
        const name = document.getElementById('portalLinkName').value.trim();
        const url = document.getElementById('portalLinkUrl').value.trim();
        const note = document.getElementById('portalLinkNote').value.trim();
        const type = document.getElementById('portalLinkType').value;
        if (!name || !url) { alert('Name and URL are required.'); return; }
        const links = JSON.parse(localStorage.getItem('portalLinks') || '[]');
        if (links[this._editingPortalIndex]) {
            links[this._editingPortalIndex] = { name, url, note, type, icon: this._selectedPortalIcon || 'cil-file' };
            localStorage.setItem('portalLinks', JSON.stringify(links));
        }
        this.hideModal();
        this.renderPortalLinks();
    }

    removePortalLink(index) {
        if (!confirm('Delete this link?')) return;
        const links = JSON.parse(localStorage.getItem('portalLinks') || '[]');
        links.splice(index, 1);
        localStorage.setItem('portalLinks', JSON.stringify(links));
        this.renderPortalLinks();
    }

    populateNotifDropdown(reminders) {
        const badge = document.getElementById('notifBadge');
        const list = document.getElementById('notifList');
        const count = reminders ? reminders.length : 0;
        badge.textContent = count;
        badge.dataset.count = count;
        if (count === 0) {
            list.innerHTML = '<div class="hd-empty">No upcoming reminders</div>';
            return;
        }
        const recurLabels = { daily: 'Daily', weekly_monday: 'Every Monday', weekly_tuesday: 'Every Tuesday', weekly_wednesday: 'Every Wednesday', weekly_thursday: 'Every Thursday', weekly_friday: 'Every Friday', biweekly: 'Bi-weekly', monthly: 'Monthly' };
        list.innerHTML = reminders.map(r => {
            const label = recurLabels[r.recurrence] || r.recurrence || '';
            return '<div class="hd-item" onclick="window.app.loadPage(' + r.page_id + ')">' +
                '<div class="hd-item-icon reminder"><i data-lucide="bell"></i></div>' +
                '<div class="hd-item-info">' +
                    '<div class="hd-item-title">' + this.escapeHtml(r.content) + '</div>' +
                    '<div class="hd-item-meta">' + this.escapeHtml(r.page_title || '') + (label ? ' · ' + label : '') + '</div>' +
                '</div></div>';
        }).join('');
        lucide.createIcons({ nodes: [list] });
    }

    populateMsgDropdown(tasks) {
        const badge = document.getElementById('msgBadge');
        const list = document.getElementById('msgList');
        const count = tasks ? tasks.length : 0;
        badge.textContent = count;
        badge.dataset.count = count;
        if (count === 0) {
            list.innerHTML = '<div class="hd-empty">No tasks for today</div>';
            return;
        }
        const statusLabels = { pending: 'Pending', in_progress: 'In Progress', on_hold: 'On Hold', completed: 'Completed' };
        list.innerHTML = tasks.map(t => {
            const ts = t.task_status || 'pending';
            const statusClass = ts;
            return '<div class="hd-item" onclick="window.app.loadPage(' + t.page_id + ')">' +
                '<div class="hd-item-icon task ' + statusClass + '"><i data-lucide="list-checks"></i></div>' +
                '<div class="hd-item-info">' +
                    '<div class="hd-item-title">' + this.escapeHtml(t.content) + '</div>' +
                    '<div class="hd-item-meta">' + this.escapeHtml(t.page_title || '') + ' · ' + (statusLabels[ts] || ts) + '</div>' +
                '</div></div>';
        }).join('');
        lucide.createIcons({ nodes: [list] });
    }

    async refreshNotifDropdown() {
        try {
            const res = await fetch('/api/dashboard-data');
            const data = await res.json();
            this.populateNotifDropdown(data.upcoming_reminders);
        } catch (err) {}
    }

    async refreshMsgDropdown() {
        try {
            const res = await fetch('/api/dashboard-data');
            const data = await res.json();
            this.populateMsgDropdown(data.today_tasks);
        } catch (err) {}
    }

    renderTodayTasks(tasks) {
        const container = document.getElementById('todayTasksList');
        if (!tasks || tasks.length === 0) {
            container.innerHTML = '<div class="card card-mauve note-card" style="min-height: 100px; align-items: center; justify-content: center;"><p style="opacity: 0.8;">No tasks for today. Enjoy your day!</p></div>';
            return;
        }

        const cardColors = ['card-blue', 'card-sand', 'card-peach', 'card-mauve', 'card-teal', 'card-olive'];

        container.innerHTML = tasks.map((task, i) => {
            const ts = task.task_status || 'pending';
            const colorClass = cardColors[i % cardColors.length];
            const recLabel = task.recurrence && task.recurrence !== 'none' ? ' <i data-lucide="repeat" style="width:12px;height:12px;"></i>' : '';

            return '<div class="card ' + colorClass + ' note-card" onclick="window.app.loadPage(' + task.page_id + ')">' +
                '<h4 class="task-card-title">' + this.escapeHtml(task.content) + recLabel + '</h4>' +
                '<p class="task-card-desc">' + (task.description ? this.escapeHtml(task.description) : 'No additional details.') + '</p>' +
                '<div class="note-footer task-card-footer">' +
                    '<span><i data-lucide="clock"></i> Due: ' + (task.due_date || 'Today') + '</span>' +
                    '<i data-lucide="pencil"></i>' +
                '</div>' +
            '</div>';
        }).join('');
        this.refreshIcons();
    }

    renderUpcomingReminders(reminders) {
        const container = document.getElementById('upcomingReminders');
        if (!reminders || reminders.length === 0) {
            container.innerHTML = '<div class="card card-teal note-card" style="min-height: 100px; align-items: center; justify-content: center;"><p style="opacity: 0.8;">No upcoming reminders.</p></div>';
            return;
        }

        container.innerHTML = reminders.map((r, i) => {
            const recLabel = r.recurrence && r.recurrence !== 'none' ? ' <i data-lucide="repeat" style="width:12px;height:12px;"></i>' : '';
            return '<div class="card card-mauve note-card" style="min-height: 120px;">' +
                '<div class="note-tag"><i data-lucide="bell"></i> Reminder</div>' +
                '<h4>' + this.escapeHtml(r.content) + recLabel + '</h4>' +
                '<p>' + this.escapeHtml(r.page_title || '') + '</p>' +
                '<div class="note-footer">' +
                    '<span><i data-lucide="refresh-cw"></i> ' + (r.recurrence && r.recurrence !== 'none' ? 'Recurring' : 'One-time') + '</span>' +
                    '<i data-lucide="bell"></i>' +
                '</div>' +
            '</div>';
        }).join('');
        this.refreshIcons();
    }

    async loadPage(pageId) {
        localStorage.setItem('nb_currentView', 'page');
        localStorage.setItem('nb_currentPageId', pageId);
        try {
            const res = await fetch('/api/pages/' + pageId);
            const page = await res.json();

            this.currentPage = page;
            this.currentBlocks = page.blocks || [];
            this.renderPagesList();

            document.getElementById('dashboardView').classList.add('hidden');
            document.getElementById('pageView').classList.remove('hidden');
            document.getElementById('detailView').classList.add('hidden');
            document.getElementById('portalView').classList.add('hidden');
            document.getElementById('notepadView').classList.add('hidden');
            document.getElementById('pagesView').classList.add('hidden');

            document.getElementById('pageTitleInput').value = page.title;
            document.getElementById('pageIconBtn').innerHTML = renderIcon(page.icon || 'cil-file');

            this.renderBlocks();

            if (window.innerWidth <= 991) {
                document.getElementById('sidebar').classList.remove('show');
            }
        } catch (err) {
            console.error('Failed to load page:', err);
        }
    }

    renderBlocks() {
        const container = document.getElementById('blocksContainer');
        const filterBar = document.getElementById('taskFilterBar');
        const hasTasks = this.currentBlocks.some(b => b.block_type === 'task');

        if (hasTasks) {
            filterBar.classList.remove('hidden');
            this.renderTaskStats();
        } else {
            filterBar.classList.add('hidden');
        }

        if (this.currentBlocks.length === 0) {
            container.innerHTML = '<div class="briefing-empty">No blocks yet. Click "+ Add a block" to start.</div>';
            return;
        }

        const activeFilter = document.querySelector('.task-filter-btn.active');
        const filter = activeFilter ? activeFilter.dataset.filter : 'all';

        let blocks = this.currentBlocks;
        if (filter !== 'all' && hasTasks) {
            blocks = blocks.filter(b => {
                if (b.block_type !== 'task') return true;
                const ts = b.task_status || 'pending';
                return ts === filter;
            });
        }

        container.innerHTML = blocks.map(block => this.renderBlock(block)).join('');
        this.bindBlockEvents();
        this.refreshIcons();
    }

    renderTaskStats() {
        const tasks = this.currentBlocks.filter(b => b.block_type === 'task');
        const total = tasks.length;
        const pending = tasks.filter(b => (b.task_status || 'pending') === 'pending').length;
        const inProgress = tasks.filter(b => b.task_status === 'in_progress').length;
        const onHold = tasks.filter(b => b.task_status === 'on_hold').length;
        const completed = tasks.filter(b => b.task_status === 'completed').length;
        const high = tasks.filter(b => b.task_priority === 'high').length;

        document.getElementById('taskStats').innerHTML =
            '<span class="stat-item">Total: <strong>' + total + '</strong></span>' +
            '<span class="stat-item stat-pending"><i data-lucide="circle" style="width:12px;height:12px;"></i> ' + pending + '</span>' +
            '<span class="stat-item stat-progress"><i data-lucide="refresh-cw" style="width:12px;height:12px;"></i> ' + inProgress + '</span>' +
            '<span class="stat-item stat-hold"><i data-lucide="pause" style="width:12px;height:12px;"></i> ' + onHold + '</span>' +
            '<span class="stat-item stat-done"><i data-lucide="circle-check" style="width:12px;height:12px;"></i> ' + completed + '</span>' +
            (high > 0 ? '<span class="stat-item stat-high"><i data-lucide="alert-circle" style="width:12px;height:12px;"></i> ' + high + ' High</span>' : '');
    }

    renderBlock(block) {
        const typeBadge = '<span class="block-type-badge ' + block.block_type + '">' + block.block_type + '</span>';
        const deleteBtn = '<button class="btn-block-action delete" data-block-id="' + block.id + '" title="Delete"><i data-lucide="trash-2"></i></button>';
        const editBtn = '<button class="btn-block-action edit" data-block-id="' + block.id + '" title="Edit"><i data-lucide="pencil"></i></button>';
        const viewBtn = '<button class="btn-block-action view" data-block-id="' + block.id + '" title="View" onclick="window.app.viewBlock(\'' + block.id + '\')"><i data-lucide="eye"></i></button>';

        let contentHtml = '';
        if (block.block_type === 'task') {
            const taskStatusVal = block.task_status || 'pending';
            const checked = taskStatusVal === 'completed' ? 'checked' : '';
            const statusClass = taskStatusVal === 'completed' ? ' completed' : '';

            const taskPri = block.task_priority || 'medium';
            const priLabels = { high: 'HIGH', medium: 'MED', low: 'LOW' };
            const priBadge = '<span class="task-priority-badge task-pri-' + taskPri + '">' + (priLabels[taskPri] || 'MED') + '</span>';

            const catLabels = { general: 'General', billing: 'Billing', attendance: 'Attendance', documentation: 'Docs', followup: 'Follow-up', claims: 'Claims', other: 'Other' };
            const catIcons = { general: 'cil-folder', billing: 'cil-dollar', attendance: 'cil-clipboard', documentation: 'cil-description', followup: 'cil-phone', claims: 'cil-hospital', other: 'cil-pin' };
            const cat = block.category || 'general';
            const catBadge = '<span class="task-category-badge">' + renderIcon(catIcons[cat] || 'cil-folder') + ' ' + (catLabels[cat] || cat) + '</span>';

            const statusLabels = { pending: 'Pending', in_progress: 'In Progress', on_hold: 'On Hold', completed: 'Completed' };
            const statusIcons = { pending: 'cil-clock', in_progress: 'cil-reload', on_hold: 'cil-media-pause', completed: 'cil-check-circle' };
            const statusBadge = '<span class="task-status-badge task-st-' + taskStatusVal + '">' + renderIcon(statusIcons[taskStatusVal] || 'cil-clock') + ' ' + (statusLabels[taskStatusVal] || 'Pending') + '</span>';

            let descHtml = '';
            if (block.description) {
                descHtml = '<div class="task-description">' + this.escapeHtml(block.description) + '</div>';
            }
            let taskImgHtml = '';
            if (block.image_path) {
                var tImgs = [];
                try { tImgs = JSON.parse(block.image_path); } catch(e) { if (block.image_path) tImgs = [block.image_path]; }
                if (tImgs.length > 0) {
                    taskImgHtml = '<div class="block-images-grid">';
                    tImgs.forEach(function(img) {
                        taskImgHtml += '<div class="block-image-wrapper"><img class="block-image" src="' + img + '" onclick="window.app.showImageModal(\'' + img.replace(/'/g, "\\'") + '\')"></div>';
                    });
                    taskImgHtml += '</div>';
                }
            }

            contentHtml = '<div class="block task-block' + statusClass + '">' +
                '<div class="block-header">' + typeBadge + priBadge + catBadge + statusBadge + '<div class="block-actions">' + viewBtn + editBtn + deleteBtn + '</div></div>' +
                '<div class="task-content-row">' +
                '<input type="checkbox" class="task-checkbox" data-block-id="' + block.id + '" ' + checked + '>' +
                '<div class="block-content" data-block-id="' + block.id + '">' + this.escapeHtml(block.content) + '</div>' +
                '</div>' +
                descHtml + taskImgHtml +
                this.renderBlockMeta(block) + '</div>';
        } else if (block.block_type === 'reminder') {
            let priorityBadge = '';
            if (block.priority === 'important') {
                priorityBadge = '<span class="priority-badge important">Very Important</span>';
            }
            let activeBadge = '';
            if (block.is_active === 1 || block.is_active === '1') {
                activeBadge = '<span class="active-badge active">Active</span>';
            } else {
                activeBadge = '<span class="active-badge inactive">Not Active</span>';
            }
            let inactiveClass = (block.is_active === 0 || block.is_active === '0') ? ' block-inactive' : '';
            let subjectHtml = '';
            if (block.subject) {
                subjectHtml = '<div class="block-subject">🔔 ' + this.escapeHtml(block.subject) + '</div>';
            }
            let descHtml = '';
            if (block.description) {
                descHtml = '<div class="task-description">' + this.escapeHtml(block.description) + '</div>';
            }
            let reminderImgHtml = '';
            if (block.image_path) {
                var rImgs = [];
                try { rImgs = JSON.parse(block.image_path); } catch(e) { if (block.image_path) rImgs = [block.image_path]; }
                if (rImgs.length > 0) {
                    reminderImgHtml = '<div class="block-images-grid">';
                    rImgs.forEach(function(img) {
                        reminderImgHtml += '<div class="block-image-wrapper"><img class="block-image" src="' + img + '" onclick="window.app.showImageModal(\'' + img.replace(/'/g, "\\'") + '\')"></div>';
                    });
                    reminderImgHtml += '</div>';
                }
            }
            contentHtml = '<div class="block' + inactiveClass + '">' +
                '<div class="block-header">' + typeBadge + priorityBadge + activeBadge + '<div class="block-actions">' + viewBtn + editBtn + deleteBtn + '</div></div>' +
                subjectHtml +
                '<div class="block-content" data-block-id="' + block.id + '">' + this.escapeHtml(block.content) + '</div>' +
                descHtml + reminderImgHtml +
                this.renderBlockMeta(block) + '</div>';
        } else if (block.block_type === 'instruction') {
            let priorityBadge = '';
            if (block.priority === 'important') {
                priorityBadge = '<span class="priority-badge important">Very Important</span>';
            } else {
                priorityBadge = '<span class="priority-badge normal">Normal</span>';
            }
            let activeBadge = '';
            if (block.is_active === 1 || block.is_active === '1') {
                activeBadge = '<span class="active-badge active">Active</span>';
            } else {
                activeBadge = '<span class="active-badge inactive">Not Active</span>';
            }
            let inactiveClass = (block.is_active === 0 || block.is_active === '0') ? ' block-inactive' : '';
            let subjectHtml = '';
            if (block.subject) {
                subjectHtml = '<div class="block-subject">📌 ' + this.escapeHtml(block.subject) + '</div>';
            }
            let imageHtml = '';
            if (block.image_path) {
                var imgs = [];
                try { imgs = JSON.parse(block.image_path); } catch(e) { if (block.image_path) imgs = [block.image_path]; }
                if (imgs.length > 0) {
                    imageHtml = '<div class="block-images-grid">';
                    imgs.forEach(function(img) {
                        imageHtml += '<div class="block-image-wrapper"><img class="block-image" src="' + img + '" alt="Attachment" onclick="window.app.showImageModal(\'' + img.replace(/'/g, "\\'") + '\')"></div>';
                    });
                    imageHtml += '</div>';
                }
            }
            contentHtml = '<div class="block' + inactiveClass + '">' +
                '<div class="block-header">' + typeBadge + priorityBadge + activeBadge + '<div class="block-actions">' + viewBtn + editBtn + deleteBtn + '</div></div>' +
                subjectHtml +
                '<div class="block-content" data-block-id="' + block.id + '">' + this.escapeHtml(block.content) + '</div>' +
                imageHtml +
                this.renderBlockMeta(block) + '</div>';
        } else if (block.block_type === 'notepad') {
            let subjectHtml = '';
            if (block.subject) {
                subjectHtml = '<div class="block-subject">📝 ' + this.escapeHtml(block.subject) + '</div>';
            }
            let notepadImgHtml = '';
            if (block.image_path) {
                var npImgs = [];
                try { npImgs = JSON.parse(block.image_path); } catch(e) { if (block.image_path) npImgs = [block.image_path]; }
                if (npImgs.length > 0) {
                    notepadImgHtml = '<div class="block-images-grid">';
                    npImgs.forEach(function(img) {
                        notepadImgHtml += '<div class="block-image-wrapper"><img class="block-image" src="' + img + '" onclick="window.app.showImageModal(\'' + img.replace(/'/g, "\\'") + '\')"></div>';
                    });
                    notepadImgHtml += '</div>';
                }
            }
            contentHtml = '<div class="block notepad-block">' +
                '<div class="block-header">' + typeBadge + '<div class="block-actions">' + viewBtn + editBtn + deleteBtn + '</div></div>' +
                subjectHtml +
                '<div class="block-notepad-content" data-block-id="' + block.id + '">' + block.content + '</div>' +
                notepadImgHtml +
                this.renderBlockMeta(block) + '</div>';
        } else {
            contentHtml = '<div class="block">' +
                '<div class="block-header">' + typeBadge + '<div class="block-actions">' + viewBtn + editBtn + deleteBtn + '</div></div>' +
                '<div class="block-content" data-block-id="' + block.id + '">' + this.escapeHtml(block.content) + '</div>' +
                '</div>';
        }

        return contentHtml;
    }

    renderBlockMeta(block) {
        let meta = '<div class="block-meta">';

        if (block.block_type === 'task' && block.due_date) {
            meta += '<span>📅 <input type="date" class="due-date-input" data-block-id="' + block.id + '" value="' + block.due_date + '"></span>';
            const rec = block.recurrence || 'none';
            if (rec !== 'none') {
                const recLabels = { daily: '📅 Daily', weekly_monday: '🔵 Every Monday', weekly_tuesday: '🟠 Every Tuesday', weekly_wednesday: '🟢 Every Wednesday', weekly_thursday: '🟡 Every Thursday', weekly_friday: '🔴 Every Friday', weekly_saturday: '🟣 Every Saturday', weekly_sunday: '⚪ Every Sunday', biweekly: '📆 Every 2 Weeks', monthly: '📅 Every Month' };
                meta += '<span class="task-recurrence-badge">🔁 ' + (recLabels[rec] || rec) + '</span>';
            }
            meta += '<span>🔄 <select class="recurrence-select" data-block-id="' + block.id + '">' +
                '<option value="none"' + (rec === 'none' ? ' selected' : '') + '>No repeat</option>' +
                '<option value="daily"' + (rec === 'daily' ? ' selected' : '') + '>Daily</option>' +
                '<option value="weekly_monday"' + (rec === 'weekly_monday' ? ' selected' : '') + '>Every Monday</option>' +
                '<option value="weekly_tuesday"' + (rec === 'weekly_tuesday' ? ' selected' : '') + '>Every Tuesday</option>' +
                '<option value="weekly_wednesday"' + (rec === 'weekly_wednesday' ? ' selected' : '') + '>Every Wednesday</option>' +
                '<option value="weekly_thursday"' + (rec === 'weekly_thursday' ? ' selected' : '') + '>Every Thursday</option>' +
                '<option value="weekly_friday"' + (rec === 'weekly_friday' ? ' selected' : '') + '>Every Friday</option>' +
                '<option value="weekly_saturday"' + (rec === 'weekly_saturday' ? ' selected' : '') + '>Every Saturday</option>' +
                '<option value="weekly_sunday"' + (rec === 'weekly_sunday' ? ' selected' : '') + '>Every Sunday</option>' +
                '<option value="biweekly"' + (rec === 'biweekly' ? ' selected' : '') + '>Every 2 Weeks</option>' +
                '<option value="monthly"' + (rec === 'monthly' ? ' selected' : '') + '>Every Month</option>' +
                '</select></span>';
        }

        if (block.block_type === 'reminder') {
            if (block.due_date) {
                meta += '<span><i data-lucide="calendar" style="width:12px;height:12px;"></i> <input type="date" class="due-date-input" data-block-id="' + block.id + '" value="' + block.due_date + '"></span>';
            }
            if (block.reminder_time) {
                meta += '<span><i data-lucide="clock" style="width:12px;height:12px;"></i> <input type="time" class="due-date-input" data-block-id="' + block.id + '" data-field="reminder_time" value="' + block.reminder_time + '"></span>';
            }
            const rec = block.recurrence || 'none';
            meta += '<span><i data-lucide="repeat" style="width:12px;height:12px;"></i> <select class="recurrence-select" data-block-id="' + block.id + '">' +
                '<option value="none"' + (rec === 'none' ? ' selected' : '') + '>No repeat</option>' +
                '<option value="daily"' + (rec === 'daily' ? ' selected' : '') + '>Daily</option>' +
                '<option value="weekly_monday"' + (rec === 'weekly_monday' ? ' selected' : '') + '>Every Monday</option>' +
                '<option value="weekly_tuesday"' + (rec === 'weekly_tuesday' ? ' selected' : '') + '>Every Tuesday</option>' +
                '<option value="weekly_wednesday"' + (rec === 'weekly_wednesday' ? ' selected' : '') + '>Every Wednesday</option>' +
                '<option value="weekly_thursday"' + (rec === 'weekly_thursday' ? ' selected' : '') + '>Every Thursday</option>' +
                '<option value="weekly_friday"' + (rec === 'weekly_friday' ? ' selected' : '') + '>Every Friday</option>' +
                '<option value="weekly_saturday"' + (rec === 'weekly_saturday' ? ' selected' : '') + '>Every Saturday</option>' +
                '<option value="weekly_sunday"' + (rec === 'weekly_sunday' ? ' selected' : '') + '>Every Sunday</option>' +
                '<option value="biweekly"' + (rec === 'biweekly' ? ' selected' : '') + '>Every 2 Weeks</option>' +
                '<option value="monthly"' + (rec === 'monthly' ? ' selected' : '') + '>Every Month</option>' +
                '</select></span>';
            if (block.ref_detail) {
                meta += '<span><i data-lucide="bookmark" style="width:12px;height:12px;"></i> ' + this.escapeHtml(block.ref_detail) + '</span>';
            }
        }

        if (block.block_type === 'instruction') {
            if (block.ref_date) {
                meta += '<span>📅 <input type="date" class="due-date-input" data-block-id="' + block.id + '" data-field="ref_date" value="' + block.ref_date + '"></span>';
            }
            if (block.end_date) {
                meta += '<span>🔴 End: <input type="date" class="due-date-input" data-block-id="' + block.id + '" data-field="end_date" value="' + block.end_date + '"></span>';
            }
            if (block.ref_type && block.ref_type !== 'none') {
                const refIcons = { email: 'cil-envelope-closed', call: 'cil-phone', message: 'cil-chat-bubble', meeting: 'cil-people', document: 'cil-file' };
                const refIcon = refIcons[block.ref_type] || 'cil-pin';
                const refLabels = { email: 'Email', call: 'Call', message: 'Message', meeting: 'Meeting', document: 'Document' };
                let refText = refLabels[block.ref_type] || block.ref_type;
                if (block.ref_detail) {
                    refText += ': ' + block.ref_detail;
                }
                meta += '<span>' + renderIcon(refIcon) + ' ' + this.escapeHtml(refText) + '</span>';
            }
        }

        meta += '</div>';
        return meta;
    }

    viewBlock(blockId) {
        if (!this.currentBlocks) return;
        var block = this.currentBlocks.find(function(b) { return b.id == blockId; });
        if (!block) return;
        var page = this.currentPage || {};
        var type = block.block_type || 'note';
        var typeColors = { task: '#5856d6', reminder: '#10b981', instruction: '#f59e0b', notepad: '#6366f1', note: '#6366f1' };
        var typeIcons = { task: 'check-square', reminder: 'bell', instruction: 'clipboard', notepad: 'file-text', note: 'file-text' };
        var typeLabels = { task: 'Task', reminder: 'Reminder', instruction: 'Instruction', notepad: 'Notepad', note: 'Note' };
        var color = typeColors[type] || '#6366f1';
        var icon = typeIcons[type] || 'file-text';
        var label = typeLabels[type] || 'Note';

        var statusLabels = { pending: 'Pending', in_progress: 'In Progress', on_hold: 'On Hold', completed: 'Completed' };
        var statusColors = { pending: '#f59e0b', in_progress: '#3b82f6', on_hold: '#8b5cf6', completed: '#10b981' };

        var html = '<div class="vb-overlay" onclick="window.app.closeViewBlock()">' +
            '<div class="vb-modal" onclick="event.stopPropagation()">' +
                '<div class="vb-header">' +
                    '<div class="vb-header-left">' +
                        '<div class="vb-icon"><i data-lucide="' + icon + '"></i></div>' +
                        '<div class="vb-header-info">' +
                            '<div class="vb-type">' + label + '</div>' +
                            '<div class="vb-page-name">' + this.escapeHtml(page.title || 'Untitled Page') + '</div>' +
                        '</div>' +
                    '</div>' +
                    '<div style="display:flex;align-items:center;gap:8px;">' +
                        '<button class="vb-close" onclick="window.app._vbPrintBlock()" title="Print"><i data-lucide="printer"></i></button>' +
                        '<button class="vb-close" onclick="window.app.closeViewBlock()"><i data-lucide="x"></i></button>' +
                    '</div>' +
                '</div>' +
                '<div class="vb-body">';

        html += '<div class="vb-content-title">' + (type === 'notepad' ? (block.subject || 'Untitled Notepad') : this.escapeHtml(block.content || 'No title')) + '</div>';

        if (type === 'notepad') {
            html += '<div class="vb-section"><div class="vb-section-label">Note Content</div><div class="block-notepad-content">' + block.content + '</div></div>';
        }

        if (block.description) {
            html += '<div class="vb-section"><div class="vb-section-label">Description</div><div class="vb-section-text">' + this.escapeHtml(block.description) + '</div></div>';
        }

        if (block.subject) {
            html += '<div class="vb-section"><div class="vb-section-label">Subject</div><div class="vb-section-text">' + this.escapeHtml(block.subject) + '</div></div>';
        }

        var metaItems = [];
        if (type === 'task') {
            var st = block.task_status || 'pending';
            metaItems.push('<div class="vb-meta-item"><span class="vb-meta-label">Status</span><span class="vb-badge" style="background:' + (statusColors[st] || '#f59e0b') + ';">' + (statusLabels[st] || 'Pending') + '</span></div>');
            var priLabels = { high: 'HIGH', medium: 'MEDIUM', low: 'LOW' };
            var priColors = { high: '#ef4444', medium: '#f59e0b', low: '#10b981' };
            var pri = block.task_priority || 'medium';
            metaItems.push('<div class="vb-meta-item"><span class="vb-meta-label">Priority</span><span class="vb-badge" style="background:' + (priColors[pri] || '#f59e0b') + ';">' + (priLabels[pri] || 'Medium') + '</span></div>');
            var catLabels = { general: 'General', billing: 'Billing', attendance: 'Attendance', documentation: 'Docs', followup: 'Follow-up', claims: 'Claims', other: 'Other' };
            var cat = block.category || 'general';
            metaItems.push('<div class="vb-meta-item"><span class="vb-meta-label">Category</span><span class="vb-meta-value">' + (catLabels[cat] || cat) + '</span></div>');
            if (block.due_date) {
                metaItems.push('<div class="vb-meta-item"><span class="vb-meta-label">Due Date</span><span class="vb-meta-value">' + block.due_date + '</span></div>');
            }
            var rec = block.recurrence || 'none';
            if (rec !== 'none') {
                var recLabels = { daily: 'Daily', weekly_monday: 'Every Monday', weekly_tuesday: 'Every Tuesday', weekly_wednesday: 'Every Wednesday', weekly_thursday: 'Every Thursday', weekly_friday: 'Every Friday', weekly_saturday: 'Every Saturday', weekly_sunday: 'Every Sunday', biweekly: 'Every 2 Weeks', monthly: 'Every Month' };
                metaItems.push('<div class="vb-meta-item"><span class="vb-meta-label">Recurrence</span><span class="vb-meta-value">' + (recLabels[rec] || rec) + '</span></div>');
            }
        }

        if (type === 'reminder') {
            var isActive = block.is_active === 1 || block.is_active === '1';
            metaItems.push('<div class="vb-meta-item"><span class="vb-meta-label">Active</span><span class="vb-badge" style="background:' + (isActive ? '#10b981' : '#6b7280') + ';">' + (isActive ? 'Active' : 'Inactive') + '</span></div>');
            if (block.priority === 'important') {
                metaItems.push('<div class="vb-meta-item"><span class="vb-meta-label">Priority</span><span class="vb-badge" style="background:#ef4444;">Very Important</span></div>');
            }
            if (block.due_date) {
                metaItems.push('<div class="vb-meta-item"><span class="vb-meta-label">Date</span><span class="vb-meta-value">' + block.due_date + '</span></div>');
            }
            if (block.reminder_time) {
                metaItems.push('<div class="vb-meta-item"><span class="vb-meta-label">Time</span><span class="vb-meta-value">' + block.reminder_time + '</span></div>');
            }
            var rec2 = block.recurrence || 'none';
            if (rec2 !== 'none') {
                var recLabels2 = { daily: 'Daily', weekly_monday: 'Every Monday', weekly_tuesday: 'Every Tuesday', weekly_wednesday: 'Every Wednesday', weekly_thursday: 'Every Thursday', weekly_friday: 'Every Friday', weekly_saturday: 'Every Saturday', weekly_sunday: 'Every Sunday', biweekly: 'Every 2 Weeks', monthly: 'Every Month' };
                metaItems.push('<div class="vb-meta-item"><span class="vb-meta-label">Recurrence</span><span class="vb-meta-value">' + (recLabels2[rec2] || rec2) + '</span></div>');
            }
            if (block.ref_detail) {
                metaItems.push('<div class="vb-meta-item"><span class="vb-meta-label">Reference</span><span class="vb-meta-value">' + this.escapeHtml(block.ref_detail) + '</span></div>');
            }
        }

        if (type === 'instruction') {
            var isAct2 = block.is_active === 1 || block.is_active === '1';
            metaItems.push('<div class="vb-meta-item"><span class="vb-meta-label">Active</span><span class="vb-badge" style="background:' + (isAct2 ? '#10b981' : '#6b7280') + ';">' + (isAct2 ? 'Active' : 'Inactive') + '</span></div>');
            if (block.priority === 'important') {
                metaItems.push('<div class="vb-meta-item"><span class="vb-meta-label">Priority</span><span class="vb-badge" style="background:#ef4444;">Very Important</span></div>');
            }
            if (block.ref_date) {
                metaItems.push('<div class="vb-meta-item"><span class="vb-meta-label">Reference Date</span><span class="vb-meta-value">' + block.ref_date + '</span></div>');
            }
            if (block.end_date) {
                metaItems.push('<div class="vb-meta-item"><span class="vb-meta-label">End Date</span><span class="vb-meta-value">' + block.end_date + '</span></div>');
            }
            if (block.ref_type && block.ref_type !== 'none') {
                var refLabels = { email: 'Email', call: 'Call', message: 'Message', meeting: 'Meeting', document: 'Document' };
                var refText = refLabels[block.ref_type] || block.ref_type;
                if (block.ref_detail) refText += ': ' + block.ref_detail;
                metaItems.push('<div class="vb-meta-item"><span class="vb-meta-label">Reference</span><span class="vb-meta-value">' + this.escapeHtml(refText) + '</span></div>');
            }
        }

        if (metaItems.length > 0) {
            html += '<div class="vb-meta-grid">' + metaItems.join('') + '</div>';
        }

        if (block.image_path) {
            var images = [];
            try { images = JSON.parse(block.image_path); } catch(e) { if (block.image_path) images = [block.image_path]; }
            if (images.length > 0) {
                html += '<div class="vb-section"><div class="vb-section-label">Attachments (' + images.length + ')</div><div class="vb-images-wrap">';
                images.forEach(function(img, idx) {
                    html += '<div class="vb-image-wrap" onclick="window.app._vbZoomImage(\'' + img.replace(/'/g, "\\'") + '\')"><img class="vb-image" src="' + img + '"></div>';
                });
                html += '</div></div>';
            }
        }

        html += '</div></div></div>';

        var existing = document.querySelector('.vb-overlay');
        if (existing) existing.remove();
        document.body.insertAdjacentHTML('beforeend', html);
        var overlayEl = document.querySelector('.vb-overlay');
        if (overlayEl) overlayEl.dataset.blockId = block.id;
        if (typeof lucide !== 'undefined') lucide.createIcons();
    }

    closeViewBlock() {
        var overlay = document.querySelector('.vb-overlay');
        if (overlay) overlay.remove();
    }

    _vbZoomImage(src) {
        var existing = document.querySelector('.vb-img-full-overlay');
        if (existing) existing.remove();
        var html = '<div class="vb-img-full-overlay" onclick="window.app._vbCloseZoom()">' +
            '<button class="vb-img-full-close">&times;</button>' +
            '<img src="' + src + '" onclick="event.stopPropagation()">' +
            '</div>';
        document.body.insertAdjacentHTML('beforeend', html);
    }

    _vbCloseZoom() {
        var overlay = document.querySelector('.vb-img-full-overlay');
        if (overlay) overlay.remove();
    }

    _vbPrintBlock() {
        var block = this.currentBlocks.find(function(b) { return b.id == document.querySelector('.vb-overlay').dataset.blockId; });
        if (!block) {
            var overlay = document.querySelector('.vb-overlay');
            if (overlay) overlay.remove();
            return;
        }
        var page = this.currentPage || {};
        var type = block.block_type || 'note';
        var typeLabels = { task: 'Task', reminder: 'Reminder', instruction: 'Instruction', notepad: 'Notepad', note: 'Note' };
        var label = typeLabels[type] || 'Note';

        var bodyContent = '';
        if (type === 'notepad') {
            bodyContent = '<h1>' + this.escapeHtml(block.subject || 'Untitled Notepad') + '</h1>';
            bodyContent += '<div class="block-notepad-content" style="margin-top:16px;">' + block.content + '</div>';
        } else {
            bodyContent = '<h1>' + this.escapeHtml(block.content || 'Untitled') + '</h1>';
        }
        if (type !== 'notepad' && block.description) bodyContent += '<p><strong>Description:</strong> ' + this.escapeHtml(block.description) + '</p>';
        if (type !== 'notepad' && block.subject) bodyContent += '<p><strong>Subject:</strong> ' + this.escapeHtml(block.subject) + '</p>';

        if (type === 'task') {
            var st = block.task_status || 'pending';
            var pri = block.task_priority || 'medium';
            var cat = block.category || 'general';
            var statusLabels = { pending: 'Pending', in_progress: 'In Progress', on_hold: 'On Hold', completed: 'Completed' };
            var priLabels = { high: 'High', medium: 'Medium', low: 'Low' };
            var catLabels = { general: 'General', billing: 'Billing', attendance: 'Attendance', documentation: 'Documentation', followup: 'Follow-up', claims: 'Claims', other: 'Other' };
            bodyContent += '<div class="meta-row"><span><strong>Status:</strong> ' + (statusLabels[st] || st) + '</span>';
            bodyContent += '<span><strong>Priority:</strong> ' + (priLabels[pri] || pri) + '</span>';
            bodyContent += '<span><strong>Category:</strong> ' + (catLabels[cat] || cat) + '</span></div>';
            if (block.due_date) bodyContent += '<p><strong>Due Date:</strong> ' + block.due_date + '</p>';
            var rec = block.recurrence || 'none';
            if (rec !== 'none') {
                var recLabels = { daily: 'Daily', weekly_monday: 'Every Monday', weekly_tuesday: 'Every Tuesday', weekly_wednesday: 'Every Wednesday', weekly_thursday: 'Every Thursday', weekly_friday: 'Every Friday', weekly_saturday: 'Every Saturday', weekly_sunday: 'Every Sunday', biweekly: 'Every 2 Weeks', monthly: 'Every Month' };
                bodyContent += '<p><strong>Recurrence:</strong> ' + (recLabels[rec] || rec) + '</p>';
            }
        }

        if (type === 'reminder') {
            var isActive = block.is_active === 1 || block.is_active === '1';
            bodyContent += '<div class="meta-row"><span><strong>Active:</strong> ' + (isActive ? 'Yes' : 'No') + '</span>';
            if (block.priority === 'important') bodyContent += '<span><strong>Priority:</strong> Very Important</span>';
            bodyContent += '</div>';
            if (block.due_date) bodyContent += '<p><strong>Date:</strong> ' + block.due_date + '</p>';
            if (block.reminder_time) bodyContent += '<p><strong>Time:</strong> ' + block.reminder_time + '</p>';
            var rec2 = block.recurrence || 'none';
            if (rec2 !== 'none') {
                var recLabels2 = { daily: 'Daily', weekly_monday: 'Every Monday', weekly_tuesday: 'Every Tuesday', weekly_wednesday: 'Every Wednesday', weekly_thursday: 'Every Thursday', weekly_friday: 'Every Friday', weekly_saturday: 'Every Saturday', weekly_sunday: 'Every Sunday', biweekly: 'Every 2 Weeks', monthly: 'Every Month' };
                bodyContent += '<p><strong>Recurrence:</strong> ' + (recLabels2[rec2] || rec2) + '</p>';
            }
            if (block.ref_detail) bodyContent += '<p><strong>Reference:</strong> ' + this.escapeHtml(block.ref_detail) + '</p>';
        }

        if (type === 'instruction') {
            var isAct2 = block.is_active === 1 || block.is_active === '1';
            bodyContent += '<div class="meta-row"><span><strong>Active:</strong> ' + (isAct2 ? 'Yes' : 'No') + '</span>';
            if (block.priority === 'important') bodyContent += '<span><strong>Priority:</strong> Very Important</span>';
            bodyContent += '</div>';
            if (block.ref_date) bodyContent += '<p><strong>Reference Date:</strong> ' + block.ref_date + '</p>';
            if (block.end_date) bodyContent += '<p><strong>End Date:</strong> ' + block.end_date + '</p>';
            if (block.ref_type && block.ref_type !== 'none') {
                var refLabels = { email: 'Email', call: 'Call', message: 'Message', meeting: 'Meeting', document: 'Document' };
                var refText = refLabels[block.ref_type] || block.ref_type;
                if (block.ref_detail) refText += ': ' + block.ref_detail;
                bodyContent += '<p><strong>Reference:</strong> ' + this.escapeHtml(refText) + '</p>';
            }
        }

        var imagesHtml = '';
        if (block.image_path) {
            var images = [];
            try { images = JSON.parse(block.image_path); } catch(e) { if (block.image_path) images = [block.image_path]; }
            if (images.length > 0) {
                imagesHtml = '<div class="print-images">';
                images.forEach(function(img) {
                    imagesHtml += '<img src="' + img + '">';
                });
                imagesHtml += '</div>';
            }
        }

        var html = '<!DOCTYPE html><html><head><title>' + this.escapeHtml(block.content || 'Note') + ' — NoteBook By Arslan</title>' +
            '<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">' +
            '<style>' +
            '*{box-sizing:border-box;margin:0;padding:0;}' +
            'html,body{height:100%;}' +
            'body{font-family:"Plus Jakarta Sans","Inter",-apple-system,sans-serif;color:#1e1e2f;background:#fff;-webkit-print-color-adjust:exact;print-color-adjust:exact;}' +
            '.vb-page{width:210mm;min-height:297mm;margin:0 auto;position:relative;display:flex;flex-direction:column;background:#fff;page-break-after:always;}' +
            '.vb-page:last-child{page-break-after:auto;}' +
            '.vb-page-bg{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;}' +
            '.vb-page-bg img{width:100%;height:auto;display:block;}' +
            '.vb-hdr-space{height:160px;flex-shrink:0;position:relative;z-index:1;}' +
            '.vb-print-title{position:relative;z-index:1;padding:0 54px 10px;}' +
            '.vb-print-title h1{font-size:22px;font-weight:800;color:#1e1e2f;margin:0;border-bottom:3px solid #5856d6;padding-bottom:10px;display:inline-block;}' +
            '.vb-print-created{position:relative;z-index:1;padding:2px 54px 10px;font-size:11px;font-weight:500;color:#888;}' +
            '.vb-print-body{position:relative;z-index:1;flex:1;padding:0 54px;font-size:13px;line-height:1.9;color:#2d2d3f;word-wrap:break-word;overflow-wrap:break-word;}' +
            '.vb-print-body p{margin-bottom:8px;word-wrap:break-word;overflow-wrap:break-word;}' +
            '.vb-print-body strong{color:#0f172a;}' +
            '.vb-print-body .meta-row{display:flex;gap:16px;flex-wrap:wrap;margin:12px 0;padding:12px 16px;background:#f8f8fc;border-radius:10px;border:1px solid #e8e8f0;}' +
            '.vb-print-body .meta-row span{font-size:12px;color:#334155;word-wrap:break-word;overflow-wrap:break-word;flex:1;min-width:120px;}' +
            '.vb-print-images{margin-top:16px;display:flex;flex-wrap:wrap;gap:10px;page-break-inside:avoid;}' +
            '.vb-print-images img{width:120px;height:90px;object-fit:cover;border-radius:6px;border:1px solid #e8e8f0;page-break-inside:avoid;}' +
            '.vb-print-footer-space{flex-shrink:0;height:20px;position:relative;z-index:1;}' +
            '@media print{html,body{height:auto;margin:0;padding:0;background:#fff;}.vb-page{width:100%;min-height:auto;margin:0;padding:0;}@page{size:A4;margin:0;}}' +
            '</style></head><body>' +
            '<div class="vb-page">' +
                '<div class="vb-page-bg"><img src="' + _LH_B64 + '"></div>' +
                '<div class="vb-hdr-space"></div>' +
                '<div class="vb-print-title"><h1>' + this.escapeHtml(block.content || 'Untitled') + '</h1></div>' +
                '<div class="vb-print-created">' + label + ' By ' + this.escapeHtml(page.title || '') + ' | ' + new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) + '</div>' +
                '<div class="vb-print-body">' + bodyContent + imagesHtml + '</div>' +
                '<div class="vb-print-footer-space"></div>' +
            '</div>' +
            '<script>window.onload=function(){setTimeout(function(){window.print();},600);}<\/script>' +
            '</body></html>';

        var blob = new Blob([html], { type: 'text/html' });
        var url = URL.createObjectURL(blob);
        var printWin = window.open(url, '_blank');
        if (printWin) {
            printWin.addEventListener('afterprint', function() { URL.revokeObjectURL(url); });
            setTimeout(function() { URL.revokeObjectURL(url); }, 60000);
        }
    }

    getNextDueDate(currentDate, recurrence) {
        const date = new Date(currentDate || new Date());
        const dayMap = { weekly_monday: 1, weekly_tuesday: 2, weekly_wednesday: 3, weekly_thursday: 4, weekly_friday: 5, weekly_saturday: 6, weekly_sunday: 0 };

        switch (recurrence) {
            case 'daily':
                date.setDate(date.getDate() + 1);
                break;
            case 'weekly_monday':
            case 'weekly_tuesday':
            case 'weekly_wednesday':
            case 'weekly_thursday':
            case 'weekly_friday':
            case 'weekly_saturday':
            case 'weekly_sunday': {
                const targetDay = dayMap[recurrence];
                let daysAhead = targetDay - date.getDay();
                if (daysAhead <= 0) daysAhead += 7;
                date.setDate(date.getDate() + daysAhead);
                break;
            }
            case 'biweekly':
                date.setDate(date.getDate() + 14);
                break;
            case 'monthly':
                date.setMonth(date.getMonth() + 1);
                break;
            default:
                date.setDate(date.getDate() + 7);
        }

        return date.toISOString().split('T')[0];
    }

    bindBlockEvents() {
        document.querySelectorAll('.task-checkbox').forEach(cb => {
            cb.addEventListener('change', (e) => {
                const blockId = parseInt(e.target.dataset.blockId);
                const task_status = e.target.checked ? 'completed' : 'pending';
                const block = this.currentBlocks.find(b => b.id === blockId);

                if (task_status === 'completed' && block && block.recurrence && block.recurrence !== 'none') {
                    const nextDate = this.getNextDueDate(block.due_date, block.recurrence);
                    this.updateBlock(blockId, {
                        task_status: task_status,
                        status: task_status,
                        due_date: nextDate
                    });
                } else {
                    this.updateBlock(blockId, { task_status, status: task_status });
                }
            });
        });

        document.querySelectorAll('.btn-block-action.delete').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const blockId = parseInt(e.currentTarget.dataset.blockId);
                this.deleteBlock(blockId);
            });
        });

        document.querySelectorAll('.btn-block-action.edit').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const blockId = parseInt(e.currentTarget.dataset.blockId);
                this.startEditingBlock(blockId);
            });
        });

        document.querySelectorAll('.block-content[data-block-id]').forEach(el => {
            el.addEventListener('dblclick', (e) => {
                const blockId = parseInt(e.target.dataset.blockId);
                this.startEditingBlock(blockId);
            });
        });

        document.querySelectorAll('.block-notepad-content[data-block-id]').forEach(el => {
            el.addEventListener('dblclick', (e) => {
                const blockId = parseInt(e.target.dataset.blockId);
                this.startEditingBlock(blockId);
            });
        });

        document.querySelectorAll('.recurrence-select').forEach(sel => {
            sel.addEventListener('change', (e) => {
                const blockId = parseInt(e.target.dataset.blockId);
                const recurrence = e.target.value;
                this.updateBlock(blockId, { recurrence });
            });
        });

        document.querySelectorAll('.due-date-input').forEach(input => {
            input.addEventListener('change', (e) => {
                const blockId = parseInt(e.target.dataset.blockId);
                const field = e.target.dataset.field;
                const value = e.target.value;
                if (field === 'ref_date') {
                    this.updateBlock(blockId, { ref_date: value });
                } else if (field === 'end_date') {
                    this.updateBlock(blockId, { end_date: value });
                } else if (field === 'reminder_time') {
                    this.updateBlock(blockId, { reminder_time: value });
                } else {
                    this.updateBlock(blockId, { due_date: value });
                }
            });
        });
    }

    startEditingBlock(blockId) {
        const block = this.currentBlocks.find(b => b.id == blockId);
        if (!block) return;
        this._openEditModal(block);
    }

    _openEditModal(block) {
        var type = block.block_type || 'task';
        var typeColors = { task: '#5856d6', reminder: '#10b981', instruction: '#f59e0b', notepad: '#6366f1' };
        var typeLabels = { task: 'Task', reminder: 'Reminder', instruction: 'Instruction', notepad: 'Notepad' };
        var color = typeColors[type] || '#5856d6';
        var label = typeLabels[type] || 'Block';

        var html = '<div class="eb-overlay" onclick="window.app._closeEditModal()">' +
            '<div class="eb-modal" onclick="event.stopPropagation()">' +
                '<div class="eb-header">' +
                    '<div class="eb-header-left">' +
                        '<div class="eb-header-title">Edit ' + label + '</div>' +
                    '</div>' +
                    '<button class="eb-close" onclick="window.app._closeEditModal()"><i data-lucide="x"></i></button>' +
                '</div>' +
                '<div class="eb-body">';

        if (type === 'notepad') {
            html += '<div class="eb-group"><label class="eb-label">Title</label>' +
                '<input type="text" class="eb-input" id="ebContent" value="' + this.escapeHtml(block.subject || '') + '" placeholder="Note title..."></div>';
            html += '<div class="eb-group"><label class="eb-label">Note Content</label>' +
                '<div class="np-modal-toolbar">' +
                    '<div class="np-tb-group">' +
                        '<select class="np-select np-font-select" onchange="window.app._npBlockFormat(\'fontName\', this.value)">' +
                            '<option value="Segoe UI" style="font-family:Segoe UI">Segoe UI</option><option value="Arial" style="font-family:Arial">Arial</option><option value="Georgia" style="font-family:Georgia">Georgia</option><option value="Times New Roman" style="font-family:Times New Roman">Times New Roman</option><option value="Courier New" style="font-family:Courier New">Courier New</option><option value="Verdana" style="font-family:Verdana">Verdana</option><option value="Trebuchet MS" style="font-family:Trebuchet MS">Trebuchet MS</option><option value="Comic Sans MS" style="font-family:Comic Sans MS">Comic Sans MS</option><option value="Impact" style="font-family:Impact">Impact</option><option value="Lucida Console" style="font-family:Lucida Console">Lucida Console</option><option value="Palatino Linotype" style="font-family:Palatino Linotype">Palatino</option><option value="Garamond" style="font-family:Garamond">Garamond</option><option value="Tahoma" style="font-family:Tahoma">Tahoma</option><option value="Century Gothic" style="font-family:Century Gothic">Century Gothic</option><option value="Book Antiqua" style="font-family:Book Antiqua">Book Antiqua</option>' +
                        '</select>' +
                        '<select class="np-select np-size-select" onchange="window.app._npBlockFormat(\'fontSize\', this.value)">' +
                            '<option value="3">Size</option><option value="1">Tiny</option><option value="2">Small</option><option value="3">Normal</option><option value="4">Medium</option><option value="5">Large</option><option value="6">XL</option><option value="7">XXL</option>' +
                        '</select>' +
                    '</div>' +
                    '<div class="np-tb-group">' +
                        '<button type="button" class="np-tbtn" onclick="window.app._npBlockFormat(\'bold\')" title="Bold"><b>B</b></button>' +
                        '<button type="button" class="np-tbtn" onclick="window.app._npBlockFormat(\'italic\')" title="Italic"><i>I</i></button>' +
                        '<button type="button" class="np-tbtn" onclick="window.app._npBlockFormat(\'underline\')" title="Underline"><u>U</u></button>' +
                        '<button type="button" class="np-tbtn" onclick="window.app._npBlockFormat(\'strikeThrough\')" title="Strikethrough"><s>S</s></button>' +
                        '<div class="np-highlight-dropdown">' +
                            '<button type="button" class="np-tbtn np-highlight-btn" title="Highlight Color">&#128396;</button>' +
                            '<div class="np-highlight-popup">' +
                                '<div class="np-hl-swatch" style="background:#fef08a" onclick="window.app._npBlockFormat(\'hiliteColor\',\'#fef08a\')" title="Yellow"></div>' +
                                '<div class="np-hl-swatch" style="background:#bbf7d0" onclick="window.app._npBlockFormat(\'hiliteColor\',\'#bbf7d0\')" title="Green"></div>' +
                                '<div class="np-hl-swatch" style="background:#bfdbfe" onclick="window.app._npBlockFormat(\'hiliteColor\',\'#bfdbfe\')" title="Blue"></div>' +
                                '<div class="np-hl-swatch" style="background:#fbcfe8" onclick="window.app._npBlockFormat(\'hiliteColor\',\'#fbcfe8\')" title="Pink"></div>' +
                                '<div class="np-hl-swatch" style="background:#fed7aa" onclick="window.app._npBlockFormat(\'hiliteColor\',\'#fed7aa\')" title="Orange"></div>' +
                                '<div class="np-hl-swatch" style="background:#ddd6fe" onclick="window.app._npBlockFormat(\'hiliteColor\',\'#ddd6fe\')" title="Purple"></div>' +
                                '<div class="np-hl-swatch" style="background:#e2e8f0" onclick="window.app._npBlockFormat(\'hiliteColor\',\'#e2e8f0\')" title="Gray"></div>' +
                                '<div class="np-hl-swatch" style="background:#ffffff;border:1px solid #ccc" onclick="window.app._npBlockFormat(\'hiliteColor\',\'#ffffff\')" title="Remove"></div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                    '<div class="np-tb-group">' +
                        '<button type="button" class="np-tbtn" onclick="window.app._npBlockFormat(\'justifyLeft\')" title="Align Left">&#8676;</button>' +
                        '<button type="button" class="np-tbtn" onclick="window.app._npBlockFormat(\'justifyCenter\')" title="Align Center">&#8596;</button>' +
                        '<button type="button" class="np-tbtn" onclick="window.app._npBlockFormat(\'justifyRight\')" title="Align Right">&#8677;</button>' +
                        '<button type="button" class="np-tbtn" onclick="window.app._npBlockFormat(\'justifyFull\')" title="Justify" style="font-size:10px;">JFY</button>' +
                    '</div>' +
                    '<div class="np-tb-group">' +
                        '<button type="button" class="np-tbtn" onclick="window.app._npBlockFormat(\'insertUnorderedList\')" title="Bullet List">&bull; &#8226;</button>' +
                        '<button type="button" class="np-tbtn" onclick="window.app._npBlockFormat(\'insertOrderedList\')" title="Numbered List">1. &#8226;</button>' +
                        '<button type="button" class="np-tbtn" onclick="window.app._npBlockFormat(\'insertUnorderedList\');window.app._npBlockFormat(\'insertUnorderedList\')" title="Dash List" style="font-size:10px;">&#8212; List</button>' +
                    '</div>' +
                    '<div class="np-tb-group">' +
                        '<button type="button" class="np-tbtn" onclick="window.app._npInsertTable()" title="Insert Table" style="font-size:10px;">&#9638; Table</button>' +
                        '<label class="np-tbtn np-file-upload" title="Insert Image">&#128247; Image' +
                            '<input type="file" id="ebNpImageInput" accept=".jpg,.jpeg,.png" multiple onchange="window.app._npBlockInsertImage(event)" style="display:none">' +
                        '</label>' +
                    '</div>' +
                    '<div class="np-tb-group">' +
                        '<select class="np-select" onchange="window.app._npBlockInsertIcon(this)" title="Insert Icon">' +
                            '<option value="">&#11088; Icons</option>' +
                            '<optgroup label="Status"><option value="&#9989;">&#9989; Check</option><option value="&#10060;">&#10060; Cross</option><option value="&#9888;&#65039;">&#9888;&#65039; Warning</option><option value="&#128680;">&#128680; Prohibited</option><option value="&#128274;">&#128274; Locked</option><option value="&#128275;">&#128275; Unlocked</option></optgroup>' +
                            '<optgroup label="Objects"><option value="&#128204;">&#128204; Pin</option><option value="&#128221;">&#128221; Pencil</option><option value="&#128222;">&#128222; Phone</option><option value="&#128187;">&#128187; PC</option><option value="&#128188;">&#128188; Briefcase</option><option value="&#128203;">&#128203; Clipboard</option><option value="&#128218;">&#128218; Book</option><option value="&#128214;">&#128214; Open Book</option></optgroup>' +
                            '<optgroup label="Arrows"><option value="&#10145;&#65039;">&#10145;&#65039; Right</option><option value="&#11013;&#65039;">&#11013;&#65039; Left</option><option value="&#11014;&#65039;">&#11014;&#65039; Up</option><option value="&#11015;&#65039;">&#11015;&#65039; Down</option></optgroup>' +
                            '<optgroup label="Stars &amp; Hearts"><option value="&#11088;">&#11088; Star</option><option value="&#11089;">&#11089; Orange Star</option><option value="&#11090;">&#11090; Yellow Star</option><option value="&#11091;">&#11091; Green Star</option><option value="&#128150;">&#128150; Heart</option><option value="&#128154;">&#128154; Green Heart</option><option value="&#128155;">&#128155; Blue Heart</option><option value="&#128156;">&#128156; Purple Heart</option></optgroup>' +
                            '<optgroup label="Nature"><option value="&#9728;&#65039;">&#9728;&#65039; Sun</option><option value="&#127774;">&#127774; Moon</option><option value="&#9749;">&#9749; Coffee</option><option value="&#128293;">&#128293; Fire</option></optgroup>' +
                            '<optgroup label="Symbols"><option value="&#128161;">&#128161; Bulb</option><option value="&#128176;">&#128176; Money</option><option value="&#128276;">&#128276; Bell</option><option value="&#128681;">&#128681; Flag</option><option value="&#127919;">&#127919; Target</option><option value="&#127937;">&#127937; Trophy</option><option value="&#127942;">&#127942; Medal</option></optgroup>' +
                        '</select>' +
                    '</div>' +
                    '<div class="np-tb-group np-tb-last">' +
                        '<input type="color" class="np-color-pick" value="#000000" onchange="window.app._npBlockFormat(\'foreColor\', this.value)" title="Text Color">' +
                        '<button type="button" class="np-tbtn np-tbtn-clear" onclick="window.app._npBlockFormat(\'removeFormat\')" title="Clear Formatting">&#10005;</button>' +
                    '</div>' +
                '</div>' +
                '<div class="np-modal-editor" id="ebNpEditor" contenteditable="true" data-placeholder="Write your note..."></div>' +
                '</div>';
        } else {
            html += '<div class="eb-group"><label class="eb-label">Title / Content *</label>' +
                '<input type="text" class="eb-input" id="ebContent" value="' + this.escapeHtml(block.content || '') + '" placeholder="Enter title..."></div>';

            html += '<div class="eb-group"><label class="eb-label">Description</label>' +
                '<textarea class="eb-textarea" id="ebDescription" rows="3" placeholder="Add details...">' + this.escapeHtml(block.description || '') + '</textarea></div>';
        }

        if (type === 'task') {
            var st = block.task_status || 'pending';
            html += '<div class="eb-row">' +
                '<div class="eb-group eb-half"><label class="eb-label">Status</label>' +
                '<select class="eb-select" id="ebTaskStatus">' +
                '<option value="pending"' + (st === 'pending' ? ' selected' : '') + '>Pending</option>' +
                '<option value="in_progress"' + (st === 'in_progress' ? ' selected' : '') + '>In Progress</option>' +
                '<option value="on_hold"' + (st === 'on_hold' ? ' selected' : '') + '>On Hold</option>' +
                '<option value="completed"' + (st === 'completed' ? ' selected' : '') + '>Completed</option>' +
                '</select></div>';

            var pri = block.task_priority || 'medium';
            html += '<div class="eb-group eb-half"><label class="eb-label">Priority</label>' +
                '<select class="eb-select" id="ebTaskPriority">' +
                '<option value="low"' + (pri === 'low' ? ' selected' : '') + '>Low</option>' +
                '<option value="medium"' + (pri === 'medium' ? ' selected' : '') + '>Medium</option>' +
                '<option value="high"' + (pri === 'high' ? ' selected' : '') + '>High</option>' +
                '</select></div></div>';

            var cat = block.category || 'general';
            html += '<div class="eb-row">' +
                '<div class="eb-group eb-half"><label class="eb-label">Category</label>' +
                '<select class="eb-select" id="ebCategory">' +
                '<option value="general"' + (cat === 'general' ? ' selected' : '') + '>General</option>' +
                '<option value="billing"' + (cat === 'billing' ? ' selected' : '') + '>Billing</option>' +
                '<option value="attendance"' + (cat === 'attendance' ? ' selected' : '') + '>Attendance</option>' +
                '<option value="documentation"' + (cat === 'documentation' ? ' selected' : '') + '>Documentation</option>' +
                '<option value="followup"' + (cat === 'followup' ? ' selected' : '') + '>Follow-up</option>' +
                '<option value="claims"' + (cat === 'claims' ? ' selected' : '') + '>Claims</option>' +
                '<option value="other"' + (cat === 'other' ? ' selected' : '') + '>Other</option>' +
                '</select></div>';

            html += '<div class="eb-group eb-half"><label class="eb-label">Due Date</label>' +
                '<input type="date" class="eb-input" id="ebDueDate" value="' + (block.due_date || '') + '"></div></div>';

            var rec = block.recurrence || 'none';
            html += '<div class="eb-group"><label class="eb-label">Recurrence</label>' +
                '<select class="eb-select" id="ebRecurrence">' +
                '<option value="none"' + (rec === 'none' ? ' selected' : '') + '>No repeat</option>' +
                '<option value="daily"' + (rec === 'daily' ? ' selected' : '') + '>Daily</option>' +
                '<option value="weekly_monday"' + (rec === 'weekly_monday' ? ' selected' : '') + '>Every Monday</option>' +
                '<option value="weekly_tuesday"' + (rec === 'weekly_tuesday' ? ' selected' : '') + '>Every Tuesday</option>' +
                '<option value="weekly_wednesday"' + (rec === 'weekly_wednesday' ? ' selected' : '') + '>Every Wednesday</option>' +
                '<option value="weekly_thursday"' + (rec === 'weekly_thursday' ? ' selected' : '') + '>Every Thursday</option>' +
                '<option value="weekly_friday"' + (rec === 'weekly_friday' ? ' selected' : '') + '>Every Friday</option>' +
                '<option value="weekly_saturday"' + (rec === 'weekly_saturday' ? ' selected' : '') + '>Every Saturday</option>' +
                '<option value="weekly_sunday"' + (rec === 'weekly_sunday' ? ' selected' : '') + '>Every Sunday</option>' +
                '<option value="biweekly"' + (rec === 'biweekly' ? ' selected' : '') + '>Every 2 Weeks</option>' +
                '<option value="monthly"' + (rec === 'monthly' ? ' selected' : '') + '>Every Month</option>' +
                '</select></div>';
        }

        if (type === 'reminder') {
            var isActive = block.is_active === 1 || block.is_active === '1';
            html += '<div class="eb-row">' +
                '<div class="eb-group eb-half"><label class="eb-label">Active</label>' +
                '<select class="eb-select" id="ebIsActive">' +
                '<option value="1"' + (isActive ? ' selected' : '') + '>Active</option>' +
                '<option value="0"' + (!isActive ? ' selected' : '') + '>Inactive</option>' +
                '</select></div>';

            var isImp = block.priority === 'important';
            html += '<div class="eb-group eb-half"><label class="eb-label">Priority</label>' +
                '<select class="eb-select" id="ebPriority">' +
                '<option value="normal"' + (!isImp ? ' selected' : '') + '>Normal</option>' +
                '<option value="important"' + (isImp ? ' selected' : '') + '>Very Important</option>' +
                '</select></div></div>';

            html += '<div class="eb-row">' +
                '<div class="eb-group eb-half"><label class="eb-label">Date</label>' +
                '<input type="date" class="eb-input" id="ebDueDate" value="' + (block.due_date || '') + '"></div>';

            html += '<div class="eb-group eb-half"><label class="eb-label">Time</label>' +
                '<input type="time" class="eb-input" id="ebReminderTime" value="' + (block.reminder_time || '') + '"></div></div>';

            var rec2 = block.recurrence || 'none';
            html += '<div class="eb-group"><label class="eb-label">Recurrence</label>' +
                '<select class="eb-select" id="ebRecurrence">' +
                '<option value="none"' + (rec2 === 'none' ? ' selected' : '') + '>No repeat</option>' +
                '<option value="daily"' + (rec2 === 'daily' ? ' selected' : '') + '>Daily</option>' +
                '<option value="weekly_monday"' + (rec2 === 'weekly_monday' ? ' selected' : '') + '>Every Monday</option>' +
                '<option value="weekly_tuesday"' + (rec2 === 'weekly_tuesday' ? ' selected' : '') + '>Every Tuesday</option>' +
                '<option value="weekly_wednesday"' + (rec2 === 'weekly_wednesday' ? ' selected' : '') + '>Every Wednesday</option>' +
                '<option value="weekly_thursday"' + (rec2 === 'weekly_thursday' ? ' selected' : '') + '>Every Thursday</option>' +
                '<option value="weekly_friday"' + (rec2 === 'weekly_friday' ? ' selected' : '') + '>Every Friday</option>' +
                '<option value="weekly_saturday"' + (rec2 === 'weekly_saturday' ? ' selected' : '') + '>Every Saturday</option>' +
                '<option value="weekly_sunday"' + (rec2 === 'weekly_sunday' ? ' selected' : '') + '>Every Sunday</option>' +
                '<option value="biweekly"' + (rec2 === 'biweekly' ? ' selected' : '') + '>Every 2 Weeks</option>' +
                '<option value="monthly"' + (rec2 === 'monthly' ? ' selected' : '') + '>Every Month</option>' +
                '</select></div>';

            html += '<div class="eb-group"><label class="eb-label">Reference Detail</label>' +
                '<input type="text" class="eb-input" id="ebRefDetail" value="' + this.escapeHtml(block.ref_detail || '') + '" placeholder="e.g. From manager, email reminder..."></div>';
        }

        if (type === 'instruction') {
            var isAct2 = block.is_active === 1 || block.is_active === '1';
            html += '<div class="eb-row">' +
                '<div class="eb-group eb-half"><label class="eb-label">Active</label>' +
                '<select class="eb-select" id="ebIsActive">' +
                '<option value="1"' + (isAct2 ? ' selected' : '') + '>Active</option>' +
                '<option value="0"' + (!isAct2 ? ' selected' : '') + '>Inactive</option>' +
                '</select></div>';

            var isImp2 = block.priority === 'important';
            html += '<div class="eb-group eb-half"><label class="eb-label">Priority</label>' +
                '<select class="eb-select" id="ebPriority">' +
                '<option value="normal"' + (!isImp2 ? ' selected' : '') + '>Normal</option>' +
                '<option value="important"' + (isImp2 ? ' selected' : '') + '>Very Important</option>' +
                '</select></div></div>';

            html += '<div class="eb-row">' +
                '<div class="eb-group eb-half"><label class="eb-label">Reference Date</label>' +
                '<input type="date" class="eb-input" id="ebRefDate" value="' + (block.ref_date || '') + '"></div>';

            html += '<div class="eb-group eb-half"><label class="eb-label">End Date</label>' +
                '<input type="date" class="eb-input" id="ebEndDate" value="' + (block.end_date || '') + '"></div></div>';

            var refType = block.ref_type || 'none';
            html += '<div class="eb-group"><label class="eb-label">Reference Type</label>' +
                '<select class="eb-select" id="ebRefType">' +
                '<option value="none"' + (refType === 'none' ? ' selected' : '') + '>None</option>' +
                '<option value="email"' + (refType === 'email' ? ' selected' : '') + '>Email</option>' +
                '<option value="call"' + (refType === 'call' ? ' selected' : '') + '>Call</option>' +
                '<option value="message"' + (refType === 'message' ? ' selected' : '') + '>Message</option>' +
                '<option value="meeting"' + (refType === 'meeting' ? ' selected' : '') + '>Meeting</option>' +
                '<option value="document"' + (refType === 'document' ? ' selected' : '') + '>Document</option>' +
                '</select></div>';

            html += '<div class="eb-group"><label class="eb-label">Reference Detail</label>' +
                '<input type="text" class="eb-input" id="ebRefDetail" value="' + this.escapeHtml(block.ref_detail || '') + '" placeholder="e.g. From manager, email reminder..."></div>';
        }

        if (type !== 'notepad') {
            html += '<div class="eb-group"><label class="eb-label">Subject</label>' +
                '<input type="text" class="eb-input" id="ebSubject" value="' + this.escapeHtml(block.subject || '') + '" placeholder="Add subject..."></div>';
        }

        var existingImages = [];
        if (block.image_path) {
            try { existingImages = JSON.parse(block.image_path); } catch(e) { if (block.image_path) existingImages = [block.image_path]; }
        }
        html += '<div class="eb-group"><label class="eb-label">Images</label>' +
            '<div class="eb-images-grid" id="ebImagesGrid">';
        existingImages.forEach(function(img, idx) {
            html += '<div class="eb-img-item"><img src="' + img + '"><button class="eb-img-remove" onclick="window.app._ebRemoveImage(' + idx + ')" type="button">&times;</button></div>';
        });
        html += '</div>' +
            '<label class="eb-img-upload-btn"><i data-lucide="image-plus"></i> Add Images' +
            '<input type="file" accept=".jpg,.jpeg,.png,.gif,.webp" multiple style="display:none" onchange="window.app._ebAddImages(event)">' +
            '</label></div>';

        html += '<div class="eb-actions">' +
            '<button class="eb-btn eb-cancel" onclick="window.app._closeEditModal()">Cancel</button>' +
            '<button class="eb-btn eb-save" onclick="window.app._saveEditModal(' + block.id + ')">Save Changes</button>' +
            '</div>';

        html += '</div></div></div>';

        var existing = document.querySelector('.eb-overlay');
        if (existing) existing.remove();
        document.body.insertAdjacentHTML('beforeend', html);
        if (typeof lucide !== 'undefined') lucide.createIcons();
        this._ebExistingImages = existingImages;
        if (type === 'notepad') {
            var ebEditor = document.getElementById('ebNpEditor');
            if (ebEditor) ebEditor.innerHTML = block.content || '';
        }
    }

    _ebAddImages(event) {
        var files = event.target.files;
        if (!files || files.length === 0) return;
        var self = this;
        var grid = document.getElementById('ebImagesGrid');
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            if (!file.type.match(/^image\/(jpeg|jpg|png|gif|webp)$/)) continue;
            (function(f) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    self._ebExistingImages.push(e.target.result);
                    var div = document.createElement('div');
                    div.className = 'eb-img-item';
                    div.innerHTML = '<img src="' + e.target.result + '"><button class="eb-img-remove" onclick="window.app._ebRemoveImage(' + (self._ebExistingImages.length - 1) + ')" type="button">&times;</button>';
                    grid.appendChild(div);
                };
                reader.readAsDataURL(f);
            })(file);
        }
        event.target.value = '';
    }

    _ebRemoveImage(idx) {
        this._ebExistingImages.splice(idx, 1);
        var grid = document.getElementById('ebImagesGrid');
        grid.innerHTML = '';
        var self = this;
        this._ebExistingImages.forEach(function(img, i) {
            var div = document.createElement('div');
            div.className = 'eb-img-item';
            div.innerHTML = '<img src="' + img + '"><button class="eb-img-remove" onclick="window.app._ebRemoveImage(' + i + ')" type="button">&times;</button>';
            grid.appendChild(div);
        });
    }

    async _saveEditModal(blockId) {
        var block = this.currentBlocks.find(function(b) { return b.id == blockId; });
        if (!block) return;
        var type = block.block_type;
        var updates = {};

        if (type === 'notepad') {
            var ebEditor = document.getElementById('ebNpEditor');
            updates.content = ebEditor ? ebEditor.innerHTML.trim() : block.content;
            updates.subject = document.getElementById('ebContent').value.trim();
        } else {
            updates.content = document.getElementById('ebContent').value.trim() || block.content;
            updates.description = document.getElementById('ebDescription').value.trim();
            updates.subject = document.getElementById('ebSubject').value.trim();
        }

        if (this._ebExistingImages && this._ebExistingImages.length > 0) {
            updates.image_path = JSON.stringify(this._ebExistingImages);
        } else {
            updates.image_path = '';
        }

        if (type === 'task') {
            updates.task_status = document.getElementById('ebTaskStatus').value;
            updates.task_priority = document.getElementById('ebTaskPriority').value;
            updates.category = document.getElementById('ebCategory').value;
            updates.due_date = document.getElementById('ebDueDate').value;
            updates.recurrence = document.getElementById('ebRecurrence').value;
        }
        if (type === 'reminder') {
            updates.is_active = parseInt(document.getElementById('ebIsActive').value);
            updates.priority = document.getElementById('ebPriority').value;
            updates.due_date = document.getElementById('ebDueDate').value;
            updates.reminder_time = document.getElementById('ebReminderTime').value;
            updates.recurrence = document.getElementById('ebRecurrence').value;
            updates.ref_detail = document.getElementById('ebRefDetail').value.trim();
        }
        if (type === 'instruction') {
            updates.is_active = parseInt(document.getElementById('ebIsActive').value);
            updates.priority = document.getElementById('ebPriority').value;
            updates.ref_date = document.getElementById('ebRefDate').value;
            updates.end_date = document.getElementById('ebEndDate').value;
            updates.ref_type = document.getElementById('ebRefType').value;
            updates.ref_detail = document.getElementById('ebRefDetail').value.trim();
        }

        this._closeEditModal();
        await this.updateBlock(blockId, updates);
    }

    _closeEditModal() {
        var overlay = document.querySelector('.eb-overlay');
        if (overlay) overlay.remove();
    }

    async updateBlock(blockId, updates) {
        try {
            const res = await fetch('/api/blocks/' + blockId, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updates)
            });
            if (res.ok) {
                const updated = await res.json();
                const idx = this.currentBlocks.findIndex(b => b.id === blockId);
                if (idx !== -1) this.currentBlocks[idx] = updated;
                this.renderBlocks();
            }
        } catch (err) {
            console.error('Failed to update block:', err);
        }
    }

    async deleteBlock(blockId) {
        try {
            const res = await fetch('/api/blocks/' + blockId, { method: 'DELETE' });
            if (res.ok) {
                this.currentBlocks = this.currentBlocks.filter(b => b.id !== blockId);
                this.renderBlocks();
                this.refreshSearchIndex();
            }
        } catch (err) {
            console.error('Failed to delete block:', err);
        }
    }

    async deleteCurrentPage() {
        if (!this.currentPage) return;
        if (!confirm('Delete "' + this.currentPage.title + '"? This cannot be undone.')) return;

        try {
            const res = await fetch('/api/pages/' + this.currentPage.id, { method: 'DELETE' });
            if (res.ok) {
                this.currentPage = null;
                await this.loadPages();
                await this.showDashboard();
            }
        } catch (err) {
            console.error('Failed to delete page:', err);
        }
    }

    async updatePageTitle(title) {
        if (!this.currentPage || !title.trim()) return;

        try {
            const res = await fetch('/api/pages/' + this.currentPage.id, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title: title.trim() })
            });
            if (res.ok) {
                const updated = await res.json();
                this.currentPage.title = updated.title;
                const page = this.pages.find(p => p.id === this.currentPage.id);
                if (page) page.title = updated.title;
                this.renderPagesList();
                this.refreshSearchIndex();
            }
        } catch (err) {
            console.error('Failed to update title:', err);
        }
    }

    async updatePageIcon(icon) {
        if (!this.currentPage) return;

        try {
            const res = await fetch('/api/pages/' + this.currentPage.id, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ icon })
            });
            if (res.ok) {
                const updated = await res.json();
                this.currentPage.icon = updated.icon;
                document.getElementById('pageIconBtn').innerHTML = renderIcon(icon);
                const page = this.pages.find(p => p.id === this.currentPage.id);
                if (page) page.icon = icon;
                this.renderPagesList();
            }
        } catch (err) {
            console.error('Failed to update icon:', err);
        }
    }

    toggleIconPicker() {
        const picker = document.getElementById('iconPicker');
        if (picker.classList.contains('hidden')) {
            this._iconPickerTab = 'emoji';
            this._renderTabbedPicker(picker);
            picker.classList.remove('hidden');
        } else {
            picker.classList.add('hidden');
        }
    }

    _renderTabbedPicker(picker) {
        var self = this;
        var tab = this._iconPickerTab || 'emoji';
        var icons = ICON_CATEGORIES[tab] || [];
        var tabs = Object.keys(ICON_TAB_LABELS);
        var html = '<div class="icon-picker-tabs">';
        tabs.forEach(function(t) {
            html += '<button class="icon-picker-tab' + (t === tab ? ' active' : '') + '" data-tab="' + t + '">' + ICON_TAB_LABELS[t] + '</button>';
        });
        html += '</div>';
        html += '<div class="icon-picker-grid">';
        icons.forEach(function(icon) {
            html += '<button class="icon-option" data-icon="' + icon + '">' + renderIcon(icon) + '</button>';
        });
        html += '</div>';
        picker.innerHTML = html;
        picker.querySelectorAll('.icon-picker-tab').forEach(function(btn) {
            btn.addEventListener('click', function() {
                self._iconPickerTab = btn.dataset.tab;
                self._renderTabbedPicker(picker);
            });
        });
        picker.querySelectorAll('.icon-option').forEach(function(btn) {
            btn.addEventListener('click', function(e) {
                var icon = e.target.closest('.icon-option').dataset.icon;
                self.updatePageIcon(icon);
                picker.classList.add('hidden');
            });
        });
    }

    _renderTabbedModalGrid(selectedIcon, targetId) {
        var tab = this._modalIconTab || 'emoji';
        var icons = ICON_CATEGORIES[tab] || [];
        var tabs = Object.keys(ICON_TAB_LABELS);
        var html = '<div class="icon-picker-tabs">';
        tabs.forEach(function(t) {
            html += '<button class="icon-picker-tab' + (t === tab ? ' active' : '') + '" data-tab="' + t + '">' + ICON_TAB_LABELS[t] + '</button>';
        });
        html += '</div>';
        html += '<div class="modal-icon-grid" id="' + targetId + '">';
        icons.forEach(function(icon) {
            var sel = icon === selectedIcon ? ' selected' : '';
            html += '<button class="modal-icon-option' + sel + '" data-icon="' + icon + '">' + renderIcon(icon) + '</button>';
        });
        html += '</div>';
        return html;
    }

    _bindModalIconGrid(targetId, varName) {
        var self = this;
        var prop = varName || '_selectedPageIcon';
        var container = document.getElementById(targetId);
        if (!container) return;
        container.parentElement.querySelectorAll('.icon-picker-tab').forEach(function(btn) {
            btn.addEventListener('click', function() {
                self._modalIconTab = btn.dataset.tab;
                var gridContainer = container.parentElement;
                var sel = self[prop];
                var newHtml = self._renderTabbedModalGrid(sel, targetId);
                gridContainer.innerHTML = newHtml;
                self._bindModalIconGrid(targetId, varName);
            });
        });
        container.querySelectorAll('.modal-icon-option').forEach(function(btn) {
            btn.addEventListener('click', function(ev) {
                container.querySelectorAll('.modal-icon-option').forEach(function(b) { b.classList.remove('selected'); });
                ev.currentTarget.classList.add('selected');
                self[prop] = ev.currentTarget.dataset.icon;
            });
        });
    }

    renderIconPickerGrid(selectedIcon, targetId) {
        this._modalIconTab = 'emoji';
        return this._renderTabbedModalGrid(selectedIcon, targetId);
    }

    toggleBlockTypeMenu() {
        const menu = document.getElementById('blockTypeMenu');
        menu.classList.toggle('hidden');
    }

    hideBlockTypeMenu() {
        document.getElementById('blockTypeMenu').classList.add('hidden');
    }

    toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebarOverlay');
        if (window.innerWidth <= 991) {
            sidebar.classList.toggle('show');
            overlay.classList.toggle('active');
        } else {
            sidebar.classList.toggle('sidebar-narrow');
            document.body.classList.toggle('sidebar-collapsed');
        }
    }

    toggleMobileSidebar() {
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebarOverlay');
        sidebar.classList.toggle('show');
        overlay.classList.toggle('active');
    }

    closeMobileSidebar() {
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebarOverlay');
        sidebar.classList.remove('show');
        overlay.classList.remove('active');
    }

    showAddPageModal() {
        this._selectedPageIcon = 'cil-file';
        const iconGrid = this.renderIconPickerGrid('cil-file', 'modalIconGrid');

        this.showModal('Create New Page',
            '<div class="form-group">' +
            '<label class="form-label">Choose Icon</label>' +
            iconGrid +
            '</div>' +
            '<div class="form-group">' +
            '<label class="form-label">Page Title</label>' +
            '<input type="text" class="modal-input" id="newPageTitle" placeholder="Enter page title" autofocus>' +
            '</div>',
            '<button class="btn-modal btn-modal-secondary" onclick="window.app.hideModal()">Cancel</button>' +
            '<button class="btn-modal btn-modal-primary" onclick="window.app.createPage()">Create</button>'
        );
        setTimeout(() => {
            const input = document.getElementById('newPageTitle');
            if (input) {
                input.focus();
                input.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter') this.createPage();
                });
            }
            this._bindModalIconGrid('modalIconGrid');
        }, 100);
    }

    showEditPageModal(pageId) {
        const page = this.pages.find(p => p.id === pageId);
        if (!page) return;
        this._editingPageId = pageId;
        this._selectedPageIcon = page.icon || 'cil-file';
        const iconGrid = this.renderIconPickerGrid(page.icon || 'cil-file', 'modalIconGrid');

        this.showModal('Edit Page',
            '<div class="form-group">' +
            '<label class="form-label">Choose Icon</label>' +
            iconGrid +
            '</div>' +
            '<div class="form-group">' +
            '<label class="form-label">Page Title</label>' +
            '<input type="text" class="modal-input" id="editPageTitle" value="' + this.escapeHtml(page.title) + '">' +
            '</div>',
            '<button class="btn-modal btn-modal-secondary" onclick="window.app.hideModal()">Cancel</button>' +
            '<button class="btn-modal btn-modal-primary" onclick="window.app.saveEditPage()">Save Changes</button>'
        );
        setTimeout(() => {
            const input = document.getElementById('editPageTitle');
            if (input) {
                input.focus();
                input.select();
                input.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter') this.saveEditPage();
                });
            }
            this._bindModalIconGrid('modalIconGrid');
        }, 100);
    }

    async saveEditPage() {
        if (!this._editingPageId) return;
        const title = document.getElementById('editPageTitle').value.trim();
        if (!title) return;

        try {
            const res = await fetch('/api/pages/' + this._editingPageId, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, icon: this._selectedPageIcon })
            });
            if (res.ok) {
                const page = this.pages.find(p => p.id === this._editingPageId);
                if (page) { page.title = title; page.icon = this._selectedPageIcon; }
                if (this.currentPage && this.currentPage.id === this._editingPageId) {
                    this.currentPage.title = title;
                    this.currentPage.icon = this._selectedPageIcon;
                    document.getElementById('pageTitleInput').value = title;
                    document.getElementById('pageIconBtn').innerHTML = renderIcon(this._selectedPageIcon);
                }
                this.hideModal();
                this.renderPagesList();
                this.refreshSearchIndex();
            }
        } catch (err) {
            console.error('Failed to update page:', err);
        }
    }

    async createPage() {
        const title = document.getElementById('newPageTitle').value.trim();
        if (!title) return;

        try {
            const res = await fetch('/api/pages', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, icon: this._selectedPageIcon })
            });
            if (res.ok) {
                const page = await res.json();
                this.hideModal();
                await this.loadPages();
                this.loadPage(page.id);
                this.refreshSearchIndex();
            }
        } catch (err) {
            console.error('Failed to create page:', err);
        }
    }

    showAddBlockModal(type) {
        if (!this.currentPage) {
            this.showModal('Notice', '<p>Please open a page first before adding blocks.</p>',
                '<button class="btn-modal btn-modal-primary" onclick="window.app.hideModal()">OK</button>');
            return;
        }

        const labels = { instruction: 'Instruction', task: 'Task', reminder: 'Reminder', notepad: 'Notepad' };
        const placeholders = {
            instruction: 'Enter billing rule, guideline, or SOP...',
            task: 'Enter task description...',
            reminder: 'Enter reminder message...',
            notepad: 'Start writing...'
        };

        let extraFields = '';
        if (type === 'instruction') {
            extraFields = '<div class="form-group">' +
                '<label class="form-label">Subject (for search)</label>' +
                '<input type="text" class="modal-input" id="newBlockSubject" placeholder="e.g. Modifier 25 Rule, CPT Code Update...">' +
                '</div>' +
                '<div class="form-row">' +
                '<div class="form-group">' +
                '<label class="form-label">Date</label>' +
                '<input type="date" class="modal-input" id="newBlockRefDate" value="' + new Date().toISOString().split('T')[0] + '">' +
                '</div>' +
                '<div class="form-group">' +
                '<label class="form-label">Reference Type</label>' +
                '<select class="modal-input" id="newBlockRefType">' +
                '<option value="none">None</option>' +
                '<option value="email">📧 Email</option>' +
                '<option value="call">📞 Call</option>' +
                '<option value="message">💬 Message</option>' +
                '<option value="meeting">🤝 Meeting</option>' +
                '<option value="document">📄 Document</option>' +
                '</select></div>' +
                '</div>' +
                '<div class="form-row">' +
                '<div class="form-group">' +
                '<label class="form-label">Reference Detail</label>' +
                '<input type="text" class="modal-input" id="newBlockRefDetail" placeholder="e.g. From manager, from insurance email...">' +
                '</div>' +
                '<div class="form-group">' +
                '<label class="form-label">Priority</label>' +
                '<select class="modal-input" id="newBlockPriority">' +
                '<option value="normal">🟢 Normal</option>' +
                '<option value="important">🔴 Very Important</option>' +
                '</select></div>' +
                '</div>' +
                '<div class="form-row">' +
                '<div class="form-group">' +
                '<label class="form-label">Status</label>' +
                '<select class="modal-input" id="newBlockIsActive">' +
                '<option value="1">✅ Active</option>' +
                '<option value="0">⛔ Not Active</option>' +
                '</select></div>' +
                '<div class="form-group">' +
                '<label class="form-label">End Date (If not active)</label>' +
                '<input type="date" class="modal-input" id="newBlockEndDate" placeholder="Optional">' +
                '</div>' +
                '</div>' +
                '<div class="form-group">' +
                '<label class="form-label">Screenshot / Image (Optional)</label>' +
                '<div class="image-upload-area" id="imageUploadArea">' +
                '<input type="file" id="imageFileInput" accept="image/*" style="display:none">' +
                '<div class="image-upload-placeholder" id="imageUploadPlaceholder">' +
                '<span class="upload-icon">🖼️</span>' +
                '<span>Click to browse, or paste (Ctrl+V), or drag & drop</span>' +
                '</div>' +
                '<div class="image-preview-container hidden" id="imagePreviewContainer">' +
                '<img class="image-preview" id="imagePreview">' +
                '<button type="button" class="btn-remove-image" id="btnRemoveImage">✕ Remove</button>' +
                '</div>' +
                '</div>' +
                '</div>';
        }
        if (type === 'task') {
            extraFields = '<div class="form-row">' +
                '<div class="form-group">' +
                '<label class="form-label">Due Date</label>' +
                '<input type="date" class="modal-input" id="newBlockDueDate" value="' + new Date().toISOString().split('T')[0] + '">' +
                '</div>' +
                '<div class="form-group">' +
                '<label class="form-label">Priority</label>' +
                '<select class="modal-input" id="newBlockTaskPriority">' +
                '<option value="low">🟢 Low</option>' +
                '<option value="medium" selected>🟡 Medium</option>' +
                '<option value="high">🔴 High</option>' +
                '</select></div>' +
                '</div>' +
                '<div class="form-row">' +
                '<div class="form-group">' +
                '<label class="form-label">Category</label>' +
                '<select class="modal-input" id="newBlockCategory">' +
                '<option value="general">📁 General</option>' +
                '<option value="billing">💰 Billing</option>' +
                '<option value="attendance">📋 Attendance</option>' +
                '<option value="documentation">📝 Documentation</option>' +
                '<option value="followup">📞 Follow-up</option>' +
                '<option value="claims">🏥 Claims</option>' +
                '<option value="other">📌 Other</option>' +
                '</select></div>' +
                '<div class="form-group">' +
                '<label class="form-label">Status</label>' +
                '<select class="modal-input" id="newBlockTaskStatus">' +
                '<option value="pending">⬜ Pending</option>' +
                '<option value="in_progress">🔄 In Progress</option>' +
                '<option value="on_hold">⏸️ On Hold</option>' +
                '</select></div>' +
                '</div>' +
                '<div class="form-row">' +
                '<div class="form-group">' +
                '<label class="form-label">Repeat (Optional)</label>' +
                '<select class="modal-input" id="newBlockRecurrence">' +
                '<option value="none">No repeat</option>' +
                '<option value="daily">📅 Every Day</option>' +
                '<option value="weekly_monday">🔵 Every Monday</option>' +
                '<option value="weekly_tuesday">🟠 Every Tuesday</option>' +
                '<option value="weekly_wednesday">🟢 Every Wednesday</option>' +
                '<option value="weekly_thursday">🟡 Every Thursday</option>' +
                '<option value="weekly_friday">🔴 Every Friday</option>' +
                '<option value="weekly_saturday">🟣 Every Saturday</option>' +
                '<option value="weekly_sunday">⚪ Every Sunday</option>' +
                '<option value="biweekly">📆 Every 2 Weeks</option>' +
                '<option value="monthly">📅 Every Month</option>' +
                '</select></div>' +
                '<div class="form-group">' +
                '<label class="form-label">Description / Notes</label>' +
                '<input type="text" class="modal-input" id="newBlockDescription" placeholder="Optional notes...">' +
                '</div>' +
                '</div>' +
                '<div class="recurrence-note hidden" id="recurrenceNote">' +
                '💡 Task will auto-reset on the next due date after completion.' +
                '</div>' +
                '<div class="form-group">' +
                '<label class="form-label">Screenshot / Image (Optional)</label>' +
                '<div class="image-upload-area" id="imageUploadArea">' +
                '<input type="file" id="imageFileInput" accept="image/*" style="display:none">' +
                '<div class="image-upload-placeholder" id="imageUploadPlaceholder">' +
                '<span class="upload-icon">🖼️</span>' +
                '<span>Click to browse, or paste (Ctrl+V), or drag & drop</span>' +
                '</div>' +
                '<div class="image-preview-container hidden" id="imagePreviewContainer">' +
                '<img class="image-preview" id="imagePreview">' +
                '<button type="button" class="btn-remove-image" id="btnRemoveImage">✕ Remove</button>' +
                '</div>' +
                '</div>' +
                '</div>';
        }
        if (type === 'reminder') {
            extraFields = '<div class="form-row">' +
                '<div class="form-group">' +
                '<label class="form-label">Subject</label>' +
                '<input type="text" class="modal-input" id="newBlockSubject" placeholder="e.g. Follow-up call, Payment due...">' +
                '</div>' +
                '<div class="form-group">' +
                '<label class="form-label">Priority</label>' +
                '<select class="modal-input" id="newBlockPriority">' +
                '<option value="normal">🟢 Normal</option>' +
                '<option value="important">🔴 Very Important</option>' +
                '</select></div>' +
                '</div>' +
                '<div class="form-row">' +
                '<div class="form-group">' +
                '<label class="form-label">Due Date</label>' +
                '<input type="date" class="modal-input" id="newBlockDueDate" value="' + new Date().toISOString().split('T')[0] + '">' +
                '</div>' +
                '<div class="form-group">' +
                '<label class="form-label">Reminder Time</label>' +
                '<input type="time" class="modal-input" id="newBlockReminderTime" value="09:00">' +
                '</div>' +
                '</div>' +
                '<div class="form-row">' +
                '<div class="form-group">' +
                '<label class="form-label">Status</label>' +
                '<select class="modal-input" id="newBlockIsActive">' +
                '<option value="1">✅ Active</option>' +
                '<option value="0">⛔ Not Active</option>' +
                '</select></div>' +
                '<div class="form-group">' +
                '<label class="form-label">End Date (If inactive)</label>' +
                '<input type="date" class="modal-input" id="newBlockEndDate">' +
                '</div>' +
                '</div>' +
                '<div class="form-row">' +
                '<div class="form-group">' +
                '<label class="form-label">Recurrence</label>' +
                '<select class="modal-input" id="newBlockRecurrence">' +
                '<option value="none">No repeat</option>' +
                '<option value="daily">📅 Every Day</option>' +
                '<option value="weekly_monday">🔵 Every Monday</option>' +
                '<option value="weekly_tuesday">🟠 Every Tuesday</option>' +
                '<option value="weekly_wednesday">🟢 Every Wednesday</option>' +
                '<option value="weekly_thursday">🟡 Every Thursday</option>' +
                '<option value="weekly_friday">🔴 Every Friday</option>' +
                '<option value="weekly_saturday">🟣 Every Saturday</option>' +
                '<option value="weekly_sunday">⚪ Every Sunday</option>' +
                '<option value="biweekly">📆 Every 2 Weeks</option>' +
                '<option value="monthly">📅 Every Month</option>' +
                '</select></div>' +
                '<div class="form-group">' +
                '<label class="form-label">Description / Notes</label>' +
                '<input type="text" class="modal-input" id="newBlockDescription" placeholder="Optional notes...">' +
                '</div>' +
                '</div>' +
                '<div class="form-group">' +
                '<label class="form-label">Reference Detail</label>' +
                '<input type="text" class="modal-input" id="newBlockRefDetail" placeholder="e.g. From manager, email reminder...">' +
                '</div>' +
                '<div class="recurrence-note hidden" id="recurrenceNote">' +
                '💡 Reminder will alert you on each due date.' +
                '</div>' +
                '<div class="form-group">' +
                '<label class="form-label">Screenshot / Image (Optional)</label>' +
                '<div class="image-upload-area" id="imageUploadArea">' +
                '<input type="file" id="imageFileInput" accept="image/*" style="display:none">' +
                '<div class="image-upload-placeholder" id="imageUploadPlaceholder">' +
                '<span class="upload-icon">🖼️</span>' +
                '<span>Click to browse, or paste (Ctrl+V), or drag & drop</span>' +
                '</div>' +
                '<div class="image-preview-container hidden" id="imagePreviewContainer">' +
                '<img class="image-preview" id="imagePreview">' +
                '<button type="button" class="btn-remove-image" id="btnRemoveImage">✕ Remove</button>' +
                '</div>' +
                '</div>' +
                '</div>';
        }
        if (type === 'notepad') {
            extraFields = '<div class="form-group">' +
                '<label class="form-label">Subject (Optional)</label>' +
                '<input type="text" class="modal-input" id="newBlockSubject" placeholder="Note title...">' +
                '</div>' +
                '<div class="np-modal-toolbar">' +
                    '<div class="np-tb-group">' +
                        '<select class="np-select np-font-select" onchange="window.app._npBlockFormat(\'fontName\', this.value)">' +
                            '<option value="Segoe UI" style="font-family:Segoe UI">Segoe UI</option>' +
                            '<option value="Arial" style="font-family:Arial">Arial</option>' +
                            '<option value="Georgia" style="font-family:Georgia">Georgia</option>' +
                            '<option value="Times New Roman" style="font-family:Times New Roman">Times New Roman</option>' +
                            '<option value="Courier New" style="font-family:Courier New">Courier New</option>' +
                            '<option value="Verdana" style="font-family:Verdana">Verdana</option>' +
                            '<option value="Trebuchet MS" style="font-family:Trebuchet MS">Trebuchet MS</option>' +
                            '<option value="Comic Sans MS" style="font-family:Comic Sans MS">Comic Sans MS</option>' +
                            '<option value="Impact" style="font-family:Impact">Impact</option>' +
                            '<option value="Lucida Console" style="font-family:Lucida Console">Lucida Console</option>' +
                            '<option value="Palatino Linotype" style="font-family:Palatino Linotype">Palatino</option>' +
                            '<option value="Garamond" style="font-family:Garamond">Garamond</option>' +
                            '<option value="Tahoma" style="font-family:Tahoma">Tahoma</option>' +
                            '<option value="Century Gothic" style="font-family:Century Gothic">Century Gothic</option>' +
                            '<option value="Book Antiqua" style="font-family:Book Antiqua">Book Antiqua</option>' +
                        '</select>' +
                        '<select class="np-select np-size-select" onchange="window.app._npBlockFormat(\'fontSize\', this.value)">' +
                            '<option value="3">Size</option>' +
                            '<option value="1">Tiny</option>' +
                            '<option value="2">Small</option>' +
                            '<option value="3">Normal</option>' +
                            '<option value="4">Medium</option>' +
                            '<option value="5">Large</option>' +
                            '<option value="6">XL</option>' +
                            '<option value="7">XXL</option>' +
                        '</select>' +
                    '</div>' +
                    '<div class="np-tb-group">' +
                        '<button type="button" class="np-tbtn" onclick="window.app._npBlockFormat(\'bold\')" title="Bold (Ctrl+B)"><b>B</b></button>' +
                        '<button type="button" class="np-tbtn" onclick="window.app._npBlockFormat(\'italic\')" title="Italic (Ctrl+I)"><i>I</i></button>' +
                        '<button type="button" class="np-tbtn" onclick="window.app._npBlockFormat(\'underline\')" title="Underline (Ctrl+U)"><u>U</u></button>' +
                        '<button type="button" class="np-tbtn" onclick="window.app._npBlockFormat(\'strikeThrough\')" title="Strikethrough"><s>S</s></button>' +
                        '<div class="np-highlight-dropdown">' +
                            '<button type="button" class="np-tbtn np-highlight-btn" title="Highlight Color">&#128396;</button>' +
                            '<div class="np-highlight-popup">' +
                                '<div class="np-hl-swatch" style="background:#fef08a" onclick="window.app._npBlockFormat(\'hiliteColor\',\'#fef08a\')" title="Yellow"></div>' +
                                '<div class="np-hl-swatch" style="background:#bbf7d0" onclick="window.app._npBlockFormat(\'hiliteColor\',\'#bbf7d0\')" title="Green"></div>' +
                                '<div class="np-hl-swatch" style="background:#bfdbfe" onclick="window.app._npBlockFormat(\'hiliteColor\',\'#bfdbfe\')" title="Blue"></div>' +
                                '<div class="np-hl-swatch" style="background:#fbcfe8" onclick="window.app._npBlockFormat(\'hiliteColor\',\'#fbcfe8\')" title="Pink"></div>' +
                                '<div class="np-hl-swatch" style="background:#fed7aa" onclick="window.app._npBlockFormat(\'hiliteColor\',\'#fed7aa\')" title="Orange"></div>' +
                                '<div class="np-hl-swatch" style="background:#ddd6fe" onclick="window.app._npBlockFormat(\'hiliteColor\',\'#ddd6fe\')" title="Purple"></div>' +
                                '<div class="np-hl-swatch" style="background:#e2e8f0" onclick="window.app._npBlockFormat(\'hiliteColor\',\'#e2e8f0\')" title="Gray"></div>' +
                                '<div class="np-hl-swatch" style="background:#ffffff;border:1px solid #ccc" onclick="window.app._npBlockFormat(\'hiliteColor\',\'#ffffff\')" title="Remove"></div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                    '<div class="np-tb-group">' +
                        '<button type="button" class="np-tbtn" onclick="window.app._npBlockFormat(\'justifyLeft\')" title="Align Left">&#8676;</button>' +
                        '<button type="button" class="np-tbtn" onclick="window.app._npBlockFormat(\'justifyCenter\')" title="Align Center">&#8596;</button>' +
                        '<button type="button" class="np-tbtn" onclick="window.app._npBlockFormat(\'justifyRight\')" title="Align Right">&#8677;</button>' +
                        '<button type="button" class="np-tbtn" onclick="window.app._npBlockFormat(\'justifyFull\')" title="Justify" style="font-size:10px;">JFY</button>' +
                    '</div>' +
                    '<div class="np-tb-group">' +
                        '<button type="button" class="np-tbtn" onclick="window.app._npBlockFormat(\'insertUnorderedList\')" title="Bullet List">&bull; &#8226;</button>' +
                        '<button type="button" class="np-tbtn" onclick="window.app._npBlockFormat(\'insertOrderedList\')" title="Numbered List">1. &#8226;</button>' +
                        '<button type="button" class="np-tbtn" onclick="window.app._npBlockFormat(\'insertUnorderedList\');window.app._npBlockFormat(\'insertUnorderedList\')" title="Dash List" style="font-size:10px;">&#8212; List</button>' +
                    '</div>' +
                    '<div class="np-tb-group">' +
                        '<button type="button" class="np-tbtn" onclick="window.app._npInsertTable()" title="Insert Table" style="font-size:10px;">&#9638; Table</button>' +
                        '<label class="np-tbtn np-file-upload" title="Insert Image">&#128247; Image' +
                            '<input type="file" id="npBlockImageInput" accept=".jpg,.jpeg,.png" multiple onchange="window.app._npBlockInsertImage(event)" style="display:none">' +
                        '</label>' +
                    '</div>' +
                    '<div class="np-tb-group">' +
                        '<select class="np-select" onchange="window.app._npBlockInsertIcon(this)" title="Insert Icon">' +
                            '<option value="">&#11088; Icons</option>' +
                            '<optgroup label="Status">' +
                                '<option value="&#9989;">&#9989; Check Mark</option>' +
                                '<option value="&#10060;">&#10060; Cross Mark</option>' +
                                '<option value="&#9888;&#65039;">&#9888;&#65039; Warning</option>' +
                                '<option value="&#128680;">&#128680; Prohibited</option>' +
                                '<option value="&#128274;">&#128274; Locked</option>' +
                                '<option value="&#128275;">&#128275; Unlocked</option>' +
                            '</optgroup>' +
                            '<optgroup label="Objects">' +
                                '<option value="&#128204;">&#128204; Pin</option>' +
                                '<option value="&#128278;">&#128278; Fax</option>' +
                                '<option value="&#128196;">&#128196; Page</option>' +
                                '<option value="&#128221;">&#128221; Pencil</option>' +
                                '<option value="&#128222;">&#128222; Telephone</option>' +
                                '<option value="&#128187;">&#128187; Computer</option>' +
                                '<option value="&#128188;">&#128188; Briefcase</option>' +
                                '<option value="&#128203;">&#128203; Clipboard</option>' +
                                '<option value="&#128218;">&#128218; Book</option>' +
                                '<option value="&#128214;">&#128214; Open Book</option>' +
                            '</optgroup>' +
                            '<optgroup label="Arrows">' +
                                '<option value="&#10145;&#65039;">&#10145;&#65039; Right Arrow</option>' +
                                '<option value="&#11013;&#65039;">&#11013;&#65039; Left Arrow</option>' +
                                '<option value="&#11014;&#65039;">&#11014;&#65039; Up Arrow</option>' +
                                '<option value="&#11015;&#65039;">&#11015;&#65039; Down Arrow</option>' +
                                '<option value="&#128260;">&#128260; Repeat</option>' +
                            '</optgroup>' +
                            '<optgroup label="Stars &amp; Hearts">' +
                                '<option value="&#11088;">&#11088; Star</option>' +
                                '<option value="&#11089;">&#11089; Orange Star</option>' +
                                '<option value="&#11090;">&#11090; Yellow Star</option>' +
                                '<option value="&#11091;">&#11091; Green Star</option>' +
                                '<option value="&#128150;">&#128150; Heart</option>' +
                                '<option value="&#128154;">&#128154; Green Heart</option>' +
                                '<option value="&#128155;">&#128155; Blue Heart</option>' +
                                '<option value="&#128156;">&#128156; Purple Heart</option>' +
                            '</optgroup>' +
                            '<optgroup label="Weather &amp; Nature">' +
                                '<option value="&#9728;&#65039;">&#9728;&#65039; Sun</option>' +
                                '<option value="&#127774;">&#127774; Moon</option>' +
                                '<option value="&#9749;">&#9749; Coffee</option>' +
                                '<option value="&#127820;">&#127820; Grape</option>' +
                                '<option value="&#127823;">&#127823; Strawberry</option>' +
                            '</optgroup>' +
                            '<optgroup label="Symbols">' +
                                '<option value="&#128161;">&#128161; Light Bulb</option>' +
                                '<option value="&#128163;">&#128163; Bomb</option>' +
                                '<option value="&#128176;">&#128176; Money</option>' +
                                '<option value="&#128276;">&#128276; Bell</option>' +
                                '<option value="&#128277;">&#128277; megaphone</option>' +
                                '<option value="&#128681;">&#128681; Flag</option>' +
                                '<option value="&#127919;">&#127919; Target</option>' +
                                '<option value="&#127937;">&#127937; Trophy</option>' +
                                '<option value="&#127942;">&#127942; Medal</option>' +
                                '<option value="&#128293;">&#128293; Fire</option>' +
                            '</optgroup>' +
                        '</select>' +
                    '</div>' +
                    '<div class="np-tb-group np-tb-last">' +
                        '<input type="color" class="np-color-pick" value="#000000" onchange="window.app._npBlockFormat(\'foreColor\', this.value)" title="Text Color">' +
                        '<button type="button" class="np-tbtn np-tbtn-clear" onclick="window.app._npBlockFormat(\'removeFormat\')" title="Clear Formatting">&#10005;</button>' +
                    '</div>' +
                '</div>' +
                '<div class="np-modal-editor" id="npBlockEditor" contenteditable="true" data-placeholder="Start writing your note..."></div>' +
                '<div class="form-group" style="margin-top:8px;">' +
                '<label class="form-label">Screenshot / Image (Optional)</label>' +
                '<div class="image-upload-area" id="imageUploadArea">' +
                '<input type="file" id="imageFileInput" accept="image/*" style="display:none">' +
                '<div class="image-upload-placeholder" id="imageUploadPlaceholder">' +
                '<span class="upload-icon">🖼️</span>' +
                '<span>Click to browse, or paste (Ctrl+V), or drag & drop</span>' +
                '</div>' +
                '<div class="image-preview-container hidden" id="imagePreviewContainer">' +
                '<img class="image-preview" id="imagePreview">' +
                '<button type="button" class="btn-remove-image" id="btnRemoveImage">✕ Remove</button>' +
                '</div>' +
                '</div>' +
                '</div>';
        }

        var modalBody = '';
        if (type === 'notepad') {
            modalBody = extraFields;
        } else {
            modalBody = '<div class="form-group">' +
                '<label class="form-label">Content</label>' +
                '<textarea class="modal-input" id="newBlockContent" rows="3" placeholder="' + placeholders[type] + '" style="resize: vertical;"></textarea>' +
                '</div>' + extraFields;
        }

        this.showModal('New ' + labels[type] + ' Block', modalBody,
            '<button class="btn-modal btn-modal-secondary" onclick="window.app.hideModal()">Cancel</button>' +
            '<button class="btn-modal btn-modal-primary" onclick="window.app.createBlock(\'' + type + '\')">Add Block</button>'
        );
        setTimeout(() => {
            const textarea = document.getElementById('newBlockContent');
            if (type === 'notepad') {
                var npEditor = document.getElementById('npBlockEditor');
                if (npEditor) npEditor.focus();
            } else {
                if (textarea) textarea.focus();
            }
            if (type === 'instruction' || type === 'task' || type === 'reminder' || type === 'notepad') {
                this.initImageUpload();
            }
            if (type === 'task' || type === 'reminder') {
                const recSelect = document.getElementById('newBlockRecurrence');
                const recNote = document.getElementById('recurrenceNote');
                if (recSelect && recNote) {
                    recSelect.addEventListener('change', () => {
                        recNote.classList.toggle('hidden', recSelect.value === 'none');
                    });
                }
            }
        }, 100);
    }

    initImageUpload() {
        this._imageData = null;
        const area = document.getElementById('imageUploadArea');
        const fileInput = document.getElementById('imageFileInput');
        const placeholder = document.getElementById('imageUploadPlaceholder');
        const previewContainer = document.getElementById('imagePreviewContainer');
        const preview = document.getElementById('imagePreview');
        const removeBtn = document.getElementById('btnRemoveImage');

        if (!area) return;

        area.addEventListener('click', (e) => {
            if (e.target === removeBtn) return;
            fileInput.click();
        });

        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) this.handleImageFile(file);
        });

        area.addEventListener('dragover', (e) => {
            e.preventDefault();
            area.classList.add('drag-over');
        });

        area.addEventListener('dragleave', () => {
            area.classList.remove('drag-over');
        });

        area.addEventListener('drop', (e) => {
            e.preventDefault();
            area.classList.remove('drag-over');
            const file = e.dataTransfer.files[0];
            if (file && file.type.startsWith('image/')) {
                this.handleImageFile(file);
            }
        });

        document.addEventListener('paste', (e) => {
            const items = e.clipboardData.items;
            for (let i = 0; i < items.length; i++) {
                if (items[i].type.startsWith('image/')) {
                    const file = items[i].getAsFile();
                    this.handleImageFile(file);
                    break;
                }
            }
        });

        removeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this._imageData = null;
            placeholder.classList.remove('hidden');
            previewContainer.classList.add('hidden');
            fileInput.value = '';
        });
    }

    handleImageFile(file) {
        const placeholder = document.getElementById('imageUploadPlaceholder');
        const previewContainer = document.getElementById('imagePreviewContainer');
        const preview = document.getElementById('imagePreview');

        if (!placeholder || !previewContainer || !preview) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            this._imageData = e.target.result;
            preview.src = e.target.result;
            placeholder.classList.add('hidden');
            previewContainer.classList.remove('hidden');
        };
        reader.readAsDataURL(file);
    }

    async uploadImageAndGetPath() {
        if (!this._imageData) return '';
        try {
            const res = await fetch('/api/upload-image-base64', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ image_data: this._imageData })
            });
            if (res.ok) {
                const data = await res.json();
                return data.image_path || '';
            }
        } catch (err) {
            console.error('Image upload failed:', err);
        }
        return '';
    }

    _npGetActiveEditor() {
        var eb = document.getElementById('ebNpEditor');
        if (eb && eb.closest('.eb-overlay')) return eb;
        var nb = document.getElementById('npBlockEditor');
        if (nb) return nb;
        return eb || nb;
    }

    _npBlockFormat(command, value) {
        var editor = this._npGetActiveEditor();
        if (editor) editor.focus();
        document.execCommand(command, false, value || null);
    }

    _npBlockInsertIcon(sel) {
        if (sel.value) {
            var editor = this._npGetActiveEditor();
            if (editor) editor.focus();
            document.execCommand('insertText', false, sel.value);
            sel.value = '';
        }
    }

    _npBlockInsertImage(event) {
        var files = event.target.files;
        if (!files || files.length === 0) return;
        var validTypes = ['image/jpeg', 'image/jpg', 'image/png'];
        var self = this;
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            if (validTypes.indexOf(file.type) === -1) continue;
            (function(f) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    var editor = self._npGetActiveEditor();
                    if (editor) {
                        editor.focus();
                        var sel = window.getSelection();
                        var range = sel.rangeCount > 0 ? sel.getRangeAt(0) : null;
                        if (!range || !editor.contains(range.commonAncestorContainer)) {
                            range = document.createRange();
                            range.selectNodeContents(editor);
                            range.collapse(false);
                        }
                        var img = document.createElement('img');
                        img.src = e.target.result;
                        img.style.cssText = 'max-width:200px;height:auto;border-radius:6px;margin:6px;display:block;';
                        range.deleteContents();
                        range.insertNode(img);
                        range.setStartAfter(img);
                        range.collapse(true);
                        sel.removeAllRanges();
                        sel.addRange(range);
                    }
                };
                reader.readAsDataURL(f);
            })(file);
        }
        event.target.value = '';
    }

    _npInsertTable() {
        var rows = prompt('Number of rows:', '3');
        var cols = prompt('Number of columns:', '3');
        if (!rows || !cols) return;
        rows = parseInt(rows); cols = parseInt(cols);
        if (isNaN(rows) || isNaN(cols) || rows < 1 || cols < 1) return;
        var table = '<table style="border-collapse:collapse;width:100%;margin:8px 0;">';
        for (var r = 0; r < rows; r++) {
            table += '<tr>';
            for (var c = 0; c < cols; c++) {
                if (r === 0) table += '<th style="border:1px solid #ccc;padding:6px 10px;background:#f0f0f5;font-weight:600;">Header ' + (c+1) + '</th>';
                else table += '<td style="border:1px solid #ccc;padding:6px 10px;">&nbsp;</td>';
            }
            table += '</tr>';
        }
        table += '</table><p><br></p>';
        var editor = this._npGetActiveEditor();
        if (editor) {
            editor.focus();
            document.execCommand('insertHTML', false, table);
        }
    }

    async createBlock(type) {
        if (type === 'notepad') {
            var editor = document.getElementById('npBlockEditor');
            var content = editor ? editor.innerHTML.trim() : '';
            if (!content || content === '<br>') return;
        } else {
            var contentEl = document.getElementById('newBlockContent');
            var content = contentEl ? contentEl.value.trim() : '';
            if (!content) return;
        }

        const payload = {
            page_id: this.currentPage.id,
            block_type: type,
            content: content
        };

        if (type === 'instruction') {
            const subject = document.getElementById('newBlockSubject');
            const refDate = document.getElementById('newBlockRefDate');
            const refType = document.getElementById('newBlockRefType');
            const refDetail = document.getElementById('newBlockRefDetail');
            const priority = document.getElementById('newBlockPriority');
            const isActive = document.getElementById('newBlockIsActive');
            const endDate = document.getElementById('newBlockEndDate');
            if (subject) payload.subject = subject.value.trim();
            if (refDate) payload.ref_date = refDate.value;
            if (refType) payload.ref_type = refType.value;
            if (refDetail) payload.ref_detail = refDetail.value.trim();
            if (priority) payload.priority = priority.value;
            if (isActive) payload.is_active = parseInt(isActive.value);
            if (endDate && endDate.value) payload.end_date = endDate.value;

            if (this._imageData) {
                const imagePath = await this.uploadImageAndGetPath();
                if (imagePath) payload.image_path = imagePath;
            }
        }

        if (type === 'task') {
            const dueDate = document.getElementById('newBlockDueDate');
            const taskPriority = document.getElementById('newBlockTaskPriority');
            const category = document.getElementById('newBlockCategory');
            const taskStatus = document.getElementById('newBlockTaskStatus');
            const description = document.getElementById('newBlockDescription');
            const recurrence = document.getElementById('newBlockRecurrence');
            if (dueDate) payload.due_date = dueDate.value;
            if (taskPriority) payload.task_priority = taskPriority.value;
            if (category) payload.category = category.value;
            if (taskStatus) payload.task_status = taskStatus.value;
            if (description) payload.description = description.value.trim();
            if (recurrence) payload.recurrence = recurrence.value;
        }

        if (type === 'reminder') {
            const recurrence = document.getElementById('newBlockRecurrence');
            const dueDate = document.getElementById('newBlockDueDate');
            const reminderTime = document.getElementById('newBlockReminderTime');
            const priority = document.getElementById('newBlockPriority');
            const isActive = document.getElementById('newBlockIsActive');
            const endDate = document.getElementById('newBlockEndDate');
            const description = document.getElementById('newBlockDescription');
            const refDetail = document.getElementById('newBlockRefDetail');
            const subject = document.getElementById('newBlockSubject');
            if (recurrence) payload.recurrence = recurrence.value;
            if (dueDate) payload.due_date = dueDate.value;
            if (reminderTime) payload.reminder_time = reminderTime.value;
            if (priority) payload.priority = priority.value;
            if (isActive) payload.is_active = parseInt(isActive.value);
            if (endDate) payload.end_date = endDate.value;
            if (description) payload.description = description.value.trim();
            if (refDetail) payload.ref_detail = refDetail.value.trim();
            if (subject) payload.subject = subject.value.trim();
        }

        if (type === 'notepad') {
            const subject = document.getElementById('newBlockSubject');
            if (subject) payload.subject = subject.value.trim();
            if (this._imageData) {
                const imagePath = await this.uploadImageAndGetPath();
                if (imagePath) payload.image_path = imagePath;
            }
        }

        try {
            const res = await fetch('/api/blocks', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            if (res.ok) {
                const block = await res.json();
                this.currentBlocks.push(block);
                this.hideModal();
                this.renderBlocks();
                this.refreshSearchIndex();
            }
        } catch (err) {
            console.error('Failed to create block:', err);
        }
    }

    async initSearchIndex() {
        try {
            const res = await fetch('/api/search/all');
            const data = await res.json();
            this._searchPages = data.pages || [];
            this._searchBlocks = data.blocks || [];
        } catch (err) {
            this._searchPages = [];
            this._searchBlocks = [];
        }
        this._searchPortalLinks = JSON.parse(localStorage.getItem('portalLinks') || '[]');
        this._searchPortalNotes = JSON.parse(localStorage.getItem('portalNotes') || '[]');
    }

    async refreshSearchIndex() {
        await this.initSearchIndex();
    }

    refreshPortalSearchIndex() {
        this._searchPortalLinks = JSON.parse(localStorage.getItem('portalLinks') || '[]');
        this._searchPortalNotes = JSON.parse(localStorage.getItem('portalNotes') || '[]');
    }

    highlightText(text, query) {
        if (!query || !text) return this.escapeHtml(text || '');
        const escaped = this.escapeHtml(text);
        const queryEscaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp('(' + queryEscaped + ')', 'gi');
        return escaped.replace(regex, '<mark class="search-highlight">$1</mark>');
    }

    clientSearch(query) {
        const q = query.toLowerCase().trim();
        if (!q) return [];

        const results = [];
        const words = q.split(/\s+/).filter(w => w.length > 0);

        function matchScore(text) {
            if (!text) return 0;
            const lower = text.toLowerCase();
            let score = 0;
            for (const word of words) {
                if (lower === word) score += 30;
                else if (lower.startsWith(word)) score += 20;
                else if (lower.includes(word)) score += 10;
                else {
                    for (let i = 0; i <= lower.length - word.length; i++) {
                        if (lower.substring(i, i + word.length).includes(word[0])) { score += 2; break; }
                    }
                }
            }
            if (lower === q) score += 50;
            else if (lower.startsWith(q)) score += 25;
            return score;
        }

        for (const page of this._searchPages) {
            let score = matchScore(page.title);
            if (score > 0) {
                results.push({
                    type: 'page',
                    id: page.id,
                    icon: page.icon || 'cil-file',
                    title: page.title,
                    meta: 'Page',
                    score: score,
                    pageId: page.id
                });
            }
        }

        for (const block of this._searchBlocks) {
            let score = 0;
            let matchedField = '';

            var blockContent = block.content || '';
            if (block.block_type === 'notepad') {
                var tmp = document.createElement('div');
                tmp.innerHTML = blockContent;
                blockContent = tmp.textContent || tmp.innerText || '';
            }

            const s1 = matchScore(blockContent);
            if (s1 > score) { score = s1; matchedField = 'content'; }

            const s2 = matchScore(block.subject);
            if (s2 > score) { score = s2; matchedField = 'subject'; }

            const s3 = matchScore(block.ref_detail);
            if (s3 > score) { score = s3; matchedField = 'ref_detail'; }

            const s4 = matchScore(block.page_title);
            if (s4 > score) { score = s4; matchedField = 'page_title'; }

            const s5 = matchScore(block.description);
            if (s5 > score) { score = s5; matchedField = 'description'; }

            const s6 = matchScore(block.category);
            if (s6 > score) { score = s6; matchedField = 'category'; }

            if (score > 0) {
                let icon = 'cil-description';
                let typeLabel = 'Instruction';
                let meta = '';
                let title = block.subject || block.content;

                if (block.block_type === 'task') {
                    const ts = block.task_status || 'pending';
                    const tsIcons = { pending: 'cil-clock', in_progress: 'cil-reload', on_hold: 'cil-media-pause', completed: 'cil-check-circle' };
                    const tsLabels = { pending: 'Pending', in_progress: 'In Progress', on_hold: 'On Hold', completed: 'Completed' };
                    icon = tsIcons[ts] || 'cil-clock';
                    typeLabel = 'Task';
                    title = block.content;
                    meta = tsLabels[ts] || 'Pending';
                    if (block.task_priority === 'high') meta += ' | HIGH PRIORITY';
                    if (block.due_date) meta += ' | Due: ' + block.due_date;
                } else if (block.block_type === 'reminder') {
                    icon = 'cil-bell';
                    typeLabel = 'Reminder';
                    title = block.content;
                    meta = block.recurrence && block.recurrence !== 'none' ? 'Repeats: ' + block.recurrence : 'One-time';
                } else if (block.block_type === 'instruction') {
                    let tags = [];
                    if (block.priority === 'important') tags.push('Very Important');
                    if (block.is_active === 0 || block.is_active === '0') tags.push('Not Active');
                    if (block.ref_type && block.ref_type !== 'none') tags.push(block.ref_type);
                    meta = tags.length > 0 ? tags.join(' | ') : 'Normal';
                } else if (block.block_type === 'notepad') {
                    icon = 'cil-file';
                    typeLabel = 'Notepad';
                    title = block.subject || 'Untitled Notepad';
                    meta = 'Rich Note';
                }

                results.push({
                    type: block.block_type,
                    id: block.id,
                    icon: icon,
                    title: title,
                    meta: typeLabel + ' in ' + (block.page_title || 'Unknown') + (meta ? ' - ' + meta : ''),
                    score: score,
                    pageId: block.page_id,
                    matchedField: matchedField,
                    matchedText: matchedField === 'subject' ? block.subject : (matchedField === 'ref_detail' ? block.ref_detail : (block.block_type === 'notepad' ? blockContent : block.content))
                });
            }
        }

        results.sort((a, b) => b.score - a.score);

        const portalLinks = this._searchPortalLinks || [];
        for (let i = 0; i < portalLinks.length; i++) {
            const link = portalLinks[i];
            const scoreName = matchScore(link.name);
            const scoreUrl = matchScore(link.url);
            const scoreNote = matchScore(link.note);
            const bestScore = Math.max(scoreName, scoreUrl, scoreNote);
            if (bestScore > 0) {
                results.push({
                    type: 'portal_link',
                    id: i,
                    icon: 'cil-link',
                    title: link.name,
                    meta: 'Portal Link' + (link.note ? ' — ' + link.note : ''),
                    score: bestScore,
                    pageId: -1,
                    url: link.url
                });
            }
        }

        const portalNotes = this._searchPortalNotes || [];
        for (let i = 0; i < portalNotes.length; i++) {
            const note = portalNotes[i];
            const scoreTitle = matchScore(note.title);
            const scoreContent = matchScore(note.content);
            const bestScore = Math.max(scoreTitle, scoreContent);
            if (bestScore > 0) {
                results.push({
                    type: 'portal_note',
                    id: i,
                    icon: 'cil-description',
                    title: note.title,
                    meta: 'Portal Note' + (note.content ? ' — ' + note.content.substring(0, 60) : ''),
                    score: bestScore,
                    pageId: -1
                });
            }
        }

        results.sort((a, b) => b.score - a.score);
        return results;
    }

    _getSearchHistory() {
        return JSON.parse(localStorage.getItem('nb_search_history') || '[]');
    }

    _saveSearchQuery(query) {
        var q = query.trim();
        if (!q || q.length < 2) return;
        var history = this._getSearchHistory();
        history = history.filter(h => h.toLowerCase() !== q.toLowerCase());
        history.unshift(q);
        if (history.length > 15) history = history.slice(0, 15);
        localStorage.setItem('nb_search_history', JSON.stringify(history));
    }

    _removeSearchQuery(index) {
        var history = this._getSearchHistory();
        history.splice(index, 1);
        localStorage.setItem('nb_search_history', JSON.stringify(history));
        this.showSearchHistory();
    }

    clearSearchHistory() {
        localStorage.removeItem('nb_search_history');
        document.getElementById('searchResults').classList.remove('visible');
    }

    showSearchHistory() {
        var resultsContainer = document.getElementById('searchResults');
        var history = this._getSearchHistory();
        if (history.length === 0) {
            resultsContainer.classList.remove('visible');
            return;
        }
        var html = '<div class="search-history-header">' +
            '<span class="search-history-label">Recent Searches</span>' +
            '<button class="search-history-clear" onclick="window.app.clearSearchHistory()">Clear</button>' +
        '</div>';
        for (var i = 0; i < history.length; i++) {
            html += '<div class="search-history-item" onclick="window.app._useSearchHistory(\'' + this.escapeHtml(history[i]).replace(/'/g, "\\'") + '\')">' +
                '<i data-lucide="clock" class="search-history-icon"></i>' +
                '<span class="search-history-text">' + this.escapeHtml(history[i]) + '</span>' +
                '<button class="search-history-remove" onclick="event.stopPropagation();window.app._removeSearchQuery(' + i + ')"><i data-lucide="x" style="width:12px;height:12px;"></i></button>' +
            '</div>';
        }
        resultsContainer.innerHTML = html;
        lucide.createIcons({ nodes: [resultsContainer] });
        resultsContainer.classList.add('visible');
    }

    _useSearchHistory(query) {
        document.getElementById('searchInput').value = query;
        this.handleSearch(query);
    }

    async handleSearch(query) {
        const resultsContainer = document.getElementById('searchResults');

        if (!query.trim()) {
            resultsContainer.classList.remove('visible');
            return;
        }

        this._saveSearchQuery(query.trim());

        if (!this._searchPages) {
            await this.initSearchIndex();
        }

        const results = this.clientSearch(query.trim());

        if (results.length === 0) {
            resultsContainer.innerHTML = '<div class="search-no-results">No results found for "' + this.escapeHtml(query) + '"</div>';
        } else {
            const groups = {};
            const groupOrder = ['page', 'instruction', 'task', 'reminder', 'portal_link', 'portal_note'];
            const groupLabels = { page: 'Pages', instruction: 'Instructions', task: 'Tasks', reminder: 'Reminders', portal_link: 'Portal Links', portal_note: 'Portal Notes' };

            for (const r of results) {
                const g = r.type;
                if (!groups[g]) groups[g] = [];
                groups[g].push(r);
            }

            let html = '<div class="search-count">' + results.length + ' result' + (results.length !== 1 ? 's' : '') + ' found</div>';

            for (const group of groupOrder) {
                if (!groups[group] || groups[group].length === 0) continue;
                html += '<div class="search-group">';
                html += '<div class="search-group-header">' + groupLabels[group] + ' (' + groups[group].length + ')</div>';
                for (const result of groups[group]) {
                    const titleHtml = this.highlightText(result.title, query);
                    html += '<div class="search-result-item" data-result-type="' + result.type + '" data-result-id="' + result.id + '" data-page-id="' + result.pageId + '"' + (result.url ? ' data-url="' + this.escapeHtml(result.url) + '"' : '') + '>' +
                        '<span class="search-result-icon">' + renderIcon(result.icon) + '</span>' +
                        '<div class="search-result-info">' +
                        '<div class="search-result-title">' + titleHtml + '</div>' +
                        '<div class="search-result-meta">' + this.escapeHtml(result.meta) + '</div>' +
                        '</div></div>';
                }
                html += '</div>';
            }

            resultsContainer.innerHTML = html;
            this.refreshIcons();

            resultsContainer.querySelectorAll('.search-result-item').forEach(item => {
                item.addEventListener('click', () => {
                    const type = item.dataset.resultType;
                    const id = parseInt(item.dataset.resultId);
                    const pageId = parseInt(item.dataset.pageId);
                    const url = item.dataset.url || '';
                    document.getElementById('searchInput').value = '';
                    resultsContainer.classList.remove('visible');
                    if (type === 'portal_link' && url) {
                        window.open(url, '_blank');
                    } else if (type === 'portal_note') {
                        this.showPortal();
                    } else {
                        this.showBlockDetail(type, id, pageId);
                    }
                });
            });
        }

        resultsContainer.classList.add('visible');
    }

    showBlockDetail(type, blockId, pageId) {
        let block = null;
        if (type === 'page') {
            const page = this._searchPages.find(p => p.id === blockId);
            if (!page) return;
            document.getElementById('dashboardView').classList.add('hidden');
            document.getElementById('pageView').classList.add('hidden');
            document.getElementById('portalView').classList.add('hidden');
            document.getElementById('notepadView').classList.add('hidden');
            document.getElementById('pagesView').classList.add('hidden');
            document.getElementById('detailView').classList.remove('hidden');

            const now = new Date();
            document.getElementById('detailDocument').innerHTML =
                '<div class="doc-header">' +
                    '<div class="doc-logo"><div class="brand-icon" style="width:28px;height:28px;border-radius:8px;background:#23202E;color:#fff;display:flex;align-items:center;justify-content:center;"><i data-lucide="layers" style="width:14px;height:14px;"></i></div> NoteBook By Arslan</div>' +
                    '<div class="doc-date">' + now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) + '</div>' +
                '</div>' +
                '<div class="doc-divider"></div>' +
                '<div class="doc-body">' +
                    '<div class="doc-type-section">' +
                        '<span class="doc-type-icon">' + renderIcon(page.icon || 'cil-file') + '</span>' +
                        '<span class="doc-type-label" style="color:#463750">PAGE</span>' +
                    '</div>' +
                    '<h1 class="doc-title">' + this.escapeHtml(page.title) + '</h1>' +
                    '<div class="doc-section">' +
                        '<p class="doc-text" style="color:#5A5672; line-height: 1.6;">This page contains notes and information. Open from the sidebar to view all blocks.</p>' +
                    '</div>' +
                '</div>' +
                '<div class="doc-footer">' +
                    '<div class="doc-footer-line"></div>' +
                    '<p>Generated from NoteBook By Arslan | ' + now.toLocaleDateString() + '</p>' +
                '</div>';
            this.refreshIcons();
            return;
        }

        block = this._searchBlocks.find(b => b.id === blockId);
        if (!block) return;

        document.getElementById('dashboardView').classList.add('hidden');
        document.getElementById('pageView').classList.add('hidden');
        document.getElementById('portalView').classList.add('hidden');
        document.getElementById('notepadView').classList.add('hidden');
        document.getElementById('pagesView').classList.add('hidden');
        document.getElementById('detailView').classList.remove('hidden');

        const now = new Date();
        const typeLabels = { instruction: 'INSTRUCTION / GUIDELINE', task: 'TASK', reminder: 'REMINDER', notepad: 'NOTEPAD' };
        const typeColors = { instruction: '#A2B1CC', task: '#D2D09E', reminder: '#EBA07B', notepad: '#6366f1' };
        const typeIcons = { instruction: 'cil-book', task: 'cil-check-circle', reminder: 'cil-bell', notepad: 'cil-file' };
        const refIcons = { email: 'cil-envelope-closed', call: 'cil-phone', message: 'cil-chat-bubble', meeting: 'cil-people', document: 'cil-file' };
        const refLabels = { email: 'Email', call: 'Call', message: 'Message', meeting: 'Meeting', document: 'Document' };

        let html = '<div class="doc-header">' +
            '<div class="doc-logo"><div class="brand-icon" style="width:28px;height:28px;border-radius:8px;background:#23202E;color:#fff;display:flex;align-items:center;justify-content:center;"><i data-lucide="layers" style="width:14px;height:14px;"></i></div> NoteBook By Arslan</div>' +
            '<div class="doc-date">' + now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) + '</div>' +
        '</div>' +
        '<div class="doc-divider"></div>' +
        '<div class="doc-body">' +
            '<div class="doc-type-section">' +
                '<span class="doc-type-icon">' + renderIcon(typeIcons[block.block_type] || 'cil-file') + '</span>' +
                '<span class="doc-type-label" style="color:' + (typeColors[block.block_type] || '#23202E') + '">' + (typeLabels[block.block_type] || block.block_type.toUpperCase()) + '</span>' +
            '</div>';

        if (block.subject) {
            html += '<h1 class="doc-title">' + this.escapeHtml(block.subject) + '</h1>';
        } else {
            html += '<h1 class="doc-title">' + this.escapeHtml(block.content.substring(0, 80)) + '</h1>';
        }

        html += '<div class="doc-meta-grid">';

        html += '<div class="doc-meta-item"><span class="doc-meta-label">Page</span><span class="doc-meta-value">' + renderIcon(block.page_icon || 'cil-file') + ' ' + this.escapeHtml(block.page_title || 'Unknown') + '</span></div>';

        if (block.block_type === 'instruction') {
            if (block.ref_date) {
                html += '<div class="doc-meta-item"><span class="doc-meta-label">Date</span><span class="doc-meta-value">📅 ' + block.ref_date + '</span></div>';
            }
            html += '<div class="doc-meta-item"><span class="doc-meta-label">Status</span><span class="doc-meta-value">' + (block.is_active === 1 || block.is_active === '1' ? '✅ Active' : '⛔ Not Active') + '</span></div>';
            html += '<div class="doc-meta-item"><span class="doc-meta-label">Priority</span><span class="doc-meta-value">' + (block.priority === 'important' ? '🔴 Very Important' : '🟢 Normal') + '</span></div>';

            if (block.ref_type && block.ref_type !== 'none') {
                html += '<div class="doc-meta-item"><span class="doc-meta-label">Reference</span><span class="doc-meta-value">' + renderIcon(refIcons[block.ref_type] || 'cil-pin') + ' ' + (refLabels[block.ref_type] || block.ref_type) + (block.ref_detail ? ': ' + this.escapeHtml(block.ref_detail) : '') + '</span></div>';
            }
            if (block.end_date) {
                html += '<div class="doc-meta-item"><span class="doc-meta-label">End Date</span><span class="doc-meta-value">🔴 ' + block.end_date + '</span></div>';
            }
        }

        if (block.block_type === 'task') {
            if (block.due_date) {
                html += '<div class="doc-meta-item"><span class="doc-meta-label">Due Date</span><span class="doc-meta-value">📅 ' + block.due_date + '</span></div>';
            }
            const ts = block.task_status || 'pending';
            const tsLabels = { pending: 'Pending', in_progress: 'In Progress', on_hold: 'On Hold', completed: 'Completed' };
            const tsIcons = { pending: 'cil-clock', in_progress: 'cil-reload', on_hold: 'cil-media-pause', completed: 'cil-check-circle' };
            html += '<div class="doc-meta-item"><span class="doc-meta-label">Status</span><span class="doc-meta-value">' + renderIcon(tsIcons[ts] || 'cil-clock') + ' ' + (tsLabels[ts] || 'Pending') + '</span></div>';

            const tpLabels = { high: 'High', medium: 'Medium', low: 'Low' };
            const tpIcons = { high: '🔴', medium: '🟡', low: '🟢' };
            html += '<div class="doc-meta-item"><span class="doc-meta-label">Priority</span><span class="doc-meta-value">' + (tpIcons[block.task_priority] || '🟡') + ' ' + (tpLabels[block.task_priority] || 'Medium') + '</span></div>';

            const catLabels = { general: 'General', billing: 'Billing', attendance: 'Attendance', documentation: 'Documentation', followup: 'Follow-up', claims: 'Claims', other: 'Other' };
            html += '<div class="doc-meta-item"><span class="doc-meta-label">Category</span><span class="doc-meta-value">📁 ' + (catLabels[block.category] || 'General') + '</span></div>';

            if (block.description) {
                html += '<div class="doc-meta-item" style="grid-column: 1/-1"><span class="doc-meta-label">Notes</span><span class="doc-meta-value">' + this.escapeHtml(block.description) + '</span></div>';
            }
            if (block.recurrence && block.recurrence !== 'none') {
                const recLabels = { daily: 'Every Day', weekly_monday: 'Every Monday', weekly_tuesday: 'Every Tuesday', weekly_wednesday: 'Every Wednesday', weekly_thursday: 'Every Thursday', weekly_friday: 'Every Friday', weekly_saturday: 'Every Saturday', weekly_sunday: 'Every Sunday', biweekly: 'Every 2 Weeks', monthly: 'Every Month' };
                html += '<div class="doc-meta-item"><span class="doc-meta-label">Repeats</span><span class="doc-meta-value">🔁 ' + (recLabels[block.recurrence] || block.recurrence) + '</span></div>';
            }
        }

        if (block.block_type === 'reminder') {
            html += '<div class="doc-meta-item"><span class="doc-meta-label">Recurrence</span><span class="doc-meta-value">🔄 ' + (block.recurrence && block.recurrence !== 'none' ? block.recurrence : 'One-time') + '</span></div>';
        }

        html += '</div>';

        if (block.block_type === 'notepad') {
            html += '<div class="doc-content-section">' +
                '<div class="doc-content-label">Note Content</div>' +
                '<div class="doc-content-box block-notepad-content">' + block.content + '</div>' +
            '</div>';
        } else {
            html += '<div class="doc-content-section">' +
                '<div class="doc-content-label">Content / Details</div>' +
                '<div class="doc-content-box">' + this.escapeHtml(block.content).replace(/\n/g, '<br>') + '</div>' +
            '</div>';
        }

        if (block.image_path) {
            var imgPaths = [];
            try {
                var parsed = JSON.parse(block.image_path);
                if (Array.isArray(parsed)) imgPaths = parsed;
                else if (typeof parsed === 'string' && parsed) imgPaths = [parsed];
            } catch (e) {
                if (block.image_path.trim()) imgPaths = [block.image_path];
            }
            if (imgPaths.length > 0) {
                html += '<div class="doc-content-section">' +
                    '<div class="doc-content-label">' + (imgPaths.length > 1 ? 'Evidence / Screenshots' : 'Evidence / Screenshot') + '</div>' +
                    '<div class="doc-image-container">';
                for (var ii = 0; ii < imgPaths.length; ii++) {
                    var safeSrc = this.escapeHtml(imgPaths[ii]);
                    html += '<img class="doc-image" src="' + safeSrc + '" alt="Evidence">';
                }
                html += '</div></div>';
            }
        }

        html += '</div>';

        html += '<div class="doc-footer">' +
            '<div class="doc-footer-line"></div>' +
            '<p>Generated from NoteBook By Arslan | Document ID: #' + block.id + ' | ' + now.toLocaleDateString() + ' ' + now.toLocaleTimeString() + '</p>' +
        '</div>';

        document.getElementById('detailDocument').innerHTML = html;
        this.refreshIcons();
    }

    hideDetailView() {
        document.getElementById('detailView').classList.add('hidden');
        if (this.currentPage) {
            document.getElementById('pageView').classList.remove('hidden');
        } else {
            document.getElementById('dashboardView').classList.remove('hidden');
        }
    }

    printDetail() {
        window.print();
    }

    showModal(title, body, footer) {
        document.getElementById('modalTitle').textContent = title;
        document.getElementById('modalBody').innerHTML = body;
        document.getElementById('modalFooter').innerHTML = footer;
        document.getElementById('modalOverlay').classList.remove('hidden');
        this.refreshIcons();
    }

    showImageModal(imagePath) {
        this.showModal('Image Preview',
            '<div class="image-modal-preview"><img src="' + imagePath + '" style="max-width:100%; max-height:70vh; border-radius:8px;"></div>',
            '<button class="btn-modal btn-modal-primary" onclick="window.app.hideModal()">Close</button>'
        );
    }

    hideModal() {
        document.getElementById('modalOverlay').classList.add('hidden');
    }

    async loadProfile() {
        try {
            const res = await fetch('/api/user/profile');
            if (!res.ok) return;
            const data = await res.json();
            this.userData = data;
            this.updateProfileUI(data);
        } catch (err) {
            console.error('Failed to load profile:', err);
        }
    }

    updateProfileUI(data) {
        const name = data.full_name || data.username || 'User';
        const initial = name.charAt(0).toUpperCase();
        const avatarImg = document.getElementById('profileAvatarImg');
        const avatarInitial = document.getElementById('profileAvatarInitial');
        const profileName = document.getElementById('profileName');
        const profileRole = document.getElementById('profileRole');

        if (data.image_path) {
            avatarImg.src = data.image_path;
            avatarImg.style.display = 'block';
            avatarInitial.style.display = 'none';
        } else {
            avatarImg.style.display = 'none';
            avatarInitial.style.display = 'flex';
            avatarInitial.textContent = initial;
        }
        if (profileName) profileName.textContent = name;
        if (profileRole) profileRole.textContent = data.role || 'User';
        if (data.role === 'Admin') {
            var btnAdmin = document.getElementById('btnAdminUsers');
            var btnProfileUsers = document.getElementById('btnProfileUsers');
            var btnBackup = document.getElementById('btnBackup');
            if (btnAdmin) btnAdmin.style.display = 'flex';
            if (btnProfileUsers) btnProfileUsers.style.display = 'flex';
            if (btnBackup) btnBackup.style.display = 'flex';
            this.loadAdminPendingCount();
        }
    }

    initProfileDropdown() {
        const trigger = document.getElementById('profileTrigger');
        const dropdown = document.getElementById('profileDropdown');
        const area = document.getElementById('profileArea');

        trigger.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.classList.toggle('show');
            area.classList.toggle('open');
        });

        document.addEventListener('click', (e) => {
            if (!e.target.closest('#profileArea')) {
                dropdown.classList.remove('show');
                area.classList.remove('open');
            }
        });

        document.getElementById('btnProfile').addEventListener('click', () => {
            dropdown.classList.remove('show');
            area.classList.remove('open');
            this.showProfileModal();
        });

        document.getElementById('btnCloseProfileModal').addEventListener('click', () => this.hideProfileModal());
        document.getElementById('profileModalOverlay').addEventListener('click', (e) => {
            if (e.target === e.currentTarget) this.hideProfileModal();
        });

        document.getElementById('btnSaveProfile').addEventListener('click', () => this.saveProfile());
        document.getElementById('btnChangePass').addEventListener('click', () => this.changePassword());

        document.getElementById('profilePhotoInput').addEventListener('change', (e) => this.uploadProfilePhoto(e));
    }

    showProfileModal() {
        const overlay = document.getElementById('profileModalOverlay');
        overlay.classList.remove('hidden');

        const data = this.userData || {};
        document.getElementById('profileFullName').value = data.full_name || '';
        document.getElementById('profileUsername').value = data.username || '';
        document.getElementById('profileEmail').value = data.email || '';
        document.getElementById('profilePhone').value = data.phone || '';
        document.getElementById('profileCurrentPass').value = '';
        document.getElementById('profileNewPass').value = '';

        const name = data.full_name || data.username || 'User';
        document.getElementById('profileModalName').textContent = name;
        document.getElementById('profileModalRole').textContent = data.role || 'Admin';

        const img = document.getElementById('profileModalImg');
        const placeholder = document.getElementById('profileModalPlaceholder');
        if (data.image_path) {
            img.src = data.image_path;
            img.style.display = 'block';
            placeholder.style.display = 'none';
        } else {
            img.style.display = 'none';
            placeholder.style.display = 'flex';
        }

        // Reset to personal tab
        document.querySelectorAll('.profile-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.profile-tab-content').forEach(c => c.classList.remove('active'));
        document.querySelector('.profile-tab[data-tab="personal"]').classList.add('active');
        document.getElementById('profileTabPersonal').classList.add('active');

        this.hideProfileMsg();
        this._initProfileTabs();
    }

    _initProfileTabs() {
        document.querySelectorAll('.profile-tab').forEach(tab => {
            tab.onclick = () => {
                document.querySelectorAll('.profile-tab').forEach(t => t.classList.remove('active'));
                document.querySelectorAll('.profile-tab-content').forEach(c => c.classList.remove('active'));
                tab.classList.add('active');
                document.getElementById('profileTab' + tab.dataset.tab.charAt(0).toUpperCase() + tab.dataset.tab.slice(1)).classList.add('active');
            };
        });
    }

    hideProfileModal() {
        document.getElementById('profileModalOverlay').classList.add('hidden');
    }

    async saveProfile() {
        const fullName = document.getElementById('profileFullName').value.trim();
        const email = document.getElementById('profileEmail').value.trim();
        const phone = document.getElementById('profilePhone').value.trim();
        const imagePath = this.userData ? this.userData.image_path : '';

        try {
            const res = await fetch('/api/user/profile', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ full_name: fullName, email, phone, image_path: imagePath })
            });
            const data = await res.json();
            if (data.success) {
                this.userData = { ...this.userData, full_name: fullName, email, phone, image_path: imagePath };
                this.updateProfileUI(this.userData);
                const img = document.getElementById('profileModalImg');
                const placeholder = document.getElementById('profileModalPlaceholder');
                if (imagePath) {
                    img.src = imagePath;
                    img.style.display = 'block';
                    placeholder.style.display = 'none';
                }
                this.showProfileMsg('Profile updated successfully!', 'success');
            } else {
                this.showProfileMsg(data.error || 'Failed to update profile', 'error');
            }
        } catch (err) {
            this.showProfileMsg('Connection failed', 'error');
        }
    }

    async changePassword() {
        const currentPass = document.getElementById('profileCurrentPass').value;
        const newPass = document.getElementById('profileNewPass').value;

        if (!currentPass || !newPass) {
            this.showProfileMsg('Please fill both password fields', 'error');
            return;
        }

        try {
            const res = await fetch('/api/user/change-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ current_password: currentPass, new_password: newPass })
            });
            const data = await res.json();
            if (data.success) {
                document.getElementById('profileCurrentPass').value = '';
                document.getElementById('profileNewPass').value = '';
                this.showProfileMsg('Password updated successfully!', 'success');
            } else {
                this.showProfileMsg(data.error || 'Failed to change password', 'error');
            }
        } catch (err) {
            this.showProfileMsg('Connection failed', 'error');
        }
    }

    async uploadProfilePhoto(e) {
        const file = e.target.files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append('image', file);

        try {
            const res = await fetch('/api/upload-image', { method: 'POST', body: formData });
            const data = await res.json();
            if (data.success) {
                this.userData.image_path = data.image_path;
                this.updateProfileUI(this.userData);
                const img = document.getElementById('profileModalImg');
                const placeholder = document.getElementById('profileModalPlaceholder');
                img.src = data.image_path;
                img.style.display = 'block';
                placeholder.style.display = 'none';
                this.showProfileMsg('Photo updated!', 'success');
            }
        } catch (err) {
            this.showProfileMsg('Upload failed', 'error');
        }
    }

    showProfileMsg(msg, type) {
        const el = document.getElementById('profileFormMsg');
        el.textContent = msg;
        el.className = 'profile-msg ' + type;
        setTimeout(() => el.classList.add('hidden'), 3000);
    }

    hideProfileMsg() {
        document.getElementById('profileFormMsg').className = 'profile-msg hidden';
    }

    toggleTheme() {
        const html = document.documentElement;
        const iconWrap = document.getElementById('themeIcon').parentElement;
        const currentTheme = html.getAttribute('data-coreui-theme');
        const isDark = currentTheme !== 'dark';
        html.setAttribute('data-coreui-theme', isDark ? 'dark' : 'light');
        iconWrap.innerHTML = isDark ? '<i data-lucide="moon" id="themeIcon"></i>' : '<i data-lucide="sun" id="themeIcon"></i>';
        lucide.createIcons();
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        // Also update CoreUI color-modes localStorage key
        localStorage.setItem('coreui-free-bootstrap-admin-template-theme', isDark ? 'dark' : 'light');
    }

    async logout() {
        try {
            await fetch('/api/logout', { method: 'POST' });
            window.location.href = '/';
        } catch (err) {
            console.error('Logout failed:', err);
        }
    }

    escapeHtml(text) {
        if (!this._escDiv) this._escDiv = document.createElement('div');
        this._escDiv.textContent = text;
        return this._escDiv.innerHTML;
    }

    async loadAdminPendingCount() {
        try {
            const res = await fetch('/api/admin/pending-users');
            if (!res.ok) return;
            const data = await res.json();
            const badge = document.getElementById('adminBadge');
            badge.textContent = data.length;
            badge.style.display = data.length > 0 ? 'flex' : 'none';
        } catch (err) {}
    }

    async openAdminUsers() {
        document.getElementById('adminUsersOverlay').classList.remove('hidden');
        this.switchAdminTab('pending');
        this.refreshIcons();
    }

    async switchAdminTab(tab) {
        document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
        document.querySelector('.admin-tab[data-tab="' + tab + '"]').classList.add('active');
        const container = document.getElementById('adminTabContent');

        if (tab === 'pending') {
            try {
                const res = await fetch('/api/admin/pending-users');
                const users = await res.json();
                document.getElementById('pendingCount').textContent = users.length ? ' (' + users.length + ')' : '';
                if (users.length === 0) {
                    container.innerHTML = '<div class="admin-empty"><i data-lucide="check-circle" style="width:32px;height:32px;color:var(--card-teal);margin-bottom:8px;"></i><br>No pending requests</div>';
                    this.refreshIcons();
                    return;
                }
                container.innerHTML = users.map(u => {
                    const initial = (u.full_name || u.username).charAt(0).toUpperCase();
                    return '<div class="admin-user-card">' +
                        '<div class="admin-user-avatar">' + this.escapeHtml(initial) + '</div>' +
                        '<div class="admin-user-info">' +
                            '<div class="admin-user-name">' + this.escapeHtml(u.full_name || u.username) + '</div>' +
                            '<div class="admin-user-detail">@' + this.escapeHtml(u.username) + (u.email ? ' · ' + this.escapeHtml(u.email) : '') + (u.phone ? ' · ' + this.escapeHtml(u.phone) : '') + '</div>' +
                            '<div class="admin-user-detail">Requested: ' + (u.requested_at || 'N/A') + '</div>' +
                        '</div>' +
                        '<select class="admin-role-select" id="roleSelect_' + u.id + '">' +
                            '<option value="User">User</option>' +
                            '<option value="Editor">Editor</option>' +
                            '<option value="Admin">Admin</option>' +
                        '</select>' +
                        '<div class="admin-user-actions">' +
                            '<button class="admin-btn admin-btn-approve" onclick="window.app.approveUser(' + u.id + ')"><i data-lucide="check"></i> Approve</button>' +
                            '<button class="admin-btn admin-btn-reject" onclick="window.app.rejectUser(' + u.id + ')"><i data-lucide="x"></i> Reject</button>' +
                        '</div>' +
                    '</div>';
                }).join('');
                this.refreshIcons();
            } catch (err) {
                container.innerHTML = '<div class="admin-empty">Failed to load</div>';
            }
        } else {
            try {
                const res = await fetch('/api/admin/all-users');
                const users = await res.json();
                if (users.length === 0) {
                    container.innerHTML = '<div class="admin-empty">No users found</div>';
                    return;
                }
                container.innerHTML = users.map(u => {
                    const initial = (u.full_name || u.username).charAt(0).toUpperCase();
                    const statusClass = u.status === 'approved' ? 'admin-status-approved' : (u.status === 'rejected' ? 'admin-status-rejected' : 'admin-status-pending');
                    const isSelf = u.id === this.userData?.id;
                    return '<div class="admin-user-card">' +
                        '<div class="admin-user-avatar" style="background:' + (u.role === 'Admin' ? 'var(--action-btn)' : u.role === 'Editor' ? 'var(--card-teal)' : 'var(--card-blue)') + '">' + this.escapeHtml(initial) + '</div>' +
                        '<div class="admin-user-info">' +
                            '<div class="admin-user-name">' + this.escapeHtml(u.full_name || u.username) + ' <span class="admin-status-badge ' + statusClass + '">' + u.status + '</span></div>' +
                            '<div class="admin-user-detail">@' + this.escapeHtml(u.username) + ' · ' + this.escapeHtml(u.role) + (u.email ? ' · ' + this.escapeHtml(u.email) : '') + '</div>' +
                        '</div>' +
                        (isSelf ? '<span style="font-size:10px;color:var(--text-light);font-weight:600;">You</span>' :
                        '<div class="admin-user-actions">' +
                            (u.status !== 'approved' ? '<button class="admin-btn admin-btn-approve" onclick="window.app.approveUser(' + u.id + ')"><i data-lucide="check"></i></button>' : '') +
                            '<button class="admin-btn admin-btn-delete" onclick="window.app.adminDeleteUser(' + u.id + ')"><i data-lucide="trash-2"></i></button>' +
                        '</div>') +
                    '</div>';
                }).join('');
                this.refreshIcons();
            } catch (err) {
                container.innerHTML = '<div class="admin-empty">Failed to load</div>';
            }
        }
    }

    async approveUser(userId) {
        const roleSelect = document.getElementById('roleSelect_' + userId);
        const role = roleSelect ? roleSelect.value : 'User';
        try {
            await fetch('/api/admin/approve-user/' + userId, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ role })
            });
            this.switchAdminTab('pending');
            this.loadAdminPendingCount();
        } catch (err) {}
    }

    async rejectUser(userId) {
        try {
            await fetch('/api/admin/reject-user/' + userId, { method: 'POST' });
            this.switchAdminTab('pending');
            this.loadAdminPendingCount();
        } catch (err) {}
    }

    async adminDeleteUser(userId) {
        if (!confirm('Delete this user permanently?')) return;
        try {
            await fetch('/api/admin/delete-user/' + userId, { method: 'POST' });
            this.switchAdminTab('all');
        } catch (err) {}
    }

    // ==================== NOTEPAD METHODS ====================
    _getNotepadNotes() {
        return JSON.parse(localStorage.getItem('notebook_notepad_notes') || '[]');
    }
    _saveNotepadNotes(notes) {
        localStorage.setItem('notebook_notepad_notes', JSON.stringify(notes));
    }
    _getNotepadCurrentId() {
        return localStorage.getItem('notebook_notepad_current');
    }
    _setNotepadCurrentId(id) {
        if (id) localStorage.setItem('notebook_notepad_current', id);
        else localStorage.removeItem('notebook_notepad_current');
    }

    renderNotepadDashboard() {
        const notes = this._getNotepadNotes();
        const grid = document.getElementById('notepadNotesGrid');
        if (!grid) return;
        if (notes.length === 0) {
            grid.innerHTML = '<div class="np-empty">No colorful notes created yet. Click "+ Create New Note"!</div>';
            return;
        }
        grid.innerHTML = notes.map((n, i) => {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = n.content || '';
            const plainText = (tempDiv.textContent || tempDiv.innerText || '').trim();
            const colorClass = 'np-card-' + (i % 6);
            var created = '', modified = '';
            if (n.created_at) {
                var cd = new Date(n.created_at);
                created = cd.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
            } else if (n.id && n.id.startsWith('np_')) {
                var ts = parseInt(n.id.replace('np_', ''), 10);
                if (!isNaN(ts)) {
                    created = new Date(ts).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
                }
            }
            if (n.modified_at) {
                var md = new Date(n.modified_at);
                modified = md.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
            }
            var datesHtml = '';
            if (created || modified) {
                datesHtml = '<div class="np-card-dates">' +
                    (created ? '<span>Created: ' + created + '</span>' : '') +
                    (modified ? '<span>Modified: ' + modified + '</span>' : '') +
                    '</div>';
            }
            return '<div class="np-card ' + colorClass + '" onclick="window.app.openNotepadNote(\'' + n.id + '\')">' +
                '<div>' +
                    '<div class="np-card-title">' + this.escapeHtml(n.title || 'Untitled Note') + '</div>' +
                    '<div class="np-card-preview">' + this.escapeHtml(plainText || 'Empty note...') + '</div>' +
                '</div>' +
                datesHtml +
                '<div class="np-card-footer">' +
                    '<button class="np-card-delete" onclick="event.stopPropagation();window.app.deleteNotepadNote(\'' + n.id + '\')">&#128465; Delete</button>' +
                '</div>' +
            '</div>';
        }).join('');
    }

    _showNotepadDashboard() {
        document.getElementById('notepadDashboard').classList.remove('hidden');
        document.getElementById('notepadEditorView').classList.add('hidden');
    }

    _showNotepadEditor() {
        document.getElementById('notepadDashboard').classList.add('hidden');
        document.getElementById('notepadEditorView').classList.remove('hidden');
    }

    openNotepadNew() {
        this._setNotepadCurrentId(null);
        document.getElementById('notepadTitle').value = '';
        document.getElementById('notepadEditor').innerHTML = '<p>Start typing your note...</p>';
        this._setNotepadEditMode(true);
        this._showNotepadEditor();
        document.getElementById('notepadTitle').focus();
    }

    openNotepadNote(id) {
        const notes = this._getNotepadNotes();
        const note = notes.find(n => n.id === id);
        if (!note) return;
        this._setNotepadCurrentId(id);
        document.getElementById('notepadTitle').value = note.title || '';
        document.getElementById('notepadEditor').innerHTML = note.content || '';
        this._setNotepadEditMode(false);
        this._showNotepadEditor();
    }

    _setNotepadEditMode(editing) {
        var editor = document.getElementById('notepadEditor');
        var toolbar = document.getElementById('notepadToolbar');
        var title = document.getElementById('notepadTitle');
        var saveBtn = document.getElementById('notepadSaveBtn');
        var editBtn = document.getElementById('notepadEditBtn');
        var printBtn = document.getElementById('notepadPrintBtn');
        editor.contentEditable = editing ? 'true' : 'false';
        title.disabled = !editing;
        if (editing) {
            toolbar.classList.remove('hidden');
            saveBtn.classList.remove('hidden');
            editBtn.classList.add('hidden');
            printBtn.classList.add('hidden');
        } else {
            toolbar.classList.add('hidden');
            saveBtn.classList.add('hidden');
            editBtn.classList.remove('hidden');
            printBtn.classList.remove('hidden');
        }
    }

    notepadSave() {
        var title = document.getElementById('notepadTitle').value.trim() || 'Untitled Note';
        var content = document.getElementById('notepadEditor').innerHTML;
        var notes = this._getNotepadNotes();
        var currentId = this._getNotepadCurrentId();
        if (currentId) {
            var note = notes.find(function(n) { return n.id === currentId; });
            if (note) {
                if (!note.created_at && note.id && note.id.startsWith('np_')) {
                    var ts = parseInt(note.id.replace('np_', ''), 10);
                    if (!isNaN(ts)) note.created_at = new Date(ts).toISOString();
                }
                note.title = title; note.content = content; note.modified_at = new Date().toISOString();
            }
        } else {
            var newNote = { id: 'np_' + Date.now(), title: title, content: content, created_at: new Date().toISOString() };
            notes.push(newNote);
            this._setNotepadCurrentId(newNote.id);
        }
        this._saveNotepadNotes(notes);
        this._setNotepadEditMode(false);
    }

    notepadEdit() {
        this._setNotepadEditMode(true);
        document.getElementById('notepadEditor').focus();
    }

    notepadPrint() {
        var title = document.getElementById('notepadTitle').value || 'Untitled Note';
        var content = document.getElementById('notepadEditor').innerHTML;
        var now = new Date();
        var dateStr = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        var createdStr = '';
        var currentId = this._getNotepadCurrentId();
        if (currentId) {
            var notes = this._getNotepadNotes();
            var note = notes.find(function(n) { return n.id === currentId; });
            if (note && note.created_at) {
                var d = new Date(note.created_at);
                createdStr = d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
            }
        }
        if (!createdStr) createdStr = dateStr;
        var letterheadB64 = _LH_B64;
        var html = '<!DOCTYPE html><html><head><title>' + title + ' \u2014 NoteBook By Arslan</title>' +
            '<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">' +
            '<style>' +
            '*{box-sizing:border-box;margin:0;padding:0;}' +
            'html,body{height:100%;}' +
            'body{font-family:"Plus Jakarta Sans","Inter",-apple-system,sans-serif;color:#1e1e2f;background:#fff;-webkit-print-color-adjust:exact;print-color-adjust:exact;}' +

            '.page{width:210mm;min-height:297mm;margin:0 auto;position:relative;display:flex;flex-direction:column;background:#fff;page-break-after:always;}' +
            '.page:last-child{page-break-after:auto;}' +

            '.page-bg{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;}' +
            '.page-bg img{width:100%;height:auto;display:block;}' +

            '.header-space{height:160px;flex-shrink:0;position:relative;z-index:1;}' +

            '.note-title-print{position:relative;z-index:1;padding:16px 54px 14px;}' +
            '.note-title-print h2{font-size:22px;font-weight:800;color:#1e1e2f;margin:0;letter-spacing:-0.3px;text-align:left;border-bottom:3px solid #5856d6;padding-bottom:10px;display:inline-block;}' +
            '.note-created-print{position:relative;z-index:1;padding:2px 54px 12px;font-size:11px;font-weight:500;color:#888;letter-spacing:0.2px;}' +

            '.body-content{position:relative;z-index:1;flex:1;padding:10px 54px 0;font-size:13.5px;line-height:1.9;color:#2d2d3f;}' +
            '.body-content img{width:120px;height:90px;object-fit:cover;border-radius:6px;margin:6px 4px;border:1px solid #eee;page-break-inside:avoid;vertical-align:top;}' +
            '.body-content p{margin-bottom:9px;}' +
            '.body-content h1{font-size:22px;font-weight:800;color:#1e1e2f;margin:16px 0 8px;page-break-after:avoid;}' +
            '.body-content h2{font-size:18px;font-weight:700;color:#1e1e2f;margin:14px 0 6px;page-break-after:avoid;}' +
            '.body-content h3{font-size:15px;font-weight:700;color:#1e1e2f;margin:12px 0 5px;page-break-after:avoid;}' +
            '.body-content ul,.body-content ol{padding-left:22px;margin:8px 0;}' +
            '.body-content blockquote{border-left:4px solid #5856d6;padding:10px 16px;margin:12px 0;background:#f8f8fc;border-radius:0 8px 8px 0;font-style:italic;color:#555;page-break-inside:avoid;}' +
            '.body-content table{width:100%;border-collapse:collapse;margin:12px 0;font-size:12.5px;page-break-inside:avoid;}' +
            '.body-content th{background:#f0f0f5;padding:9px 12px;text-align:left;font-weight:700;font-size:10px;text-transform:uppercase;letter-spacing:0.5px;color:#555;border-bottom:2px solid #e0e0e8;}' +
            '.body-content td{padding:8px 12px;border-bottom:1px solid #f0f0f5;}' +

            '.footer-space{flex-shrink:0;height:20px;position:relative;z-index:1;}' +

            '@media print{' +
                'html,body{height:auto;margin:0;padding:0;background:#fff;}' +
                '.page{width:100%;min-height:auto;margin:0;padding:0;}' +
                '@page{size:A4;margin:0;}' +
                '.body-content th{background:#f0f0f5 !important;-webkit-print-color-adjust:exact;print-color-adjust:exact;}' +
                '.body-content blockquote{background:#f8f8fc !important;-webkit-print-color-adjust:exact;print-color-adjust:exact;}' +
            '}' +
            '</style></head><body>' +
            '<div class="page">' +
                '<div class="page-bg"><img src="' + letterheadB64 + '"></div>' +
                '<div class="header-space"></div>' +
                '<div class="note-title-print"><h2>' + title + '</h2></div>' +
                '<div class="note-created-print">Created: ' + createdStr + '</div>' +
                '<div class="body-content">' + content + '</div>' +
                '<div class="footer-space"></div>' +
            '</div>' +
            '<script>window.onload=function(){setTimeout(function(){window.print();},600);}<\/script>' +
            '</body></html>';
        var blob = new Blob([html], { type: 'text/html' });
        var url = URL.createObjectURL(blob);
        var printWin = window.open(url, '_blank');
        if (printWin) {
            printWin.addEventListener('afterprint', function() { URL.revokeObjectURL(url); });
            setTimeout(function() { URL.revokeObjectURL(url); }, 60000);
        } else {
            URL.revokeObjectURL(url);
            alert('Please allow popups for this site to use Print/PDF.');
        }
    }

        notepadBack() {
        this._showNotepadDashboard();
        this.renderNotepadDashboard();
    }

    deleteNotepadNote(id) {
        if (!confirm('Delete this note?')) return;
        var notes = this._getNotepadNotes();
        notes = notes.filter(function(n) { return n.id !== id; });
        this._saveNotepadNotes(notes);
        this.renderNotepadDashboard();
    }

    notepadFormat(command, value) {
        document.getElementById('notepadEditor').focus();
        document.execCommand(command, false, value || null);
    }

    notepadInsertIcon(sel) {
        if (sel.value) {
            document.execCommand('insertText', false, sel.value);
            sel.value = '';
        }
    }

    notepadInsertTable() {
        var rows = prompt('Number of rows:', '3');
        var cols = prompt('Number of columns:', '3');
        if (!rows || !cols) return;
        rows = parseInt(rows); cols = parseInt(cols);
        if (isNaN(rows) || isNaN(cols) || rows < 1 || cols < 1) return;
        var table = '<table style="border-collapse:collapse;width:100%;margin:8px 0;">';
        for (var r = 0; r < rows; r++) {
            table += '<tr>';
            for (var c = 0; c < cols; c++) {
                if (r === 0) table += '<th style="border:1px solid #ccc;padding:6px 10px;background:#f0f0f5;font-weight:600;">Header ' + (c+1) + '</th>';
                else table += '<td style="border:1px solid #ccc;padding:6px 10px;">&nbsp;</td>';
            }
            table += '</tr>';
        }
        table += '</table><p><br></p>';
        var editor = document.getElementById('notepadEditor');
        if (editor) {
            editor.focus();
            document.execCommand('insertHTML', false, table);
        }
    }

    notepadInsertImage(event) {
        var files = event.target.files;
        if (!files || files.length === 0) return;
        var validTypes = ['image/jpeg', 'image/jpg', 'image/png'];
        var self = this;
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            if (validTypes.indexOf(file.type) === -1) continue;
            (function(f) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    self._notepadInsertAtCursor('<img src="' + e.target.result + '" style="max-width:200px;height:auto;border-radius:6px;margin:6px;display:block;">');
                };
                reader.readAsDataURL(f);
            })(file);
        }
        event.target.value = '';
    }

    _notepadInsertAtCursor(html) {
        var editor = document.getElementById('notepadEditor');
        editor.focus();
        var sel = window.getSelection();
        var range = sel.rangeCount > 0 ? sel.getRangeAt(0) : null;
        if (!range || !editor.contains(range.commonAncestorContainer)) {
            range = document.createRange();
            range.selectNodeContents(editor);
            range.collapse(false);
            sel.removeAllRanges();
            sel.addRange(range);
        }
        var temp = document.createElement('div');
        temp.innerHTML = html;
        var frag = document.createDocumentFragment();
        var lastNode;
        while (temp.firstChild) {
            lastNode = frag.appendChild(temp.firstChild);
        }
        range.deleteContents();
        range.insertNode(frag);
        if (lastNode && lastNode.nodeType === 1) {
            range.setStartAfter(lastNode);
            range.setEndAfter(lastNode);
            sel.removeAllRanges();
            sel.addRange(range);
        }
    }

    openNotepadDrawModal() {
        var modal = document.getElementById('notepadDrawModal');
        var canvas = document.getElementById('notepadDrawCanvas');
        modal.classList.remove('hidden');
        canvas.width = 400;
        canvas.height = 200;
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        this._notepadDrawing = false;
        this._notepadDrawCtx = ctx;

        var self = this;
        var getPos = function(e) {
            var rect = canvas.getBoundingClientRect();
            var clientX = e.touches ? e.touches[0].clientX : e.clientX;
            var clientY = e.touches ? e.touches[0].clientY : e.clientY;
            return { x: clientX - rect.left, y: clientY - rect.top };
        };
        var startDraw = function(e) { self._notepadDrawing = true; var p = getPos(e); ctx.beginPath(); ctx.moveTo(p.x, p.y); };
        var stopDraw = function() { self._notepadDrawing = false; ctx.beginPath(); };
        var doDraw = function(e) {
            if (!self._notepadDrawing) return;
            e.preventDefault();
            var p = getPos(e);
            ctx.lineWidth = 2; ctx.lineCap = 'round'; ctx.strokeStyle = '#000';
            ctx.lineTo(p.x, p.y); ctx.stroke(); ctx.beginPath(); ctx.moveTo(p.x, p.y);
        };

        canvas.onmousedown = startDraw;
        canvas.onmouseup = stopDraw;
        canvas.onmousemove = doDraw;
        canvas.ontouchstart = startDraw;
        canvas.ontouchend = stopDraw;
        canvas.ontouchmove = doDraw;
    }

    closeNotepadDrawModal() {
        document.getElementById('notepadDrawModal').classList.add('hidden');
    }

    clearNotepadCanvas() {
        var canvas = document.getElementById('notepadDrawCanvas');
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    insertNotepadDrawing() {
        var canvas = document.getElementById('notepadDrawCanvas');
        var dataUrl = canvas.toDataURL();
        this._notepadInsertAtCursor('<img src="' + dataUrl + '" style="max-width:200px;height:auto;border-radius:6px;margin:6px;display:block;">');
        this.closeNotepadDrawModal();
    }

    openBackupModal() {
        document.getElementById('backupOverlay').classList.remove('hidden');
        this._selectedBackupFile = null;
        this._selectedBackupType = '';
        document.getElementById('backupFileInput').value = '';
        document.getElementById('backupFileInfo').classList.add('hidden');
        document.getElementById('backupFileDrop').classList.remove('hidden');
        document.getElementById('btnRestoreBackup').disabled = true;
        document.getElementById('backupStatus').classList.add('hidden');
        this._loadBackupStats();
        this._initBackupDropZone();
    }

    _loadBackupStats() {
        fetch('/api/admin/backup-stats').then(r => r.json()).then(d => {
            document.getElementById('backupPageCount').textContent = d.pages || 0;
            document.getElementById('backupBlockCount').textContent = d.blocks || 0;
            document.getElementById('backupUserCount').textContent = d.users || 0;
            document.getElementById('backupLogCount').textContent = d.logs || 0;
        }).catch(() => {});
    }

    _initBackupDropZone() {
        var drop = document.getElementById('backupFileDrop');
        var input = document.getElementById('backupFileInput');
        var browse = document.getElementById('btnBrowseBackup');

        browse.onclick = () => input.click();
        drop.onclick = (e) => { if (e.target === drop || e.target === browse) input.click(); };

        drop.ondragover = (e) => { e.preventDefault(); drop.classList.add('drag-over'); };
        drop.ondragleave = () => drop.classList.remove('drag-over');
        drop.ondrop = (e) => {
            e.preventDefault();
            drop.classList.remove('drag-over');
            var file = e.dataTransfer.files[0];
            if (file) this._handleBackupFile(file);
        };

        input.onchange = (e) => { if (e.target.files[0]) this._handleBackupFile(e.target.files[0]); };

        document.getElementById('btnRemoveBackupFile').onclick = () => {
            this._selectedBackupFile = null;
            this._selectedBackupType = '';
            document.getElementById('backupFileInfo').classList.add('hidden');
            document.getElementById('backupFileDrop').classList.remove('hidden');
            document.getElementById('btnRestoreBackup').disabled = true;
            document.getElementById('backupFileInput').value = '';
        };

        document.getElementById('btnExportSQLite').onclick = () => this._exportBackup('sqlite');
        document.getElementById('btnExportExcel').onclick = () => this._exportBackup('excel');
        document.getElementById('btnExportJSON').onclick = () => this._exportBackup('json');
        document.getElementById('btnRestoreBackup').onclick = () => this._restoreBackup();
    }

    _handleBackupFile(file) {
        var ext = file.name.split('.').pop().toLowerCase();
        if (!['json', 'db'].includes(ext)) {
            this._showBackupStatus('Unsupported file format. Use .json or .db for restore (.xlsx is export-only).', 'error');
            return;
        }
        this._selectedBackupFile = file;
        this._selectedBackupType = ext;
        document.getElementById('backupFileDrop').classList.add('hidden');
        document.getElementById('backupFileInfo').classList.remove('hidden');
        document.getElementById('backupFileName').textContent = file.name + ' (' + (file.size / 1024).toFixed(1) + ' KB)';
        document.getElementById('btnRestoreBackup').disabled = false;
    }

    _exportBackup(format) {
        var btnId = { sqlite: 'btnExportSQLite', excel: 'btnExportExcel', json: 'btnExportJSON' }[format];
        var btn = document.getElementById(btnId);
        var orig = btn.innerHTML;
        btn.style.opacity = '0.5';
        btn.style.pointerEvents = 'none';

        fetch('/api/admin/backup/' + format).then(r => {
            if (!r.ok) throw new Error('Export failed');
            return r.blob();
        }).then(blob => {
            var ext = { sqlite: '.db', excel: '.xlsx', json: '.json' }[format];
            var url = URL.createObjectURL(blob);
            var a = document.createElement('a');
            a.href = url;
            a.download = 'intellinote-backup-' + new Date().toISOString().slice(0, 10) + ext;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            btn.style.opacity = '1';
            btn.style.pointerEvents = 'auto';
            this._showBackupStatus(format.toUpperCase() + ' backup downloaded!', 'success');
        }).catch(err => {
            btn.style.opacity = '1';
            btn.style.pointerEvents = 'auto';
            this._showBackupStatus('Failed: ' + err.message, 'error');
        });
    }

    _restoreBackup() {
        if (!this._selectedBackupFile) return;

        var mode = document.querySelector('input[name="restoreMode"]:checked').value;
        var ext = this._selectedBackupType;
        var isReplace = mode === 'replace';

        if (ext === 'db' && isReplace) {
            if (!confirm('WARNING: This will REPLACE your entire database.\nA backup of the current database will be saved automatically.\n\nContinue?')) return;
        } else if (ext === 'db') {
            if (!confirm('SQLite import always replaces the full database.\nA backup of the current database will be saved automatically.\n\nContinue?')) return;
        } else if (isReplace) {
            if (!confirm('WARNING: This will DELETE all current data and replace it with the backup.\n\nContinue?')) return;
        } else {
            if (!confirm('This will merge backup data with your existing data.\n\nContinue?')) return;
        }

        var btn = document.getElementById('btnRestoreBackup');
        btn.innerHTML = '<i data-lucide="loader"></i> Restoring...';
        btn.disabled = true;
        lucide.createIcons({ nodes: [btn] });
        this._showBackupStatus('Restoring backup...', 'loading');

        var formData = new FormData();
        formData.append('backup_file', this._selectedBackupFile);
        formData.append('mode', (ext === 'db') ? 'replace' : mode);

        var endpoint = { json: '/api/admin/restore/json', db: '/api/admin/restore/sqlite' }[ext] || '/api/admin/restore/json';

        fetch(endpoint, { method: 'POST', body: formData }).then(r => r.json()).then(data => {
            if (data.success) {
                var r = data.restored || {};
                var msg = data.message || 'Restored!';
                if (r.pages !== undefined) msg += ' (' + r.pages + ' pages, ' + r.blocks + ' blocks)';
                this._showBackupStatus(msg, 'success');
                if (data.requires_refresh) {
                    setTimeout(() => location.reload(), 1500);
                } else {
                    this.loadDashboard();
                    this._loadBackupStats();
                }
            } else {
                this._showBackupStatus(data.error || 'Restore failed', 'error');
            }
            btn.innerHTML = '<i data-lucide="upload-cloud"></i> Restore from Backup';
            btn.disabled = false;
            lucide.createIcons({ nodes: [btn] });
        }).catch(err => {
            this._showBackupStatus('Failed: ' + err.message, 'error');
            btn.innerHTML = '<i data-lucide="upload-cloud"></i> Restore from Backup';
            btn.disabled = false;
            lucide.createIcons({ nodes: [btn] });
        });
    }

    _showBackupStatus(msg, type) {
        var el = document.getElementById('backupStatus');
        el.textContent = msg;
        el.className = 'backup-status ' + type;
    }
}

window.app = new MyNoteBook();