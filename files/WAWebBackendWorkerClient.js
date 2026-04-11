__d(
  "WAWebBackendWorkerClient",
  [
    "Promise",
    "QPLFlow",
    "WAResolvable",
    "WAWebABPropsCache",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebBackendWorkerBridge",
    "WAWebBackendWorkerResource",
    "WAWebFBLogger",
    "WAWebMainThreadQplHandler",
    "WAWebWorkerSafeBackendApi",
    "WorkerBundleResource",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "getSafeQplErrorMessage",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = r("qpl")._(891427260, "2714"),
      d = new (o("WAResolvable").Resolvable)();
    function m(e) {
      var t = null,
        n = {
          onmessage: t,
          postMessage: function (n, r) {
            e.postMessage(n, r);
          },
          close: function () {
            e.terminate();
          },
        };
      return (
        e.addEventListener("message", function (e) {
          n.onmessage != null && n.onmessage(e);
        }),
        n
      );
    }
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = o("QPLFlow").startQPLFlow(c, { timeoutInMs: 6e4 });
          try {
            t.addPoint("create_worker_start");
            var n = o("WorkerBundleResource").createDedicatedWebWorker(
              r("WAWebBackendWorkerResource"),
            );
            yield h(n);
            var a = o("WAWebBackendWorkerBridge").createBridge(
              m(n),
              [
                "historySync",
                "deviceSync",
                "crypto",
                "media",
                "prekeyProcessing",
                "abProps",
                "database",
                "backendEventBusSync",
              ],
              [
                {
                  namespace: "abPropsExposure",
                  handlers: {
                    recordExposure: function (t) {
                      var e = t.configCode;
                      o("WAWebABPropsCache").saveExposure(e);
                    },
                  },
                },
                {
                  namespace: "qpl",
                  handlers: {
                    dispatch: function (t) {
                      return o(
                        "WAWebMainThreadQplHandler",
                      ).handleQplBridgeMessage(t);
                    },
                  },
                },
                {
                  namespace: "backendEventBus",
                  handlers: {
                    triggerAppStateSyncCompleted: function (t) {
                      var e = t.collectionDetails;
                      o(
                        "WAWebBackendEventBus",
                      ).BackendEventBus.triggerAppStateSyncCompleted(e);
                    },
                    triggerLogout: function () {
                      o("WAWebBackendEventBus").BackendEventBus.triggerLogout();
                    },
                    triggerRefreshQR: function () {
                      o(
                        "WAWebBackendEventBus",
                      ).BackendEventBus.triggerRefreshQR();
                    },
                    triggerInitialChatHistorySynced: function () {
                      o(
                        "WAWebBackendEventBus",
                      ).BackendEventBus.triggerInitialChatHistorySynced();
                    },
                    triggerRecentChatHistorySynced: function () {
                      o(
                        "WAWebBackendEventBus",
                      ).BackendEventBus.triggerRecentChatHistorySynced();
                    },
                    triggerFullChatHistorySynced: function () {
                      o(
                        "WAWebBackendEventBus",
                      ).BackendEventBus.triggerFullChatHistorySynced();
                    },
                    triggerCriticalSyncDone: function () {
                      o(
                        "WAWebBackendEventBus",
                      ).BackendEventBus.triggerCriticalSyncDone();
                    },
                    triggerStorageInitializationError: function () {
                      o(
                        "WAWebBackendEventBus",
                      ).BackendEventBus.triggerStorageInitializationError();
                    },
                    triggerSocketStreamDisconnected: function () {
                      o(
                        "WAWebBackendEventBus",
                      ).BackendEventBus.triggerSocketStreamDisconnected();
                    },
                    triggerOpenSocketStream: function () {
                      o(
                        "WAWebBackendEventBus",
                      ).BackendEventBus.triggerOpenSocketStream();
                    },
                    triggerReconnectSocket: function () {
                      o(
                        "WAWebBackendEventBus",
                      ).BackendEventBus.triggerReconnectSocket();
                    },
                    triggerSetSocketState: function (t) {
                      var e = t.state;
                      o(
                        "WAWebBackendEventBus",
                      ).BackendEventBus.triggerSetSocketState(e);
                    },
                    triggerMainStreamModeReady: function () {
                      o(
                        "WAWebBackendEventBus",
                      ).BackendEventBus.triggerMainStreamModeReady();
                    },
                    triggerOfflineProcessReady: function () {
                      o(
                        "WAWebBackendEventBus",
                      ).BackendEventBus.triggerOfflineProcessReady();
                    },
                    triggerOfflineDeliveryEnd: function () {
                      o(
                        "WAWebBackendEventBus",
                      ).BackendEventBus.triggerOfflineDeliveryEnd();
                    },
                    triggerOfflineDeliveryStateReset: function () {
                      o(
                        "WAWebBackendEventBus",
                      ).BackendEventBus.triggerOfflineDeliveryStateReset();
                    },
                    triggerAbPropsUpdate: function (t) {
                      o(
                        "WAWebBackendEventBus",
                      ).BackendEventBus.triggerAbPropsUpdate(t);
                    },
                    triggerAbPropsLoaded: function () {
                      o(
                        "WAWebBackendEventBus",
                      ).BackendEventBus.triggerAbPropsLoaded();
                    },
                  },
                },
              ],
            );
            (a.setNamespaceHandler("event", function (e, t, n) {
              n
                ? n(o("WAWebBackendApi").frontendSendAndReceive(e, t))
                : o("WAWebBackendApi").frontendFireAndForget(e, t);
            }),
              a.setNamespaceHandler("workerSafeEvent", function (e, t, n) {
                n
                  ? n(
                      o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
                        e,
                        t,
                      ),
                    )
                  : o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget(
                      e,
                      t,
                    );
              }),
              d.resolve(a),
              t.addPoint("create_worker_end"),
              t.endSuccess(),
              o("WAWebFBLogger")
                .WAWebFBLogger()
                .INFO(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "WAWebBackendWorker is initialised",
                    ])),
                ));
          } catch (e) {
            (o("WAWebFBLogger")
              .WAWebFBLogger()
              .catching(r("getErrorSafe")(e))
              .MUSTFIX(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Error on WAWebBackendWorker initialisation",
                  ])),
              ),
              t.endFail(o("getSafeQplErrorMessage").getSafeQPLErrorMessage(e)));
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f() {
      return d.promise;
    }
    function g() {
      return d.resolveWasCalled();
    }
    function h(e) {
      return new (u || (u = n("Promise")))(function (t, n) {
        var r = function (a) {
          var o = a.data,
            i = o.message,
            l = o.type;
          l === "worker_setup" &&
            (e.removeEventListener("message", r),
            i === "worker_started" ? t() : i === "worker_failed" && n());
        };
        e.addEventListener("message", r);
      });
    }
    ((l.startBackendWorker = p),
      (l.getBackendWorkerBridge = f),
      (l.isBackendWorkerBridgeReady = g));
  },
  98,
);
