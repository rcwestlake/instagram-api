$(document).ready(function() {
    console.log('js check');
    
    /*press button to show photos*/
    
    $('#searchPhotos').click(function() {
        $(this).fadeOut('fast');
        $('#intro-header').fadeOut('fast');
        $('#photoHeader').fadeIn('fast');
        getData("#wrapper1");
        getData("#wrapper2");
        getData("#wrapper3");
    })
    
    
    
    var getData = function(div) {
        $(function() {

            $.ajax({
                type: "GET",
                dataType: "jsonp",
                cache: false,
                url: "https://api.instagram.com/v1/media/popular?client_id=85fb603fb11f45a385651e0f2e209bb1",
                success: function(data) {
                    photoData = data;
                    main(data, div);
                }
            });
        });
    }
    
    
    var main = function(data, div) {
        var html = "";
        for (var i = 0; i < data.data.length; i++)
        {
            console.log(data.data[i].images.thumbnail.url); 
    
    		html += '<div class="photoGrid"><img src="' + data.data[i].images.thumbnail.url + '"></div>';
    	
        }
        $(div).html(html);
    }
    
    
   
    
});