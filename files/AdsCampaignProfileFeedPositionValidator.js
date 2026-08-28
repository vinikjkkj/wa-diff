__d(
  "AdsCampaignProfileFeedPositionValidator",
  [
    "errorCode",
    "errorDesc",
    "AdsAPICampaignPaths",
    "AdsError",
    "AdsErrorsCTAStrings",
    "AdsPlacementSoftOptOutValidatorsUtils",
    "AdsStrictValidator",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = [],
      c = {
        account: { capabilities: null },
        campaign: null,
        eligibilityInfo: null,
      },
      d = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getDependencies = function () {
            return c;
          }),
          (a.shouldValidate = function (t) {
            var e = t.campaign,
              n = t.eligibilityInfo;
            if (!n) return !1;
            var r = n.spec,
              a = e.placement_soft_opt_out;
            return o(
              "AdsPlacementSoftOptOutValidatorsUtils",
            ).isFacebookPositionActiveInSpecOrSoftOptOut(
              r,
              "profile_feed",
              a,
              n.objective,
            );
          }),
          (a.validate = function (n) {
            var t = n.campaign,
              a = n.eligibilityInfo;
            if (!a) return e;
            var i = t.placement_soft_opt_out,
              l = [],
              s = o(
                "AdsPlacementSoftOptOutValidatorsUtils",
              ).isFacebookPositionActiveInSpecOrSoftOptOut(
                a.spec,
                "feed",
                i,
                a.objective,
              );
            return (
              s ||
                l.push(
                  new (r("AdsError"))(
                    2490438,
                    u._(function (e, t) {
                      return e._(
                        /*BTDS*/ "To use Facebook Profile Feed, please also select the Facebook Feeds placement.",
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
              l
            );
          }),
          n
        );
      })(r("AdsStrictValidator")),
      m = new d();
    l.default = m;
  },
  226,
);
