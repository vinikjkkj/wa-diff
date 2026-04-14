__d(
  "WAWebFullscreenDetection",
  ["react", "useWAWebStableCallback"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useEffect,
      u = window.matchMedia("(display-mode: fullscreen)");
    function c() {
      return u.matches;
    }
    function d(e) {
      var t = function (n) {
        e(n.matches);
      };
      return (
        u.addEventListener("change", t),
        function () {
          u.removeEventListener("change", t);
        }
      );
    }
    function m(e) {
      var t = r("useWAWebStableCallback")(e);
      s(
        function () {
          return d(t);
        },
        [t],
      );
    }
    ((l.isFullscreen = c), (l.useOnFullscreenChange = m));
  },
  98,
);
