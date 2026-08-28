__d(
  "ZenonE2eeWasmWorkerClient",
  [
    "FrameEncryptionWasmTypes",
    "ODS",
    "Promise",
    "WebWorkerV2Resource",
    "WorkerClient",
    "WorkerFuncChannel",
    "WorkerMessagePort",
    "ZenonE2eeWasmWorkerResource",
    "ZenonInsertableStreamsMessage",
    "ZenonInsertableStreamsMessageTransformer",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = {},
      c = null,
      d;
    u[r("ZenonInsertableStreamsMessage").name] = r(
      "ZenonInsertableStreamsMessageTransformer",
    );
    var m = (function () {
      function t() {
        var e = o("WebWorkerV2Resource").createDedicatedV2WebWorker(
            r("ZenonE2eeWasmWorkerResource"),
            "ZenonE2eeWasmWorker",
          ),
          t = e.worker;
        ((this.client = new (o("WorkerMessagePort").WorkerSyncedMessagePort)(
          t,
          "ZenonE2eeWasmWorker",
        )),
          (d = o("WorkerFuncChannel").importChannel(
            {
              allowUnencryptedFramesOnDecryptors: null,
              cacheIdentityKeys: null,
              calculateSignature: null,
              createSecureDataMessageManager: null,
              createSecureSctpManager: null,
              decryptSctpMessage: null,
              decryptStateSyncUpdate: null,
              encryptSctpMessage: null,
              encryptStateSyncSnapshot: null,
              encryptStateSyncUpdate: null,
              freeAllEncryptorsAndDecryptors: null,
              freeEncryptionKeysManager: null,
              freeEncryptorAndDecryptorForId: null,
              freePrivatelyHeldCallScopedResources: null,
              freeSecureSctpManager: null,
              getGroupE2eeMetrics: null,
              getIdentityStoreShortDescription: null,
              getSerializedE2eeClientState: null,
              getTrackStats: null,
              handleStreamTransform: null,
              initialize: null,
              onMediaDataChannelReady: null,
              processE2eeMessage: null,
              processE2eeServerUpdate: null,
              setDecryptionDisabled: null,
              setDecryptorCodec: null,
              setEncryptionDisabled: null,
              setEncryptorCodec: null,
              setLocalE2eeId: null,
              updateLocalTrackIdForStats: null,
              updateSenderKeyIndex: null,
              verifySignature: null,
            },
            this.client,
            "zenon_e2ee_worker_to_main",
            function () {},
            u,
          )),
          o("WorkerFuncChannel").exportChannel(
            {
              logOdsCounter: function (t) {
                (s || (s = o("ODS"))).bumpEntityKey(4083, "zenon_e2ee", t);
              },
              sendGenericDataMessage: function () {},
            },
            this.client,
            "zenon_e2ee_main_to_worker",
          ),
          o("WorkerClient").init(this.client));
      }
      var a = t.prototype;
      return (
        (a.destroy = function () {
          this.client.close();
        }),
        (a.transformStream = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            yield d.handleStreamTransform(e);
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.processE2eeMessage = function (r) {
          return new (e || (e = n("Promise")))(function (e) {
            return e(d.processE2eeMessage(r));
          });
        }),
        (a.processE2eeServerUpdate = function (r) {
          return new (e || (e = n("Promise")))(function (e) {
            return e(d.processE2eeServerUpdate(r));
          });
        }),
        (a.setEncryptionDisabled = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            yield d.setEncryptionDisabled(e);
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.setDecryptionDisabled = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            yield d.setDecryptionDisabled(e);
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.allowUnencryptedFramesOnDecryptors = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            yield d.allowUnencryptedFramesOnDecryptors();
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.getTrackStats = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var t = yield new (e || (e = n("Promise")))(function (e) {
              return e(d.getTrackStats());
            });
            return new Map(t);
          });
          function r() {
            return t.apply(this, arguments);
          }
          return r;
        })()),
        (a.setLocalE2eeId = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            yield d.setLocalE2eeId(e);
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.getSerializedE2eeClientState = function () {
          return new (e || (e = n("Promise")))(function (e) {
            return e(d.getSerializedE2eeClientState());
          });
        }),
        (a.freePrivatelyHeldCallScopedResources = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            yield d.freePrivatelyHeldCallScopedResources();
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.freeEncryptionKeysManager = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            yield d.freeEncryptionKeysManager();
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.updateSenderKeyIndex = function (r) {
          return new (e || (e = n("Promise")))(function (e) {
            return e(d.updateSenderKeyIndex(r));
          });
        }),
        (a.onMediaDataChannelReady = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            yield d.onMediaDataChannelReady();
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.updateLocalTrackIdForStats = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              yield d.updateLocalTrackIdForStats(e, t);
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.getGroupE2eeMetrics = function () {
          return new (e || (e = n("Promise")))(function (e) {
            return e(d.getGroupE2eeMetrics());
          });
        }),
        (a.createSecureDataMessageManager = function (r, a) {
          return new (e || (e = n("Promise")))(function (e) {
            return e(d.createSecureDataMessageManager(r, a));
          }).then(function (e) {
            return new (o("FrameEncryptionWasmTypes").ZenonNonNullWasmPtr)(e);
          });
        }),
        (a.setDecryptorCodec = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              yield d.setDecryptorCodec(e, t);
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.setEncryptorCodec = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              yield d.setEncryptorCodec(e, t);
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.freeEncryptorAndDecryptorForId = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            yield d.freeEncryptorAndDecryptorForId(e);
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.freeAllEncryptorsAndDecryptors = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            yield d.freeAllEncryptorsAndDecryptors();
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.encryptStateSyncSnapshot = function (r, o, a) {
          return new (e || (e = n("Promise")))(function (e) {
            return e(d.encryptStateSyncSnapshot(r.get(), o, a));
          });
        }),
        (a.encryptStateSyncUpdate = function (r, o, a) {
          return new (e || (e = n("Promise")))(function (e) {
            return e(d.encryptStateSyncUpdate(r.get(), o, a));
          });
        }),
        (a.decryptStateSyncUpdate = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n) {
              yield d.decryptStateSyncUpdate(e.get(), t, n);
            },
          );
          function t(t, n, r) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.createSecureSctpManager = function (r) {
          return new (e || (e = n("Promise")))(function (e) {
            return e(d.createSecureSctpManager(r));
          }).then(function (e) {
            return new (o("FrameEncryptionWasmTypes").ZenonNonNullWasmPtr)(e);
          });
        }),
        (a.freeSecureSctpManager = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            yield d.freeSecureSctpManager(e.get());
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.encryptSctpMessage = function (r, o) {
          return new (e || (e = n("Promise")))(function (e) {
            return e(d.encryptSctpMessage(r.get(), o));
          });
        }),
        (a.initializeE2ee = function (r, o, a, i, l, s, u, c, m) {
          return (
            m === void 0 && (m = function () {}),
            new (e || (e = n("Promise")))(function (e, t) {
              d.initialize(r, o, a, i, l, s, u, c, m, function (n, r) {
                return n != null ? t(n) : e(r);
              });
            })
          );
        }),
        (a.cacheIdentityKeys = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            yield d.cacheIdentityKeys(e);
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.getIdentityStoreShortDescription = function () {
          return new (e || (e = n("Promise")))(function (e) {
            return e(d.getIdentityStoreShortDescription());
          });
        }),
        (a.decryptSctpMessage = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n, r) {
              yield d.decryptSctpMessage(e.get(), t, n, r);
            },
          );
          function t(t, n, r, o) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.destroyZenonE2eeWasmWorker = function () {
          c != null && (c.destroy(), (c = null));
        }),
        t
      );
    })();
    function p() {
      return (c == null && (c = new m()), c);
    }
    var _ = p();
    l.default = _;
  },
  98,
);
