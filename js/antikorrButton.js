//---добавление кнопки антикорр

let liAll = document.querySelectorAll('.list-group-item');

let listGroup = document.querySelector('.list-group');

let newElement = `<div class="accordion"> 
   <div class="tab" style="font: 1.5rem/1.2 Arial, sans-serif;">
    <input type="checkbox" id="tab1" name="tab-group">
    <label for="tab1" id="akorr" class="tab-title" style="font: 15px; color: #060709; background-color: #ff6000;">Антикоррупция...</label> 
	   
	   
    <section class="tab-content"> 
      <li class="list-group-item menu-side2 shadow1"><a href="antikorrypcia.html">Антикоррупция</a></li>
        <br><a title="Приказ по противодействию бытовой коррупции" href="<br><a title="Приказ по противодействию бытовой коррупции" href="https://langepas-sport.github.io/images/akorr/Prikaz_%E2%84%9618_9.01.2025_plancorr.pdf" target="_blank" rel="alternate noopener noreferrer">Приказ по противодействию бытовой коррупции</a>" target="_blank" rel="alternate noopener noreferrer">Приказ по противодействию бытовой коррупции</a>
	<br><a title="Памятка о взятке" href="http://xn----8sbalcjrztwx8e.xn--p1ai/images/kartinki/korupcia/5pamyatka_po_vzyatke.pdf" target="_blank" rel="alternate noopener noreferrer">Памятка о взятке</a>

<br><a title="Антикоррупционный букварь" href="http://xn----8sbalcjrztwx8e.xn--p1ai/images/kartinki/korupcia/4antikorrupcionnyiy_bukvar-.pdf" target="_blank" rel="alternate noopener noreferrer">Антикоррупционный букварь</a>
	    
	    
	 </section> 
	   
	   
   </div> 
</div>`;

let divOne = document.createElement("div");

divOne.innerHTML = newElement;

listGroup.replaceChild(divOne, liAll[3]);

//---------------------- удаление старой кнопки

let adivAO = document.querySelector('a[href="javascript:largeFontSize();"]');
adivAO.remove();

//<script src="/js/antikorrButton.js"></script>
