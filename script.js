
var txt="";
let output="";
function getInfo() {
	console.log('Hello');
	var username = document.getElementById('exampleInputUsername1').value+document.getElementById('exampleInputEmail1').value
+document.getElementById('exampleInputPassword1').value
      fetch('http://bd10d9d0.ngrok.io/users')
      .then((res) => res.json())
      .then((data) => {
      	data.forEach(function(user){
         output=`${user.username}`+`${user.email}`+`${user.password}`;
         console.log(output.localeCompare(username));
         	if(output.localeCompare(username) == 1) {
         					txt="Successfuly Logged In!!";
			document.getElementById("disp").innerHTML = txt;
			// stop the function if this is found to be true
			return
         	}

      });
      	})
	txt=("User data not found");
	document.getElementById("disp").innerHTML = txt;
}
