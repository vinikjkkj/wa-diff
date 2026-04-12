__d(
  "WAWebPDFNHeaderImage.react",
  [
    "WAWebPDFNAnimation.react",
    "WAWebPDFNSanitizedSvg.react",
    "WAWebPDFNUtils",
    "WAWebUISpacing",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        topIcon: { display: "x78zum5", justifyContent: "xl56j7k", $$css: !0 },
        pngHeader: { height: "x1b51vyi", $$css: !0 },
      };
    function d(t) {
      var n = t.content,
        a = t.xstyle,
        i = n.icon,
        l = n.iconDescription,
        s = n.iconSvg,
        d = o("WAWebPDFNUtils").usePDFNThemedIcon(s);
      if ((i == null ? void 0 : i.type) === "lottie")
        return u.jsx(r("WAWebPDFNAnimation.react"), { icon: i });
      var p = m(d),
        _ = [
          c.topIcon,
          o("WAWebUISpacing").uiPadding.allAuto,
          p && c.pngHeader,
          a,
        ],
        f = u.jsx(r("WAWebPDFNSanitizedSvg.react"), {
          iconSvg: s,
          ariaLabel: l,
          classNames: (e || (e = r("stylex")))(_),
        });
      return p
        ? u.jsx("div", { className: "x78zum5 xl56j7k", children: f })
        : f;
    }
    d.displayName = d.name + " [from " + i.id + "]";
    var m = function (t) {
      return t == null ? !1 : t.startsWith("data:image/png");
    };
    l.default = d;
  },
  98,
);
