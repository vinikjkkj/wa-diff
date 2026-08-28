__d(
  "AdsMgmtAdgroupSelectionReducerPlugins",
  [
    "AdFLEXSelectRowCheckboxHeaderConfig",
    "AdsObjectTypes",
    "AdsPEAdgroupVisibleIDsSelectors",
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
            r("AdsObjectTypes").ADGROUP
            ? r("adsUpdateSelectedAdObjectIDs")(t, n.data.selectedIDs)
            : t;
        },
      },
      u = {
        reduce: function (t, n) {
          return n.objectLevel === "ad"
            ? r("adsUpdateSelectedAdObjectIDs")(t, n.ids)
            : t;
        },
      },
      c = {
        reduce: function (t, n) {
          var e,
            o = Array.from(
              (e = n.data.params.selected_ad_ids) != null ? e : [],
            );
          return r("adsUpdateSelectedAdObjectIDs")(t, o);
        },
      },
      d = {
        reduce: o("Laminar").withFluxSelectors(
          {
            visibleIDs: r("AdsPEAdgroupVisibleIDsSelectors").visibleIDsSelector,
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
                        r("AdsObjectTypes").ADGROUP,
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
          return r("adsUpdateDeletedAdObjectIDs")(t, n, "ad");
        },
      };
    ((l.AdsAdgroupSelectionChangeReducerPlugin = e),
      (l.AdsEditorNavigateToSelectionReducerPlugin = s),
      (l.AdsMgmtDrawerOpenTargetReducerPlugin = u),
      (l.AdsInterfacesRouteUpdateParamsReducerPlugin = c),
      (l.AdsPEAdgroupSelectionSelectAllReducerPlugin = d),
      (l.AdsDraftDraftFragmentBatchDeletedReducerPlugin = m));
  },
  98,
);
