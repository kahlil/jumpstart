/*!
 * jQuery lightweight plugin boilerplate
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 */

// the semi-colon before the function invocation is a safety
// net against concatenated scripts and/or other plugins
// that are not closed properly.
;(function ( $, window, document, hb, store, undefined ) {
    // undefined is used here as the undefined global
    // variable in ECMAScript 3 and is mutable (i.e. it can
    // be changed by someone else). undefined isn't really
    // being passed in so we can ensure that its value is
    // truly undefined. In ES5, undefined can no longer be
    // modified.

    // window and document are passed through as local
    // variables rather than as globals, because this (slightly)
    // quickens the resolution process and can be more
    // efficiently minified (especially when both are
    // regularly referenced in your plugin).

    // Create the defaults once
    var pluginName = 'shoutBox';
    var defaults = {
        propertyName: "value"
    };

    // The actual plugin constructor
    function Plugin( element, options ) {
        this.element = element;

        // jQuery has an extend method that merges the
        // contents of two or more objects, storing the
        // result in the first object. The first object
        // is generally empty because we don't want to alter
        // the default options for future instances of the plugin
        this.options = $.extend( {}, defaults, options) ;

        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    Plugin.prototype = {

        init: function() {
            // Place initialization logic here
            // You already have access to the DOM element and
            // the options via the instance, e.g. this.element
            // and this.options
            // you can add more functions like the one below and
            // call them like so: this.yourOtherFunction(this.element, this.options)

            var el = this.element;
            var $el = $(this.element);
            var form = $('#shoutboxform').html();
            var templForm = hb.compile( form );
            var shouts = store.get( 'shouts' );

            // Add the form into the site
            $el.html( templForm );

            // Stick a listener to the addShout button.
            $( '#addShout' )
                .on( 'click', {
                    $el: $el,
                    $textarea: $el.find('textarea')
                }, this.somebodyClicked );

            // Stick a listener to the clearShouts button.
            $( '#clearShouts' )
                .on( 'click', this.clearShouts );

            if ( !shouts ) {
                store.set( 'shouts', [] );
            }
            else {
                this.buildShoutListFromStore( $el, shouts );
            }
        },

        somebodyClicked: function(event) {

            event.preventDefault();
            var $textarea = event.data.$textarea;
            var shout = $textarea.val();

            if ( shout !== '' ) {

                var context = { shout: shout };
                var li = hb.compile($('#shout').html());
                var html = li(context);
                var $el = event.data.$el;
                var index = store.get( 'shouts' ) ? store.get( 'shouts' ).length : 0;
                var shouts = store.get( 'shouts' ) ? store.get( 'shouts' ) : [];

                $textarea.val('');

                $el.find('ul').append(html);

                // Tell subscribers what happened
                $.Topic('addedShout').publish();

                // Store the shout in localstorage
                shouts[index] = shout;
                store.set( 'shouts', shouts );

                // log(store.get('shouts'));
            }
        },

        buildShoutListFromStore: function( $el, shouts ) {

            var li = hb.compile( $('#shout').html() );
            var html = '';
            var $ul = $el.find('ul');

            for ( var i in shouts ) {
                html += li( { shout: shouts[i] } );
            }

            $ul.append( html );
        },

        clearShouts: function( event ) {

            event.preventDefault();
            $('textarea').val('');
            $('ul').empty();
            store.remove( 'shouts' );

            $.Topic( 'clearedAllShouts' ).publish();

        }
    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName,
                new Plugin( this, options ));
            }
        });
    };

})( jQuery, window, document, Handlebars, store );
