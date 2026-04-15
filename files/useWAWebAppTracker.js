__d(
  "useWAWebAppTracker",
  ["WAWebAppTracker", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useEffect;
    function u(e, t) {
      var n = o("react-compiler-runtime").c(4),
        r,
        a;
      (n[0] !== t || n[1] !== e
        ? ((r = function () {
            if (t)
              return (
                o("WAWebAppTracker").AppTracker.start(e),
                function () {
                  o("WAWebAppTracker").AppTracker.stop(e);
                }
              );
          }),
          (a = [t, e]),
          (n[0] = t),
          (n[1] = e),
          (n[2] = r),
          (n[3] = a))
        : ((r = n[2]), (a = n[3])),
        s(r, a));
    }
    l.default = u;
  },
  98,
);
