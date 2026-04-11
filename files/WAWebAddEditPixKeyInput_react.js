__d(
  "WAWebAddEditPixKeyInput.react",
  [
    "fbt",
    "PixWamLogger",
    "WAWebBizPaymentsBrazilAddPixModal.react",
    "WAWebBrazilPixKeyValidationUtils",
    "WAWebFlex.react",
    "WAWebUserPrefsTypes",
    "WAWebWamEnumPaymentActionTargets",
    "WAWebWamEnumPaymentActionTypes",
    "WDSTextField.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useState,
      d = {
        row: {
          height: "xdd8jsf",
          paddingTop: "x1xrf6ya",
          paddingBottom: "xvpt6g3",
          width: "xh8yej3",
          $$css: !0,
        },
        column: { width: "xh8yej3", $$css: !0 },
      };
    function m(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.error,
        a = e.onValueChange,
        i = e.pixKey,
        l = e.pixKeyType,
        m = e.previousScreenName,
        p = e.referral,
        _ = e.screen,
        f = c(!0),
        g = f[0],
        h = f[1],
        y;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = { className: "xh8yej3" }), (t[0] = y))
        : (y = t[0]);
      var C =
          o("WAWebUserPrefsTypes").PixKeyType.PHONE === l
            ? o("WAWebBizPaymentsBrazilAddPixModal.react").BRAZIL_PHONE_PREFIX
            : "",
        b;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = s._(/*BTDS*/ "Key")), (t[1] = b))
        : (b = t[1]);
      var v = n != null,
        S;
      t[2] !== m || t[3] !== p || t[4] !== _ || t[5] !== g
        ? ((S = function () {
            g &&
              (o("PixWamLogger").logPixSenderEvent(
                o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS
                  .PIX_NAME,
                o("WAWebWamEnumPaymentActionTypes").PAYMENT_ACTION_TYPES.ENTER,
                m,
                p,
                _,
                null,
                null,
              ),
              h(!1));
          }),
          (t[2] = m),
          (t[3] = p),
          (t[4] = _),
          (t[5] = g),
          (t[6] = S))
        : (S = t[6]);
      var R;
      return (
        t[7] !== n ||
        t[8] !== a ||
        t[9] !== i ||
        t[10] !== C ||
        t[11] !== v ||
        t[12] !== S
          ? ((R = u.jsx(o("WAWebFlex.react").FlexRow, {
              xstyle: d.row,
              align: "start",
              justify: "start",
              children: u.jsx(o("WAWebFlex.react").FlexColumn, {
                xstyle: d.column,
                align: "start",
                justify: "center",
                children: u.jsx(
                  "div",
                  babelHelpers.extends({}, y, {
                    "data-testid": void 0,
                    children: u.jsx(r("WDSTextField.react"), {
                      prefix: C,
                      label: b,
                      defaultValue: i,
                      onValueChange: a,
                      error: v,
                      errorText: n,
                      value: i,
                      onFocus: S,
                    }),
                  }),
                ),
              }),
            })),
            (t[7] = n),
            (t[8] = a),
            (t[9] = i),
            (t[10] = C),
            (t[11] = v),
            (t[12] = S),
            (t[13] = R))
          : (R = t[13]),
        R
      );
    }
    function p(e, t) {
      var n = _(e, t);
      return n ? null : s._(/*BTDS*/ "Invalid pix key");
    }
    function _(e, t) {
      var n =
        t === o("WAWebUserPrefsTypes").PixKeyType.PHONE
          ? o("WAWebBizPaymentsBrazilAddPixModal.react").BRAZIL_PHONE_PREFIX + e
          : e;
      return o("WAWebBrazilPixKeyValidationUtils").validatePixKey(t, n);
    }
    ((l.WAWebAddEditPixKeyInput = m),
      (l.getPixKeyInputError = p),
      (l.validatePixKey = _));
  },
  226,
);
