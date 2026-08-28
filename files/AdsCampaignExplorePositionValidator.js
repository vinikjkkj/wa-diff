__d(
  "AdsCampaignExplorePositionValidator",
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
            return { campaign: null, eligibilityInfo: null };
          }),
          (n.shouldValidate = function (t) {
            var e = t.campaign,
              n = t.eligibilityInfo;
            if (!n) return !1;
            var r = n.spec,
              a = e.placement_soft_opt_out;
            return o(
              "AdsPlacementSoftOptOutValidatorsUtils",
            ).isInstagramPositionActiveInSpecOrSoftOptOut(
              r,
              "explore",
              a,
              n.objective,
            );
          }),
          (n.validate = function (t) {
            var e = t.campaign,
              n = t.eligibilityInfo;
            if (!n) return [];
            var a = n.spec,
              i = e.placement_soft_opt_out,
              l = o(
                "AdsPlacementSoftOptOutValidatorsUtils",
              ).isInstagramPositionActiveInSpecOrSoftOptOut(
                a,
                "explore",
                i,
                n.objective,
              ),
              s = o(
                "AdsPlacementSoftOptOutValidatorsUtils",
              ).isInstagramPositionActiveInSpecOrSoftOptOut(
                a,
                "stream",
                i,
                n.objective,
              ),
              c = [];
            return (
              (l && s) ||
                c.push(
                  new (r("AdsError"))(
                    2490068,
                    u._(function (e, t) {
                      return e._(
                        /*BTDS*/ "If you would like your ad shown on the Explore section of Instagram, you will also need to select Instagram Feed as a placement.",
                      );
                    }, {}),
                    {
                      level: r("AdsError").Level.WARN,
                      path: r("AdsAPICampaignPaths").TARGETING
                        .INSTAGRAM_POSITIONS,
                    },
                  ),
                ),
              c
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
