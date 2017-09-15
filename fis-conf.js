// 启用插件
fis.hook('relative');

// 让所有文件，都使用相对路径。
fis.match('**', {
    relative: true
})

// 忽略监听目录跟文件
fis.set('project.ignore', [
    'node_modules/**',
    'bower_components/**',
    '.git/**',
    '.svn/**',
    'fis-conf.js',
    'package.json',
    'bower.json',
    'output/**',
    'dist/**',
    'README.md',
    '产品文档.md',
    'images/**'
]);

// fis.match('static/script/core.js', {
//     release: false
// });

fis.match('*.less', {
    // fis-parser-less 插件进行解析
    parser: fis.plugin('less'),
    // .less 文件后缀构建后被改成 .css 文件
    rExt: '.css',

    postprocessor: [
        // https://www.npmjs.com/package/fis-postprocessor-autoprefixer
        fis.plugin('autoprefixer', {
            // detail config (https://github.com/postcss/autoprefixer#browsers)
            "browsers": ["Android >= 2.3", "ChromeAndroid > 1%", "iOS >= 4"],
            "cascade": true
        }),
        // fis-postprocessor-px2rem
        fis.plugin('px2rem', {
            baseDpr: 2,             // base device pixel ratio (default: 2)
            threeVersion: false,    // whether to generate @1x, @2x and @3x version (default: false)
            remVersion: true,       // whether to generate rem version (default: true)
            remUnit: 75,            // rem unit value (default: 75)
            remPrecision: 6         // rem precision (default: 6)
        })
    ]

});

// 如果 fis3-hook-relative 开启了。
// 那么 message.ret 将返回 target 相对与 file 的相对路径。

//基于页面的打包方式
fis.match('::package', {
  postpackager: fis.plugin('loader', {
    allInOne: true
  })
});
// 压缩js和css
fis.media('prod').match('*.js', {
    // fis-optimizer-uglify-js 插件进行压缩，已内置
    optimizer: fis.plugin('uglify-js')

}).match('*.less', {
    // fis-optimizer-clean-css 插件进行压缩，已内置
    optimizer: fis.plugin('clean-css')
}).match('*.png', {
  // fis-optimizer-png-compressor 插件进行压缩，已内置
  optimizer: fis.plugin('png-compressor')
})

// }).set('project.ignore', [
//        'templates/layout.html'
// ]);