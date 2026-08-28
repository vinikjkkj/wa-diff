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
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = 16,
      d = 3,
      m = new Set([2013012]),
      p = new Set([2013018, 2013022]),
      _ = function () {},
      f = new _(),
      g = (e = r("immutable")).Map([
        ["instant_article", "CAN_USE_FB_IA_POSITION_IN_MRC"],
        ["search", "ENABLE_TWO_SECOND_VIDEO_VIEW_FOR_SEARCH_ADS"],
        ["FB_stories", f],
        ["story", f],
      ]),
      h = [
        "feed",
        "instream_video",
        "suggested_video",
        "video_feeds",
        "stream",
        "explore",
        "classic",
        "AN_instream_video",
      ],
      y = e.Map([
        ["feed", "CAN_USE_FB_FEED_POSITION_IN_VIDEO_VIEW_15S"],
        ["instream_video", f],
        ["instant_article", f],
        ["suggested_video", f],
        ["video_feeds", f],
        ["marketplace", "CAN_USE_FB_MKT_PLACE_POSITION_IN_VIDEO_VIEW_15S"],
        ["facebook_reels_overlay", f],
        ["search", f],
        ["FB_stories", f],
        ["stream", f],
        ["story", f],
        ["explore", "CAN_USE_IG_EXPLORE_POSITION_IN_VIDEO_VIEW_15S"],
        ["classic", "CAN_USE_AN_CLASSIC_POSITION_IN_VIDEO_VIEW_15S"],
        ["AN_instream_video", f],
        ["rewarded_video", f],
        ["messenger_stories", f],
      ]),
      C = new Set([
        "instream_video",
        "facebook_reels_overlay",
        "AN_instream_video",
      ]),
      b = e.Map([
        [r("AdsAPIOptimizationGoals").TWO_SECOND_CONTINUOUS_VIDEO_VIEWS, g],
        [r("AdsAPIOptimizationGoals").THRUPLAY, y],
      ]),
      v = e.Map([
        [r("AdsAPIOptimizationGoals").TWO_SECOND_CONTINUOUS_VIDEO_VIEWS, h],
      ]);
    function S(e) {
      var t = [];
      return (
        e.length >= c &&
          t.push(
            new (r("AdsError"))(
              2013012,
              u._(function (e, t) {
                return e._(
                  /*BTDS*/ "Completed video view optimization only supports videos up to 15-seconds.",
                );
              }, {}),
              { level: r("AdsError").Level.WARN },
            ),
          ),
        t
      );
    }
    function R(e) {
      var t = [];
      return (
        e.length < d &&
          t.push(
            new (r("AdsError"))(
              2013018,
              u._(function (e, t) {
                return e._(
                  /*BTDS*/ "The 2-second continuous video view optimization only supports videos that are 3 seconds or longer.",
                );
              }, {}),
              { level: r("AdsError").Level.WARN },
            ),
          ),
        e.spherical &&
          t.push(
            new (r("AdsError"))(
              2013022,
              u._(function (e, t) {
                return e._(
                  /*BTDS*/ "360 videos aren't supported for the 2-second continuous video view optimization.",
                );
              }, {}),
              { level: r("AdsError").Level.WARN },
            ),
          ),
        t
      );
    }
    function L(e, t) {
      var n = [];
      return (
        t.includes(r("AdsAPIOptimizationGoals").COMPLETED_VIDEO_VIEWS) &&
          (n = n.concat(S(e))),
        t.includes(
          r("AdsAPIOptimizationGoals").TWO_SECOND_CONTINUOUS_VIDEO_VIEWS,
        ) && (n = n.concat(R(e))),
        n
      );
    }
    function E(e, t, n) {
      e.forEach(function (e) {
        var r = e.id,
          o = L(e, n);
        if (t.has(r)) {
          var a = t.get(r);
          a && t.set(r, a.concat(o));
        } else t.set(r, o);
      });
    }
    function k(e, t) {
      if (e.buyingType === r("AdsBuyingTypes").RESERVED) return !0;
      var n = r("getByPath")(e, ["optimizationGoal"]);
      if (!n) return !0;
      if (n === r("AdsAPIOptimizationGoals").SIX_SECOND_VIDEO_VIEWS && C.has(t))
        return !1;
      var o = r("getByPath")(e, ["capabilities"]),
        a = b.get(n),
        i = v.get(n);
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
        return l === f || o.includes(l);
      }
      return !0;
    }
    function I(e) {
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
    ((l.COMPLETED_VIEW_ERRORS = m),
      (l.MRC_VIEW_ERRORS = p),
      (l.getVideoBuyingVideoErrors = L),
      (l.addVideoBuyingVideoListErrors = E),
      (l.checkIfPlacementPositionValidForBuyingOption = k),
      (l.checkIfDevicePlatformValidForBuyingOption = I));
  },
  226,
);
