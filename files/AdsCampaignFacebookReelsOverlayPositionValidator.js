__d(
  "AdsCampaignFacebookReelsOverlayPositionValidator",
  [
    "errorCode",
    "errorDesc",
    "AdsAPICampaignPaths",
    "AdsAbstractValidator",
    "AdsError",
    "AdsErrorsCTAStrings",
    "AdsODAXUtils",
    "AdsPlacementSoftOptOutValidatorsUtils",
    "adsPlacementAPISpecReaderIsActiveFacebookPosition",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = ["BRAND_AWARENESS", "REACH", "VIDEO_VIEWS"],
      c = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getDependencies = function () {
            return {
              campaign: { placement_soft_opt_out: null },
              eligibilityInfo: null,
            };
          }),
          (a.shouldValidate = function (t) {
            var e = t.campaign,
              n = t.eligibilityInfo;
            if (!n) return !1;
            var r = e.placement_soft_opt_out;
            return o(
              "AdsPlacementSoftOptOutValidatorsUtils",
            ).isFacebookPositionActiveInSpecOrSoftOptOut(
              n.spec,
              "facebook_reels_overlay",
              r,
              n.objective,
            );
          }),
          (a.validate = function (n) {
            var t = n.campaign,
              a = n.eligibilityInfo;
            if (!a) return [];
            var i = t.placement_soft_opt_out,
              l = r("adsPlacementAPISpecReaderIsActiveFacebookPosition")(
                a.spec,
                "facebook_reels_overlay",
              ),
              s = o(
                "AdsPlacementSoftOptOutValidatorsUtils",
              ).isFacebookPositionActiveInSpecOrSoftOptOut(
                a.spec,
                "feed",
                i,
                a.objective,
              ),
              c = r("adsPlacementAPISpecReaderIsActiveFacebookPosition")(
                a.spec,
                "instream_video",
              ),
              d = o("AdsODAXUtils").maybeTranslateObjective(
                a.objective,
                a.promotedObjectType,
                a.optimizationGoal,
              ),
              m = [];
            return (
              e.find(function (e) {
                return e === d;
              }) &&
                l &&
                !c &&
                m.push(
                  new (r("AdsError"))(
                    2490362,
                    u._(function (e, t) {
                      return e._(
                        /*BTDS*/ "To use the Facebook Reels Overlay placement, please also select the Facebook In-stream reels placement",
                      );
                    }, {}),
                    {
                      level: r("AdsError").Level.WARN,
                      path: r("AdsAPICampaignPaths").TARGETING
                        .FACEBOOK_POSITIONS,
                    },
                  ),
                ),
              !e.find(function (e) {
                return e === d;
              }) &&
                l &&
                !s &&
                m.push(
                  new (r("AdsError"))(
                    2490344,
                    u._(function (e, t) {
                      return e._(
                        /*BTDS*/ "To use the Facebook Reels Overlay placement, please also select the Facebook News Feeds placement.",
                      );
                    }, {}),
                    {
                      cta: r("AdsErrorsCTAStrings").ADD_FACEBOOK_NEWS_FEED_CTA,
                      level: r("AdsError").Level.WARN,
                      path: r("AdsAPICampaignPaths").TARGETING
                        .FACEBOOK_POSITIONS,
                    },
                  ),
                ),
              m
            );
          }),
          n
        );
      })(r("AdsAbstractValidator")),
      d = new c();
    l.default = d;
  },
  226,
);
