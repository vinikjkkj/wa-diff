__d(
  "WAWebOrderIcons",
  [
    "WAWebCircledPlusCustomIcon",
    "WAWebProductCatalogProductThumb.react",
    "WAWebUISpacing",
    "WDSIconIcFormatListBulleted.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        addItemSVG: {
          borderTopWidth: "x1ktv7sr",
          borderInlineEndWidth: "x142x0oa",
          borderBottomWidth: "xv7zg05",
          borderInlineStartWidth: "x12dgle5",
          color: "xx2jlie",
          $$css: !0,
        },
        customItemSVG: { color: "xx2jlie", $$css: !0 },
      };
    function c() {
      return s.jsx("div", {
        className:
          "x6s0dn4 x16kknjp xyi3aci xwf5gio x1p453bz x1suzm8a xuh0odg x78zum5 xsdox4t x1useyqa",
        children: s.jsx(r("WDSIconIcFormatListBulleted.react"), {
          width: 20,
          height: 20,
          xstyle: [u.customItemSVG, o("WAWebUISpacing").uiMargin.allAuto],
        }),
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d() {
      return s.jsx("div", {
        className:
          "x6s0dn4 x16kknjp xyi3aci xwf5gio x1p453bz x1suzm8a xuh0odg x78zum5 xsdox4t x1useyqa",
        children: s.jsx(r("WAWebCircledPlusCustomIcon"), {
          wrapperStyles: [u.addItemSVG, o("WAWebUISpacing").uiMargin.allAuto],
          height: 18,
        }),
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t = e.mediaData,
        n = e.useCustomIcon;
      return n || t == null
        ? s.jsx(c, {})
        : s.jsx(o("WAWebProductCatalogProductThumb.react").ProductThumb, {
            mediaData: t,
            theme: "orderSquareThumb",
          });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.AddItemIcon = d),
      (l.OrderItemIcon = m));
  },
  98,
);
