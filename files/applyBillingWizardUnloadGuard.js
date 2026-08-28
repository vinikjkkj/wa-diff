__d(
  "applyBillingWizardUnloadGuard",
  ["BillingWizardCustomerBehaviorLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      e
        ? r("BillingWizardCustomerBehaviorLogger").registerUnloadListener()
        : r("BillingWizardCustomerBehaviorLogger").deregisterUnloadListener();
    }
    l.default = e;
  },
  98,
);
