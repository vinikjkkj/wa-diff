__d(
  "WAWebOrderIcons",
  [
    "WAWebCircledPlusCustomIcon",
    "WAWebProductCatalogProductThumb.react",
    "WDSIconIcShoppingCart.react",
    "WDSMargins.stylex",
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
          "x6s0dn4 x16kknjp xyi3aci xwf5gio x1p453bz x1suzm8a x1gnnqk1 x78zum5 xn3w4p2 x187nhsf",
        children: s.jsx(r("WDSIconIcShoppingCart.react"), {
          width: 20,
          height: 20,
          xstyle: [
            u.customItemSVG,
            o("WDSMargins.stylex").wdsMargins.marginAuto,
          ],
        }),
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d() {
      return s.jsx("div", {
        className:
          "x6s0dn4 x16kknjp xyi3aci xwf5gio x1p453bz x1suzm8a x1gnnqk1 x78zum5 xn3w4p2 x187nhsf",
        children: s.jsx(r("WAWebCircledPlusCustomIcon"), {
          wrapperStyles: [
            u.addItemSVG,
            o("WDSMargins.stylex").wdsMargins.marginAuto,
          ],
          height: 18,
          width: 18,
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
