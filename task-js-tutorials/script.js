let counter = 0;

document.addEventListener('DOMContentLoaded', (event) => {
    const myButton = document.getElementById('mybutton');
    const myHeader = document.getElementById('header');
    myButton.addEventListener('click', () => {
        document.getElementById('count').innerHTML = counter;
        console.log(counter % 2)
        if (counter % 2 == 0) {
            myHeader.innerHTML = "Button was clicked"
        } else {
            myHeader.innerHTML = "Button was clicked again"
        }
        if (counter > 10) {
            myHeader.innerHTML = "Button is being harrased"
        }
        if (counter > 20) {
            myHeader.innerHTML = "Button has gratified"
        }
        counter++
    });
});