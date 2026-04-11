__d(
  "useWAWebAdjustableChatListWidth",
  [
    "WAWebChatlistResizeHandle.react",
    "WAWebEnvironment",
    "WAWebLocalStorage",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useState;
    function c(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.isEnabled,
        a = e.onResizeEnd,
        i = e.onResizeReset;
      if (!n) return null;
      var l;
      return (
        t[0] !== a || t[1] !== i
          ? ((l = s.jsx(r("WAWebChatlistResizeHandle.react"), {
              onResizeReset: i,
              onResizeEnd: a,
              minWidth: 265,
              maxWidth: Math.max(256, window.innerWidth * 0.5),
            })),
            (t[0] = a),
            (t[1] = i),
            (t[2] = l))
          : (l = t[2]),
        l
      );
    }
    function d() {
      var e = o("react-compiler-runtime").c(11),
        t = r("WAWebEnvironment").isWindows,
        n = t,
        a;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = function () {
            var e =
              r("WAWebLocalStorage") == null
                ? void 0
                : r("WAWebLocalStorage").getItem("chatlist_custom_width");
            return e == null || !n ? null : e;
          }),
          (e[0] = a))
        : (a = e[0]);
      var i = u(a),
        l = i[0],
        d = i[1],
        m;
      e[1] !== l
        ? ((m =
            l == null
              ? {}
              : { flex: "0 0 " + l, width: "" + l, maxWidth: "" + l }),
          (e[1] = l),
          (e[2] = m))
        : (m = e[2]);
      var p = m,
        _;
      e[3] !== l
        ? ((_ =
            l == null
              ? {}
              : { borderLeft: "1px solid var(--WDS-lines-divider)" }),
          (e[3] = l),
          (e[4] = _))
        : (_ = e[4]);
      var f = _,
        g;
      e[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = function (t) {
            var e = window.innerWidth,
              n = ((t / e) * 100).toFixed(2) + "%";
            (d(n),
              r("WAWebLocalStorage") == null ||
                r("WAWebLocalStorage").setItem("chatlist_custom_width", n));
          }),
          (e[5] = g))
        : (g = e[5]);
      var h = g,
        y;
      e[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = function () {
            (d(null),
              r("WAWebLocalStorage") == null ||
                r("WAWebLocalStorage").removeItem("chatlist_custom_width"));
          }),
          (e[6] = y))
        : (y = e[6]);
      var C = y,
        b;
      e[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = s.jsx(c, { onResizeReset: C, isEnabled: n, onResizeEnd: h })),
          (e[7] = b))
        : (b = e[7]);
      var v;
      return (
        e[8] !== p || e[9] !== f
          ? ((v = { leftDrawerStyle: p, rightDrawerStyle: f, resizeHandle: b }),
            (e[8] = p),
            (e[9] = f),
            (e[10] = v))
          : (v = e[10]),
        v
      );
    }
    l.useAdjustableChatListWidth = d;
  },
  98,
);
