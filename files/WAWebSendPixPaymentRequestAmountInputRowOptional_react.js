__d(
  "WAWebSendPixPaymentRequestAmountInputRowOptional.react",
  [
    "fbt",
    "PixPaymentRequestFeature",
    "WAWebCurrencyUtils",
    "WAWebFlex.react",
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
      var t = o("react-compiler-runtime").c(18),
        n = e.currency,
        a = e.defaultAmount,
        i = e.maxAmount,
        l = e.minAmount,
        s = e.onValueChange,
        p;
      t[0] !== n || t[1] !== a || t[2] !== i || t[3] !== l
        ? ((p = d(a, n, i, l)),
          (t[0] = n),
          (t[1] = a),
          (t[2] = i),
          (t[3] = l),
          (t[4] = p))
        : (p = t[4]);
      var _ = c(p),
        f = _[0],
        g = _[1],
        h;
      t[5] !== n || t[6] !== i || t[7] !== l || t[8] !== s
        ? ((h = function (t) {
            var e = t.trim(),
              r = d(e, n, i, l);
            (g(r), s(e));
          }),
          (t[5] = n),
          (t[6] = i),
          (t[7] = l),
          (t[8] = s),
          (t[9] = h))
        : (h = t[9]);
      var y = h,
        C;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = { className: "xh8yej3" }), (t[10] = C))
        : (C = t[10]);
      var b;
      t[11] !== n
        ? ((b = o("WAWebCurrencyUtils").formatLocalSymbol(n)),
          (t[11] = n),
          (t[12] = b))
        : (b = t[12]);
      var v;
      return (
        t[13] !== a || t[14] !== y || t[15] !== f || t[16] !== b
          ? ((v = u.jsx(o("WAWebFlex.react").FlexRow, {
              xstyle: m.row,
              align: "start",
              justify: "start",
              children: u.jsx(o("WAWebFlex.react").FlexColumn, {
                xstyle: m.column,
                align: "start",
                justify: "start",
                children: u.jsx(
                  "div",
                  babelHelpers.extends({}, C, {
                    children: u.jsx(r("WDSTextField.react"), {
                      prefix: b,
                      label: "0",
                      floatingLabel: !1,
                      defaultValue: a,
                      onValueChange: y,
                      error: !1,
                      bottomText: f,
                    }),
                  }),
                ),
              }),
            })),
            (t[13] = a),
            (t[14] = y),
            (t[15] = f),
            (t[16] = b),
            (t[17] = v))
          : (v = t[17]),
        v
      );
    }
    l.default = p;
  },
  226,
);
