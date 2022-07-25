let index = 0;

function changeColor() {
    let colors = ['#333232', '#F7B2AD', '#CEB7B3', '#B7B7B7', '#DB5A42'];

    document.getElementsByTagName('body')[0]
        .style.background = colors[index++]
    
    if(index > colors.length - 1) {
        index = 0;
    }
}