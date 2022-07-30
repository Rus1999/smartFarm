  const APPID = "ENDProject7";
  const KEY = "Opp8J5zgE7jU3Jn";
  const SECRET = "v4hFb1kIJDen1MXVWEIQo2tJf";

  const ALIAS = "Esp8266";      
  const thing1 = "Esp8266";         

  var microgear = Microgear.create({
    key: KEY,
    secret: SECRET,
    alias : ALIAS
  });


  microgear.on('connected', function() {
    microgear.setAlias(ALIAS);
    document.getElementById("connected_NETPIE")
		.innerHTML = " "
  });

  microgear.on('present', function(event) {
    console.log(event);
  });

  microgear.on('absent', function(event) {
    console.log(event);	
  });

  microgear.resettoken(function(err) {
    microgear.connect(APPID);
  });