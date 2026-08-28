__d(
  "AdsUEditorAdgroupAudiosAdsMutators",
  [
    "$InternalEnum",
    "AdsAdgroupCreationAudiosLoggerUtil",
    "AdsAdgroupRecordAccessors",
    "AdsAssetFeedUtils",
    "AdsAutomaticFlowUtils",
    "AdsChildAttachmentsUtils",
    "AdsClientAdAssetFeedSpecFields",
    "AdsCollectionsAdUtils",
    "AdsInstagramReelErrorUtils",
    "AdsUEditorMessagingDestinationUtils",
    "ShopsAdsOffsiteCheckoutAdsUtils",
    "adsConvertAdObjectRecordToPlainJS",
    "immutable",
    "isEmptyObject",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
        return (
          !o("AdsChildAttachmentsUtils").isCarouselAd(t) &&
          !o("AdsCollectionsAdUtils").isCollectionsAd(t.creative) &&
          !o("AdsAssetFeedUtils").isRegularDCOAdgroupFromRecord(t)
        );
      },
      s = n("$InternalEnum")({
        SHOP_AD: "shop_ad",
        DCO_AD: "dco_ad",
        PLACEMENT: "placement",
        NULL_ADOBJECT: "null_adobject",
        NOT_APLUSC_ELIGIBLE: "not_aplusc_eligible",
        AD_FORMAT: "ad_format",
      });
    function u(e, t, n) {
      var a, i, l, u;
      if (
        o("AdsUEditorMessagingDestinationUtils").isClickToMessageAdDestination(
          t == null ? void 0 : t.destination_type,
        )
      )
        return !1;
      if (
        o(
          "ShopsAdsOffsiteCheckoutAdsUtils",
        ).adgroupHasWebsiteAndShopDestinationSpec(e)
      )
        return (
          o(
            "AdsAdgroupCreationAudiosLoggerUtil",
          ).logOnCreateAdAudiosInitialOptInIneligibility(e.id, s.SHOP_AD),
          !1
        );
      if (o("AdsAssetFeedUtils").isRegularDCOAdgroupFromRecord(e))
        return (
          o(
            "AdsAdgroupCreationAudiosLoggerUtil",
          ).logOnCreateAdAudiosInitialOptInIneligibility(e.id, s.DCO_AD),
          !1
        );
      var c = r("immutable").List(
          (a =
            t == null || (i = t.targeting) == null
              ? void 0
              : i.facebook_positions) != null
            ? a
            : r("immutable").List(),
        ),
        d = r("immutable").List(
          (l =
            t == null || (u = t.targeting) == null
              ? void 0
              : u.instagram_positions) != null
            ? l
            : [],
        ),
        m = c == null ? void 0 : c.contains("facebook_reels"),
        p = d == null ? void 0 : d.contains("stream"),
        _ = d == null ? void 0 : d.contains("reels"),
        f = d == null ? void 0 : d.contains("story");
      return _ || f || m || p || n === !0
        ? !0
        : (o(
            "AdsAdgroupCreationAudiosLoggerUtil",
          ).logOnCreateAdAudiosInitialOptInIneligibility(e.id, s.PLACEMENT),
          !1);
    }
    function c(e) {
      var t = e;
      if (o("AdsAssetFeedUtils").getAdgroupIsAudioSwap(e) !== !0) {
        var n = r("immutable").Map({ is_audio_swap: !0, type: "random" }),
          a = r("immutable").fromJS([n]);
        ((t = r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.audios.set(a, t)),
          o("AdsInstagramReelErrorUtils").logReelWithCopyrightMusicSetAdSpec(
            e.id,
          ));
      }
      return t;
    }
    function d(e) {
      var t = e;
      return (
        o("AdsAssetFeedUtils").getAdgroupIsAudioSwap(e) === !0 &&
          (t = r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.audios.delete(t)),
        t
      );
    }
    function m(e, t, n, r, a, i) {
      return i === !0 ||
        !u(t, n, a) ||
        o("AdsAssetFeedUtils").getIsAudiosAdgroupOptedOut(t)
        ? t
        : p(e, t, r);
    }
    function p(t, n, a) {
      var i = n,
        l =
          o("AdsChildAttachmentsUtils").isCarouselAd(n) ||
          o("AdsChildAttachmentsUtils").isStaticCarouselAd(n) ||
          o("AdsChildAttachmentsUtils").isStaticAndDynamicCarouselAd(n) ||
          e(n),
        s =
          a != null &&
          o("AdsAutomaticFlowUtils").isEligibleForAutomaticFlowLite(t, a);
      if (l || s) {
        var u = r("immutable").Map({ type: "random" }),
          c = r("immutable").fromJS([u]);
        i = r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.audios.set(
          c,
          i,
        );
      }
      return (
        o(
          "AdsAdgroupCreationAudiosLoggerUtil",
        ).logOnCreateAdAudiosInitialOptInIneligibility(
          n.id,
          JSON.stringify({
            null_adobject: a == null,
            ad_format: !l,
            not_aplusc_eligible: !s,
            should_update_audios: l || s,
          }),
        ),
        i
      );
    }
    function _(e) {
      var t,
        n = e,
        o =
          r("immutable").List(
            (t = e.creative) == null || (t = t.asset_feed_spec) == null
              ? void 0
              : t.audios,
          ).size === 1;
      return (
        f(r("adsConvertAdObjectRecordToPlainJS")(e))
          ? (n = r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.delete(
              n,
            ))
          : o &&
            (n = r(
              "AdsAdgroupRecordAccessors",
            ).creative.asset_feed_spec.audios.delete(n)),
        n
      );
    }
    function f(e) {
      var t, n;
      return ((t = e.creative) == null ? void 0 : t.asset_feed_spec) == null
        ? !1
        : ((n = e.creative) == null || (n = n.asset_feed_spec) == null
              ? void 0
              : n.audios) != null
          ? r("AdsClientAdAssetFeedSpecFields").every(function (t) {
              var n,
                o =
                  (n = e.creative) == null || (n = n.asset_feed_spec) == null
                    ? void 0
                    : n[t];
              return t === "audios"
                ? o
                : o instanceof Array
                  ? o.length === 0
                  : o instanceof Object && r("isEmptyObject")(o)
                    ? !0
                    : o == null;
            })
          : !1;
    }
    function g(e) {
      var t,
        n =
          (t = e.creative) == null || (t = t.asset_feed_spec) == null
            ? void 0
            : t.audios;
      return n
        ? n.map(function (e) {
            var t = e.get("type"),
              n = e.get("selected_audios");
            return r("immutable").Map({ type: t, selected_audios: n });
          })
        : r("immutable").List();
    }
    function h(e, t) {
      if (t.size === 0) return e;
      var n = e;
      return (
        (n = r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.audios.set(
          t,
          n,
        )),
        n
      );
    }
    function y(e, t, n) {
      var o = e,
        a = r("immutable").Map({ type: t });
      t === "selected" &&
        n != null &&
        n.length > 0 &&
        (a = r("immutable").Map({ type: t, selected_audios: n }));
      var i = r("immutable").fromJS([a]);
      return (
        (o = r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.audios.set(
          i,
          o,
        )),
        o
      );
    }
    function C(e, t) {
      var n = r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.audios.get(e),
        a = r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.audios.get(
          t,
        ),
        i = a != null && a.size > 0,
        l = !o("AdsAssetFeedUtils").getIsAudiosAdgroupEnabled(e);
      if (i || l) return t;
      var s = t;
      return (
        (s = r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.audios.set(
          n,
          s,
        )),
        s
      );
    }
    function b(e, t, n) {
      var a = e,
        i = r("immutable").Map({});
      n != null &&
        n.length > 0 &&
        ((i = r("immutable").Map({
          type: t,
          selected_audios: n,
          is_audio_swap: !0,
        })),
        o("AdsInstagramReelErrorUtils").logReelWithCopyrightMusicSetAdSpec(
          e.id,
          n[0],
        ));
      var l = r("immutable").fromJS([i]);
      return (
        (a = r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.audios.set(
          l,
          a,
        )),
        a
      );
    }
    ((l.isEligibleForAudios = u),
      (l.maybeSetAudioSwap = c),
      (l.maybeRemoveAudioSwap = d),
      (l.maybeSetAudios = m),
      (l.updateAdgroupWithAudioSpec = p),
      (l.removeAudiosField = _),
      (l.isAdgroupUsingOnlyAudiosAssetFeedFromRecord = f),
      (l.getAudioDataSpecField = g),
      (l.updateAFSAudioSpecField = h),
      (l.maybeUpdateAudios = y),
      (l.maybeResetAudios = C),
      (l.updateAudiosForSwap = b));
  },
  98,
);
