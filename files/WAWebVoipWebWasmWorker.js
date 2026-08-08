__d(
  "WAWebVoipWebWasmWorker",
  [
    "WABinary",
    "WACryptoHkdfSync",
    "WACryptoSha256HmacBuilder",
    "WAWebBweModelHashes",
    "WAWebIDBFSStorageBackend",
    "WAWebLoggerWorker",
    "WAWebVoipBrowserAudioStatusSyncBridge",
    "WAWebVoipContactLookupSyncBridge",
    "WAWebVoipJsWorkerMessageHandler",
    "WAWebVoipPersistentFS",
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
    var d = new (o("WorkerMessagePort").WorkerSyncedMessagePort)(
      self,
      "VoipWebWasmWorker",
    );
    (o("WAWebLoggerWorker").initializeWAWebLogger(),
      o("WorkerSelf").init(d),
      (self.WhatsAppVoipWasmWorkerCompatibleCallbacks = {
        onSignalingXmpp: function (t) {
          var e = t.callId,
            n = t.peerJid,
            r = t.xmlPayload;
          d.postMessage({
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
          d.postMessage({
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
          d.postMessage({
            type: "waWasmWorkerCompatibleCallback",
            __name: "sendDataToRelay",
            data: e,
            len: r,
            ip: n,
            port: a,
          });
        },
        loggingCallback: function (t) {
          d.postMessage(
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
          d.postMessage(
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
          d.postMessage({
            type: "waWasmWorkerCompatibleCallback",
            __name: "startCaptureJS",
          });
        },
        stopCaptureJS: function () {
          d.postMessage({
            type: "waWasmWorkerCompatibleCallback",
            __name: "stopCaptureJS",
          });
        },
        initPlaybackDriverJS: function (t) {
          d.postMessage(
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
          d.postMessage({
            type: "waWasmWorkerCompatibleCallback",
            __name: "startPlaybackJS",
          });
        },
        stopPlaybackJS: function () {
          d.postMessage({
            type: "waWasmWorkerCompatibleCallback",
            __name: "stopPlaybackJS",
          });
        },
        startVideoCaptureJS: function (t) {
          d.postMessage(
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
          d.postMessage({
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
          d.postMessage(
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
          d.postMessage(
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
          d.postMessage({
            type: "waWasmWorkerCompatibleCallback",
            __name: "stopDesktopCaptureJS",
          });
        },
        dataChannelStateCallback: function (t) {
          d.postMessage(
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
              d.postMessage(t);
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
              d.postMessage(t);
            },
          });
        },
        getPersistentDirectoryPath: function () {
          return o("WAWebVoipPersistentFS").getVoipPersistentDirectoryPath();
        },
        getBweModelPath: function (t) {
          var e = t.versionName,
            n = o("WAWebBweModelHashes").getBweModelVersion(e);
          return n == null
            ? null
            : o("WAWebIDBFSStorageBackend").ML_MODEL_PERSIST_DIR +
                "/" +
                o("WAWebBweModelHashes").BWE_MODEL_NAME +
                "_" +
                n;
        },
        videoFrameConsumed: function () {
          d.postMessage({
            type: "waWasmWorkerCompatibleCallback",
            __name: "videoFrameConsumed",
          });
        },
        videoCaptureFrameTick: function () {
          d.postMessage({
            type: "waWasmWorkerCompatibleCallback",
            __name: "videoCaptureFrameTick",
          });
        },
        videoEncodedFrameTick: function () {
          d.postMessage({
            type: "waWasmWorkerCompatibleCallback",
            __name: "videoEncodedFrameTick",
          });
        },
        videoCaptureFpsReset: function () {
          d.postMessage({
            type: "waWasmWorkerCompatibleCallback",
            __name: "videoCaptureFpsReset",
          });
        },
      }));
    var m = {},
      p = !1;
    function _(e, t) {
      if (!e) {
        var n = new Error("Assertion failed: " + t);
        throw (n.stack, n);
      }
    }
    function f() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      var r = t.slice().join(" ");
    }
    function g() {
      for (var e, t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
        r[o] = arguments[o];
      var a = r.slice().join(" ");
      postMessage({
        cmd: "alert",
        text: a,
        threadId: (e = (t = m)._pthread_self) == null ? void 0 : e.call(t),
      });
    }
    var h = f;
    self.alert = g;
    var y;
    ((m.instantiateWasm = function (e, t) {
      var n = r("nullthrows")(m.wasmModule);
      m.wasmModule = null;
      var o = new WebAssembly.Instance(n, e);
      return t(o);
    }),
      (self.onunhandledrejection = function (e) {
        var t;
        throw (t = e.reason) != null ? t : e;
      }));
    var C = 2;
    function b() {
      try {
        var e, t, n;
        ((e = m.wasmMemory) == null || e.grow(0),
          (t = (n = m).GROWABLE_HEAP_U8) == null || t.call(n));
      } catch (e) {}
    }
    function v(e) {
      return e instanceof RangeError;
    }
    function S(e) {
      var t = m.__emscripten_thread_mailbox_await;
      if (t != null)
        for (var n = 0; n <= C; n++)
          try {
            t(e);
            return;
          } catch (e) {
            if (!v(e) || n === C) throw e;
            b();
          }
    }
    function R(e) {
      try {
        if (
          typeof e == "object" &&
          e != null &&
          "excPtr" in e &&
          typeof e.excPtr == "number"
        ) {
          var t = m.getExceptionMessage;
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
        h("Failed to log native stack trace: " + String(e));
      }
    }
    function L(e) {
      try {
        if (e.cmd === "load") {
          var t = e.handlers,
            a = e.wasmMemory,
            i = e.wasmModule,
            l = e.wasmVariant,
            s = e.workerID,
            c = [],
            f = function (t) {
              c.push(t);
            };
          (d.removeMessageListener("cmd", L), d.addMessageListener("cmd", f));
          var g = !1,
            C = !1,
            v = function () {
              if (g && C) {
                d.postMessage({ type: "cmd", cmd: "loaded" });
                for (var e of c) L(e);
                (d.removeMessageListener("cmd", f),
                  d.addMessageListener("cmd", L));
              }
            };
          ((self.startWorker = function (e) {
            ((m = e), (g = !0), v());
          }),
            (m.wasmModule = i));
          var E = function (t) {
            m[t] = function () {
              for (
                var e = arguments.length, n = new Array(e), r = 0;
                r < e;
                r++
              )
                n[r] = arguments[r];
              d.postMessage({
                type: "cmd",
                cmd: "callHandler",
                callHandler: { handler: t, args: n },
              });
            };
          };
          for (var k of t) E(k);
          ((m.wasmMemory = a),
            (m.buffer = m.wasmMemory.buffer),
            (m.workerID = s),
            (m.ENVIRONMENT_IS_PTHREAD = !0),
            (m.onAbort = function (e) {
              h("[VoIP WASM] onAbort: " + String(e));
            }),
            u(l)
              .then(function (e) {
                return e(m);
              })
              .then(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      ((y = e), (C = !0), v());
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ));
        } else if (e.cmd === "run") {
          var I,
            T,
            D,
            x,
            $,
            P,
            N = e.pthread_ptr;
          if (
            (b(),
            (I = (T = m).__emscripten_thread_init) == null ||
              I.call(T, N, 0, 0, 1),
            S(N),
            _(!!N, "pthread_ptr is required in event " + e.cmd),
            (D = (x = m).establishStackSpace) == null || D.call(x),
            ($ = m.PThread) == null || $.receiveObjectTransfer(e),
            (P = m.PThread) == null || P.threadInitTLS(),
            !p)
          ) {
            var M, w;
            ((M = (w = m).__embind_initialize_bindings) == null || M.call(w),
              (p = !0));
          }
          try {
            var A, F;
            (A = (F = m).invokeEntryPoint) == null ||
              A.call(F, e.start_routine, e.arg);
          } catch (e) {
            if (e !== "unwind") throw e;
          }
        } else if (e.cmd === "cancel") {
          var O, B;
          if ((O = (B = m)._pthread_self) != null && O.call(B)) {
            var W, q;
            (W = (q = m).__emscripten_thread_exit) == null || W.call(q, -1);
          }
        } else if (e.target !== "setimmediate")
          if (e.cmd === "checkMailbox") {
            if (p) {
              var U, V;
              (U = (V = m).checkMailbox) == null || U.call(V);
            }
          } else
            e.cmd === "jsWorkerCmd"
              ? o("WAWebVoipJsWorkerMessageHandler").handleJsWorkerMessage(y, e)
              : e.cmd &&
                (h("worker.js received unknown command " + e.cmd), h(e));
      } catch (e) {
        var H = r("getErrorSafe")(e);
        if (
          (h(
            "worker.js onmessage() captured an uncaught exception: " +
              String(e),
          ),
          H.stack && h(H.stack),
          R(e),
          m.__emscripten_thread_crashed)
        ) {
          var G, z;
          (G = (z = m).__emscripten_thread_crashed) == null || G.call(z);
        }
        if (e instanceof WebAssembly.RuntimeError)
          h("[VoIP WASM] RuntimeError suppressed: " + e.message);
        else throw e;
      }
    }
    (d.addMessageListener("cmd", L),
      d.addMessageListener("jsWorkerCmd", function (e) {
        try {
          o("WAWebVoipJsWorkerMessageHandler").handleJsWorkerMessage(y, e);
        } catch (e) {
          throw (
            h(
              "worker.js jsWorkerCmd handler captured an uncaught exception: " +
                String(e),
            ),
            e != null &&
              typeof e == "object" &&
              "stack" in e &&
              h(String(e.stack)),
            R(e),
            e
          );
        }
      }));
    function E() {}
    l.default = E;
  },
  98,
);
