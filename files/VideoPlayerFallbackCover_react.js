__d(
  "VideoPlayerFallbackCover.react",
  [
    "fbt",
    "VideoPlayerFallbackCoverImplWithoutRetry.react",
    "react",
    "react-compiler-runtime",
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.background,
        a = e.debugError,
        i = e.message,
        l = e.showDebugWithoutError,
        c = e.showLearnMoreLink;
      r("vulture")("l6r5Y-0I9BBofIGePgWCOaUN4fo=");
      var d;
      t[0] !== i
        ? ((d =
            i != null
              ? i
              : s._(
                  /*BTDS*/ "Sorry, we're having trouble playing this video.",
                )),
          (t[0] = i),
          (t[1] = d))
        : (d = t[1]);
      var m = d,
        p;
      return (
        t[2] !== n || t[3] !== a || t[4] !== m || t[5] !== l || t[6] !== c
          ? ((p = u.jsx(r("VideoPlayerFallbackCoverImplWithoutRetry.react"), {
              background: n,
              debugError: a,
              message: m,
              showDebugWithoutError: l,
              showLearnMoreLink: c,
            })),
            (t[2] = n),
            (t[3] = a),
            (t[4] = m),
            (t[5] = l),
            (t[6] = c),
            (t[7] = p))
          : (p = t[7]),
        p
      );
    }
    l.default = c;
  },
  226,
);
