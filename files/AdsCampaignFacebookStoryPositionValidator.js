__d(
  "AdsCampaignFacebookStoryPositionValidator",
  [
    "errorCode",
    "errorDesc",
    "AdsAPIAccountPaths",
    "AdsAPICampaignPaths",
    "AdsAPIObjectives",
    "AdsAbstractValidator",
    "AdsError",
    "AdsErrorsCTAStrings",
    "AdsPlacementSoftOptOutValidatorsUtils",
    "expandPaths",
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
              account: r("expandPaths")([r("AdsAPIAccountPaths").CAPABILITIES]),
              campaign: null,
              eligibilityInfo: null,
              effectiveObjective: null,
            };
          }),
          (n.shouldValidate = function (t) {
            var e = t.campaign,
              n = t.eligibilityInfo;
            if (!n) return !1;
            var r = e || {},
              a = r.placement_soft_opt_out;
            return o(
              "AdsPlacementSoftOptOutValidatorsUtils",
            ).isFacebookPositionActiveInSpecOrSoftOptOut(n.spec, "story", a);
          }),
          (n.validate = function (t) {
            var e = t.campaign,
              n = t.effectiveObjective,
              a = t.eligibilityInfo;
            if (!a) return [];
            var i = [],
              l = a.spec,
              s = e || {},
              c = s.placement_soft_opt_out,
              d = o(
                "AdsPlacementSoftOptOutValidatorsUtils",
              ).isFacebookPositionActiveInSpecOrSoftOptOut(a.spec, "feed", c),
              m = o(
                "AdsPlacementSoftOptOutValidatorsUtils",
              ).isInstagramPositionActiveInSpecOrSoftOptOut(l, "story", c);
            if (n === r("AdsAPIObjectives").PRODUCT_CATALOG_SALES)
              return (
                d ||
                  i.push(
                    new (r("AdsError"))(
                      2490019,
                      u._(function (e, t) {
                        return e._(
                          /*BTDS*/ "To use Facebook Stories, please select the Facebook Feeds placement.",
                        );
                      }, {}),
                      {
                        level: r("AdsError").Level.WARN,
                        path: r("AdsAPICampaignPaths").TARGETING
                          .FACEBOOK_POSITIONS,
                      },
                    ),
                  ),
                i
              );
            var p = d,
              _ = m;
            return (
              !p &&
                !_ &&
                i.push(
                  new (r("AdsError"))(
                    1815891,
                    u._(function (e, t) {
                      return e._(
                        /*BTDS*/ "To use Facebook Stories as a placement, please also select either Facebook Feeds or Instagram Stories.",
                      );
                    }, {}),
                    {
                      cta: r("AdsErrorsCTAStrings").EDIT_PLACEMENTS_CTA,
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
