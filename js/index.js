function changePage(){
    var bg = document.getElementById('main');
    var count = 100
    setInterval(()=>bg.style.opacity =`${count--}%`,1 );
    setTimeout(
        () => document.location="portal.html", 1000
    );
}
