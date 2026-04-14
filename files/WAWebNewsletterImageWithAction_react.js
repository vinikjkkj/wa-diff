__d(
  "WAWebNewsletterImageWithAction.react",
  ["WAWebDetailImage.react", "WAWebUISpacing", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        badge: {
          zIndex: "xa1v5g2",
          bottom: "x1c56n8",
          insetInlineEnd: "x1wmwbkl",
          left: null,
          right: null,
          position: "x1n2onr6",
          marginInlineEnd: "xhg6vv5",
          borderTopWidth: "xmn4e3e",
          borderInlineEndWidth: "x1if355w",
          borderBottomWidth: "x2x41l1",
          borderInlineStartWidth: "xct1zlm",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopColor: "x1y9zq84",
          borderInlineEndColor: "xt9xd2u",
          borderBottomColor: "x3tsejo",
          borderInlineStartColor: "x1ahzpo1",
          color: "xzqyxu6",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          backgroundColor: "xk0ssx3",
          $$css: !0,
        },
        primaryColor: { backgroundColor: "x1ooda66", $$css: !0 },
        dangerColor: { backgroundColor: "xk0ssx3", $$css: !0 },
      };
    function c(e) {
      var t = e.Icon,
        n = e.actionTheme,
        r = e.chat;
      return s.jsxs(s.Fragment, {
        children: [
          s.jsx(o("WAWebDetailImage.react").DetailImage, {
            id: r.id,
            size: 104,
            quality: o("WAWebDetailImage.react").DetailImageQuality.High,
            shape: o("WAWebDetailImage.react").DetailImageShape.Circle,
          }),
          s.jsx(t, {
            width: 24,
            height: 24,
            xstyle: [
              u.badge,
              o("WAWebUISpacing").uiPadding.all5,
              n === "primary" && u.primaryColor,
              n === "danger" && u.dangerColor,
            ],
          }),
        ],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
