var weddingCountdown = {

	toDate: function (to)
	{
		this.to = to;
	}

};

(function($countdown) 
{
	function start_counting()
	{
		setInterval(publish_update, 500);
	};

	function publish_update()
	{
		var wedding = $countdown.to;

		var now  = new Date();
		
		var counter = document.getElementById('counter');
		var remaining = new Date((wedding.getTime() - now.getTime()));
		var years =  '';
		
		counter.innerHTML = "";

		/* MONTHS */
		counter.innerHTML += "<div class='months'>";
		if(remaining.getMonth() == 2)
		{
			counter.innerHTML += "1 <span class='unit'>month.</span>";
		}

		else if(remaining.getMonth() > 2)
		{
			counter.innerHTML += (remaining.getMonth()-1)+" <span class='unit'>months.</span>";
		}
		counter.innerHTML += "</div>";

		/* DAYS */
		counter.innerHTML += "<div class='days'>";
		if(remaining.getDate() == 2)
		{
			counter.innerHTML += "1 <span class='unit'>day.</span>";
		}
		else if(remaining.getDate() > 2)
		{
			counter.innerHTML += (remaining.getDate()-1)+" <span class='unit'>days.</span>";
		}
		counter.innerHTML += "</div>";

		/* HOURS */
		counter.innerHTML += "<div class='hours'>";
		if(remaining.getHours() == 1)
		{
			counter.innerHTML += "1 <span class='unit'>hour.</span>";
		}
		else if(remaining.getHours() > 1)
		{
		
			if(remaining.getHours() <10)
			{
				counter.innerHTML += '0';
			}
			counter.innerHTML += (remaining.getHours())+" <span class='unit'>hours.</span>";
		}
		else if(remaining.getMonth() > 1 || remaining.getDay() > 1)
		{
			counter.innerHTML += "00 <span class='unit'>hours.</span> <br/>";
		}
		counter.innerHTML += "</div>";


		/* MINUTES */
		counter.innerHTML += "<div class='minutes'>";
		if(remaining.getMinutes() == 1)
		{
			counter.innerHTML += "1 <span class='unit'>minute.</span>";
		}
		else if(remaining.getMinutes() > 1)
		{
			if(remaining.getMinutes() <10)
			{
				counter.innerHTML += '0';
			}
			counter.innerHTML += (remaining.getMinutes())+" <span class='unit'>minutes.</span>";
		}
		else if(remaining.getMonth() > 1 || remaining.getDay() > 1 || remaining.getHours() > 0)
		{
			counter.innerHTML += "00 <span class='unit'>minutes.</span>";
		}
		counter.innerHTML += "</div>";


		/* SECONDS */
		counter.innerHTML += "<div class='seconds'>";
		if(remaining.getSeconds() == 1)
		{
			counter.innerHTML += "01 <span class='unit'>second.</span>";
		}
		else
		{
			if(remaining.getSeconds() <10)
			{
				counter.innerHTML += '0';
			}
			counter.innerHTML += (remaining.getSeconds())+" <span class='unit'>seconds.</span> <br/>";
		}
		counter.innerHTML += "</div>";
	};

	$countdown.start = start_counting;

})(weddingCountdown);