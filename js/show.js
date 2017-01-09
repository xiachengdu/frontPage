//Copyright@
//触发函数
function showPic(picId) {
	var picSource = picId.getAttribute("href");
	var place = document.getElementById("place");
	place.setAttribute("src",picSource);
}