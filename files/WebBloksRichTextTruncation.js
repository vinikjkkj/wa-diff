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
      var t = o("react-compiler-runtime").c(9),
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
          t[0] !== n || t[1] !== a.textSizePx || t[2] !== i
            ? ((m = s.jsx(c, {
                children: n,
                maxNumberOfLines: i,
                textSizePx: a.textSizePx,
              })),
              (t[0] = n),
              (t[1] = a.textSizePx),
              (t[2] = i),
              (t[3] = m))
            : (m = t[3]),
          m
        );
      }
      var p;
      return (
        t[4] !== n || t[5] !== a || t[6] !== i || t[7] !== d
          ? ((p = s.jsx(r("WebBloksRichTextTruncationCustom"), {
              dimensions: a,
              maxNumberOfLines: i,
              truncationSpans: d,
              children: n,
            })),
            (t[4] = n),
            (t[5] = a),
            (t[6] = i),
            (t[7] = d),
            (t[8] = p))
          : (p = t[8]),
        p
      );
    }
    function c(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.children,
        r = e.maxNumberOfLines,
        a = e.textSizePx,
        i;
      t[0] !== r
        ? ((i = o("WebBloksTextStyle").getLineClampStyle(r, !1)),
          (t[0] = r),
          (t[1] = i))
        : (i = t[1]);
      var l;
      t[2] !== a
        ? ((l = o("WebBloksTextStyle").getClampedTextHeadroomStyle(a)),
          (t[2] = a),
          (t[3] = l))
        : (l = t[3]);
      var u;
      t[4] !== i || t[5] !== l
        ? ((u = babelHelpers.extends({}, i, l)),
          (t[4] = i),
          (t[5] = l),
          (t[6] = u))
        : (u = t[6]);
      var c = u,
        m;
      return (
        t[7] !== n || t[8] !== c
          ? ((m = s.jsx("div", {
              className: d.container,
              style: c,
              children: n,
            })),
            (t[7] = n),
            (t[8] = c),
            (t[9] = m))
          : (m = t[9]),
        m
      );
    }
    var d = o("WebBloksStyle").createStyles({
      container: { boxSizing: "content-box", overflow: "hidden" },
    });
    l.default = u;
  },
  98,
);
