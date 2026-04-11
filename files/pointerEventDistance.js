__d(
  "pointerEventDistance",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 1,
      l = 5;
    function s(e, t, n, r) {
      return Math.sqrt(Math.pow(r - t, 2) + Math.pow(n - e, 2));
    }
    function u(e, t) {
      return s(e.clientX, e.clientY, t.clientX, t.clientY);
    }
    function c(t, n) {
      var r = n.pointerType === "touch" || n.pointerType === "pen" ? l : e,
        o = u(t, n);
      return o <= r;
    }
    i.isWithinThreshold = c;
  },
  66,
);
