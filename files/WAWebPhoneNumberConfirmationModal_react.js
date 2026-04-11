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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(28),
        n = e.actions,
        a = e.actionText,
        i = e.actionType,
        l = e.contentText,
        c = e.mePn,
        d = e.onCancel,
        f = e.onCompletion,
        g = e.successText,
        h = e.tsNavigationData,
        y = r("useWAWebConfirmationActions")(n, f, g),
        C = y.actionFailure,
        b = y.failureText,
        v = y.isRunningAction,
        S = y.runActions,
        R = p(!1),
        L = R[0],
        E = R[1],
        k;
      t[0] !== c.user
        ? ((k = function () {
            var e = o("WAPhoneFindCC").findCC(c.user);
            return r("WACcToIso")[parseInt(e, 10)];
          }),
          (t[0] = c.user),
          (t[1] = k))
        : (k = t[1]);
      var I = p(k),
        T = I[0],
        D = I[1],
        x = p(""),
        $ = x[0],
        P = x[1],
        N = m(null),
        M;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = function (t, n) {
            (E(!1), D(t), P(n));
          }),
          (t[2] = M))
        : (M = t[2]);
      var w = M,
        A;
      t[3] !== c.user || t[4] !== $ || t[5] !== S || t[6] !== T
        ? ((A = function () {
            var e;
            if (
              T != null &&
              o(
                "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
              ).isPhoneNumberValid(r("WAIsoToCc")[T], $)
            ) {
              var t = "" + r("WAIsoToCc")[T] + $;
              if (t === c.user) {
                S();
                return;
              }
            }
            (E(!0), (e = N.current) == null || e.focus());
          }),
          (t[3] = c.user),
          (t[4] = $),
          (t[5] = S),
          (t[6] = T),
          (t[7] = A))
        : (A = t[7]);
      var F = A,
        O = $ === "",
        B;
      t[8] !== F || t[9] !== $ || t[10] !== T || t[11] !== L
        ? ((B = u.jsx(
            o("WAWebLinkDevicePhoneNumberEntryScreen.react").PhoneNumberSection,
            {
              shouldDisplayError: L,
              phoneNumberWithoutCountryCode: $,
              selectedCountryId: T,
              onSubmit: F,
              onChangePhoneNumber: w,
              onChangeSelectedCountry: D,
              isInsideModal: !0,
            },
          )),
          (t[8] = F),
          (t[9] = $),
          (t[10] = T),
          (t[11] = L),
          (t[12] = B))
        : (B = t[12]);
      var W;
      t[13] !== L
        ? ((W =
            L &&
            u.jsx(o("WAWebFlex.react").FlexRow, {
              testid: void 0,
              xstyle: [o("WAWebUISpacing").uiMargin.top10, _.error],
              children: s._(
                /*BTDS*/ "The phone number you entered doesn't match your account.",
              ),
            })),
          (t[13] = L),
          (t[14] = W))
        : (W = t[14]);
      var q;
      return (
        t[15] !== C ||
        t[16] !== a ||
        t[17] !== i ||
        t[18] !== l ||
        t[19] !== b ||
        t[20] !== F ||
        t[21] !== v ||
        t[22] !== d ||
        t[23] !== O ||
        t[24] !== B ||
        t[25] !== W ||
        t[26] !== h
          ? ((q = u.jsxs(r("WAWebConfirmationModal.react"), {
              actionFailure: C,
              actionText: a,
              actionType: i,
              contentText: l,
              failureText: b,
              isInputEmpty: O,
              isRunningAction: v,
              onCancel: d,
              onSubmit: F,
              testidPrefix: "phone-number-confirmation-modal",
              tsNavigationData: h,
              children: [B, W],
            })),
            (t[15] = C),
            (t[16] = a),
            (t[17] = i),
            (t[18] = l),
            (t[19] = b),
            (t[20] = F),
            (t[21] = v),
            (t[22] = d),
            (t[23] = O),
            (t[24] = B),
            (t[25] = W),
            (t[26] = h),
            (t[27] = q))
          : (q = t[27]),
        q
      );
    }
    l.default = f;
  },
  226,
);
