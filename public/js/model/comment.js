var Comment = function(info){
  this.comment = info.comment;
  this.id = info._id;
};

Comment.all = []
Comment.fetch = function(){
  var url = "/comments";
  var request = $.getJSON(url).then(function(response){
    for(var i = 0; i < response.length; i++){
      Comment.all.push(new Comment(response[i]));
    }
  }).fail(function(response){
    console.log("js failed to load");
  });
  return request;
};

newCommentAdd = function(commentData) {
  console.log("start?");
    var url = "/comments";
    var request = $.ajax({
      url: url,
      method: "POST",
      data: JSON.stringify(commentData),
      contentType : "application/json",
      success: function(commentData){
        console.log(commentData);
      }
      , error: function(jqXHR, textStatus, err){
        console.log(textStatus)
      }
    }).then(
      console.log("Done")
    );
    return request;
  }
