function e(){    

var s = document.getElementById('demo')

var value = parseInt(s.textContent, 10);    value = isNaN(value) ? 0 : value;    value.pow(10);    document.getElementById('demo').innerHTML = value;
}
