window.onload = function onLoad() {
    var circle = new ProgressBar.Circle('#img-animate', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut'
    });

    circle.animate(1);
};


var circle = new ProgressBar.Circle('#js-bar', {
    color: '#FCB03C',
    strokeWidth: 3,
    trailWidth: 1,
    text: {
        value: '0'
    }
});

circle.animate(0.5);

                     

                     