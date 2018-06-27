const heightInput = $('#inputHeight');
const widthInput = $('#inputWeight');
const colorInput = $('#colorPicker');


//makeGrid function that removes previous table and then new grid is built with help of for-loop
makeGrid = () => {
	let heightValue = heightInput.val();
	let widthValue = widthInput.val();

	let pixelCanvas = $('#pixelCanvas');
	pixelCanvas.children().remove();//clears previous table


	//building of a grid
	for(let h=0; h<heightValue; h++){
		pixelCanvas.append('<tr></tr>');
	}
	for(let w=0; w<widthValue; w++){
		$('tr').append('<td></td>');
	}
}


//changing the background color of cell with a selected color
$('table').on('click', 'td', function(){
	$(this).css('backgroundColor', colorInput.val());
});


//calling of makeGrid() when size is submitted
form = $('#sizePicker');
form.submit(function(event) {
    event.preventDefault(); 
    makeGrid();
});