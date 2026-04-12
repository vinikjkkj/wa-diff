__d(
  "WAWebGroupSafetyCheckCarouselItem.react",
  ["WAWebFlex.react", "WAWebText.react", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = 140,
      c = 180,
      d = 20,
      m = {
        container: {
          width: "xzjbwwf",
          minHeight: "x7v6ubd",
          cursor: "x1ypdohk",
          $$css: !0,
        },
        text: {
          width: "xoa0rjt",
          minHeight: "xisnujt",
          paddingTop: "x1iorvi4",
          $$css: !0,
        },
        icon: {
          color: "xo1mcw5",
          display: "x78zum5",
          justifyContent: "x1rfj78v",
          alignItems: "x1cy8zhl",
          minWidth: "x1hxoosp",
          paddingInlineStart: "xf7dkkf",
          $$css: !0,
        },
      };
    function p(e) {
      var t = e.item,
        n = t.description,
        r = t.icon,
        a = t.iconWidth,
        i = a === void 0 ? 24 : a,
        l = t.title;
      return s.jsx(o("WAWebFlex.react").FlexColumn, {
        align: "center",
        testid: void 0,
        className:
          "x6nvzda x4i4b9w xhl9efl xj65ea0 xog00wb x9oqtsu xk1krjo xqk4rbu x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x9f619 xzjbwwf x1p57kb1 xvtqlqk xvpt6g3 xdx6fka",
        children: s.jsxs(o("WAWebFlex.react").FlexColumn, {
          align: "start",
          xstyle: m.container,
          children: [
            s.jsx(r, { xstyle: m.icon, width: i, height: i, directional: !0 }),
            s.jsxs(o("WAWebFlex.react").FlexColumn, {
              xstyle: m.text,
              marginTop: 4,
              marginStart: 16,
              children: [
                s.jsx(o("WAWebText.react").WAWebTextSmall, {
                  color: "primary",
                  weight: "semibold",
                  textWrap: "wrap",
                  children: l,
                }),
                s.jsx(o("WAWebText.react").WAWebTextSmall, {
                  color: "wdsContentDeemphasized",
                  paddingTop: 2,
                  textWrap: "wrap",
                  xstyle: m.text,
                  children: n,
                }),
              ],
            }),
          ],
        }),
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
