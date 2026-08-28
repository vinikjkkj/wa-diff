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
      var t = o("react-compiler-runtime").c(8),
        n = e.children,
        a = e.dimensions,
        i = e.maxNumberOfLines,
        l = e.spansForTruncation,
        u = e.truncationSpans,
        d = u != null && u.length ? u : l;
      if (i == null || i === 0) return n;
      if (d == null || d.length < 1) {
        var m;
        return (
          t[0] !== n || t[1] !== i
            ? ((m = s.jsx(c, { children: n, maxNumberOfLines: i })),
              (t[0] = n),
              (t[1] = i),
              (t[2] = m))
            : (m = t[2]),
          m
        );
      }
      var p;
      return (
        t[3] !== n || t[4] !== a || t[5] !== i || t[6] !== d
          ? ((p = s.jsx(r("WebBloksRichTextTruncationCustom"), {
              dimensions: a,
              maxNumberOfLines: i,
              truncationSpans: d,
              children: n,
            })),
            (t[3] = n),
            (t[4] = a),
            (t[5] = i),
            (t[6] = d),
            (t[7] = p))
          : (p = t[7]),
        p
      );
    }
    function c(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.children,
        r = e.maxNumberOfLines,
        a;
      t[0] !== r
        ? ((a = o("WebBloksTextStyle").getLineClampStyle(r, !1)),
          (t[0] = r),
          (t[1] = a))
        : (a = t[1]);
      var i = a,
        l;
      return (
        t[2] !== n || t[3] !== i
          ? ((l = s.jsx("div", {
              className: d.container,
              style: i,
              children: n,
            })),
            (t[2] = n),
            (t[3] = i),
            (t[4] = l))
          : (l = t[4]),
        l
      );
    }
    var d = o("WebBloksStyle").createStyles({
      container: { overflow: "hidden" },
    });
    l.default = u;
  },
  98,
);
