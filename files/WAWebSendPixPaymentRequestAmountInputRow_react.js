__d(
  "WAWebSendPixPaymentRequestAmountInputRow.react",
  [
    "fbt",
    "PixPaymentRequestFeature",
    "PixWamLogger",
    "WAWebCurrencyUtils",
    "WAWebFlex.react",
    "WAWebWamEnumPaymentActionTargets",
    "WAWebWamEnumPaymentActionTypes",
    "WDSTextField.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useState;
    function d(e, t, n, r) {
      if (!o("WAWebCurrencyUtils").validateAmountString(t, e))
        return s._(/*BTDS*/ "Enter a valid amount");
      var a = o("WAWebCurrencyUtils").valueFromString(t, e);
      return a < r
        ? s
            ._(
              /*BTDS*/ "Amount cannot be less than {payment_request_min_allowed_amount}",
              [
                s._param(
                  "payment_request_min_allowed_amount",
                  o("WAWebCurrencyUtils").formatAmount1000(t, r, {
                    trailingZeroDisplay: "stripIfInteger",
                  }),
                ),
              ],
            )
            .toString()
        : a > n
          ? s
              ._(
                /*BTDS*/ "Amount cannot exceed {payment_request_max_allowed_amount}",
                [
                  s._param(
                    "payment_request_max_allowed_amount",
                    o("WAWebCurrencyUtils").formatAmount1000(t, n, {
                      trailingZeroDisplay: "stripIfInteger",
                    }),
                  ),
                ],
              )
              .toString()
          : null;
    }
    function m(e) {
      return e ===
        o("PixPaymentRequestFeature").PixPaymentRequestVariant
          .PAYMENT_REQUEST_STANDARD_WITH_EDUCATION
        ? o("PixPaymentRequestFeature").getPaymentRequestEducationText()
        : s._(/*BTDS*/ "Enter amount");
    }
    var p = {
      row: { height: "x13swhlj", width: "xh8yej3", $$css: !0 },
      column: { width: "xh8yej3", height: "x14nwjz3", $$css: !0 },
    };
    function _(e) {
      var t = e.chat,
        n = e.currency,
        a = e.defaultAmount,
        i = e.maxAmount,
        l = e.minAmount,
        s = e.onValueChange,
        _ = e.pixData,
        f = e.previousScreenName,
        g = e.referral,
        h = e.screen,
        y = c(null),
        C = y[0],
        b = y[1],
        v = c(!0),
        S = v[0],
        R = v[1],
        L = function (t) {
          var e = d(t, n, i, l);
          (b(e), s(t, e != null));
        };
      return u.jsx(o("WAWebFlex.react").FlexRow, {
        xstyle: p.row,
        align: "start",
        justify: "start",
        children: u.jsx(o("WAWebFlex.react").FlexColumn, {
          xstyle: p.column,
          align: "start",
          justify: "center",
          children: u.jsx("div", {
            className: "xh8yej3",
            children: u.jsx(r("WDSTextField.react"), {
              prefix: o("WAWebCurrencyUtils").formatLocalSymbol(n),
              label: a,
              floatingLabel: !1,
              onValueChange: L,
              error: C != null,
              errorText: C,
              bottomText: m(
                o("PixPaymentRequestFeature").getPixPaymentRequestVariant(),
              ),
              onFocus: function () {
                S &&
                  (o("PixWamLogger").logPixSenderEvent(
                    o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS
                      .PIX_PAYMENT_REQUEST_AMOUNT_INPUT,
                    o("WAWebWamEnumPaymentActionTypes").PAYMENT_ACTION_TYPES
                      .CLICK,
                    f,
                    g,
                    h,
                    t,
                    _,
                  ),
                  R(!1));
              },
            }),
          }),
        }),
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
