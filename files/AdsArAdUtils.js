__d(
  "AdsArAdUtils",
  [
    "AdsAPIDevicePlatform",
    "AdsAPIObjectives",
    "AdsArDataContainerUtils",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPromotedObjectTypes",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = "_copy",
      c = (e = r("immutable")).Set([
        (s = r("AdsAPIObjectives")).CONVERSIONS,
        s.LINK_CLICKS,
        s.BRAND_AWARENESS,
        s.REACH,
      ]),
      d = e.Set([s.BRAND_AWARENESS, s.REACH]),
      m = e.Set([s.CONVERSIONS, s.LINK_CLICKS]),
      p = e.Set([
        r("AdsPromotedObjectTypes").WEBSITE,
        r("AdsPromotedObjectTypes").PIXEL,
      ]);
    function _(e) {
      return (
        o("AdsPlacementAPISpecReaderUtils").isActiveInstagramFeedPosition(e) ||
        o("AdsPlacementAPISpecReaderUtils").isActiveInstagramStoryPosition(e) ||
        o("AdsPlacementAPISpecReaderUtils").isActiveInstagramReelPosition(e)
      );
    }
    function f(e) {
      return (
        o("AdsPlacementAPISpecReaderUtils").isActiveFacebookFeedPosition(e) ||
        o("AdsPlacementAPISpecReaderUtils").isActiveFacebookStoryPosition(e) ||
        o("AdsPlacementAPISpecReaderUtils").isActiveFacebookReelsPosition(e)
      );
    }
    function g(e) {
      return f(e) || _(e);
    }
    function h(e) {
      var t = [
        { platform: "facebook", position: "feed" },
        { platform: "facebook", position: "story" },
        { platform: "facebook", position: "facebook_reels" },
        { platform: "instagram", position: "stream" },
        { platform: "instagram", position: "story" },
        { platform: "instagram", position: "reels" },
      ];
      return (
        o("AdsPlacementAPISpecReaderUtils").isOnlyActiveSelectedPlacements(
          e,
          r("immutable").List(t),
        ) &&
        o("AdsPlacementAPISpecReaderUtils").isOnlyActiveDevicePlatform(
          e,
          r("AdsAPIDevicePlatform").MOBILE,
        )
      );
    }
    function y(e) {
      return e != null && d.has(e);
    }
    function C(e, t) {
      return !(!c.has(e) || (m.has(e) && t != null && !p.has(t)));
    }
    function b(e) {
      return e + u;
    }
    function v(e) {
      return e != null ? e.endsWith(u) : !1;
    }
    function S(e, t) {
      if (e === t || (e == null && t == null)) return !0;
      var n = !0;
      return (
        (e == null ? void 0 : e.dynamicEffect) !== null &&
          (t == null ? void 0 : t.dynamicEffect) !== null &&
          (n = r("immutable").is(
            e == null ? void 0 : e.dynamicEffect,
            t == null ? void 0 : t.dynamicEffect,
          )),
        e != null &&
          t != null &&
          e.ctaType === t.ctaType &&
          o("AdsArDataContainerUtils").getUri(e) ===
            o("AdsArDataContainerUtils").getUri(t) &&
          e.feedUnitOverlayTextType === t.feedUnitOverlayTextType &&
          e.getEffectID() === t.getEffectID() &&
          e.cameraFacing === t.cameraFacing &&
          n
      );
    }
    ((l.hasCompatibleIGArAdPlacement = _),
      (l.hasCompatibleFBArAdPlacement = f),
      (l.hasArAdCompatiblePlacement = g),
      (l.hasOnlyARAdCompatiblePlacement = h),
      (l.isEligibleBrandObjective = y),
      (l.isEligibleCampaignSetup = C),
      (l.getBackupDataContainerID = b),
      (l.isBackupDataContainerID = v),
      (l.dataContainerEquals = S));
  },
  98,
);
