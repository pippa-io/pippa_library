const set = new Set([
    '/.ssh/id_dsa',
    '/.ssh/id_ecdsa',
    '/.ssh/id_ed25519',
    '/.ssh/id_rsa',
    '/.git/config',
    '/.hg/hgrc',
    '/.svn/wc.db',
    '/blog/wp-admin/admin-ajax.php',
    '/wp-includes/js/comment-reply.js',
    '/wordpress/wp-admin/admin-ajax.php',
    '/wp-admin/admin-ajax.php',
    '/wp-login.php',
    '/wp/wp-admin/admin-ajax.php',
    '/ogPipe.aspx',
    '/ogShow.aspx',
    '/op69okl',
    '/op69okl.aspx',
    '/os86369.aspx',
    '/show.aspx',
    '/sftp_config.json',
    '/vendor/phpunit/phpunit/src/Util/PHP/eval-stdin.php',
    '/vendor/phpunit/phpunit/Util/PHP/eval-stdin.php',
    '/vendor/phpunit/src/Util/PHP/eval-stdin.php',
    '/vendor/phpunit/Util/PHP/eval-stdin.php',
    '/phpunit/phpunit/Util/PHP/eval-stdin.php',
    '/phpunit/Util/PHP/eval-stdin.php',
    '/lib/phpunit/phpunit/Util/PHP/eval-stdin.php',
    '/lib/phpunit/Util/PHP/eval-stdin.php',
    '/wp-content/plugins/dzs-videogallery/class_parts/vendor/phpunit/phpunit/src/Util/PHP/eval-stdin.php',
    '/components/com_b2jcontact/css/b2jcontact.css',
    '/.DS_Store',
    '/.idea/WebServers.xml',
    '/amp_preconnect_polyfill_404_or_other_error_expected._Do_not_worry_about_it'
]);


module.exports.match = (url) => {
    return set.has(url);
};