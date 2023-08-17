const btn = document.getElementById("btn");  
 const results = document.getElementById("result");  
 const speechRecognition = window.speechRecognition || window.webkitSpeechRecognition;  
 const recognition = new speechRecognition();  
 recognition.onstart = function(){  
  document.getElementById("result").value = "";
   console.log("you can speek now");  
 }  
 recognition.onresult = function(event){  
   var text = event.results[0][0].transcript;  
   console.log(text);  
   document.getElementById("result").value = text;  
 }  
 function copyDivToClipboard() {  
   var range = document.createRange();  
   range.selectNode(document.getElementById("result"));  
   window.getSelection().removeAllRanges(); // clear current selection  
   window.getSelection().addRange(range); // to select text  
   document.execCommand("copy");  
   window.getSelection().removeAllRanges();// to deselect  
   alert("Text Copied"); 
   }

   let filehandle;
   async function oPen(){
    [filehandle] = await window.showOpenFilePicker();
    let fdata = await filehandle.getFile();
    let word = await fdata.text();
    document.getElementById("result").value = word;
   }
   function saveAs(){
    var filedata = document.getElementById("result").value;
   
    var file = new Blob([filedata], {type: "text"});
    var anchor = document.createElement("a");
    anchor.href = URL.createObjectURL(file);
    anchor.download = "save.txt";
    anchor.click();    
   }
