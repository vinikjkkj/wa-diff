__d(
  "AdsMgmtCampaignGroupSelectionReducerPlugins",
  [
    "AdFLEXSelectRowCheckboxHeaderConfig",
    "AdsObjectTypes",
    "AdsPECampaignGroupVisibleIDsSelectors",
    "Laminar",
    "adsUpdateDeletedAdObjectIDs",
    "adsUpdateSelectedAdObjectIDs",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          return r("adsUpdateSelectedAdObjectIDs")(t, n.selectedIDs);
        },
      },
      s = {
        reduce: function (t, n) {
          return r("AdsObjectTypes")[n.data.editorType] ===
            r("AdsObjectTypes").CAMPAIGN_GROUP
            ? r("adsUpdateSelectedAdObjectIDs")(t, n.data.selectedIDs)
            : t;
        },
      },
      u = {
        reduce: function (t, n) {
          return n.objectLevel === "campaign"
            ? r("adsUpdateSelectedAdObjectIDs")(t, n.ids)
            : t;
        },
      },
      c = {
        reduce: function (t, n) {
          var e = Array.from(n.data.params.selected_campaign_ids || []);
          return r("adsUpdateSelectedAdObjectIDs")(t, e);
        },
      },
      d = {
        reduce: o("Laminar").withFluxSelectors(
          {
            visibleIDs: r("AdsPECampaignGroupVisibleIDsSelectors")
              .visibleIDsSelector,
          },
          function (e, t, n) {
            var o = n.visibleIDs,
              a = [];
            if (t.shouldSelect) {
              var i, l;
              a =
                (i =
                  (l = r("AdFLEXSelectRowCheckboxHeaderConfig").get()) ==
                    null || l.getEligibleSelectAllAdObjects == null
                    ? void 0
                    : l.getEligibleSelectAllAdObjects(
                        r("AdsObjectTypes").CAMPAIGN_GROUP,
                        o,
                      )) != null
                  ? i
                  : o;
            }
            return r("adsUpdateSelectedAdObjectIDs")(e, a);
          },
        ),
      },
      m = {
        reduce: function (t, n) {
          return r("adsUpdateDeletedAdObjectIDs")(t, n, "campaign");
        },
      };
    ((l.AdsCampaignGroupSelectionChangeReducerPlugin = e),
      (l.AdsEditorNavigateToCampaignGroupSelectionReducerPlugin = s),
      (l.AdsMgmtDrawerOpenTargetReducerPlugin = u),
      (l.AdsInterfacesRouteUpdateParamsReducerPlugin = c),
      (l.AdsPECampaignGroupSelectionSelectAllAReducerPlugin = d),
      (l.AdsDraftDraftFragmentBatchDeletedReducerPlugin = m));
  },
  98,
);
