__d(
  "manageScreenAnimation",
  [
    "addClasses",
    "animateScreenFromCurrentXPosition",
    "removeClasses",
    "resetScreenAnimation",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      if (e) {
        var r = "screen-animation-enter",
          a = "screen-animation-exit",
          i = r + " " + n,
          l = a + " " + n,
          s = n === "push" ? "pop" : "push";
        (o("resetScreenAnimation").resetScreenAnimation(e),
          t === "enter"
            ? (o(
                "animateScreenFromCurrentXPosition",
              ).animateScreenFromCurrentXPosition(e, t),
              o("removeClasses").removeClasses(e, a + " " + s),
              o("addClasses").addClasses(e, i))
            : (o(
                "animateScreenFromCurrentXPosition",
              ).animateScreenFromCurrentXPosition(e, t),
              o("removeClasses").removeClasses(e, r + " " + s),
              o("addClasses").addClasses(e, l)));
      }
    }
    l.manageScreenAnimation = e;
  },
  98,
);
