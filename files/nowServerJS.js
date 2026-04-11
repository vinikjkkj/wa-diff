__d(
  "nowServerJS",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e() {
      if (window._nowInl && typeof window._nowInl == "function")
        return window._nowInl();
      var e = window.performance;
      return e && e.now && e.timing && e.timing.navigationStart
        ? e.now() + e.timing.navigationStart
        : new Date().getTime();
    }
    i.default = e;
  },
  66,
);
