__d(
  "AdsMgmtGetTimeUtils",
  ["AdsMgmtProfileTimeCounter", "performanceNow"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = Math.random() < 0.1;
    function u(t, n) {
      if (s) {
        var a = (e || (e = r("performanceNow")))();
        return function (l) {
          l === void 0 && (l = -1);
          var i = l > -1 ? l : (e || (e = r("performanceNow")))() - a;
          n.forEach(function (e) {
            (o("AdsMgmtProfileTimeCounter").init(e),
              o("AdsMgmtProfileTimeCounter").addDuration(e, t, i));
          });
        };
      } else return function () {};
    }
    l.startTimer = u;
  },
  98,
);
