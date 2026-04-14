__d(
  "WAWebMetaAIActionPills.react",
  ["WAWebUnstyledButton.react", "WDSText.react", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        pill: {
          display: "x78zum5",
          alignItems: "x6s0dn4",
          columnGap: "x1s70e7g",
          paddingTop: "x1xrf6ya",
          paddingBottom: "xscbp6u",
          paddingInlineStart: "x1phvje8",
          paddingInlineEnd: "xcldk2z",
          borderStartStartRadius: "xuqqiot",
          borderStartEndRadius: "x1lkg3h2",
          borderEndEndRadius: "x17mbzc4",
          borderEndStartRadius: "xcouhex",
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopColor: "xnj1f2r",
          borderInlineEndColor: "x2uibgs",
          borderBottomColor: "xkveyfu",
          borderInlineStartColor: "x12llq9",
          backgroundColor: "x16w0wmm",
          cursor: "x1ypdohk",
          ":hover_backgroundColor": "xkd4ks6",
          $$css: !0,
        },
        iconWrapper: {
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          $$css: !0,
        },
        iconColorOrange: { color: "x18s8g2y", $$css: !0 },
        iconColorPurple: { color: "x9dcp0r", $$css: !0 },
        iconColorCobalt: { color: "x1o3nzto", $$css: !0 },
        iconColorPink: { color: "x1nq7ysr", $$css: !0 },
      },
      d = {
        learn: c.iconColorOrange,
        write: c.iconColorPink,
        "create-image": c.iconColorCobalt,
        "get-advice": c.iconColorPurple,
      };
    function m(t) {
      var n = t.categories,
        o = t.onCategorySelect;
      return u.jsx("div", {
        className: "x78zum5 x1a02dak x8a3fw1 x1aj3ljl xl56j7k xh8yej3 xrlsmeg",
        children: n.map(function (t) {
          var n = t.Icon;
          return u.jsxs(
            r("WAWebUnstyledButton.react"),
            {
              onClick: function () {
                return o(t.id);
              },
              xstyle: c.pill,
              children: [
                u.jsx(
                  "span",
                  babelHelpers.extends(
                    {},
                    (e || (e = r("stylex"))).props(c.iconWrapper, d[t.id]),
                    { children: u.jsx(n, { height: 20, width: 20 }) },
                  ),
                ),
                u.jsx(r("WDSText.react"), {
                  colorName: "contentDefault",
                  type: "Body2",
                  children: t.label(),
                }),
              ],
            },
            t.id,
          );
        }),
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
