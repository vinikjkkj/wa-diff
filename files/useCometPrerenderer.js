__d(
  "useCometPrerenderer",
  [
    "ServerJsRuntimeEnvironment",
    "emptyFunction",
    "react",
    "react-compiler-runtime",
    "useCometPreloader",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useMemo,
      d = s.useRef,
      m = s.useState;
    function p(e) {
      e && (typeof e == "function" ? e() : e.preload());
    }
    function _(e, t, n, a) {
      var i = o("react-compiler-runtime").c(1),
        l;
      if (i[0] === Symbol.for("react.memo_cache_sentinel")) {
        var s;
        ((l = [(s = r("emptyFunction")), s, s, s, s]), (i[0] = l));
      } else l = i[0];
      return l;
    }
    function f(e, t, n, a, i) {
      var l = o("react-compiler-runtime").c(35),
        s = m(!1),
        u = s[0],
        c = s[1],
        _ = d(!1),
        f;
      l[0] !== t
        ? ((f = function () {
            return p(t);
          }),
          (l[0] = t),
          (l[1] = f))
        : (f = l[1]);
      var g = f,
        h;
      l[2] !== n
        ? ((h = function () {
            return p(n);
          }),
          (l[2] = n),
          (l[3] = h))
        : (h = l[3]);
      var y = h,
        C;
      l[4] !== i || l[5] !== e
        ? ((C = function (n) {
            n === "onhoverin" &&
              e === "tooltip" &&
              ((_.current = !0), i == null || i(!0));
          }),
          (l[4] = i),
          (l[5] = e),
          (l[6] = C))
        : (C = l[6]);
      var b = C,
        v;
      l[7] !== i || l[8] !== e
        ? ((v = function (n) {
            ((n === "onhoverin" && e === "button_aggressive") ||
              (n === "onpressin" &&
                (e === "button" || e === "button_aggressive"))) &&
              ((_.current = !0), i == null || i(!0));
          }),
          (l[7] = i),
          (l[8] = e),
          (l[9] = v))
        : (v = l[9]);
      var S = v,
        R;
      l[10] !== S || l[11] !== b
        ? ((R = {
            highSignalPreloaderCallback: S,
            lowSignalPreloaderCallback: b,
          }),
          (l[10] = S),
          (l[11] = b),
          (l[12] = R))
        : (R = l[12]);
      var L = R,
        E = r("useCometPreloader")(e, g, y, a, L),
        k = E.onHighIntentPreloader,
        I = E.onHoverInPreloader,
        T = E.onHoverMovePreloader,
        D = E.onHoverOutPreloader,
        x = E.onPressInPreloader,
        $;
      l[13] !== I
        ? (($ = function (t) {
            I(t);
          }),
          (l[13] = I),
          (l[14] = $))
        : ($ = l[14]);
      var P = $,
        N;
      l[15] !== T
        ? ((N = function (t) {
            T(t);
          }),
          (l[15] = T),
          (l[16] = N))
        : (N = l[16]);
      var M = N,
        w;
      l[17] !== u || l[18] !== D || l[19] !== i || l[20] !== e
        ? ((w = function () {
            (D(), (_.current = !1), i == null || i(e == null ? !1 : u));
          }),
          (l[17] = u),
          (l[18] = D),
          (l[19] = i),
          (l[20] = e),
          (l[21] = w))
        : (w = l[21]);
      var A = w,
        F;
      l[22] !== x
        ? ((F = function (t) {
            x(t);
          }),
          (l[22] = x),
          (l[23] = F))
        : (F = l[23]);
      var O = F,
        B;
      l[24] !== k || l[25] !== i || l[26] !== e
        ? ((B = function (n) {
            (k(n), c(n), i == null || i(e != null && (_.current || n)));
          }),
          (l[24] = k),
          (l[25] = i),
          (l[26] = e),
          (l[27] = B))
        : (B = l[27]);
      var W = B;
      if (e == null || e === "mount_DANGEROUS_I_KNOW_WHAT_IM_DOING") {
        var q;
        if (l[28] === Symbol.for("react.memo_cache_sentinel")) {
          var U;
          ((q = [(U = r("emptyFunction")), U, U, U, U]), (l[28] = q));
        } else q = l[28];
        return q;
      }
      var V;
      return (
        l[29] !== W || l[30] !== P || l[31] !== M || l[32] !== A || l[33] !== O
          ? ((V = [P, A, O, W, M]),
            (l[29] = W),
            (l[30] = P),
            (l[31] = M),
            (l[32] = A),
            (l[33] = O),
            (l[34] = V))
          : (V = l[34]),
        V
      );
    }
    var g = o("ServerJsRuntimeEnvironment").isRunningServerJsRuntime() ? _ : f;
    l.default = g;
  },
  98,
);
