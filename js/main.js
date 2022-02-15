function init() {
    $('#page')
        .fadeIn(500);
    $('#siteunder').click(zamena);
    $('#siteunder').text(header1);
}

header1 = 'Сайта нет и не будет';
header2 = 'Идите нахуй';
function zamena() {
    $('#siteunder')
        .animate({height: 'hide'}, 300,
        function () {
            var currentText = $('#siteunder').text();
            if (currentText == header1) {
                $('#siteunder').text(header2)
                    .animate({height: 'show'}, 300);
            }
            else {
                $('#siteunder').text(header1)
                    .animate({height: 'show'}, 300);
            }

        });
}
