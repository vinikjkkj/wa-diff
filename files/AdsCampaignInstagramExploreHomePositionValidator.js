__d(
  "AdsCampaignInstagramExploreHomePositionValidator",
  [
    "errorCode",
    "errorDesc",
    "AdsAPICampaignPaths",
    "AdsAbstractValidator",
    "AdsError",
    "AdsErrorsCTAStrings",
    "AdsPlacementSoftOptOutValidatorsUtils",
    "gkx",
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
              "explore_home",
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
                "explore_home",
                l,
                n.objective,
              ),
              c = o(
                "AdsPlacementSoftOptOutValidatorsUtils",
              ).isInstagramPositionActiveInSpecOrSoftOptOut(
                a,
                "explore",
                l,
                n.objective,
              ),
              d = o(
                "AdsPlacementSoftOptOutValidatorsUtils",
              ).isInstagramPositionActiveInSpecOrSoftOptOut(
                a,
                "stream",
                l,
                n.objective,
              ),
              m = r("gkx")("6500");
            return (
              m && s && !d
                ? i.push(
                    new (r("AdsError"))(
                      2238294,
                      u._(function (e, t) {
                        return e._(
                          /*BTDS*/ "To use IG Explore Home as a placement, please also select Instagram Feed placement.",
                        );
                      }, {}),
                      {
                        cta: r("AdsErrorsCTAStrings").EDIT_PLACEMENTS_CTA,
                        level: r("AdsError").Level.WARN,
                        path: r("AdsAPICampaignPaths").TARGETING
                          .INSTAGRAM_POSITIONS,
                      },
                    ),
                  )
                : !m &&
                  s &&
                  !c &&
                  i.push(
                    new (r("AdsError"))(
                      2490392,
                      u._(function (e, t) {
                        return e._(
                          /*BTDS*/ "To place ads in Instagram Explore Home, please also select Instagram Explore.",
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
