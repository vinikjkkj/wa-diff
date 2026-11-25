__d(
  "MAWMessageSendReporter",
  [
    "FBLogger",
    "MAWMarkMessageSendAsFailedLSDB",
    "MAWReportSendMessageSuccessResult",
    "MAWSetupWorkerAuxStateForLogging",
    "MWLogSendToSentFailedError",
    "QPLUserFlow",
    "WAJids",
    "getErrorSafe",
    "getSafeQplErrorMessage",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map();
    function s(t) {
      var n;
      if (t == null) return null;
      var r = ((n = e.get(t)) != null ? n : 0) + 1;
      return (e.set(t, r), r);
    }
    function u(t) {
      if (t != null) {
        var n = e.get(t);
        if (n == null || n <= 1) {
          e.delete(t);
          return;
        }
        e.set(t, n - 1);
      }
    }
    async function c(e, t, n, a, i, l) {
      var c = n.qplEventType,
        m = n.qplInstanceKey,
        p = s(l);
      try {
        (r("QPLUserFlow").addPoint(c, "send_to_worker_start", {
          instanceKey: m,
        }),
          e != null &&
            r("QPLUserFlow").addAnnotations(
              c,
              {
                bool: {
                  is_group_thread:
                    o("WAJids").validateGroupJid(e.chatJid) != null,
                },
              },
              { instanceKey: m },
            ),
          p != null &&
            r("QPLUserFlow").addAnnotations(
              c,
              { int: { in_flight_attachment_type_send_count: p } },
              { instanceKey: m },
            ));
        var _ = await t;
        if (_ == null) return;
        if (_.success)
          (_.value != null
            ? o(
                "MAWReportSendMessageSuccessResult",
              ).reportSendMessageSuccessResultFn(_.value, i)
            : r("QPLUserFlow").addPoint(c, "no-op", { instanceKey: m }),
            r("QPLUserFlow").endSuccess(c, { instanceKey: m }));
        else {
          var f,
            g,
            h,
            y = _.error.isRetriable === !0;
          (r("MWLogSendToSentFailedError")(
            { qplEventType: c, qplInstanceKey: m },
            _.error.type,
            void 0,
            _.error.errorCode,
            _.error.applicationErrorCode,
          ),
            r("QPLUserFlow").endFailure(c, _.error.type, {
              annotations: {
                bool: {
                  isRetriable: (f = _.error.isRetriable) != null ? f : !1,
                  workerTerminatedPermanently: o(
                    "MAWSetupWorkerAuxStateForLogging",
                  ).WorkerLifeCycleState.workerTerminatedPermanently,
                },
                int: { errorCode: (g = _.error.errorCode) != null ? g : 0 },
                string: { details: (h = _.error.details) != null ? h : "" },
                string_array: {
                  worker_restart_msgs: o("MAWSetupWorkerAuxStateForLogging")
                    .WorkerLifeCycleState.restartMessageTypes,
                  worker_restart_reasons: o("MAWSetupWorkerAuxStateForLogging")
                    .WorkerLifeCycleState.restartReasons,
                },
              },
              instanceKey: m,
            }),
            d(e, y, a));
        }
      } catch (t) {
        var C = r("getErrorSafe")(t);
        if (
          (r("MWLogSendToSentFailedError")(
            { qplEventType: c, qplInstanceKey: m },
            "runtime-failure",
            C,
          ),
          r("QPLUserFlow").endFailure(c, "runtime-failure", {
            annotations: {
              bool: {
                workerTerminatedPermanently: o(
                  "MAWSetupWorkerAuxStateForLogging",
                ).WorkerLifeCycleState.workerTerminatedPermanently,
              },
              string: {
                errorDescription: o(
                  "getSafeQplErrorMessage",
                ).getSafeQPLErrorMessage(C),
              },
              string_array: {
                worker_restart_msgs: o("MAWSetupWorkerAuxStateForLogging")
                  .WorkerLifeCycleState.restartMessageTypes,
                worker_restart_reasons: o("MAWSetupWorkerAuxStateForLogging")
                  .WorkerLifeCycleState.restartReasons,
              },
            },
            instanceKey: m,
          }),
          d(e, !1, a, C),
          r("FBLogger")("messenger_web")
            .catching(C)
            .mustfix("MAWMessageSendReporter"),
          typeof C == "object")
        ) {
          var b = String(C == null ? void 0 : C.message),
            v = String(C == null ? void 0 : C.messageParams),
            S = String(C == null ? void 0 : C.stack);
          r("FBLogger")("messenger_web").mustfix(
            "Failed to send, e: %s. error params: %s. call stack: %s",
            b,
            v,
            S,
          );
        }
      } finally {
        u(l);
      }
    }
    function d(e, t, n, a) {
      if (e != null) {
        var i = e.chatJid,
          l = e.externalId;
        r("promiseDone")(
          o("MAWMarkMessageSendAsFailedLSDB").markMessageSendAsFailed(
            l,
            i,
            o("getSafeQplErrorMessage").getSafeQPLErrorMessage(a),
            n,
            t,
          ),
        );
      }
    }
    l.MAWMessageSendReporter = c;
  },
  98,
);
