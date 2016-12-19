//--------------------Pages-----------------------

var homePage;
var teamPage;
var robotHistoryPage;
var disasterPage;
var roboticPage;
var ourRobotPage;
var componentsPage;
var conceptionPage;
var conclusionPage;

var lastBlank;

var pages = [];

//--------------------Elements--------------------

//-----HomePage-----
var homePageHeader;
var arrowIndicator;
//-----TeamPage-----

//--------------------Miscellaneous---------------

var previousPage;
var currentPage;
var nextPage;

var movement;

var delta;

//--------------------Js Code---------------------

window.onload = function main()
{
  PagesInit ();
  ElementsInit ();

  pages = [homePage, teamPage, robotHistoryPage, disasterPage, ourRobotPage, conclusionPage, lastBlank];

  FadeDown (homePageHeader, 20, 1);
  ArrowAnim (arrowIndicator, 20);

  if(navigator.userAgent.indexOf("Chrome") != -1)
  {

  }
  else
  {
    alert ("Veuillez utiliser le navigateur Chrome, une version portable est disponible à la racine du dossier si besoin.");
  }

  document.addEventListener("keydown", returnKey, true);

  document.getElementById("body").addEventListener("mousewheel", mouseWheelEvent, false);
  document.getElementById("body").addEventListener("DOMMouseScroll", mouseWheelEvent, false);
}

function PagesInit ()
{
  homePage = document.getElementById("homePageID");
  teamPage = document.getElementById("teamPageID");
  robotHistoryPage = document.getElementById("RobotHistoryPageID");
  disasterPage = document.getElementById("DisastersPageID");
  roboticPage = document.getElementById("RoboticPageID");
  ourRobotPage = document.getElementById("OurRobotPageID");
  conclusionPage = document.getElementById("ConclusionPageID");

  lastBlank = document.getElementById("LastBlankID");
}

function ElementsInit ()
{
  homePageHeader = document.getElementById("homePageHeaderID");
  arrowIndicator = document.getElementById("arrowIndicatorID");
}

function dispAlert()
{
  alert("Veuillez utiliser la molette de la souris pour faire défiller les pages.");
}

function mouseWheelEvent(e)
{
  document.getElementById("body").removeEventListener("mousewheel", mouseWheelEvent, false);
  document.getElementById("body").removeEventListener("DOMMouseScroll", mouseWheelEvent, false);

  var e = window.event || e; // old IE support
  delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));

  var x = event.clientX, y = event.clientY;
  currentPage = document.elementFromPoint(x, y);

  while (currentPage.nodeName != 'SECTION')
  {
    currentPage = currentPage.parentNode;
  }

  currentPage = pages[pages.indexOf(document.getElementById(currentPage.id))];

  if (delta < 0)
  {
    movement = -100 * (pages.indexOf(document.getElementById(currentPage.id)) + 1);

    switch (currentPage)
    {
      case pages[pages.length - 2]:
        break;

      default:
        if (pages[pages.indexOf(document.getElementById(currentPage.id))].className == 'openDiv')
        {
          pages[pages.indexOf(document.getElementById(currentPage.id))  + 1].style.webkitTransitionDuration = "0s";
          pages[pages.indexOf(document.getElementById(currentPage.id)) + 1].style.webkitTransform = "translateY(" + movement + "%)";
          pages[pages.indexOf(document.getElementById(currentPage.id))].children[0].style.webkitTransform = "translateX(-100%)";
          pages[pages.indexOf(document.getElementById(currentPage.id))].children[1].style.webkitTransform = "translateX(100%)";

          for (i = pages.indexOf(document.getElementById(currentPage.id)) + 2; i < pages.length - 1; i++)
          {
            pages[i].style.webkitTransitionDuration = "0s";
            pages[i].style.webkitTransform = "translateY(" + movement + "%)";
          }

          pages[pages.indexOf(document.getElementById(currentPage.id))].children[0].addEventListener('webkitTransitionEnd', endMoveO);
        }
        else if (pages[pages.indexOf(document.getElementById(currentPage.id)) + 1].className == 'openDivLast')
        {
          pages[pages.indexOf(document.getElementById(currentPage.id))  + 1].style.webkitTransitionDuration = "0s";
          pages[pages.indexOf(document.getElementById(currentPage.id)) + 1].style.webkitTransform = "translateY(" + movement + "%)";
          pages[pages.indexOf(document.getElementById(currentPage.id)) + 1].children[0].style.webkitTransform = "translateX(0%)";
          pages[pages.indexOf(document.getElementById(currentPage.id)) + 1].children[1].style.webkitTransform = "translateX(0%)";

          for (i = pages.indexOf(document.getElementById(currentPage.id)) + 2; i < pages.length - 1; i++)
          {
            pages[i].style.webkitTransitionDuration = "0s";
            pages[i].style.webkitTransform = "translateY(" + movement + "%)";
          }

          pages[pages.indexOf(document.getElementById(currentPage.id))].children[0].addEventListener('webkitTransitionEnd', endMoveO);
        }
        else
        {
          for (i = pages.indexOf(document.getElementById(currentPage.id)); i <= pages.length - 1; i++)
          {
            pages[i].style.webkitTransitionDuration = "0.8s";
            pages[i].style.webkitTransform = "translateY(" + movement + "%)";
          }
        }
        break;
    }
  }
  else
  {
    movement = -100 * (pages.indexOf(document.getElementById(currentPage.id)) - 1);

    switch (currentPage)
    {

      case homePage:
        break;

      default:
        if (pages[pages.indexOf(document.getElementById(currentPage.id)) - 1].className == 'openDiv')
        {
          pages[pages.indexOf(document.getElementById(currentPage.id)) - 1].style.webkitTransitionDuration = "0s";
          pages[pages.indexOf(document.getElementById(currentPage.id)) - 1].style.webkitTransform = "translateY(" + movement + "%)";
          pages[pages.indexOf(document.getElementById(currentPage.id)) - 1].children[0].style.webkitTransform = "translateX(0%)";
          pages[pages.indexOf(document.getElementById(currentPage.id)) - 1].children[1].style.webkitTransform = "translateX(0%)";

          for (i = pages.indexOf(document.getElementById(currentPage.id)) - 2; i >= 0; i--)
          {
            pages[i].style.webkitTransitionDuration = "0.8s";
            pages[i].style.webkitTransform = "translateY(" + movement + "%)";
          }

          pages[pages.indexOf(document.getElementById(currentPage.id)) - 1].children[0].addEventListener('webkitTransitionEnd', endMoveC);
        }
        else if(pages[pages.indexOf(document.getElementById(currentPage.id))].className == 'openDivLast')
        {
          pages[pages.indexOf(document.getElementById(currentPage.id)) - 1].style.webkitTransitionDuration = "0s";
          pages[pages.indexOf(document.getElementById(currentPage.id)) - 1].style.webkitTransform = "translateY(" + movement + "%)";
          pages[pages.indexOf(document.getElementById(currentPage.id))].children[0].style.webkitTransform = "translateX(-100%)";
          pages[pages.indexOf(document.getElementById(currentPage.id))].children[1].style.webkitTransform = "translateX(100%)";

          for (i = pages.indexOf(document.getElementById(currentPage.id)) - 2; i >= 0; i--)
          {
            pages[i].style.webkitTransitionDuration = "0.8s";
            pages[i].style.webkitTransform = "translateY(" + movement + "%)";
          }

          pages[pages.indexOf(document.getElementById(currentPage.id))].children[0].addEventListener('webkitTransitionEnd', endMoveO);
        }
        else
        {
          for (i = pages.indexOf(document.getElementById(currentPage.id)); i >= 0; i--)
          {
            pages[i].style.webkitTransitionDuration = "0.8s";
            pages[i].style.webkitTransform = "translateY(" + movement + "%)";
          }
        }
        break;
    }
  }

  setTimeout(function ()
  {
    document.getElementById("body").addEventListener("mousewheel", mouseWheelEvent, false);
    document.getElementById("body").addEventListener("DOMMouseScroll", mouseWheelEvent, false);
  }, 800);
}

function endMoveO ()
{
  pages[pages.indexOf(document.getElementById(currentPage.id))].children[0].removeEventListener('webkitTransitionEnd', endMoveO);
  pages[pages.indexOf(document.getElementById(currentPage.id))].style.webkitTransform = "translateY(" + movement + "%)";

  pages[pages.indexOf(document.getElementById(currentPage.id))  + 1].style.webkitTransitionDuration = "0.8s";
}

function endMoveC ()
{
  pages[pages.indexOf(document.getElementById(currentPage.id)) - 1].children[0].removeEventListener('webkitTransitionEnd', endMoveC);
  pages[pages.indexOf(document.getElementById(currentPage.id))].style.webkitTransform = "translateY(" + movement + "%)";

  pages[pages.indexOf(document.getElementById(currentPage.id)) - 1].style.webkitTransitionDuration = "0.8s";
}

function endMoveCurrent ()
{
  alert ("Hi");
}

function FadeDown (element, distance, alpha)
{
  element.style.webkitTransform = "translateY(" + distance + "%)";
  element.style.opacity = alpha;
}

function ArrowAnim (element, distance)
{
  element.style.webkitTransitionDuration = "0s";
  element.style.webkitTransform = "translateY(0%)";
  element.style.opacity = 0.8;

  setTimeout(function ()
  {
    element.style.webkitTransitionDuration = "1.5s";
    element.style.webkitTransform = "translateY(" + distance + "%)";
    element.style.opacity = 0;
  }, 100);

  setTimeout(function ()
  {
    ArrowAnim(arrowIndicator, 20);
  }, 1500);
}

function returnKey (e)
{
   var code = e.keyCode ? e.keyCode : e.which;

   switch (code)
   {
     case 9:
       e.preventDefault();
       break;

     case 38:
       mouseWheelEvent();
       break;

     case 40:
       delta = -1;
       break;

   }

   if (code == 9)
   {
     e.preventDefault();
   }
}
