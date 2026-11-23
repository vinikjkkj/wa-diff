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
    async function u(t) {
      var n = t === "prod-lab" ? e : t === "prod-labvideo" ? s : null;
      return n != null ? n.load() : r("WAWebVoipWebWasmLoader.worker");
    }
    async function c(e, t, n) {
      return o("WAWebVoipWasmWorkerGlueResolver").resolveWorkerGlueForLoad(
        self,
        o("WAWebVoipWasmWorkerGlueResolver").resolveHasteWorkerGlue(await u(e)),
        t,
        n,
        {
          now: function () {
            return Date.now();
          },
          onPinnedImportStart: function (t) {
            d(babelHelpers.extends({}, t, { pinnedImport: "started" }));
          },
          sleep: o("WAPromiseDelays").delayMs,
        },
      );
    }
    function d(e) {
      m.postMessage(
        babelHelpers.extends(
          { type: "cmd", cmd: "wasmGlueBuildSkewObserved" },
          e,
        ),
      );
    }
    var m = new (o("WorkerMessagePort").WorkerSyncedMessagePort)(
      self,
      "VoipWebWasmWorker",
    );
    (o("WAWebLoggerWorker").initializeWAWebLogger(),
      o("WorkerSelf").init(m),
      (self.WhatsAppVoipWasmWorkerCompatibleCallbacks = {
        onSignalingXmpp: function (t) {
          var e = t.callId,
            n = t.peerJid,
            r = t.xmlPayload;
          m.postMessage({
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
          m.postMessage({
            type: "waWasmWorkerCompatibleCallback",
            __name: "onCallEvent",
            eventType: n,
            userData: r,
            eventDataJson: e,
          });
        },
        sendDataToRelay: function (t) {
          var e = t.copyBeforePost,
            n = t.data,
            r = t.ip,
            a = t.len,
            i = t.port;
          try {
            var l = o(
              "WAWebVoipJsWorkerMessageHandler",
            ).trySendDirectOnTransferredChannel(r, i, n);
            if (l) return;
          } catch (e) {}
          var s = n,
            u = [];
          if (e === !0) {
            var c = n.slice();
            ((s = c), (u = [c.buffer]));
          }
          m.postMessage(
            {
              type: "waWasmWorkerCompatibleCallback",
              __name: "sendDataToRelay",
              data: s,
              len: a,
              ip: r,
              port: i,
            },
            u,
          );
        },
        loggingCallback: function (t) {
          m.postMessage(
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
          m.postMessage(
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
          m.postMessage({
            type: "waWasmWorkerCompatibleCallback",
            __name: "startCaptureJS",
          });
        },
        stopCaptureJS: function () {
          m.postMessage({
            type: "waWasmWorkerCompatibleCallback",
            __name: "stopCaptureJS",
          });
        },
        initPlaybackDriverJS: function (t) {
          m.postMessage(
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
          m.postMessage({
            type: "waWasmWorkerCompatibleCallback",
            __name: "startPlaybackJS",
          });
        },
        stopPlaybackJS: function () {
          m.postMessage({
            type: "waWasmWorkerCompatibleCallback",
            __name: "stopPlaybackJS",
          });
        },
        startVideoCaptureJS: function (t) {
          m.postMessage(
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
          m.postMessage({
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
          m.postMessage(
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
        onSelfPreviewVideoFrameWasmToJs: function (t) {
          var e = t.frame,
            n = t.height,
            r = t.orientation,
            o = t.width;
          m.postMessage(
            {
              type: "waWasmWorkerCompatibleCallback",
              __name: "onSelfPreviewVideoFrameWasmToJs",
              frame: e,
              width: o,
              height: n,
              orientation: r,
            },
            [e],
          );
        },
        startDesktopCaptureJS: function (t) {
          m.postMessage(
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
          m.postMessage({
            type: "waWasmWorkerCompatibleCallback",
            __name: "stopDesktopCaptureJS",
          });
        },
        dataChannelStateCallback: function (t) {
          m.postMessage(
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
              m.postMessage(t);
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
              m.postMessage(t);
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
          m.postMessage({
            type: "waWasmWorkerCompatibleCallback",
            __name: "videoFrameConsumed",
          });
        },
        videoCaptureFrameTick: function () {
          m.postMessage({
            type: "waWasmWorkerCompatibleCallback",
            __name: "videoCaptureFrameTick",
          });
        },
        videoEncodedFrameTick: function () {
          m.postMessage({
            type: "waWasmWorkerCompatibleCallback",
            __name: "videoEncodedFrameTick",
          });
        },
        videoCaptureFpsReset: function () {
          m.postMessage({
            type: "waWasmWorkerCompatibleCallback",
            __name: "videoCaptureFpsReset",
          });
        },
      }));
    var p = {},
      _ = !1;
    function f(e, t) {
      if (!e) {
        var n = new Error("Assertion failed: " + t);
        throw (n.stack, n);
      }
    }
    function g() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      var r = t.slice().join(" ");
    }
    function h() {
      for (var e, t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
        r[o] = arguments[o];
      var a = r.slice().join(" ");
      postMessage({
        cmd: "alert",
        text: a,
        threadId: (e = (t = p)._pthread_self) == null ? void 0 : e.call(t),
      });
    }
    var y = g;
    self.alert = h;
    var C;
    ((p.instantiateWasm = function (e, t) {
      var n = r("nullthrows")(p.wasmModule);
      p.wasmModule = null;
      var o = new WebAssembly.Instance(n, e);
      return t(o);
    }),
      (self.onunhandledrejection = function (e) {
        var t;
        throw (t = e.reason) != null ? t : e;
      }));
    var b = 2;
    function v() {
      try {
        var e, t, n;
        ((e = p.wasmMemory) == null || e.grow(0),
          (t = (n = p).GROWABLE_HEAP_U8) == null || t.call(n));
      } catch (e) {}
    }
    function S(e) {
      return e instanceof RangeError;
    }
    function R(e) {
      var t = p.__emscripten_thread_mailbox_await;
      if (t != null)
        for (var n = 0; n <= b; n++)
          try {
            t(e);
            return;
          } catch (e) {
            if (!S(e) || n === b) throw e;
            v();
          }
    }
    function L(e) {
      try {
        if (
          typeof e == "object" &&
          e != null &&
          "excPtr" in e &&
          typeof e.excPtr == "number"
        ) {
          var t = p.getExceptionMessage;
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
        y("Failed to log native stack trace: " + String(e));
      }
    }
    function E(e) {
      try {
        if (e.cmd === "load") {
          var t = e.expectedBuildSha,
            n = e.handlers,
            a = e.pinnedWorkerGlueUrl,
            i = e.wasmMemory,
            l = e.wasmModule,
            s = e.wasmVariant,
            u = e.workerID,
            g = [],
            h = function (t) {
              g.push(t);
            };
          (m.removeMessageListener("cmd", E), m.addMessageListener("cmd", h));
          var b = !1,
            S = !1,
            k = function () {
              if (b && S) {
                m.postMessage({ type: "cmd", cmd: "loaded" });
                for (var e of g) E(e);
                (m.removeMessageListener("cmd", h),
                  m.addMessageListener("cmd", E));
              }
            };
          ((self.startWorker = function (e) {
            ((p = e), (b = !0), k());
          }),
            (p.wasmModule = l));
          var I = function (t) {
            p[t] = function () {
              for (
                var e = arguments.length, n = new Array(e), r = 0;
                r < e;
                r++
              )
                n[r] = arguments[r];
              m.postMessage({
                type: "cmd",
                cmd: "callHandler",
                callHandler: { handler: t, args: n },
              });
            };
          };
          for (var T of n) I(T);
          ((p.wasmMemory = i),
            (p.buffer = p.wasmMemory.buffer),
            (p.workerID = u),
            (p.ENVIRONMENT_IS_PTHREAD = !0),
            (p.onAbort = function (e) {
              y("[VoIP WASM] onAbort: " + String(e));
            }),
            c(s, t, a)
              .catch(function (e) {
                throw (
                  a != null &&
                    m.postMessage({
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
                  m.postMessage(
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
                  i != null && d(i),
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
                  n.loader(p)
                );
              })
              .then(async function (e) {
                ((C = e), (S = !0), k());
              })
              .catch(function (e) {
                y(
                  "[VoIP WASM] worker load aborted: " +
                    r("getErrorSafe")(e).message,
                );
              }));
        } else if (e.cmd === "run") {
          var D,
            x,
            $,
            P,
            N,
            M,
            w = e.pthread_ptr;
          if (
            (v(),
            (D = (x = p).__emscripten_thread_init) == null ||
              D.call(x, w, 0, 0, 1),
            R(w),
            f(!!w, "pthread_ptr is required in event " + e.cmd),
            ($ = (P = p).establishStackSpace) == null || $.call(P),
            (N = p.PThread) == null || N.receiveObjectTransfer(e),
            (M = p.PThread) == null || M.threadInitTLS(),
            !_)
          ) {
            var A, F;
            ((A = (F = p).__embind_initialize_bindings) == null || A.call(F),
              (_ = !0));
          }
          try {
            var O, B;
            (O = (B = p).invokeEntryPoint) == null ||
              O.call(B, e.start_routine, e.arg);
          } catch (e) {
            if (e !== "unwind") throw e;
          }
        } else if (e.cmd === "cancel") {
          var W, q;
          if ((W = (q = p)._pthread_self) != null && W.call(q)) {
            var U, V;
            (U = (V = p).__emscripten_thread_exit) == null || U.call(V, -1);
          }
        } else if (e.target !== "setimmediate")
          if (e.cmd === "checkMailbox") {
            if (_) {
              var H, G;
              (H = (G = p).checkMailbox) == null || H.call(G);
            }
          } else
            e.cmd === "jsWorkerCmd"
              ? o("WAWebVoipJsWorkerMessageHandler").handleJsWorkerMessage(C, e)
              : e.cmd &&
                (y("worker.js received unknown command " + e.cmd), y(e));
      } catch (e) {
        var z = r("getErrorSafe")(e);
        if (
          (y(
            "worker.js onmessage() captured an uncaught exception: " +
              String(e),
          ),
          z.stack && y(z.stack),
          L(e),
          p.__emscripten_thread_crashed)
        ) {
          var j, K;
          (j = (K = p).__emscripten_thread_crashed) == null || j.call(K);
        }
        if (e instanceof WebAssembly.RuntimeError)
          y("[VoIP WASM] RuntimeError suppressed: " + e.message);
        else throw e;
      }
    }
    (m.addMessageListener("cmd", E),
      m.addMessageListener("jsWorkerCmd", function (e) {
        try {
          o("WAWebVoipJsWorkerMessageHandler").handleJsWorkerMessage(C, e);
        } catch (e) {
          throw (
            y(
              "worker.js jsWorkerCmd handler captured an uncaught exception: " +
                String(e),
            ),
            e != null &&
              typeof e == "object" &&
              "stack" in e &&
              y(String(e.stack)),
            L(e),
            e
          );
        }
      }));
    function k() {}
    l.default = k;
  },
  98,
);
