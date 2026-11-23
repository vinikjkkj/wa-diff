__d(
  "AdsUEditorCampaignTargetFrequencyInAuctionUtils",
  [
    "AdCampaignDestination",
    "AdsAPIOptimizationGoals",
    "AdsBuyingTypes",
    "AdsFrequencyControlEditorConstants",
    "AdsInstagramUserIdMigrationUtils",
    "AdsPlacementUtils",
    "AdsPromotedObjectTypes",
    "AdsReservationInAuctionConstants",
    "AdsTargetFrequencyInAuctionSharedPredictionUtils",
    "DateTime",
    "ReachFrequencyPredictionModes",
    "first",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = function (t) {
        var e = r("first")(t);
        if (e == null) return null;
        var n = {
          age_max: o("AdsReservationInAuctionConstants").DEFAULT_AGE_MAX,
          age_min: o("AdsReservationInAuctionConstants").DEFAULT_AGE_MIN,
        };
        return babelHelpers.extends({}, n, e);
      },
      u = function (t, n, a, i, l, u, c, d, m, p, _, f, g, h, y, C, b) {
        if (m == null || p == null || n == null || c == null || d == null)
          return null;
        var e = s(y);
        if (e == null) return null;
        var v =
            _ != null
              ? _
              : o("AdsFrequencyControlEditorConstants")
                  .DEFAULT_MAX_FREQUENCY_REVISED,
          S =
            f != null
              ? f
              : o("AdsFrequencyControlEditorConstants").DEFAULT_INTERVAL,
          R = function (t) {
            return Math.abs(Date.now() - t.getTime()) <
              Math.abs(Date.now() - t.getTime() * 1e3)
              ? 0.001
              : 1;
          },
          L = m.getTime() * R(m),
          E = p.getTime() * R(p),
          k = [];
        i != null && k.push(i);
        var I = o(
          "AdsInstagramUserIdMigrationUtils",
        ).getInstagramActorIdOrUserId(l, u);
        I != null &&
          k.push(
            o("AdsInstagramUserIdMigrationUtils").convertIGIDV1OrIGIDV2ToFBID(
              I,
            ),
          );
        var T = {
          account_id: t,
          budget: n,
          buying_type: r("AdsBuyingTypes").AUCTION,
          currency: a,
          day_parting_schedule: b,
          destination_ids: k,
          prediction_mode: r("ReachFrequencyPredictionModes").BUDGET.value,
          grp_buying: !1,
          is_higher_average_frequency: !1,
          is_reserved_buying: !1,
          is_reach_and_frequency_io_buying: !1,
          objective: c,
          optimization_goal: d,
          source: "ADS_CREATION.AUCTION.CAMPAIGN",
          start_time: L,
          stop_time: E,
          target_spec: e,
          timezone: g,
          is_balanced_frequency: !0,
          target_frequency: v,
          target_frequency_reset_period: S * 24,
          campaign_group_id: h,
        };
        return (C != null && (T.existing_campaign_id = C), T);
      },
      c = function (t, n, o, a, i) {
        return {
          buyingType: r("AdsBuyingTypes").AUCTION,
          capabilities: t.capabilities,
          isClickToMPAds: !1,
          productCatalogID: null,
          containsDCO: !1,
          containsOffer: !1,
          directInstallDevices: !1,
          objective: a,
          effectiveObjective: a,
          objectStoreURL: null,
          promotedObjectType: r("AdsPromotedObjectTypes").PAGE,
          promotedPageID: n,
          account: t,
          isClickToCallAds: !1,
          isIGProfileVisitAds: !1,
          isSKANAttribution: !1,
          destinationType: r("AdCampaignDestination").FACEBOOK,
          isConversionGoal: !0,
          optimizationGoal: i,
          spec: o,
        };
      },
      d = function (t, n, o, a, i) {
        if (i.publisher_platforms != null && i.publisher_platforms.length > 0)
          return m(a, i);
        var e = c(t, n, i, o, a),
          l = r("AdsPlacementUtils").getDefaultCampaignPlacement(e),
          s = babelHelpers.extends({}, l);
        return m(a, babelHelpers.extends({}, s, i));
      },
      m = function (t, n) {
        if (t === r("AdsAPIOptimizationGoals").THRUPLAY) {
          var e;
          ((n.publisher_platforms =
            (e = n.publisher_platforms) == null
              ? void 0
              : e.filter(function (e) {
                  return e.toLowerCase() !== "audience_network";
                })),
            (n.audience_network_positions = []));
        }
        return n;
      },
      p = function (t) {
        var e = new Set(["end_time", "targeting", "placement"]);
        return Array.from(t.getChangedFields()).some(function (t) {
          var n = r("first")(t.split(".", 1));
          return n == null || e.has(n);
        });
      },
      _ = function (t, n, a, i, l) {
        var e, s, c, m, p;
        i === void 0 && (i = !1);
        var _ = n.params;
        if (_ == null) return null;
        var f = function (n) {
            var e, r;
            return (e = (r = t.values.get(n)) == null ? void 0 : r.newValue) !=
              null
              ? e
              : null;
          },
          g = (e = _.destination_ids) != null ? e : [],
          h = r("first")(g),
          y = g.length > 1 ? g[1] : null,
          C = _.optimization_goal,
          b = JSON.parse(JSON.stringify((s = f("targeting")) != null ? s : {})),
          v =
            b != null && Object.keys(b).length > 0
              ? d(a, h, _.objective, C, b)
              : _.target_spec,
          S = r("first")((c = f("frequency_control_specs")) != null ? c : []),
          R = f("optimization_goal"),
          L = f("start_time"),
          E = f("end_time"),
          k = f("adset_schedule"),
          I = i ? null : t.objectID;
        return u(
          a.account_id,
          l != null ? l : _.budget,
          _.currency,
          h,
          o(
            "AdsInstagramUserIdMigrationUtils",
          ).convertIGIDV1FromStringToStrongType(y),
          o("AdsInstagramUserIdMigrationUtils").PLACEHOLDER_IGID_V2,
          _.objective,
          R != null ? R : _.optimization_goal,
          (L != null
            ? r("DateTime").fromISOString(L, a.timezone_id)
            : new (r("DateTime"))(_.start_time, a.timezone_id)
          ).toDate(),
          (E != null
            ? r("DateTime").fromISOString(E, a.timezone_id)
            : new (r("DateTime"))(_.stop_time, a.timezone_id)
          ).toDate(),
          parseInt(
            String(
              (m = S == null ? void 0 : S.get("max_frequency")) != null
                ? m
                : _.target_frequency,
            ),
            10,
          ),
          parseInt(
            String(
              (p = S == null ? void 0 : S.get("interval_days")) != null
                ? p
                : _.target_frequency_reset_period / 24,
            ),
            10,
          ),
          _.timezone,
          _.campaign_group_id,
          [v],
          I,
          k,
        );
      };
    ((l.getPredictionParamsForTargetFrequencyInAuction = u),
      (l.getEffectiveTargetSpec = d),
      (l.isPredictionRequiredForMidFlightEdit = p),
      (l.getNewPredictionParams = _),
      (l.selectedOptimizationMatchesPrediction = (e = o(
        "AdsTargetFrequencyInAuctionSharedPredictionUtils",
      )).selectedOptimizationMatchesPrediction),
      (l.getTargetFrequencyInAuctionErrorMessage =
        e.getTargetFrequencyInAuctionErrorMessage),
      (l.isTargetFrequencyInAuction = e.isTargetFrequencyInAuction),
      (l.getStartOfNextDayIfCampaignStartTimeInPast =
        e.getStartOfNextDayIfCampaignStartTimeInPast),
      (l.getUpdatedEndDateIfCampaignTooShort =
        e.getUpdatedEndDateIfCampaignTooShort));
  },
  98,
);
