var gulp                = require("gulp");
var gutil               = require("gulp-util");
var webpack             = require("webpack");
var WebpackDevServer    = require("webpack-dev-server");
var webpackConfig       = require("./webpack.config.js");

// The development server (the recommended option for development)
gulp.task("default", ["webpack-dev-server"]);

gulp.task("build-dev", ["webpack:build-dev"], function() {
    gulp.watch(["src/**/*"], ["webpack:build-dev"]);
});

// Production build
gulp.task("build", ["webpack:build"]);

gulp.task("webpack:build", function(callback) {
    // modify some webpack config options
    var myConfig = Object.create(webpackConfig);
    myConfig.plugins = myConfig.plugins.concat(
        new webpack.DefinePlugin({
            "process.env": {
                // This has effect on the react lib size
                "NODE_ENV": JSON.stringify("production")
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin()
    );

    // run webpack
    webpack(myConfig, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack:build", err);
        gutil.log("[webpack:build]", stats.toString({ colors: true }));
        callback();
    });
});

// modify some webpack config options
var myDevConfig     = Object.create(webpackConfig);
myDevConfig.devtool = "sourcemap";
myDevConfig.debug     = true;

// create a single instance of the compiler to allow caching
var devCompiler     = webpack(myDevConfig);

gulp.task("webpack:build-dev", function(callback) {
    // run webpack
    devCompiler.run(function(err, stats) {
        if(err) throw new gutil.PluginError("webpack:build-dev", err);
        gutil.log("[webpack:build-dev]", stats.toString({ colors: true }));
        callback();
    });
});

gulp.task("webpack-dev-server", function(callback) {
    var myDevServerConfig        = Object.create(webpackConfig);
    myDevServerConfig.devtool    = "eval";
    myDevServerConfig.debug     = true;

    new WebpackDevServer(webpack(myDevServerConfig), {
        publicPath:    "/" + myDevServerConfig.output.publicPath,
        stats:         { colors: true }
    }).listen(myDevServerConfig.dev.server.port, myDevServerConfig.dev.server.domain, function(err) {
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        //
        gutil.log("[webpack-dev-server]", "http://localhost:3000/webpack-dev-server/index.html");
    });
});
