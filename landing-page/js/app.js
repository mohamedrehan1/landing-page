//Define Global Variables
var nav = document.querySelector("nav ul");
var content = document.querySelectorAll("section");
//End Global Variables

// build the nav
for (let i = 1; i < 5; i++) {
  var li = document.createElement("li");
  var a = document.createElement("a");
  a.textContent = "section " + i;
  a.setAttribute("href", `#section${i}`);
  li.appendChild(a);
  nav.appendChild(li);
}
// end of the nav

// on scroll code
onscroll = function () {
  var home = document.querySelector(".main__hero h1");
  var position = scrollY;
  if (position <= home.offsetTop + home.offsetHeight) {
    removerunclass();
  }
  content.forEach(function (v) {
    if (
      position >= v.offsetTop - v.offsetHeight * 0.25 &&
      position <= v.offsetTop + v.offsetHeight - v.offsetHeight * 0.25
    ) {
      var secctionid = v.attributes.id.value;
      removerunclass();
      addrunclass(secctionid);
      removeactiveclass();
      v.classList.add("your-active-class");
    }
  });
};
// end of on scroll code

//start of functions
//add run class
function addrunclass(sectionid) {
  var select = `nav li a[href="#${sectionid}"]`;
  document.querySelector(select).classList.add("run");
}

//remove run class
function removerunclass() {
  var el = document.querySelectorAll("nav li a");
  el.forEach(function (v) {
    v.classList.remove("run");
  });
}

//remove active class
function removeactiveclass() {
  content.forEach(function (v) {
    v.classList.remove("your-active-class");
  });
}
//End of Functions
