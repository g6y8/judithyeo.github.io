 $(document).ready(function(){
    // Add all jQuery code here.
    $("nav a").click(function(){
    	$(".active").removeClass("active");
    	$(this).addClass("active");
    });
});