__d(
  "MAIBAChatElevation",
  ["MAIBAChatElevationState", "WebStorage"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = "maiba_billing_failed_payment_auto_open_owner";
    function c(e) {
      var t = (s || (s = r("WebStorage"))).getSessionStorage();
      if (e) (s || (s = r("WebStorage"))).setItemGuarded(t, u, "true");
      else
        try {
          t == null || t.removeItem(u);
        } catch (e) {}
    }
    (o(
      "MAIBAChatElevationState",
    ).configureBillingFailedPaymentAutoOpenChatOwnership(
      ((e = (s || (s = r("WebStorage"))).getSessionStorageForRead()) == null
        ? void 0
        : e.getItem(u)) === "true",
      c,
    ),
      (l.MAIBAElevationSource = o(
        "MAIBAChatElevationState",
      ).MAIBAElevationSource),
      (l.MAIBAPersistentHostContextProvider = o(
        "MAIBAChatElevationState",
      ).MAIBAPersistentHostContextProvider),
      (l.applyBillingFailedPaymentAutoOpenChatOwned = o(
        "MAIBAChatElevationState",
      ).applyBillingFailedPaymentAutoOpenChatOwned),
      (l.applyMAIBAElevatedAboveModal = o(
        "MAIBAChatElevationState",
      ).applyMAIBAElevatedAboveModal),
      (l.applyMAIBAElevationHost = o(
        "MAIBAChatElevationState",
      ).applyMAIBAElevationHost),
      (l.getHasMAIBAElevationHost = o(
        "MAIBAChatElevationState",
      ).getHasMAIBAElevationHost),
      (l.getIsBillingFailedPaymentAutoOpenChatOwned = o(
        "MAIBAChatElevationState",
      ).getIsBillingFailedPaymentAutoOpenChatOwned),
      (l.getIsMAIBAElevationSourceActive = o(
        "MAIBAChatElevationState",
      ).getIsMAIBAElevationSourceActive),
      (l.useHasMAIBAElevationHost = o(
        "MAIBAChatElevationState",
      ).useHasMAIBAElevationHost),
      (l.useHasMAIBAPersistentHost = o(
        "MAIBAChatElevationState",
      ).useHasMAIBAPersistentHost),
      (l.useIsBillingFailedPaymentAutoOpenChatOwned = o(
        "MAIBAChatElevationState",
      ).useIsBillingFailedPaymentAutoOpenChatOwned),
      (l.useIsMAIBAElevatedAboveModal = o(
        "MAIBAChatElevationState",
      ).useIsMAIBAElevatedAboveModal),
      (l.useIsMAIBAElevationSourceActive = o(
        "MAIBAChatElevationState",
      ).useIsMAIBAElevationSourceActive));
  },
  98,
);
