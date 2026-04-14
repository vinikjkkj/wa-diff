__d(
  "WAWebPDFNSanitizedSvg.react",
  ["WAWebDomSanitize", "WAWebImg.react", "WAWebPDFNUtils", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.ariaLabel,
        n = e.classNames,
        a = e.iconSvg,
        i = o("WAWebPDFNUtils").usePDFNThemedIcon(a);
      if (i == null) return null;
      if (i.startsWith("data:image/png"))
        return s.jsx(r("WAWebImg.react"), {
          src: i,
          alt: t != null ? t : "",
          className: n,
        });
      var l = o("WAWebDomSanitize").sanitizeNoticeSVG(i);
      return l == null
        ? null
        : s.jsx("span", {
            className: n,
            dangerouslySetInnerHTML: { __html: l },
            "aria-label": t != null ? t : "",
          });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
