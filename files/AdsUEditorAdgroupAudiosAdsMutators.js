__d(
  "AdsUEditorAdgroupAudiosAdsMutators",
  [
    "AdsAPlusCStickyOptOutUtils",
    "AdsAdgroupRecordAccessors",
    "AdsAssetFeedUtils",
    "AdsAutomaticFlowUtils",
    "AdsChildAttachmentsUtils",
    "AdsClientAdAssetFeedSpecFields",
    "AdsCollectionsAdUtils",
    "AdsCreativeEnrollmentDefaultOnStoreUtils",
    "AdsInstagramReelErrorUtils",
    "ClickToMessageAdDestinationUtils",
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
    };
    function s(e, t) {
      var n, a, i, l;
      if (
        o("ClickToMessageAdDestinationUtils").isClickToMessageAdDestination(
          t == null ? void 0 : t.destination_type,
        ) ||
        o(
          "ShopsAdsOffsiteCheckoutAdsUtils",
        ).adgroupHasWebsiteAndShopDestinationSpec(e) ||
        o("AdsAssetFeedUtils").isRegularDCOAdgroupFromRecord(e)
      )
        return !1;
      var s = r("immutable").List(
          (n =
            t == null || (a = t.targeting) == null
              ? void 0
              : a.facebook_positions) != null
            ? n
            : r("immutable").List(),
        ),
        u = r("immutable").List(
          (i =
            t == null || (l = t.targeting) == null
              ? void 0
              : l.instagram_positions) != null
            ? i
            : [],
        ),
        c = s == null ? void 0 : s.contains("facebook_reels"),
        d = u == null ? void 0 : u.contains("stream"),
        m = u == null ? void 0 : u.contains("reels"),
        p = u == null ? void 0 : u.contains("story");
      return !!(m || p || c || d);
    }
    function u(e) {
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
    function c(e) {
      var t = e;
      return (
        o("AdsAssetFeedUtils").getAdgroupIsAudioSwap(e) === !0 &&
          (t = r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.audios.delete(t)),
        t
      );
    }
    function d(t, n, a) {
      if (
        o("AdsAPlusCStickyOptOutUtils").isAPlusCFeatureStickyOptedOut(
          "audio",
        ) ||
        o(
          "AdsCreativeEnrollmentDefaultOnStoreUtils",
        ).isCreativeEnrollmentDefaultOnVetoedForSelectedAccount("audio")
      )
        return n;
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
      return i;
    }
    function m(e) {
      var t,
        n = e,
        o =
          r("immutable").List(
            (t = e.creative) == null || (t = t.asset_feed_spec) == null
              ? void 0
              : t.audios,
          ).size === 1;
      return (
        p(r("adsConvertAdObjectRecordToPlainJS")(e))
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
    function p(e) {
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
    function _(e) {
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
    function f(e, t) {
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
    function g(e, t, n) {
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
    function h(e, t) {
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
    function y(e, t, n) {
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
    ((l.isEligibleForAudios = s),
      (l.maybeSetAudioSwap = u),
      (l.maybeRemoveAudioSwap = c),
      (l.updateAdgroupWithAudioSpec = d),
      (l.removeAudiosField = m),
      (l.isAdgroupUsingOnlyAudiosAssetFeedFromRecord = p),
      (l.getAudioDataSpecField = _),
      (l.updateAFSAudioSpecField = f),
      (l.maybeUpdateAudios = g),
      (l.maybeResetAudios = h),
      (l.updateAudiosForSwap = y));
  },
  98,
);
