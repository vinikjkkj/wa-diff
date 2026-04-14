__d(
  "WAWebNewsletterFooterWithActionLink.react",
  ["WAWebFlex.react", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        border: {
          borderTopColor: "xx42vgk",
          borderTopStyle: "x13fuv20",
          borderTopWidth: "x178xt8z",
          $$css: !0,
        },
        footer: {
          textAlign: "x2b8uid",
          boxSizing: "x9f619",
          minHeight: "xn7apww",
          $$css: !0,
        },
        paddingHoriz8: {
          paddingInlineStart: "x12w63v0",
          paddingInlineEnd: "x1nzty39",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        paddingVert16: {
          paddingTop: "x1p57kb1",
          paddingBottom: "xvpt6g3",
          $$css: !0,
        },
      },
      c = { semiBold: { fontWeight: "xk50ysn", $$css: !0 } };
    function d(e) {
      var t = e.ref,
        n = e.showBorder,
        r = e.text;
      return s.jsx(o("WAWebFlex.react").FlexRow, {
        ref: t,
        xstyle: [u.paddingHoriz8, u.paddingVert16, u.footer, n && u.border],
        justify: "center",
        children: s.jsx("span", {
          className: "x1evy7pa x1f6kntn xhslqc4",
          children: r,
        }),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"),
      (l.footerTextStyles = c),
      (l.NewsletterFooterWithActionLink = d));
  },
  98,
);
