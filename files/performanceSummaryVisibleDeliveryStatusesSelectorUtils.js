__d(
  "performanceSummaryVisibleDeliveryStatusesSelectorUtils",
  [
    "AdsObjectTypes",
    "GeoButton.react",
    "geoMargin",
    "gkx",
    "nullthrows",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = [
        "ad_set_learning_exit_unsuccessfully",
        "auction_overlap_limited_learning_fail",
        "bid_limited_learning_fail",
        "budget_limited_learning_fail",
        "cost_limited_learning_fail",
        "dynamic_ads_no_valid_items",
        "is_ad_farm_penalized",
        "is_clickbait_penalized",
        "is_engagement_bait_penalized",
        "is_lqwe_penalized",
        "is_sensationalism_penalized",
        "learning_exit_unsuccessfully",
        "signal_diagnostic_issue",
        "soft_error_validation",
      ],
      c = [
        "ad_limit_reached",
        "ad_not_approved",
        "ad_set_affected_by_cbo_bid_strategy_change",
        "ad_set_inconsistent_bid_strategy_in_cbo",
        "ad_set_unsupported_event",
        "ad_set_unsupported_event_dynamic_ads",
        "ad_set_with_issues",
        "all_ad_sets_in_error",
        "all_ads_in_error",
        "campaign_inconsistent_bid_strategy_change",
        "campaign_with_issues",
        "draft_validation_error",
        "invalid_iterative_split_test",
        "with_issues",
      ],
      d = function (t, n, o, a, i, l, u, c, d) {
        var e = t.getSubstatusText(a, i, u.account_id, d),
          m = t.getSubstatusSourceLevel(a),
          p,
          _ = c.campaignGroupID,
          f = c.campaignID;
        if (a !== m)
          e: {
            if (a === r("AdsObjectTypes").ADGROUP) {
              p = m === r("AdsObjectTypes").CAMPAIGN_GROUP ? _ : f;
              break e;
            }
            if (a === r("AdsObjectTypes").CAMPAIGN) {
              p = _;
              break e;
            }
            break e;
          }
        p = p != null ? p : n;
        var g = t.getHovercardCTA(l, n, a, p, i, u, o, d);
        if (g != null) {
          var h = t.getHovercardTitle(i, a, o, d),
            y = t.getHovercardBody(i, a, o, u, d),
            C = g.onClick,
            b = s.jsx(r("GeoButton.react"), {
              label: g.label,
              onClick: C,
              variant: "default",
              xstyle: r("geoMargin").top4,
            }),
            v = t.getSecondaryLearnMoreID(i, a);
          return {
            CTAButton: b,
            hovercardBody: y,
            hoverCardCTAConfig: g,
            hovercardTitle: h,
            linkTargetAdObjectID: p,
            selectedAdObjectType: a,
            secondaryLearnMoreID: v,
            substatusPluginId: t.key,
            substatusText: e,
          };
        }
      };
    function m(e, t, n, o, a, i, l, s, m, p, _, f, g, h, y, C, b, v) {
      var S = [],
        R = [];
      if (r("gkx")("2029")) {
        var L = y(),
          E = L.selectedAdgroupIds,
          k = L.selectedCampaignGroupIds,
          I = L.selectedCampaignIds;
        (k != null &&
          k.forEach(function (e) {
            return $(e, r("AdsObjectTypes").CAMPAIGN_GROUP);
          }),
          I != null &&
            I.forEach(function (e) {
              return $(e, r("AdsObjectTypes").CAMPAIGN);
            }),
          E != null &&
            E.forEach(function (e) {
              return $(e, r("AdsObjectTypes").ADGROUP);
            }));
      } else {
        var T = h.selectedAdObjectType,
          D = h.selectedIdsAtCurrentLevel;
        e: {
          if (T === r("AdsObjectTypes").CAMPAIGN_GROUP) {
            D.forEach(function (e) {
              return $(e, r("AdsObjectTypes").CAMPAIGN_GROUP);
            });
            break e;
          }
          if (T === r("AdsObjectTypes").CAMPAIGN) {
            D.forEach(function (e) {
              return $(e, r("AdsObjectTypes").CAMPAIGN);
            });
            break e;
          }
          if (T === r("AdsObjectTypes").ADGROUP) {
            D.forEach(function (e) {
              return $(e, r("AdsObjectTypes").ADGROUP);
            });
            break e;
          }
          break e;
        }
      }
      function x(o) {
        e: {
          if (o === r("AdsObjectTypes").CAMPAIGN_GROUP) return e;
          if (o === r("AdsObjectTypes").CAMPAIGN) return t;
          if (o === r("AdsObjectTypes").ADGROUP) return n;
          break e;
        }
      }
      function $(e, t) {
        var n = x(t),
          h = r("nullthrows")(n)(e);
        if (
          h != null &&
          m != null &&
          (h.status === "warning" || h.status === "error")
        ) {
          var y,
            L = [],
            E,
            k = {};
          e: {
            if (t === r("AdsObjectTypes").CAMPAIGN_GROUP) {
              ((y = o), (k = { campaignGroupID: e }));
              break e;
            }
            if (t === r("AdsObjectTypes").CAMPAIGN) {
              ((y = a), (L = l(e)), (E = p(e)));
              var I = f(e);
              k = {
                campaignGroupID: I == null ? void 0 : I.campaign_id,
                campaignID: I == null ? void 0 : I.id,
              };
              break e;
            }
            if (t === r("AdsObjectTypes").ADGROUP) {
              y = i;
              var T = g(e),
                D = T == null ? void 0 : T.adset_id;
              (D != null && (E = p(D)),
                (L = s(e)),
                (k = {
                  campaignGroupID: T == null ? void 0 : T.campaign_id,
                  campaignID: T == null ? void 0 : T.adset_id,
                }));
              break e;
            }
            return;
          }
          var $ = y(e);
          if (m == null) return;
          var P = k,
            N = P.campaignGroupID,
            M = N != null ? _(N) : null,
            w = v({
              accountID: m.account_id,
              adAccount: m,
              adObjectID: e,
              adObjectLevel: t,
              campaignGroup: M,
              campaignInfo: E,
              combinedErrors: $,
              deliveryStatusInfo: h,
              issuesInfoErrors: L,
              linkTargetAdObjectIDSource: k,
              timezoneID: m.timezone_id,
              userAdPublishCompleteChallengeInfo: b,
            });
          if (w != null) {
            var A = w == null ? void 0 : w.accountID,
              F = w == null ? void 0 : w.substatusPlugins,
              O = w == null ? void 0 : w.adObjectExtraData,
              B = w == null ? void 0 : w.deliveryStatusInfo;
            A != null &&
              F != null &&
              B != null &&
              F.forEach(function (n) {
                var r = C.deliverySubstatusExclusionSet.has(n.key),
                  o =
                    C.deliverySubstatusToIDExclusionMap.get(n.key) || new Set();
                if (
                  !r &&
                  ((h.status === "warning" && u.includes(n.key)) ||
                    (h.status === "error" && c.includes(n.key))) &&
                  n.isEligibleForHovercard(m) &&
                  !o.has(e)
                ) {
                  var a = d(n, e, O, t, B, A, m, k, b);
                  a != null &&
                    (h.status === "warning" && S.push(a),
                    h.status === "error" && R.push(a));
                }
              });
          }
        }
      }
      return { visibleErrors: R, visibleWarnings: S };
    }
    l.performanceSummaryVisibleDeliveryStatuses = m;
  },
  98,
);
