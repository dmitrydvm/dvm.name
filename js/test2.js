function t() {
            var a = '<table><tr>';
            var mas = [];
            while (true) {
                var m = Math.round(Math.random() * 100);
                if (mas.indexOf(m) == -1) {
                    mas.push(m);
                        a += '<td>' + m + '</td>';
                        if (mas.length %10 == 0) {
                            a += '</tr><tr>';
                        }
                    }
            if (mas.length ==100) {
                break;
            }
            }
            a += '</tr></table>';
            document.getElementById('table').innerHTML = a;
        };
        //setInterval('t()', 100);
















