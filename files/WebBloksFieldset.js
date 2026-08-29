__d(
  "WebBloksFieldset",
  [
    "WebBloksComponentContext",
    "WebBloksStyle",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.node,
        r = o("WebBloksComponentContext").useWebBloksContext(),
        a = r.renderChildren,
        i;
      t[0] !== n || t[1] !== a
        ? ((i = a(n.getSubNodes("children"))),
          (t[0] = n),
          (t[1] = a),
          (t[2] = i))
        : (i = t[2]);
      var l;
      return (
        t[3] !== i
          ? ((l = s.jsx("fieldset", { className: c.fieldset, children: i })),
            (t[3] = i),
            (t[4] = l))
          : (l = t[4]),
        l
      );
    }
    var c = o("WebBloksStyle").createStyles({
      fieldset: { border: "none", margin: 0, padding: 0 },
    });
    l.default = u;
  },
  98,
);
