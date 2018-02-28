module.exports = {

    ////////////////////////////////////////////
    //                  Setting               //
    ////////////////////////////////////////////

    github: {

        /**
         * Your Github username
         *
         * You can find your username by click the avatar.
         *
         **/
        username: '{{username}}',

        /**
         * Your Github email
         *
         * Email will used in `git config user.email email`.
         *
         **/
        email: '{{email}}',

        /**
         * Your Personal access tokens
         *
         * Go to https://github.com/settings/tokens to generate a new access token for this tool.
         *
         * Note: You must selected repo -> public_repo.
         *
         **/
        access_token: '{{token}}',

        /**
         * Awesome list repository
         *
         * Be sure this repository is exist on Github.
         *
         * Example: 'stars'
         *
         **/
        repo: '{{repo}}',
    },

    local: {

        /**
         * Awesome list path
         *
         * Relative or absolute path.
         *
         * Default: 'AwesomeList'
         *
         * You should use '\' on Windows, and use '/' on Linux and MAC.
         *
         **/
        path: '{{localPath}}',
    },

    generator: {

        /**
         * Set description
         *
         * Markdown file will display which description.
         *
         * Option: all | default | custom
         *
         *           all: Display both repository's description and custom description
         *       default: Display repository's description only
         * (best) custom: Display custom description only
         *
         * Note: We will display repo's default description(custom description) if custom description(repo's default description) is empty.
         *
         **/
        description: "{{description}}",

        /**
         * Set categories
         *
         * Default: false
         *
         * Markdown file display the categories or not.
         *
         **/
        categories: "{{categories}}",
    },

    server: {

        /**
         * Port
         *
         * You must run as root when port < 1024
         *
         * You can reverse proxy this by Apache, Nginx etc.
         *
         **/
        port: 8888,

        /**
         * Password
         *
         * This is the server,
         * you need a password as credentials.
         *
         * Strong password:
         *                  1. at least 8 characters long
         *                  2. combines letters, numbers, and symbol characters within the password
         *
         * Regex is /^(?=.*\d)(?=.*[A-Za-z])(?=.*[-_=+!@#$%^&*()[\]\{}\\\/|?`~;:'",.<>])[\w-=+!@#$%^&*()[\]\{}\\\/|?`~;:'",.<>]{8,}$/
         *
         **/
        password: '',
    },

    // log4js
    log4js: {

        /**
         * Log level
         *
         * Option: OFF | FATAL | ERROR | WARN | INFO | DEBUG | TRACE | ALL
         *
         */
        logLevel: 'INFO',

        /**
         * Log file
         *
         * Save the log information to file if not empty.
         */
        logFile: '',
    },


    ////////////////////////////////////////////
    //       That's all, stop editing!        //
    ////////////////////////////////////////////

    // retry times
    retries: 3,

    name: 'Awesome List Generator',
};
