function addSquareClickListener() {
  var square = $('.square')
  square.click(squareClickListener)
}

function squareClickListener() {
  var square = $(this);
  var isClicked = square.hasClass('.clicked')


  if (!isClicked) {

    $.ajax({

      url: 'https://flynn.boolean.careers/exercises/api/random/int',
      method: 'GET',
      success: function (data, state){

        var success = data['success'];
        var value = data['response'];

          if (success) {

            if (value <= 5) {
              square.append(value);
              square.addClass('.clicked');
              square.css({ "background": "#FFEB3B"});
            } else {
              square.append(value);
              square.css({ "background": "#8bc34a"});
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


}









function init(){
  addSquareClickListener();
}

$(document).ready(init);
