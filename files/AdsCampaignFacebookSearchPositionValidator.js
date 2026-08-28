__d(
  "AdsCampaignFacebookSearchPositionValidator",
  [
    "errorCode",
    "errorDesc",
    "AdsAPIAccountPaths",
    "AdsAPICampaignPaths",
    "AdsAbstractValidator",
    "AdsError",
    "AdsPlacementSoftOptOutValidatorsUtils",
    "expandPaths",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = [],
      c = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getDependencies = function () {
            return {
              account: r("expandPaths")([r("AdsAPIAccountPaths").CAPABILITIES]),
              campaign: r("expandPaths")([
                r("AdsAPICampaignPaths").PLACEMENT_SOFT_OPT_OUT,
              ]),
              eligibilityInfo: null,
            };
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
              "search",
              a,
              n.objective,
            );
          }),
          (a.validate = function (n) {
            var t = n.campaign,
              a = n.eligibilityInfo;
            if (!a) return e;
            var i = [],
              l = a.spec,
              s = t.placement_soft_opt_out,
              c = o(
                "AdsPlacementSoftOptOutValidatorsUtils",
              ).isFacebookPositionActiveInSpecOrSoftOptOut(
                l,
                "feed",
                s,
                a.objective,
              );
            return (
              c ||
                i.push(
                  new (r("AdsError"))(
                    2490047,
                    u._(function (e, t) {
                      return e._(
                        /*BTDS*/ "To use Facebook Search, please also select the Facebook Feeds placement.",
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
          }),
          n
        );
      })(r("AdsAbstractValidator")),
      d = new c();
    l.default = d;
  },
  226,
);
