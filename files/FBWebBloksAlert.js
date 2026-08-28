__d(
  "FBWebBloksAlert",
  [
    "WebBloksComponentContext",
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
      var t = o("react-compiler-runtime").c(21),
        n = e.node,
        r = o("WebBloksComponentContext").useWebBloksContext(),
        a = r.renderNode,
        i,
        l,
        p,
        f;
      if (t[0] !== n || t[1] !== a) {
        var g = n.getSubNode(d),
          h = n.getSubNode(c),
          y;
        (t[6] !== n ? ((y = n.get(u)), (t[6] = n), (t[7] = y)) : (y = t[7]),
          (i = y));
        var C;
        (t[8] !== n ? ((C = n.get(m)), (t[8] = n), (t[9] = C)) : (C = t[9]),
          (f = C),
          (l = a(g)),
          (p = a(h)),
          (t[0] = n),
          (t[1] = a),
          (t[2] = i),
          (t[3] = l),
          (t[4] = p),
          (t[5] = f));
      } else ((i = t[2]), (l = t[3]), (p = t[4]), (f = t[5]));
      var b = p,
        v = null;
      if (i !== void 0) {
        var S;
        (t[10] !== i
          ? ((S = s.jsx("div", { className: _.body, children: i })),
            (t[10] = i),
            (t[11] = S))
          : (S = t[11]),
          (v = S));
      }
      var R;
      t[12] !== f
        ? ((R = s.jsx("div", {
            className: _.header,
            children: s.jsx("h4", { className: _.title, children: f }),
          })),
          (t[12] = f),
          (t[13] = R))
        : (R = t[13]);
      var L;
      t[14] !== b || t[15] !== l
        ? ((L = s.jsxs("div", { className: _.footer, children: [b, l] })),
          (t[14] = b),
          (t[15] = l),
          (t[16] = L))
        : (L = t[16]);
      var E;
      return (
        t[17] !== v || t[18] !== R || t[19] !== L
          ? ((E = s.jsx("div", {
              className: _.root,
              children: s.jsxs("div", {
                className: _.content,
                children: [R, v, L],
              }),
            })),
            (t[17] = v),
            (t[18] = R),
            (t[19] = L),
            (t[20] = E))
          : (E = t[20]),
        E
      );
    }
    var _ = o("WebBloksStyle").createStyles({
      root: {
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        left: 0,
        position: "fixed",
        right: 0,
        top: 0,
        zIndex: 900,
      },
      title: { margin: 0 },
      content: {
        backgroundColor: "white",
        width: 500,
        borderRadius: 12,
        margin: 32,
        textAlign: "center",
      },
      header: { padding: 10 },
      footer: { display: "flex" },
      body: {
        borderBottom: "1px solid white",
        borderTop: "1px solid white",
        padding: 10,
      },
    });
    l.default = p;
  },
  98,
);
