__d(
  "AdsUEditorCampaignTargetFrequencyInAuctionUtils",
  [
    "AdCampaignDestination",
    "AdsAPIOptimizationGoals",
    "AdsBuyingTypes",
    "AdsFrequencyControlEditorConstants",
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
      u = function (t, n, a, i, l, u, c, d, m, p, _, f, g, h, y, C) {
        if (d == null || m == null || n == null || u == null || c == null)
          return null;
        var e = s(h);
        if (e == null) return null;
        var b =
            p != null
              ? p
              : o("AdsFrequencyControlEditorConstants")
                  .DEFAULT_MAX_FREQUENCY_REVISED,
          v =
            _ != null
              ? _
              : o("AdsFrequencyControlEditorConstants").DEFAULT_INTERVAL,
          S = function (t) {
            return Math.abs(Date.now() - t.getTime()) <
              Math.abs(Date.now() - t.getTime() * 1e3)
              ? 0.001
              : 1;
          },
          R = d.getTime() * S(d),
          L = m.getTime() * S(m),
          E = [];
        (i != null && E.push(i), l != null && E.push(l));
        var k = {
          account_id: t,
          budget: n,
          buying_type: r("AdsBuyingTypes").AUCTION,
          currency: a,
          day_parting_schedule: C,
          destination_ids: E,
          prediction_mode: r("ReachFrequencyPredictionModes").BUDGET.value,
          grp_buying: !1,
          is_higher_average_frequency: !1,
          is_reserved_buying: !1,
          is_reach_and_frequency_io_buying: !1,
          objective: u,
          optimization_goal: c,
          source: "ADS_CREATION.AUCTION.CAMPAIGN",
          start_time: R,
          stop_time: L,
          target_spec: e,
          timezone: f,
          is_balanced_frequency: !0,
          target_frequency: b,
          target_frequency_reset_period: v * 24,
          campaign_group_id: g,
        };
        return (y != null && (k.existing_campaign_id = y), k);
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
          l = r("AdsPlacementUtils").getDefaultCampaignPlacement(e);
        return m(a, babelHelpers.extends({}, l, i));
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
      _ = function (t, n, o, a, i) {
        var e, l, s, c, m;
        a === void 0 && (a = !1);
        var p = n.params;
        if (p == null) return null;
        var _ = function (n) {
            var e, r;
            return (e = (r = t.values.get(n)) == null ? void 0 : r.newValue) !=
              null
              ? e
              : null;
          },
          f = (e = p.destination_ids) != null ? e : [],
          g = r("first")(f),
          h = f.length > 1 ? f[1] : null,
          y = p.optimization_goal,
          C = JSON.parse(JSON.stringify((l = _("targeting")) != null ? l : {})),
          b =
            C != null && Object.keys(C).length > 0
              ? d(o, g, p.objective, y, C)
              : p.target_spec,
          v = r("first")((s = _("frequency_control_specs")) != null ? s : []),
          S = _("optimization_goal"),
          R = _("start_time"),
          L = _("end_time"),
          E = _("adset_schedule"),
          k = a ? null : t.objectID;
        return u(
          o.account_id,
          i != null ? i : p.budget,
          p.currency,
          g,
          h,
          p.objective,
          S != null ? S : p.optimization_goal,
          (R != null
            ? r("DateTime").fromISOString(R, o.timezone_id)
            : new (r("DateTime"))(p.start_time, o.timezone_id)
          ).toDate(),
          (L != null
            ? r("DateTime").fromISOString(L, o.timezone_id)
            : new (r("DateTime"))(p.stop_time, o.timezone_id)
          ).toDate(),
          parseInt(
            (c = v == null ? void 0 : v.get("max_frequency")) != null
              ? c
              : p.target_frequency,
            10,
          ),
          parseInt(
            (m = v == null ? void 0 : v.get("interval_days")) != null
              ? m
              : p.target_frequency_reset_period / 24,
            10,
          ),
          p.timezone,
          p.campaign_group_id,
          [b],
          k,
          E,
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
