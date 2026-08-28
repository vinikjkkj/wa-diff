__d(
  "FBWebBloksCatsArkoseWebView",
  [
    "ArkoseCaptcha.react",
    "WebBloksComponentContext",
    "WebBloksEnvironmentContext",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = "#",
      c = "$";
    function d(e) {
      var t = o("react-compiler-runtime").c(18),
        n = e.node,
        a = o("WebBloksComponentContext").useWebBloksContext(),
        i = o("WebBloksEnvironmentContext").useDataBloksName(),
        l;
      t[0] !== n
        ? ((l = n.getExpression(u)), (t[0] = n), (t[1] = l))
        : (l = t[1]);
      var d = l,
        m;
      t[2] !== n ? ((m = n.get(c)), (t[2] = n), (t[3] = m)) : (m = t[3]);
      var p = m,
        _;
      t[4] !== i || t[5] !== n.styleId
        ? ((_ = i(n.styleId)), (t[4] = i), (t[5] = n.styleId), (t[6] = _))
        : (_ = t[6]);
      var f;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = { pointerEvents: "auto" }), (t[7] = f))
        : (f = t[7]);
      var g = p != null ? p : void 0,
        h;
      t[8] !== d || t[9] !== a || t[10] !== n
        ? ((h = function (t) {
            d != null && a.executeCatch(n, d, [t]);
          }),
          (t[8] = d),
          (t[9] = a),
          (t[10] = n),
          (t[11] = h))
        : (h = t[11]);
      var y;
      t[12] !== g || t[13] !== h
        ? ((y = s.jsx(r("ArkoseCaptcha.react"), {
            captchaClientConfigName: g,
            onSolutionTokenReceived: h,
            theme: "base",
          })),
          (t[12] = g),
          (t[13] = h),
          (t[14] = y))
        : (y = t[14]);
      var C;
      return (
        t[15] !== _ || t[16] !== y
          ? ((C = s.jsx(
              "div",
              babelHelpers.extends({}, _, { style: f, children: y }),
            )),
            (t[15] = _),
            (t[16] = y),
            (t[17] = C))
          : (C = t[17]),
        C
      );
    }
    l.default = d;
  },
  98,
);
