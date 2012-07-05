// PubSub with jQuery.Callbacks
// ============================
// USAGE
// Subscribers
// $.Topic( "mailArrived" ).subscribe( fn1 );
// $.Topic( "mailArrived" ).subscribe( fn2 );
// $.Topic( "mailSent" ).subscribe( fn1 );

// Publisher
// $.Topic( "mailArrived" ).publish( "hello world!" );
// $.Topic( "mailSent" ).publish( "woo! mail!" );

// Here, "hello world!" gets pushed to fn1 and fn2
// when the "mailArrived" notification is published
// with "woo! mail!" also being pushed to fn1 when
// the "mailSent" notification is published.

// output:
// hello world!
// fn2 says: hello world!
// woo! mail!

;(function( $, window, undefinded ) {

    var topics = {};

    $.Topic = function( id ) {
        var callbacks,
            method,
            topic = id && topics[ id ];
        if ( !topic ) {
            callbacks = $.Callbacks();
            topic = {
                publish: callbacks.fire,
                subscribe: callbacks.add,
                unsubscribe: callbacks.remove
            };
            if ( id ) {
                topics[ id ] = topic;
            }
        }
        return topic;
    };

}( window.jQuery, window ));