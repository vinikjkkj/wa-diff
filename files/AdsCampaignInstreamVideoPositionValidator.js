__d(
  "AdsCampaignInstreamVideoPositionValidator",
  [
    "errorCode",
    "errorDesc",
    "AdsAPICampaignPaths",
    "AdsAbstractValidator",
    "AdsError",
    "AdsErrorsCTAStrings",
    "AdsInstreamVideoValidationUtils",
    "AdsPlacementSoftOptOutValidatorsUtils",
    "FacebookReelsOverlayStoreUtils",
    "InstreamOnlyAuctionContextualTargetingUtils",
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
            var r = n.spec,
              a = e.placement_soft_opt_out;
            return o(
              "AdsPlacementSoftOptOutValidatorsUtils",
            ).isFacebookPositionActiveInSpecOrSoftOptOut(
              r,
              "instream_video",
              a,
              n.objective,
            );
          }),
          (n.validate = function (t) {
            var e = t.campaign,
              n = t.eligibilityInfo;
            if (!n) return [];
            var a = [],
              i = n.spec,
              l = e.placement_soft_opt_out,
              s = o(
                "AdsPlacementSoftOptOutValidatorsUtils",
              ).isFacebookPositionActiveInSpecOrSoftOptOut(
                i,
                "feed",
                l,
                n.objective,
              ),
              c = i == null ? void 0 : i.contextual_targeting_categories,
              d =
                o(
                  "FacebookReelsOverlayStoreUtils",
                ).instreamSkipBundleCheckGK() ||
                o("AdsInstreamVideoValidationUtils").getIsInstreamOnlyAllowed(
                  n,
                );
            !s &&
              !d &&
              a.push(
                new (r("AdsError"))(
                  1815468,
                  u._(function (e, t) {
                    return e._(
                      /*BTDS*/ "To use Facebook In-Stream Reel, please also select the Facebook News Feeds placement.",
                    );
                  }, {}),
                  {
                    cta: r("AdsErrorsCTAStrings").ADD_FACEBOOK_NEWS_FEED_CTA,
                    level: r("AdsError").Level.WARN,
                    path: r("AdsAPICampaignPaths").TARGETING.FACEBOOK_POSITIONS,
                  },
                ),
              );
            var m = r("gkx")("22178");
            if (
              (c != null &&
                c.length > 0 &&
                !m &&
                Number(c[0].id) === 1 &&
                a.push(
                  new (r("AdsError"))(
                    2490235,
                    u._(function (e, t) {
                      return e._(
                        /*BTDS*/ "Missing publisher topic: Select a specific publisher topic for your in-stream ad placement.",
                      );
                    }, {}),
                    {
                      cta: r("AdsErrorsCTAStrings")
                        .INSTREAM_CONTEXTUAL_CATEGORY_INVALID,
                      level: r("AdsError").Level.WARN,
                      path: ["targeting_contextual_targeting_categories"],
                    },
                  ),
                ),
              c != null && c.length > 0 && m)
            ) {
              var p = o("InstreamOnlyAuctionContextualTargetingUtils")
                .getContextualTargetingTopics()
                .map(function (e) {
                  return e.id.toString();
                });
              c.every(function (e) {
                return p.contains(e.id);
              }) ||
                a.push(this.$AdsCampaignInstreamVideoPositionValidator$p_1());
            }
            return a;
          }),
          (n.$AdsCampaignInstreamVideoPositionValidator$p_1 = function () {
            return new (r("AdsError"))(
              2490284,
              u._(function (e, t) {
                return e._(
                  /*BTDS*/ "The Topics You Selected For In-Stream Only Contextual Targeting are Invalid",
                );
              }, {}),
              {
                level: r("AdsError").Level.WARN,
                path: ["targeting_contextual_targeting_categories"],
              },
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
