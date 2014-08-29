$(document).ready(function(){
    $('#switch').is(function(){
        var container = document.getElementById( 'switch' ),
            optionSwitch = Array.prototype.slice.call( container.querySelectorAll( 'div.options > a' ) );

        function init() {
            optionSwitch.forEach( function( el, i ) {
                el.addEventListener( 'click', function( ev ) {
                    ev.preventDefault();
                    _switch( this );
                }, false );
            } );
        }

        function _switch( opt ) {
            // remove other view classes and any any selected option
            optionSwitch.forEach(function(el) { 
                classie.remove( container, el.getAttribute( 'data-view' ) );
                classie.remove( el, 'selected' );
            });
            // add the view class for this option
            classie.add( container, opt.getAttribute( 'data-view' ) );
            // this option stays selected
            classie.add( opt, 'selected' );
        }

        init();
    });
});
