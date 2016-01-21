var page = 0;
  function calldata(){
    var xhr;
    page++;
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
}
    function printjson(arr){
      var story="";
      var i;
      for(i = 0; i < arr.hits.length; i++) {

        story += '<a href="'+ arr.hits[i].url +'" class="list-group-item col-md-8 col-md-offset-2"><h4 class="list-group-item-heading">'+ arr.hits[i].title +'</h4><p class="list-group-item-text row"><span class="col-md-2">'+ arr.hits[i].points +' points</span><span class="col-md-2">by '+ arr.hits[i].author +'</span><span class="col-md-2">'+ arr.hits[i].num_comments +'comments</span></p></a>';

    }
    document.getElementById('list').innerHTML += story;

  }
