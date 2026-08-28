__d(
  "BillingHubUpiAddGatingUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
      return e === "MV4BBillableAccount" && t && n !== !0;
    }
    function l(e) {
      return e === "LPMCredential";
    }
    function s(e, t, n) {
      return e === "MV4BBillableAccount" && t && l(n);
    }
    ((i.shouldBlockUpiAddOnHub = e),
      (i.isUpiPrimaryCredential = l),
      (i.shouldDisableAddPmForUpiLock = s));
  },
  66,
);
