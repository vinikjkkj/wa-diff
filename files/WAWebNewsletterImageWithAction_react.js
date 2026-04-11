__d(
  "WAWebNewsletterImageWithAction.react",
  [
    "WAWebDetailImage.react",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
  ],
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
      var t = o("react-compiler-runtime").c(11),
        n = e.Icon,
        r = e.actionTheme,
        a = e.chat,
        i;
      t[0] !== a.id
        ? ((i = s.jsx(o("WAWebDetailImage.react").DetailImage, {
            id: a.id,
            size: 104,
            quality: o("WAWebDetailImage.react").DetailImageQuality.High,
            shape: o("WAWebDetailImage.react").DetailImageShape.Circle,
          })),
          (t[0] = a.id),
          (t[1] = i))
        : (i = t[1]);
      var l = r === "primary" && u.primaryColor,
        c = r === "danger" && u.dangerColor,
        d;
      t[2] !== l || t[3] !== c
        ? ((d = [u.badge, o("WAWebUISpacing").uiPadding.all5, l, c]),
          (t[2] = l),
          (t[3] = c),
          (t[4] = d))
        : (d = t[4]);
      var m;
      t[5] !== n || t[6] !== d
        ? ((m = s.jsx(n, { width: 24, height: 24, xstyle: d })),
          (t[5] = n),
          (t[6] = d),
          (t[7] = m))
        : (m = t[7]);
      var p;
      return (
        t[8] !== i || t[9] !== m
          ? ((p = s.jsxs(s.Fragment, { children: [i, m] })),
            (t[8] = i),
            (t[9] = m),
            (t[10] = p))
          : (p = t[10]),
        p
      );
    }
    l.default = c;
  },
  98,
);
