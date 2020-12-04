let today = new Date();
let year = today.getFullYear();
let month = today.getMonth() + 1;
let date = today.getDate();
const DisplayDate = () => {
    document.getElementById("date").innerHTML = `${year}년 ${month}월 ${date}일`;
}

const ToggleEvent = () => {
    let testvar = document.getElementById("test").checked;
    console.log(testvar);
    if (testvar) {
        document.getElementById("MainComponent").style.visibility = 'hidden';
        document.getElementById("ContactComponent").style.visibility = 'visible';
    }

    else {
        document.getElementById("MainComponent").style.visibility = 'visible';
        document.getElementById("ContactComponent").style.visibility = 'hidden';
    }
}


const ConsultApply = () => {
    let textarea = document.getElementById("contents_input").value;
    let radio_1 = document.getElementById("business_contact").checked;
    let radio_2 = document.getElementById("consult").checked;
    let name = document.getElementById("name_input").value;
    let tel = document.getElementById("tel_input").value;
    let email = document.getElementById("email_input").value;
    if (textarea != '' && (radio_1 || radio_2) && name != '' && tel != '' && email != '') {
        alert("접수되었습니다.");
        location.reload();
    }
    else alert("양식을 모두 입력해주세요.");
}






// const Area = document.querySelector('.InputArea'),
//     Goods = document.querySelector(".goods"),
//     Purchase = document.querySelector(".purchase"),
//     Tag = document.querySelector(".tag"),
//     Description = document.querySelector(".description"),
//     ElList = document.querySelector('.List');

// const EL_LS = 'Element';

// let Element = [];
// function saveElements() {
//     localStorage.setItem(EL_LS, JSON.stringify(Element));
// }


// function paintElement(text1, text2, text3, text4) {
//     const li = document.createElement('li');
//     const span = document.createElement('span');
//     span.innerHTML = text1 + ' / ' + text2 + ' / ' + text3 + ' / ' + text4;
//     console.log(text1 + ' / ' + text2 + ' / ' + text3 + ' / ' + text4);
//     // li.appendChild(span);
//     // ElList.appendChild(li);

//     const ElObj = {
//         goods: text1,
//         purchase: text2,
//         tag: text3,
//         description: text4,
//         id: Element.length + 1
//     }

//     Element.push(ElObj);
//     saveElements();
// }

// function handleSubmit() {
//     event.preventDefault();
//     const TGoods = Goods.value;
//     const TPurchase = Purchase.value;
//     const TTag = Tag.value;
//     const TDescription = Description.value;
//     if (!TGoods || !TPurchase || !TTag || !TDescription) {
//         alert('데이터를 모두 입력해주세요.');
//     }
//     else {
//         paintElement(TGoods, TPurchase, TTag, TDescription);
//         Goods.value = '';
//         Purchase.value = '';
//         Tag.value = '';
//         Description.value = '';
//     }
// }

// function loadList() {
//     const getList = JSON.parse(localStorage.getItem(EL_LS));
//     if (getList === null) {

//     } else {
//         getList.forEach(function (el) {
//             paintElement(el.goods, el.purchase, el.tag, el.description);
//         })
//     }
// }

// function init() {
//     loadList();
// }

// init();
