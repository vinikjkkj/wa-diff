__d(
  "WAWebOrderCatalogProductPrice",
  [
    "fbt",
    "$InternalEnum",
    "WAWebCurrencyUtils",
    "WAWebFlex.react",
    "WAWebFormatUprAmount",
    "WAWebOrderDetailAmountInput",
    "WAWebOrderDetailSharedStyles",
    "WAWebStopEvent",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = n("$InternalEnum").Mirrored([
        "Readonly",
        "EditableBlank",
        "EditableFilled",
        "Editing",
      ]);
    function m(t) {
      var n = t.currency,
        a = t.onEnter,
        i = t.onPriceChange,
        l = t.onPriceStageChange,
        u = t.orderItem,
        m = t.price,
        p = t.priceStage;
      switch (p) {
        case d.Editing:
          return c.jsx("div", {
            role: "textbox",
            onClick: o("WAWebStopEvent").stopPropagation,
            "data-testid": "catalog-product-price-editing",
            children: c.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              children: [
                c.jsx("span", {
                  className: "x1im30kd",
                  children: o("WAWebCurrencyUtils").formatAmount1000ToParts(
                    n,
                    0,
                  ).symbol,
                }),
                c.jsx(r("WAWebOrderDetailAmountInput"), {
                  currency: n,
                  value: m != null ? String(m / 1e3) : "",
                  onSave: function (t) {
                    (l(d.EditableFilled),
                      i(o("WAWebCurrencyUtils").valueFromString(n, t)));
                  },
                  onCancel: function () {
                    l(m == null ? d.EditableBlank : d.EditableFilled);
                  },
                }),
              ],
            }),
          });
        case d.EditableFilled:
          return c.jsx(
            "div",
            babelHelpers.extends(
              { role: "button" },
              (e || (e = r("stylex"))).props(
                r("WAWebOrderDetailSharedStyles").clickableText,
              ),
              {
                onClick: function (t) {
                  (l(d.Editing), t.stopPropagation());
                },
                "data-testid": "catalog-product-price-editable-filled",
                children: o("WAWebFormatUprAmount").formatUprAmount1000(
                  n,
                  Number(m),
                ),
              },
            ),
          );
        case d.EditableBlank:
          return c.jsx(
            "span",
            babelHelpers.extends(
              { role: "button" },
              (e || (e = r("stylex"))).props(
                r("WAWebOrderDetailSharedStyles").clickableText,
              ),
              {
                onClick: function (t) {
                  (l(d.Editing), t.stopPropagation());
                },
                "data-testid": "catalog-product-price-editable-blank",
                children: s._(/*BTDS*/ ""),
              },
            ),
          );
        default:
          return c.jsx("div", {
            "data-testid": "catalog-product-price-readonly",
            children: o("WAWebFormatUprAmount").formatUprAmount1000(n, u.price),
          });
      }
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.PriceStage = d),
      (l.CatalogProductPrice = m));
  },
  226,
);
