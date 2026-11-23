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
            var e = t.campaign,
              n = t.eligibilityInfo;
            if (!n) return [];
            var a = [],
              i = n.spec,
              l;
            if (r("justknobx")._("4365")) {
              var s = e.placement_soft_opt_out;
              l = o(
                "AdsPlacementSoftOptOutValidatorsUtils",
              ).isFacebookPositionActiveInSpecOrSoftOptOut(
                i,
                "feed",
                s,
                n.objective,
              );
            } else
              l = r("adsPlacementAPISpecReaderIsActiveFacebookPosition")(
                i,
                "feed",
              );
            var c = r("gkx")("22358");
            return (
              !l &&
                !c &&
                a.push(
                  new (r("AdsError"))(
                    1815698,
                    u._(function (e, t) {
                      return e._(/*BTDS*/ "");
                    }, {}),
                    {
                      cta: r("AdsErrorsCTAStrings").ADD_FACEBOOK_NEWS_FEED_CTA,
                      level: r("AdsError").Level.WARN,
                      path: r("AdsAPICampaignPaths").TARGETING
                        .FACEBOOK_POSITIONS,
                    },
                  ),
                ),
              a
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
