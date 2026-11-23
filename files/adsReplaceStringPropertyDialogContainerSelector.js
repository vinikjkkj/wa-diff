__d(
  "adsReplaceStringPropertyDialogContainerSelector",
  [
    "invariant",
    "AdsAdgroupRecordAccessors",
    "AdsCampaignBulkStore",
    "AdsCampaignGroupBulkStore",
    "AdsEmptyValue",
    "AdsReplaceStringPropertyDialogUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorCampaignAdObjectsUtils",
    "AdsUEditorSelectors",
    "adsCreateSelector",
    "adsCreateSelectorsByLevel",
    "adsMgmtAdgroupSelectedIdsSelector",
    "adsMgmtCampaignGroupSelectedIdsSelector",
    "adsMgmtCampaignSelectedIdsSelector",
    "adsUEditorAdObjectsLoadObjectForSelectedAdgroupsSelector",
    "adsUEditorHasMultiMediaAssetsAdgroupSelector",
    "adsUEditorInjectEditingAdgroupContext",
    "adsUEditorSelectedAdgroupsSelector",
    "immutable",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {},
      u = r("immutable").Map(),
      c = [],
      d = o("AdsUEditorAdgroupSelectors").adObjectsList.mapTransform(
        o("AdsUEditorCampaignAdObjectsUtils").getPromotedObjectType,
      ),
      m = o("AdsUEditorSelectors").adgroup.bulkByAccessor(
        r("AdsAdgroupRecordAccessors").name.get,
      ),
      p = r("adsCreateSelectorsByLevel")(function (e) {
        switch (e) {
          case "ad":
            return o("adsMgmtAdgroupSelectedIdsSelector")
              .adsMgmtAdgroupSelectedIdsSelector;
          case "ad_set":
            return o("adsMgmtCampaignSelectedIdsSelector")
              .adsMgmtCampaignSelectedIdsSelector;
          case "campaign":
            return o("adsMgmtCampaignGroupSelectedIdsSelector")
              .adsMgmtCampaignGroupSelectedIdsSelector;
        }
        s(0, 20828, e);
      }),
      _ = r("adsCreateSelectorsByLevel")(function (t) {
        var n;
        return r("adsCreateSelector")(
          [
            p[t],
            (n = r("adsUEditorInjectEditingAdgroupContext"))(m),
            n(r("adsUEditorAdObjectsLoadObjectForSelectedAdgroupsSelector")),
            n(d),
            n(r("adsUEditorSelectedAdgroupsSelector")),
            r("AdsCampaignBulkStore").getBulkSpec,
            r("AdsCampaignGroupBulkStore").getBulkSpec,
            n(r("adsUEditorHasMultiMediaAssetsAdgroupSelector")),
          ],
          function (a, i, l, s, d, m, p, _) {
            var n,
              f = e,
              g = !(l.isDone() && l.hasValue()),
              h =
                ((n = {}),
                (n.ad = g ? r("AdsEmptyValue").instance() : i),
                (n.ad_set = m.name),
                (n.campaign = p.name),
                n),
              y = g ? u : s,
              C = !g && t === "ad" ? d : c;
            return (
              (f = o(
                "AdsReplaceStringPropertyDialogUtils",
              ).pullReplaceableInputs(
                a,
                t,
                h,
                y,
                C,
                r("AdsCampaignGroupBulkStore").getRawSpecs(),
              )),
              { hasMultiMediaAssets: _, level: t, values: f }
            );
          },
          { name: i.id },
        );
      }),
      f = _;
    l.default = f;
  },
  98,
);
