__d(
  "AdsSmartDefaultPageUtils",
  [
    "AdsInterfacesLogger",
    "AdsManagerIGLoginUtils",
    "AdsODAXUtils",
    "adsCFCampaignIsNew",
    "adsCFGetDefaultPageUIState_HACK",
    "getUnfilteredDefaultData_DO_NOT_CALL_DIRECTLY",
    "igAccessAdsManagerUtils",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        o = (n = e.promoted_object) == null ? void 0 : n.page_id;
      return r("isTruthy")(o)
        ? o
        : r("isTruthy")(t == null ? void 0 : t.id)
          ? t == null
            ? void 0
            : t.id
          : null;
    }
    function s(e, t) {
      var n,
        a = r("getUnfilteredDefaultData_DO_NOT_CALL_DIRECTLY")(e, t);
      if (a == null) {
        var i;
        return (
          r("AdsInterfacesLogger").log({
            eventName: "threeco_l2_conversion_location_default",
            data:
              ((i = {}),
              (i.action_type = "NONE"),
              (i.custom_event_type = "default"),
              (i.objective = t.objective),
              (i.campaign_group_id = t.id),
              i),
          }),
          null
        );
      }
      if (
        (r("AdsInterfacesLogger").log({
          eventName: "threeco_l2_conversion_location_default",
          data:
            ((n = {}),
            (n.action_type = a.conversion_location),
            (n.custom_event_type = "default"),
            (n.objective = t.objective),
            (n.campaign_group_id = t.id),
            n),
        }),
        o("AdsManagerIGLoginUtils").getIsIGLogin(e))
      ) {
        var l = o(
          "AdsManagerIGLoginUtils",
        ).getIgLoginSupportedAdsPromotedObjects(t.objective);
        if (!l.includes(a.conversion_location)) return null;
        if (o("igAccessAdsManagerUtils").isIGAccessParityEnabled()) return a;
      }
      return a;
    }
    function u(e, t, n, a, i) {
      var l;
      if (e == null) return null;
      if (!n || o("AdsODAXUtils").isODAXSalesCatalogCampaignGroup(t)) {
        var u;
        return (
          r("AdsInterfacesLogger").log({
            eventName: "page_defaulting_result",
            data:
              ((u = {}),
              (u.ad_account_id = e.account_id),
              (u.source = n ? "skip_sales_catalog" : "skip_existing_campaign"),
              (u.objective = t.objective),
              u),
          }),
          null
        );
      }
      var c = s(e, t),
        d = c == null ? void 0 : c.default_page_id;
      return (
        r("AdsInterfacesLogger").log({
          eventName: "page_defaulting_result",
          data:
            ((l = {}),
            (l.ad_account_id = e.account_id),
            (l.page_id = d),
            (l.source = d != null ? "smart_default" : "smart_default_null"),
            (l.objective = t.objective),
            (l.message = JSON.stringify({
              conversion_location: c == null ? void 0 : c.conversion_location,
              model_source: c == null ? void 0 : c.source,
            })),
            l),
        }),
        d
      );
    }
    function c(t, n, o) {
      var a;
      return e(
        t,
        r("adsCFGetDefaultPageUIState_HACK")(
          (a = u(n, o, r("adsCFCampaignIsNew")(t))) != null ? a : void 0,
        ),
      );
    }
    ((l.getPageIDForPromotedObject = e),
      (l.getDefaultData = s),
      (l.getSmartDefaultPageID = u),
      (l.getDefaultPageID = c));
  },
  98,
);
