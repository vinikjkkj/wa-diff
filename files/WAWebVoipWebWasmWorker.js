__d(
  "WAWebVoipWebWasmWorker",
  [
    "WABinary",
    "WACryptoHkdfSync",
    "WACryptoSha256HmacBuilder",
    "WAPromiseDelays",
    "WAWebIDBFSStorageBackend",
    "WAWebLoggerWorker",
    "WAWebMLModelHashes",
    "WAWebMLModelNamespaces",
    "WAWebVoipBrowserAudioStatusSyncBridge",
    "WAWebVoipContactLookupSyncBridge",
    "WAWebVoipJsWorkerMessageHandler",
    "WAWebVoipPersistentFS",
    "WAWebVoipWasmWorkerGlueResolver",
    "WAWebVoipWebWasmLoader.worker",
    "WorkerMessagePort",
    "WorkerSelf",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "nullthrows",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("requireDeferred")(
        "WAWebVoipWebWasmLoader_ProdLab_internal.worker",
      ).__setRef("WAWebVoipWebWasmWorker"),
      s = r("requireDeferred")(
        "WAWebVoipWebWasmLoader_ProdLabvideo_internal.worker",
      ).__setRef("WAWebVoipWebWasmWorker");
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t === "prod-lab" ? e : t === "prod-labvideo" ? s : null;
          return n != null ? n.load() : r("WAWebVoipWebWasmLoader.worker");
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t, n) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          return o("WAWebVoipWasmWorkerGlueResolver").resolveWorkerGlueForLoad(
            self,
            o("WAWebVoipWasmWorkerGlueResolver").resolveHasteWorkerGlue(
              yield u(e),
            ),
            t,
            n,
            {
              now: function () {
                return Date.now();
              },
              onPinnedImportStart: function (t) {
                p(babelHelpers.extends({}, t, { pinnedImport: "started" }));
              },
              sleep: o("WAPromiseDelays").delayMs,
            },
          );
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      _.postMessage(
        babelHelpers.extends(
          { type: "cmd", cmd: "wasmGlueBuildSkewObserved" },
          e,
        ),
      );
    }
    var _ = new (o("WorkerMessagePort").WorkerSyncedMessagePort)(
      self,
      "VoipWebWasmWorker",
    );
    (o("WAWebLoggerWorker").initializeWAWebLogger(),
      o("WorkerSelf").init(_),
      (self.WhatsAppVoipWasmWorkerCompatibleCallbacks = {
        onSignalingXmpp: function (t) {
          var e = t.callId,
            n = t.peerJid,
            r = t.xmlPayload;
          _.postMessage({
            type: "waWasmWorkerCompatibleCallback",
            __name: "onSignalingXmpp",
            peerJid: n,
            callId: e,
            xmlPayload: r,
          });
        },
        onCallEvent: function (t) {
          var e = t.eventDataJson,
            n = t.eventType,
            r = t.userData;
          _.postMessage({
            type: "waWasmWorkerCompatibleCallback",
            __name: "onCallEvent",
            eventType: n,
            userData: r,
            eventDataJson: e,
          });
        },
        sendDataToRelay: function (t) {
          var e = t.data,
            n = t.ip,
            r = t.len,
            a = t.port;
          try {
            var i = o(
              "WAWebVoipJsWorkerMessageHandler",
            ).trySendDirectOnTransferredChannel(n, a, e);
            if (i) return;
          } catch (e) {}
          _.postMessage({
            type: "waWasmWorkerCompatibleCallback",
            __name: "sendDataToRelay",
            data: e,
            len: r,
            ip: n,
            port: a,
          });
        },
        loggingCallback: function (t) {
          _.postMessage(
            babelHelpers.extends(
              {
                type: "waWasmWorkerCompatibleCallback",
                __name: "loggingCallback",
              },
              t,
            ),
          );
        },
        initCaptureDriverJS: function (t) {
          _.postMessage(
            babelHelpers.extends(
              {
                type: "waWasmWorkerCompatibleCallback",
                __name: "initCaptureDriverJS",
              },
              t,
            ),
          );
        },
        startCaptureJS: function () {
          _.postMessage({
            type: "waWasmWorkerCompatibleCallback",
            __name: "startCaptureJS",
          });
        },
        stopCaptureJS: function () {
          _.postMessage({
            type: "waWasmWorkerCompatibleCallback",
            __name: "stopCaptureJS",
          });
        },
        initPlaybackDriverJS: function (t) {
          _.postMessage(
            babelHelpers.extends(
              {
                type: "waWasmWorkerCompatibleCallback",
                __name: "initPlaybackDriverJS",
              },
              t,
            ),
          );
        },
        startPlaybackJS: function () {
          _.postMessage({
            type: "waWasmWorkerCompatibleCallback",
            __name: "startPlaybackJS",
          });
        },
        stopPlaybackJS: function () {
          _.postMessage({
            type: "waWasmWorkerCompatibleCallback",
            __name: "stopPlaybackJS",
          });
        },
        startVideoCaptureJS: function (t) {
          _.postMessage(
            babelHelpers.extends(
              {
                type: "waWasmWorkerCompatibleCallback",
                __name: "startVideoCaptureJS",
              },
              t,
            ),
          );
        },
        stopVideoCaptureJS: function () {
          _.postMessage({
            type: "waWasmWorkerCompatibleCallback",
            __name: "stopVideoCaptureJS",
          });
        },
        onVideoFrameWasmToJs: function (t) {
          var e = t.format,
            n = t.frameBuffer,
            r = t.height,
            o = t.isKeyFrame,
            a = t.isScreenShare,
            i = t.orientation,
            l = t.timestamp,
            s = t.userJid,
            u = t.width;
          _.postMessage(
            {
              type: "waWasmWorkerCompatibleCallback",
              __name: "onVideoFrameWasmToJs",
              userJid: s,
              frameBuffer: n,
              width: u,
              height: r,
              orientation: i,
              format: e,
              timestamp: l,
              isKeyFrame: o,
              isScreenShare: a,
            },
            [n],
          );
        },
        startDesktopCaptureJS: function (t) {
          _.postMessage(
            babelHelpers.extends(
              {
                type: "waWasmWorkerCompatibleCallback",
                __name: "startDesktopCaptureJS",
              },
              t,
            ),
          );
        },
        stopDesktopCaptureJS: function () {
          _.postMessage({
            type: "waWasmWorkerCompatibleCallback",
            __name: "stopDesktopCaptureJS",
          });
        },
        dataChannelStateCallback: function (t) {
          _.postMessage(
            babelHelpers.extends(
              {
                type: "waWasmWorkerCompatibleCallback",
                __name: "dataChannelStateCallback",
              },
              t,
            ),
          );
        },
        cryptoHkdfExtractWithSaltAndExpand: function (t) {
          var e = t.info_,
            n = t.key_,
            r = t.length,
            a = t.salt_,
            i = new Uint8Array(n),
            l = a ? new Uint8Array(a) : void 0,
            s = o("WABinary").Binary.build(e).readByteArrayView();
          return o("WACryptoHkdfSync").hkdf(i, l, s, r);
        },
        hmacSha256KeyGenerator: function (t) {
          var e = t.data_,
            n = t.key_,
            r = new Uint8Array(e),
            a = new Uint8Array(n);
          return new (o("WACryptoSha256HmacBuilder").Sha256HMacBuilder)(a)
            .update(r)
            .finish();
        },
        isParticipantKnownContact: function (t) {
          return o(
            "WAWebVoipContactLookupSyncBridge",
          ).resolveParticipantKnownContactSync({
            jid: t.jid,
            onComplete: function (t) {
              var e = t.jid,
                n = t.outcome,
                r = t.timeoutMs,
                o = 3,
                a = n;
              (n === "timed-out" &&
                ((o = 2), (a = "timed out after " + String(r) + "ms")),
                self.WhatsAppVoipWasmWorkerCompatibleCallbacks.loggingCallback({
                  level: o,
                  message:
                    "voip: [Worker] isParticipantKnownContact(sync): " +
                    e +
                    " " +
                    a,
                }));
            },
            postMessage: function (t) {
              _.postMessage(t);
            },
          });
        },
        getBrowserAudioProcessingStatus: function () {
          return o(
            "WAWebVoipBrowserAudioStatusSyncBridge",
          ).resolveBrowserAudioProcessingStatusSync({
            onTimeout: function (t) {
              var e = t.fallbackStatus,
                n = t.timeoutMs;
              self.WhatsAppVoipWasmWorkerCompatibleCallbacks.loggingCallback({
                level: 2,
                message:
                  "voip: [Worker] browserAudioProcessingStatusSync timed out after " +
                  String(n) +
                  "ms; falling back to status=" +
                  String(e),
              });
            },
            onUnknown: function (t) {
              var e = t.fallbackStatus;
              self.WhatsAppVoipWasmWorkerCompatibleCallbacks.loggingCallback({
                level: 2,
                message:
                  "voip: [Worker] browserAudioProcessingStatusSync returned unknown; falling back to status=" +
                  String(e) +
                  " without caching",
              });
            },
            postMessage: function (t) {
              _.postMessage(t);
            },
          });
        },
        getPersistentDirectoryPath: function () {
          return o("WAWebVoipPersistentFS").getVoipPersistentDirectoryPath();
        },
        getBweModelPath: function (t) {
          var e = t.versionName,
            n = o("WAWebMLModelHashes").getModelVersion(e);
          return n == null
            ? null
            : o("WAWebIDBFSStorageBackend").ML_MODEL_PERSIST_DIR +
                "/" +
                o("WAWebMLModelHashes").LEGACY_MODEL_NAMESPACE +
                "_" +
                n;
        },
        getMLModelPathForType: function (t) {
          var e = t.modelType,
            n = t.versionName,
            r = o("WAWebMLModelNamespaces").getNamespaceForModelType(e);
          if (r == null) return null;
          var a = o("WAWebMLModelHashes").getModelVersion(n);
          return a == null
            ? null
            : o("WAWebIDBFSStorageBackend").ML_MODEL_PERSIST_DIR +
                "/" +
                r +
                "_" +
                a;
        },
        videoFrameConsumed: function () {
          _.postMessage({
            type: "waWasmWorkerCompatibleCallback",
            __name: "videoFrameConsumed",
          });
        },
        videoCaptureFrameTick: function () {
          _.postMessage({
            type: "waWasmWorkerCompatibleCallback",
            __name: "videoCaptureFrameTick",
          });
        },
        videoEncodedFrameTick: function () {
          _.postMessage({
            type: "waWasmWorkerCompatibleCallback",
            __name: "videoEncodedFrameTick",
          });
        },
        videoCaptureFpsReset: function () {
          _.postMessage({
            type: "waWasmWorkerCompatibleCallback",
            __name: "videoCaptureFpsReset",
          });
        },
      }));
    var f = {},
      g = !1;
    function h(e, t) {
      if (!e) {
        var n = new Error("Assertion failed: " + t);
        throw (n.stack, n);
      }
    }
    function y() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      var r = t.slice().join(" ");
    }
    function C() {
      for (var e, t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
        r[o] = arguments[o];
      var a = r.slice().join(" ");
      postMessage({
        cmd: "alert",
        text: a,
        threadId: (e = (t = f)._pthread_self) == null ? void 0 : e.call(t),
      });
    }
    var b = y;
    self.alert = C;
    var v;
    ((f.instantiateWasm = function (e, t) {
      var n = r("nullthrows")(f.wasmModule);
      f.wasmModule = null;
      var o = new WebAssembly.Instance(n, e);
      return t(o);
    }),
      (self.onunhandledrejection = function (e) {
        var t;
        throw (t = e.reason) != null ? t : e;
      }));
    var S = 2;
    function R() {
      try {
        var e, t, n;
        ((e = f.wasmMemory) == null || e.grow(0),
          (t = (n = f).GROWABLE_HEAP_U8) == null || t.call(n));
      } catch (e) {}
    }
    function L(e) {
      return e instanceof RangeError;
    }
    function E(e) {
      var t = f.__emscripten_thread_mailbox_await;
      if (t != null)
        for (var n = 0; n <= S; n++)
          try {
            t(e);
            return;
          } catch (e) {
            if (!L(e) || n === S) throw e;
            R();
          }
    }
    function k(e) {
      try {
        if (
          typeof e == "object" &&
          e != null &&
          "excPtr" in e &&
          typeof e.excPtr == "number"
        ) {
          var t = f.getExceptionMessage;
          if (t != null) {
            var n = t(e.excPtr),
              r = n[0],
              o = n[1];
            self.WhatsAppVoipWasmWorkerCompatibleCallbacks.loggingCallback({
              level: 1,
              message:
                "voip: [WASM Crash - WORKER] Native C++ exception: " +
                r +
                ": " +
                o,
            });
          }
        } else
          e instanceof WebAssembly.RuntimeError &&
            self.WhatsAppVoipWasmWorkerCompatibleCallbacks.loggingCallback({
              level: 1,
              message:
                "voip: [WASM Crash - WORKER] WebAssembly.RuntimeError: " +
                String(e.message),
            });
        e != null &&
          typeof e == "object" &&
          "stack" in e &&
          self.WhatsAppVoipWasmWorkerCompatibleCallbacks.loggingCallback({
            level: 1,
            message:
              "voip: [WASM Crash - WORKER] JavaScript stack trace: " +
              String(e.stack),
          });
      } catch (e) {
        b("Failed to log native stack trace: " + String(e));
      }
    }
    function I(e) {
      try {
        if (e.cmd === "load") {
          var t = e.expectedBuildSha,
            a = e.handlers,
            i = e.pinnedWorkerGlueUrl,
            l = e.wasmMemory,
            s = e.wasmModule,
            u = e.wasmVariant,
            c = e.workerID,
            m = [],
            y = function (t) {
              m.push(t);
            };
          (_.removeMessageListener("cmd", I), _.addMessageListener("cmd", y));
          var C = !1,
            S = !1,
            L = function () {
              if (C && S) {
                _.postMessage({ type: "cmd", cmd: "loaded" });
                for (var e of m) I(e);
                (_.removeMessageListener("cmd", y),
                  _.addMessageListener("cmd", I));
              }
            };
          ((self.startWorker = function (e) {
            ((f = e), (C = !0), L());
          }),
            (f.wasmModule = s));
          var T = function (t) {
            f[t] = function () {
              for (
                var e = arguments.length, n = new Array(e), r = 0;
                r < e;
                r++
              )
                n[r] = arguments[r];
              _.postMessage({
                type: "cmd",
                cmd: "callHandler",
                callHandler: { handler: t, args: n },
              });
            };
          };
          for (var D of a) T(D);
          ((f.wasmMemory = l),
            (f.buffer = f.wasmMemory.buffer),
            (f.workerID = c),
            (f.ENVIRONMENT_IS_PTHREAD = !0),
            (f.onAbort = function (e) {
              b("[VoIP WASM] onAbort: " + String(e));
            }),
            d(u, t, i)
              .catch(function (e) {
                throw (
                  i != null &&
                    _.postMessage({
                      type: "cmd",
                      cmd: "pinnedWasmGlueLoadFailed",
                      error: String(r("getErrorSafe")(e).message),
                    }),
                  e
                );
              })
              .then(function (e) {
                var n = e.resolved,
                  r = o(
                    "WAWebVoipWasmWorkerGlueResolver",
                  ).detectWasmGlueBuildMismatch(n, t);
                if (
                  r != null &&
                  o(
                    "WAWebVoipWasmWorkerGlueResolver",
                  ).shouldRefuseWasmGlueBuildMismatch(r)
                ) {
                  _.postMessage(
                    babelHelpers.extends(
                      { type: "cmd", cmd: "wasmGlueBuildMismatch" },
                      r,
                    ),
                  );
                  var a = new Error(
                    "voip: worker glue build mismatch source=" +
                      r.source +
                      " expected=" +
                      r.expectedBuildSha +
                      " actual=" +
                      String(r.actualBuildSha),
                  );
                  throw (a.stack, a);
                }
                var i = o(
                  "WAWebVoipWasmWorkerGlueResolver",
                ).getWasmGlueBuildSkewReport(e);
                return (
                  i != null && p(i),
                  self.WhatsAppVoipWasmWorkerCompatibleCallbacks.loggingCallback(
                    {
                      level: 3,
                      message:
                        "voip: [Worker] glue source=" +
                        n.source +
                        " build=" +
                        String(n.buildSha) +
                        o(
                          "WAWebVoipWasmWorkerGlueResolver",
                        ).describeWorkerGlueSkew(e),
                    },
                  ),
                  n.loader(f)
                );
              })
              .then(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      ((v = e), (S = !0), L());
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              )
              .catch(function (e) {
                b(
                  "[VoIP WASM] worker load aborted: " +
                    r("getErrorSafe")(e).message,
                );
              }));
        } else if (e.cmd === "run") {
          var x,
            $,
            P,
            N,
            M,
            w,
            A = e.pthread_ptr;
          if (
            (R(),
            (x = ($ = f).__emscripten_thread_init) == null ||
              x.call($, A, 0, 0, 1),
            E(A),
            h(!!A, "pthread_ptr is required in event " + e.cmd),
            (P = (N = f).establishStackSpace) == null || P.call(N),
            (M = f.PThread) == null || M.receiveObjectTransfer(e),
            (w = f.PThread) == null || w.threadInitTLS(),
            !g)
          ) {
            var F, O;
            ((F = (O = f).__embind_initialize_bindings) == null || F.call(O),
              (g = !0));
          }
          try {
            var B, W;
            (B = (W = f).invokeEntryPoint) == null ||
              B.call(W, e.start_routine, e.arg);
          } catch (e) {
            if (e !== "unwind") throw e;
          }
        } else if (e.cmd === "cancel") {
          var q, U;
          if ((q = (U = f)._pthread_self) != null && q.call(U)) {
            var V, H;
            (V = (H = f).__emscripten_thread_exit) == null || V.call(H, -1);
          }
        } else if (e.target !== "setimmediate")
          if (e.cmd === "checkMailbox") {
            if (g) {
              var G, z;
              (G = (z = f).checkMailbox) == null || G.call(z);
            }
          } else
            e.cmd === "jsWorkerCmd"
              ? o("WAWebVoipJsWorkerMessageHandler").handleJsWorkerMessage(v, e)
              : e.cmd &&
                (b("worker.js received unknown command " + e.cmd), b(e));
      } catch (e) {
        var j = r("getErrorSafe")(e);
        if (
          (b(
            "worker.js onmessage() captured an uncaught exception: " +
              String(e),
          ),
          j.stack && b(j.stack),
          k(e),
          f.__emscripten_thread_crashed)
        ) {
          var K, Q;
          (K = (Q = f).__emscripten_thread_crashed) == null || K.call(Q);
        }
        if (e instanceof WebAssembly.RuntimeError)
          b("[VoIP WASM] RuntimeError suppressed: " + e.message);
        else throw e;
      }
    }
    (_.addMessageListener("cmd", I),
      _.addMessageListener("jsWorkerCmd", function (e) {
        try {
          o("WAWebVoipJsWorkerMessageHandler").handleJsWorkerMessage(v, e);
        } catch (e) {
          throw (
            b(
              "worker.js jsWorkerCmd handler captured an uncaught exception: " +
                String(e),
            ),
            e != null &&
              typeof e == "object" &&
              "stack" in e &&
              b(String(e.stack)),
            k(e),
            e
          );
        }
      }));
    function T() {}
    l.default = T;
  },
  98,
);
