__d(
  "WebBloksRichTextTruncation",
  [
    "WebBloksRichTextTruncationCustom",
    "WebBloksStyle",
    "WebBloksTextStyle",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.children,
        n = e.dimensions,
        o = e.maxNumberOfLines,
        a = e.spansForTruncation,
        i = e.truncationSpans,
        l = i != null && i.length ? i : a;
      return o == null || o === 0
        ? t
        : l == null || l.length < 1
          ? s.jsx(c, {
              children: t,
              maxNumberOfLines: o,
              textSizePx: n.textSizePx,
            })
          : s.jsx(r("WebBloksRichTextTruncationCustom"), {
              dimensions: n,
              maxNumberOfLines: o,
              truncationSpans: l,
              children: t,
            });
    }
    u.displayName = u.name + " [from " + i.id + "]";
    function c(e) {
      var t = e.children,
        n = e.maxNumberOfLines,
        r = e.textSizePx,
        a = babelHelpers.extends(
          {},
          o("WebBloksTextStyle").getLineClampStyle(n, !1),
          o("WebBloksTextStyle").getClampedTextHeadroomStyle(r),
        );
      return s.jsx("div", { className: d.container, style: a, children: t });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    var d = o("WebBloksStyle").createStyles({
      container: { boxSizing: "content-box", overflow: "hidden" },
    });
    l.default = u;
  },
  98,
);
