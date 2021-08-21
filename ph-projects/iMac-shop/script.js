
// calculation :->
const bestPrice = document.getElementById('best-price');
const memoryCost = document.getElementById('memory-cost');
const sotrageCost = document.getElementById('sotrage-cost');
const deliveryCost = document.getElementById('delivery-cost');


// tatal calculation :->
const totalPrice = document.querySelectorAll('.total-price');

function totalCost(){
    for(let i =0; i<totalPrice.length; i++){
        let total = Number(bestPrice.innerText) + Number(memoryCost.innerText) + Number(sotrageCost.innerText)+ Number(sotrageCost.innerText)+ Number(deliveryCost.innerText);
        totalPrice[i].innerText = total;
    };
};

/////////////////////
// memory button :->
const memory8Gb = document.getElementById('memory-8');
const memory16Gb = document.getElementById('memory-16');

function memory (gb){
    if(gb === 8){
        memoryCost.innerText = 00;
    }else if(gb ===16){
        memoryCost.innerText = 180;
    }
};
// Click event for memory button --
memory8Gb.addEventListener('click',function(){
    memory(8);
    totalCost();
});
memory16Gb.addEventListener('click',function(){
     memory(16) ;
     totalCost();
});





/////////////////////
// stroage button :->
const storage256 = document.getElementById('storage-256');
const storage512 = document.getElementById('storage-512');
const storage1Tb = document.getElementById('storage-1tb');

function storage (ssd){
    if(ssd ==256){
        sotrageCost.innerText = 00;
    }else if(ssd ==512){
        sotrageCost.innerText =100;
    }else if(ssd =='1Tb'){
        sotrageCost.innerText =180;
    }
};
// Click event for Storage button --
storage256.addEventListener('click', function(){
    storage(256);
    totalCost();
});

storage512.addEventListener('click', function(){
    storage(512);
    totalCost();
});

storage1Tb.addEventListener('click', function(){
    storage('1Tb');
    totalCost();
});


/////////////////////////
// delivery button :->
const deliveryFree = document.getElementById('delivery-free');
const deliveryPaid = document.getElementById('delivery-paid');

function delivery(x){
    if(x =='free'){
        deliveryCost.innerText= 00;
    }else if (x=='paid'){
        deliveryCost.innerText= 20;
    }
};
//  Click event for Delivery button --
deliveryFree.addEventListener('click',function(){
    delivery('free');
    totalCost();
});

deliveryPaid.addEventListener('click',function(){
    delivery('paid');
    totalCost();
});


///////////////////////
// coupon  section :->
const inputCoupon = document.getElementById('input-coupon');
const applyBtn = document.getElementById('apply-btn');

// Click event for coupon apply button --
applyBtn.addEventListener('click' ,function(e){
    const mainTotal =document.getElementById('main-total');
    const discount = document.getElementById('discount');
    
    if(inputCoupon.value.toLowerCase()==="stevekaku"){
            discount.innerText = Number(mainTotal.innerText) - (Number(mainTotal.innerText)*0.2);
        e.target.setAttribute("disabled", true);
       
    }
    inputCoupon.value ='';
});