__d(
  "WAWebUserPrefsPaymentTos",
  [
    "WALogger",
    "WAWebProtobufSyncAction.pb",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsLocalStorage",
    "WAWebUserPrefsTypes",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return (
        e != null &&
        typeof (e == null ? void 0 : e.accepted) == "boolean" &&
        o("WAWebUserPrefsTypes").PaymentNotice.cast(e.paymentNotice) != null
      );
    }
    function u() {
      var e = r("WAWebUserPrefsLocalStorage").getItemFromLocalStorage(
        o("WAWebUserPrefsKeys").KEYS.PAYMENT_TOS,
      );
      return s(e) && e ? e : null;
    }
    function c(t) {
      var n;
      e: {
        if (
          t.paymentNotice ===
          o("WAWebProtobufSyncAction.pb")
            .SyncActionValue$PaymentTosAction$PaymentNotice
            .BR_PAY_PRIVACY_POLICY
        ) {
          n = o("WAWebUserPrefsTypes").PaymentNotice.BR_PAY_PRIVACY_POLICY;
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t.paymentNotice,
        );
      }
      var a = t.accepted;
      if (n == null) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "payment tos notice is null",
              ])),
          )
          .sendLogs("payment tos notice is null");
        return;
      }
      r("WAWebUserPrefsLocalStorage").setItemToLocalStorage(
        o("WAWebUserPrefsKeys").KEYS.PAYMENT_TOS,
        { paymentNotice: n, accepted: a },
      );
    }
    ((l.getPaymentTos = u), (l.setPaymentTos = c), (l.isPaymentTosValid = s));
  },
  98,
);
