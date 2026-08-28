__d(
  "AdsCampaignBizDiscoFeedPositionValidator",
  [
    "errorCode",
    "errorDesc",
    "AdsAPICampaignPaths",
    "AdsAbstractValidator",
    "AdsError",
    "AdsPlacementSoftOptOutValidatorsUtils",
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
              campaign: null,
              eligibilityInfo: null,
            };
          }),
          (n.shouldValidate = function (t) {
            var e = t.campaign,
              n = t.eligibilityInfo;
            if (!n) return !1;
            var r = n.spec,
              a = e.placement_soft_opt_out;
            return o(
              "AdsPlacementSoftOptOutValidatorsUtils",
            ).isFacebookPositionActiveInSpecOrSoftOptOut(
              r,
              "biz_disco_feed",
              a,
              n.objective,
            );
          }),
          (n.validate = function (t) {
            var e = t.campaign,
              n = t.eligibilityInfo,
              a = [];
            if (!n) return a;
            var i = e.placement_soft_opt_out,
              l = o(
                "AdsPlacementSoftOptOutValidatorsUtils",
              ).isFacebookPositionActiveInSpecOrSoftOptOut(
                n.spec,
                "feed",
                i,
                n.objective,
              );
            return (
              l ||
                a.push(
                  new (r("AdsError"))(
                    2490320,
                    u._(function (e, t) {
                      return e._(
                        /*BTDS*/ "To use Facebook Business Explore, please also select the Facebook News Feed placement.",
                      );
                    }, {}),
                    {
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
