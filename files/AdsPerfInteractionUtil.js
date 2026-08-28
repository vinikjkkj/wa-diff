__d(
  "AdsPerfInteractionUtil",
  [
    "AdsManagerInteractionQuickLogModule",
    "AdsMgmtQPLLogger",
    "AdsPERouterHelper",
    "AdsPerfInteractions",
    "FBLogger",
    "InteractionTracingMetrics",
    "QPLEvent",
    "QuickPerformanceLogger",
    "flipObject",
    "getAdsPerfInteractionConfigForInteraction",
    "getErrorSafe",
    "gkx",
    "objectValues",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = r("flipObject")(r("AdsManagerInteractionQuickLogModule")),
      c = new Map(),
      d = new Set(),
      m = new Map(),
      p = new Map(),
      _ = new Map(),
      f = 1,
      g = 0,
      h = new Set([
        "am.publish_ads.in_rolldown",
        "am.editor.reload_in_same_level",
      ]);
    function y(e, t) {
      var n,
        a,
        i = (n = c.get(e)) != null ? n : 0;
      (c.set(e, ++i),
        r("InteractionTracingMetrics").addMetadata(
          e,
          "parallel_interaction_count",
          i,
        ),
        r("InteractionTracingMetrics").addTag(e, "parallel_interactions", t));
      var l =
        (a = r("getAdsPerfInteractionConfigForInteraction")(t)) == null
          ? void 0
          : a.wwwEvent;
      if (l != null) {
        var s;
        o("AdsMgmtQPLLogger").markerAnnotate(l, {
          int: ((s = {}), (s.parallel_interaction_count = i), s),
        });
      }
    }
    function C(e, t) {
      var n;
      ((n = r("getAdsPerfInteractionConfigForInteraction")(e)) == null
        ? void 0
        : n.isNavigation) === !0
        ? m.has(t)
          ? m.get(t) === g && m.set(t, f)
          : m.set(t, g)
        : _.has(e)
          ? _.get(e) === g && _.set(e, f)
          : _.set(e, g);
    }
    function b(e, t) {
      var n, o;
      if (
        ((n = r("getAdsPerfInteractionConfigForInteraction")(e)) == null
          ? void 0
          : n.isNavigation) === !0
      ) {
        var a;
        return (a = m.get(t)) != null ? a : g;
      }
      return (o = _.get(e)) != null ? o : g;
    }
    function v(e, t, n) {
      return [e, t, n].filter(Boolean).join(".").toLowerCase();
    }
    function S() {
      try {
        var e,
          t =
            (e = r("AdsPERouterHelper").getRouter()) == null
              ? void 0
              : e.getParams();
        return t == null ? null : v(t.tool, t.section, t.tray);
      } catch (e) {
        r("FBLogger")("ads")
          .catching(r("getErrorSafe")(e))
          .mustfix("Error get Ads Manager Scenario trace data.");
      }
    }
    function R() {
      var e = S();
      e != null && (p.has(e) ? p.get(e) === g && p.set(e, f) : p.set(e, g));
    }
    function L(e) {
      if (e != null) {
        var t;
        return (t = p.get(e)) != null ? t : g;
      }
    }
    function E(e) {
      if (d.size === 0)
        for (var t of r("objectValues")(r("AdsPerfInteractions"))) {
          var n,
            a =
              (n = r("getAdsPerfInteractionConfigForInteraction")(t)) == null
                ? void 0
                : n.qplEvent;
          a && d.add((s || (s = o("QPLEvent"))).getMarkerId(a));
        }
      return d.has((s || (s = o("QPLEvent"))).getMarkerId(e));
    }
    function k(e) {
      e != null && c.delete(e);
    }
    function I(e, t) {
      t === void 0 && (t = !0);
      var n = r("InteractionTracingMetrics").get(e);
      return n == null ? !1 : n.completed == null || (t && !n.hasVcReport);
    }
    function T(e, t, n) {
      if ((n === void 0 && (n = !1), !N(e))) {
        var o = r("InteractionTracingMetrics").get(t);
        if (o == null) return !1;
      }
      return !I(t, n);
    }
    function D() {
      var e = [];
      for (var t of r("objectValues")(r("AdsPerfInteractions"))) {
        var n;
        ((n = r("getAdsPerfInteractionConfigForInteraction")(t)) == null
          ? void 0
          : n.healthcompassScenarioID) != null && e.push(t);
      }
      return e;
    }
    function x(t, n) {
      var o,
        a,
        i =
          (o = r("getAdsPerfInteractionConfigForInteraction")(t)) == null
            ? void 0
            : o.qplEvent;
      if (i == null) return null;
      var l = (e || (e = r("QuickPerformanceLogger"))).getMarker(i, n);
      return l == null || (a = l.annotations) == null || (a = a.string) == null
        ? void 0
        : a.flow_instance_id;
    }
    function $(e) {
      var t,
        n =
          (t = r("getAdsPerfInteractionConfigForInteraction")(e)) == null
            ? void 0
            : t.qplEvent;
      if (n != null) {
        var a;
        return (a = u[(s || (s = o("QPLEvent"))).getMarkerId(n)]) != null
          ? a
          : String(e);
      }
      return String(e);
    }
    function P(e) {
      if (e != null)
        for (var t of r("objectValues")(r("AdsPerfInteractions"))) {
          var n;
          if (
            ((n = r("getAdsPerfInteractionConfigForInteraction")(t)) == null
              ? void 0
              : n.qplEvent) === e
          )
            return t;
        }
      return null;
    }
    function N(e) {
      return !h.has(e);
    }
    function M(e) {
      return r("gkx")("4031") && !h.has(e);
    }
    ((l.REVISIT = f),
      (l.INITIAL_VISIT = g),
      (l.BLOCKLIST_FOR_ACTIVE_INTERACTION_FIX = h),
      (l.setAndLogParallelInteraction = y),
      (l.setRevisitInInteraction = C),
      (l.getRevisitInteractionData = b),
      (l.getTracePolicyStringFromRouteParams = v),
      (l.getTracePolicy = S),
      (l.setRevisitInScenario = R),
      (l.getRevisitScenarioData = L),
      (l.isPerfQPL = E),
      (l.resetParallelInteractionCount = k),
      (l.isInteractionOngoing = I),
      (l.shouldStartNewInteraction = T),
      (l.getPerformanceInteractions = D),
      (l.getFlowInstanceIDFromInteraction = x),
      (l.getAdsManagerInteractionQPLName = $),
      (l.getInteractionFromQPLEvent = P),
      (l.shouldApplyNewActiveTracking = N),
      (l.shouldApplyNewParallelMergeForVC = M));
  },
  98,
);
