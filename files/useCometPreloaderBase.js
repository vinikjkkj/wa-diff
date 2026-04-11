__d(
  "useCometPreloaderBase",
  [
    "CometPreloaderConfig",
    "JSScheduler",
    "clearTimeout",
    "react",
    "react-compiler-runtime",
    "setTimeout",
    "setTimeoutCometInternals",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = u.useCallback,
      d = u.useEffect,
      m = u.useRef,
      p = "onfocusin",
      _ = "onhoverin",
      f = "onpressin",
      g = "onhighintent";
    function h(t, n, a, i, l) {
      var s = o("react-compiler-runtime").c(44),
        u = m(null),
        c = m(null),
        h = m(null),
        y = m(null),
        C = m(null),
        b;
      s[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = function (n) {
            c.current = o(
              "setTimeoutCometInternals",
            ).setTimeoutAtPriority_DO_NOT_USE(
              (e || (e = r("JSScheduler"))).priorities.unstable_UserBlocking,
              n,
              o("CometPreloaderConfig").PRELOAD_THRESHOLD_MS,
            );
          }),
          (s[0] = b))
        : (b = s[0]);
      var v = b,
        S;
      s[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = function (n) {
            u.current = o(
              "setTimeoutCometInternals",
            ).setTimeoutAtPriority_DO_NOT_USE(
              (e || (e = r("JSScheduler"))).priorities.unstable_UserBlocking,
              n,
              o("CometPreloaderConfig").PRELOAD_THRESHOLD_MS,
            );
          }),
          (s[1] = S))
        : (S = s[1]);
      var R = S,
        L;
      s[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = function (t) {
            h.current = r("setTimeout")(
              t,
              o("CometPreloaderConfig").PRELOAD_THRESHOLD_MS,
            );
          }),
          (s[2] = L))
        : (L = s[2]);
      var E = L,
        k;
      s[3] !== l
        ? ((k = l != null ? l : {}), (s[3] = l), (s[4] = k))
        : (k = s[4]);
      var I = k,
        T = I.highSignalPreloaderCallback,
        D = I.lowSignalPreloaderCallback,
        x;
      s[5] !== a || s[6] !== T || s[7] !== n || s[8] !== D || s[9] !== t
        ? ((x = function (r) {
            if (
              t === "tooltip" ||
              ((t === "button" || t === "button_aggressive") && n != null)
            ) {
              var e = function () {
                (t === "tooltip"
                  ? (a == null || a(), T == null || T(_), n == null || n())
                  : (t === "button" || t === "button_aggressive") &&
                    (n == null || n()),
                  D == null || D(_));
              };
              v(e);
            }
            if (t === "button_aggressive") {
              var o = function () {
                (a == null || a(), T == null || T(_));
              };
              E(o);
            }
          }),
          (s[5] = a),
          (s[6] = T),
          (s[7] = n),
          (s[8] = D),
          (s[9] = t),
          (s[10] = x))
        : (x = s[10]);
      var $ = x,
        P;
      s[11] !== i
        ? ((P = function () {
            (r("clearTimeout")(c.current),
              r("clearTimeout")(h.current),
              (c.current = null),
              (h.current = null),
              i && i(),
              y.current != null && y.current(),
              C.current != null && C.current());
          }),
          (s[11] = i),
          (s[12] = P))
        : (P = s[12]);
      var N = P,
        M;
      s[13] !== a || s[14] !== T || s[15] !== n || s[16] !== D || s[17] !== t
        ? ((M = function (r) {
            if (
              t === "tooltip" ||
              ((t === "button" || t === "button_aggressive") && n != null)
            ) {
              var e = function () {
                (t === "tooltip" || t === "button_aggressive"
                  ? (a == null || a(), T == null || T(p), n == null || n())
                  : t === "button" && (n == null || n()),
                  D == null || D(p));
              };
              R(e);
            }
          }),
          (s[13] = a),
          (s[14] = T),
          (s[15] = n),
          (s[16] = D),
          (s[17] = t),
          (s[18] = M))
        : (M = s[18]);
      var w = M,
        A;
      s[19] !== i
        ? ((A = function () {
            (r("clearTimeout")(u.current),
              (u.current = null),
              y.current != null && y.current(),
              C.current != null && C.current(),
              i && i());
          }),
          (s[19] = i),
          (s[20] = A))
        : (A = s[20]);
      var F = A,
        O;
      s[21] !== a || s[22] !== T || s[23] !== t
        ? ((O = function () {
            (t === "button" || t === "button_aggressive") &&
              (a == null || a(), T == null || T(f));
          }),
          (s[21] = a),
          (s[22] = T),
          (s[23] = t),
          (s[24] = O))
        : (O = s[24]);
      var B = O,
        W;
      s[25] !== a || s[26] !== T || s[27] !== n || s[28] !== D
        ? ((W = function (o) {
            (e || (e = r("JSScheduler"))).scheduleSpeculativeCallback(
              function () {
                o === !0 &&
                  (a == null || a(),
                  n == null || n(),
                  D == null || D(g),
                  T == null || T(g));
              },
            );
          }),
          (s[25] = a),
          (s[26] = T),
          (s[27] = n),
          (s[28] = D),
          (s[29] = W))
        : (W = s[29]);
      var q = W,
        U;
      s[30] !== a || s[31] !== T || s[32] !== t
        ? ((U = function () {
            if (t === "button_aggressive") {
              var e = function () {
                (a == null || a(), T == null || T(_));
              };
              (r("clearTimeout")(h.current), E(e));
            }
          }),
          (s[30] = a),
          (s[31] = T),
          (s[32] = t),
          (s[33] = U))
        : (U = s[33]);
      var V = U,
        H,
        G;
      (s[34] === Symbol.for("react.memo_cache_sentinel")
        ? ((H = function () {
            return function () {
              (y.current != null && y.current(),
                C.current != null && C.current(),
                r("clearTimeout")(c.current),
                r("clearTimeout")(u.current),
                r("clearTimeout")(h.current),
                (c.current = null),
                (h.current = null),
                (u.current = null));
            };
          }),
          (G = []),
          (s[34] = H),
          (s[35] = G))
        : ((H = s[34]), (G = s[35])),
        d(H, G));
      var z;
      return (
        s[36] !== w ||
        s[37] !== F ||
        s[38] !== q ||
        s[39] !== $ ||
        s[40] !== V ||
        s[41] !== N ||
        s[42] !== B
          ? ((z = {
              onFocusInPreloader: w,
              onFocusOutPreloader: F,
              onHighIntentPreloader: q,
              onHoverInPreloader: $,
              onHoverMovePreloader: V,
              onHoverOutPreloader: N,
              onPressInPreloader: B,
            }),
            (s[36] = w),
            (s[37] = F),
            (s[38] = q),
            (s[39] = $),
            (s[40] = V),
            (s[41] = N),
            (s[42] = B),
            (s[43] = z))
          : (z = s[43]),
        z
      );
    }
    l.default = h;
  },
  98,
);
