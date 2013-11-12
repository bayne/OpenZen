# OpenZen

OpenZen is an open source read-only viewer for stories on [AgileZen](https://agilezen.com).

## Before using

Please note that this is meant for internal use and should be put behind some sort of password
protection. Your API key is accessible within a Javascript config file.

## Installation

1. Clone this repository
1. Set up your favorite web server and point the `DOCROOT` to `$REPOROOT/app/`. Let's
assume this is accessible at localhost:8080 for now.
1. Set up the config file:
    1. Go to config directory: `cd $REPOROOT/app/config`
    1. Copy the sample config: `cp sample-config.js config.js`
    1. Update `config.js` with your API Key and project ID
1. Start your web server if not already started.
1. Navigate to localhost:8080
1. Have pancakes

## Screenshots

### Default view: all stories not in Backlog or Live
![](https://raw.github.com/suw/OpenZen/master/content/no-filter.png)

### Search by phase name
![](https://raw.github.com/suw/OpenZen/master/content/phase-filter.png)

### Search by story name
![](https://raw.github.com/suw/OpenZen/master/content/story-name-filter.png)

## Todo

* Tests!

* Add additional fields

    * Status

    * Phase

* Allow user to browse through all API returned pages to allow (aka allow
browsing if there are more than 1,000 stories)

## License

This project is licensed under GPL, version 3.0. Please see [LICENSE](LICENSE) for details.

## Warranty (From GPLv3)

THERE IS NO WARRANTY FOR THE PROGRAM, TO THE EXTENT PERMITTED BY APPLICABLE
LAW. EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT HOLDERS AND/OR
OTHER PARTIES PROVIDE THE PROGRAM “AS IS” WITHOUT WARRANTY OF ANY KIND,
EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.
THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE PROGRAM IS WITH
YOU. SHOULD THE PROGRAM PROVE DEFECTIVE, YOU ASSUME THE COST OF ALL NECESSARY
SERVICING, REPAIR OR CORRECTION.
