__d(
  "FBWebBloksCatsReCaptchaWebView",
  [
    "ReCaptcha.react",
    "WebBloksComponentContext",
    "WebBloksEnvironmentContext",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = "#";
    function c(e) {
      var t = o("react-compiler-runtime").c(13),
        n = e.node,
        a = o("WebBloksComponentContext").useWebBloksContext(),
        i = o("WebBloksEnvironmentContext").useDataBloksName(),
        l;
      t[0] !== n
        ? ((l = n.getExpression(u)), (t[0] = n), (t[1] = l))
        : (l = t[1]);
      var c = l,
        d;
      t[2] !== i || t[3] !== n.styleId
        ? ((d = i(n.styleId)), (t[2] = i), (t[3] = n.styleId), (t[4] = d))
        : (d = t[4]);
      var m;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = { pointerEvents: "auto" }), (t[5] = m))
        : (m = t[5]);
      var p;
      t[6] !== c || t[7] !== a || t[8] !== n
        ? ((p = s.jsx(r("ReCaptcha.react"), {
            onSolutionTokenReceived: function (t) {
              c != null && a.executeCatch(n, c, [t]);
            },
          })),
          (t[6] = c),
          (t[7] = a),
          (t[8] = n),
          (t[9] = p))
        : (p = t[9]);
      var _;
      return (
        t[10] !== d || t[11] !== p
          ? ((_ = s.jsx(
              "div",
              babelHelpers.extends({}, d, { style: m, children: p }),
            )),
            (t[10] = d),
            (t[11] = p),
            (t[12] = _))
          : (_ = t[12]),
        _
      );
    }
    l.default = c;
  },
  98,
);
