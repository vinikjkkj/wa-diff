__d(
  "AdsCampaignMarketplacePositionValidator",
  [
    "errorCode",
    "errorDesc",
    "AdsAPICampaignPaths",
    "AdsAbstractValidator",
    "AdsError",
    "AdsErrorsCTAStrings",
    "AdsPlacementSoftOptOutValidatorsUtils",
    "adsPlacementAPISpecReaderIsActiveFacebookPosition",
    "expandPaths",
    "gkx",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getDependencies = function () {
            return {
              account: { capabilities: null },
              campaign: r("expandPaths")([
                r("AdsAPICampaignPaths").PLACEMENT_SOFT_OPT_OUT,
              ]),
              eligibilityInfo: null,
            };
          }),
          (n.shouldValidate = function (t) {
            var e = t.campaign,
              n = t.eligibilityInfo;
            if (!n) return !1;
            var a = n.spec;
            if (r("justknobx")._("4365")) {
              var i = e.placement_soft_opt_out;
              return o(
                "AdsPlacementSoftOptOutValidatorsUtils",
              ).isFacebookPositionActiveInSpecOrSoftOptOut(
                a,
                "marketplace",
                i,
                n.objective,
              );
            }
            return r("adsPlacementAPISpecReaderIsActiveFacebookPosition")(
              a,
              "marketplace",
            );
          }),
          (n.validate = function (t) {
            var e = t.account,
              n = t.campaign,
              a = t.eligibilityInfo;
            if (!a) return [];
            var i = [],
              l = a.spec,
              s;
            if (r("justknobx")._("4365")) {
              var c = n.placement_soft_opt_out;
              s = o(
                "AdsPlacementSoftOptOutValidatorsUtils",
              ).isFacebookPositionActiveInSpecOrSoftOptOut(
                l,
                "feed",
                c,
                a.objective,
              );
            } else
              s = r("adsPlacementAPISpecReaderIsActiveFacebookPosition")(
                l,
                "feed",
              );
            var d = r("gkx")("22358");
            return (
              !s &&
                !d &&
                i.push(
                  new (r("AdsError"))(
                    1815698,
                    u._(function (e, t) {
                      return e._(
                        /*BTDS*/ "To use Facebook Marketplace, please also select the Facebook Feeds placement.",
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
              i
            );
          }),
          t
        );
      })(r("AdsAbstractValidator")),
      c = new e();
    l.default = c;
  },
  226,
);
