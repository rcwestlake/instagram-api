var getURL = function(url) {
            console.log(url); 
            window.location.href = url;
        }

$(document).ready(function() {
    console.log('js check');
    
    /*press button to show photos*/
    
    $('#refresh').click(function() {
        getData("#wrapper1");
        getData("#wrapper2");
        getData("#wrapper3");
        getData("#wrapper4");
    })
    
    $('#searchPhotos').click(function() {
        $(this).fadeOut('fast');
        $('#intro-header').fadeOut('fast');
        $('#photoHeader').fadeIn('fast');
        $('#ps').fadeIn('fast');
        $('#refresh').fadeIn('fast');
        getData("#wrapper1");
        getData("#wrapper2");
        getData("#wrapper3");
        getData("#wrapper4");
    })
    
    
    
    
    var getData = function(div) {
        $(function() {

            $.ajax({
                type: "GET",
                dataType: "jsonp",
                cache: false,
                url: "https://api.instagram.com/v1/media/popular?client_id=85fb603fb11f45a385651e0f2e209bb1",
                success: function(data) {
                    main(data, div);
                }
            });
        });
    }
    
    
    var main = function(data, div) {
        var html = "";
        for (var i = 0; i < data.data.length; i++)
        {
            console.log(data.data[i]); 
    
    		html += '<div class="photoGrid" onClick="getURL(\'' +data.data[i].link + '\')"><img src="' + data.data[i].images.thumbnail.url + '"><p id="userName">@'+ data.data[i].user.username+'</p><p id="likes"># of Likes: ' + data.data[i].likes.count+'</p></div>';
    	
        
        }
        $(div).html(html);
    }
   
});