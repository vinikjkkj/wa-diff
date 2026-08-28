__d(
  "AdsFlexibleFormatPacCarouselUtils",
  [
    "AdsAPIAdgroupCallToActionRecord",
    "AdsAssetFeedUtils",
    "AdsChildAttachmentsUtils",
    "AdsPlacementAssetTargetingRuleUtils",
    "AdsPlacementAssetUtils",
    "AdsSensitiveVerticalUtils",
    "adsPlacementAssetGetChildAttachmentFromLabelMap",
    "gkx",
    "immutable",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { hasVideo: !1, imageCount: 0, totalCount: 0 };
    function s(t) {
      var n;
      if (!o("AdsAssetFeedUtils").isPACAdgroupFromRecord(t)) return e;
      var a = (n = t.creative) == null ? void 0 : n.asset_feed_spec,
        i = a == null ? void 0 : a.carousels,
        l = o(
          "AdsPlacementAssetTargetingRuleUtils",
        ).getDefaultRuleOrRuleWithMostPlacements(
          a == null ? void 0 : a.asset_customization_rules,
        );
      if (i == null || l == null) return e;
      var s = l.getIn(["carousel_label", "name"]),
        u = i.find(function (e) {
          return o("AdsPlacementAssetUtils").getFirstAdLabel(e) === s;
        }),
        c = u == null ? void 0 : u.get("child_attachments");
      if (!(c instanceof r("immutable").List)) return e;
      var d = c,
        m = 0,
        p = 0,
        _ = !1;
      return (
        d.forEach(function (e) {
          ((p += 1),
            e.get("video_label") != null
              ? (_ = !0)
              : e.get("image_label") != null && (m += 1));
        }),
        { hasVideo: _, imageCount: m, totalCount: p }
      );
    }
    function u(e) {
      var t, n;
      if (
        !(
          _(!0) &&
          !o("AdsChildAttachmentsUtils").isStaticCarouselAd(e) &&
          o("AdsAssetFeedUtils").hasPACCarouselFormat(e)
        )
      )
        return null;
      var a = (t = e.creative) == null ? void 0 : t.asset_feed_spec,
        i = a == null ? void 0 : a.carousels,
        l = o(
          "AdsPlacementAssetTargetingRuleUtils",
        ).getDefaultRuleOrRuleWithMostPlacements(
          a == null ? void 0 : a.asset_customization_rules,
        );
      if (i == null || l == null) return null;
      var s = l.getIn(["carousel_label", "name"]),
        u = i.find(function (e) {
          return o("AdsPlacementAssetUtils").getFirstAdLabel(e) === s;
        }),
        c = u == null ? void 0 : u.get("child_attachments");
      if (!(c instanceof r("immutable").List)) return null;
      var d = c,
        m = a == null || (n = a.call_to_actions) == null ? void 0 : n.get(0),
        p =
          m != null
            ? new (r("AdsAPIAdgroupCallToActionRecord"))(m.toJS())
            : null;
      return d.map(function (t) {
        return r("adsPlacementAssetGetChildAttachmentFromLabelMap")(t, e, p);
      });
    }
    function c(e, t) {
      return s(e).imageCount >= t;
    }
    function d(e, t) {
      return s(e).totalCount >= t;
    }
    function m(e) {
      return s(e).hasVideo;
    }
    function p(e) {
      return (
        _(!0) &&
        !o("AdsChildAttachmentsUtils").isStaticCarouselAd(e) &&
        o("AdsAssetFeedUtils").hasPACCarouselFormat(e) &&
        s(e).totalCount > 0
      );
    }
    function _(e) {
      if (
        r("justknobx")._("2021") ||
        o("AdsSensitiveVerticalUtils").isAdAccountOnBig6AgencyBlocklist()
      )
        return !1;
      if (e === !0) {
        if (!r("gkx")("19787")) return !1;
      } else if (!r("gkx")("19795")) return !1;
      return !o("AdsSensitiveVerticalUtils").isAccountInSensitiveVerticals();
    }
    function f(e, t, n) {
      return (
        o("AdsChildAttachmentsUtils").isCarouseAdWithAtLeastXImages(e, t, n) ||
        (_(!0) &&
          !o("AdsChildAttachmentsUtils").isStaticCarouselAd(e) &&
          o("AdsAssetFeedUtils").hasPACCarouselFormat(e) &&
          c(e, n))
      );
    }
    function g(e, t) {
      return (
        o("AdsChildAttachmentsUtils").isCarouselVideoAd(e, t) ||
        (_(!0) &&
          !o("AdsChildAttachmentsUtils").isStaticCarouselAd(e) &&
          o("AdsAssetFeedUtils").hasPACCarouselFormat(e) &&
          m(e))
      );
    }
    ((l.getPacCarouselChildAttachmentCounts = s),
      (l.getPacCarouselChildAttachments = u),
      (l.isPacCarouselWithAtLeastXImages = c),
      (l.isPacCarouselWithAtLeastXMedia = d),
      (l.isPacCarouselVideoAd = m),
      (l.pacCarouselHasChildMedia = p),
      (l.passGKForPACCarousel = _),
      (l.fdoCarouselHasAtLeastXImages = f),
      (l.fdoCarouselHasVideo = g));
  },
  98,
);
