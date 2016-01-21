window.onload = function() {
    var xhr;
    var page = 1;
    var url ="http://hn.algolia.com/api/v1/search_by_date?tags=story&page=" + page;
    if (window.XMLHttpRequest){
      //browser recentes
       xhr = new XMLHttpRequest();
    }else {
      //IE 8,9...
      xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhr.onload = function(e){
      if (this.status == 200){
       var news = JSON.parse(this.response);
       console.log(news);
       printjson(news);
    }else {
      console.log("error");
    }};
    xhr.open('GET', url, true);

    xhr.send();

    function printjson(arr){
      var story="";
      var i;
      for(i = 0; i < arr.hits.length; i++) {

        story += '<a href="#" class="list-group-item"><h4 class="list-group-item-heading">'+ arr.hits[i].title +'</h4></a>';

    }
    document.getElementById('list').innerHTML = story;
    }
};
