__d(
  "AdsUEditorCampaignTargetingReducerUtils",
  [
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectors",
    "FBLogger",
    "adsCreateStructuredSelector",
    "adsFixCustomAudienceRelationToProductAudienceReducer",
    "adsUEditorCampaignCustomAudienceRelationToProductAudienceMapSelector",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["extraData"],
      s = r("adsCreateStructuredSelector")(
        {
          campaignGroupMap: o(
            "AdsUEditorCampaignSelectors",
          ).adObjectsList.mapTransform(
            o("AdsUEditorCampaignGroupAdObjectsUtils").getCampaignGroup,
          ),
          customAudienceProductAudienceRelationMap: r(
            "adsUEditorCampaignCustomAudienceRelationToProductAudienceMapSelector",
          ),
        },
        i.id + ".ExtraDataSelector",
      );
    function u(t, n, a) {
      return o("AdsUEditorCampaignReducerUtils").createReducer(
        babelHelpers.extends({}, t, { extraData: s }),
        function (t, a, i) {
          var l = i.extraData,
            s = l.campaignGroupMap,
            u = l.customAudienceProductAudienceRelationMap,
            d = babelHelpers.objectWithoutPropertiesLoose(i, e),
            m = a.campaignIDs,
            p = a.hostID;
          if (m == null || p == null) return t;
          var _ = n(t, a, d);
          return o("AdsMutators").mutateEach(_, m, function (e, n) {
            var i = r("nullthrows")(s.get(n)),
              l = i.objective,
              d = t.get(n).getValue();
            d == null &&
              (r("FBLogger")("ads").mustfix(
                "Cannot get original campaign from id %s .",
                n,
              ),
              (d = e));
            var m = d;
            return o("AdsMutators").chain(
              function (e) {
                return c(e, l);
              },
              function (e) {
                return r(
                  "adsFixCustomAudienceRelationToProductAudienceReducer",
                )(e, u.get(n), m);
              },
              function (e) {
                return a.preserveSavedAudienceID === !0
                  ? o(
                      "AdsAPICampaignRecordUtils",
                    ).reassertSavedAudienceIDForPublish(e)
                  : o("AdsMutators").chain(
                      r("AdsCampaignRecordAccessors").saved_audience.set(null),
                      r("AdsCampaignRecordAccessors").saved_audience_id.set(
                        null,
                      ),
                    )(e);
              },
            )(e);
          });
        },
        a,
      );
    }
    function c(e, t) {
      if (t === r("AdsAPIObjectives").STORE_VISITS) {
        var n,
          o,
          a = (n = e.targeting) == null ? void 0 : n.place_page_set_ids,
          i = a != null ? a.toArray() : null,
          l = i != null && i.length > 0 ? i[0] : null,
          s = (o = e.promoted_object) == null ? void 0 : o.place_page_set_id;
        if (l != null && l !== s)
          return r(
            "AdsCampaignRecordAccessors",
          ).promoted_object.place_page_set_id.set(l, e);
      }
      return e;
    }
    l.createReducer = u;
  },
  98,
);
