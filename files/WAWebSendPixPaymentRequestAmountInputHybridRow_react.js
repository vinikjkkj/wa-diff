__d(
  "WAWebSendPixPaymentRequestAmountInputHybridRow.react",
  [
    "fbt",
    "WAWebCurrencyUtils",
    "WDSTextField.react",
    "react",
    "react-compiler-runtime",
  ],
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
      var t = o("react-compiler-runtime").c(14),
        n = e.currency,
        a = e.defaultAmount,
        i = e.maxAmount,
        l = e.minAmount,
        m = e.onValueChange,
        p = c(null),
        _ = p[0],
        f = p[1],
        g;
      t[0] !== n || t[1] !== i || t[2] !== l || t[3] !== m
        ? ((g = function (t) {
            var e = t.trim();
            if (e === "") {
              (f(null), m(e));
              return;
            }
            var r = d(e, n, i, l);
            (f(r), m(e));
          }),
          (t[0] = n),
          (t[1] = i),
          (t[2] = l),
          (t[3] = m),
          (t[4] = g))
        : (g = t[4]);
      var h = g,
        y;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = { className: "xh8yej3" }), (t[5] = y))
        : (y = t[5]);
      var C;
      t[6] !== n
        ? ((C = o("WAWebCurrencyUtils").formatLocalSymbol(n)),
          (t[6] = n),
          (t[7] = C))
        : (C = t[7]);
      var b;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = s._(/*BTDS*/ "Amount (optional)").toString()), (t[8] = b))
        : (b = t[8]);
      var v;
      return (
        t[9] !== a || t[10] !== h || t[11] !== _ || t[12] !== C
          ? ((v = u.jsx(
              "div",
              babelHelpers.extends({}, y, {
                children: u.jsx(r("WDSTextField.react"), {
                  prefix: C,
                  label: b,
                  defaultValue: a,
                  onValueChange: h,
                  error: !1,
                  bottomText: _,
                }),
              }),
            )),
            (t[9] = a),
            (t[10] = h),
            (t[11] = _),
            (t[12] = C),
            (t[13] = v))
          : (v = t[13]),
        v
      );
    }
    l.default = m;
  },
  226,
);
