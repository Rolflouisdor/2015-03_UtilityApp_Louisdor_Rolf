// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');
//all windows in my app
var win = Ti.UI.createWindow({
	backgroundColor:"#fff",
	title:"Menu-Window"
});

var win2 = Ti.UI.createWindow({
	title: 'accessing-Photos',
	backgroundColor:'#fff',
	url:'photos.js'
});

var win3 = Ti.UI.createWindow({
	title: 'Storing Info',
	backgroundColor:'#fff',
	url:'save.js'
});

var win4 = Ti.UI.createWindow({
	title: 'Info About Haiti',
	backgroundColor:'#fff',
	url:'map.js'
});

var navWindow = Ti.UI.iOS.createNavigationWindow({
	window:win
});

// all buttons that will open windows 

var button1 = Ti.UI.createButton({
	title:"Open Gallery",
	color:"#fff",
	width:"100%",
	backgroundColor:"#d32047",
	top:1,
	height:"20%"
	
});

var button2 = Ti.UI.createButton({
	title:"Quick Note",
	color:"#fff",
	width:"100%",
	backgroundColor:"brown",
	top:button1.top+80,
	height:"20%"
	
});

var button3 = Ti.UI.createButton({
	title:"Info",
	color:"#fff",
	width:"100%",
	backgroundColor:"#5069a9",
	top:button2.top+82,
	height:"20%"
	
});

button1.addEventListener('click',function(e){
	navWindow.openWindow(win2,{animation:true});
});

button2.addEventListener('click',function(){
	navWindow.openWindow(win3,{animation:true});
});

button3.addEventListener('click',function(){
	navWindow.openWindow(win4,{animation:true});
});

win.add(button1,button2,button3);

navWindow.open();