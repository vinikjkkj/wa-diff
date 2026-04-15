__d(
  "WAWebPDFNSanitizedSvg.react",
  [
    "WAWebDomSanitize",
    "WAWebImg.react",
    "WAWebPDFNUtils",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.ariaLabel,
        a = e.classNames,
        i = e.iconSvg,
        l = o("WAWebPDFNUtils").usePDFNThemedIcon(i);
      if (l == null) return null;
      if (l.startsWith("data:image/png")) {
        var u = n != null ? n : "",
          c;
        return (
          t[0] !== a || t[1] !== l || t[2] !== u
            ? ((c = s.jsx(r("WAWebImg.react"), {
                src: l,
                alt: u,
                className: a,
              })),
              (t[0] = a),
              (t[1] = l),
              (t[2] = u),
              (t[3] = c))
            : (c = t[3]),
          c
        );
      }
      var d;
      t[4] !== l
        ? ((d = o("WAWebDomSanitize").sanitizeNoticeSVG(l)),
          (t[4] = l),
          (t[5] = d))
        : (d = t[5]);
      var m = d;
      if (m == null) return null;
      var p;
      t[6] !== m ? ((p = { __html: m }), (t[6] = m), (t[7] = p)) : (p = t[7]);
      var _ = n != null ? n : "",
        f;
      return (
        t[8] !== a || t[9] !== p || t[10] !== _
          ? ((f = s.jsx("span", {
              className: a,
              dangerouslySetInnerHTML: p,
              "aria-label": _,
            })),
            (t[8] = a),
            (t[9] = p),
            (t[10] = _),
            (t[11] = f))
          : (f = t[11]),
        f
      );
    }
    l.default = u;
  },
  98,
);
