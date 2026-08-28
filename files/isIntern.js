__d(
  "isIntern",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e() {
      if (
        typeof window == "undefined" ||
        !window ||
        !window.location ||
        !window.location.pathname
      )
        return !1;
      var e = window.location.pathname,
        t = "/intern";
      return e.substr(0, t.length) === t;
    }
    i.default = e;
  },
  66,
);
