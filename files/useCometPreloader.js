__d(
  "useCometPreloader",
  [
    "Bootloader",
    "CometMouseActivity",
    "ServerJsRuntimeEnvironment",
    "emptyFunction",
    "gkx",
    "react",
    "react-compiler-runtime",
    "useCometPreloaderBase",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useMemo,
      d = s.useRef;
    function m(e) {
      return e.pointerType === "mouse";
    }
    function p(e, t, n, a, i) {
      var l = o("react-compiler-runtime").c(1),
        s;
      if (l[0] === Symbol.for("react.memo_cache_sentinel")) {
        var u;
        ((s = {
          onFocusInPreloader: (u = r("emptyFunction")),
          onFocusOutPreloader: u,
          onHighIntentPreloader: u,
          onHoverInPreloader: u,
          onHoverMovePreloader: u,
          onHoverOutPreloader: u,
          onPressInPreloader: u,
        }),
          (l[0] = s));
      } else s = l[0];
      return s;
    }
    function _(e, t, n, a, i) {
      var l = o("react-compiler-runtime").c(23),
        s;
      l[0] !== i
        ? ((s = function (t) {
            (r("Bootloader").forceFlush(),
              i == null ||
                i.lowSignalPreloaderCallback == null ||
                i.lowSignalPreloaderCallback(t));
          }),
          (l[0] = i),
          (l[1] = s))
        : (s = l[1]);
      var u = s,
        c;
      l[2] !== i
        ? ((c = function (t) {
            (r("Bootloader").forceFlush(),
              i == null ||
                i.highSignalPreloaderCallback == null ||
                i.highSignalPreloaderCallback(t));
          }),
          (l[2] = i),
          (l[3] = c))
        : (c = l[3]);
      var p = c,
        _;
      l[4] !== p || l[5] !== u
        ? ((_ = {
            highSignalPreloaderCallback: p,
            lowSignalPreloaderCallback: u,
          }),
          (l[4] = p),
          (l[5] = u),
          (l[6] = _))
        : (_ = l[6]);
      var f = _,
        g = d(),
        h = e === "button_aggressive" ? "button" : e,
        y;
      l[7] !== a
        ? ((y = function () {
            (g.current == null || g.current(),
              (g.current = null),
              a == null || a());
          }),
          (l[7] = a),
          (l[8] = y))
        : (y = l[8]);
      var C = y,
        b = r("useCometPreloaderBase")(h, t, n, C, f),
        v = b.onFocusInPreloader,
        S = b.onFocusOutPreloader,
        R = b.onHighIntentPreloader,
        L = b.onHoverInPreloader,
        E = b.onHoverOutPreloader,
        k = b.onPressInPreloader,
        I;
      l[9] !== k
        ? ((I = function (t) {
            m(t) && k(t);
          }),
          (l[9] = k),
          (l[10] = I))
        : (I = l[10]);
      var T = I,
        D;
      l[11] !== f || l[12] !== n || l[13] !== L || l[14] !== e
        ? ((D = function (o) {
            if ((L(o), e === "button_aggressive")) {
              var t = function () {
                (n == null || n(),
                  f.highSignalPreloaderCallback == null ||
                    f.highSignalPreloaderCallback("onhoverin"));
              };
              (g.current != null && (g.current(), (g.current = null)),
                (g.current =
                  r("CometMouseActivity").addOnMouseStopCallbackOnce(t)));
            }
          }),
          (l[11] = f),
          (l[12] = n),
          (l[13] = L),
          (l[14] = e),
          (l[15] = D))
        : (D = l[15]);
      var x = D,
        $ = r("gkx")("4225") ? v : r("emptyFunction"),
        P = r("gkx")("4225") ? S : r("emptyFunction"),
        N;
      return (
        l[16] !== R ||
        l[17] !== x ||
        l[18] !== E ||
        l[19] !== T ||
        l[20] !== $ ||
        l[21] !== P
          ? ((N = {
              onFocusInPreloader: $,
              onFocusOutPreloader: P,
              onHighIntentPreloader: R,
              onHoverInPreloader: x,
              onHoverMovePreloader: r("emptyFunction"),
              onHoverOutPreloader: E,
              onPressInPreloader: T,
            }),
            (l[16] = R),
            (l[17] = x),
            (l[18] = E),
            (l[19] = T),
            (l[20] = $),
            (l[21] = P),
            (l[22] = N))
          : (N = l[22]),
        N
      );
    }
    var f = o("ServerJsRuntimeEnvironment").isRunningServerJsRuntime() ? p : _;
    l.default = f;
  },
  98,
);
