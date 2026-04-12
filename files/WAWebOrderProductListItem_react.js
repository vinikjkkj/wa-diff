__d(
  "WAWebOrderProductListItem.react",
  [
    "fbt",
    "WAWebCellFrame.react",
    "WAWebCurrencyUtils",
    "WAWebEmojiText.react",
    "WAWebFlex.react",
    "WAWebOrderItemGetters",
    "WAWebProductCatalogProductThumb.react",
    "WAWebText_DONOTUSE.react",
    "WAWebUISpacing",
    "isNonZeroNumber",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d(t) {
      var n,
        a,
        i = t.onClick,
        l = t.product,
        u = c.jsx(o("WAWebEmojiText.react").EmojiText, {
          text: l.name,
          ellipsify: !0,
          titlify: !0,
        }),
        d = c.jsx(o("WAWebProductCatalogProductThumb.react").ProductThumb, {
          mediaData: o("WAWebOrderItemGetters").getMediaData(l),
          theme: "list",
        }),
        m = s._(/*BTDS*/ "Quantity {item-quantity}", [
          s._param("item-quantity", l.quantity),
        ]),
        p = null;
      l.quantity &&
        (p = c.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
          className: (e || (e = r("stylex")))(
            o("WAWebUISpacing").uiMargin.vert0,
            o("WAWebUISpacing").uiMargin.start0,
            o("WAWebUISpacing").uiMargin.end6,
          ),
          children: m,
        }));
      var _ = null;
      o("isNonZeroNumber").isNonZeroNumber(l.price) &&
        (_ = c.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
          className: (e || (e = r("stylex")))(
            o("WAWebUISpacing").uiMargin.vert0,
            o("WAWebUISpacing").uiMargin.start0,
            o("WAWebUISpacing").uiMargin.end6,
          ),
          children: o("WAWebCurrencyUtils").formatAmount1000(
            l.currency,
            l.price,
          ),
        }));
      var f = null;
      _ != null &&
        (f = c.jsx(
          "span",
          babelHelpers.extends(
            {},
            (e || (e = r("stylex"))).props(
              o("WAWebUISpacing").uiMargin.vert0,
              o("WAWebUISpacing").uiMargin.start0,
              o("WAWebUISpacing").uiMargin.end6,
            ),
            { children: "\u2022" },
          ),
        ));
      var g =
          (n =
            (a = l.properties) == null
              ? void 0
              : a.map(function (e) {
                  var t = e[0],
                    n = e[1];
                  return c.jsx(
                    o("WAWebFlex.react").FlexRow,
                    {
                      children: c.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
                        children: s._(
                          /*BTDS*/ "{propertyName}: {propertyValue}",
                          [
                            s._param("propertyName", t),
                            s._param("propertyValue", n),
                          ],
                        ),
                      }),
                    },
                    t + "-" + n,
                  );
                })) != null
            ? n
            : [],
        h = c.jsxs(o("WAWebFlex.react").FlexColumn, {
          children: [
            c.jsxs(o("WAWebFlex.react").FlexRow, { children: [_, f, p] }),
            g.length > 0 &&
              c.jsx(o("WAWebFlex.react").FlexColumn, { children: g }),
          ],
        });
      return c.jsx(
        r("WAWebCellFrame.react"),
        {
          image: d,
          customImage: !0,
          primary: u,
          secondary: h,
          theme: "order-product",
          onClick: i,
        },
        l.id.toString(),
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
