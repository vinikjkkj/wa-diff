__d(
  "AdsUEditorCampaignSetTargetingRelaxOptionReducerPlugin",
  [
    "AdsDataAtom",
    "AdsPECampaignGroupSelectors",
    "AdsPECampaignSelectors",
    "AdsSelectorUtils",
    "AdsTargetingAsSignalUtils",
    "AdsUEditorCampaignSetTargetingSignalAction",
    "AdsUEditorHostIDs",
    "Promise",
    "SignalsCapabilityDataProvider",
    "onlyx",
    "promiseDone",
    "promiseStoreGet",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(t) {
      var a = r("onlyx")(t.responses),
        l = [],
        c = [],
        d = [],
        m = [];
      (a.fragments.forEach(function (e) {
        e.ad_object_type === "ad_set" && c.push(e.ad_object_id);
      }),
        c.length !== 0 &&
          ((u || (u = r("AdsDataAtom"))).waitFor(
            (s || (s = o("AdsSelectorUtils"))).getStoreDispatchTokens([
              o("AdsPECampaignSelectors").getByFieldsSelector,
              o("AdsPECampaignGroupSelectors").getByFieldsSelector,
            ]),
          ),
          c.forEach(function (e) {
            var t;
            m.push(e);
            var n = o("AdsPECampaignSelectors")
                .getByFieldsSelector()(
                  e,
                  {
                    id: null,
                    campaign_id: null,
                    promoted_object: null,
                    optimization_goal: null,
                  },
                  i.id,
                )
                .getValueEnforcing(),
              a = (t = n.promoted_object) == null ? void 0 : t.pixel_id;
            if (a != null) {
              var s = r("promiseStoreGet")(
                r("SignalsCapabilityDataProvider").toFluxStore(),
                function () {
                  return r("SignalsCapabilityDataProvider")().get(a);
                },
              );
              (l.push(s), d.push(a));
            }
          }),
          r("promiseDone")(
            (e || (e = n("Promise"))).all(l).then(function (e) {
              r("AdsUEditorCampaignSetTargetingSignalAction").dispatch(
                {
                  hostID: r("AdsUEditorHostIDs").EDITING,
                  campaignIDs: m,
                  capability: o(
                    "AdsTargetingAsSignalUtils",
                  ).getPixelIDToCapabilitiesMap(d, e),
                  triggerActionType: t.actionType,
                  duplicationSource: t.source,
                },
                {
                  line: "77",
                  module:
                    "AdsUEditorCampaignSetTargetingRelaxOptionReducerPlugin.js",
                  moduleID: i.id,
                },
              );
            }),
          )));
    }
    var d = {
        reduce: function (t, n) {
          n.responses.length === 1 && c(n);
        },
      },
      m = d;
    l.default = m;
  },
  98,
);
