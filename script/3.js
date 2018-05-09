// JavaScript Document



//-----------------------------
function showImage() {
               // document.getElementById('largeImg').src = imgName;
                showLargeImagePanel();
                unselectAll();
            }
            function showLargeImagePanel() {
                document.getElementById('largeImgPanel').style.visibility = 'visible';
                
			}
			//---------------
			function showImages() {
                //document.getElementById('largeImg2').src = imgName;
                showLargeImagePanels();
                unselectAll();
            }
            function showLargeImagePanels() {
                document.getElementById('largeImgPanel2').style.visibility = 'visible';
                
			}
			//---------------------------
			function showImages3(){
				showLargethirdpanel();
				unselectAll();
				}
				function showLargethirdpanel() {
                document.getElementById('largeImgPanel3').style.visibility = 'visible';
                
			}
			//---------------------------
			function showImages4(){
				showLargefourthpanel();
				unselectAll();
				}
				function showLargefourthpanel() {
                document.getElementById('largeImgPanel4').style.visibility = 'visible';
                
			}
			//---------------------------
            function unselectAll() {
                if(document.selection) document.selection.empty();
                if(window.getSelection) window.getSelection().removeAllRanges();
            }
            function hideMe(obj) {
                obj.style.visibility = 'hidden';
            }
			//--------------------------------------------------
function doFirst(){
	
	 x=0;
	word='WINGS';
	
	btn1= document.keyPad.btn1.value;
	btn2= document.keyPad.btn2.value;
	btn3= document.keyPad.btn3.value;
	btn4= document.keyPad.btn4.value;
	btn5= document.keyPad.btn5.value;
	btn6= document.keyPad.btn6.value;
	btn7= document.keyPad.btn7.value;
	btn8= document.keyPad.btn8.value;
	btn9= document.keyPad.btn9.value;
	btn10= document.keyPad.btn10.value;
	
	
	btn1.addEventListener('click',btn1Click,false);
	btn2.addEventListener('click',btn2Click,false);
	btn3.addEventListener('click',btn3Click,false);
	btn4.addEventListener('click',btn4Click,false);
	btn5.addEventListener('click',btn5Click,false);
	btn6.addEventListener('click',btn6Click,false);
	btn7.addEventListener('click',btn7Click,false);
	btn8.addEventListener('click',btn8Click,false);
	btn9.addEventListener('click',btn9Click,false);
	btn10.addEventListener('click',btn10Click,false);
	
	spc[1] = document.getElementById('empty1').innerHTML;
	spc[2] = document.getElementById('empty2').innerHTML;
	spc[3] = document.getElementById('empty3').innerHTML;
	spc[4] = document.getElementById('empty4').innerHTML;
	spc[5] = document.getElementById('empty5').innerHTML;
	
	
}


function btn1Click(){
	disable('btn1');
	x=  btn1;
	emp(x);
	
	
	
}


function btn2Click(){
	disable('btn2');
	x=btn2;
	emp(x);
	
	
	
}

function btn3Click(){
	disable('btn3');
	x=btn3;
	emp(x);
	

}

function btn4Click(){
	disable('btn4');
	x=btn4;
	emp(x);
	
	
}

function btn5Click(){
	disable('btn5');
	x=btn5;
	emp(x);
	

}


function btn6Click(){
	disable('btn6');
	x=btn6;
	emp(x);
	
	
}


function btn7Click(){
	disable('btn7');
	x=btn7;
	emp(x);
	
		
}


function btn8Click(){
	disable('btn8');
	x=btn8;
	emp(x);
	
}

function btn9Click(){
	disable('btn9');
	x=btn9;
	emp(x);
	
}

function btn10Click(){
	disable('btn10');
	x=btn10;
	emp(x);
		
}

function disable(z){
	
	a = document.getElementById('empty1').innerHTML + document.getElementById('empty2').innerHTML +  document.getElementById('empty3').innerHTML + document.getElementById('empty4').innerHTML + document.getElementById('empty5').innerHTML ;
	var t=a.length
	if(t<=4){
		
	
	document.getElementById(z).disabled = true;
		}
	}
function enable(y){
		
		if( document.getElementById(y).innerHTML == btn1 && document.getElementById('btn1').disabled == true )
		 {
	           	 document.getElementById('btn1').disabled = false;
				 		 
		 }	
	
	 else if( document.getElementById(y).innerHTML ==btn2 && document.getElementById('btn2').disabled == true)
	  {
	           	 document.getElementById('btn2').disabled = false;
				 		 
		 }	
	
	 else if( document.getElementById(y).innerHTML == btn3 && document.getElementById('btn3').disabled == true)
	 {
	           	 document.getElementById('btn3').disabled = false;
				 		 
		 }	
	 else if( document.getElementById(y).innerHTML == btn4 && document.getElementById('btn4').disabled == true)
	 {
	           	 document.getElementById('btn4').disabled = false;
				 		 
		 }	
	 else if( document.getElementById(y).innerHTML == btn5 && document.getElementById('btn5').disabled == true)
	 {
	           	 document.getElementById('btn5').disabled = false;
				 		 
		 }	
	 else if( document.getElementById(y).innerHTML == btn6 && document.getElementById('btn6').disabled == true)
	 {
	           	 document.getElementById('btn6').disabled = false;
				 		 
		 }	
	 else if( document.getElementById(y).innerHTML == btn7 && document.getElementById('btn7').disabled == true)
	 {
	           	 document.getElementById('btn7').disabled = false;
				 		 
		 }	
	 else if( document.getElementById(y).innerHTML == btn8 && document.getElementById('btn8').disabled == true)
	 {
	           	 document.getElementById('btn8').disabled = false;
				 		 
		 }	
		 else if( document.getElementById(y).innerHTML == btn9 && document.getElementById('btn9').disabled == true)
	 {
	           	 document.getElementById('btn9').disabled = false;
				 		 
		 }	
	else if( document.getElementById(y).innerHTML == btn10 && document.getElementById('btn10').disabled == true)
	 {
	           	 document.getElementById('btn10').disabled = false;
				 		 
		 }	
	
	}

function delSpace1(){
	
	
		
 enable('empty1');	
	
	document.getElementById('empty1').innerHTML='';
	
}

function delSpace2(){
	
	
			enable('empty2');	
	 document.getElementById('empty2').innerHTML='';
	
	
}
function delSpace3(){

	enable('empty3');	
	 document.getElementById('empty3').innerHTML='';
	
	
}
function delSpace4(){
	
	enable('empty4');	
	 document.getElementById('empty4').innerHTML='';
	
	
}

function delSpace5(){
	
	enable('empty5');	
	 	 document.getElementById('empty5').innerHTML='';
	
	
}



function emp(x){
	

	for (i=1;i<=6;i++){
		
		if (document.getElementById('empty'+i).innerHTML == ''){
			
			
			document.getElementById('empty'+i).innerHTML=x;
			
			
			
			break;
			}
		
		}
		
		 b = document.getElementById('empty1').innerHTML + document.getElementById('empty2').innerHTML +  document.getElementById('empty3').innerHTML + document.getElementById('empty4').innerHTML + document.getElementById('empty5').innerHTML ;
		
		yo(b);
		
	}


function yo(b){

	if (b==word){
		alert("Owssomm");
window.open('4.html');		
		}

	
	}
	
function redirect(){
window.location="https://www.facebook.com/"
return}

window.addEventListener('load',doFirst,false);