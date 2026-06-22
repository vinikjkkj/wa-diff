__d(
  "WAWebStartBackendWorker",
  [
    "Promise",
    "QPLFlow",
    "WALogger",
    "WAWebABPropsCache",
    "WAWebApiHydrateWidsUtil",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebBackendWorkerBridge",
    "WAWebBackendWorkerClient",
    "WAWebBackendWorkerInitState",
    "WAWebBackendWorkerLocks",
    "WAWebBackendWorkerResource",
    "WAWebBackendWorkerV2Resource",
    "WAWebCrashlog",
    "WAWebGetMessageCache",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebIdentityChangeApiWorkerCompatible",
    "WAWebLogForCrash",
    "WAWebLogger",
    "WAWebMainThreadQplHandler",
    "WAWebMessageInsertDebugPlaceholderWorkerCompatible",
    "WAWebMsgKey",
    "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
    "WAWebPersistedJobManagerWorkerCompatible",
    "WAWebSyncdOrphanWorkerCompatible",
    "WAWebUA",
    "WAWebUpdateMmSignalSharingExpirationWindowWorkerCompatible",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsMultiDevice",
    "WAWebUserPrefsTabMutex",
    "WAWebWorkerSafeBackendApi",
    "WAXMultiSiteWebWorkerV4HasteResponseControllerRouteBuilder",
    "WAXMultiSiteWebWorkerV4InitScriptControllerRouteBuilder",
    "WebWorkerV4Resource",
    "WorkerBundleResource",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
    "getSafeQplErrorMessage",
    "gkx",
    "qpl",
    "supportsModuleWorker",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = ["serializedError"],
      c;
    function d(e) {
      throw new TypeError('"' + e + '" is read-only');
    }
    var m = "WAWebBackendWorker-" + o("WAWebUserPrefsTabMutex").THIS_TAB,
      p = r("qpl")._(891427260, "2714"),
      _ = new Map(),
      f = {
        initScriptRouteBuilder: r(
          "WAXMultiSiteWebWorkerV4InitScriptControllerRouteBuilder",
        ),
        hasteResponseRouteBuilder: r(
          "WAXMultiSiteWebWorkerV4HasteResponseControllerRouteBuilder",
        ),
      };
    function g(e) {
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
    function h() {
      var e = o("WAWebBackendWorkerBridge").createBridge([
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
              return o("WAWebMainThreadQplHandler").handleQplBridgeMessage(t);
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
              o("WAWebBackendEventBus").BackendEventBus.triggerRefreshQR();
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
              o("WAWebBackendEventBus").BackendEventBus.triggerSetSocketState(
                e,
              );
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
              o("WAWebBackendEventBus").BackendEventBus.triggerAbPropsUpdate(t);
            },
            triggerAbPropsLoaded: function () {
              o("WAWebBackendEventBus").BackendEventBus.triggerAbPropsLoaded();
            },
          },
        },
        {
          namespace: "mainthread_callbacks",
          handlers: {
            handleSingleMsg: function (t) {
              return (
                o("WAWebApiHydrateWidsUtil").hydrateWids(t),
                o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg(
                  babelHelpers.extends({}, t, {
                    newMsg: babelHelpers.extends({}, t.newMsg, {
                      id: r("WAWebMsgKey").from(t.newMsg.id),
                    }),
                  }),
                )
              );
            },
            checkOrphanMutations: function (t) {
              var e = t.chatIds,
                n = t.msgIds,
                r = t.threadIds;
              return o("WAWebSyncdOrphanWorkerCompatible").checkOrphanMutations(
                n,
                e,
                r,
              );
            },
            maybeInsertDebugPlaceholder: function (t) {
              return (
                o("WAWebApiHydrateWidsUtil").hydrateWids(t),
                o(
                  "WAWebMessageInsertDebugPlaceholderWorkerCompatible",
                ).maybeInsertDebugPlaceholder(t)
              );
            },
            updateMmSignalSharingExpirationWindow: function (t) {
              var e = t.contextInfo,
                n = t.msg;
              return (
                o("WAWebApiHydrateWidsUtil").hydrateWids(n),
                o(
                  "WAWebUpdateMmSignalSharingExpirationWindowWorkerCompatible",
                ).updateMmSignalSharingExpirationWindow(n, e)
              );
            },
          },
        },
        {
          namespace: "mainthread_jobmanager",
          handlers: {
            fireAndForget: function (t) {
              o("WAWebPersistedJobManagerWorkerCompatible")
                .getJobManager()
                .fireAndForget(t);
            },
            waitUntilPersisted: function (t) {
              return o("WAWebPersistedJobManagerWorkerCompatible")
                .getJobManager()
                .waitUntilPersisted(t);
            },
            waitUntilCompleted: function (t) {
              return o("WAWebPersistedJobManagerWorkerCompatible")
                .getJobManager()
                .waitUntilCompleted(t);
            },
            loadAndRunJobFromId: function (t) {
              var e = t.jobId;
              return o("WAWebPersistedJobManagerWorkerCompatible")
                .getJobManager()
                .loadAndRunJobFromId(e);
            },
            deletePersistedJob: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var t = e.jobId;
                  yield o("WAWebPersistedJobManagerWorkerCompatible")
                    .getJobManager()
                    .accessors.deletePersistedJob(t);
                },
              );
              function t(t) {
                return e.apply(this, arguments);
              }
              return t;
            })(),
            maybeCreateJob: function (t) {
              return o("WAWebPersistedJobManagerWorkerCompatible")
                .getJobManager()
                .accessors.maybeCreateJob(t);
            },
          },
        },
        {
          namespace: "mainthread_crashlog",
          handlers: {
            sendLogs: function (t) {
              var e = t.options,
                n = t.reason;
              return o("WAWebCrashlog").sendLogs(n, e);
            },
          },
        },
        {
          namespace: "mainthread_fblogger",
          handlers: {
            logFBError: function (t) {
              var e = t.serializedError,
                n = babelHelpers.objectWithoutPropertiesLoose(t, u),
                a = r("err")(e.message);
              ((a.stack = e.stack),
                (a.name = e.name),
                o("WAWebLogger").logToFBLoggerLocal(
                  babelHelpers.extends({}, n, { error: a }),
                ));
            },
          },
        },
        {
          namespace: "mainthread_messagecache",
          handlers: {
            addMessages: function (t) {
              var e = t.flushImmediately,
                n = t.messages;
              return (
                o("WAWebApiHydrateWidsUtil").hydrateWids(n),
                o("WAWebGetMessageCache").getMessageCache().addMessages(n, e)
              );
            },
            addAdditionalInfo: function (t) {
              var e = t.dangerouslyFlushImmediately,
                n = t.info;
              o("WAWebGetMessageCache")
                .getMessageCache()
                .addAdditionalInfo(n, e);
            },
            createSnapshot: function () {
              o("WAWebGetMessageCache").getMessageCache().createSnapshot();
            },
            checkpointQueueWait: function () {
              return o("WAWebGetMessageCache")
                .getMessageCache()
                .checkpointQueueWait();
            },
            checkpointQueueSize: function () {
              return o("WAWebGetMessageCache")
                .getMessageCache()
                .checkpointQueueSize();
            },
            size: function () {
              return o("WAWebGetMessageCache").getMessageCache().size();
            },
          },
        },
        {
          namespace: "mainthread_msgreporter",
          handlers: {
            startMarker: function (t) {
              var e = t.markerId,
                n = t.stage,
                r = o(
                  "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
                ).msgProcessReporter.startMarker(n);
              r && _.set(e, r);
            },
            endMarker: function (t) {
              var e = t.markerId,
                n = _.get(e);
              n && (n(), _.delete(e));
            },
            activate: function (t) {
              var e = t.count;
              o(
                "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
              ).msgProcessReporter.activate(e);
            },
          },
        },
        {
          namespace: "mainthread_identitychange",
          handlers: {
            handleNewIdentity: function (t) {
              var e = t.deviceWid,
                n = t.offline;
              return (
                o("WAWebApiHydrateWidsUtil").hydrateWids({ deviceWid: e }),
                o("WAWebIdentityChangeApiWorkerCompatible").handleNewIdentity(
                  e,
                  n,
                )
              );
            },
            clearDeviceRecordForIdentityChange: function (t) {
              return (
                o("WAWebApiHydrateWidsUtil").hydrateWids(t),
                o(
                  "WAWebIdentityChangeApiWorkerCompatible",
                ).clearDeviceRecordForIdentityChange(t)
              );
            },
          },
        },
        {
          namespace: "userPrefsFromWorker",
          handlers: {
            syncSet: function (t) {
              var e = t.key,
                n = t.value;
              o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.applySyncSet(
                e,
                n,
              );
            },
            syncRemove: function (t) {
              var e = t.key;
              o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.applySyncRemove(
                e,
              );
            },
            syncClear: function () {
              o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.applySyncClear();
            },
            syncBulkSet: function (t) {
              var e = t.entries;
              for (var n of e) {
                var r = n.key,
                  a = n.value;
                o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.applySyncSet(
                  r,
                  a,
                );
              }
            },
          },
        },
      ]);
      return (
        e.setNamespaceHandler("event", function (e, t, n) {
          if (new Set(["updateChatLimitSharing", "chatCollectionAdd"]).has(e))
            o("WAWebApiHydrateWidsUtil").hydrateWids(t);
          else if (e === "processAndGetUnreadMentionsInfo")
            for (var a of t.filteredMsgs)
              (o("WAWebApiHydrateWidsUtil").hydrateWids(a),
                (a.id = r("WAWebMsgKey").from(a.id)));
          n
            ? n(o("WAWebBackendApi").frontendSendAndReceive(e, t))
            : o("WAWebBackendApi").frontendFireAndForget(e, t);
        }),
        e.setNamespaceHandler("workerSafeEvent", function (e, t, n) {
          (e === "syncContactListJob" &&
            o("WAWebApiHydrateWidsUtil").hydrateWids(t),
            n
              ? n(o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(e, t))
              : o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget(e, t));
        }),
        e
      );
    }
    var y = 15;
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a,
            i,
            l = null;
          (r("gkx")("17524") && (l = r("gkx")("20033")),
            l != null &&
              o("WAWebLogForCrash").onLogForCrashReady(function () {
                o("WAWebLogForCrash").logForCrash(
                  "wa_web_backend_worker_v2",
                  l,
                );
              }));
          var u = o("WAWebUserPrefsMultiDevice").isRegistered(),
            d = (a = t == null ? void 0 : t.retryStart) != null ? a : 0,
            _ =
              (i = t == null ? void 0 : t.qpl) != null
                ? i
                : o("QPLFlow").startQPLFlow(p, {
                    annotations: {
                      bool: {
                        wa_web_media_wasm_worker_split: r("gkx")("24042"),
                        supportModule: r("supportsModuleWorker")(!1),
                        isLoggedIn: u,
                      },
                      int: {
                        retryStart: d,
                        isWorkerV2: l == null ? -1 : l ? 1 : 0,
                      },
                    },
                    timeoutInMs: 6e4,
                  });
          try {
            _.addPoint("create_worker_start");
            var b,
              S = (c || (c = n("Promise"))).resolve();
            if (l === !0) {
              var R =
                  o("WAWebUA").UA.isFirefox &&
                  parseInt(o("WAWebUA").UA.browserVersion.split(".")[0], 10) <=
                    115,
                L = o("WebWorkerV4Resource").createDedicatedV4WebWorker(
                  r("WAWebBackendWorkerV2Resource"),
                  f,
                  m,
                  R,
                );
              ((S = L.initReady), (b = L.worker));
            } else
              b = o("WorkerBundleResource").createDedicatedWebWorker(
                r("WAWebBackendWorkerResource"),
              );
            (_.addPoint("worker_connect_start"),
              yield c.all([S, v(b)]),
              _.addPoint("worker_connect_end"));
            var E;
            o("WAWebBackendWorkerClient").isBackendWorkerBridgeReady()
              ? (E = yield o(
                  "WAWebBackendWorkerClient",
                ).getBackendWorkerBridge())
              : (E = h());
            var k = g(b);
            (o("WAWebBackendWorkerBridge").attachBridgeToPortal(E, k, [
              "historySync",
              "deviceSync",
              "crypto",
              "media",
              "prekeyProcessing",
              "abProps",
              "backendEventBusSync",
              "userPrefs",
              "workerInit",
            ]),
              o("WAWebBackendWorkerClient").setBackendWorkerBridge(E),
              u
                ? (_.addPoint("init_data_start"),
                  yield o("WAWebBackendWorkerInitState").sendInitState(E),
                  _.addPoint("init_data_end"))
                : (_.addPoint("init_data_triggered"),
                  o("WAWebBackendWorkerInitState").sendInitState(E)),
              _.addPoint("create_worker_end"),
              _.endSuccess(),
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "WAWebBackendWorker is initialised",
                  ])),
              ),
              globalThis.navigator.locks != null &&
                (l === !0
                  ? globalThis.navigator.locks.request(
                      m + "-kill-switch-lock",
                      n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* () {
                          d < y && C({ retryStart: d + 1 });
                        },
                      ),
                    )
                  : globalThis.navigator.locks.request(
                      o("WAWebBackendWorkerLocks").WORKER_LIVENESS_LOCK,
                      function () {
                        d < y && C({ retryStart: d + 1 });
                      },
                    )));
          } catch (e) {
            var I,
              T = (I = t == null ? void 0 : t.retryInit) != null ? I : 0;
            T < y && globalThis.navigator.locks != null
              ? (_.addPoint("retry_" + T), C({ qpl: _, retryInit: T + 1 }))
              : (o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "WAWebBackendWorkerClient init fails",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("main-thread-backend-worker-init-fails"),
                _.endFail(
                  o("getSafeQplErrorMessage").getSafeQPLErrorMessage(e),
                ));
          }
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return new (c || (c = n("Promise")))(function (t, n) {
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
    l.startBackendWorker = C;
  },
  98,
);
