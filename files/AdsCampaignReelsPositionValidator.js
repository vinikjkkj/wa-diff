__d(
  "AdsCampaignReelsPositionValidator",
  [
    "errorCode",
    "errorDesc",
    "AdsAPICampaignPaths",
    "AdsAPIObjectives",
    "AdsAbstractValidator",
    "AdsError",
    "AdsErrorsCTAStrings",
    "AdsPlacementAPISpecReaderUtils",
    "expandPaths",
    "immutable",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    function e(e, t) {
      var n;
      return (
        !o("AdsPlacementAPISpecReaderUtils").isOnlyActivePublisherPlatform(
          e,
          "instagram",
        ) ||
        ((n = e.instagram_positions) != null ? n : []).some(function (e) {
          return !t.has(e);
        })
      );
    }
    var c = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getDependencies = function () {
            return { campaign: r("expandPaths")([]), eligibilityInfo: null };
          }),
          (a.shouldValidate = function (t) {
            var e = t.eligibilityInfo;
            return e
              ? o("AdsPlacementAPISpecReaderUtils").isActiveInstagramPosition(
                  e.spec,
                  "reels",
                )
              : !1;
          }),
          (a.validate = function (n) {
            var t = n.eligibilityInfo;
            if (!t) return [];
            var a = t.spec,
              i =
                o("AdsPlacementAPISpecReaderUtils").isActiveInstagramPosition(
                  a,
                  "reels",
                ) && e(a, r("immutable").Set(["reels", "story"])),
              l = [];
            return (
              !i &&
                (t.objective === r("AdsAPIObjectives").OUTCOME_SALES ||
                  t.objective ===
                    r("AdsAPIObjectives").PRODUCT_CATALOG_SALES) &&
                l.push(
                  new (r("AdsError"))(
                    1443440,
                    u._(function (e, t) {
                      return e._(
                        /*BTDS*/ "Ads placed on Instagram Reels exclusively don't support catalog sales ad. Please select Instagram Reels with at least one other placement",
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
              l
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
