 function yeas() {
    let yeas = document.getElementById("number").value;
    if (((yeas % 100 == 0) && (yeas % 400 == 0)) || (yeas % 4 ==0)){
        alert(yeas + " năm nhuận");
    }else {
        alert(yeas + " năm ko nhuận");
    }
 }