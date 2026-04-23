__d(
  "WAWebBackendWorkerClient",
  [
    "Promise",
    "QPLFlow",
    "WALogger",
    "WAResolvable",
    "WAWebABPropsCache",
    "WAWebApiHydrateWidsUtil",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebBackendWorkerBridge",
    "WAWebBackendWorkerLocks",
    "WAWebBackendWorkerResource",
    "WAWebGetMessageCache",
    "WAWebGlobals",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebIdentityChangeApiWorkerCompatible",
    "WAWebMainThreadQplHandler",
    "WAWebMessageInsertDebugPlaceholderWorkerCompatible",
    "WAWebMsgKey",
    "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
    "WAWebPersistedJobManagerWorkerCompatible",
    "WAWebSyncdOrphanWorkerCompatible",
    "WAWebUpdateMmSignalSharingExpirationWindowWorkerCompatible",
    "WAWebUserPrefsBase",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys",
    "WAWebWorkerSafeBackendApi",
    "WorkerBundleResource",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "getSafeQplErrorMessage",
    "gkx",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d;
    function m(e) {
      throw new TypeError('"' + e + '" is read-only');
    }
    var p = r("qpl")._(891427260, "2714"),
      _ = new (d = o("WAResolvable")).Resolvable(),
      f = new Map(),
      g = {
        abProps: new d.Resolvable(),
        dbInit: new d.Resolvable(),
        dbFinalKey: new d.Resolvable(),
        eventBusSyncState: new d.Resolvable(),
      },
      h = null;
    function y(t) {
      if (((h = t), !g.abProps.resolveWasCalled())) {
        g.abProps.resolve(t);
        return;
      }
      x()
        .then(function (e) {
          return e.sendAndReceive("abProps", "update", t);
        })
        .catch(function (t) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Error syncing abprops with backend worker: ",
                  "",
                ])),
              r("getErrorSafe")(t),
            )
            .sendLogs("worker-abprop-sync-failed");
        });
    }
    function C(e) {
      g.dbInit.resolveWasCalled() ||
        g.dbInit.resolve(
          babelHelpers.extends({}, e, { salt: new Uint8Array(e.salt) }),
        );
    }
    function b(e) {
      g.dbFinalKey.resolveWasCalled() || g.dbFinalKey.resolve(e);
    }
    function v(e) {
      g.eventBusSyncState.resolveWasCalled() || g.eventBusSyncState.resolve(e);
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield (c || (c = n("Promise"))).all([
              g.abProps.promise,
              g.dbInit.promise,
              g.dbFinalKey.promise,
              g.eventBusSyncState.promise,
            ]),
            r = t[0],
            a = t[1],
            i = t[2],
            l = t[3],
            s = o("WAWebUserPrefsBase").userPreferencesStoreBase.get(
              o("WAWebUserPrefsKeys").KEYS.ME_DISPLAY_NAME,
            ),
            u = o("WAWebUserPrefsBase").userPreferencesStoreBase.get(
              o("WAWebUserPrefsKeys").KEYS.LID,
            );
          yield e.sendAndReceive("workerInit", "setup", {
            globals: {
              deviceJid: o("WAWebGlobals").getMyDeviceJid(),
              lidDeviceJid: u != null ? String(u) : null,
              displayName: s != null ? String(s) : null,
            },
            abProps: h != null ? h : r,
            dbInit: babelHelpers.extends({}, a, {
              salt: new Uint8Array(a.salt),
            }),
            dbFinalKey: i,
            eventBusSyncState: l,
          });
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
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
    function E() {
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
              r && f.set(e, r);
            },
            endMarker: function (t) {
              var e = t.markerId,
                n = f.get(e);
              n && (n(), f.delete(e));
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
          n
            ? n(o("WAWebBackendApi").frontendSendAndReceive(e, t))
            : o("WAWebBackendApi").frontendFireAndForget(e, t);
        }),
        e.setNamespaceHandler("workerSafeEvent", function (e, t, n) {
          n
            ? n(o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(e, t))
            : o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget(e, t);
        }),
        e
      );
    }
    var k = 10,
      I = 0;
    function T() {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("QPLFlow").startQPLFlow(p, {
            annotations: {
              bool: { wa_web_media_wasm_worker_split: r("gkx")("24042") },
              int: { creatingWorkerCount: I++ },
            },
            timeoutInMs: 6e4,
          });
          try {
            e.addPoint("create_worker_start");
            var t = o("WorkerBundleResource").createDedicatedWebWorker(
                r("WAWebBackendWorkerResource"),
              ),
              n;
            (_.resolveWasCalled() ? (n = yield _.promise) : (n = E()),
              e.addPoint("worker_connect_start"),
              yield P(t),
              e.addPoint("worker_connect_end"));
            var a = L(t);
            (o("WAWebBackendWorkerBridge").attachBridgeToPortal(n, a, [
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
              _.resolveWasCalled() || _.resolve(n),
              e.addPoint("init_data_start"),
              yield S(n),
              e.addPoint("init_data_end"),
              e.addPoint("create_worker_end"),
              e.endSuccess(),
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "WAWebBackendWorker is initialised",
                  ])),
              ),
              globalThis.navigator.locks != null &&
                globalThis.navigator.locks.request(
                  o("WAWebBackendWorkerLocks").WORKER_LIVENESS_LOCK,
                  function () {
                    I < k && T();
                  },
                ));
          } catch (t) {
            (o("WALogger").ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "Error on WAWebBackendWorker initialisation: ",
                  "",
                ])),
              r("getErrorSafe")(t),
            ),
              e.endFail(o("getSafeQplErrorMessage").getSafeQPLErrorMessage(t)));
          }
        })),
        D.apply(this, arguments)
      );
    }
    function x() {
      return _.promise;
    }
    function $() {
      return _.resolveWasCalled();
    }
    function P(e) {
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
    ((l.recordInitAbProps = y),
      (l.recordInitDbInit = C),
      (l.recordInitDbFinalKey = b),
      (l.recordInitEventBusSyncState = v),
      (l.startBackendWorker = T),
      (l.getBackendWorkerBridge = x),
      (l.isBackendWorkerBridgeReady = $));
  },
  98,
);
