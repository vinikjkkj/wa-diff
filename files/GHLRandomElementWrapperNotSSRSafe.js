__d(
  "GHLRandomElementWrapperNotSSRSafe",
  [
    "Random",
    "react",
    "react-compiler-runtime",
    "useGHLScrambledLabelMitigationLogger",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = [
        [1, 0],
        [1, 1],
        [0, 1],
        [0, 2],
        [1, 2],
        [2, 2],
        [2, 1],
        [1, 1],
      ],
      c = Math.floor(Date.now() / (1e3 * 60 * 60 * 24)),
      d = function (t) {
        var e;
        return ((e = {}),
        (e[t] = (function (e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          return (babelHelpers.inheritsLoose(t, e), t);
        })(babelHelpers.wrapNativeSuper(HTMLSpanElement))),
        e)[t];
      },
      m = function () {
        return String.fromCharCode(97 + r("Random").random() * 25);
      },
      p = (c % 10) + 5,
      _ = Array(p).fill().map(m).join(""),
      f = Array(p).fill().map(m).join(""),
      g = _ + "-" + f;
    window.customElements &&
      window.customElements.define(g, d(_), { extends: "span" });
    function h(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.children,
        a = e.elementTag,
        i = e.mitigationToLog,
        l = e.useClassStyles,
        d = e.useInlineStyles,
        m = l === void 0 ? !1 : l,
        p = d === void 0 ? !1 : d,
        _ = n,
        f = u[c % u.length],
        h;
      t[0] !== p
        ? ((h = p ? { display: "inline" } : null), (t[0] = p), (t[1] = h))
        : (h = t[1]);
      var y = h,
        C;
      t[2] !== m
        ? ((C = { 0: "", 1: "x9f619 xt0psk2 xjb2p0i x1qlqyl8 x15bjb6t" }[
            !!m << 0
          ]),
          (t[2] = m),
          (t[3] = C))
        : (C = t[3]);
      var b = C;
      if (a === "div" && !m && !p) {
        var v;
        (t[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = "x9f619 xt0psk2 xjb2p0i x1qlqyl8 x15bjb6t"), (t[4] = v))
          : (v = t[4]),
          (b = v));
      }
      var S;
      a === "randomSpan"
        ? window.customElements
          ? (S = g)
          : (S = "span")
        : (S = a);
      for (var R = f[1], L = 0; L < R; L++)
        _ = s.jsx(S, { className: b, style: y, children: _ });
      var E;
      (t[5] !== S || t[6] !== _
        ? ((E = s.jsx(S, { children: _ })), (t[5] = S), (t[6] = _), (t[7] = E))
        : (E = t[7]),
        (_ = E));
      for (var k = f[0], I = 0; I < k; I++)
        _ = s.jsx(S, { className: b, style: y, children: _ });
      return (r("useGHLScrambledLabelMitigationLogger")(i), _);
    }
    l.default = h;
  },
  98,
);
