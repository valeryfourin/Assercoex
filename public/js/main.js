
window.onhashchange = () => window.location.reload()
window.onload = function () {

    // preloader
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);


    // const pushUrl = (href) => {
    //     window.history.pushState({}, '', href);
    //     window.dispatchEvent(new Event('popstate'));
    // };

    // parallax on move
    document.addEventListener("mousemove", parallax);
    console.log(window.location.pathname)
    const frontImg = document.querySelector("#front-image");
    console.log(frontImg)
    function parallax(e) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.06}%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.06}%`;
        let _depth3 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.06}%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        // console.log(x);
        frontImg.style.backgroundPosition = x;
    }
  }