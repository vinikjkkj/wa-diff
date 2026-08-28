__d(
  "AdsCampaignFacebookNotificationPositionValidator",
  [
    "errorCode",
    "errorDesc",
    "AdsAPICampaignPaths",
    "AdsError",
    "AdsErrorsCTAStrings",
    "AdsPlacementSoftOptOutValidatorsUtils",
    "AdsStrictValidator",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = { campaign: null, eligibilityInfo: null },
      c = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getDependencies = function () {
            return e;
          }),
          (a.shouldValidate = function (t) {
            var e = t.campaign,
              n = t.eligibilityInfo;
            if (!n) return !1;
            var r = e.placement_soft_opt_out;
            return o(
              "AdsPlacementSoftOptOutValidatorsUtils",
            ).isFacebookPositionActiveInSpecOrSoftOptOut(
              n.spec,
              "notification",
              r,
              n.objective,
            );
          }),
          (a.validate = function (t) {
            var e = t.campaign,
              n = t.eligibilityInfo,
              a = [];
            if (!n) return [];
            var i = e.placement_soft_opt_out,
              l = o(
                "AdsPlacementSoftOptOutValidatorsUtils",
              ).isFacebookPositionActiveInSpecOrSoftOptOut(
                n.spec,
                "feed",
                i,
                n.objective,
              );
            return (
              l ||
                a.push(
                  new (r("AdsError"))(
                    2490517,
                    u._(function (e, t) {
                      return e._(
                        /*BTDS*/ "To use Facebook Notification, please also select Facebook Feed as a placement.",
                      );
                    }, {}),
                    {
                      level: r("AdsError").Level.WARN,
                      path: r("AdsAPICampaignPaths").TARGETING
                        .FACEBOOK_POSITIONS,
                      cta: r("AdsErrorsCTAStrings").ADD_FACEBOOK_NEWS_FEED_CTA,
                    },
                  ),
                ),
              a
            );
          }),
          n
        );
      })(r("AdsStrictValidator")),
      d = new c();
    l.default = d;
  },
  226,
);
