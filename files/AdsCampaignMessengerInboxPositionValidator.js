__d(
  "AdsCampaignMessengerInboxPositionValidator",
  [
    "errorCode",
    "errorDesc",
    "AdsAPIAccountPaths",
    "AdsAPICampaignPaths",
    "AdsAbstractValidator",
    "AdsError",
    "AdsErrorsCTAStrings",
    "AdsMessengerPlacementUtils",
    "AdsPlacementAPISpecReaderUtilsShared",
    "InboxAdBundlingErrorWithKeyCountryTargetingFalcoEvent",
    "adsPlacementAPISpecReaderIsActiveFacebookPosition",
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
              account: r("expandPaths")([r("AdsAPIAccountPaths").ACCOUNT_ID]),
              campaign: r("expandPaths")([
                r("AdsAPICampaignPaths").CAMPAIGN_ID,
              ]),
              eligibilityInfo: null,
            };
          }),
          (n.shouldValidate = function (t) {
            var e = t.eligibilityInfo;
            return e
              ? o(
                  "AdsPlacementAPISpecReaderUtilsShared",
                ).isActiveMessengerPosition(e.spec, "messenger_home")
              : !1;
          }),
          (n.validate = function (t) {
            var e = t.account,
              n = t.campaign,
              a = t.eligibilityInfo;
            if (!a) return [];
            var i = [],
              l = a.spec,
              s = r("adsPlacementAPISpecReaderIsActiveFacebookPosition")(
                l,
                "feed",
              );
            return (
              s ||
                (i.push(
                  new (r("AdsError"))(
                    1815568,
                    u._(function (e, t) {
                      return e._(
                        /*BTDS*/ "To use Messenger Inbox, please also select the Facebook Feeds placement.",
                      );
                    }, {}),
                    {
                      cta: r("AdsErrorsCTAStrings").ADD_FACEBOOK_NEWS_FEED_CTA,
                      level: r("AdsError").Level.WARN,
                      path: r("AdsAPICampaignPaths").TARGETING
                        .MESSENGER_POSITIONS,
                    },
                  ),
                ),
                o(
                  "AdsMessengerPlacementUtils",
                ).isOnlyTargetingRolledBackCountriesFromTypedGeoLocations(
                  a.targetingGeoLocations,
                ) &&
                  r(
                    "InboxAdBundlingErrorWithKeyCountryTargetingFalcoEvent",
                  ).log(function () {
                    return {
                      ad_account_id: e ? String(e.account_id) : null,
                      adset_id: String(n.id),
                    };
                  })),
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
