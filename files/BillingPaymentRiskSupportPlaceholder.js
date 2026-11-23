__d(
  "BillingPaymentRiskSupportPlaceholder",
  ["ALToolTab", "AdsAIUtils", "BillingPaymentRiskRoutingUtils", "justknobx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      if (
        t !== "desktop" ||
        o("ALToolTab").getCurrentToolTab().tool === "Instagram"
      )
        return null;
      var a =
          e.maiba_payment_risk_wizard_support.enabled.read({
            do_not_log_exposure_iknowwhatimdoing: !0,
          }) === !0,
        i = r("justknobx")._("6721");
      return (!a && !i) ||
        !o("AdsAIUtils").getIsAdsAIBetaM2AvailableOnCurrentSurface(
          "useBillingWizardMAIBASupportButton",
          !1,
          "Billing & Payments",
        )
        ? null
        : a &&
            n != null &&
            o(
              "BillingPaymentRiskRoutingUtils",
            ).canResolveBillingPaymentRiskRouting(t, n) &&
            r("justknobx")._("6722")
          ? "LOADING"
          : "DISABLED";
    }
    function s(e, t) {
      try {
        if (
          t !== "desktop" ||
          o("ALToolTab").getCurrentToolTab().tool === "Instagram" ||
          r("justknobx")._("6721") ||
          !o("AdsAIUtils").getIsAdsAIBetaM2AvailableOnCurrentSurface(
            "useBillingWizardMAIBASupportButton",
            !1,
            "Billing & Payments",
          )
        )
          return;
        e.maiba_payment_risk_wizard_support.enabled.log();
      } catch (e) {}
    }
    ((l.getBillingPaymentRiskSupportPlaceholder = e),
      (l.logBillingPaymentRiskSupportQEExposure = s));
  },
  98,
);
