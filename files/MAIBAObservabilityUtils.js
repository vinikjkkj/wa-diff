__d(
  "MAIBAObservabilityUtils",
  [
    "AdsPerfInteractionsController",
    "InteractionTracingMetrics",
    "clearTimeout",
    "performanceNow",
    "qpl",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "maiba-open-chat-funnel",
      u = 3e5,
      c = null;
    function d() {
      var e = c;
      e != null &&
        ((c = null),
        r("clearTimeout")(e.timeoutID),
        e.traceAPI.unlockInteractionLogging(s));
    }
    function m() {
      d();
      var e = D();
      if (e != null) {
        var t = r("AdsPerfInteractionsController").getActiveInteractionTraceAPI(
          e,
        );
        if (t != null) {
          t.lockInteractionLogging(s);
          var n = r("setTimeout")(function () {
            (r("InteractionTracingMetrics").addAnnotation(
              e,
              "open_chat_funnel_logging_timeout",
              "first_token_displayed",
            ),
              d());
          }, u);
          c = { interactionID: e, timeoutID: n, traceAPI: t };
        }
      }
    }
    function p() {
      return "maiba.send_message.client";
    }
    function _() {
      return "maiba.send_message.client";
    }
    function f() {
      return 324746643;
    }
    function g() {
      return r("qpl")._(324746643, "3506");
    }
    function h() {
      return M(p());
    }
    function y() {
      return M("maiba.workspace.load");
    }
    function C(e) {
      r("AdsPerfInteractionsController").startInteraction(
        "maiba.workspace.load",
        e,
        { tracePolicy: "maiba.workspace.load" },
      );
    }
    function b(e) {
      return y() == null ? (C(e), !0) : !1;
    }
    function v(e) {
      var t,
        n = y();
      n != null &&
        ((t = r("InteractionTracingMetrics").get(n)) == null
          ? void 0
          : t.markerPoints[e]) == null &&
        r("InteractionTracingMetrics").addMarkerPoint(n, e, "AppTiming");
    }
    function S(e, t) {
      var n = y();
      n != null && r("InteractionTracingMetrics").addAnnotation(n, e, t);
    }
    function R(e) {
      var t = r(
        "AdsPerfInteractionsController",
      ).getActiveInteractionTraceAPIByInteractionComponent(
        "maiba.workspace.load",
      );
      t == null || t.cancelTrace(e, !0);
    }
    function L(e) {
      var t = r(
        "AdsPerfInteractionsController",
      ).getActiveInteractionTraceAPIByInteractionComponent(
        "maiba.workspace.load",
      );
      t == null || t.failTrace(e, !0);
    }
    function E(e, t) {
      var n,
        o = t === void 0 ? h() : t;
      o != null &&
        ((n = r("InteractionTracingMetrics").get(o)) == null
          ? void 0
          : n.markerPoints[e]) == null &&
        r("InteractionTracingMetrics").addMarkerPoint(o, e, "AppTiming");
    }
    function k(t) {
      var n = r("InteractionTracingMetrics").get(t);
      n == null ||
        n.completed != null ||
        n.wasCanceled ||
        n.markerPoints.first_token_displayed != null ||
        (r("InteractionTracingMetrics").addAnnotation(
          t,
          "first_token_display_semantics",
          "actual_model_text_v2",
        ),
        r("InteractionTracingMetrics").addFirstMarkerPoint(
          t,
          "first_token_displayed",
          "AppTiming",
          (e || (e = r("performanceNow")))(),
        ));
    }
    function I(e, t) {
      var n = h();
      n != null && r("InteractionTracingMetrics").addAnnotation(n, e, t);
    }
    function T(e, t) {
      var n = h();
      n != null && r("InteractionTracingMetrics").addAnnotationBoolean(n, e, t);
    }
    function D() {
      var e, t, n;
      return (e =
        (t = M("maiba.chat.open")) != null
          ? t
          : (n = c) == null
            ? void 0
            : n.interactionID) != null
        ? e
        : null;
    }
    function x(e, t) {
      var n = D();
      n != null && r("InteractionTracingMetrics").addAnnotation(n, e, t);
    }
    function $(e, t) {
      var n = D();
      n != null && r("InteractionTracingMetrics").addAnnotationBoolean(n, e, t);
    }
    function P(e) {
      var t,
        n = D();
      (n != null &&
        ((t = r("InteractionTracingMetrics").get(n)) == null
          ? void 0
          : t.markerPoints[e]) == null &&
        r("InteractionTracingMetrics").addMarkerPoint(n, e, "AppTiming"),
        e === "first_token_displayed" && d());
    }
    function N(e) {
      var t,
        n = D(),
        o = "null_state_primary_content_visible";
      n == null ||
        ((t = r("InteractionTracingMetrics").get(n)) == null
          ? void 0
          : t.markerPoints[o]) != null ||
        (r("InteractionTracingMetrics").addAnnotation(
          n,
          "null_state_primary_content_type",
          e,
        ),
        r("InteractionTracingMetrics").addMarkerPoint(n, o, "AppTiming"));
    }
    function M(e) {
      var t = r("AdsPerfInteractionsController").getAllOngoingInteraction();
      if (t.size > 0 && t.get(e)) {
        var n;
        return (n = t.get(e)) == null ? void 0 : n.interactionID;
      }
      return null;
    }
    ((l.holdMAIBAOpenChatLogging = m),
      (l.getMAIBASendMessageComponentName = p),
      (l.getMAIBASendMessageInteractionName = _),
      (l.getMAIBASendMessageQPLMarkerId = f),
      (l.getMAIBASendMessageQPLEvent = g),
      (l.getActiveHeroTracingMessageInteractionID = h),
      (l.getActiveHeroTracingWorkspaceLoadInteractionID = y),
      (l.startMAIBAWorkspaceLoadInteraction = C),
      (l.ensureMAIBAWorkspaceLoadInteraction = b),
      (l.addMAIBAWorkspaceLoadMarkerPoint = v),
      (l.addMAIBAWorkspaceLoadAnnotation = S),
      (l.cancelMAIBAWorkspaceLoadInteraction = R),
      (l.failMAIBAWorkspaceLoadInteraction = L),
      (l.addMAIBASendMessageMarkerPoint = E),
      (l.addMAIBAFirstTokenDisplayedForInteraction = k),
      (l.addMAIBASendMessageAnnotation = I),
      (l.addMAIBASendMessageBooleanAnnotation = T),
      (l.getActiveHeroTracingOpenMaibaChatInteractionID = D),
      (l.addMAIBAOpenChatAnnotation = x),
      (l.addMAIBAOpenChatBooleanAnnotation = $),
      (l.addMAIBAOpenChatMarkerPoint = P),
      (l.addMAIBANullStatePrimaryContentVisible = N));
  },
  98,
);
