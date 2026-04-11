__d(
  "useFeedImageErrorEventLoggerCbs",
  [
    "Banzai",
    "CometInteractionSourceContext",
    "Random",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useContext,
      d = s.useRef,
      m = 1e3,
      p = function (t) {
        var e = t.result,
          n = t.src,
          a = t.surface;
        o("Random").coinflip(m) &&
          r("Banzai").post("logger:WWWImageLoadSrcEventLoggerConfig", {
            result: e,
            src: n,
            surface: a,
          });
      };
    function _(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.onError,
        a = e.onLoad,
        i = e.src,
        l = d(null),
        s = c(r("CometInteractionSourceContext")),
        u = s === 3 ? "profile" : s === 0 ? "feed" : null,
        m;
      t[0] !== a || t[1] !== i || t[2] !== u
        ? ((m = function (t) {
            (a != null && a(t),
              l.current !== i &&
                typeof i == "string" &&
                (p({ result: "success", src: i, surface: u }),
                (l.current = i)));
          }),
          (t[0] = a),
          (t[1] = i),
          (t[2] = u),
          (t[3] = m))
        : (m = t[3]);
      var _ = m,
        f;
      t[4] !== n || t[5] !== i || t[6] !== u
        ? ((f = function (t) {
            (n != null && n(t),
              l.current !== i &&
                typeof i == "string" &&
                (p({ result: "error", src: i, surface: u }), (l.current = i)));
          }),
          (t[4] = n),
          (t[5] = i),
          (t[6] = u),
          (t[7] = f))
        : (f = t[7]);
      var g = f;
      if (u == null || typeof i != "string") {
        var h;
        return (
          t[8] !== n || t[9] !== a
            ? ((h = { _onError: n, _onLoad: a }),
              (t[8] = n),
              (t[9] = a),
              (t[10] = h))
            : (h = t[10]),
          h
        );
      }
      var y;
      return (
        t[11] !== g || t[12] !== _
          ? ((y = { _onError: g, _onLoad: _ }),
            (t[11] = g),
            (t[12] = _),
            (t[13] = y))
          : (y = t[13]),
        y
      );
    }
    l.default = _;
  },
  98,
);
