var ameyms = {} || ameyms;

(function(window){
	
	var renderLatestPost = function(post)
	{
		if(post && post.items && post.items.length > 0)
		{
			//console.log(post);
			$('#latestPost').removeClass('noshow').removeClass('loading');
			$('#latestPost').html(post.items[0].object.content);
		}
	}

	var loadLatestPost = function()
	{
		var req = gapi.client.plus.activities.list({userId :'101640091246231296580', collection:'public', maxResults:1});
	  			req.execute(function(resp){

	  			renderLatestPost(resp);
	  		});
	}
	var renderAboutMe = function(profile)
	{
		//console.log(profile);
		$('#gplus-desc').removeClass('loading');
		$('#gplus-desc').addClass('textReady');

		$('#gplus-desc').html(profile.aboutMe);	
		$('#myPhoto').attr('src', profile.image.url);

		loadLatestPost();	

	}
	window.onGApiLoad = function()
  	{
	  	//console.log(gapi);
	  	
	  	
	  	gapi.client.setApiKey('AIzaSyAo7V7FEJisIA_gnS46yAHmjIf7-zeAoyU');
	  	gapi.client.load('plus', 'v1', function(){


	  		  	var req = gapi.client.plus.people.get({userId :'101640091246231296580'});
	  			req.execute(function(resp){

	  			renderAboutMe(resp);
	  		});
	  	});
	 }


	 ameyms.renderAboutMe = renderAboutMe;



})(window);