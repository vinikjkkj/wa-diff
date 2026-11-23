__d(
  "MAIBACreationStepsEntrypointUtils",
  [
    "AdsMgmtAdObjectLevelTransformUtils",
    "MAIBACreationStepsSection",
    "MAIBAGoldenPathEntrypointUtil",
    "first",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = {
        advantage_plus_audience: "advantage_plus_audience",
        advantage_plus_placement: "automatic_placements",
        atleast_six_placements: "six_plus_manual_placements",
        ig_surfaces_manual_placements: "ig_surfaces_manual_placements",
        advantage_campaign_budget: "advanced_campaign_budget",
        advantage_plus_creative: "advantage_plus_creative",
        audience_expansion_retargeting: "audience_expansion_retargeting",
      },
      c =
        ((e = {}),
        (e[(s = r("MAIBACreationStepsSection")).AUDIENCE] = [
          "advantage_plus_audience",
        ]),
        (e[s.PLACEMENTS] = [
          "advantage_plus_placement",
          "atleast_six_placements",
          "ig_surfaces_manual_placements",
        ]),
        (e[s.BUDGET] = ["advantage_campaign_budget"]),
        (e[s.BUDGET_SCHEDULE] = []),
        (e[s.CREATIVE] = ["advantage_plus_creative"]),
        (e[s.OPTIMIZATION] = []),
        (e[s.CONVERSION_LOCATION] = []),
        (e[s.AD_SETUP] = []),
        e);
    function d(e, t, n, r) {
      return e === "CAMPAIGN_GROUP"
        ? [].concat(t)
        : e === "ADGROUP"
          ? [].concat(r)
          : [].concat(n);
    }
    var m = { advantage_campaign_budget: "cbo2_advantage_campaign_budget" },
      p = [
        {
          bundlePluginKey: "placements_bundle",
          bundleRecommendationType: "placements_bundle",
        },
      ];
    function _(e) {
      return u[e];
    }
    function f(e, t) {
      var n, r, o;
      if (e == null) return [];
      var a = (n = m[t]) != null ? n : t;
      return (r = (o = e.eligibleAdObjectIDs) == null ? void 0 : o.get(a)) !=
        null
        ? r
        : [];
    }
    function g(e, t) {
      var n;
      if (e == null) return null;
      var o =
        (n = e.recommendationIDToRecommendationHashMap) == null
          ? void 0
          : n.get(t);
      return o == null ? null : r("first")(o);
    }
    function h(e, t) {
      for (var n of p) {
        var r,
          o = n.bundlePluginKey,
          a = n.bundleRecommendationType,
          i =
            (r = e.guidancePluginKeyToGuidanceExtraDataMap) == null ||
            (r = r.get(o)) == null
              ? void 0
              : r.child_rec_types;
        if (!(i == null || !i.includes(t))) {
          var l = f(e, o);
          if (l.length !== 0)
            return { eligibleAdObjectIDs: l, recommendationId: g(e, a) };
        }
      }
      return null;
    }
    function y(e, t) {
      if (e == null) return null;
      var n = _(t);
      if (n == null) return null;
      var r = f(e, t);
      return r.length > 0
        ? { eligibleAdObjectIDs: r, recommendationId: g(e, n) }
        : h(e, n);
    }
    function C(e) {
      var t = e.additionalInfo,
        n = e.adObjectLevel,
        r = e.pluginKey,
        a = e.promptId,
        i = e.recommendationType,
        l = e.targetAdObjectIDs,
        s = e.viewerAdObjectLevel;
      if (l.length === 0) return null;
      var u = o(
          "AdsMgmtAdObjectLevelTransformUtils",
        ).transformRecommendationObjectLevel(n),
        c = {
          ad_object_ids: [].concat(l),
          ad_object_level: u,
          prompt_id: a,
          recommendation_type: o(
            "MAIBAGoldenPathEntrypointUtil",
          ).transformRecommendationObject(i),
          recommendation_type_string: r,
          viewer_ad_object_level: o(
            "AdsMgmtAdObjectLevelTransformUtils",
          ).transformObjectTypeTypeToLevel(s),
        };
      return (t != null && (c.additional_info = t), c);
    }
    function b(e, t, n, r) {
      var o = y(e, t);
      if (o == null) return null;
      var a = o.eligibleAdObjectIDs,
        i = o.recommendationId;
      if (a.length === 0) return null;
      var l = _(t);
      if (l == null) return null;
      var s = C({
        adObjectLevel: n,
        pluginKey: t,
        promptId: r,
        recommendationType: l,
        targetAdObjectIDs: a,
      });
      return (s != null && i != null && (s.recommendation_id = i), s);
    }
    ((l.SECTION_TYPE_TO_PLUGIN_KEYS = c),
      (l.getAdObjectIDsForRecommendationLevel = d),
      (l.getRecommendationIdFromServerRecommendations = g),
      (l.buildPFREntrypointContext = C),
      (l.buildPFREntrypointContextFromServerRecommendations = b));
  },
  98,
);
