__d(
  "GeoInputUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = l();
    function l() {
      var e,
        t,
        n = document.createElement("div");
      ((n.style.visibility = "hidden"),
        (n.style.width = "100px"),
        (e = document.body) == null || e.appendChild(n));
      var r = n.offsetWidth;
      n.style.overflow = "scroll";
      var o = document.createElement("div");
      ((o.style.width = "100%"), n.appendChild(o));
      var a = o.offsetWidth;
      return ((t = n.parentNode) == null || t.removeChild(n), r - a);
    }
    i.SCROLLBAR_WIDTH = e;
  },
  66,
);
