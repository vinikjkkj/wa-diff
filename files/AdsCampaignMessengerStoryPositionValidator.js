__d(
  "AdsCampaignMessengerStoryPositionValidator",
  [
    "errorCode",
    "errorDesc",
    "AdsAPIAccountPaths",
    "AdsAPICampaignPaths",
    "AdsAbstractValidator",
    "AdsError",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPlacementAPISpecReaderUtilsShared",
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
              account: r("expandPaths")([r("AdsAPIAccountPaths").CAPABILITIES]),
              campaign: r("expandPaths")([]),
              eligibilityInfo: null,
            };
          }),
          (n.shouldValidate = function (t) {
            var e = t.campaign,
              n = t.eligibilityInfo;
            return n
              ? o(
                  "AdsPlacementAPISpecReaderUtilsShared",
                ).isActiveMessengerPosition(n.spec, "story")
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
              ),
              c = r("adsPlacementAPISpecReaderIsActiveFacebookPosition")(
                l,
                "story",
              ),
              d = o("AdsPlacementAPISpecReaderUtils").isActiveInstagramPosition(
                l,
                "story",
              );
            return (
              s ||
                c ||
                d ||
                i.push(
                  new (r("AdsError"))(
                    1815985,
                    u._(function (e, t) {
                      return e._(
                        /*BTDS*/ "To use the Messenger Stories placement, please also select either Facebook Feeds or Instagram Stories.",
                      );
                    }, {}),
                    {
                      level: r("AdsError").Level.WARN,
                      path: r("AdsAPICampaignPaths").TARGETING
                        .MESSENGER_POSITIONS,
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
