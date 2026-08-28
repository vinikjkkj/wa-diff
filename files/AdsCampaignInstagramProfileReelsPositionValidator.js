__d(
  "AdsCampaignInstagramProfileReelsPositionValidator",
  [
    "errorCode",
    "errorDesc",
    "AdsAPICampaignPaths",
    "AdsAbstractValidator",
    "AdsError",
    "adsPlacementAPISpecReaderIsActiveInstagramPosition",
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
            return { campaign: r("expandPaths")([]), eligibilityInfo: null };
          }),
          (n.shouldValidate = function (t) {
            var e = t.eligibilityInfo;
            return e
              ? r("adsPlacementAPISpecReaderIsActiveInstagramPosition")(
                  e.spec,
                  "profile_reels",
                )
              : !1;
          }),
          (n.validate = function (t) {
            var e = t.eligibilityInfo;
            if (!e) return [];
            var n = e.spec,
              o = r("adsPlacementAPISpecReaderIsActiveInstagramPosition")(
                n,
                "profile_reels",
              ),
              a = r("adsPlacementAPISpecReaderIsActiveInstagramPosition")(
                n,
                "reels",
              ),
              i = [];
            return (
              o &&
                !a &&
                i.push(
                  new (r("AdsError"))(
                    2490453,
                    u._(function (e, t) {
                      return e._(
                        /*BTDS*/ "If you would like your ad shown on the profile reels section of Instagram, you will also need to select Instagram Reels as a placement.",
                      );
                    }, {}),
                    {
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
