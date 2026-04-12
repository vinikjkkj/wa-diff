__d(
  "WAWebSendPixPaymentRequestAmountInputHybridRow.react",
  ["fbt", "WAWebCurrencyUtils", "WDSTextField.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useState;
    function d(e, t, n, r) {
      if (e === "") return null;
      if (!o("WAWebCurrencyUtils").validateAmountString(t, e))
        return s._(
          /*BTDS*/ "Payment request will be sent without an amount attached.",
        );
      var a = o("WAWebCurrencyUtils").valueFromString(t, e);
      return a < r
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
        : a > n
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
          : null;
    }
    function m(e) {
      var t = e.currency,
        n = e.defaultAmount,
        a = e.maxAmount,
        i = e.minAmount,
        l = e.onValueChange,
        m = c(null),
        p = m[0],
        _ = m[1],
        f = function (n) {
          var e = n.trim();
          if (e === "") {
            (_(null), l(e));
            return;
          }
          var r = d(e, t, a, i);
          (_(r), l(e));
        };
      return u.jsx("div", {
        className: "xh8yej3",
        children: u.jsx(r("WDSTextField.react"), {
          prefix: o("WAWebCurrencyUtils").formatLocalSymbol(t),
          label: s._(/*BTDS*/ "Amount (optional)").toString(),
          defaultValue: n,
          onValueChange: f,
          error: !1,
          bottomText: p,
        }),
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
