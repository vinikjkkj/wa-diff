__d(
  "WebBloksDataTextSpan",
  [
    "WebBloksComponentContext",
    "WebBloksDataTextSpanUtils",
    "WebBloksStyle",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.externalStyle,
        r = e.node,
        a = r.get("text_provider"),
        i = o("WebBloksStyle").useStyle(r, n),
        l = i.wrapper,
        u = o("WebBloksComponentContext").useWebBloksContext(),
        c = u.renderNode,
        d = a != null ? c(a) : r.get("text"),
        m = o("WebBloksDataTextSpanUtils").useWebBloksBaseTextSpanProps(r, n),
        p;
      t[0] !== d || t[1] !== m
        ? ((p = s.jsx("span", babelHelpers.extends({}, m, { children: d }))),
          (t[0] = d),
          (t[1] = m),
          (t[2] = p))
        : (p = t[2]);
      var _;
      return (
        t[3] !== p || t[4] !== l
          ? ((_ = l(p)), (t[3] = p), (t[4] = l), (t[5] = _))
          : (_ = t[5]),
        _
      );
    }
    l.default = u;
  },
  98,
);
