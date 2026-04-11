__d(
  "WAWebBackendWorker",
  [
    "Promise",
    "WACryptoAesCbc",
    "WACryptoHmac",
    "WACryptoSha256",
    "WALogger",
    "WAResolvable",
    "WATransferableResult",
    "WAWebBackendApi",
    "WAWebBackendEventBusWorker",
    "WAWebBackendEventBusWorkerCompatible",
    "WAWebBackendWorkerABPropsCache",
    "WAWebBackendWorkerBridge",
    "WAWebCryptoDecryptMediaWorker",
    "WAWebDeviceSyncBackendWorker",
    "WAWebGetMessageCache",
    "WAWebHandleSingleMsgFactory",
    "WAWebHistorySyncBackendWorker",
    "WAWebHistorySyncBackendWorkerV2",
    "WAWebHistorySyncProgress",
    "WAWebIdentityChangeApiFactory",
    "WAWebLogger",
    "WAWebMessageInsertDebugPlaceholderFactory",
    "WAWebMessageProcessorCacheWorker",
    "WAWebModelStorageInitialize",
    "WAWebNoop",
    "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
    "WAWebPersistedJobManagerWorker",
    "WAWebPersistedJobManagerWorkerCompatible",
    "WAWebPrekeyProcessingBackendWorker",
    "WAWebSchemaVersions",
    "WAWebSyncdOrphanFactory",
    "WAWebUpdateMmSignalSharingExpirationWindowFactory",
    "WAWebWorkerQplProxy",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d() {
      var e = null,
        t = {
          onmessage: e,
          postMessage: function (t, n) {
            globalThis.postMessage(t, n);
          },
          close: function () {
            self.close();
          },
        };
      return (
        self.addEventListener("message", function (e) {
          t.onmessage != null && t.onmessage(e);
        }),
        t
      );
    }
    var m = new (o("WAResolvable").Resolvable)(),
      p = new (o("WAResolvable").Resolvable)();
    function _() {
      try {
        (o("WAWebLogger").initializeWAWebLogger(function () {
          return (c || (c = n("Promise"))).resolve();
        }),
          o("WAWebHandleSingleMsgFactory").setHandler(function () {
            return (c || (c = n("Promise"))).resolve();
          }),
          o("WAWebUpdateMmSignalSharingExpirationWindowFactory").setHandler(
            r("WAWebNoop"),
          ),
          o("WAWebSyncdOrphanFactory").setHandler(function () {
            return (c || (c = n("Promise"))).resolve();
          }),
          o("WAWebPersistedJobManagerWorkerCompatible").setHandler(
            o("WAWebPersistedJobManagerWorker")
              .workerPersistedJobManagerHandler,
          ),
          o("WAWebGetMessageCache").setMessageCache(
            o("WAWebMessageProcessorCacheWorker").messageProcessorCache,
          ),
          o("WAWebMessageInsertDebugPlaceholderFactory").setHandler(
            r("WAWebNoop"),
          ),
          o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible").setHandler({
            startMarker: function () {},
            activate: r("WAWebNoop"),
          }),
          o("WAWebIdentityChangeApiFactory").setHandlers(
            function () {
              return (c || (c = n("Promise"))).resolve();
            },
            function () {
              return (c || (c = n("Promise"))).resolve();
            },
          ),
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "WAWebBackendWorker(inside) starts",
              ])),
          ));
        var t = null,
          a = o("WAWebBackendWorkerBridge").createBridge(
            d(),
            [
              "abPropsExposure",
              "qpl",
              "event",
              "workerSafeEvent",
              "backendEventBus",
            ],
            [
              {
                namespace: "historySync",
                handlers: {
                  process: function (t) {
                    var e = t.data;
                    return o(
                      "WAWebHistorySyncBackendWorker",
                    ).processHistorySync(e);
                  },
                  processV2: function (t) {
                    var e = t.chunkInfo,
                      n = t.data;
                    return o(
                      "WAWebHistorySyncBackendWorkerV2",
                    ).processHistorySync(e, n, {
                      dbReady: m.promise,
                      abPropsReady: p.promise,
                    });
                  },
                },
              },
              {
                namespace: "deviceSync",
                handlers: {
                  decodeSignedKeyIndexBytesBatch: function (t) {
                    var e = t.items;
                    return o(
                      "WAWebDeviceSyncBackendWorker",
                    ).decodeSignedKeyIndexBytesBatch(e);
                  },
                },
              },
              {
                namespace: "crypto",
                handlers: {
                  aesCbcDecrypt: (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        var t = e.ciphertext,
                          n = e.encKey,
                          r = e.iv,
                          a = yield o("WACryptoAesCbc").aesCbcDecrypt(n, r, t);
                        return o("WATransferableResult").withTransferables(a, [
                          a,
                        ]);
                      },
                    );
                    function t(t) {
                      return e.apply(this, arguments);
                    }
                    return t;
                  })(),
                  hmacSha256: function (t) {
                    var e = t.data,
                      n = t.macKey,
                      r = t.truncateLength;
                    return o("WACryptoHmac").hmacSha256(n, e, r);
                  },
                  sha256Base64: function (t) {
                    var e = t.data;
                    return o("WACryptoSha256").sha256Base64(e);
                  },
                },
              },
              {
                namespace: "media",
                handlers: {
                  decryptMedia: (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        var t = e.ciphertextHmac,
                          n = e.encKey,
                          a = e.expectedPlaintextHash,
                          i = e.iv,
                          l = e.macKey,
                          s = yield r("WAWebCryptoDecryptMediaWorker")({
                            ciphertextHmac: t,
                            encKey: n,
                            expectedPlaintextHash: a,
                            iv: i,
                            macKey: l,
                          });
                        return o("WATransferableResult").withTransferables(s, [
                          s,
                        ]);
                      },
                    );
                    function t(t) {
                      return e.apply(this, arguments);
                    }
                    return t;
                  })(),
                },
              },
              {
                namespace: "prekeyProcessing",
                handlers: {
                  createOutgoingSessionBatch: function (t) {
                    var e = t.regInfo,
                      n = t.sessions,
                      r = t.shouldYield,
                      a = t.useScheduler;
                    return o(
                      "WAWebPrekeyProcessingBackendWorker",
                    ).createOutgoingSessionBatch(e, n, r, a);
                  },
                },
              },
              {
                namespace: "abProps",
                handlers: {
                  update: function (t) {
                    var e = t.configs,
                      n = t.urlSearch;
                    (o("WAWebBackendWorkerABPropsCache").updateWorkerABProps(
                      e,
                      n,
                    ),
                      p.resolveWasCalled() || p.resolve());
                  },
                },
              },
              {
                namespace: "database",
                handlers: {
                  initDb: function (t) {
                    var e = t.versionsToSet;
                    (o("WAWebSchemaVersions").setSchemaVersions(e),
                      o("WAWebModelStorageInitialize")
                        .initializeWithoutGKs()
                        .then(function () {
                          m.resolve();
                        })
                        .catch(function (e) {
                          return m.reject(e);
                        }));
                  },
                },
              },
            ],
          );
        (o("WAWebBackendApi").setApi(a),
          (t = new (r("WAWebBackendEventBusWorker"))(a)),
          a.setNamespaceHandler(
            "backendEventBusSync",
            t.getBackendEventBusSyncHandler(),
          ),
          o("WAWebBackendEventBusWorkerCompatible").setBackendEventBus(t),
          o("WAWebHistorySyncProgress").initHistorySyncProgressListeners(),
          o("WAWebWorkerQplProxy").initWorkerQplProxy(a),
          o("WAWebBackendWorkerABPropsCache").initializeWorkerABProps(a),
          globalThis.postMessage({
            type: "worker_setup",
            message: "worker_started",
          }),
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "WAWebBackendWorker(inside) ends",
              ])),
          ));
      } catch (e) {
        (o("WALogger").ERROR(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "WAWebBackendWorker(inside) fails: ",
              "",
            ])),
          r("getErrorSafe")(e),
        ),
          globalThis.postMessage({
            type: "worker_setup",
            message: "worker_failed",
          }));
      }
    }
    l.default = _;
  },
  98,
);
