



function Abs(){
    var ab=document.querySelector('#text').value;
    var ac=document.querySelector('#email').value;
    var ad=document.querySelector('#pass').value;
    var ae=document.querySelector('#conpass').value;
    
    
    var at=document.querySelector('#Ui')
    var ap=document.querySelector('#Ei')
    var aq=document.querySelector('#Pi')
    var ar=document.querySelector('#Cpi')


   if(ab=='' || ab==' '){
    at.innerHTML='Null User name'
   }
   if(ac=='' || ac==' '){
    ap.innerHTML='Null Email'
   }
   if(ad=='' || ad==' '){
    aq.innerHTML='Null Password'
   }
   if(ae==''|| ae==' '){
    ar.innerHTML='null'
   }
   if(ad!=ae){
    alert('password is Not matching')
   }
}









