__d(
  "WAWebPhoneNumberConfirmationModal.react",
  [
    "fbt",
    "WACcToIso",
    "WAIsoToCc",
    "WAPhoneFindCC",
    "WAWebConfirmationModal.react",
    "WAWebFlex.react",
    "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
    "WAWebLinkDevicePhoneNumberEntryScreen.react",
    "WAWebUISpacing",
    "react",
    "useWAWebConfirmationActions",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useRef,
      p = c.useState,
      _ = { error: { color: "x30a034", fontSize: "x1nxh6w3", $$css: !0 } };
    function f(e) {
      var t = e.actions,
        n = e.actionText,
        a = e.actionType,
        i = e.contentText,
        l = e.mePn,
        c = e.onCancel,
        f = e.onCompletion,
        g = e.successText,
        h = e.tsNavigationData,
        y = r("useWAWebConfirmationActions")(t, f, g),
        C = y.actionFailure,
        b = y.failureText,
        v = y.isRunningAction,
        S = y.runActions,
        R = p(!1),
        L = R[0],
        E = R[1],
        k = p(function () {
          var e = o("WAPhoneFindCC").findCC(l.user);
          return r("WACcToIso")[parseInt(e, 10)];
        }),
        I = k[0],
        T = k[1],
        D = p(""),
        x = D[0],
        $ = D[1],
        P = m(null),
        N = d(function (e, t) {
          (E(!1), T(e), $(t));
        }, []),
        M = d(
          function () {
            var e;
            if (
              I != null &&
              o(
                "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
              ).isPhoneNumberValid(r("WAIsoToCc")[I], x)
            ) {
              var t = "" + r("WAIsoToCc")[I] + x;
              if (t === l.user) {
                S();
                return;
              }
            }
            (E(!0), (e = P.current) == null || e.focus());
          },
          [S, x, I, l],
        );
      return u.jsxs(r("WAWebConfirmationModal.react"), {
        actionFailure: C,
        actionText: n,
        actionType: a,
        contentText: i,
        failureText: b,
        isInputEmpty: x === "",
        isRunningAction: v,
        onCancel: c,
        onSubmit: M,
        testidPrefix: "phone-number-confirmation-modal",
        tsNavigationData: h,
        children: [
          u.jsx(
            o("WAWebLinkDevicePhoneNumberEntryScreen.react").PhoneNumberSection,
            {
              shouldDisplayError: L,
              phoneNumberWithoutCountryCode: x,
              selectedCountryId: I,
              onSubmit: M,
              onChangePhoneNumber: N,
              onChangeSelectedCountry: T,
              isInsideModal: !0,
            },
          ),
          L &&
            u.jsx(o("WAWebFlex.react").FlexRow, {
              testid: void 0,
              xstyle: [o("WAWebUISpacing").uiMargin.top10, _.error],
              children: s._(
                /*BTDS*/ "The phone number you entered doesn't match your account.",
              ),
            }),
        ],
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);
