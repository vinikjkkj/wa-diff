__d(
  "WAWebOrderAdditionalChargesTextInput",
  [
    "fbt",
    "WAWebOrderDetailAmountTypeSelector",
    "WAWebOrderDetailErrorUtils",
    "WAWebOrderDetailMath",
    "WAWebRichTextField.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useMemo;
    function d(e) {
      var t = e.currency,
        n = e.label,
        a = e.priceValue,
        i = e.setError,
        l = e.setSymbol,
        d = e.setText,
        m = e.symbol,
        p = e.testid,
        _ = e.text,
        f = c(
          function () {
            var e = o(
              "WAWebOrderDetailErrorUtils",
            ).additionalChargeErrorHandler({
              currency: t,
              enablePercentValueCheck: !0,
              fieldType: m,
              label: n,
              maxFlatValue: a / o("WAWebOrderDetailMath").DEFAULT_OFFSET,
              value: _,
            });
            return (i(!!e), e);
          },
          [_, n, m, t, i, a],
        );
      return u.jsxs("div", {
        className: "x1n2onr6",
        children: [
          u.jsx(o("WAWebRichTextField.react").RichTextField, {
            value: _,
            testid: p,
            placeholder: s._(
              /*BTDS*/ "{input_label} ({currency_or_percentage})",
              [
                s._param("input_label", n),
                s._param("currency_or_percentage", m),
              ],
            ),
            onChange: function (t) {
              return d(t.text);
            },
            theme: "small",
            maxLength: 10,
            customStyleThemes: [
              o("WAWebRichTextField.react").TextInputCustomStyleThemes
                .Desaturated,
            ],
            error: f,
          }),
          u.jsx("div", {
            className: "xtijo5x x10l6tqk xic2vs9 x11uqc5h",
            children: u.jsx(r("WAWebOrderDetailAmountTypeSelector"), {
              currency: t,
              value: m,
              onChange: function (t) {
                var e = t.value;
                return l(e);
              },
            }),
          }),
        ],
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
