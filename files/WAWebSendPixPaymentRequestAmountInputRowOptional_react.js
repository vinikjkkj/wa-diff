__d(
  "WAWebSendPixPaymentRequestAmountInputRowOptional.react",
  [
    "fbt",
    "PixPaymentRequestFeature",
    "WAWebCurrencyUtils",
    "WAWebFlex.react",
    "WDSTextField.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useState;
    function d(e, t, n, r) {
      var a = o("PixPaymentRequestFeature").getPaymentRequestEducationText();
      if (e === "") return a;
      if (!o("WAWebCurrencyUtils").validateAmountString(t, e))
        return s._(
          /*BTDS*/ "Payment request will be sent without an amount attached.",
        );
      var i = o("WAWebCurrencyUtils").valueFromString(t, e);
      return i < r
        ? s._(
            /*BTDS*/ "Requests less than {payment_request_min_allowed_amount} will be sent without an amount attached.",
            [
              s._param(
                "payment_request_min_allowed_amount",
                o("WAWebCurrencyUtils").formatAmount1000(t, r, {
                  trailingZeroDisplay: "stripIfInteger",
                }),
              ),
            ],
          )
        : i > n
          ? s._(
              /*BTDS*/ "You can request up to {payment_request_max_allowed_amount} with a specified amount. For higher amounts, your request will be sent without an amount attached.",
              [
                s._param(
                  "payment_request_max_allowed_amount",
                  o("WAWebCurrencyUtils").formatAmount1000(t, n, {
                    trailingZeroDisplay: "stripIfInteger",
                  }),
                ),
              ],
            )
          : a;
    }
    var m = {
      row: { height: "x13swhlj", width: "xh8yej3", $$css: !0 },
      column: { width: "xh8yej3", height: "x14nwjz3", $$css: !0 },
    };
    function p(e) {
      var t = e.currency,
        n = e.defaultAmount,
        a = e.maxAmount,
        i = e.minAmount,
        l = e.onValueChange,
        s = c(d(n, t, a, i)),
        p = s[0],
        _ = s[1],
        f = function (n) {
          var e = n.trim(),
            r = d(e, t, a, i);
          (_(r), l(e));
        };
      return u.jsx(o("WAWebFlex.react").FlexRow, {
        xstyle: m.row,
        align: "start",
        justify: "start",
        children: u.jsx(o("WAWebFlex.react").FlexColumn, {
          xstyle: m.column,
          align: "start",
          justify: "start",
          children: u.jsx("div", {
            className: "xh8yej3",
            children: u.jsx(r("WDSTextField.react"), {
              prefix: o("WAWebCurrencyUtils").formatLocalSymbol(t),
              label: "0",
              floatingLabel: !1,
              defaultValue: n,
              onValueChange: f,
              error: !1,
              bottomText: p,
            }),
          }),
        }),
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
