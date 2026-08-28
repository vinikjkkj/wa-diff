__d(
  "AdsBrandAwarenessUtils",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAPIBidInfoFields",
    "AdsAPIBidType",
    "AdsAPIObjectives",
    "AdsAdgroupTypeUtils",
    "AdsAssetFeedFieldUtils",
    "AdsAssetFeedUtils",
    "ApiAdObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [
        (e = r("AdsAPIObjectives")).BRAND_AWARENESS,
        e.REACH,
        e.OUTCOME_AWARENESS,
      ],
      u = s.concat([e.POST_ENGAGEMENT, e.VIDEO_VIEWS, e.OUTCOME_ENGAGEMENT]);
    function c(e) {
      return s.includes(e);
    }
    function d(e) {
      return u.includes(e);
    }
    function m(e, t) {
      if (e !== r("AdsAPIBidType").ABSOLUTE_OCPM) return !1;
      var n = !1,
        o = !1;
      for (var a in t)
        if (Object.prototype.hasOwnProperty.call(t, a))
          if (a === r("AdsAPIBidInfoFields").REACH) {
            if (o) return !1;
            n = !0;
          } else {
            if (n) return !1;
            o = !0;
          }
      return n;
    }
    function p(e) {
      var t, n;
      if (
        e != null &&
        o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e) &&
        o("AdsAPIAdgroupRecordUtils").isExistingPostAd(e)
      ) {
        var a;
        return !!o(
          "AdsAssetFeedFieldUtils",
        ).firstCTAAsset_TALK_WITH_ACE_BEFORE_USE(
          (a = e.creative) == null || (a = a.asset_feed_spec) == null
            ? void 0
            : a.call_to_action_types,
        );
      }
      var i = e == null || (t = e.creative) == null ? void 0 : t.object_type;
      switch (i) {
        case r("ApiAdObjectTypes").SHARE:
          if (
            o("AdsAdgroupTypeUtils").isVideoAd(e) ||
            o("AdsAssetFeedUtils").isRegularDCOAdgroupFromRecord(e) ||
            o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e) ||
            o("AdsAssetFeedUtils").isDLOAdgroupFromRecord(e)
          ) {
            var l;
            return !!o(
              "AdsAssetFeedFieldUtils",
            ).firstCTAAsset_TALK_WITH_ACE_BEFORE_USE(
              (l = e.creative) == null || (l = l.asset_feed_spec) == null
                ? void 0
                : l.call_to_action_types,
            );
          }
          return !0;
        case r("ApiAdObjectTypes").VIDEO: {
          var s,
            u,
            c =
              (s = e.creative) == null ||
              (s = s.object_story_spec) == null ||
              (s = s.video_data) == null ||
              (s = s.call_to_action) == null
                ? void 0
                : s.type,
            d =
              (u = e.creative) == null || (u = u.asset_feed_spec) == null
                ? void 0
                : u.call_to_action_types;
          return !!c || !!d;
        }
        case r("ApiAdObjectTypes").PHOTO:
          return !!o(
            "AdsAssetFeedFieldUtils",
          ).firstCTAAsset_TALK_WITH_ACE_BEFORE_USE(
            (n = e.creative) == null || (n = n.asset_feed_spec) == null
              ? void 0
              : n.call_to_action_types,
          );
      }
      return !1;
    }
    function _(e, t) {
      var n = o("AdsAPIAdgroupRecordUtils").getCallToActionType(e, t),
        r = o("AdsAdgroupTypeUtils").isVideoAd(e),
        a =
          n === "CALL_NOW" ||
          n === "DIAL_CODE" ||
          n === "GET_DIRECTIONS" ||
          n === "WHATSAPP_MESSAGE";
      return r && a;
    }
    ((l.isBrandObjective = c),
      (l.isExtendedBrandObjective = d),
      (l.isOCPMReach = m),
      (l.isWebsiteLinkEnabled = p),
      (l.isWebsiteURLHidden = _));
  },
  98,
);
