// ====================
// DOM Call for deposit 
// ====================
const depoMain = document.getElementById('depo-main');
const balanceMain = document.getElementById('balance-main');
const depoInput = document.getElementById('deposit-input');
const depoBtn = document.getElementById('deposit-btn');

// ====================
// Convert into Number
// ====================
let depoAmmount=Number(depoMain.innerText) ;
let balanceAmmount =Number(balanceMain.innerText);

// ====================
// Function for deposit count 
// ====================
const totalDepo = function(){
    const inputDepo = Number(depoInput.value);
    depoAmmount += inputDepo;
    depoMain.innerText=depoAmmount;
    depoInput.value = '';

    // *********
    balanceAmmount += inputDepo;
    balanceMain.innerText = balanceAmmount;

};
// ====================
// calling Event 
// ====================
depoBtn.addEventListener('click', totalDepo);
depoInput.addEventListener('keyup', function(e){
    if(e.key==="Enter"){
        totalDepo();
    }
});



// ====================
// withdrew variables 
//=====================
const withMain = document.getElementById('with-main');
const withInput = document.getElementById('withdraw-input');
const withBtn = document.getElementById('withdrew-btn');

// ====================
// Convert into Number
// ====================
let withAmmount = Number(withMain.innerText);

// ====================
// function for withdrew count
// ====================
const totalWith = function(){
    const inputWith = Number(withInput.value);
    withAmmount += inputWith;
    withMain.innerText=withAmmount;
    withInput.value = '';

    // *********
    balanceAmmount -= inputWith;
    balanceMain.innerText = balanceAmmount;

};

// ====================
// calling Event 
// ====================
withBtn.addEventListener('click', totalWith);
withInput.addEventListener('keyup', function(e){
    if(e.key==="Enter"){
        totalWith();
    }
});

