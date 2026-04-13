__d(
  "WAWebContactPhoneNumberField.react",
  [
    "fbt",
    "WAWebCheckmarkIcon.react",
    "WAWebFlex.react",
    "WAWebPhoneNumberInput.react",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useRef,
      m = c.useState,
      p = {
        inputRow: {
          borderBottomWidth: "xlxy82",
          borderBottomStyle: "x1q0q8m5",
          borderBottomColor: "x16pkwpw",
          $$css: !0,
        },
        inputFocused: { borderBottomColor: "x1rrvw3c", $$css: !0 },
        checkMark: { color: "xdlexau", $$css: !0 },
      };
    function _(e) {
      var t = o("react-compiler-runtime").c(21),
        n = e.countryCode,
        a = e.errorMessageDOMId,
        i = e.errorShown,
        l = e.isValid,
        c = e.numberWithoutPrefix,
        _ = e.onChange,
        f = e.onEnter,
        g = m(!1),
        h = g[0],
        y = g[1],
        C = d(null),
        b;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = "x1n2onr6 xeuugli"), (t[0] = b))
        : (b = t[0]);
      var v;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = u.jsx("div", {
            className: "x1pg5gke x1d3mw78 xm7witj",
            children: s._(/*BTDS*/ "Phone"),
          })),
          (t[1] = v))
        : (v = t[1]);
      var S = h && p.inputFocused,
        R;
      t[2] !== S ? ((R = [p.inputRow, S]), (t[2] = S), (t[3] = R)) : (R = t[3]);
      var L;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = [
            o("WAWebUISpacing").uiPadding.top9,
            o("WAWebUISpacing").uiPadding.bottom5,
          ]),
          (t[4] = L))
        : (L = t[4]);
      var E, k;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = function () {
            y(!1);
          }),
          (k = function () {
            y(!0);
          }),
          (t[5] = E),
          (t[6] = k))
        : ((E = t[5]), (k = t[6]));
      var I;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = s._(/*BTDS*/ "Phone number")), (t[7] = I))
        : (I = t[7]);
      var T;
      t[8] !== n ||
      t[9] !== a ||
      t[10] !== i ||
      t[11] !== c ||
      t[12] !== _ ||
      t[13] !== f
        ? ((T = u.jsx(o("WAWebFlex.react").FlexItem, {
            xstyle: L,
            grow: 1,
            shrink: 1,
            children: u.jsx(r("WAWebPhoneNumberInput.react"), {
              countryCodeIso: n,
              errorMessageDOMId: a,
              errorShown: i,
              onBlur: E,
              onFocus: k,
              onChange: _,
              onEnter: f,
              phoneNumberWithoutCountryPrefix: c,
              ref: C,
              showCountryPrefix: !1,
              ariaLabel: I,
            }),
          })),
          (t[8] = n),
          (t[9] = a),
          (t[10] = i),
          (t[11] = c),
          (t[12] = _),
          (t[13] = f),
          (t[14] = T))
        : (T = t[14]);
      var D;
      t[15] !== l
        ? ((D =
            l &&
            u.jsx(o("WAWebFlex.react").FlexItem, {
              grow: 0,
              shrink: 0,
              children: u.jsx(o("WAWebCheckmarkIcon.react").CheckmarkIcon, {
                xstyle: p.checkMark,
              }),
            })),
          (t[15] = l),
          (t[16] = D))
        : (D = t[16]);
      var x;
      return (
        t[17] !== D || t[18] !== R || t[19] !== T
          ? ((x = u.jsxs(o("WAWebFlex.react").FlexColumn, {
              className: b,
              grow: 1,
              align: "stretch",
              dir: "auto",
              children: [
                v,
                u.jsxs(o("WAWebFlex.react").FlexRow, {
                  xstyle: R,
                  align: "center",
                  children: [T, D],
                }),
              ],
            })),
            (t[17] = D),
            (t[18] = R),
            (t[19] = T),
            (t[20] = x))
          : (x = t[20]),
        x
      );
    }
    l.default = _;
  },
  226,
);
