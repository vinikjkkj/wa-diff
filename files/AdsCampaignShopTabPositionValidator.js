__d(
  "AdsCampaignShopTabPositionValidator",
  [
    "errorCode",
    "errorDesc",
    "AdsAPICampaignPaths",
    "AdsAbstractValidator",
    "AdsError",
    "AdsErrorsCTAStrings",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPlacementSoftOptOutValidatorsUtils",
    "expandPaths",
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
            if (r("justknobx")._("4365")) {
              var a = e.placement_soft_opt_out;
              return o(
                "AdsPlacementSoftOptOutValidatorsUtils",
              ).isInstagramPositionActiveInSpecOrSoftOptOut(
                n.spec,
                "shop",
                a,
                n.objective,
              );
            }
            return o(
              "AdsPlacementAPISpecReaderUtils",
            ).isActiveInstagramPosition(n.spec, "shop");
          }),
          (n.validate = function (t) {
            var e = t.campaign,
              n = t.eligibilityInfo;
            if (!n) return [];
            var a = n.spec,
              i = [],
              l = r("justknobx")._("4365"),
              s,
              c;
            if (l) {
              var d = e.placement_soft_opt_out;
              ((s = o(
                "AdsPlacementSoftOptOutValidatorsUtils",
              ).isInstagramPositionActiveInSpecOrSoftOptOut(
                a,
                "shop",
                d,
                n.objective,
              )),
                (c = o(
                  "AdsPlacementSoftOptOutValidatorsUtils",
                ).isInstagramPositionActiveInSpecOrSoftOptOut(
                  a,
                  "stream",
                  d,
                  n.objective,
                )));
            } else
              ((s = o(
                "AdsPlacementAPISpecReaderUtils",
              ).isActiveInstagramPosition(a, "shop")),
                (c = o(
                  "AdsPlacementAPISpecReaderUtils",
                ).isActiveInstagramPosition(a, "stream")));
            return (
              s &&
                !c &&
                i.push(
                  new (r("AdsError"))(
                    2490312,
                    u._(function (e, t) {
                      return e._(
                        /*BTDS*/ "If you would like to run ads in Instagram Shop, you must also select Instagram Feed as a placement.",
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
