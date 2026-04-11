__d(
  "WebBloksRichTextTruncation",
  [
    "WebBloksRichTextTruncationCustom",
    "WebBloksStyle",
    "WebBloksTextStyle",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.children,
        a = e.dimensions,
        i = e.node,
        l = i.get("max_number_of_lines"),
        u;
      t[0] !== i
        ? ((u = i.getSubNodes("truncation_spans")), (t[0] = i), (t[1] = u))
        : (u = t[1]);
      var d = u,
        m;
      t[2] !== i
        ? ((m = i.getSubNodes("spans_for_truncation")), (t[2] = i), (t[3] = m))
        : (m = t[3]);
      var p = m,
        _ = l,
        f = d != null && d.length ? d : p;
      if (_ == null || _ === 0) return n;
      if (f == null || f.length < 1) {
        var g;
        return (
          t[4] !== n || t[5] !== i
            ? ((g = s.jsx(c, { children: n, node: i })),
              (t[4] = n),
              (t[5] = i),
              (t[6] = g))
            : (g = t[6]),
          g
        );
      }
      var h;
      return (
        t[7] !== n || t[8] !== a || t[9] !== i || t[10] !== f
          ? ((h = s.jsx(r("WebBloksRichTextTruncationCustom"), {
              dimensions: a,
              node: i,
              truncationSpans: f,
              children: n,
            })),
            (t[7] = n),
            (t[8] = a),
            (t[9] = i),
            (t[10] = f),
            (t[11] = h))
          : (h = t[11]),
        h
      );
    }
    function c(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.children,
        r = e.node,
        a;
      if (t[0] !== r) {
        var i = r.get("max_number_of_lines");
        ((a = o("WebBloksTextStyle").getLineClampStyle(i, !1)),
          (t[0] = r),
          (t[1] = a));
      } else a = t[1];
      var l = a,
        u;
      return (
        t[2] !== n || t[3] !== l
          ? ((u = s.jsx("div", {
              className: d.container,
              style: l,
              children: n,
            })),
            (t[2] = n),
            (t[3] = l),
            (t[4] = u))
          : (u = t[4]),
        u
      );
    }
    var d = o("WebBloksStyle").createStyles({
      container: { overflow: "hidden" },
    });
    l.default = u;
  },
  98,
);
