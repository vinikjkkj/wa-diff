__d(
  "useWAWebAppTracker",
  ["WAWebAppTracker", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useEffect;
    function u(e, t) {
      s(
        function () {
          if (t)
            return (
              o("WAWebAppTracker").AppTracker.start(e),
              function () {
                o("WAWebAppTracker").AppTracker.stop(e);
              }
            );
        },
        [t, e],
      );
    }
    l.default = u;
  },
  98,
);
