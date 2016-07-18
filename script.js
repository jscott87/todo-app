$(document).ready(function(){
    $("#button").click(function(e){
    		e.preventDefault();
        //create variable to add 
        var toAdd = $('input[name="checkListItem"]').val();

				if(toAdd == ''){
        	alert('input is empty')
        } else {
        	$('.list').append('<div class="item ui-state-default ui-sortable-handle" id="sortable">'+'<input type="checkbox" class="checkbox">' + toAdd + ' <i class="fa fa-trash-o fa-lg" title="Delete" aria-hidden="true"></i>' + '</div>');
          $('input[name="checkListItem"]').val('');
          $('.upload').hide('slow');
        }
    });
    //remove item when clicked
    $(document).on('click','.fa-trash-o',function(){
        $(this).closest('.item').fadeOut(300); 
    });
    //hide upload class
    $('.upload').hide();
    //prepend class to input to upload content
    $('.input').click(function(){
    $('.upload').show('slow');
    });
    //hit enter to print to-do
    $('.input').keypress(function(){
   $('.list').append('<div class="item ui-state-default ui-sortable-handle" id="sortable">' + '<input type="checkbox" class="checkbox">' + toAdd +'<i class="delete fa fa-">delete</i>' + '</div>');
   });
    //add upload doc once typing starts in input
    $(document).on('keypress',function(){
    	$('.upload').show('slow');
    });
   
    //sort items on order you want
    var el = document.getElementById('list');
    var sortable = Sortable.create(el);

});