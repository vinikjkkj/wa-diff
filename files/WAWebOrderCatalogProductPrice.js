__d(
  "WAWebOrderCatalogProductPrice",
  [
    "fbt",
    "$InternalEnum",
    "WAWebCurrencyUtils",
    "WAWebFlex.react",
    "WAWebOrderDetailAmountInput",
    "WAWebOrderDetailSharedStyles",
    "WAWebStopEvent",
    "WAWebUISpacing",
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
            "data-testid": void 0,
            children: c.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              children: [
                c.jsx(
                  "span",
                  babelHelpers.extends(
                    {},
                    (e || (e = r("stylex"))).props(
                      o("WAWebUISpacing").uiPadding.end3,
                    ),
                    {
                      children: o("WAWebCurrencyUtils").formatAmount1000ToParts(
                        n,
                        0,
                      ).symbol,
                    },
                  ),
                ),
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
                "data-testid": void 0,
                children: o("WAWebCurrencyUtils").formatAmount1000(
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
                "data-testid": void 0,
                children: s._(/*BTDS*/ "Enter price"),
              },
            ),
          );
        default:
          return c.jsx("div", {
            "data-testid": void 0,
            children: o("WAWebCurrencyUtils").formatAmount1000(n, u.price),
          });
      }
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.PriceStage = d),
      (l.CatalogProductPrice = m));
  },
  226,
);
