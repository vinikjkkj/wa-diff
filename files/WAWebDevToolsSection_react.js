__d(
  "WAWebDevToolsSection.react",
  [
    "WAWebCopyPasteSelectable.react",
    "WAWebText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = { marginTop8: { marginTop: "x1380le5", $$css: !0 } },
      c = u.marginTop8;
    function d(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.children,
        r = e.isRefresh;
      if (r === !0) {
        var a;
        return (
          t[0] !== n
            ? ((a = s.jsx(o("WAWebCopyPasteSelectable.react").SelectableDiv, {
                selectable: !0,
                children: s.jsx(o("WAWebText.react").WAWebTextMutedRefreshed, {
                  xstyle: u.marginTop8,
                  children: n,
                }),
              })),
              (t[0] = n),
              (t[1] = a))
            : (a = t[1]),
          a
        );
      }
      var i;
      return (
        t[2] !== n
          ? ((i = s.jsx(o("WAWebCopyPasteSelectable.react").SelectableDiv, {
              selectable: !0,
              children: s.jsx(o("WAWebText.react").WAWebTextMuted, {
                xstyle: c,
                children: n,
              }),
            })),
            (t[2] = n),
            (t[3] = i))
          : (i = t[3]),
        i
      );
    }
    l.default = d;
  },
  98,
);
