__d(
  "WAWebOpenPaymentDetails",
  [
    "WAWebDrawerManager",
    "WAWebKeyboardTabUtils",
    "WAWebPaymentDetailsFlowLoadable",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e, t) {
      o("WAWebDrawerManager").DrawerManager.openDrawerRight(
        s.jsx(
          o("WAWebPaymentDetailsFlowLoadable").WAWebPaymentDetailsFlowLoadable,
          { paymentMsg: e },
          e.id.toString(),
        ),
        {
          transition: "slide-left",
          focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
          noFocus: !0,
          uim: t,
        },
      );
    }
    l.openPaymentDetails = u;
  },
  98,
);
