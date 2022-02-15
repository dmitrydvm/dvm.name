function hueta() {
    var stroka = document.getElementById('vvod').value;
    var massiv = stroka.split('');
    var result = {};
    for (var i = 0; i < massiv.length; ++i) {
        if (result[massiv[i]]) {
            result[massiv[i]] += 1;
        } else {
            result[massiv[i]] = 1;
        }
    }
    var text = '';
    for (var key in result) {
        text += key + ' : ' + result[key] + '<br/>';
    }
    document.write(text);
}

