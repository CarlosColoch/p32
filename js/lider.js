
window.addEventListener('load',iniciar,false);

	    var contador=0;

	    function iniciar(){
	        setInterval('cambiarImg()',5000);
	    }

	   	var obj=document.getElementById('slider');
	    var obj2=obj.getElementsByTagName('img');

	    function cambiarManual(sentido)
	    {
	    	if (sentido=="DER") {
		    	obj2[contador].style.opacity=0;
		    	if (contador<obj2.length-1) 
		    	{
		    		contador++;
		    		obj2[contador].style.opacity=1;
		    		console.log('Contador x ' + contador + ' Longitud ' + obj2.length);
		    	}
		    	else
		    	{
		    		contador=0;
		    		obj2[contador].style.opacity=1;
		    		console.log('Contador y ' + contador + ' Longitud ' + obj2.length);
		    	}
	    	}
	    	else if (sentido=="IZQ") 
	    	{
		    	obj2[contador].style.opacity=0;
		    	if (contador!=0) 
		    	{
		    		contador--;
		    		obj2[contador].style.opacity=1;
		    	}
		    	else
		    	{
		    		contador=obj2.length-1;
		    		obj2[contador].style.opacity=1;
		    	}
	    	}
	    }

	    function cambiarImg(){	        

        	if(contador==obj2.length){
	            for(var i=0; i<obj2.length; i++){
	                obj2[i].style.opacity='0';
	                contador--;
	            }
	            obj2[contador].style.opacity='1';
	        }
	        else
	        {
		        obj2[contador].style.opacity='1';
		        contador++;
	        }
	    }


		$('button, a, input').click(function (e){
			$('.log').append('click <br />');
			});
			
			const registrationModal = document.getElementById("registrationModal");
		
			openModalButton.addEventlistener("click", function() {
			registrationModal.style.display = 'block';
			});
			openModalButton.addEventlistener("click", function() {
			registrationModal.style.display = 'none';
			});
		
