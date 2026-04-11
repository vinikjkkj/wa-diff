__d(
  "performanceNavigationStart",
  ["performance"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = typeof window != "undefined" ? window : self,
      u;
    if ((e || (e = r("performance"))).now)
      if (
        (e || (e = r("performance"))).timing &&
        (e || (e = r("performance"))).timing.navigationStart
      )
        u = function () {
          return (e || (e = r("performance"))).timing.navigationStart;
        };
      else {
        if (typeof s._cstart == "number")
          u = function () {
            return s._cstart;
          };
        else {
          var c = Date.now();
          u = function () {
            return c;
          };
        }
        u.isPolyfilled = !0;
      }
    else
      ((u = function () {
        return 0;
      }),
        (u.isPolyfilled = !0));
    var d = u;
    l.default = d;
  },
  98,
);
