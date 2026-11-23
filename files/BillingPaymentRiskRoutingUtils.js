__d(
  "BillingPaymentRiskRoutingUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = { status: "UNKNOWN" },
      l = 5e3;
    function s(e, t) {
      return (
        e === "desktop" &&
        t.supportContext != null &&
        t.paymentAccountID != null &&
        t.paymentAccountID !== "" &&
        t.adAccountID != null &&
        t.adAccountID !== "" &&
        t.isRoutingEligible
      );
    }
    function u(t, n, r) {
      if (n == null || n.payment_legacy_account_id !== t) return e;
      var o = n.ad_account,
        a = o == null ? void 0 : o.legacy_account_id;
      if (
        o == null ||
        a == null ||
        a === "" ||
        (r != null && r !== "" && r !== a)
      )
        return e;
      var i = o.account_status,
        l =
          i === "DISABLED"
            ? null
            : i === "ACTIVE" ||
                i === "CLOSED" ||
                i === "IN_GRACE_PERIOD" ||
                i === "PENDING_CLOSURE" ||
                i === "PENDING_RISK_REVIEW" ||
                i === "PENDING_SETTLEMENT" ||
                i === "UNSETTLED"
              ? { adAccountID: a, status: "VERIFIED_NOT_PAYMENT_RISK_DISABLED" }
              : e;
      if (l != null) return l;
      var s = o.account_disabled_reason;
      return s === "RISK_PAYMENT"
        ? { adAccountID: a, status: "PAYMENT_RISK_DISABLED" }
        : s === "ADS_AFC_REVIEW" ||
            s === "ADS_INTEGRITY_POLICY" ||
            s === "ADS_IP_REVIEW" ||
            s === "AOAB_DESHARE_LEGAL_ENTITY" ||
            s === "BUSINESS_INTEGRITY_RAR" ||
            s === "BUSINESS_MANAGER_INTEGRITY_POLICY" ||
            s === "COMPLIANCE_KYX" ||
            s === "COMPLIANCE_SANCTIONS_DEMONETIZATION" ||
            s === "COMPLIANCE_SANCTIONS_DISABLE" ||
            s === "COMPROMISED_AD_ACCOUNT" ||
            s === "CTX_THREAD_REVIEW" ||
            s === "FINANCIAL_INTEGRITY_POLICY" ||
            s === "GRAY_ACCOUNT_SHUT_DOWN" ||
            s === "MISREPRESENTED_AD_ACCOUNT" ||
            s === "MI_BAD_DEBT" ||
            s === "NONE" ||
            s === "PERMANENT_CLOSE" ||
            s === "PERMANENT_DISABLE_OUTSIDE_APPEAL_WINDOW" ||
            s === "RISK_OVER_DELIVERY_FOR_ADS_DELIVERY" ||
            s === "UMBRELLA_AD_ACCOUNT" ||
            s === "UNUSED_ACCOUNT" ||
            s === "UNUSED_RESELLER_ACCOUNT"
          ? { adAccountID: a, status: "VERIFIED_NOT_PAYMENT_RISK_DISABLED" }
          : e;
    }
    ((i.ROUTING_LAUNCH_FALLBACK_MS = l),
      (i.canResolveBillingPaymentRiskRouting = s),
      (i.resolveBillingPaymentRiskRouting = u));
  },
  66,
);
