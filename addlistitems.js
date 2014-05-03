
$(document).ready(function() {





$('form').submit(function(e){
    e.preventDefault();
	addItems();
});

$('input').keypress(function(e){
    if(e.keyCode == 13){
	    e.preventDefault();
        addItems();
    }
});

$('li').dblclick(function() {
      
      $(this).fadeOut('fast');
	  
	  
  });
  
  $(function() {


 $( ".sortable" ).sortable();

 $( ".sortable" ).disableSelection();

 });
  
  


 });



	


function addItems() {

var listform = document.getElementById("myList");
var input = listform.elements[0].value; //input from text box

if (/^\s+/.test(input)|| input == "") 
   alert("Please enter an item and do not include spaces before the item.");
   
else


$('#livelist').append("<li><input type='checkbox'/><label>" + input + "</label></li>");

$("#itembox").val("");

$('li').dblclick(function() {
      
      $(this).fadeOut('fast');
	  
	  
  });
  
  $(function() {


 $( ".sortable" ).sortable();

 $( ".sortable" ).disableSelection();

 });
  


} //end addItems function

