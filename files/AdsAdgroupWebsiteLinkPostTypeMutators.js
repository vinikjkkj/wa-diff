__d(
  "AdsAdgroupWebsiteLinkPostTypeMutators",
  [
    "AdsAdgroupPostTypeMutatorsUtils",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAdgroupTypeUtils",
    "AdsAssetFeedUtils",
    "AdsDLOAssetFeedMutators",
    "AdsLinkTypeUtils",
    "AdsMutators",
    "AdsUnifiedCreativeAPIFields",
    "AdsWhatsAppDestinationUtils",
    "ApiAdObjectTypes",
    "adsPlacementAssetMutationConvertToPACSpecForAdditionalCustomizations",
    "immutable",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        o =
          (n = e.creative) == null || (n = n.asset_feed_spec) == null
            ? void 0
            : n.asset_customization_rules;
      return o != null
        ? ((o = o.map(function (e) {
            return e.remove(t);
          })),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.asset_customization_rules.set(o, e))
        : e;
    }
    function s(t, n) {
      var a = o("AdsDLOAssetFeedMutators").removeOptionalLinksFieldsFromRules(
        t,
      );
      a = o("AdsMutators").chain(
        function (e) {
          return r("AdsAdgroupSemanticFields").linkURL.delete(n, e);
        },
        function (e) {
          return r("AdsAdgroupSemanticFields").linkDescription.delete(n, e);
        },
        function (e) {
          return r("AdsAdgroupSemanticFields").headline.delete(n, e);
        },
        function (e) {
          return r("AdsAdgroupSemanticFields").callToActionType.delete(n, e);
        },
      )(a);
      var i = o("AdsAssetFeedUtils").isPACAdgroupFromRecord(a);
      return i
        ? (r("justknobx")._("3489")
            ? ((a = r(
                "AdsAdgroupRecordAccessors",
              ).creative.asset_feed_spec.call_to_actions.delete(a)),
              (a = r(
                "AdsAdgroupRecordAccessors",
              ).creative.asset_feed_spec.additional_data.delete(a)))
            : o(
                "AdsWhatsAppDestinationUtils",
              ).isEligibleForL1WhatsAppDestination(n.pivots.objective, n) &&
              o("AdsLinkTypeUtils").isWhatsAppLinkTypeSelected(t, n) &&
              (a = r(
                "AdsAdgroupRecordAccessors",
              ).creative.asset_feed_spec.call_to_actions.delete(a)),
          (a = e(a, "title_label")),
          e(a, "link_url_label"))
        : a;
    }
    function u(e, t) {
      var n = r(
          "adsPlacementAssetMutationConvertToPACSpecForAdditionalCustomizations",
        )(e, t),
        o = t.getDefaultCallToActionType(n);
      return (
        (n = r("AdsAdgroupSemanticFields").callToActionType.set(
          t,
          n,
          r("immutable").List.of(o),
        )),
        n
      );
    }
    function c(e, t) {
      var n,
        a = (n = e.creative) == null ? void 0 : n.object_type,
        i = e;
      return a === r("ApiAdObjectTypes").SHARE
        ? o("AdsAssetFeedUtils").isAdgroupUsingAssetFeedFromRecord(i)
          ? s(i, t)
          : o("AdsAdgroupPostTypeMutatorsUtils").convertPostTypeInAdgroupRecord(
              r("ApiAdObjectTypes").SHARE,
              r("ApiAdObjectTypes").PHOTO,
              i,
            )
        : a === r("ApiAdObjectTypes").VIDEO
          ? ((i = r("AdsAdgroupSemanticFields").linkDescription.delete(t, i)),
            o("AdsAssetFeedUtils").isAdgroupUsingAssetFeedFromRecord(i)
              ? s(i, t)
              : i.deleteIn(
                  r("AdsUnifiedCreativeAPIFields")
                    .callToActionType.getPathOrThrow(e, t)
                    .slice(0, -1),
                ))
          : i;
    }
    function d(e, t) {
      var n,
        a = (n = e.creative) == null ? void 0 : n.object_type,
        i = t.getDefaultCallToActionType(e);
      if (a === r("ApiAdObjectTypes").PHOTO) {
        var l = o(
          "AdsAdgroupPostTypeMutatorsUtils",
        ).convertPostTypeInAdgroupRecord(
          r("ApiAdObjectTypes").PHOTO,
          r("ApiAdObjectTypes").SHARE,
          e,
        );
        return i === "NO_BUTTON"
          ? r("AdsAdgroupSemanticFields").callToActionType.set(t, l, i)
          : l;
      }
      return o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e)
        ? u(e, t)
        : a === r("ApiAdObjectTypes").VIDEO
          ? r("AdsAdgroupSemanticFields").callToActionType.set(t, e, i)
          : a === r("ApiAdObjectTypes").SHARE &&
              (o("AdsAdgroupTypeUtils").isVideoAd(e) ||
                o("AdsAssetFeedUtils").isAdgroupUsingNonDofAssetFeedSpec(e))
            ? r("AdsAdgroupSemanticFields").callToActionType.set(
                t,
                e,
                r("immutable").List.of(i),
              )
            : e;
    }
    ((l.convertToHasNoWebsiteLinkFormat = c),
      (l.convertToHasWebsiteLinkFormat = d));
  },
  98,
);
