__d(
  "adsBillingEventIsBillingEventDisabledByAccountEligibity",
  [
    "AdsAPIBillingEvents",
    "AdsAccountStore",
    "AdsAccountUtils",
    "adsBillingEventIsBillingEventValidForObjectiveAndOptimizationGoalDEPRECATED",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      if (
        !r(
          "adsBillingEventIsBillingEventValidForObjectiveAndOptimizationGoalDEPRECATED",
        )(e, t, n)
      )
        return !1;
      var o = r("AdsAccountUtils").hasCapability(
        r("AdsAccountStore").getSelectedAccount().getValue(),
        "CAN_USE_LINK_CLICK_BILLING_EVENT",
      );
      return !o && t === r("AdsAPIBillingEvents").LINK_CLICKS;
    }
    l.default = e;
  },
  98,
);
