__d(
  "AdsCampaignThreadsFeedPositionValidator",
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
            ).isThreadsPositionActiveInSpecOrSoftOptOut(
              n.spec,
              "threads_stream",
              r,
              n.objective,
            );
          }),
          (n.validate = function (t) {
            var e = t.campaign,
              n = t.eligibilityInfo;
            if (!n) return [];
            var a = n.objective,
              i = n.spec,
              l = [],
              s = r("gkx")("5514"),
              c = e.placement_soft_opt_out,
              d = o(
                "AdsPlacementSoftOptOutValidatorsUtils",
              ).isInstagramPositionActiveInSpecOrSoftOptOut(i, "stream", c, a),
              m = o(
                "AdsPlacementSoftOptOutValidatorsUtils",
              ).isThreadsPositionActiveInSpecOrSoftOptOut(
                i,
                "threads_stream",
                c,
                a,
              ),
              p = r("gkx")("15112"),
              _ =
                p &&
                o(
                  "AdsPlacementSoftOptOutValidatorsUtils",
                ).isFacebookPositionActiveInSpecOrSoftOptOut(i, "feed", c, a);
            if (m && !d && !_ && !s) {
              var f = {
                cta: r("AdsErrorsCTAStrings").EDIT_PLACEMENTS_CTA,
                level: r("AdsError").Level.WARN,
                path: r("AdsAPICampaignPaths").TARGETING.THREADS_POSITIONS,
              };
              l.push(
                p
                  ? new (r("AdsError"))(
                      2490603,
                      u._(function (e, t) {
                        return e._(/*BTDS*/ "");
                      }, {}),
                      f,
                    )
                  : new (r("AdsError"))(
                      2490494,
                      u._(function (e, t) {
                        return e._(/*BTDS*/ "");
                      }, {}),
                      f,
                    ),
              );
            }
            return l;
          }),
          t
        );
      })(r("AdsAbstractValidator")),
      c = new e();
    l.default = c;
  },
  226,
);
