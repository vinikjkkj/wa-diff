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
    function u(e, t, n, r, a, i, l) {
      o("WAWebPixPaymentRequestFeature").isPixPaymentRequestEnabled()
        ? o("WAWebModalManager").ModalManager.open(
            s.jsx(
              o("WAWebPaymentOnboardingFlowLoadable")
                .PaymentOnboardingFlowLoadable,
              {
                asNewKey: l,
                onPixKeySaved: a,
                prefill: n,
                prefillOutcome: r,
                referral: t,
                previousScreen: e,
                saveSource: i,
              },
            ),
            { transition: "modal-flow" },
          )
        : o("WAWebModalManager").ModalManager.open(
            s.jsx(
              o("WAWebBusinessAddPixModalLoadable")
                .WAWebBizPaymentsBrazilAddPixModalLoadable,
              {
                asNewKey: l,
                onPixKeySaved: a,
                prefill: n,
                prefillOutcome: r,
                referral: t,
                previousScreen: e,
                saveSource: i,
              },
            ),
          );
    }
    l.openPixCredentialManagementModal = u;
  },
  98,
);
