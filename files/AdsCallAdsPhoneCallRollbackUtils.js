__d(
  "AdsCallAdsPhoneCallRollbackUtils",
  ["AdsInterfacesLogger", "AdsPromotedObjectTypes", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        e === void 0 && (e = !1),
        e ? r("qex")._("1958") === !0 : r("qex")._("1959") === !0
      );
    }
    function s(t) {
      return (
        t === void 0 && (t = !1),
        e(t)
          ? {
              conversion_location: r("AdsPromotedObjectTypes").PIXEL,
              source: "sales_phone_call_rollback",
            }
          : null
      );
    }
    function u(t) {
      return (
        t === void 0 && (t = !1),
        e(t)
          ? {
              conversion_location: r("AdsPromotedObjectTypes").ON_AD,
              source: "leads_phone_call_rollback",
            }
          : null
      );
    }
    function c(t, n, o, a, i) {
      var l,
        s = e(!0);
      r("AdsInterfacesLogger").log({
        eventName: "call_ads_redefault_preflight_exposure",
        data:
          ((l = {}),
          (l.ad_account_id = t.account_id),
          (l.campaign_id = i),
          (l.objective = n),
          (l.optimization_goal = a),
          (l.campaign_destination_type = o),
          (l.source = s ? "test" : "control"),
          l),
      });
    }
    ((l.isInCallAdsPhoneCallReDefaultQE = e),
      (l.maybeApplySalesPhoneCallRollback = s),
      (l.maybeApplyLeadsPhoneCallRollback = u),
      (l.logCallAdsReDefaultPreflightExposure = c));
  },
  98,
);
