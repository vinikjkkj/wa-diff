__d(
  "useDisableVirtualizationWhenPlayingVideo",
  ["VirtualizationContext", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useContext,
      c = s.useEffect;
    function d(e, t) {
      var n = o("react-compiler-runtime").c(5),
        a = u(r("VirtualizationContext")),
        i,
        l;
      (n[0] !== a || n[1] !== e || n[2] !== t
        ? ((i = function () {
            if (a != null) {
              var n = a.createFlag,
                r = a.createPin,
                o = null,
                i = null,
                l = function () {
                  i == null && (i = n("HAS_PLAYER", "playerInstanceKey: " + t));
                  var a = e.getCurrentState();
                  a.playing || a.stalling
                    ? o || (o = r("player " + t + " is playing"))
                    : a.isFullscreen
                      ? o || (o = r("player " + t + " is fullscreen"))
                      : (o == null || o(), (o = null));
                };
              l();
              var s = e.subscribe(l);
              return function () {
                (s.remove(),
                  i == null || i(),
                  (i = null),
                  o == null || o(),
                  (o = null));
              };
            }
          }),
          (l = [e, t, a]),
          (n[0] = a),
          (n[1] = e),
          (n[2] = t),
          (n[3] = i),
          (n[4] = l))
        : ((i = n[3]), (l = n[4])),
        c(i, l));
    }
    l.default = d;
  },
  98,
);
