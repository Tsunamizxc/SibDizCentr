document.addEventListener("DOMContentLoaded", function () {

    document.addEventListener('submit', function (event) {
       var $this = event.target;
        let bg = document.querySelector('.bg')
        let alerts = document.querySelector('.alertPopup')
        if ($this.classList.contains("SendMail")) {
            var http = new XMLHttpRequest();
            http.open("POST", '/vg/www/templates/modules/mail/php/sendmail.php');
            http.onreadystatechange = function () {//Call a function when the state changes.
                if (http.readyState == 4 && http.status == 200) {
                    var res1 = JSON.parse(http.responseText);
                    if (res1.error == 0) {
                        event.target.reset(); alerts.style.display = 'block';
                        function sayHi() {
  alerts.style.display = 'none';
}

setTimeout(sayHi, 2000);
                        bg.click()
                    } else {
                        alert(res1.data);
                        if ($('.g-recaptcha').length) {
                            grecaptcha.reset();
                        }
                    }
                }
            }
            http.send(new FormData($this));

            event.preventDefault();
            return false;
        } else {
            return true;
        }
    });

});