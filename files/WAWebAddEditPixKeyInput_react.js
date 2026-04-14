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
      var t = e.error,
        n = e.onValueChange,
        a = e.pixKey,
        i = e.pixKeyType,
        l = e.previousScreenName,
        m = e.referral,
        p = e.screen,
        _ = c(!0),
        f = _[0],
        g = _[1];
      return u.jsx(o("WAWebFlex.react").FlexRow, {
        xstyle: d.row,
        align: "start",
        justify: "start",
        children: u.jsx(o("WAWebFlex.react").FlexColumn, {
          xstyle: d.column,
          align: "start",
          justify: "center",
          children: u.jsx("div", {
            className: "xh8yej3",
            "data-testid": void 0,
            children: u.jsx(r("WDSTextField.react"), {
              prefix:
                o("WAWebUserPrefsTypes").PixKeyType.PHONE === i
                  ? o("WAWebBizPaymentsBrazilAddPixModal.react")
                      .BRAZIL_PHONE_PREFIX
                  : "",
              label: s._(/*BTDS*/ "Key"),
              defaultValue: a,
              onValueChange: n,
              error: t != null,
              errorText: t,
              value: a,
              onFocus: function () {
                f &&
                  (o("PixWamLogger").logPixSenderEvent(
                    o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS
                      .PIX_NAME,
                    o("WAWebWamEnumPaymentActionTypes").PAYMENT_ACTION_TYPES
                      .ENTER,
                    l,
                    m,
                    p,
                    null,
                    null,
                  ),
                  g(!1));
              },
            }),
          }),
        }),
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
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
