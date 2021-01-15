function inputSignUp(){
    alert('Your Data Has Been Saved')
    var f = document.forms['signup']['user-name'].value;
    var a = document.forms['signup']['address'].value;
    var p = document.forms['signup']['phone-number'].value;
    var e = document.forms['signup']['user-email'].value;
    var z = document.forms['signup']['user-password'].value;

    var tabel = document.getElementById('inputSignUp')
    var row = tabel.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    cell1.innerHTML = f;
    cell2.innerHTML = a;
    cell3.innerHTML = p;
    cell4.innerHTML = e;
    cell5.innerHTML = z;
}

function inputLogIn(){
    alert('Login Successfully')
    var e = document.forms['login']['user-email'].value;
    var z = document.forms['login']['user-password'].value;

    var tabel = document.getElementById('inputLogin')
    var row = tabel.insertRow(1);
    var cell1 = row.insertRow(0);
    var cell2 = row.insertRow(1);

    cell1.innerHTML = e;
    cell2.innerHTML = z;
}