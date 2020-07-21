function addNewNumListener() {
  var btn = $('#number')
  btn.click(getNewNumListener);
}

function getNewNumListener() {

  var target = $('.square');
  target.html('');

    $.ajax({

      url: 'https://flynn.boolean.careers/exercises/api/random/int',
      method: 'GET',
      success: function (data, state){

        var success = data['success'];
        var value = data['response'];

          if (success) {

            if (value <= 5) {
              target.append(value);
              target.css({ "background": "#FFEB3B"});
            } else {
              target.append(value + "<br>");
              target.css({ "background": "#8bc34a"});
            }



          } else {
            console.log('error');
          }

      },


      error: function (request, state, error) {
      console.log('request', request);
      console.log('state', state);
      console.log('error', error);
    }




    })
}









function init(){
  addNewNumListener();
}

$(document).ready(init);
