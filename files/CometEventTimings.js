__d(
  "CometEventTimings",
  ["performanceNavigationStart", "performanceNow"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var n = (e || (e = r("performanceNow")))(),
        o = null,
        a =
          document.createEvent("MouseEvent").timeStamp <
          r("performanceNavigationStart")();
      return (a && t != null && t < n && ((o = n - t), (n = t)), [n, o]);
    }
    l.getCurrentQueueTime = s;
  },
  98,
);
