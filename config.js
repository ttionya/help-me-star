module.exports = {

////////////////////////////////////////////
//                  Setting               //
////////////////////////////////////////////

  /**
   * Tool debug
   *
   **/
  debug: true,

  /**
   * Third party module debug
   *
   **/
  third_party_module_debug: false,

  github: {

    /**
     * Your Github username
     *
     * You can find your username by click the avatar.
     *
     **/
    username: 'ttionya',

    /**
     * Your Github email
     *
     * Email will used in `git config user.email email`.
     *
     **/
    email: 'git@ttionya.com',

    /**
     * Your Personal access tokens
     *
     * Turn to https://github.com/settings/tokens to generate a new access token for this tool.
     *
     * Note: You must choose repo -> public_repo.
     *
     **/
    access_token: 'd49e9b17c929e6c9276b9fcc6a0fef84c46260c1',

    /**
     * Push to which repository
     *
     * Be sure this repository is exist on Github.
     *
     * Example: 'stars'
     *
     **/
    repo: 'test'
  },

  local: {

    /**
     * Awesome list path
     *
     * Relative to the root directory of the tool.
     *
     * Default: 'AwesomeList'
     *
     * You should use '\' on Windows, and use '/' on Linux/MAC.
     *
     **/
    path: 'AwesomeList',

    /**
     * Language
     *
     * English or 中文
     *
     * Support: en | zh
     *
     **/
    language: "en"
  },


  generator: {

    /**
     * Get your star list.
     *
     * Default: false
     *
     * Only run once when you initialize this tool.
     *
     **/
    history_stars: true,

    /**
     * Set description
     *
     * Markdown file will display which description.
     *
     * Option: all | default | custom
     *
     *           all: repo's default description and custom description
     *       default: repo's default description
     * (best) custom: custom description
     *
     * Note: We will display repo's default description(custom description) if custom description(repo's default description) is empty.
     *
     **/
    description: "all",

    /**
     * Set categories
     *
     * Default: false
     *
     * Markdown file display the categories or not.
     *
     **/
    categories: true,
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
    password: '123abc!@#'
  },


  ////////////////////////////////////////////
  //       That's all, stop editing!        //
  ////////////////////////////////////////////

  // retry times
  retries: 3,

  name: 'Awesome List Generate'
};