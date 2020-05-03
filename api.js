var URL = "https://api.nasa.gov/planetary/apod";

$.ajax({
    url: URL,
    data: {
        api_key: "7MBunEcob2YLUUcZZq0Z5GtCVuYWxB4blhGy3sKY",
        hd: true,
        date: "2020-04-24"
    },
    success: function (response){
        if(response.media_type !="image") {
            $('#data').html('<iframe width="420" height="315" src="'+response.url+'"></iframe>');
        } else {
            $('#data').html('<img src="'+response.url+'">');
        }

        },
        error: function(xhr) {
            alert(xhr);
        }
    
});
