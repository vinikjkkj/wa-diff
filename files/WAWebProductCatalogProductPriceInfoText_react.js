__d(
  "WAWebProductCatalogProductPriceInfoText.react",
  [
    "fbt",
    "WAWebBizGetProductQuantityCartAction",
    "WAWebCurrencyUtils",
    "WAWebEmojiText.react",
    "WAWebProductSelectors",
    "WAWebProductTypes.flow",
    "WAWebStrikethroughFormatMutator",
    "isStringNullOrEmpty",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["fallback", "product", "showAvailabilityNotice", "showTotalPrice"],
      u,
      c = u || (u = o("react")),
      d = function (t) {
        return t ===
          o("WAWebProductTypes.flow").ProductAvailability.OUT_OF_STOCK
          ? s._(/*BTDS*/ "Out of stock")
          : t ===
              o("WAWebProductTypes.flow").ProductAvailability
                .AVAILABLE_FOR_ANOTHER_POSTCODE
            ? s._(/*BTDS*/ "Not available in your postcode")
            : null;
      },
      m = function (t, n) {
        return o("WAWebCurrencyUtils").formatAmount1000(n, t);
      };
    function p(t) {
      var n = t.fallback,
        a = n === void 0 ? null : n,
        i = t.product,
        l = t.showAvailabilityNotice,
        u = l === void 0 ? !1 : l,
        p = t.showTotalPrice,
        _ = p === void 0 ? !1 : p,
        f = babelHelpers.objectWithoutPropertiesLoose(t, e),
        g = i.currency,
        h = i.priceAmount1000,
        y = o("WAWebProductSelectors").getActivePrice(i);
      if (r("isStringNullOrEmpty")(g) || h == null || y == null) return a;
      var C = 1,
        b = i.catalogWid,
        v = i.id;
      _ &&
        v != null &&
        b &&
        (C = r("WAWebBizGetProductQuantityCartAction")(v.toString(), b));
      var S = m(y * C, g),
        R = m(h * C, g),
        L = function () {
          var e = o("WAWebProductSelectors").isSalePriceActive(i)
              ? S + " ~" + R + "~"
              : S,
            t = d(i.availability);
          return u && t != null
            ? s._(/*BTDS*/ "{price} \u2022 {availability}", [
                s._param("price", e),
                s._param("availability", t),
              ])
            : s._(/*BTDS*/ "{price}", [s._param("price", e)]);
        };
      return c.jsx(
        o("WAWebEmojiText.react").EmojiText,
        babelHelpers.extends({}, f, {
          text: L(),
          formatters: [
            [
              [
                r("WAWebStrikethroughFormatMutator"),
                { selectable: f.selectable },
              ],
            ],
          ],
          ellipsify: !0,
        }),
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
