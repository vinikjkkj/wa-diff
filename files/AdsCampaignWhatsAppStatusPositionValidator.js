__d(
  "AdsCampaignWhatsAppStatusPositionValidator",
  [
    "errorCode",
    "errorDesc",
    "AdCampaignDestination",
    "AdsAPICampaignPaths",
    "AdsAbstractValidator",
    "AdsError",
    "AdsErrorsCTAStrings",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPlacementSoftOptOutValidatorsUtils",
    "WAMOLabelStrings",
    "WAMOStatusAdsManagerUtils",
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
              campaign: babelHelpers.extends(
                {},
                r("expandPaths")([
                  r("AdsAPICampaignPaths").PLACEMENT_SOFT_OPT_OUT,
                ]),
                r("expandPaths")([r("AdsAPICampaignPaths").OPTIMIZATION_GOAL]),
                r("expandPaths")([r("AdsAPICampaignPaths").DESTINATION_TYPE]),
              ),
              eligibilityInfo: null,
            };
          }),
          (n.shouldValidate = function (t) {
            var e = t.eligibilityInfo;
            return e
              ? o("AdsPlacementAPISpecReaderUtils").isActiveWhatsAppPosition(
                  e.spec,
                  "status",
                )
              : !1;
          }),
          (n.validate = function (t) {
            var e = t.campaign,
              n = t.eligibilityInfo;
            if (!n) return [];
            var a = n.spec,
              i = [],
              l;
            if (r("justknobx")._("4365")) {
              var s = e.placement_soft_opt_out;
              l = o(
                "AdsPlacementSoftOptOutValidatorsUtils",
              ).isInstagramPositionActiveInSpecOrSoftOptOut(
                a,
                "story",
                s,
                n.objective,
              );
            } else
              l = o("AdsPlacementAPISpecReaderUtils").isActiveInstagramPosition(
                a,
                "story",
              );
            var c =
              o("AdsPlacementAPISpecReaderUtils").isActiveWhatsAppPosition(
                a,
                "status",
              ) &&
              !l &&
              o(
                "WAMOStatusAdsManagerUtils",
              ).isAdAccountEligibleForWAMOStatus() &&
              !o(
                "WAMOStatusAdsManagerUtils",
              ).canSkipWAMOStatusOnlyBundlingCheck(e.optimization_goal);
            return c
              ? o(
                  "WAMOStatusAdsManagerUtils",
                ).isAdAccountInWAMOStatusOnlyReachImpExpansion()
                ? (e.destination_type === r("AdCampaignDestination").ON_VIDEO
                    ? i.push(
                        new (r("AdsError"))(
                          4399016,
                          o("WAMOLabelStrings")
                            .STATUS_ONLY_CONVERSION_LOCATION_ERROR,
                          {
                            cta: o("WAMOLabelStrings")
                              .STATUS_ONLY_EDIT_CONVERSION_SETTINGS_CTA,
                            level: r("AdsError").Level.WARN,
                            path: r("AdsAPICampaignPaths").OPTIMIZATION_GOAL,
                          },
                        ),
                      )
                    : i.push(
                        new (r("AdsError"))(
                          4399015,
                          o("WAMOLabelStrings").STATUS_ONLY_PERF_GOAL_ERROR,
                          {
                            cta: o("WAMOLabelStrings")
                              .STATUS_ONLY_EDIT_PERF_GOAL_CTA,
                            level: r("AdsError").Level.WARN,
                            path: r("AdsAPICampaignPaths").OPTIMIZATION_GOAL,
                          },
                        ),
                      ),
                  i)
                : (i.push(
                    new (r("AdsError"))(
                      4399008,
                      u._(function (e, t) {
                        return e._(
                          /*BTDS*/ "Instagram Stories required for WhatsApp Status: To use the WhatsApp Status placement, you\u2019ll need to include Instagram Stories.",
                        );
                      }, {}),
                      {
                        cta: r("AdsErrorsCTAStrings").EDIT_PLACEMENTS_CTA,
                        level: r("AdsError").Level.WARN,
                        path: r("AdsAPICampaignPaths").TARGETING
                          .WHATSAPP_POSITIONS,
                      },
                    ),
                  ),
                  i)
              : i;
          }),
          t
        );
      })(r("AdsAbstractValidator")),
      c = new e();
    l.default = c;
  },
  226,
);
