__d(
  "WAWebOpenPaymentDetails",
  [
    "WAWebDrawerManager",
    "WAWebKeyboardTabUtils",
    "WAWebPaymentDetailsFlowLoadable",
    "WAWebPaymentDetailsLogger",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e, t) {
      d(
        e,
        o("WAWebPaymentDetailsLogger").PaymentDetailsReferral.CHAT_BUBBLE,
        t,
      );
    }
    function c(e) {
      d(
        e,
        o("WAWebPaymentDetailsLogger").PaymentDetailsReferral.SYSTEM_MESSAGE,
      );
    }
    function d(e, t, n) {
      (o("WAWebPaymentDetailsLogger").logPaymentDetailsView(
        { paymentMsg: e, referral: t },
        {
          screen: o("WAWebPaymentDetailsLogger").PaymentDetailsScreen
            .PAYMENT_DETAILS,
        },
      ),
        o("WAWebDrawerManager").DrawerManager.openDrawerRight(
          s.jsx(
            o("WAWebPaymentDetailsFlowLoadable")
              .WAWebPaymentDetailsFlowLoadable,
            { paymentMsg: e, referral: t },
            e.id.toString() + "_" + t,
          ),
          {
            transition: "slide-left",
            focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
            noFocus: !0,
            uim: n,
          },
        ));
    }
    ((l.openPaymentDetails = u), (l.openPaymentDetailsFromReceiptNotice = c));
  },
  98,
);
