__d(
  "AdsAPlusCVideoUncropUtils",
  ["$InternalEnum", "compactMap", "gkx", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum").Mirrored([
        "IG_FEED",
        "IG_REELS",
        "IG_STORIES",
        "FB_REELS",
        "FB_FEED_2X3",
        "FB_FEED_4X5",
        "IG_FEED_2X3_UNCROP",
        "IG_FEED_SUPERCROP_4X5",
        "IG_FEED_SUPERCROP_2X3",
      ]),
      s = r("immutable").Map([
        [
          e.IG_REELS,
          {
            adCreativeOptimizationType: 154,
            adCreativeOptimizationOptionValue: 1540107,
            apiFormat: "INSTAGRAM_REELS",
          },
        ],
        [
          e.IG_STORIES,
          {
            adCreativeOptimizationType: 154,
            adCreativeOptimizationOptionValue: 1540108,
            apiFormat: "INSTAGRAM_STORY",
          },
        ],
        [
          e.IG_FEED,
          {
            adCreativeOptimizationType: 227,
            adCreativeOptimizationOptionValue: 2270101,
            apiFormat: "INSTAGRAM_STANDARD",
          },
        ],
        [
          e.FB_REELS,
          {
            adCreativeOptimizationType: 340,
            adCreativeOptimizationOptionValue: 3400003,
            apiFormat: "FACEBOOK_REELS_MOBILE",
          },
        ],
        [
          e.FB_FEED_2X3,
          {
            adCreativeOptimizationType: 67,
            adCreativeOptimizationOptionValue: 670007,
            apiFormat: "FACEBOOK_PROFILE_FEED_MOBILE",
          },
        ],
        [
          e.FB_FEED_4X5,
          {
            adCreativeOptimizationType: 67,
            adCreativeOptimizationOptionValue: 670005,
            apiFormat: "FACEBOOK_PROFILE_FEED_MOBILE",
          },
        ],
        [
          e.IG_FEED_2X3_UNCROP,
          {
            adCreativeOptimizationType: 227,
            adCreativeOptimizationOptionValue: 2270106,
            apiFormat: "INSTAGRAM_PROFILE_FEED",
          },
        ],
        [
          e.IG_FEED_SUPERCROP_4X5,
          {
            adCreativeOptimizationType: 458,
            adCreativeOptimizationOptionValue: 670005,
            apiFormat: "INSTAGRAM_STANDARD",
          },
        ],
        [
          e.IG_FEED_SUPERCROP_2X3,
          {
            adCreativeOptimizationType: 458,
            adCreativeOptimizationOptionValue: 670007,
            apiFormat: "INSTAGRAM_PROFILE_FEED",
          },
        ],
      ]);
    function u() {
      var t = [e.FB_REELS, e.FB_FEED_4X5];
      return (
        t.push(e.IG_STORIES, e.IG_REELS),
        r("gkx")("20392") && t.push(e.IG_FEED_2X3_UNCROP),
        r("gkx")("12541") &&
          (t.push(e.IG_FEED_SUPERCROP_4X5), t.push(e.IG_FEED_SUPERCROP_2X3)),
        t
      );
    }
    function c(e) {
      return e ? r("gkx")("11407") : r("gkx")("11408");
    }
    function d(e) {
      return s
        .filter(function (t) {
          return (
            t.adCreativeOptimizationOptionValue ===
              e.adCreativeOptimizationOptionValue &&
            t.adCreativeOptimizationType === e.adCreativeOptimizationType &&
            t.apiFormat === e.apiFormat
          );
        })
        .keys()
        .next().value;
    }
    function m(e) {
      return s.get(e);
    }
    function p() {
      var e = r("compactMap")(u(), function (e) {
        return m(e);
      }).map(function (e) {
        return {
          adCreativeOptimizationType: e.adCreativeOptimizationType,
          adCreativeOptimizationOptionValue:
            e.adCreativeOptimizationOptionValue,
          apiFormat: e.apiFormat,
          shouldUsePreloader: !0,
        };
      });
      return r("immutable").List(e);
    }
    var _ = [
        {
          adCreativeOptimizationType: 67,
          adCreativeOptimizationOptionValue: 670003,
          apiFormat: "MOBILE_FEED_STANDARD",
        },
      ],
      f = [
        {
          adCreativeOptimizationType: 227,
          adCreativeOptimizationOptionValue: 2270004,
          apiFormat: "INSTAGRAM_STANDARD",
        },
        {
          adCreativeOptimizationType: 154,
          adCreativeOptimizationOptionValue: 1540005,
          apiFormat: "INSTAGRAM_STORY",
        },
        {
          adCreativeOptimizationType: 154,
          adCreativeOptimizationOptionValue: 1540005,
          apiFormat: "INSTAGRAM_REELS",
        },
      ],
      g = {
        adCreativeOptimizationType: 227,
        adCreativeOptimizationOptionValue: 2270012,
        apiFormat: "INSTAGRAM_PROFILE_FEED",
      };
    function h() {
      var e = [].concat(_);
      return (
        e.push.apply(e, f),
        r("gkx")("20392") && e.push(g),
        r("immutable").List(
          e.map(function (e) {
            return {
              adCreativeOptimizationType: e.adCreativeOptimizationType,
              adCreativeOptimizationOptionValue:
                e.adCreativeOptimizationOptionValue,
              apiFormat: e.apiFormat,
              shouldUsePreloader: !1,
            };
          }),
        )
      );
    }
    function y(e) {
      return e ? r("gkx")("10129") : r("gkx")("12679");
    }
    ((l.VideoUncropVariations = e),
      (l.passVideoUncropLivePreviewGk = c),
      (l.getVideoUncropVariationFromOptInfo = d),
      (l.getVideoUncropACOInfoListForAdgroup = p),
      (l.getVideoAutoCropACOInfoList = h),
      (l.passVideoUncropUnificationGk = y));
  },
  98,
);
