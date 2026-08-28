__d(
  "AdsCampaignTargetFrequencyInAuctionRegenerateCampaignGroupPredictionTriggerReducerUtils",
  [
    "AdsDataAtom",
    "AdsDraftFragmentStoreStateUtils",
    "AdsTargetFrequencyInAuctionRegenerateCGPredictionTriggerReducerSharedUtils",
    "AdsUEditorCampaignGroupTargetFrequencyInAuctionGeneratePredictionAction",
    "AdsUEditorCampaignGroupTargetFrequencyInAuctionUtils",
    "AdsUEditorHostIDs",
    "firstx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Set([
        "optimization_goal",
        "targeting",
        "placement",
        "start_time",
        "end_time",
        "promoted_object",
      ]);
    function u(e, t, n) {
      var r = e.get(t);
      if (r == null) return n;
      var o = r.newValue;
      return o != null && typeof o.toJS == "function" ? o.toJS() : o;
    }
    function c(e, t) {
      var n = t.values;
      return {
        end_time: u(n, "end_time", e.end_time),
        optimization_goal: u(n, "optimization_goal", e.optimization_goal),
        placement: u(n, "placement", e.placement),
        promoted_object: u(n, "promoted_object", e.promoted_object),
        start_time: u(n, "start_time", e.start_time),
        targeting: u(n, "targeting", e.targeting),
      };
    }
    function d(t, n, a) {
      var l = a.account,
        u = a.campaignDataGetter,
        d = a.campaignGroupDataGetter,
        m = a.campaignIDsGetter,
        p = a.frequencyOptions,
        _ = l.getValue();
      if (_ == null) return t;
      var f = t,
        g = new Map(),
        h = Array.from(t.keys()).filter(function (e) {
          var n;
          return ((n = t.get(e)) == null ? void 0 : n.success) != null;
        });
      for (var y of h) {
        var C = o(
          "AdsTargetFrequencyInAuctionRegenerateCGPredictionTriggerReducerSharedUtils",
        ).shouldSkipCGDraft(y, t, p);
        if (C != null) {
          var b = C.predictionStatus,
            v = C.prevParams,
            S = r("firstx")(d([y]));
          if (S[1].hasValue()) {
            var R = S[1].getValueEnforcing(),
              L = R.frequency_control_specs,
              E = (L != null ? L : []).some(function (e) {
                return (e == null ? void 0 : e.type) === "TARGET";
              });
            if (E) {
              var k = m(_.account_id, y);
              if (k.length !== 0) {
                var I = o("AdsDraftFragmentStoreStateUtils").getAll(n, k),
                  T = !1,
                  D = !1;
                for (var x of I) {
                  var $ = x[1];
                  if ($.hasValue()) {
                    var P = $.getValueEnforcing(),
                      N = P.getChangedFields(),
                      M = N.some(function (e) {
                        return s.has(e.split(".")[0]);
                      });
                    if (M) {
                      var w = o(
                        "AdsTargetFrequencyInAuctionRegenerateCGPredictionTriggerReducerSharedUtils",
                      ).checkOptimizationGoalMatch(P, v);
                      if (w === "mismatch") {
                        D = !0;
                        break;
                      }
                      T = !0;
                    }
                  }
                }
                if (D) {
                  f = f.delete(y);
                  continue;
                }
                if (T) {
                  var A = u(k),
                    F = new Map();
                  for (var O of A.entries()) {
                    var B = O[0],
                      W = O[1];
                    if (W.hasValue()) {
                      var q = W.getValueEnforcing(),
                        U = I.get(B),
                        V =
                          U != null && U.hasValue()
                            ? U.getValueEnforcing()
                            : null;
                      F.set(B, V != null ? c(q, V) : q);
                    }
                  }
                  if (F.size !== 0) {
                    var H = o(
                        "AdsTargetFrequencyInAuctionRegenerateCGPredictionTriggerReducerSharedUtils",
                      ).buildCGDraftFragmentFromPrevParams(y, v),
                      G = new Map();
                    G.set(y, R);
                    var z = o(
                      "AdsUEditorCampaignGroupTargetFrequencyInAuctionUtils",
                    ).getNewCampaignGroupPredictionParams(
                      H,
                      b,
                      G,
                      F,
                      _,
                      _.account_id,
                    );
                    z != null && g.set(y, z);
                  }
                }
              }
            }
          }
        }
      }
      var j = function () {
        var t = K[0],
          n = K[1];
        ((e || (e = r("AdsDataAtom"))).addPostDispatchCallback(function () {
          r(
            "AdsUEditorCampaignGroupTargetFrequencyInAuctionGeneratePredictionAction",
          ).dispatch(
            {
              campaignGroupIDs: [t],
              params: n,
              hostID: r("AdsUEditorHostIDs").EDITING,
              source: "campaign_data",
            },
            {
              line: "280",
              module:
                "AdsCampaignTargetFrequencyInAuctionRegenerateCampaignGroupPredictionTriggerReducerUtils.js",
              moduleID: i.id,
            },
          );
        }),
          (f = f.delete(t)));
      };
      for (var K of g.entries()) j();
      return f;
    }
    l.handleReduce = d;
  },
  98,
);
