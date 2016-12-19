var components = [];

var arduino;
var motorShield;
var bluetooth;
var compass;
var sonar;
var laser;
var proximity;

var height;

var alreadyOpen = false;
var openSection;
var openPercentage;

var currentExtended;
var currentPercentage;
var currentContentHeight

window.onload = function main()
{
  init();

  components = [arduino, motorShield, bluetooth, compass, sonar, laser, proximity];

  height = document.getElementById("MainContentID").clientHeight / 100 * 11;

  for (i = 0; i < components.length; i++)
  {
    components[i].style.height = height + "px";
  }

  initExtend(motorShield, 200);

  setTimeout(function ()
  {
    retract(motorShield, 200);
  }, 250);
}

window.onresize = function(event)
{
  height = document.getElementById("MainContentID").clientHeight / 100 * 11;

  for (i = 0; i < components.length; i++)
  {
    components[i].style.height = height + "px";
  }
};

function init()
{
  arduino = document.getElementById("ArduinoID");
  motorShield = document.getElementById("MotorShieldID");
  bluetooth = document.getElementById("BluetoothID");
  compass = document.getElementById("CompassID");
  sonar = document.getElementById("SonarID");
  laser = document.getElementById("LaserID");
  proximity = document.getElementById("ProximityID");
}

function damien(element, value, percentage)
{
  if (value == 0)
  {
    if (currentExtended != null)
    {
      retract(currentExtended, currentPercentage);

      setTimeout(function ()
      {
        extend(element, percentage);
      }, 150);
    }
    else
    {
      extend(element, percentage);
    }
  }
  else
  {
    retract(element, percentage);
  }
}

function extend (element, percentage)
{

  currentExtended = element;
  currentPercentage = percentage;

  document.getElementById("IntroductionID").style.height = height / 2.5 + "px";

  element.children[1].children[2].src = "../../GlobalSources/minus.png";
  element.children[1].children[2].onclick = function () { damien(element, 1, percentage); };

  document.getElementById("MainContentID").style.height = 525 + (element.children[2].clientHeight / 10) + "%";
  currentContentHeight = 525 + (val / 1.8);

  //element.children[2].style.height = percentage * 1.5 + "%";
  element.children[2].style.webkitTransform = "scaleY(1)";
  element.children[2].style.visibility = "visible";

  for (i = components.indexOf(element); i < components.length - 1 ; i++)
  {
    components[i + 1].style.webkitTransform = "translateY(" + (element.children[2].clientHeight - element.clientHeight)  + "px)";
  }

  setTimeout(function ()
  {
    var e = element
    if (!!e && e.scrollIntoView)
    {
      e.scrollIntoView();
    }

    for (i = 0; i < element.children[2].children.length; i++)
    {
      element.children[2].children[i].style.visibility = "visible";
      element.children[2].children[i].style.opacity = 1;
    }

  }, 300);
}

function retract(element, percentage)
{
  element.children[1].children[2].src = "../../GlobalSources/Plus.png";
  element.children[1].children[2].onclick = function () { damien(element, 0, percentage); };

  if (percentage > 250)
  {
    document.getElementById("MainContentID").style.height = currentContentHeight - (val / 1.8) + "%";
  }
  else
  {
    document.getElementById("MainContentID").style.height = currentContentHeight - percentage / 2 + "%";
  }

  for (i = components.length - 1; i > components.indexOf(element); i--)
  {
    components[i].style.webkitTransform = "translateY(0%)";
  }

  for (i = 0; i < element.children[2].children.length; i++)
  {
    element.children[2].children[i].style.webkitTransitionDuration = "0.5s";
    element.children[2].children[i].style.opacity = 0;
  }

  setTimeout(function ()
  {
    element.children[2].style.webkitTransform = "scaleY(0)";
    element.children[2].style.webkitTransitionDuration = "1s";
  }, 150);

  for (i = 0; i < element.children[2].children.length; i++)
  {
    element.children[2].children[i].style.visibility = "hidden";
  }
}

function initExtend (element, percentage)
{
  height = document.getElementById("MainContentID").clientHeight / 100 * 11;

  currentExtended = element;
  currentPercentage = percentage;

  document.getElementById("IntroductionID").style.height = height / 2.5 + "px";

  element.children[1].children[2].src = "../../GlobalSources/minus.png";
  element.children[1].children[2].onclick = function () { damien(element, 1, percentage); };

  if (percentage > 250)
  {
    val = percentage + percentage / 4.5;
  }
  else
  {
    val = (percentage * 1.8) / 2
  }

  for (i = components.indexOf(element); i < components.length - 1 ; i++)
  {
    if (percentage > 250)
    {
      components[i + 1].style.webkitTransform = "translateY(" + val + "%)";
    }
    else
    {
      components[i + 1].style.webkitTransform = "translateY(" + percentage + "%)";
    }
  }

  document.getElementById("MainContentID").style.height = 525 + (val / 1.8) + "%";
  currentContentHeight = 525 + (val / 1.8);

  element.children[2].style.height = percentage * 1.5 + "%";
  element.children[2].style.webkitTransform = "scaleY(1)";
  element.children[2].style.visibility = "visible";

  setTimeout(function ()
  {
    for (i = 0; i < element.children[2].children.length; i++)
    {
      element.children[2].children[i].style.visibility = "visible";
      element.children[2].children[i].style.opacity = 1;
    }
  }, 500);
}
