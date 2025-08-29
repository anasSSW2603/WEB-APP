let timer;

function randomRGB(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

onmessage = function(e) {
    if(e.data === 'start') {
        timer = setInterval(() => {
            const time = new Date().toString(); // ฟอร์แมตตามต้องการ
            const color = randomRGB();
            postMessage({time, color});
        }, 1000);
    } else if(e.data === 'stop') {
        clearInterval(timer);
    }
};
