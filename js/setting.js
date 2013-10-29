$(document).ready(function() {
$(".main").scrollable({
	vertical: true,
	keyboard: 'static',
	onSeek: function(event, i) {
		horizontal.eq(i).data("scrollable").focus();
	}
}).navigator(".main_navi");
var horizontal = $(".scrollable").scrollable({ circular: true }).autoscroll(6000).navigator(".navi");
horizontal.eq(0).data("scrollable").focus();
}); 


ddsmoothmenu.init({
	mainmenuid: "templatemo_menu", //menu DIV id
	orientation: 'h', //Horizontal or vertical menu: Set to "h" or "v"
	classname: 'ddsmoothmenu', //class added to menu's outer DIV
	//customtheme: ["#1c5a80", "#18374a"],
	contentsource: "markup" //"markup" or ["container_id", "path_to_menu_file"]
})