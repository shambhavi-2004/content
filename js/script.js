console.log("hello world");

// const name1 = "shambhavi";
// const h1 = document.querySelector(".hero-heading-box");

// console.log(h1);
// // manipulating css

// h1.addEventListener("click", function () {
//   h1.style.backgroundColor = "red";
//   h1.style.margin = "5rem";
//   h1.textContent = name1;
// });

//changing year of copyright
const h2 = document.querySelector(".year");
const currentYear = new Date().getFullYear();
h2.textContent = currentYear;
console.log(currentYear);

//make mobile navigation
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  // dont add dot with class

  //function to add class to header el
  headerEl.classList.toggle("nav-open");
});

// smooth scrolling
//selecting multuplr links of a:link type
const allLink = document.querySelectorAll("a:link");
console.log(allLink);

//func-lnk  now each of the link will be taken as parameter for func
allLink.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault(); //default scrollinh prevent
    //extractinh href attribute out of link that was clicked
    const href = link.getAttribute("href");
    console.log(href);

    //scrolling functionality
    if (href == "#") {
      window.scrollT0();
      {
        top: 0; //in pixel
        behaviour: "smooth";
      }
    }

    if (href !== "#" && href.startsWith("#")) {
      //in this  case selects the html copde of the link (not top of web page link then only)
      const sectionEl = document.querySelector(href);
      console.log(sectionEl);
      //make that html code el come into view behaviour of scroll smooth
      sectionEl.scrollIntoView({ behaviour: "smooth" });
    }

    //if mobile application then when scroll down to particular elemnt close nav bar without clicking cross
    if (link.classList.contains("navbar")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

//sticky navigation
//most modern and performant way
//func option
//IntersectionObserver is a constructor function that creates an object used to observe changes in the intersection of a target element with a specified root element or the viewport. The resulting object (obs in your case) has methods and properties that can be used to configure the observation and handle intersection changes.

//Breakdown of Components
// Constructor: IntersectionObserver=> basically commnets on visiblity of one wrt to the root specified
// It is used to create a new IntersectionObserver object.
// Callback Function: function () {}
// This is an empty function provided as the first argument to the IntersectionObserver constructor. In a practical implementation, this function would contain logic to execute when the observed element's intersection changes.
// Options Object: {}
// This is an empty object provided as the second argument to the IntersectionObserver constructor. This object can include properties such as root, rootMargin, and threshold to configure the observer's behavior.
//array of entries:1 entry for each thtreshold value
const sectionHeroEl = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      console.log(ent);
      // document.querySelector(".header").classList.add("sticky");
      document.body.classList.add("sticky");
    }

    //once user scrools back again to hero header not sticky again
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null, //observe hero section wrt view port
    threshold: 0, //fires an event as soon as 0% hero inside viewoport(as null)
    rootMargin: "-65px",
  }
);
//observe some element in hero section using obs:hero section
//so we can make it sticky when hero goes out of viewport
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
