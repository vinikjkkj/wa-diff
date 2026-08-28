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
      s = e || (e = o("react")),
      u = "#",
      c = "$",
      d = "&",
      m = "(";
    function p(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.externalStyle,
        r = e.node,
        a;
      t[0] !== r ? ((a = r.get(u)), (t[0] = r), (t[1] = a)) : (a = t[1]);
      var i = a,
        l;
      t[2] !== r ? ((l = r.get(c)), (t[2] = r), (t[3] = l)) : (l = t[3]);
      var p = l,
        _ = r.get(m),
        f = o("WebBloksStyle").useStyle(r, n),
        g = f.wrapper,
        h = o("WebBloksComponentContext").useWebBloksContext(),
        y = h.renderNode,
        C = _ != null ? y(_) : r.get(d),
        b = o("WebBloksDataTextSpanUtils").useWebBloksBaseTextSpanProps(
          i,
          r,
          n,
          p,
        ),
        v;
      t[4] !== C || t[5] !== b
        ? ((v = s.jsx("span", babelHelpers.extends({}, b, { children: C }))),
          (t[4] = C),
          (t[5] = b),
          (t[6] = v))
        : (v = t[6]);
      var S;
      return (
        t[7] !== v || t[8] !== g
          ? ((S = g(v)), (t[7] = v), (t[8] = g), (t[9] = S))
          : (S = t[9]),
        S
      );
    }
    l.default = p;
  },
  98,
);
