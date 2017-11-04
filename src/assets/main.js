$(function() {
https://www.codeschool.com/users/ekaiser93.json
  $.ajax({
    url: 'https://www.codeschool.com/users/ekaiser93.json',
    dataType: 'jsonp', success: function(response) {
      return(`response.courses.completed`);
    }
  });
});
