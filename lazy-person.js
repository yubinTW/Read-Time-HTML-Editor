let editor = document.getElementById('editor');

editor.addEventListener('keydown', function (e) {
    let keyCode = e.keyCode || e.which; 
    if (keyCode === 9) {  // tab
        e.preventDefault();
        if (editor.value === '!') {
            editor.value = initHTML;
        }
    }
});