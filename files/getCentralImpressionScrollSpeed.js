__d(
  "getCentralImpressionScrollSpeed",
  ["cr:5662"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 0,
      l = Date.now(),
      s = null,
      u = null;
    function c(e) {
      n("cr:5662").listen(
        window,
        "scroll",
        function () {
          (u != null && clearTimeout(u),
            (u = setTimeout(function () {
              return e();
            }, 100)));
        },
        n("cr:5662").Priority.NORMAL,
        { passive: !0 },
      );
    }
    function d() {
      var t = window.scrollY,
        n = Date.now();
      if (s != null && n !== l) {
        var r = t - s;
        e = (r / (n - l)) * 1e3;
      }
      ((s = t), (l = n));
    }
    (c(function () {
      ((e = 0), (s = null));
    }),
      n("cr:5662").listen(
        window,
        "scroll",
        function () {
          return d();
        },
        n("cr:5662").Priority.NORMAL,
        { passive: !0 },
      ),
      (a.exports = function () {
        return e;
      }));
  },
  null,
);
