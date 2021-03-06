$(document).ready(function() {
  postURL = window.location.host;
  postURL = "http://" + postURL.split(":")[0] + ":9000/logs";

  var t = $('#dataTable').DataTable({dom: 'Bfrtip',buttons:['csv'],"order":[[0,'desc']]});

$("#addComment").click(function(e) {
    e.preventDefault();
    var data = {};
    data.source = 'user';
    data.type = 'comment';
    data.message = $("#future").text();
    data.comment = $("#CommentInput").val();

    $.post(postURL,data,function(value){
      t.row.add([value['createdAt'],value['source'],value['type'],value['message'],value['comment']]);
      t.draw();
      // console.log(data)
    });
    // $('#hiddenInput').val(someVariable); //perform some operations
    // this.submit(); //now submit the form
});

$.get(postURL,{limit:100},function(data){

  $.each(data, function( index, value ) {
  // $("#dataTable").append( index + ": " + value + "<br>");
  // console.log(index);
    t.row.add([value['createdAt'],value['source'],value['type'],value['message'],value['comment']]);
  });
  t.draw();
});

});
