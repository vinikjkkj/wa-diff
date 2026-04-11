__d(
  "useVideoPlayerCaptionsDisplayAdjustments",
  ["VideoPlayerHooks", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (e || (e = o("react"))).useMemo;
    function c() {
      var e = o("react-compiler-runtime").c(2),
        t = (
          s || (s = o("VideoPlayerHooks"))
        ).useVideoPlayerCaptionsReservations(),
        n;
      return (
        e[0] !== t
          ? ((n = { bottom: 0, left: 0, right: 0, top: 0 }),
            t.length > 0 &&
              t.forEach(function (e) {
                n[e.location] = n[e.location] + e.size;
              }),
            (e[0] = t),
            (e[1] = n))
          : (n = e[1]),
        n
      );
    }
    l.default = c;
  },
  98,
);
