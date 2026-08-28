__d(
  "AdsCampaignInstagramProfileFeedPositionValidator",
  [
    "errorCode",
    "errorDesc",
    "AdsAPICampaignPaths",
    "AdsAbstractValidator",
    "AdsError",
    "AdsErrorsCTAStrings",
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
            return { campaign: null, eligibilityInfo: null };
          }),
          (n.shouldValidate = function (t) {
            var e = t.campaign,
              n = t.eligibilityInfo;
            if (!n) return !1;
            var r = e.placement_soft_opt_out;
            return o(
              "AdsPlacementSoftOptOutValidatorsUtils",
            ).isInstagramPositionActiveInSpecOrSoftOptOut(
              n.spec,
              "profile_feed",
              r,
              n.objective,
            );
          }),
          (n.validate = function (t) {
            var e = t.campaign,
              n = t.eligibilityInfo;
            if (!n) return [];
            var a = n.spec,
              i = [],
              l = e.placement_soft_opt_out,
              s = o(
                "AdsPlacementSoftOptOutValidatorsUtils",
              ).isInstagramPositionActiveInSpecOrSoftOptOut(
                a,
                "profile_feed",
                l,
                n.objective,
              ),
              c = o(
                "AdsPlacementSoftOptOutValidatorsUtils",
              ).isInstagramPositionActiveInSpecOrSoftOptOut(
                a,
                "stream",
                l,
                n.objective,
              );
            return (
              s &&
                !c &&
                i.push(
                  new (r("AdsError"))(
                    2490397,
                    u._(function (e, t) {
                      return e._(
                        /*BTDS*/ "If you would like your ad shown on the profile feed section of Instagram, you will also need to select Instagram Feed as a placement.",
                      );
                    }, {}),
                    {
                      cta: r("AdsErrorsCTAStrings").EDIT_PLACEMENTS_CTA,
                      level: r("AdsError").Level.WARN,
                      path: r("AdsAPICampaignPaths").TARGETING
                        .INSTAGRAM_POSITIONS,
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
