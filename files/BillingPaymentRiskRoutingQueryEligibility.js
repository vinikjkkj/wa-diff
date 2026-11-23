__d(
  "BillingPaymentRiskRoutingQueryEligibility",
  ["ALToolTab"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        e === "desktop" &&
        o("ALToolTab").getCurrentToolTab().tool !== "Instagram"
      );
    }
    function s(e, t, n) {
      return (
        t === "desktop" &&
        n !== "Instagram" &&
        e.maiba_payment_risk_wizard_support.enabled.read({
          do_not_log_exposure_iknowwhatimdoing: !0,
        }) === !0
      );
    }
    function u(e, t) {
      return s(e, t, o("ALToolTab").getCurrentToolTab().tool);
    }
    ((l.isBillingCVCOSupportSurface = e),
      (l.isBillingPaymentRiskRoutingQueryEligible = s),
      (l.shouldIncludeBillingPaymentRiskRouting = u));
  },
  98,
);
