__d(
  "BillingWizardMAIBASupportUtils",
  ["AdsAIUtils", "FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      try {
        e == null || e.logClickEvent(t, n);
      } catch (e) {}
    }
    function s(e, t) {
      try {
        var n = r("FBLogger")("billing_interfaces_platform");
        t instanceof Error ? n.catching(t).warn(e) : n.warn(e);
      } catch (e) {}
    }
    function u(e) {
      try {
        e == null || e();
      } catch (e) {}
    }
    function c(e, t, n) {
      var r = (t == null ? void 0 : t()) === !0;
      return (e || u(n), r);
    }
    function d(e, t, n, r, a, i, l, s, u, d, m) {
      var p = (e || t) && !n && !(e && r !== "desktop"),
        _ =
          p &&
          (e
            ? o("AdsAIUtils").getIsAdsAIBetaM2AvailableOnCurrentSurface(
                "useBillingWizardMAIBASupportButtonCallerGated",
                !1,
                "Billing & Payments",
              )
            : a
              ? o("AdsAIUtils").getIsAdsAIBetaM2AvailableOnCurrentSurface(
                  "useBillingWizardMAIBASupportButton",
                  !0,
                  "Billing & Payments",
                )
              : o("AdsAIUtils").getIsAdsAIBetaM2AvailableOnCurrentSurface(
                  "useBillingWizardMAIBASupportButton",
                )),
        f = (function (e) {
          return ((typeof e == "object" && e !== null) ||
            typeof e == "function") &&
            e.isCallerGated === !0 &&
            e.isMAIBAAvailable === !0 &&
            e.isPaymentRisk === !0
            ? !l || c(s, d, m)
            : ((typeof e == "object" && e !== null) ||
                  typeof e == "function") &&
                e.isCallerGated === !0 &&
                e.isMAIBAAvailable === !0
              ? !l || (s ? (d == null ? void 0 : d()) === !0 : u() === !0)
              : ((typeof e == "object" && e !== null) ||
                    typeof e == "function") &&
                  e.isCallerGated === !0
                ? !1
                : ((typeof e == "object" && e !== null) ||
                      typeof e == "function") &&
                    e.isMAIBAAvailable === !0 &&
                    e.isPaymentRisk === !0
                  ? c(s, d, m)
                  : ((typeof e == "object" && e !== null) ||
                        typeof e == "function") &&
                      e.isMAIBAAvailable === !0 &&
                      e.isMsite === !0 &&
                      e.isSupportedFailure === !0
                    ? !0
                    : ((typeof e == "object" && e !== null) ||
                          typeof e == "function") &&
                        e.isMAIBAAvailable === !0 &&
                        e.isSupportedFailure === !0
                      ? u() === !0
                      : !1;
        })({
          isCallerGated: e,
          isMAIBAAvailable: _,
          isMsite: a,
          isPaymentRisk: i,
          isSupportedFailure: t,
        });
      return { isMAIBAAvailable: _, isQEEnabled: f };
    }
    ((l.logPaymentRiskClick = e),
      (l.logBillingMAIBALaunchWarning = s),
      (l.logPaymentRiskQEExposureSafely = u),
      (l.getMAIBAEligibility = d));
  },
  98,
);
