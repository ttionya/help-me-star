const colors = require('colors');



module.exports = {
  global: {
    not_found_config_file: 'Cannot find %s, please copy %s as %s, and configure it.',
    success: colors.green('OK'),
    failed: colors.red('Failed'),
  },

  en: {
    init_welcome: 'Thank you for use %s !!!',
    init_check_config_file_info: 'Check config file: ',
    init_initialize_info: 'Start initialize, please wait ...',
    init_mkdir_info: 'Creating working directory: ',
    init_mkdir_failed: 'Error: You don\'t have enough permissions to access the repository directory.',
    init_initialized_info: 'This Git repository already initialized, we will reinitialize it.',
    init_git_reinitialize_info: 'Git reinitialize: ',
    init_git_initialize_info: 'Git initialize: ',
    init_reset_git_config_info: 'Reset Git configuration: ',
    init_set_git_config_info: 'Set Git configuration: ',
    init_write_token_file_info: 'Write token cache file: ',
    init_check_remote_repo_info: 'Check remote repository: ',
    init_check_remote_repo_404: 'Error: Remote repository "%s" is not exist !',
    init_choose_pull_or_push_info: '\nNow, you have to choose:\nIf you have a %s repository, please entry %s, this operation will overwrite %s repository.\n'
    + 'If you have a %s repository, please entry %s, this operation will overwrite %s repository.\n',
    init_choose_remote: 'remote',
    init_choose_local: 'local',
    init_confirm_pull_or_push_info: 'You have entry %s.',
    init_push_info: 'Push to the remote repository: ',
    init_pull_info: 'Pull from the remote repository: ',
    init_finish_initialize_info: 'Initialization is complete !!',
    init_get_starred_info: 'We will import your starred repositories list. Please wait ...',

    check_config_debug: 'Error: Please check config file (debug must be Boolean).',
    check_config_third_party_module_debug: 'Error: Please check config file (third_party_module_debug must be Boolean).',
    check_config_github_username: 'Error: Please check config file (empty github.username).',
    check_config_github_email: 'Error: Please check config file (invalid github.email).',
    check_config_github_access_token: 'Error: Please check config file (invalid github.access_token).',
    check_config_github_repo: 'Error: Please check config file (invalid github.repo).',
    check_config_local_path: 'Error: Please check config file (local.path point to the current directory)',
    check_config_local_language: 'Error: Please check config file (invalid local.language).',
    check_config_generator_history_stars: 'Error: Please check config file (generator.history_stars must be Boolean).',
    check_config_generator_description: 'Error: Please check config file (invalid generator.description).',
    check_config_generator_categories: 'Error: Please check config file (generator.categories must be Boolean).',
    check_config_server_port: 'Error: Please check config file (server.port must from 0 to 65535).',
    check_config_server_port_1024: 'Note: On Linux systems, any port below 1024 requires root access.',
    check_config_server_password: 'Error: Please check config file (server.password at least 8 characters long, and combines letters, numbers, and symbol characters within the password).',

    info_get_repos_retry: 'Failed to get repository\'s information, left %d retry times.',
    info_get_starred_repos_retry: 'Failed to get starred repositories list, left %d retry times.',
    info_get_starred_repos_progress: 'Processing on page %d of %d data.',
    info_get_starred_repos_generate: 'Generating markdown files ...',
    info_get_starred_repos_finish: '',

    error_starred_get_data: 'We have some troubles with read data from data.json.',
    error_starred_write_data: 'We have some troubles with write data to data.json.',

    debug_getStarredRepos_info: 'Get starred repos. (page %d, per page %d)',
    debug_getRepos_information_info: 'Get information of repo %s.',
  },

  zh: {
    init_welcome: '感谢您使用 %s ！！！',
    init_check_config_file_info: '校验 config 文件：',
    init_initialize_info: '初始化中，请稍后...',
    init_mkdir_info: '正在创建工作区：',
    init_mkdir_failed: '错误：你没有足够的权限访问仓库目录',
    init_initialized_info: '这个 Git 仓库已被初始化，我们将对它重新初始化',
    init_git_reinitialize_info: '重新初始化 Git：',
    init_git_initialize_info: '初始化 Git：',
    init_reset_git_config_info: '重设 Git 配置：',
    init_set_git_config_info: '设置 Git 配置：',
    init_write_token_file_info: '设置 token 缓存文件：',
    init_check_remote_repo_info: '检查远程仓库：',
    init_check_remote_repo_404: '错误：远程仓库 "%s" 不存在！',
    init_choose_pull_or_push_info: '\n现在，你面临一个选择：\n如果你有一个%s仓库，请输入 %s，此操作会覆盖%s仓库的所有内容\n'
    + '如果你有一个%s仓库，请输入 %s，此操作会覆盖%s仓库的所有内容\n',
    init_choose_remote: '远程',
    init_choose_local: '本地',
    init_confirm_pull_or_push_info: '你输入了 %s',
    init_push_info: '提交到远程仓库：',
    init_pull_info: '从远程仓库拉取代码：',
    init_finish_initialize_info: '初始化完成！！',
    init_get_starred_info: '我们将为您导入已加星标的仓库列表，请稍后...',

    check_config_debug: '错误：请确认 config 文件（debug 属性必须为布尔值）',
    check_config_third_party_module_debug: '错误：请确认 config 文件（third_party_module_debug 属性必须为布尔值）',
    check_config_github_username: '错误：请确认 config 文件（github.username 属性为空）',
    check_config_github_email: '错误：请确认 config 文件（无效的 github.email 属性）',
    check_config_github_access_token: '错误：请确认 config 文件（无效的 github.access_token 属性）',
    check_config_github_repo: '错误：请确认 config 文件（无效的 github.repo 属性）',
    check_config_local_path: '错误：请确认 config 文件（local.path 指向当前目录）',
    check_config_local_language: '错误：请确认 config 文件（无效的 local.language 属性）',
    check_config_generator_history_stars: '错误：请确认 config 文件（generator.history_stars 属性必须为布尔值）',
    check_config_generator_description: '错误：请确认 config 文件（无效的 generator.description 属性）',
    check_config_generator_categories: '错误：请确认 config 文件（generator.categories 属性必须为布尔值）',
    check_config_server_port: '错误：请确认 config 文件（server.port 范围必须是 0 - 65535）',
    check_config_server_port_1024: '注意：在 Linux 系统中，监听低于 1024 的端口需要 root 权限',
    check_config_server_password: '错误：请确认 config 文件（server.password 必须包含数字、字母、特殊字符，并且长于 8 字符）',

    info_get_repos_retry: '仓库信息获取失败，剩余尝试次数 %d 次',
    info_get_starred_repos_retry: '已加星标的仓库列表获取失败，剩余尝试次数 %d 次',
    info_get_starred_repos_progress: '正在处理第 %d 页的共 %d 条数据',
    info_get_starred_repos_generate: '正在生成 markdown 文件...',
    info_get_starred_repos_finish: '',

    error_starred_get_data: '我们从 data.json 中读取数据时遇到了麻烦',
    error_starred_write_data: '我们在将数据写入 data.json 时遇到了麻烦',

    debug_getStarredRepos_info: '获取已加星标的仓库列表 （第 %d 页，每页 %d 条）',
    debug_getRepos_information_info: '获取 %s 仓库的信息',
  }
};