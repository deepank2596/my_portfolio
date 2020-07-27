

let currentTheme = localStorage.getItem("theme") || "light-mode";

const themeDots = document.getElementsByClassName("theme-dot");

const setTheme = (theme)=>{
	const themeLink = document.getElementById("theme-style");
	switch(theme){
		case "light-mode":
			themeLink.href="profile.css";
			break;
		case "blue-mode":
			themeLink.href="blue.css";
			break;
		case "green-mode":
			themeLink.href="green.css";
			break;
		case "purple-mode":
			themeLink.href="purple.css";
			break;
	}
	localStorage.setItem("theme",theme);
}

setTheme(currentTheme);

for(var i=0;i<themeDots.length; i++){
	themeDots[i].addEventListener("click",function () {
	console.log(this.id)
	setTheme(this.id)
})
}



