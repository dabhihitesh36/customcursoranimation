var cursor = document.querySelector(".cursor");
var image = document.querySelector(".image");
var main = document.querySelector(".main");

main.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    duration: 1.5,
    x: dets.x,
    y: dets.y,
    ease: "back.out",
  });
});

image.addEventListener("mouseenter", function () {
  cursor.innerHTML = "View More";
  gsap.to(cursor, {
    scale: 3.5,
    duration: 0.3,
    backgroundColor: "#ffffff6c",
  });
  gsap.to(".image img", {
    filter: "brightness(0.9)",
  });
});

image.addEventListener("mouseleave", function () {
  cursor.innerHTML = "";
  gsap.to(cursor, {
    scale: 1,
    duration: 0.3,
    backgroundColor: "#fff",
  });
  gsap.to(".image img", {
    // filter: "brightness(0.5)",
    filter: "grayscale(2)",
  });
});
