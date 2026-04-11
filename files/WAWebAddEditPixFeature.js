__d(
  "WAWebAddEditPixFeature",
  [
    "PixPaymentRequestFeature",
    "WAWebABProps",
    "WAWebBusinessAddPixModalLoadable",
    "WAWebModalManager",
    "WAWebPaymentOnboardingFlowLoadable",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u() {
      return o("WAWebABProps").getABPropConfigValue("payments_br_pix_on_web");
    }
    function c(e, t) {
      o("PixPaymentRequestFeature").isPixPaymentRequestEnabled()
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
              { referral: "chat_banner", previousScreen: "chat_banner" },
            ),
          );
    }
    ((l.isAddEditPixEnabled = u), (l.openPixCredentialManagementModal = c));
  },
  98,
);
