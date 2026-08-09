__d(
  "sendToSentQPLLogger",
  [
    "LSDatabaseSingleton",
    "LSIntEnum",
    "MAWMIC",
    "MAWSetupWorkerAuxStateForLogging",
    "MAWWaitForBackendSetup",
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
    "asyncToGeneratorRuntime",
    "getSafeQplErrorMessage",
    "gkx",
    "interaction-tracing",
    "justknobx",
    "mergeDeep",
    "pageID",
    "performance",
    "promiseDone",
    "qpl",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = r("requireDeferred")("MAWWebWorkerSingleton").__setRef(
        "sendToSentQPLLogger",
      ),
      p = r("qpl")._(25313175, "1551"),
      _ = new Map();
    function f(e, t) {
      r("QPLUserFlow").addAnnotations(p, t, { instanceKey: e });
    }
    function g(e, t) {
      (r("QPLUserFlow").endCancel(p, {
        annotations: t != null ? t : {},
        instanceKey: e,
      }),
        S(e));
    }
    function h(e, t, n, a) {
      var i = a != null ? a.type : t;
      r("MWLogSendToSentFailedError")(
        { qplEventType: p, qplInstanceKey: e },
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
        var m = r("Network").getEffectiveType();
        m != null && (c.network_effective_type_at_failure = String(m));
      }
      (r("QPLUserFlow").endFailure(p, i, {
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
        S(e));
    }
    function y(e, t, n, o) {
      e != null &&
        r("QPLUserFlow").addPoint(p, t, {
          data: o,
          debugInfo: n,
          instanceKey: e,
        });
    }
    function C(e) {
      ((c || (c = r("QuickPerformanceLogger"))).markerEnd(p, 160, e), S(e));
    }
    function b(e, t) {
      (y(e, t ? "network_connection_online" : "network_connection_offline"),
        t || C(e));
    }
    function v(e) {
      var t = r("interaction-tracing").NetworkStatusTracker.onChange(
        function (t) {
          var n = t.online;
          b(e, n);
        },
      );
      if (
        (_.set(e, t),
        b(e, r("interaction-tracing").NetworkStatusTracker.isOnline()),
        r("Network").containsNetworkInformation())
      ) {
        var n = r("Network").getRTT();
        n != null && f(e, { int: { network_rtt: n } });
        var o = r("Network").getEffectiveType();
        o != null && f(e, { string: { network_effective_type: String(o) } });
        var a = r("Network").getBandwidth();
        a != null && f(e, { int: { network_bandwidth: a } });
        var i = r("Network").getType();
        i != null && f(e, { string: { network_connectivity_type: String(i) } });
      }
    }
    function S(e) {
      var t;
      ((t = _.get(e)) == null || t.remove(), _.delete(e));
    }
    function R(e) {
      window.navigator &&
        window.navigator.hardwareConcurrency &&
        f(e, {
          int: { hardware_concurrency: window.navigator.hardwareConcurrency },
        });
    }
    function L(t, n) {
      t === void 0 && (t = !0);
      var a = Date.now() + (Math.round(o("Random").random() * 1e4) + 1e4);
      return (
        r("QPLUserFlow").start(E(n), {
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
          instanceKey: a,
        }),
        r("promiseDone")(
          o("MAWMIC")
            .getState()
            .then(function (e) {
              f(a, { string: { mic_state: e } });
            }),
        ),
        t &&
          r("promiseDone")(
            o("WAGetStorageQplAnnotations")
              .getStorageQplAnnotations()
              .then(function (e) {
                f(a, e);
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
                    f(a, {
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
          m.load().then(function (e) {
            return e.getWorkerHealthStatus().then(function (e) {
              f(a, { string: { workerHealthStatusOnStart: e.tag } });
            });
          }),
        ),
        v(a),
        R(a),
        a
      );
    }
    function E(e) {
      if ((u || (u = o("QPLEvent"))).getSamplingMethod(p) !== 1 || !k(e))
        return p;
      var t = (u || (u = o("QPLEvent"))).getSampleRate(p),
        n = r("justknobx")._("3946"),
        a = Math.max(1, Math.min(n, t));
      return { i: u.getMarkerId(p), m: u.getSamplingMethod(p), r: a };
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
      (r("QPLUserFlow").endSuccess(p, {
        annotations: {
          bool: {
            exceededStorageQuota: o(
              "WAExceededStorageQuota",
            ).getExceededStorageQuota(),
          },
        },
        instanceKey: e,
      }),
        S(e));
    }
    function T(e, t, n, a, i, l) {
      i === void 0 && (i = !0);
      var s = L(i);
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
            f(s, t);
          },
        ),
        s
      );
    }
    var D = (function () {
      var e = n("asyncToGeneratorRuntime").asyncToGenerator(
        function* (e, t, n) {
          var o = e + "_start",
            a = e + "_end";
          r("QPLUserFlow").addPoint(p, o, { instanceKey: t });
          var i = yield n();
          return (r("QPLUserFlow").addPoint(p, a, { instanceKey: t }), i);
        },
      );
      return function (n, r, o) {
        return e.apply(this, arguments);
      };
    })();
    ((l.addSendToSentAnnotations = f),
      (l.markSendToSentCancel = g),
      (l.markSendToSentFail = h),
      (l.markSendToSentPoint = y),
      (l.markSendToSentStart = L),
      (l.markSendToSentSuccess = I),
      (l.markSendToSentStartWithAnnotation = T),
      (l.measureSendToSentPerformance = D));
  },
  98,
);
