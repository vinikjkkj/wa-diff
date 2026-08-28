__d(
  "AdsCampaignGroupTabPositionValidator",
  [
    "errorCode",
    "errorDesc",
    "AdsAPIAccountPaths",
    "AdsAPICampaignPaths",
    "AdsAbstractValidator",
    "AdsError",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPlacementSoftOptOutValidatorsUtils",
    "expandPaths",
    "justknobx",
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
            var a = n.spec;
            if (r("justknobx")._("4365")) {
              var i = e.placement_soft_opt_out;
              return o(
                "AdsPlacementSoftOptOutValidatorsUtils",
              ).isFacebookPositionActiveInSpecOrSoftOptOut(
                a,
                "groups_feed",
                i,
                n.objective,
              );
            }
            return o("AdsPlacementAPISpecReaderUtils").isActivePosition(
              a,
              "facebook",
              "groups_feed",
            );
          }),
          (a.validate = function (n) {
            var t = n.campaign,
              a = n.eligibilityInfo;
            if (!a) return e;
            var i = [],
              l;
            if (r("justknobx")._("4365")) {
              var s = t.placement_soft_opt_out;
              l = o(
                "AdsPlacementSoftOptOutValidatorsUtils",
              ).isFacebookPositionActiveInSpecOrSoftOptOut(
                a.spec,
                "feed",
                s,
                a.objective,
              );
            } else
              l = o("AdsPlacementAPISpecReaderUtils").isActivePosition(
                a.spec,
                "facebook",
                "feed",
              );
            return (
              l ||
                i.push(
                  new (r("AdsError"))(
                    2490144,
                    u._(function (e, t) {
                      return e._(
                        /*BTDS*/ "To use Facebook Groups Feed, please also select the Facebook News Feed placement.",
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
