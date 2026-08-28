__d(
  "AdsFlexibleFormatDAUtils",
  [
    "AdsAPlusCFastTrackV2Utils",
    "AdsAssetFeedUtils",
    "AdsChildAttachmentsUtils",
    "AdsDynamicAdsFormatUtils",
    "AdsDynamicAdsUtils",
    "AdsObjectTypeUtils",
    "gkx",
    "immutable",
    "isTruthy",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = r("gkx")("18395");
      return !e;
    }
    function s(t) {
      return (
        o("AdsDynamicAdsUtils").isDynamicAd(t) &&
        o("AdsObjectTypeUtils").isTemplateCreative(t) &&
        o("AdsDynamicAdsFormatUtils").getIsDynamicAdCarouselMediaFormat(t) &&
        e()
      );
    }
    function u(t) {
      if (
        !r("justknobx")._("2473") ||
        o("AdsAPlusCFastTrackV2Utils").isAccountInSensitiveVerticals()
      )
        return !1;
      var n = t.sales_segment_v2,
        a =
          n == null ||
          o("AdsAPlusCFastTrackV2Utils").isSBGSegment(n) ||
          o("AdsAPlusCFastTrackV2Utils").isGBGUnmanagedSegment(n);
      return a ? e() : !1;
    }
    function c(e) {
      var t,
        n = o("AdsDynamicAdsUtils").isDynamicAd(e);
      if (!n) return !1;
      var a =
          ((t = e.creative) == null ? void 0 : t.format_transformation_spec) !=
          null,
        i = !r("isTruthy")(e.created_time);
      return (
        (i ||
          a ||
          !o("AdsAssetFeedUtils").isFormatAutomationAdgroupFromRecord(e)) &&
        s(e)
      );
    }
    function d(e) {
      if (o("AdsChildAttachmentsUtils").isStaticAndDynamicCarouselAd(e)) {
        var t,
          n,
          a =
            e == null || (t = e.creative) == null
              ? void 0
              : t.format_transformation_spec;
        return (n =
          a == null
            ? void 0
            : a.some(function (e) {
                var t =
                    e instanceof r("immutable").Map
                      ? e.getIn(["format"])
                      : e == null
                        ? void 0
                        : e.format,
                  n =
                    e instanceof r("immutable").Map
                      ? e.getIn(["data_source"])
                      : e == null
                        ? void 0
                        : e.data_source;
                return (
                  t === "da_collection" &&
                  n != null &&
                  n instanceof r("immutable").List &&
                  (n.includes("manual_uploads") || !n.includes("catalog"))
                );
              })) != null
          ? n
          : !1;
      }
      return !1;
    }
    ((l.isEligibleForReactiveControl = e),
      (l.getIsEligibleForDAFormatAutomationFastTrack = u),
      (l.isReactiveControlCardVisibleForDA = c),
      (l.shouldSkipDACollectionPreviewForIntroCard = d));
  },
  98,
);
