
<script>
$.ajax ({
    url:"https://api.nasa.gov/planetary/apod?api_key=7MBunEcob2YLUUcZZq0Z5GtCVuYWxB4blhGy3sKY",
    success: function(getImages){
        document.getElementById("img").innerHTML="<img scr="+getImages.url+"' style='width: 100%;'/>";
        document.getElementById("copyright").innerHTML="By"+getImages.copyright;
        document.getElementById("title").innerHTML=getImages.title;
        document.getElementById("explanation").innerHTML=getImages.explanation;
    }
});
</script>