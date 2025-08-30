const btnTheme = document.getElementById('btnTheme');
let toggled = false;

btnTheme.addEventListener('click', () => {
    if (toggled) {
        document.documentElement.style.setProperty('--bgCol', 'rgba(255,255,255,1)');
        document.documentElement.style.setProperty('--textCol', 'black');
        document.documentElement.style.setProperty('--linkCol', 'blue');
        document.documentElement.style.setProperty('--borderCol', 'black');
    } else {
        document.documentElement.style.setProperty('--bgCol', 'rgba(255,255,255,0.1)');
        document.documentElement.style.setProperty('--textCol', 'white');
        document.documentElement.style.setProperty('--linkCol', 'lightblue');
        document.documentElement.style.setProperty('--borderCol', 'white');
    }
    toggled = !toggled;
});