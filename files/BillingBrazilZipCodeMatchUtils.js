__d(
  "BillingBrazilZipCodeMatchUtils",
  ["BillingWizardRootUPLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 8;
    function s(t) {
      return t.trim().replace(/\D/g, "").slice(0, e);
    }
    function u(t) {
      var n = t.trim().replace(/\D/g, "");
      return n.length === e && n !== "00000000";
    }
    function c(e, t, n) {
      var o = { FAIL: "fail", INIT: "init", SUCCESS: "success" };
      r("BillingWizardRootUPLogger") == null ||
        r("BillingWizardRootUPLogger").logEvent({
          event_action: "fetch",
          event_result: o[t],
          event_side: "client",
          extra_data: n,
          target_name: e,
        });
    }
    ((l.BR_ZIP_CODE_DIGITS = e),
      (l.cleanBRZipCode = s),
      (l.validateBRZipCode = u),
      (l.logCepAutofillEvent = c));
  },
  98,
);
