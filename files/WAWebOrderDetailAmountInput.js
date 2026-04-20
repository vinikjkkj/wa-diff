__d(
  "WAWebOrderDetailAmountInput",
  [
    "fbt",
    "WAWebCurrencyUtils",
    "WAWebOrderDetailErrorUtils",
    "WAWebOrderDetailMath",
    "WAWebRichTextField.react",
    "react",
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(18),
        n = e.currency,
        r = e.onCancel,
        a = e.onSave,
        i = e.value,
        l = c(null),
        m = l[0],
        p = l[1],
        _ = c(i),
        f = _[0],
        g = _[1],
        h;
      (t[0] !== m
        ? ((h = { productPriceError: m }), (t[0] = m), (t[1] = h))
        : (h = t[1]),
        o("WAWebOrderDetailErrorUtils").useShowToastErrors(h));
      var y;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = {
            className: "xs9mwh0 x6ikm8r x10wlt62 x1yc453h x1dmp6jm x1j8ymqv",
          }),
          (t[2] = y))
        : (y = t[2]);
      var C;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = s._(/*BTDS*/ "Price")), (t[3] = C))
        : (C = t[3]);
      var b;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = [
            o("WAWebRichTextField.react").TextInputCustomStyleThemes
              .DisabledLabel,
            o("WAWebRichTextField.react").TextInputCustomStyleThemes
              .NoErrorInfo,
          ]),
          (t[4] = b))
        : (b = t[4]);
      var v, S;
      t[5] !== n
        ? ((v = function (t) {
            var e = d(t, n);
            return (p(e), !e);
          }),
          (S = function (t) {
            var e = t.text;
            (g(e), p(d(e, n)));
          }),
          (t[5] = n),
          (t[6] = v),
          (t[7] = S))
        : ((v = t[6]), (S = t[7]));
      var R;
      t[8] !== f || t[9] !== a
        ? ((R = function () {
            a(f);
          }),
          (t[8] = f),
          (t[9] = a),
          (t[10] = R))
        : (R = t[10]);
      var L;
      return (
        t[11] !== m ||
        t[12] !== f ||
        t[13] !== r ||
        t[14] !== v ||
        t[15] !== S ||
        t[16] !== R
          ? ((L = u.jsx(
              "div",
              babelHelpers.extends({}, y, {
                children: u.jsx(o("WAWebRichTextField.react").RichTextField, {
                  managed: !0,
                  constrainedWidth: !0,
                  hideFloatingLabel: !0,
                  focusOnMount: !0,
                  editable: !0,
                  lockable: !0,
                  startActive: !0,
                  placeholder: C,
                  value: f,
                  theme: "default",
                  maxLength: 12,
                  customStyleThemes: b,
                  testid: "order-detail-amount-input",
                  validate: v,
                  onChange: S,
                  onSave: R,
                  onCancel: r,
                  error: m,
                }),
              }),
            )),
            (t[11] = m),
            (t[12] = f),
            (t[13] = r),
            (t[14] = v),
            (t[15] = S),
            (t[16] = R),
            (t[17] = L))
          : (L = t[17]),
        L
      );
    }
    l.default = m;
  },
  226,
);
