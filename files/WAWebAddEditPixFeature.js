__d(
  "WAWebAddEditPixFeature",
  [
    "WAWebBusinessAddPixModalLoadable",
    "WAWebModalManager",
    "WAWebPaymentOnboardingFlowLoadable",
    "WAWebPixPaymentRequestFeature",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e, t, n) {
      o("WAWebPixPaymentRequestFeature").isPixPaymentRequestEnabled()
        ? o("WAWebModalManager").ModalManager.open(
            s.jsx(
              o("WAWebPaymentOnboardingFlowLoadable")
                .PaymentOnboardingFlowLoadable,
              { prefill: n, referral: t, previousScreen: e },
            ),
            { transition: "modal-flow" },
          )
        : o("WAWebModalManager").ModalManager.open(
            s.jsx(
              o("WAWebBusinessAddPixModalLoadable")
                .WAWebBizPaymentsBrazilAddPixModalLoadable,
              { prefill: n, referral: t, previousScreen: e },
            ),
          );
    }
    l.openPixCredentialManagementModal = u;
  },
  98,
);
