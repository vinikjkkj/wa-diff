__d(
  "AdsVideoBuyingStoreUtils",
  [
    "errorCode",
    "errorDesc",
    "AdsAPIDevicePlatform",
    "AdsAPIOptimizationGoals",
    "AdsBuyingTypes",
    "AdsError",
    "AdsPlacementAPISpecReaderUtils",
    "getByPath",
    "immutable",
    "isConsiderationPlacementLocked",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c,
      d = 16,
      m = 3,
      p = new Set([2013012]),
      _ = new Set([2013018, 2013022]),
      f = function () {},
      g = new f(),
      h = (e = r("immutable")).Map([
        ["instant_article", "CAN_USE_FB_IA_POSITION_IN_MRC"],
        ["search", "ENABLE_TWO_SECOND_VIDEO_VIEW_FOR_SEARCH_ADS"],
        ["FB_stories", g],
        ["story", g],
      ]),
      y = [
        "feed",
        "instream_video",
        "suggested_video",
        "video_feeds",
        "stream",
        "explore",
        "classic",
        "AN_instream_video",
      ],
      C = e.Map([
        ["feed", "CAN_USE_FB_FEED_POSITION_IN_VIDEO_VIEW_15S"],
        ["instream_video", g],
        ["instant_article", g],
        ["suggested_video", g],
        ["video_feeds", g],
        ["marketplace", "CAN_USE_FB_MKT_PLACE_POSITION_IN_VIDEO_VIEW_15S"],
        ["facebook_reels_overlay", g],
        ["search", g],
        ["FB_stories", g],
        ["stream", g],
        ["story", g],
        ["explore", "CAN_USE_IG_EXPLORE_POSITION_IN_VIDEO_VIEW_15S"],
        ["classic", "CAN_USE_AN_CLASSIC_POSITION_IN_VIDEO_VIEW_15S"],
        ["AN_instream_video", g],
        ["rewarded_video", g],
        ["messenger_stories", g],
      ]),
      b = e.Map([
        ["feed", g],
        ["FB_stories", g],
        ["facebook_reels", g],
        ["stream", g],
        ["story", g],
        ["reels", g],
      ]),
      v = e.Map([
        [
          (c = r("AdsAPIOptimizationGoals")).TWO_SECOND_CONTINUOUS_VIDEO_VIEWS,
          h,
        ],
        [c.THRUPLAY, C],
        [c.CONSIDERATION, b],
      ]),
      S = e.Map([[c.TWO_SECOND_CONTINUOUS_VIDEO_VIEWS, y]]);
    function R(e) {
      var t = [];
      return (
        e.length >= d &&
          t.push(
            new (r("AdsError"))(
              2013012,
              u._(function (e, t) {
                return e._(/*BTDS*/ "");
              }, {}),
              { level: r("AdsError").Level.WARN },
            ),
          ),
        t
      );
    }
    function L(e) {
      var t = [];
      return (
        e.length < m &&
          t.push(
            new (r("AdsError"))(
              2013018,
              u._(function (e, t) {
                return e._(/*BTDS*/ "");
              }, {}),
              { level: r("AdsError").Level.WARN },
            ),
          ),
        e.spherical &&
          t.push(
            new (r("AdsError"))(
              2013022,
              u._(function (e, t) {
                return e._(/*BTDS*/ "");
              }, {}),
              { level: r("AdsError").Level.WARN },
            ),
          ),
        t
      );
    }
    function E(e, t) {
      var n = [];
      return (
        t.includes(r("AdsAPIOptimizationGoals").COMPLETED_VIDEO_VIEWS) &&
          (n = n.concat(R(e))),
        t.includes(
          r("AdsAPIOptimizationGoals").TWO_SECOND_CONTINUOUS_VIDEO_VIEWS,
        ) && (n = n.concat(L(e))),
        n
      );
    }
    function k(e, t, n) {
      e.forEach(function (e) {
        var r = e.id,
          o = E(e, n);
        if (t.has(r)) {
          var a = t.get(r);
          a && t.set(r, a.concat(o));
        } else t.set(r, o);
      });
    }
    function I(e, t) {
      if (e.buyingType === r("AdsBuyingTypes").RESERVED) return !0;
      var n = r("getByPath")(e, ["optimizationGoal"]);
      if (
        !n ||
        (n === r("AdsAPIOptimizationGoals").CONSIDERATION &&
          !r("isConsiderationPlacementLocked")(n))
      )
        return !0;
      var o = r("getByPath")(e, ["capabilities"]),
        a = v.get(n),
        i = S.get(n);
      if (a) {
        if (
          (i && i.includes(t)) ||
          (n ===
            r("AdsAPIOptimizationGoals").TWO_SECOND_CONTINUOUS_VIDEO_VIEWS &&
            t === "FB_stories") ||
          (n ===
            r("AdsAPIOptimizationGoals").TWO_SECOND_CONTINUOUS_VIDEO_VIEWS &&
            t === "marketplace")
        )
          return !0;
        var l = a.get(t);
        return l === g || o.includes(l);
      }
      return !0;
    }
    function T(e) {
      var t = r("getByPath")(e, ["optimizationGoal"]);
      return t
        ? !(
            t ===
              r("AdsAPIOptimizationGoals").TWO_SECOND_CONTINUOUS_VIDEO_VIEWS &&
            o("AdsPlacementAPISpecReaderUtils").isOnlyActiveDevicePlatform(
              e.spec,
              r("AdsAPIDevicePlatform").DESKTOP,
            )
          )
        : !0;
    }
    ((l.COMPLETED_VIEW_ERRORS = p),
      (l.MRC_VIEW_ERRORS = _),
      (l.getVideoBuyingVideoErrors = E),
      (l.addVideoBuyingVideoListErrors = k),
      (l.checkIfPlacementPositionValidForBuyingOption = I),
      (l.checkIfDevicePlatformValidForBuyingOption = T));
  },
  226,
);
