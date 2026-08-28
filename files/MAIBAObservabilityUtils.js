__d(
  "MAIBAObservabilityUtils",
  ["AdsPerfInteractionsController", "InteractionTracingMetrics", "qpl"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return "maiba.send_message.client";
    }
    function s() {
      return "maiba.send_message.client";
    }
    function u() {
      return 324746643;
    }
    function c() {
      return r("qpl")._(324746643, "3506");
    }
    function d() {
      return S(e());
    }
    function m() {
      return S("maiba.workspace.load");
    }
    function p(e) {
      r("AdsPerfInteractionsController").startInteraction(
        "maiba.workspace.load",
        e,
        { tracePolicy: "maiba.workspace.load" },
      );
    }
    function _(e) {
      return m() == null ? (p(e), !0) : !1;
    }
    function f(e) {
      var t,
        n = m();
      n != null &&
        ((t = r("InteractionTracingMetrics").get(n)) == null
          ? void 0
          : t.markerPoints[e]) == null &&
        r("InteractionTracingMetrics").addMarkerPoint(n, e, "AppTiming");
    }
    function g(e, t) {
      var n = m();
      n != null && r("InteractionTracingMetrics").addAnnotation(n, e, t);
    }
    function h(e) {
      var t = r(
        "AdsPerfInteractionsController",
      ).getActiveInteractionTraceAPIByInteractionComponent(
        "maiba.workspace.load",
      );
      t == null || t.cancelTrace(e, !0);
    }
    function y(e) {
      var t = r(
        "AdsPerfInteractionsController",
      ).getActiveInteractionTraceAPIByInteractionComponent(
        "maiba.workspace.load",
      );
      t == null || t.failTrace(e, !0);
    }
    function C(e) {
      var t,
        n = d();
      n != null &&
        ((t = r("InteractionTracingMetrics").get(n)) == null
          ? void 0
          : t.markerPoints[e]) == null &&
        r("InteractionTracingMetrics").addMarkerPoint(n, e, "AppTiming");
    }
    function b(e, t) {
      var n = d();
      n != null && r("InteractionTracingMetrics").addAnnotation(n, e, t);
    }
    function v() {
      return S("maiba.chat.open");
    }
    function S(e) {
      var t = r("AdsPerfInteractionsController").getAllOngoingInteraction();
      if (t.size > 0 && t.get(e)) {
        var n;
        return (n = t.get(e)) == null ? void 0 : n.interactionID;
      }
      return null;
    }
    ((l.getMAIBASendMessageComponentName = e),
      (l.getMAIBASendMessageInteractionName = s),
      (l.getMAIBASendMessageQPLMarkerId = u),
      (l.getMAIBASendMessageQPLEvent = c),
      (l.getActiveHeroTracingMessageInteractionID = d),
      (l.getActiveHeroTracingWorkspaceLoadInteractionID = m),
      (l.startMAIBAWorkspaceLoadInteraction = p),
      (l.ensureMAIBAWorkspaceLoadInteraction = _),
      (l.addMAIBAWorkspaceLoadMarkerPoint = f),
      (l.addMAIBAWorkspaceLoadAnnotation = g),
      (l.cancelMAIBAWorkspaceLoadInteraction = h),
      (l.failMAIBAWorkspaceLoadInteraction = y),
      (l.addMAIBASendMessageMarkerPoint = C),
      (l.addMAIBASendMessageAnnotation = b),
      (l.getActiveHeroTracingOpenMaibaChatInteractionID = v));
  },
  98,
);
