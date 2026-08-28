__d(
  "AdsCampaignInstagramSearchPositionValidator",
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
            var r = e || {},
              a = r.placement_soft_opt_out;
            return o(
              "AdsPlacementSoftOptOutValidatorsUtils",
            ).isInstagramPositionActiveInSpecOrSoftOptOut(
              n.spec,
              "ig_search",
              a,
              n.objective,
            );
          }),
          (n.validate = function (t) {
            var e = t.campaign,
              n = t.eligibilityInfo;
            if (!n) return [];
            var a = e || {},
              i = a.placement_soft_opt_out,
              l = n.spec,
              s = [],
              c = o(
                "AdsPlacementSoftOptOutValidatorsUtils",
              ).isInstagramPositionActiveInSpecOrSoftOptOut(
                l,
                "ig_search",
                i,
                n.objective,
              ),
              d = o(
                "AdsPlacementSoftOptOutValidatorsUtils",
              ).isInstagramPositionActiveInSpecOrSoftOptOut(
                l,
                "stream",
                i,
                n.objective,
              );
            return (
              c &&
                !d &&
                s.push(
                  new (r("AdsError"))(
                    2490406,
                    u._(function (e, t) {
                      return e._(
                        /*BTDS*/ "If you would like your ad shown on the search section of Instagram, you will also need to select Instagram Feed as a placement.",
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
              s
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
