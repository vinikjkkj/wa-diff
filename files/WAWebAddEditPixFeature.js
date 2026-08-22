__d(
  "WAWebAddEditPixFeature",
  [
    "WAWebABProps",
    "WAWebBusinessAddPixModalLoadable",
    "WAWebModalManager",
    "WAWebPaymentOnboardingFlowLoadable",
    "WAWebPixPaymentRequestFeature",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u() {
      return o("WAWebABProps").getABPropConfigValue("payments_br_pix_on_web");
    }
    function c(e, t) {
      o("WAWebPixPaymentRequestFeature").isPixPaymentRequestEnabled()
        ? o("WAWebModalManager").ModalManager.open(
            s.jsx(
              o("WAWebPaymentOnboardingFlowLoadable")
                .PaymentOnboardingFlowLoadable,
              { referral: t, previousScreen: e },
            ),
            { transition: "modal-flow" },
          )
        : o("WAWebModalManager").ModalManager.open(
            s.jsx(
              o("WAWebBusinessAddPixModalLoadable")
                .WAWebBizPaymentsBrazilAddPixModalLoadable,
              { referral: t, previousScreen: e },
            ),
          );
    }
    ((l.isAddEditPixEnabled = u), (l.openPixCredentialManagementModal = c));
  },
  98,
);
