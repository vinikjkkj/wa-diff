__d(
  "WAWebOrderAdditionalChargesTextInput",
  [
    "fbt",
    "WAWebOrderDetailAmountTypeSelector",
    "WAWebRichTextField.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.currency,
        n = e.errorText,
        a = e.label,
        i = e.setSymbol,
        l = e.setText,
        c = e.symbol,
        d = e.testid,
        m = e.text;
      return u.jsxs("div", {
        className: "x1n2onr6",
        children: [
          u.jsx(o("WAWebRichTextField.react").RichTextField, {
            value: m,
            testid: d,
            placeholder: s._(/*BTDS*/ "", [
              s._param("input_label", a),
              s._param("currency_or_percentage", c),
            ]),
            onChange: function (t) {
              return l(t.text);
            },
            theme: "small",
            maxLength: 10,
            customStyleThemes: [
              o("WAWebRichTextField.react").TextInputCustomStyleThemes
                .Desaturated,
            ],
            error: n,
          }),
          u.jsx("div", {
            className: "xtijo5x x10l6tqk xic2vs9 x11uqc5h",
            children: u.jsx(r("WAWebOrderDetailAmountTypeSelector"), {
              currency: t,
              value: c,
              onChange: function (t) {
                var e = t.value;
                return i(e);
              },
            }),
          }),
        ],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
