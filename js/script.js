let count = 10;

const countdownCallback = () => {
    const countdownElement =
        document.getElementById('countdown');
    
    if (count > 0) {
        countdownElement.innerText=count;
        count--;
        setTimeout(countdownCallback, 1000);
    } else {
        countdownElement.innerText="Happy Independence Day";
    }
};

setTimeout(countdownCallback, 0);
