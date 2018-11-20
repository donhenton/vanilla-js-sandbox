document.addEventListener("DOMContentLoaded", function () {

  document.addEventListener('click', function (event) {


    if (!event.target.closest('nav.topMenu') ||
          (!event.target.closest('nav.topMenu').length &&
                !event.target.matches('nav.topMenu'))) {

      //click outside and close all menus;        
      document.querySelectorAll('.show-menu').forEach(function (x) {
        x.classList.remove("show-menu");
      });


    }


  }); // end addEventListener


  // add the icon to each aside at the top level
  document.querySelectorAll('nav.topMenu ul li aside').forEach(function (elem) {

    const indic = document.createElement('span');
    indic.classList.add("ui-icon", "ui-icon-circle-triangle-s");
    elem.appendChild(indic);
    elem.addEventListener("click", function (ev) {
      ev.stopImmediatePropagation();
      ev.stopPropagation();
      //remove everybody else show level
      document.querySelectorAll('.show-menu').forEach(function (x) {
        x.classList.remove("show-menu");
      })
      
      //now add show the current menu
      elem.nextElementSibling.classList.add('show-menu');


      //walk this tree and if you find a ul, then add class 'show-menu' 
      let doWalk = true;
      let checkWalkItem = elem.parentElement; 
     
      do {
        if (checkWalkItem.parentElement.tagName === 'NAV') { // stop at the row of first level menu elements

          doWalk = false;

        } else {
          if (checkWalkItem.tagName === 'UL') {
            checkWalkItem.classList.toggle('show-menu')
          }
          checkWalkItem = checkWalkItem.parentElement;
        }
      } while (doWalk)





    });///click method for top-level


  });


}); //end document Load
