__d(
  "performanceSummaryVisibleDeliveryStatusesSelector",
  [
    "AdsAccountStore",
    "AdsDynamicAdObjectsSelectors",
    "AdsLazyPluginLoadsProvider",
    "AdsMgmtDeliveryStatusCellContainerUtils",
    "AdsPEAdgroupSelectors",
    "AdsPECampaignGroupSelectors",
    "AdsPECampaignLiveSelectors",
    "AdsPECampaignSelectors",
    "LoadObject",
    "adsBusinessIntegrityUserCompleteAdPublishChallengeInfoSelector",
    "adsCreateSelector",
    "adsCreateStoreSelector",
    "getAdgroupErrorsSelector",
    "getAdgroupIssuesInfoDynamicSelector",
    "getCampaignErrorsSelector",
    "getCampaignGroupErrorsSelector",
    "getCampaignIssuesInfoDynamicSelector",
    "performanceSummaryDeliverySubstatusExclusionsSelector",
    "performanceSummarySelectedAdObjectsSelector",
    "performanceSummarySelectedAdObjects_WithCrepeSupportThunkSelector",
    "performanceSummaryVisibleDeliveryStatusesSelectorUtils",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["deliveryStatusInfo"],
      s,
      u = s || (s = o("react")),
      c = o("AdsDynamicAdObjectsSelectors").getAdsDynamicCampaignGroupSelector(
        "delivery_status",
      ),
      d = o("AdsDynamicAdObjectsSelectors").getAdsDynamicCampaignSelector(
        "delivery_status",
      ),
      m = o("AdsDynamicAdObjectsSelectors").getAdsDynamicAdgroupSelector(
        "delivery_status",
      ),
      p = r("adsCreateStoreSelector")(
        c.getStores(),
        function () {
          return function (e) {
            return c(e);
          };
        },
        { name: i.id + ".getCampaignGroupDeliveryStatusStoreSelector" },
      ),
      _ = r("adsCreateStoreSelector")(
        d.getStores(),
        function () {
          return function (e) {
            return d(e);
          };
        },
        { name: i.id + ".getCampaignDeliveryStatusStoreSelector" },
      ),
      f = r("adsCreateStoreSelector")(
        m.getStores(),
        function () {
          return function (e) {
            return m(e);
          };
        },
        { name: i.id + ".getAdgroupDeliveryStatusStoreSelector" },
      ),
      g = r("adsCreateSelector")(
        [
          p,
          _,
          f,
          r("getCampaignGroupErrorsSelector"),
          r("getCampaignErrorsSelector"),
          r("getAdgroupErrorsSelector"),
          r("getCampaignIssuesInfoDynamicSelector"),
          r("getAdgroupIssuesInfoDynamicSelector"),
          r("AdsAccountStore").getSelectedAccount,
          o("AdsPECampaignLiveSelectors").getByFieldsSelector,
          o("AdsPECampaignGroupSelectors").getByFieldsSelector,
          o("AdsPECampaignSelectors").getByFieldsSelector,
          o("AdsPEAdgroupSelectors").getByFieldsSelector,
          r("performanceSummarySelectedAdObjectsSelector"),
          r(
            "performanceSummarySelectedAdObjects_WithCrepeSupportThunkSelector",
          ),
          r("performanceSummaryDeliverySubstatusExclusionsSelector"),
          r("adsBusinessIntegrityUserCompleteAdPublishChallengeInfoSelector"),
          r("AdsLazyPluginLoadsProvider").toFluxSelector(),
        ],
        function (n, a, l, s, u, c, d, m, p, _, f, g, h, y, C, b, v) {
          var t = p.getValue(),
            S = v.getValue(),
            R = function (t) {
              return n(t).getValue();
            },
            L = function (t) {
              return a(t).getValue();
            },
            E = function (t) {
              return l(t).getValue();
            },
            k = function (t) {
              return d(t).getValue() || [];
            },
            I = function (t) {
              return m(t).getValue() || [];
            },
            T = function (t) {
              var e = _(t, {
                attribution_spec: null,
                destination_type: null,
                optimization_goal: null,
                promoted_object: null,
                start_time: null,
                is_eligible_for_advantage_plus_audience: null,
              });
              return e != null && e.hasError()
                ? null
                : e == null
                  ? void 0
                  : e.getValue();
            },
            D = function (t) {
              return g(t, { campaign_id: null, id: null }).getValue();
            },
            x = function (t) {
              return h(t, { adset_id: null, campaign_id: null }).getValue();
            },
            $ = function (t) {
              return f(t, {
                ad_creation_package_config: null,
                collaborative_ads_partner_info: null,
                daily_budget: null,
                lifetime_budget: null,
                objective: null,
                promoted_object: null,
              }).getValue();
            },
            P = function (n) {
              var t = n.deliveryStatusInfo,
                a = babelHelpers.objectWithoutPropertiesLoose(n, e),
                l = o("AdsMgmtDeliveryStatusCellContainerUtils").generateState(
                  babelHelpers.extends({}, a, {
                    deliveryStatusInfoLoadObject: r("LoadObject").withValue(t, {
                      creatorModuleID: i.id,
                    }),
                  }),
                );
              return l.hasValueWithoutError() ? l.getValue() : null;
            };
          return o(
            "performanceSummaryVisibleDeliveryStatusesSelectorUtils",
          ).performanceSummaryVisibleDeliveryStatuses(
            R,
            L,
            E,
            s,
            u,
            c,
            k,
            I,
            t,
            T,
            $,
            D,
            x,
            y,
            C,
            b,
            S,
            P,
          );
        },
        { name: i.id + ".performanceSummaryVisibleDeliveryStatusesSelector" },
      );
    l.performanceSummaryVisibleDeliveryStatusesSelector = g;
  },
  98,
);
