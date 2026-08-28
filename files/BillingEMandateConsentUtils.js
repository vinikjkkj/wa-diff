__d(
  "BillingEMandateConsentUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return (
        (e == null ? void 0 : e.requireEmandate) === !0 &&
        (e == null ? void 0 : e.isSupported) === !0 &&
        (e == null ? void 0 : e.supportsRecurring) === !0
      );
    }
    function l(t, n) {
      return n.inSaveAndPayFlow ? !1 : e(t) && !n.isPrepayOnly;
    }
    function s(t, n) {
      return n.inSaveAndPayFlow
        ? !1
        : e(t) && (!n.isPrepayOnly || n.eligibleForPostpayUpgrade);
    }
    ((i.isRecurringConsentRequired = l),
      (i.shouldShowRecurringConsentCheckbox = s));
  },
  66,
);
