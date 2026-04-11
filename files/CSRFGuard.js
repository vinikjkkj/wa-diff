__d(
  "CSRFGuard",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "for (;;);",
      l = /^for ?\(;;\);/,
      s = e.length;
    function u(e) {
      return !!e.match(l);
    }
    function c(e) {
      var t = e.match(l);
      return t && e.substr(t[0].length);
    }
    ((i.regex = l), (i.length = s), (i.exists = u), (i.clean = c));
  },
  66,
);
