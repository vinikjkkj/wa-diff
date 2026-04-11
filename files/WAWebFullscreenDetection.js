__d(
  "WAWebFullscreenDetection",
  ["react", "react-compiler-runtime", "useWAWebStableCallback"],
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
      var t = o("react-compiler-runtime").c(3),
        n = r("useWAWebStableCallback")(e),
        a,
        i;
      (t[0] !== n
        ? ((a = function () {
            return d(n);
          }),
          (i = [n]),
          (t[0] = n),
          (t[1] = a),
          (t[2] = i))
        : ((a = t[1]), (i = t[2])),
        s(a, i));
    }
    ((l.isFullscreen = c), (l.useOnFullscreenChange = m));
  },
  98,
);
