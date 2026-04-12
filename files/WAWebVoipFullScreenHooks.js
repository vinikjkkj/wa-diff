__d(
  "WAWebVoipFullScreenHooks",
  ["WAWebEnvironment", "WAWebVoipFullScreenContext", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useContext;
    function u() {
      var e = s(r("WAWebVoipFullScreenContext")),
        t = e.isFullScreen;
      return r("WAWebEnvironment").isGuest || t;
    }
    function c() {
      return (
        !r("WAWebEnvironment").isGuest &&
        r("WAWebEnvironment").getEnvironment() !== "prod"
      );
    }
    ((l.useIsFullScreenApplicable = u), (l.useShouldShowFullScreenToggle = c));
  },
  98,
);
