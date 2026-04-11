__d(
  "RSTIncidentLoggingMainThread",
  [
    "Env",
    "InteractionTracingConfigDefault",
    "QPLEvent",
    "RSTConfig",
    "RSTConstants",
    "RSTEvents",
    "RSTEventsMessageQueue",
    "RSTUtils",
    "RSTUtilsMainThread",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = r("requireDeferred")(
        "LogBrowserCrashReportsLowerRetentionFalcoEvent",
      ).__setRef("RSTIncidentLoggingMainThread"),
      c = new Set();
    function d() {
      return c;
    }
    function m(e) {
      var t,
        n,
        a,
        i,
        l,
        s,
        u,
        c,
        d,
        m,
        _ = e.unresponsiveEvent,
        h = _ != null ? Date.now() - (_ == null ? void 0 : _.detectTime) : 0,
        y = _ == null ? void 0 : _.lastHeartBeatMetadata,
        C = (y == null ? void 0 : y.brsid) != null ? String(y.brsid) : null,
        b = (t = y == null ? void 0 : y.cpp) != null ? t : null,
        v = (n = y == null ? void 0 : y.ccrt) != null ? n : null,
        S = (a = y == null ? void 0 : y.cr) != null ? a : null,
        R = (i = y == null ? void 0 : y.annotations) != null ? i : {},
        L = (l = y == null ? void 0 : y.spans) != null ? l : {},
        E = e.isRecoverable
          ? r("RSTConstants").reportReason.recoverable
          : (_ == null ? void 0 : _.incidentType) !==
              r("RSTConstants").incidentType.unexpectedExit
            ? r("RSTConstants").reportReason.unrecoverable
            : r("RSTConstants").reportReason.unexpectedExit,
        k = _ == null ? void 0 : _.traces,
        I = g(k),
        T = I.qplMarkerId,
        D = I.tracePolicy,
        x = f(_ == null ? void 0 : _.lastTrace),
        $ = p(R, L, _);
      return {
        application_name: o("RSTUtilsMainThread").appName,
        reason: E,
        url: o("RSTUtils").sanitizeURL(y == null ? void 0 : y.url),
        age: String(h),
        brsid: C,
        qpl_event_marker_id: o("RSTUtils").intToString(T),
        trace_policy: D,
        last_qpl_event_marker_id: o("RSTUtils").intToString(x.qplMarkerId),
        last_trace_policy: x.tracePolicy,
        ad_account_id: (s = y == null ? void 0 : y.i2) != null ? s : "0",
        business_id: (u = y == null ? void 0 : y.i3) != null ? u : "0",
        canonical_route: v,
        client_push_phase: b,
        client_revision: S,
        freeze_time_in_ms: String(
          (c = _ == null ? void 0 : _.unrecoverLastsForMs) != null ? c : 0,
        ),
        normalized_component_stack:
          (d = y == null ? void 0 : y.rcs) != null ? d : [],
        session_start_timestamp_in_ms: String(
          (m = y == null ? void 0 : y.st) != null ? m : "",
        ),
        rst_annotations: $,
      };
    }
    function p(e, t, n) {
      var o,
        a = [];
      for (var i of Object.keys(e)) a.push(i + ":" + e[i]);
      var l = n == null ? void 0 : n.detectTime;
      for (var u of Object.keys(t)) {
        var c,
          d = t[u],
          m = l != null ? l - d.start : 0;
        a.push(
          "span:" +
            d.name +
            ":" +
            ((c = d.annotation) != null ? c : "") +
            ":" +
            m,
        );
      }
      return (
        a.push(
          "processingBrsid:" +
            ((o = (s || (s = r("Env"))).brsid) != null ? o : ""),
        ),
        _(a, n),
        a
      );
    }
    function _(e, t) {
      if (!r("RSTConfig").shouldCollectAdditionalMetadata()) return e;
      var n = t == null ? void 0 : t.lastTrace,
        o = n == null ? void 0 : n.endTimestamp,
        a = t == null ? void 0 : t.detectTime;
      o != null && a != null && e.push("msSinceLastInteractionEnds:" + (a - o));
      var i = t != null ? t : {},
        l = i.incidentID;
      return (
        l != null && e.push("incidentID:" + l),
        (t == null ? void 0 : t.isFirstUnrecoverable) === !0 &&
          e.push("isFirstUnrecoverable:true"),
        (t == null ? void 0 : t.hasOverlappingResponsiveIndicents) === !0 &&
          e.push("hasOverlappingResponsiveIndicents:true"),
        (t == null ? void 0 : t.hasDecryptionError) === !0 &&
          e.push("hasDecryptionError:true"),
        e
      );
    }
    function f(t) {
      if (t == null) return { qplMarkerId: null, tracePolicy: null };
      if (t.qplEvent == null) return { qplMarkerId: null, tracePolicy: null };
      var n = (e || (e = o("QPLEvent"))).getMarkerId(t.qplEvent),
        r = t.tracePolicy;
      return { qplMarkerId: n, tracePolicy: r };
    }
    function g(e) {
      if (e == null) return { qplMarkerId: null, tracePolicy: null };
      var t = 0,
        n = null;
      return (
        e.forEach(function (e) {
          (e == null ? void 0 : e.qplEvent) == null ||
            e.tracePolicy ===
              o("InteractionTracingConfigDefault").DEFAULT_TRACING_CONFIG
                .defaultTracePolicy ||
            (e.startTime > t && ((t = e.startTime), (n = e)));
        }),
        f(n)
      );
    }
    function h(e, t) {
      u.onReady(function (n) {
        var r = n.log;
        r(function () {
          return m({ unresponsiveEvent: e, isRecoverable: t });
        });
      });
    }
    function y() {
      (r("RSTConfig").SHOULD_SAMPLE_RECOVERABLE &&
        o("RSTEventsMessageQueue").subscribe(
          o("RSTEvents").RSTEvent.RECOVERABLE_UNRESPONSIVENESS,
          function (e) {
            var t = e.unresponsiveEventRecord;
            t == null ||
              c.has(t.incidentID) ||
              (c.add(t.incidentID),
              o("RSTUtils").debugLogImportant(
                "logging recoverable unresponsiveness event",
              ),
              h(t, !0));
          },
        ),
        o("RSTEventsMessageQueue").subscribe(
          o("RSTEvents").RSTEvent.CRASH_INCIDENT,
          function (e) {
            var t = e.unresponsiveEventRecord;
            if (t == null || c.has(t.incidentID)) {
              o("RSTUtils").debugLogImportant(
                "not logging incident because it was already logged",
              );
              return;
            }
            if (
              r("RSTConfig").ONE_UNRECOVERABLE_INCIDENT_PER_SESSION &&
              t.isFirstUnrecoverable !== !0
            ) {
              var n,
                a = (n = t.incidentType) != null ? n : "";
              o("RSTUtils").debugLogImportant(
                "not logging unrecoverable " +
                  a +
                  " event (because it's not the first incident in the session)",
              );
              return;
            }
            (c.add(t.incidentID),
              o("RSTUtils").debugLogImportant(
                "logging unrecoverable unresponsiveness event:",
              ),
              h(t, !1));
          },
        ));
    }
    ((l.getLoggedIncidentIDs = d), (l.registerIncidentLogging = y));
  },
  98,
);
