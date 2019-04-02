function showOpacity(show){
	var classes = document.getElementsByClassName(show)[0];
	classes.style.opacity = "1";
	classes.style.cursor= "pointer";
	classes.style.zIndex = "1";
}
  function hideOpacity(show){
	var classes = document.getElementsByClassName(show)[0];
	classes.style.opacity = "0";
	classes.style.cursor= "context-menu";
	classes.style.zIndex = "-1";
  };