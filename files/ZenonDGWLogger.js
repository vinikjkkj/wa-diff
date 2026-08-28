__d(
  "ZenonDGWLogger",
  [
    "$InternalEnum",
    "DGWStreamGroupCallbacks",
    "QuickPerformanceLogger",
    "ZenonAuditedCheckpointLogId",
    "ZenonDebugLogger",
    "ZenonInfraActionsLogger",
    "ZenonLoggingUtils",
    "ZenonODSLogger",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = n("$InternalEnum").Mirrored([
        "LOGGED_NONE",
        "LOGGED_RETRY",
        "LOGGED_FAILURE",
      ]),
      u = r("qpl")._(398986999, "3052"),
      c = r("ZenonDebugLogger").getInstance(),
      d = !1,
      m = null;
    function p(e) {
      ((d = !0), (m = e));
    }
    function _(t, n) {
      if (o("ZenonLoggingUtils").shouldAllowLogging())
        switch (t.name) {
          case "dgwStreamCreationInitiated":
            f(n, t.headers, t.dgwInfo);
            break;
          case "dgwStreamCreationSuccess":
            (e || (e = r("QuickPerformanceLogger"))).markerEnd(u, 2, n);
            break;
          case "dgwStreamCreationError":
            (c.logConsole("[DGW] Stream creation error: " + t.error),
              (e || (e = r("QuickPerformanceLogger"))).markerAnnotate(
                u,
                { string: { error: t.error } },
                { instanceKey: n },
              ),
              (e || (e = r("QuickPerformanceLogger"))).markerEnd(u, 87, n));
            break;
          case "dgwStreamClosed":
            c.logConsole(
              "[DGW] Stream closed" +
                (t.reason != null ? " - Reason: " + t.reason : "") +
                "}",
            );
            break;
          case "dgwStreamError":
            c.logConsole("[DGW] Stream error: " + t.error);
            break;
          default:
            break;
        }
    }
    function f(t, n, o) {
      ((e || (e = r("QuickPerformanceLogger"))).markerStart(u, t),
        e.markerAnnotate(
          u,
          {
            bool: { hasAuthToken: o.hasAuthToken },
            string: babelHelpers.extends({}, n, {
              deviceId: o.deviceId,
              loggingId: o.loggingId,
              serviceId: o.serviceId,
              windowContext: o.windowContext,
            }),
          },
          { instanceKey: t },
        ),
        e.markerPoint(u, "initStreamCreation", { instanceKey: t }));
    }
    function g(e, t) {
      var n = "DGW_STREAM_ERROR_" + t + "_" + e;
      (E(n), r("ZenonODSLogger").logCounter(n));
    }
    function h() {
      (E("DGW_SERVER_HAS_FINISHED_SENDING_DATA"),
        r("ZenonODSLogger").logCounter("DGW_SERVER_HAS_FINISHED_SENDING_DATA"));
    }
    function y(e) {
      var t = "DGW_STREAM_MUST_DRAIN_" + e;
      (E(t), r("ZenonODSLogger").logCounter(t));
    }
    function C() {
      (E("DGW_STREAM_RETRY"),
        r("ZenonODSLogger").logCounter("DGW_STREAM_RETRY"));
    }
    function b(e) {
      var t = e ? "_" + e : "";
      (E("DGW_STREAM_RETRY_SUCCEEDED" + t),
        r("ZenonODSLogger").logCounter("DGW_STREAM_RETRY_SUCCEEDED" + t));
    }
    function v(e) {
      var t = e ? "_" + e : "";
      (E("DGW_STREAM_RETRY_FAILED" + t),
        r("ZenonODSLogger").logCounter("DGW_STREAM_RETRY_FAILED" + t));
    }
    function S(e, t) {
      E("[" + e + "] Stream closed - Reason: " + (t != null ? t : ""));
    }
    function R(e) {
      var t =
        "DGW_STREAM_GROUP_ERROR_" +
        o("DGWStreamGroupCallbacks").dgwStreamGroupErrorToString(e);
      (E(t), r("ZenonODSLogger").logCounter(t));
    }
    function L(e) {
      var t = "DGW_STREAM_GROUP_MUST_DRAIN_" + e;
      (E(t), r("ZenonODSLogger").logCounter(t));
    }
    function E(e) {
      d && m != null
        ? m("[SW][ZP] [DGW] " + e)
        : r("ZenonInfraActionsLogger").logCheckpoint({
            auditId: r("ZenonAuditedCheckpointLogId")
              .RP_ROOMS_INFRA_WWW__PLATFORM,
            checkpoint: "[ZP] [DGW] " + e,
          });
    }
    ((l.RetryLogState = s),
      (l.setSharedWorkerContext = p),
      (l.logEvent = _),
      (l.logDGWErrorToODS = g),
      (l.logDGWServerHasFinishedToODS = h),
      (l.logDGWStreamMustDrainToODS = y),
      (l.logDGWRetryToODS = C),
      (l.logDGWSucceededRetry = b),
      (l.logDGWFailedRetry = v),
      (l.logDGWStreamClose = S),
      (l.logDGWStreamGroupError = R),
      (l.logDGWStreamGroupMustDrain = L),
      (l.logDGWCheckpoint = E));
  },
  98,
);
