__d(
  "AdsUEditorCampaignGroupTargetFrequencyInAuctionUtils",
  [
    "AdsBuyingTypes",
    "AdsFrequencyControlEditorConstants",
    "AdsTargetFrequencyInAuctionSharedPredictionUtils",
    "AdsUEditorCampaignGroupL2AggregationUtils",
    "ReachFrequencyPredictionModes",
    "first",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (e == null) return null;
      if (e instanceof r("immutable").Map) {
        var n = e.get(t);
        return typeof n == "number" ? n : null;
      }
      return e[t];
    }
    function s(t, n, a, i, l) {
      var s,
        u,
        c,
        d,
        m,
        p,
        _,
        f,
        g,
        h,
        y,
        C,
        b,
        v,
        S = t.objectID,
        R = (s = r("first")(n)) == null ? void 0 : s[1],
        L =
          (u = (c = a.get(S)) == null ? void 0 : c.objective) != null
            ? u
            : "OUTCOME_AWARENESS",
        E = o(
          "AdsUEditorCampaignGroupL2AggregationUtils",
        ).aggregateCampaignParams(n, l, L);
      if (E == null) return null;
      var k =
        (d = t.lifetime_budget) != null
          ? d
          : Number((m = a.get(S)) == null ? void 0 : m.lifetime_budget);
      if (k == null || Number.isNaN(k)) return null;
      var I = r("first")((p = t.frequency_control_specs) != null ? p : []),
        T =
          (_ = a.get(S)) == null || (_ = _.frequency_control_specs) == null
            ? void 0
            : _[0],
        D = new Set();
      for (var x of n.values()) {
        var $,
          P,
          N = ($ = x.promoted_object) == null ? void 0 : $.page_id;
        N != null && D.add(N);
        var M =
          (P = x.promoted_object) == null ? void 0 : P.instagram_profile_id;
        M != null && D.add(M);
      }
      var w =
          (f =
            (g = e(I, "max_frequency")) != null
              ? g
              : T == null
                ? void 0
                : T.max_frequency) != null
            ? f
            : o("AdsFrequencyControlEditorConstants")
                .DEFAULT_MAX_FREQUENCY_REVISED,
        A =
          (h =
            (y = e(I, "interval_days")) != null
              ? y
              : T == null
                ? void 0
                : T.interval_days) != null
            ? h
            : o("AdsFrequencyControlEditorConstants").DEFAULT_INTERVAL;
      return {
        account_id: i,
        budget: k,
        buying_type: r("AdsBuyingTypes").AUCTION,
        campaign_group_id: S,
        currency: l.currency,
        day_parting_schedule: null,
        destination_ids: Array.from(D),
        grp_buying: !1,
        is_balanced_frequency: !0,
        is_higher_average_frequency: !1,
        is_reach_and_frequency_io_buying: !1,
        is_reserved_buying: !1,
        objective:
          (C = (b = a.get(S)) == null ? void 0 : b.objective) != null
            ? C
            : "OUTCOME_AWARENESS",
        optimization_goal:
          (v = R == null ? void 0 : R.optimization_goal) != null ? v : "REACH",
        prediction_mode: r("ReachFrequencyPredictionModes").BUDGET.value,
        source: "ADS_CREATION.AUCTION.CAMPAIGN_GROUP",
        start_time: E.start_time,
        stop_time: E.stop_time,
        target_frequency: w,
        target_frequency_reset_period: A * 24,
        target_spec: E.target_spec,
        timezone: l.timezone_id,
      };
    }
    function u(e, t, n, r, o, a, i) {
      i === void 0 && (i = !1);
      var l = s(e, r, n, a, o);
      if (l == null) return null;
      var u = t.params;
      return u != null && JSON.stringify(l) === JSON.stringify(u) ? null : l;
    }
    function c(e) {
      var t = new Set([
        "daily_budget",
        "lifetime_budget",
        "end_time",
        "frequency_control_specs",
        "bid_strategy",
      ]);
      for (var n of e) {
        var r = n.split(".")[0];
        if (t.has(r)) return !0;
      }
      return !1;
    }
    function d(e, t, n, o, a, i) {
      var l,
        u = r("first")(t);
      if (u == null) return null;
      var c = o.get(u);
      if (c == null) return null;
      var d = new Map();
      for (var m of t) {
        var p = a.get(m);
        p != null && p.hasValue() && d.set(m, p.getValueEnforcing().toJS());
      }
      var _ = new Map();
      _.set(e, c.toJS());
      var f = {
        objectID: e,
        bid_strategy: (l = c.bid_strategy) != null ? l : null,
        daily_budget: c.daily_budget != null ? Number(c.daily_budget) : null,
        lifetime_budget:
          c.lifetime_budget != null ? Number(c.lifetime_budget) : null,
        frequency_control_specs: n.map(function (e) {
          return {
            interval_days: e.interval_days,
            max_frequency: e.max_frequency,
          };
        }),
      };
      return s(f, d, _, i.account_id, i);
    }
    ((l.getNewCampaignGroupPredictionParams = u),
      (l.isPredictionRequiredForMidFlightCampaignGroupEdit = c),
      (l.buildInitialCampaignGroupPredictionParams = d),
      (l.getTargetFrequencyInAuctionCampaignGroupErrorMessage = o(
        "AdsTargetFrequencyInAuctionSharedPredictionUtils",
      ).getTargetFrequencyInAuctionErrorMessage));
  },
  98,
);
