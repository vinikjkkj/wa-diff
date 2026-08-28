__d(
  "adsGetMediaFormatByAssetGroup",
  [
    "AdsPlacementAssetCustomizationTypes",
    "AdsPlacementAssetTargetingRuleUtils",
    "AdsPlacementAssetUtils",
    "adsConvertAssetCustomizationRuleToPlacementList",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n,
        a,
        i =
          (n = e.creative) == null || (n = n.asset_feed_spec) == null
            ? void 0
            : n.asset_customization_rules,
        l =
          (a = e.creative) == null || (a = a.asset_feed_spec) == null
            ? void 0
            : a.images,
        s =
          l instanceof r("immutable").List
            ? !l.isEmpty()
            : l instanceof Array
              ? l.length > 0
              : !1;
      if (i == null) {
        var u,
          c =
            (u = e.creative) == null || (u = u.asset_feed_spec) == null
              ? void 0
              : u.videos,
          d =
            c instanceof r("immutable").List
              ? !c.isEmpty()
              : c instanceof Array
                ? c.length > 0
                : !1;
        return s && t === "FACEBOOK_RHC"
          ? o("AdsPlacementAssetCustomizationTypes")
              .AdsPlacementCustomizationMediaFormatImage
          : d
            ? o("AdsPlacementAssetCustomizationTypes")
                .AdsPlacementCustomizationMediaFormatVideo
            : o("AdsPlacementAssetCustomizationTypes")
                .AdsPlacementCustomizationMediaFormatImage;
      }
      var m = r("immutable").fromJS(i),
        p = m.reduce(function (e, t) {
          var n = o(
              "adsConvertAssetCustomizationRuleToPlacementList",
            ).adsConvertAssetCustomizationRuleToPlacementList(t),
            r = o("AdsPlacementAssetUtils").getAssetGroupsFromPlacements(n);
          return t.has("video_label")
            ? r.reduce(function (e, t) {
                return e.set(
                  t,
                  o("AdsPlacementAssetCustomizationTypes")
                    .AdsPlacementCustomizationMediaFormatVideo,
                );
              }, e)
            : t.has("image_label")
              ? r.reduce(function (e, t) {
                  return e.set(
                    t,
                    o("AdsPlacementAssetCustomizationTypes")
                      .AdsPlacementCustomizationMediaFormatImage,
                  );
                }, e)
              : e;
        }, r("immutable").Map()),
        _ = p.get(t);
      if (_ != null) return _;
      if (s && t === "FACEBOOK_RHC")
        return o("AdsPlacementAssetCustomizationTypes")
          .AdsPlacementCustomizationMediaFormatImage;
      var f = o(
        "AdsPlacementAssetTargetingRuleUtils",
      ).getDefaultRuleOrRuleWithMostPlacements(m);
      return f != null && f.has("video_label")
        ? o("AdsPlacementAssetCustomizationTypes")
            .AdsPlacementCustomizationMediaFormatVideo
        : o("AdsPlacementAssetCustomizationTypes")
            .AdsPlacementCustomizationMediaFormatImage;
    }
    l.default = e;
  },
  98,
);
