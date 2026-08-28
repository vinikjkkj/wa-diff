__d(
  "AdsUEditorCampaignSetTargetingSpecReducerPlugin",
  [
    "AdsAPICampaignRecord",
    "AdsAPITargetFields",
    "AdsCampaignRecordAccessors",
    "AdsEmptyValue",
    "AdsMutators",
    "AdsPlacementTargetingFields",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignSelectors",
    "AdsUEditorCampaignSetTargetingSpecActionFlux",
    "AdsUEditorCampaignTargetingReducerUtils",
    "AdsUEditorMessagingDestinationUtils",
    "ODS",
    "adsDSABeneficiaryAndPayorAutofillValuesSelector",
    "isEmpty",
    "mapObject",
    "maybeUpdateCampaignDSASpec",
    "maybeUpdateCampaignRegulationsSpec",
    "whitelistObjectKeys",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = r("AdsAPICampaignRecord").getSpec().targeting,
      d = {
        reduce: o("AdsUEditorCampaignTargetingReducerUtils").createReducer(
          {
            autofillValues: o("adsDSABeneficiaryAndPayorAutofillValuesSelector")
              .adsDSABeneficiaryAndPayorAutofillValuesSelector,
            objectiveMap: o(
              "AdsUEditorCampaignSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorCampaignGroupAdObjectsUtils").getObjective,
            ),
          },
          function (e, t, n) {
            var a = n.autofillValues,
              i = n.objectiveMap;
            t.targetingSpecDiff != null && m(t.targetingSpecDiff);
            var l = t.campaignIDs.reduce(function (e, n, o) {
              var a = (s || (s = r("mapObject")))(
                t.targetingBulkSpec,
                function (e) {
                  return e instanceof r("AdsEmptyValue")
                    ? void 0
                    : e.getValueForIndex(o);
                },
              );
              return ((e[n] = a), e);
            }, {});
            return o("AdsMutators").mutateEach(
              e,
              t.campaignIDs,
              function (e, t) {
                var n,
                  s,
                  d,
                  m,
                  p,
                  _,
                  f = (n = e.targeting) != null ? n : {},
                  g = r("whitelistObjectKeys")(
                    f,
                    [].concat(r("AdsPlacementTargetingFields"), [
                      r("AdsAPITargetFields").IS_WHATSAPP_DESTINATION_AD,
                      r("AdsAPITargetFields").PRODUCT_AUDIENCE_SPECS,
                      r("AdsAPITargetFields").EXCLUDED_PRODUCT_AUDIENCE_SPECS,
                    ]),
                  ),
                  h = l[t];
                Object.values(r("AdsAPITargetFields")).forEach(function (e) {
                  (u || (u = r("isEmpty")))(h[e]) && delete h[e];
                });
                var y = babelHelpers.extends(
                    {},
                    r("whitelistObjectKeys")(f, [
                      r("AdsAPITargetFields").PLACE_PAGE_SET_IDS,
                    ]),
                    h,
                    g,
                  ),
                  C = o("AdsMutators").chain(
                    r("AdsCampaignRecordAccessors").targeting.set(new c(y)),
                  )(e);
                ((C = r("maybeUpdateCampaignDSASpec")(C, {
                  defaultDSABeneficiary: a.beneficiary,
                  defaultDSAPayor: a.payor,
                  locationApiSpec:
                    (s = C.targeting) == null || (s = s.geo_locations) == null
                      ? void 0
                      : s.toJS(),
                })),
                  (C = r("maybeUpdateCampaignRegulationsSpec")(C, {
                    excludedLocations:
                      (d = C.targeting) == null ||
                      (d = d.excluded_geo_locations) == null
                        ? void 0
                        : d.toJS(),
                    includedLocations:
                      (m = C.targeting) == null || (m = m.geo_locations) == null
                        ? void 0
                        : m.toJS(),
                  })));
                var b =
                    (p = C.targeting) == null || (p = p.geo_locations) == null
                      ? void 0
                      : p.toJS(),
                  v =
                    (_ = e.targeting) == null || (_ = _.geo_locations) == null
                      ? void 0
                      : _.toJS();
                return (
                  (C = o(
                    "AdsUEditorMessagingDestinationUtils",
                  ).mayBeUpdateCampaignOptimizationGoalForCTXTargetingEPD(C, {
                    campaignID: t,
                    objectiveMap: i,
                    previouslySelectedLocations: v,
                    selectedLocations: b,
                  })),
                  C
                );
              },
            );
          },
          o("AdsUEditorCampaignSetTargetingSpecActionFlux").actionType,
        ),
      };
    function m(t) {
      Object.keys(t).forEach(function (t) {
        (e || (e = o("ODS"))).bumpEntityKey(
          511,
          "obc.www.all",
          "targetingSpecDiff." + t,
        );
      });
    }
    var p = d;
    l.default = p;
  },
  98,
);
