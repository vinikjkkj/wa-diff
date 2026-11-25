__d(
  "sendToSentQPLLogger",
  [
    "LSDatabaseSingleton",
    "LSIntEnum",
    "MAWMIC",
    "MAWSetupWorkerAuxStateForLogging",
    "MAWWaitForBackendSetup",
    "MAWWorkerHealthStatus",
    "MWLogSendToSentFailedError",
    "MWMsgMediaTypeLogUtils",
    "MWSharedMsgLogUtils",
    "MWSharedS2SBaseAnnotations",
    "Network",
    "QPLEvent",
    "QPLUserFlow",
    "QuickPerformanceLogger",
    "Random",
    "ReQL",
    "WAExceededStorageQuota",
    "WAGetStorageQplAnnotations",
    "getSafeQplErrorMessage",
    "gkx",
    "interaction-tracing",
    "justknobx",
    "mergeDeep",
    "pageID",
    "performance",
    "promiseDone",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = r("qpl")._(25313175, "1551"),
      p = new Map();
    function _(e, t) {
      r("QPLUserFlow").addAnnotations(m, t, { instanceKey: e });
    }
    function f(e, t) {
      (r("QPLUserFlow").endCancel(m, {
        annotations: t != null ? t : {},
        instanceKey: e,
      }),
        v(e));
    }
    function g(e, t, n, a) {
      var i = a != null ? a.type : t;
      r("MWLogSendToSentFailedError")(
        { qplEventType: m, qplInstanceKey: e },
        i,
        n,
        a == null ? void 0 : a.errorCode,
        a == null ? void 0 : a.applicationErrorCode,
      );
      var l = n instanceof Error ? n.name : "unknown",
        s = r("interaction-tracing").NetworkStatusTracker.isOnline(),
        u = {},
        c = {
          errorDescription: o("getSafeQplErrorMessage").getSafeQPLErrorMessage(
            n,
          ),
          errorName: l,
        };
      if (r("Network").containsNetworkInformation()) {
        var d = r("Network").getRTT();
        d != null && (u.network_rtt_at_failure = d);
        var p = r("Network").getEffectiveType();
        p != null && (c.network_effective_type_at_failure = String(p));
      }
      (r("QPLUserFlow").endFailure(m, i, {
        annotations: {
          bool: {
            exceededStorageQuota: o(
              "WAExceededStorageQuota",
            ).getExceededStorageQuota(),
            isOnlineAtFailure: s,
            useSentBytesCache: r("gkx")("33008"),
            wasBackendSetupReset: o(
              "MAWWaitForBackendSetup",
            ).wasBackendSetupReset(),
            workerTerminatedPermanently: o("MAWSetupWorkerAuxStateForLogging")
              .WorkerLifeCycleState.workerTerminatedPermanently,
          },
          int: u,
          string: c,
          string_array: {
            worker_restart_msgs: o("MAWSetupWorkerAuxStateForLogging")
              .WorkerLifeCycleState.restartMessageTypes,
            worker_restart_reasons: o("MAWSetupWorkerAuxStateForLogging")
              .WorkerLifeCycleState.restartReasons,
          },
        },
        error: n,
        instanceKey: e,
      }),
        v(e));
    }
    function h(e, t, n, o) {
      e != null &&
        r("QPLUserFlow").addPoint(m, t, {
          data: o,
          debugInfo: n,
          instanceKey: e,
        });
    }
    function y(e) {
      ((c || (c = r("QuickPerformanceLogger"))).markerEnd(m, 160, e), v(e));
    }
    function C(e, t) {
      (h(e, t ? "network_connection_online" : "network_connection_offline"),
        t || y(e));
    }
    function b(e) {
      var t = r("interaction-tracing").NetworkStatusTracker.onChange(
        function (t) {
          var n = t.online;
          C(e, n);
        },
      );
      if (
        (p.set(e, t),
        C(e, r("interaction-tracing").NetworkStatusTracker.isOnline()),
        r("Network").containsNetworkInformation())
      ) {
        var n = r("Network").getRTT();
        n != null && _(e, { int: { network_rtt: n } });
        var o = r("Network").getEffectiveType();
        o != null && _(e, { string: { network_effective_type: String(o) } });
        var a = r("Network").getBandwidth();
        a != null && _(e, { int: { network_bandwidth: a } });
        var i = r("Network").getType();
        i != null && _(e, { string: { network_connectivity_type: String(i) } });
      }
    }
    function v(e) {
      var t;
      ((t = p.get(e)) == null || t.remove(), p.delete(e));
    }
    function S(e) {
      window.navigator &&
        window.navigator.hardwareConcurrency &&
        _(e, {
          int: { hardware_concurrency: window.navigator.hardwareConcurrency },
        });
    }
    function R(t, n, a) {
      t === void 0 && (t = !0);
      var i = Date.now() + (Math.round(o("Random").random() * 1e4) + 1e4);
      return (
        r("QPLUserFlow").start(L(n), {
          annotations: {
            bool: {
              backendSetupReady: o(
                "MAWWaitForBackendSetup",
              ).isBackendSetupSuccessful(),
              wasBackendSetupReset: o(
                "MAWWaitForBackendSetup",
              ).wasBackendSetupReset(),
              workerTerminatedPermanently: o("MAWSetupWorkerAuxStateForLogging")
                .WorkerLifeCycleState.workerTerminatedPermanently,
            },
            int: {
              timeMsSinceSessionStart: (d || (d = r("performance"))).now(),
            },
            string: {
              hostname: window.location.hostname,
              pageID: r("pageID"),
              workerHeartbeatsOnStart: o(
                "MAWSetupWorkerAuxStateForLogging",
              ).getHeartbeatHistoryAsString(),
              workerID: o("MAWWaitForBackendSetup").getCurrentWorkerID(),
            },
            string_array: {
              worker_restart_msgs: o("MAWSetupWorkerAuxStateForLogging")
                .WorkerLifeCycleState.restartMessageTypes,
              worker_restart_reasons: o("MAWSetupWorkerAuxStateForLogging")
                .WorkerLifeCycleState.restartReasons,
            },
          },
          instanceKey: i,
        }),
        a != null && _(i, a),
        r("promiseDone")(
          o("MAWMIC")
            .getState()
            .then(function (e) {
              _(i, { string: { mic_state: e } });
            }),
        ),
        t &&
          r("promiseDone")(
            o("WAGetStorageQplAnnotations")
              .getStorageQplAnnotations()
              .then(function (e) {
                _(i, e);
              }),
          ),
        r("promiseDone")(
          (e || (e = o("LSDatabaseSingleton"))).LSDatabaseSingleton.then(
            function (e) {
              return o("ReQL")
                .firstAsync(
                  o("ReQL").fromTableDescending(e.tables.connectivity_status),
                )
                .then(function (e) {
                  e &&
                    _(i, {
                      int: {
                        connection_state_ls_transport: (
                          s || (s = o("LSIntEnum"))
                        ).toNumber(e.internetConnectionState),
                      },
                    });
                });
            },
          ),
        ),
        r("promiseDone")(
          o("MAWWorkerHealthStatus")
            .getWorkerHealthStatus()
            .then(function (e) {
              _(i, { string: { workerHealthStatusOnStart: e.tag } });
            }),
        ),
        b(i),
        S(i),
        i
      );
    }
    function L(e) {
      if ((u || (u = o("QPLEvent"))).getSamplingMethod(m) !== 1 || !k(e))
        return m;
      var t = (u || (u = o("QPLEvent"))).getSampleRate(m),
        n = r("justknobx")._("3946"),
        a = Math.ceil(n / E(e)),
        i = Math.max(1, Math.min(a, t));
      return { i: u.getMarkerId(m), m: u.getSamplingMethod(m), r: i };
    }
    function E(e) {
      return e === o("MWMsgMediaTypeLogUtils").AttachmentType.Audio ||
        e === o("MWMsgMediaTypeLogUtils").AttachmentType.Gif ||
        e === o("MWMsgMediaTypeLogUtils").AttachmentType.Sticker ||
        e === o("MWMsgMediaTypeLogUtils").AttachmentType.Video
        ? 4
        : 1;
    }
    function k(e) {
      return (
        e === o("MWMsgMediaTypeLogUtils").AttachmentType.Application ||
        e === o("MWMsgMediaTypeLogUtils").AttachmentType.Audio ||
        e === o("MWMsgMediaTypeLogUtils").AttachmentType.File ||
        e === o("MWMsgMediaTypeLogUtils").AttachmentType.Gif ||
        e === o("MWMsgMediaTypeLogUtils").AttachmentType.Image ||
        e === o("MWMsgMediaTypeLogUtils").AttachmentType.Link ||
        e === o("MWMsgMediaTypeLogUtils").AttachmentType.Sticker ||
        e === o("MWMsgMediaTypeLogUtils").AttachmentType.Video ||
        e === o("MWMsgMediaTypeLogUtils").AttachmentType.Share
      );
    }
    function I(e) {
      (r("QPLUserFlow").endSuccess(m, {
        annotations: {
          bool: {
            exceededStorageQuota: o(
              "WAExceededStorageQuota",
            ).getExceededStorageQuota(),
          },
        },
        instanceKey: e,
      }),
        v(e));
    }
    function T(e, t, n, a, i, l) {
      i === void 0 && (i = !0);
      var s = R(i, void 0, a);
      if (e == null) return s;
      var u = o("MWSharedS2SBaseAnnotations").getMessageTypeParams(
        babelHelpers.extends({}, t, { threadType: e.threadType }),
      );
      return (
        r("promiseDone")(
          o("MWSharedMsgLogUtils").getSendToSentAnnotations({
            attachmentTypeParams: u,
            messageOfflineThreadingId: l,
            source: n,
            thread: e,
          }),
          function (e) {
            var t = r("mergeDeep")(e, a);
            _(s, t);
          },
        ),
        s
      );
    }
    var D = async function (t, n, o) {
      var e = t + "_start",
        a = t + "_end";
      r("QPLUserFlow").addPoint(m, e, { instanceKey: n });
      var i = await o();
      return (r("QPLUserFlow").addPoint(m, a, { instanceKey: n }), i);
    };
    ((l.addSendToSentAnnotations = _),
      (l.markSendToSentCancel = f),
      (l.markSendToSentFail = g),
      (l.markSendToSentPoint = h),
      (l.markSendToSentStart = R),
      (l.markSendToSentSuccess = I),
      (l.markSendToSentStartWithAnnotation = T),
      (l.measureSendToSentPerformance = D));
  },
  98,
);
