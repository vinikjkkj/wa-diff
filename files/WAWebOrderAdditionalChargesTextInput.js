__d(
  "WAWebOrderAdditionalChargesTextInput",
  [
    "fbt",
    "WAWebOrderDetailAmountTypeSelector",
    "WAWebRichTextField.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(23),
        n = e.currency,
        a = e.errorText,
        i = e.label,
        l = e.setSymbol,
        c = e.setText,
        d = e.symbol,
        m = e.testid,
        p = e.text,
        _;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = { className: "x1n2onr6" }), (t[0] = _))
        : (_ = t[0]);
      var f;
      t[1] !== i || t[2] !== d
        ? ((f = s._(/*BTDS*/ "{input_label} ({currency_or_percentage})", [
            s._param("input_label", i),
            s._param("currency_or_percentage", d),
          ])),
          (t[1] = i),
          (t[2] = d),
          (t[3] = f))
        : (f = t[3]);
      var g;
      t[4] !== c
        ? ((g = function (t) {
            return c(t.text);
          }),
          (t[4] = c),
          (t[5] = g))
        : (g = t[5]);
      var h;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = [
            o("WAWebRichTextField.react").TextInputCustomStyleThemes
              .Desaturated,
          ]),
          (t[6] = h))
        : (h = t[6]);
      var y;
      t[7] !== a || t[8] !== f || t[9] !== g || t[10] !== m || t[11] !== p
        ? ((y = u.jsx(o("WAWebRichTextField.react").RichTextField, {
            value: p,
            testid: m,
            placeholder: f,
            onChange: g,
            theme: "small",
            maxLength: 10,
            customStyleThemes: h,
            error: a,
          })),
          (t[7] = a),
          (t[8] = f),
          (t[9] = g),
          (t[10] = m),
          (t[11] = p),
          (t[12] = y))
        : (y = t[12]);
      var C;
      t[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = { className: "xtijo5x x10l6tqk xic2vs9 x11uqc5h" }),
          (t[13] = C))
        : (C = t[13]);
      var b;
      t[14] !== l
        ? ((b = function (t) {
            var e = t.value;
            return l(e);
          }),
          (t[14] = l),
          (t[15] = b))
        : (b = t[15]);
      var v;
      t[16] !== n || t[17] !== d || t[18] !== b
        ? ((v = u.jsx(
            "div",
            babelHelpers.extends({}, C, {
              children: u.jsx(r("WAWebOrderDetailAmountTypeSelector"), {
                currency: n,
                value: d,
                onChange: b,
              }),
            }),
          )),
          (t[16] = n),
          (t[17] = d),
          (t[18] = b),
          (t[19] = v))
        : (v = t[19]);
      var S;
      return (
        t[20] !== y || t[21] !== v
          ? ((S = u.jsxs(
              "div",
              babelHelpers.extends({}, _, { children: [y, v] }),
            )),
            (t[20] = y),
            (t[21] = v),
            (t[22] = S))
          : (S = t[22]),
        S
      );
    }
    l.default = c;
  },
  226,
);
