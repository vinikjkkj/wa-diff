__d(
  "WAWebOrderIcons",
  [
    "WAWebCircledPlusCustomIcon",
    "WAWebProductCatalogProductThumb.react",
    "WAWebUISpacing",
    "WDSIconIcFormatListBulleted.react",
    "react",
    "react-compiler-runtime",
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
      var e = o("react-compiler-runtime").c(2),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = {
            className:
              "x6s0dn4 x16kknjp xyi3aci xwf5gio x1p453bz x1suzm8a xuh0odg x78zum5 xsdox4t x1useyqa",
          }),
          (e[0] = t))
        : (t = e[0]);
      var n;
      return (
        e[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = s.jsx(
              "div",
              babelHelpers.extends({}, t, {
                children: s.jsx(r("WDSIconIcFormatListBulleted.react"), {
                  width: 20,
                  height: 20,
                  xstyle: [
                    u.customItemSVG,
                    o("WAWebUISpacing").uiMargin.allAuto,
                  ],
                }),
              }),
            )),
            (e[1] = n))
          : (n = e[1]),
        n
      );
    }
    function d() {
      var e = o("react-compiler-runtime").c(2),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = {
            className:
              "x6s0dn4 x16kknjp xyi3aci xwf5gio x1p453bz x1suzm8a xuh0odg x78zum5 xsdox4t x1useyqa",
          }),
          (e[0] = t))
        : (t = e[0]);
      var n;
      return (
        e[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = s.jsx(
              "div",
              babelHelpers.extends({}, t, {
                children: s.jsx(r("WAWebCircledPlusCustomIcon"), {
                  wrapperStyles: [
                    u.addItemSVG,
                    o("WAWebUISpacing").uiMargin.allAuto,
                  ],
                  height: 18,
                }),
              }),
            )),
            (e[1] = n))
          : (n = e[1]),
        n
      );
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.mediaData,
        r = e.useCustomIcon,
        a;
      return (
        t[0] !== n || t[1] !== r
          ? ((a =
              r || n == null
                ? s.jsx(c, {})
                : s.jsx(
                    o("WAWebProductCatalogProductThumb.react").ProductThumb,
                    { mediaData: n, theme: "orderSquareThumb" },
                  )),
            (t[0] = n),
            (t[1] = r),
            (t[2] = a))
          : (a = t[2]),
        a
      );
    }
    ((l.AddItemIcon = d), (l.OrderItemIcon = m));
  },
  98,
);
