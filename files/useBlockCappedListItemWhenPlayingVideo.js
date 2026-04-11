__d(
  "useBlockCappedListItemWhenPlayingVideo",
  ["CappedListItemContext", "err", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useContext,
      c = s.useEffect;
    function d(e, t) {
      var n,
        a = o("react-compiler-runtime").c(4),
        i =
          (n = u(r("CappedListItemContext"))) == null
            ? void 0
            : n.registerBlocker,
        l,
        s;
      (a[0] !== e || a[1] !== i
        ? ((l = function () {
            if (i) {
              var t = null,
                n = null,
                r = function () {
                  var r = e.getCurrentState().playing;
                  if (r !== t && ((t = r), n && (n(), (n = null)), r)) {
                    var o;
                    n = i({ reason: "playing_video", source: o });
                  }
                };
              r();
              var o = e.subscribe(r);
              return function () {
                (o.remove(), n && (n(), (n = null)));
              };
            }
          }),
          (s = [e, i]),
          (a[0] = e),
          (a[1] = i),
          (a[2] = l),
          (a[3] = s))
        : ((l = a[2]), (s = a[3])),
        c(l, s));
    }
    l.default = d;
  },
  98,
);
