import * as chokidar from 'chokidar'
import Mocha from 'mocha';

const target_directory = 'src/'

const log = console.log.bind(console)

const watcher = chokidar.watch(target_directory, {
    ignored: /[\/\\]\./,
    persistent: true,
})


// Monitoring
// ________________________________
// Ready for changes
watcher.on('ready', function () {

    // ready
    log('Initial scan complete. Ready for changes');

    // watched Paths
    var watchedPaths = watcher.getWatched();
    log("watchedPaths :", watchedPaths);

    // Files
    // _ _ _ _ _ _ _ _ _ _ _ _ _ _
    // Detect File added
    watcher.on('add', function (path, stats) {
        log(`File ${path} has been added`);
        if (stats) console.log(`File ${path} changed size to ${stats.size}`, stats);

        var watchedPaths = watcher.getWatched();
        log("watchedPaths :", watchedPaths);
    });

    // Detect File changed
    watcher.on('change', function (path, stats) {
        log(`File ${path} has been changed`);
        if (stats) console.log(`File ${path} changed size to ${stats.size}`, stats);

        let test_path;
        if (/.test.js$/.test(path)) test_path = path
        else if (/.js$/.test(path)) test_path = path.replace(/.js$/, '.test.js')
        log('test_path:' + test_path)

        Object.keys( require.cache ).forEach( key => delete require.cache[ key ] );
        const mocha = new Mocha
        mocha.addFile(test_path)
        mocha.run()
    });

    // Detect File removed
    watcher.on('unlink', function (path) {
        log(`File ${path} has been removed`);
    });

    // Directories
    // _ _ _ _ _ _ _ _ _ _ _ _ _ _
    // Detect Directory added
    watcher.on('addDir', function (path) {
        log(`Directory ${path} has been added`);
    });

    // Detect Directory removed
    watcher.on('unlinkDir', function (path) {
        log(`Directory ${path} has been removed`);
    });

    // Error
    // _ _ _ _ _ _ _ _ _ _ _ _ _ _
    // Detect Watcher Error
    watcher.on('error', function (path) {
        log(`Watcher error: ${error}`);
    });

});

