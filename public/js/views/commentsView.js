

var CommentView = function(comment){
  this.comment = comment;
  this.$el = $(".comment");
  this.renderComment();
}

CommentView.prototype = {
  renderComment: function (){
    var self = this;
    self.$el.html(self.buildComment());
    var deleteButton = self.$el.find("button.delete");
    deleteButton.on('click',function (){
      console.log(self.comment.comment);
    })
  },
  buildComment: function (){
    var self = this.comment;
    $('body').append('<div class=comment>'+self.comment+'<button class=delete type=button name=submit>Delete</button></div>')
  }
}

var submitComment = function () {
  $('.submit').on("click", function() {
    console.log("clicked?");
    var commentData = $('input[name=comment]').val()
    console.log(commentData);
    var newComment = {comment:commentData}
    newCommentAdd(newComment).then(function() { renderComment(newComment); });
  });
}
