	var url = 'http://ec2-18-220-153-61.us-east-2.compute.amazonaws.com:2491/process/?question=what%20is%20the%20rig%20of%20BD06';

	return fetch(url)
		.then(res=>{
		    return res.json();
		  }).then(val=>{
		   // return val;
		    console.log(val);
		    //context.variables.answer = val['description'];		    
		    //return "Result is "+context.variables.answer;
		    document.write(val);
		  })

		  
//var xhr = new XMLHttpRequest();
//xhr.open("GET", "https://www.codecademy.com/", false);
//xhr.send();
//var result = xhr.statusText
//document.write(result);
//	
//
//var xhr = new XMLHttpRequest();
//xhr.open("GET", "http://ec2-18-220-153-61.us-east-2.compute.amazonaws.com:2491/process/?question=what%20is%20the%20rig%20of%20BD06", false);
//xhr.send();
//var jsonResult = JSON.parse(xhr.responseText); // Returns Object
//document.write(jsonResult);
	
	
//	var xhr = new XMLHttpRequest();
//	xhr.open("GET", "http://ec2-18-220-153-61.us-east-2.compute.amazonaws.com:2491/process/?question=what%20is%20the%20rig%20of%20BD06", false);
//	xhr.send();
//	document.write(xhr.responseText);
//	
//
//	// Avaamo Version
//	var data = JSON.stringify(false);
//	var xhr = new XMLHttpRequest();
//	xhr.withCredentials = true;
//
//	xhr.addEventListener("readystatechange", function () {
//	  if (this.readyState === this.DONE) {
//		  document.write(xhr.responseText);
//	  }
//	});
//	xhr.open("GET", "http://ec2-18-220-153-61.us-east-2.compute.amazonaws.com:2491/process/?question=what%20is%20the%20rig%20of%20BD06",false);
//	xhr.send(data);