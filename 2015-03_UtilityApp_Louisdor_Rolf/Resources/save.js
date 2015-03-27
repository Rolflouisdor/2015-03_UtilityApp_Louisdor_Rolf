var currentWindow = Ti.UI.currentWindow;

var platform = Ti.Platform.osname;

var saveButton = Ti.UI.createButton({
	title:'Save',
	height:22,
	width:48,
	font:{fontSize:12}
});

var deleteButton = Ti.UI.createButton({
	title:'Delete',
	height:22,
	width:70,
	top:390,
	font:{fontSize:12}
});

var text= Ti.UI.createTextField({
	top:20,
	height:(platform==='android')?60:35,
	width:300,
	editable:true,
	hintText:'Enter notes Here!',
	borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	rightButton:saveButton
});

var textBox = Ti.UI.createTextArea({
	height:200,
	width:300,
	top:150,
	suppressReturn:true,
	borderWidth:1,
	backgroundColor:'#CCC',
	borderRadius:12,
	editable:false
});
currentWindow.add(text,textBox,deleteButton);

saveButton.addEventListener('click',function(e){
	if(text.value!==''){
		var dataFile = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,'saves.txt');
		if(!dataFile.exists()){
			dataFile.createFile();
			alert('File is save');
			
			dataFile.write(text.value);
			
			textBox.value = text.value;
			
		}else{
			var fileContent = dataFile.read();
			var newContent = fileContent.text+''+text.value;
			dataFile.write(newContent);
			
			textBox.value = newContent;
			
			alert('Info Saved');
		}
	}else{
		alert('Enter Info to save!');
	}
	text.value ='';
	textBox.blur();
	
});

deleteButton.addEventListener('click',function(e){
	var dataFile = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,'saves.txt');
	if(dataFile.exists()){
		dataFile.deleteFile();
		textBox.value ='';
		alert('text box is now empty');
	}
});

var dataFile = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,'saves.txt');
if(dataFile.exists()){
	var fileContent = dataFile.read();
	textBox.value=fileContent.text;
}
currentWindow.addEventListener('click',function(e){
	text.blur();
});
currentWindow.open();