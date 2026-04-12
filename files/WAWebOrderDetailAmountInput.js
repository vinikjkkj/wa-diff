__d(
  "WAWebOrderDetailAmountInput",
  [
    "fbt",
    "WAWebCurrencyUtils",
    "WAWebOrderDetailErrorUtils",
    "WAWebOrderDetailMath",
    "WAWebRichTextField.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState;
    function d(e, t) {
      if (
        e == null ||
        !e.length ||
        !o("WAWebCurrencyUtils").validatePriceString(t, e)
      )
        return s._(/*BTDS*/ "Enter a valid price");
      var n =
        o("WAWebCurrencyUtils").valueFromString(t, e) /
        o("WAWebOrderDetailMath").DEFAULT_OFFSET;
      if (n < 0) return s._(/*BTDS*/ "Enter a positive price");
    }
    function m(e) {
      var t = e.currency,
        n = e.onCancel,
        r = e.onSave,
        a = e.value,
        i = c(null),
        l = i[0],
        m = i[1],
        p = c(a),
        _ = p[0],
        f = p[1];
      return (
        o("WAWebOrderDetailErrorUtils").useShowToastErrors({
          productPriceError: l,
        }),
        u.jsx("div", {
          className: "xs9mwh0 x6ikm8r x10wlt62 x1yc453h x1dmp6jm x1j8ymqv",
          children: u.jsx(o("WAWebRichTextField.react").RichTextField, {
            managed: !0,
            constrainedWidth: !0,
            hideFloatingLabel: !0,
            focusOnMount: !0,
            editable: !0,
            lockable: !0,
            startActive: !0,
            placeholder: s._(/*BTDS*/ "Price"),
            value: _,
            theme: "default",
            maxLength: 12,
            customStyleThemes: [
              o("WAWebRichTextField.react").TextInputCustomStyleThemes
                .DisabledLabel,
              o("WAWebRichTextField.react").TextInputCustomStyleThemes
                .NoErrorInfo,
            ],
            testid: void 0,
            validate: function (n) {
              var e = d(n, t);
              return (m(e), !e);
            },
            onChange: function (n) {
              var e = n.text;
              (f(e), m(d(e, t)));
            },
            onSave: function () {
              r(_);
            },
            onCancel: n,
            error: l,
          }),
        })
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
