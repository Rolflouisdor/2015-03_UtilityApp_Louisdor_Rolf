var currentWindow = Ti.UI.currentWindow;
//scrollView 
var view = Ti.UI.createScrollView({
	backgroundColor:'#6f6c67',
	width:'100%',
	height:350,
	top:0.5,
	scrollableViewShow:true
});
// create label with instructions
var textLabel = Ti.UI.createLabel({
	color:'#fff',
	font:{fontSize:18},
	text:'This application will allow you to have access to the device Photo albulm \n\as well as adding caption to the pictures that are in your photo album in a very simple way\n\all you have to do is select the picture you desire to add the caption on to\n\ and a prompt will come up with instructions on how to add your caption ',
	textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER
});
// button to access photo album 
var button = Ti.UI.createButton({
	title:'Open the photo album',
	widht:250,
	height:60,
	bottom:5
});

var userComfirm = Ti.UI.createAlertDialog({
	title:'Would you like to access the device photo Gallery?',
	message:'To access photo Album click yes or no',
	buttonNames:['Yes','No']
});

userComfirm.addEventListener('click',function(e){
	if(e.index===0){
		Ti.Media.openPhotoGallery({
			success:function(e){
				var imageView = Ti.UI.createImageView({
					image:e.media,
					width:'100%',
					height:350,
					top:.5,
				});
				userInput = Ti.UI.createAlertDialog({
					title:'Would you like to add a caption?',
					message:'Adding caption to your emageses will help you remember the events or the occasion this emage was taken',
					buttonNames:['Yes','No']
				});
				imageView.addEventListener('click',function(e){
					userInput.show();
				});
				
				userInput.addEventListener('click',function(e){
					if(e.index===0){
						var input = Ti.UI.createAlertDialog({
							title: 'Enter Caption Here!',
						    style: Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT,
						    buttonNames: ['OK']
						});
						input.addEventListener('click', function(e){
						    var label = Ti.UI.createLabel({
						    	color:'#fff',
						    	font:{fontSize:18},
						    	text:e.text,
						    	textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER
						    });
						    var email = Ti.UI.createEmailDialog({
					    		barColor:'#FFCC00',
					    		html:true,
					    		toRecipients:['rolflouisdor@gmail.com'],
					    		subject:'Great Pictures taking by Me',
					    		messageBody:'<p>Look at some beautiful pictures that were taking by my iPhone I added captions on them for more information</p>'	
					    	});
						    label.addEventListener('click',function(e){
						    	email.open();	
						    });
						    
						    email.addEventListener('complete',function(e){
						    	if(e.result==email.SENT){
						    		alert('E-Mail Sent');
						    	}else{
						    		alert('Status #'+ e.result);
						    	}
						    });
						    	
						  
						    imageView.add(label);
						  });
						
						  input.show();
					}else{
						alert('You clicked No');
					}
				});
				currentWindow.add(imageView);
			},
			error:function(e){
				alert('unable to access media gallery on your device contact the app developer');
			}
		});
	}else{
		alert('You have click No');
	}
});
view.add(textLabel);
currentWindow.add(view);
currentWindow.add(button);

button.addEventListener('click',function(e){
	userComfirm.show();
});

currentWindow.open();
