var ameyms = { } || ameyms;
//TODO
( function( window ) {

    var renderLatestPost, loadLatestPost, renderAboutMe,
        latestPostEl, gplusDescEl, myPhotoEl;

    latestPostEl = $( '#latestPost' );
    gplusDescEl = $( '#gplus-desc' );
    myPhotoEl = $( '#myPhoto' );

    renderLatestPost = function( post )
    {
        if ( post && post.items && post.items.length > 0 )
        {
            //console.log( post );
            latestPostEl.removeClass( 'noshow loading' ).
                        html( post.items[ 0 ].object.content );
        }
    };

    loadLatestPost = function()
    {
        var req = gapi.client.plus.activities.list( {
                userId: '101640091246231296580',
                collection: 'public', maxResults:1 } );

                req.execute( function( resp ) {

                renderLatestPost( resp );
            } );
    };

    renderAboutMe = function( profile ) {
        //console.log( profile );
        if ( profile && profile.aboutMe && profile.image ) {
            gplusDescEl.removeClass( 'loading is-ready' ).
                        html( profile.aboutMe );

            myPhotoEl.attr( 'src', profile.image.url + '&sz=120' );

            loadLatestPost();
        } else {
            gplusDescEl.html( 'Well, I don&apos;t know what to say. ' +
              'But my <a href="https://plus.google.com/101640091246231296580/about">' +
              'Google+ profile</a> would tell you a thing or two about me.' );
        }

    };

    window.onGApiLoad = function()
    {
            gapi.client.setApiKey( 'AIzaSyAo7V7FEJisIA_gnS46yAHmjIf7-zeAoyU' );
            gapi.client.load( 'plus', 'v1', function() {
                var req = gapi.client.plus.people.get( { userId: '101640091246231296580' } );
                req.execute( function( resp ) {
                renderAboutMe( resp );
            } );
        } );
     };

     ameyms.renderAboutMe = renderAboutMe;

} )( window );
