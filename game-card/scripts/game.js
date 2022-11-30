let inputOne = document.querySelector('input');
let buttonOne = document.querySelector('.button1');
let listOne = document.querySelector(".list1");

buttonOne.addEventListener('click', function() { 
    const myItem = inputOne.value;
    inputOne.value = '';

    console.log(myItem);

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    listText.classList.add('input1-span');
    listItem.appendChild(listText);
    listText.textContent = myItem;
    listItem.appendChild(listBtn);
    listBtn.textContent = 'X';
    listOne.appendChild(listItem);
   
    listBtn.addEventListener('click', () => {
        listOne.removeChild(listItem);
        calculateTotalOne();
    });

    inputOne.focus();
    calculateTotalOne();
});

function calculateTotalOne() {
    let list1 = document.querySelectorAll('.input1-span');
    let sum1 = 0;
    list1.forEach(item=>{
        let itemVal = item.textContent;
        if(itemVal)
        {
            sum1 = sum1 + parseFloat(itemVal);
        }
    })

    document.querySelector('.span-total1').innerHTML='Total: '+sum1.toFixed(2);
}

let inputTwo = document.querySelector('#score-2');
let buttonTwo = document.querySelector('.button2');
let listTwo = document.querySelector(".list2");

buttonTwo.addEventListener('click', function() { 
    const myItem2 = inputTwo.value;
    //inputTwo = '';

    const listItem2 = document.createElement('li');
    const listText2 = document.createElement('span');
    const listBtn2 = document.createElement('button');

    listText2.classList.add('input2-span');
    listItem2.appendChild(listText2);
    listText2.textContent = myItem2;
    listItem2.appendChild(listBtn2);
    listBtn2.textContent = 'X';
    listTwo.appendChild(listItem2);

    listBtn2.addEventListener('click', () => {
      listTwo.removeChild(listItem2);
      calculateTotalTwo();
    });

    inputTwo.value='';
    inputTwo.focus();
    calculateTotalTwo();
});

function calculateTotalTwo() {
    let list2 = document.querySelectorAll('.input2-span');
    let sum2 = 0;
    list2.forEach(item=>{
        let itemVal = item.textContent;
        if(itemVal)
        {
            sum2 = sum2 + parseFloat(itemVal);
        }
    })

    document.querySelector('.span-total2').innerHTML='Total: '+sum2.toFixed(2);
}