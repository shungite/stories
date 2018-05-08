self.requestFileSystemSync = self.webkitRequestFileSystemSync || self.requestFileSystemSync;

var fs = self.requestFileSystemSync( TEMPORARY, 50 * 1024 * 1024 );

function getFile( path ) {
    path = path.split( "/" );

    var dir = fs.root, file = path.pop();

    while ( path.length ) {
        dir = dir.getDirectory( path.shift(), { create: true });
    }

    return dir.getFile( file, { create: true });
}

function read( path ) {
    var file = getFile( path );

    self.postMessage({
        command: "readFileComplete",
        args: [ path, file.toURL() ]
    });
}

function write( path, data ) {
    var file = getFile( path );
    file.createWriter().write( data );

    self.postMessage({
        command: "writeFileComplete",
        args: [ path ]
    });
}

self.addEventListener( "message", function( event ) {
    var fn = self[ event.data.command ];
    fn.apply( self, event.data.args );
}, false );