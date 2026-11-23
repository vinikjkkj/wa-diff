__d(
  "adsPACMediaBulkEditingSelector",
  [
    "fbt",
    "AdsBulkEditSelectedPlacementGroupProvider",
    "AdsImageIDUtils",
    "AdsImageInfoStore",
    "AdsPACBulkEditUtils",
    "AdsPlacementAssetTargetingRuleUtils",
    "AdsPlacementAssetUtils",
    "AdsPlacementCustomizationMediaUtils",
    "AdsPlacementEditorSelectors",
    "AdsVideoStore",
    "adsCreateSelector",
    "adsMemoizeAdgroupRecordCreation",
    "adsUEditorAccountSelector",
    "adsUEditorSelectedAdgroupIDsSelector",
    "adsUEditorSelectedAdgroupPlainObjectsSelector",
    "immutable",
    "placementCustomizationDataThunkSelector",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t) {
      var n,
        r,
        a = o(
          "AdsPlacementCustomizationMediaUtils",
        ).getMediaHavingPlacementsFromAdgroup(e, t);
      return (n = (r = a.imageHash) != null ? r : a.imageUrl) != null
        ? n
        : a.videoID;
    }
    var u = r("adsCreateSelector")(
        [
          r("adsUEditorSelectedAdgroupPlainObjectsSelector"),
          r("AdsBulkEditSelectedPlacementGroupProvider").toFluxSelector(),
        ],
        function (n, a) {
          var t = a.selectedPlacementGroup;
          return o("AdsPACBulkEditUtils").uniqueMediaCount(
            n.map(r("adsMemoizeAdgroupRecordCreation")),
            t,
            e,
          );
        },
        { name: i.id + ".uniqueMediaCountSelector" },
      ),
      c = r("adsCreateSelector")(
        [
          r("placementCustomizationDataThunkSelector"),
          r("AdsBulkEditSelectedPlacementGroupProvider").toFluxSelector(),
          r("adsUEditorSelectedAdgroupIDsSelector"),
        ],
        function (t, n, r) {
          var e = n.selectedPlacementGroup,
            a = t(),
            i = a.hasValue() ? a.getValueEnforcing() : null,
            l = o("AdsPlacementEditorSelectors").getAssetAndAssetKey(
              e != null ? e : [],
              i,
            ),
            s = l.asset,
            u = l.assetKey;
          return { asset: s, assetKey: u, adgroupIDs: r };
        },
        { name: i.id + ".adsPACRowMediaSelector" },
      ),
      d = r("adsCreateSelector")(
        [
          r("adsUEditorSelectedAdgroupPlainObjectsSelector"),
          u,
          r("AdsVideoStore").getSelector,
          r("AdsImageInfoStore").getNameSelector,
          r("AdsImageInfoStore").getThumbnailURLSelector,
          r("adsUEditorAccountSelector"),
          r("AdsBulkEditSelectedPlacementGroupProvider").toFluxSelector(),
          r("adsUEditorSelectedAdgroupIDsSelector"),
        ],
        function (t, n, a, i, l, u, c, d) {
          var e,
            m = c.selectedPlacementGroup,
            p = o("AdsPlacementAssetUtils").getPlacementsFromAssetGroups(
              r("immutable").List(m),
            ),
            _ = n !== 1,
            f = r("immutable").Map(),
            g = t.map(r("adsMemoizeAdgroupRecordCreation"));
          g.forEach(function (e) {
            var t = "",
              n = o(
                "AdsPlacementAssetTargetingRuleUtils",
              ).getLabelNameFromAssetCustomizationPlacement(
                e,
                p,
                "image_label",
              ),
              r = o(
                "AdsPlacementAssetTargetingRuleUtils",
              ).getLabelNameFromAssetCustomizationPlacement(
                e,
                p,
                "video_label",
              );
            ((t = n || r || t), (f = f.set(e.id, t)));
          });
          var h = o(
              "AdsPlacementCustomizationMediaUtils",
            ).getMediaHavingPlacementsFromAdgroup(g[0], p),
            y = h.imageHash,
            C = h.imageUrl,
            b = h.videoID,
            v = h.videoThumbnailUrl;
          if (b != null) {
            var S = a(b);
            return {
              adgroupIDs: d,
              assetKeysMap: f,
              cropTransform: null,
              name: _ ? "Mixed media" : S.name,
              src: v,
              hasMixedMedia: _,
              uniqueMediaCount: n,
            };
          }
          var R = o("AdsImageIDUtils").getImageID({
            accountID: u.account_id,
            hash: y,
            url: C,
          });
          if (R == null)
            return {
              adgroupIDs: d,
              assetKeysMap: f,
              cropTransform: null,
              name: null,
              src: null,
              hasMixedMedia: _,
              uniqueMediaCount: n,
            };
          var L = i(R),
            E = l(R);
          return {
            adgroupIDs: d,
            assetKeysMap: f,
            cropTransform: null,
            name: _ ? s._(/*BTDS*/ "") : L.hasValue() ? L.getValue() : null,
            src: E.hasValue()
              ? (e = E.getValue()) == null
                ? void 0
                : e.url
              : null,
            hasMixedMedia: _,
            uniqueMediaCount: n,
          };
        },
        { name: i.id + ".adsPACBulkEditBulkControlMediaSelector" },
      );
    ((l.adsPACRowMediaSelector = c),
      (l.adsPACBulkEditBulkControlMediaSelector = d));
  },
  226,
);
