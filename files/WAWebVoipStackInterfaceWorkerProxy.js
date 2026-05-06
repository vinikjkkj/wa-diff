__d(
  "WAWebVoipStackInterfaceWorkerProxy",
  [
    "$InternalEnum",
    "Promise",
    "WABase64",
    "WALogger",
    "WAWap",
    "WAWebABProps",
    "WAWebBackendApi",
    "WAWebBweMLModelManager",
    "WAWebCoreActionsODS",
    "WAWebLowEndDeviceExperimentGating",
    "WAWebNoop",
    "WAWebVoipABPropConfig",
    "WAWebVoipAudioCaptureAndPlayback",
    "WAWebVoipGatingUtils",
    "WAWebVoipJsWorkerThread",
    "WAWebVoipJsonParsersWeb",
    "WAWebVoipLogDrainer",
    "WAWebVoipP2PConnectionManager",
    "WAWebVoipPerfOptimizations",
    "WAWebVoipRelayConnectionUtils",
    "WAWebVoipSctpConnectionManager",
    "WAWebVoipStorageInit",
    "WAWebVoipVideoRendererInterface",
    "WAWebVoipVideoRendererRegistry",
    "WAWebVoipVideoWebCodecsRenderer",
    "WAWebVoipWebCodecsEncoderState",
    "WAWebVoipWebTransportConnectionManager",
    "asyncToGeneratorRuntime",
    "err",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S,
      R,
      L,
      E,
      k,
      I,
      T,
      D,
      x,
      $,
      P,
      N,
      M,
      w,
      A,
      F,
      O,
      B,
      W,
      q;
    function U() {
      var t = {};
      for (var n of r("WAWebVoipABPropConfig")) {
        var a = n.abProp,
          i = n.type,
          l = n.wasmKey;
        try {
          t[l] = { value: o("WAWebABProps").getABPropConfigValue(a), type: i };
        } catch (t) {
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: skipping unknown AB prop ",
                "",
              ])),
            a,
          );
        }
      }
      return t;
    }
    var V = 9e4,
      H = 300 * 1e3;
    function G() {
      return (
        "hidden=" +
        String(document.hidden) +
        " visibility=" +
        document.visibilityState +
        " focus=" +
        String(document.hasFocus())
      );
    }
    var z = n("$InternalEnum")({
      Foreground: "foreground timeout",
      Absolute: "absolute timeout",
    });
    function j(e) {
      e: {
        if (e === z.Foreground) {
          o("WAWebCoreActionsODS").logCallVoipRpcReadyTimeoutForeground();
          break e;
        }
        if (e === z.Absolute) {
          o("WAWebCoreActionsODS").logCallVoipRpcReadyTimeoutAbsolute();
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    var K = (function () {
      function e(e) {
        ((this.$1 = !1), (this.$2 = 0), (this.$3 = new Map()), (this.$4 = e));
      }
      var t = e.prototype;
      return (
        (t.start = function () {
          var e = this;
          ((this.$4.onmessage = function (t) {
            var n = t.data;
            if (!(n == null || typeof n != "object")) {
              var a = Number(n.id),
                i = e.$3.get(a);
              if (i == null) {
                o("WALogger").ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [RPC] Response for unknown id=",
                      "",
                    ])),
                  a,
                );
                return;
              }
              (e.$3.delete(a),
                n.error != null
                  ? i.reject(r("err")(String(n.error)))
                  : i.resolve(n.result));
            }
          }),
            this.$4.start());
        }),
        (t.invoke = function (t, o, a) {
          var e = this,
            i = this.$2++;
          return new (q || (q = n("Promise")))(function (n, l) {
            var s = window.setTimeout(function () {
              (e.$3.delete(i),
                l(
                  r("err")("voip: [RPC] timeout for " + t + " (id=" + i + ")"),
                ));
            }, 3e4);
            (e.$3.set(i, {
              resolve: function (t) {
                (window.clearTimeout(s), n(t));
              },
              reject: function (t) {
                (window.clearTimeout(s), l(t));
              },
            }),
              e.$4.postMessage(
                { id: i, method: t, args: o },
                a != null ? a : [],
              ));
          });
        }),
        (t.fire = function (t, n, r) {
          this.$4.postMessage(
            { id: -1, method: t, args: n },
            r != null ? r : [],
          );
        }),
        (t.clearPending = function (t) {
          for (var e of this.$3) {
            var n = e[0],
              o = e[1];
            o.reject(r("err")("voip: [RPC] " + t + " (id=" + n + ")"));
          }
          this.$3.clear();
        }),
        (t.close = function (t) {
          this.$1 || ((this.$1 = !0), this.clearPending(t), this.$4.close());
        }),
        e
      );
    })();
    function Q() {
      var e,
        t = o("WAWebBackendApi").frontendSendAndReceive("initializeVoipWasm"),
        a = 0,
        i = null,
        l = !1;
      function s(e, t, a) {
        var i = self.performance.now();
        return new (q || (q = n("Promise")))(function (n, l) {
          var s = null,
            p = null,
            _ = null,
            f = !1,
            g = document.hidden,
            h = 0,
            y = document.hidden ? null : i,
            C = function () {
              var e = y;
              return h + (e != null ? self.performance.now() - e : 0);
            },
            b = function () {
              p != null && (window.clearTimeout(p), (p = null));
            },
            v = function () {
              var t = _;
              (t != null &&
                (e.worker.removeMessageListener("voipRpcReady", t), (_ = null)),
                b(),
                s != null && (window.clearTimeout(s), (s = null)),
                document.removeEventListener("visibilitychange", L));
            },
            S = function (n) {
              if (!f) {
                f = !0;
                var e = self.performance.now() - i,
                  s = C();
                (v(),
                  a.close("RPC ready timeout"),
                  j(n),
                  o("WALogger").WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [WorkerProxy] RPC ready timeout token=",
                        " reason=",
                        " wallElapsed=",
                        "ms visibleElapsed=",
                        "ms ",
                        "",
                      ])),
                    t,
                    n,
                    e.toFixed(1),
                    s.toFixed(1),
                    G(),
                  ),
                  l(
                    r("err")(
                      "voip: [WorkerProxy] timeout waiting for RPC ready (token=" +
                        t +
                        ", reason=" +
                        n +
                        ")",
                    ),
                  ));
              }
            },
            R = function () {
              if ((b(), !document.hidden)) {
                var e = V - C();
                p = window.setTimeout(
                  function () {
                    return S(z.Foreground);
                  },
                  Math.max(0, e),
                );
              }
            };
          function L() {
            var e = self.performance.now();
            if (document.hidden) {
              ((g = !0),
                y != null && ((h += e - y), (y = null)),
                b(),
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [WorkerProxy] RPC ready wait paused token=",
                      " visibleElapsed=",
                      "ms ",
                      "",
                    ])),
                  t,
                  h.toFixed(1),
                  G(),
                ));
              return;
            }
            ((y = e),
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WorkerProxy] RPC ready wait resumed token=",
                    " visibleElapsed=",
                    "ms ",
                    "",
                  ])),
                t,
                h.toFixed(1),
                G(),
              ),
              R());
          }
          ((_ = e.worker.addMessageListener("voipRpcReady", function (e) {
            if (e.token === t && !f) {
              f = !0;
              var r = self.performance.now() - i,
                a = C();
              (v(),
                g &&
                  o(
                    "WAWebCoreActionsODS",
                  ).logCallVoipRpcReadyBackgroundPauseSuccess(),
                o("WALogger").LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [WorkerProxy] RPC ready ack token=",
                      " wallElapsed=",
                      "ms visibleElapsed=",
                      "ms ",
                      "",
                    ])),
                  t,
                  r.toFixed(1),
                  a.toFixed(1),
                  G(),
                ),
                n());
            }
          })),
            document.addEventListener("visibilitychange", L),
            (s = window.setTimeout(function () {
              return S(z.Absolute);
            }, H)),
            R());
        });
      }
      function Q() {
        var e = i;
        if (e != null) return e;
        var u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (yield t,
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [WorkerProxy] WASM loaded, creating JsWorkerThread",
                ])),
            ));
          var e = yield r("WAWebVoipJsWorkerThread").create();
          o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WorkerProxy] JsWorkerThread created",
              ])),
          );
          var n = new MessageChannel(),
            i = new K(n.port1);
          i.start();
          var u = a++,
            c = s(e, u, i);
          (o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WorkerProxy] posting startVoipRpc token=",
                " ",
                "",
              ])),
            u,
            G(),
          ),
            e.worker.postMessage(
              {
                type: "cmd",
                cmd: "jsWorkerCmd",
                jsWorkerCmd: "startVoipRpc",
                rpcPort: n.port2,
                token: u,
              },
              [n.port2],
            ));
          try {
            yield c;
          } catch (t) {
            throw (
              i.close("RPC ready failure"),
              o(
                "WAWebCoreActionsODS",
              ).logCallVoipRpcReadyCleanupShutdownAttempted(),
              e.shutdown().catch(function (e) {
                (o(
                  "WAWebCoreActionsODS",
                ).logCallVoipRpcReadyCleanupShutdownFailed(),
                  o("WALogger").WARN(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [WorkerProxy] worker shutdown after RPC ready failure failed: ",
                        "",
                      ])),
                    String(e),
                  ));
              }),
              t
            );
          }
          return (
            o("WALogger").LOG(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [WorkerProxy] RPC channel ready",
                ])),
            ),
            l &&
              ((l = !1),
              o("WAWebCoreActionsODS").logCallVoipRpcReadyRetrySuccess()),
            { jsWorker: e, rpc: i }
          );
        })();
        return (
          (i = u),
          u.catch(function (e) {
            i === u &&
              ((i = null),
              (l = !0),
              o("WALogger").WARN(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WorkerProxy] cleared failed worker lifecycle: ",
                    " ",
                    "",
                  ])),
                String(e),
                G(),
              ));
          }),
          u
        );
      }
      function X(e, t, n) {
        return J.apply(this, arguments);
      }
      function J() {
        return (
          (J = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n) {
              var r = yield Q(),
                o = r.rpc;
              o.fire(e, t, n);
            },
          )),
          J.apply(this, arguments)
        );
      }
      function Z(e, t, n) {
        return ee.apply(this, arguments);
      }
      function ee() {
        return (
          (ee = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n) {
              var r = yield Q(),
                o = r.rpc;
              return o.invoke(e, t, n);
            },
          )),
          ee.apply(this, arguments)
        );
      }
      var te = {
        onVoipReady: (e = r("WAWebNoop")),
        onCallEvent: e,
        initCaptureDriverJS: o("WAWebVoipAudioCaptureAndPlayback")
          .initCaptureDriverJS,
        startCaptureJS: o("WAWebVoipAudioCaptureAndPlayback").startCaptureJS,
        stopCaptureJS: o("WAWebVoipAudioCaptureAndPlayback").stopCaptureJS,
      };
      return {
        type: "web",
        parsers: r("WAWebVoipJsonParsersWeb"),
        voipInit: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, n, r) {
              var a = yield Q(),
                i = a.rpc,
                l = yield t;
              (o("WAWebVoipGatingUtils").isWebTransportEnabled() &&
                o(
                  "WAWebVoipWebTransportConnectionManager",
                ).registerPacketHandler(function (e, t, n) {
                  i.fire(
                    "handleOnTransportMessage",
                    { packet: e, ip: t, port: n },
                    [e],
                  );
                }),
                o("WAWebVoipPerfOptimizations").isPerfOptimizationEnabled(
                  o("WAWebVoipPerfOptimizations").PerfOptimizationFlag
                    .LOG_RING_BUFFER,
                ) && o("WAWebVoipLogDrainer").startLogDrainer(l),
                o("WAWebVoipStorageInit").initVoipStorageAndMLCache(l));
              var s = !1,
                u = !1;
              try {
                yield o(
                  "WAWebVoipVideoRendererRegistry",
                ).videoRendererRegistry.init();
                var c = o(
                  "WAWebVoipVideoRendererRegistry",
                ).videoRendererRegistry.getRendererType();
                s =
                  c ===
                  o("WAWebVoipVideoRendererInterface")
                    .WAWebVoipVideoRendererType.WEBCODECS_H264;
                var d = o("WAWebABProps").getABPropConfigValue(
                    "enable_webcodec_video_encode",
                  ),
                  m =
                    s ||
                    (yield o(
                      "WAWebVoipVideoWebCodecsRenderer",
                    ).WAWebVoipVideoWebCodecsRenderer.checkAvailability());
                u =
                  m && d === !0
                    ? yield o(
                        "WAWebVoipWebCodecsEncoderState",
                      ).checkEncoderSupport()
                    : !1;
              } catch (e) {
                o("WALogger").WARN(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: video cap detect failed, passthrough off: ",
                      "",
                    ])),
                  e,
                );
              }
              (o("WALogger").LOG(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WorkerProxy] dec=",
                    " enc=",
                    "",
                  ])),
                s,
                u,
              ),
                o("WALogger").LOG(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [webcodec-encode] enabled=",
                      "",
                    ])),
                  u,
                ),
                o("WAWebVoipWebCodecsEncoderState").setWebCodecsEncoderEnabled(
                  u,
                ),
                o("WALogger").LOG(
                  S ||
                    (S = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [webcodec-encode] WebCodecs encoder state ",
                      "",
                    ])),
                  u,
                ));
              var p = U();
              ((p.enable_passthrough_video_decoder = {
                value: s,
                type: "bool",
              }),
                (p.enable_webcodec_video_encode = { value: u, type: "bool" }),
                o(
                  "WAWebLowEndDeviceExperimentGating",
                ).shouldDisableSoftwareAudioProcessing() &&
                  ((p.ns_builtin_available = { value: !0, type: "bool" }),
                  (p.disable_sw_ns_when_builtin_available = {
                    value: !0,
                    type: "bool",
                  }),
                  (p.ml_ns_skip_processing = { value: !0, type: "bool" }),
                  (p.disable_agc = { value: !0, type: "bool" }),
                  (p.hw_aec_available = { value: !0, type: "bool" }),
                  (p.disable_sw_ec_when_builtin_available = {
                    value: !0,
                    type: "bool",
                  }),
                  (p.disable_standalone_agc = { value: !0, type: "bool" }),
                  (p.disable_eq = { value: !0, type: "bool" })),
                yield Z("voipInit", {
                  selfJid: e,
                  selfUserJid: n,
                  selfLid: r,
                  abProps: p,
                }));
              var _ = l.getWebP2PVirtualIpv4(),
                f = l.getWebP2PVirtualIpv6(),
                g = l.getWebP2PVirtualPort();
              (o("WAWebVoipP2PConnectionManager").initP2PVirtualAddresses(
                _,
                f,
                g,
              ),
                o("WAWebVoipP2PConnectionManager").registerOnDataChannelMessage(
                  function (e) {
                    X(
                      "handleOnTransportMessage",
                      { packet: e, ip: _, port: g },
                      [e],
                    );
                  },
                ));
              var h = !1;
              o(
                "WAWebVoipP2PConnectionManager",
              ).registerOnDataChannelStateChange(function (e) {
                e === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open
                  ? ((h = !0),
                    o("WALogger").LOG(
                      R ||
                        (R = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: P2P DataChannel opened, notifying WASM active=true",
                        ])),
                    ),
                    X("notifyWebP2PChannelReady", { active: !0, useIPv6: !1 }))
                  : h &&
                    ((h = !1),
                    o("WALogger").LOG(
                      L ||
                        (L = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: P2P DataChannel ",
                          " (was open), WASM active=false",
                        ])),
                      e,
                    ),
                    X("notifyWebP2PChannelReady", { active: !1, useIPv6: !1 }));
              });
            },
          );
          function r(t, n, r) {
            return e.apply(this, arguments);
          }
          return r;
        })(),
        setHideMyIp: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            (o("WALogger").LOG(
              E ||
                (E = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: setHideMyIp called with hideMyIp=",
                  "",
                ])),
              e,
            ),
              yield Z("setHideMyIp", { hideMyIp: e }));
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        handleSignOut: function () {
          if (
            (o("WALogger").LOG(
              k ||
                (k = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: handleSignOut: cleaning up all connections",
                ])),
            ),
            (l = !1),
            o("WAWebVoipLogDrainer").stopLogDrainer(),
            o("WAWebVoipGatingUtils").isWebTransportEnabled()
              ? o(
                  "WAWebVoipWebTransportConnectionManager",
                ).closeAllConnections()
              : o("WAWebVoipSctpConnectionManager").cleanupAllConnections(),
            i != null)
          ) {
            var e = i;
            ((i = null),
              e
                .then(function (e) {
                  var t = e.jsWorker,
                    n = e.rpc;
                  return (n.close("sign out"), t.shutdown());
                })
                .catch(function (e) {
                  o("WALogger").WARN(
                    I ||
                      (I = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [handleSignOut] worker shutdown error: ",
                        "",
                      ])),
                    e,
                  );
                }));
          }
        },
        startCall: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, n, r, a, i, l, s) {
              var u = yield t;
              (o("WAWebBweMLModelManager")
                .initBweMLModelsForCall(u)
                .catch(function (e) {
                  o("WALogger").WARN(
                    T ||
                      (T = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [initBweMLModelsForCall] unhandled error: ",
                        "",
                      ])),
                    e,
                  );
                }),
                yield X("startCall", {
                  peerJid: e.toString({ legacy: !0 }),
                  deviceJids: n,
                  callId: r,
                  useVideo: a,
                  phoneNumberJid: i,
                  isFromDialer: l,
                  tcToken: s,
                }));
            },
          );
          function r(t, n, r, o, a, i, l) {
            return e.apply(this, arguments);
          }
          return r;
        })(),
        startGroupCall: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, n, r, a, i, l, s, u, c, d, m, p, _) {
              if (!o("WAWebVoipGatingUtils").isGroupCallingEnabled()) {
                o("WALogger").ERROR(
                  D ||
                    (D = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: startGroupCall: Web group calling is not enabled",
                    ])),
                );
                return;
              }
              var f = yield t;
              (o("WAWebBweMLModelManager")
                .initBweMLModelsForCall(f)
                .catch(function (e) {
                  o("WALogger").WARN(
                    x ||
                      (x = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [initBweMLModelsForCall] unhandled error: ",
                        "",
                      ])),
                    e,
                  );
                }),
                yield X("startGroupCall", {
                  pnUserJids: e,
                  lidUserJids: n,
                  deviceJidsCsv: r,
                  callId: a,
                  useVideo: i,
                  groupJid: l,
                  isLightWeight: s,
                  scheduleId: u,
                  chatName: c,
                  chatIcon: d,
                  callFromUI: m != null ? m : 0,
                  lobbyEntryType: p != null ? p : 0,
                  username: _ != null ? _ : "",
                }));
            },
          );
          function r(t, n, r, o, a, i, l, s, u, c, d, m, p) {
            return e.apply(this, arguments);
          }
          return r;
        })(),
        acceptCall: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              yield X("acceptCall", { isMicEnabled: e, isCameraEnabled: t });
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        rejectCall: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            yield X("rejectCall", {});
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        endCall: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              o("WAWebVoipGatingUtils").isWebTransportEnabled() &&
                o("WAWebVoipWebTransportConnectionManager").prepareForEndCall();
              try {
                yield X("endCall", { endCallReason: e, sendTerminate: t });
              } finally {
                o("WAWebVoipGatingUtils").isWebTransportEnabled() &&
                  o(
                    "WAWebVoipWebTransportConnectionManager",
                  ).closeAllConnections();
              }
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        rejectCallWithoutCallContext: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n, r, o, a, i) {
              yield X("rejectCallWithoutCallContext", {
                callId: e,
                isGroupCall: t,
                peerJid: n,
                callCreatorJid: r,
                reason: o,
                retryCount: a,
                registration: i,
              });
            },
          );
          function t(t, n, r, o, a, i, l) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        joinOngoingCall: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n, r, a, i, l, s, u, c, d, m, p, _, f, g, h) {
              if (!o("WAWebVoipGatingUtils").isGroupCallingEnabled()) {
                o("WALogger").ERROR(
                  $ ||
                    ($ = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: joinOngoingCall: Web group calling is not enabled",
                    ])),
                );
                return;
              }
              yield X("joinOngoingCall", {
                callId: e,
                callCreatorJid: t,
                initialPeerJid: n,
                groupParticipantsPnUserJid: r,
                groupParticipantsLidUserJid: a,
                groupParticipantsDeviceJidsCsv: i,
                hasVideo: l,
                groupJid: s,
                initialGroupTransactionId: u,
                callCreatorIsNotContact: c,
                callLinkCode: d,
                isLightweight: m,
                scheduledId: p,
                joinAndAccept: _,
                chatName: f,
                lobbyEntryType: g != null ? g : 0,
                isDeviceSwitch: h != null ? h : !1,
              });
            },
          );
          function t(t, n, r, o, a, i, l, s, u, c, d, m, p, _, f, g, h) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        simulateNativeAnr: e,
        handleDeviceJidList: e,
        previewCallLink: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n, r) {
              if (!o("WAWebVoipGatingUtils").callLinksEnabled()) {
                o("WALogger").ERROR(
                  P ||
                    (P = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: previewCallLink: Call link feature is not enabled",
                    ])),
                );
                return;
              }
              var a = 22;
              if (e.length !== a) {
                o("WALogger").ERROR(
                  N ||
                    (N = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: previewCallLink: invalid token length ",
                      ", expected ",
                      "",
                    ])),
                  e.length,
                  a,
                );
                return;
              }
              var i = yield Z("previewCallLink", {
                token: e,
                videoEnabled: t,
                lobbyEntryType: n != null ? n : 0,
                username: r != null ? r : "",
              });
              i !== 0 &&
                o("WALogger").ERROR(
                  M ||
                    (M = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: previewCallLink: failed with status ",
                      "",
                    ])),
                  String(i),
                );
            },
          );
          function t(t, n, r, o) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        joinCallLink: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (!o("WAWebVoipGatingUtils").callLinksEnabled()) {
              o("WALogger").ERROR(
                w ||
                  (w = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: joinCallLink: Call link feature is not enabled",
                  ])),
              );
              return;
            }
            yield X("joinCallLink", {});
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        previewAndJoinCallLink: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, n, r, a) {
              if (!o("WAWebVoipGatingUtils").callLinksEnabled()) {
                o("WALogger").ERROR(
                  A ||
                    (A = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: previewAndJoinCallLink: call links disabled",
                    ])),
                );
                return;
              }
              var i = yield t;
              (o("WAWebBweMLModelManager")
                .initBweMLModelsForCall(i)
                .catch(function (e) {
                  o("WALogger").WARN(
                    F ||
                      (F = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [initBweMLModelsForCall] unhandled error: ",
                        "",
                      ])),
                    e,
                  );
                }),
                yield X("previewAndJoinCallLink", {
                  token: e,
                  videoEnabled: n,
                  lobbyEntryType: r != null ? r : 0,
                  username: a != null ? a : "",
                }));
            },
          );
          function r(t, n, r, o) {
            return e.apply(this, arguments);
          }
          return r;
        })(),
        handleIncomingSignalingOffer: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, n, a, i, l, s, u, c, d) {
              var m = yield t;
              o("WAWebBweMLModelManager")
                .initBweMLModelsForCall(m)
                .catch(function (e) {
                  o("WALogger").WARN(
                    O ||
                      (O = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [initBweMLModelsForCall] unhandled error: ",
                        "",
                      ])),
                    e,
                  );
                });
              var p = e.node();
              r("justknobx")._("360") && Y(p);
              var _ = o("WABase64").encodeB64(o("WAWap").encodeStanza(p)),
                f = i != null ? String(i) : "0",
                g = l != null ? String(l) : "0";
              yield X("handleIncomingSignalingOffer", {
                b64Stanza: _,
                msgPlatform: n,
                msgVersion: a,
                msgEStr: f,
                msgTStr: g,
                msgOffline: s,
                isOfferNotContact: u,
                peerJid: c,
                tcToken: d,
              });
            },
          );
          function a(t, n, r, o, a, i, l, s, u) {
            return e.apply(this, arguments);
          }
          return a;
        })(),
        handleIncomingSignalingMessage: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n, a, i, l, s, u) {
              var c = e.node();
              r("justknobx")._("360") && Y(c);
              var d = o("WABase64").encodeB64(o("WAWap").encodeStanza(c)),
                m = a != null ? String(a) : "0",
                p = i != null ? String(i) : "0";
              yield X("handleIncomingSignalingMessage", {
                b64Stanza: d,
                msgPlatform: t,
                msgVersion: n,
                msgEStr: m,
                msgTStr: p,
                msgOffline: l,
                peerJid: s,
                tcToken: u,
              });
            },
          );
          function t(t, n, r, o, a, i, l, s) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        handleIncomingSignalingAck: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n, a, i) {
              var l = e.node();
              r("justknobx")._("360") && Y(l);
              var s = o("WABase64").encodeB64(o("WAWap").encodeStanza(l));
              yield X("handleIncomingSignalingAck", {
                b64Stanza: s,
                ackInfoError: t,
                ackInfoType: n,
                peerJid: a,
                tcToken: i,
              });
            },
          );
          function t(t, n, r, o, a) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        handleIncomingSignalingReceipt: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n) {
              var a = e.node();
              r("justknobx")._("360") && Y(a);
              var i = o("WABase64").encodeB64(o("WAWap").encodeStanza(a));
              yield X("handleIncomingSignalingReceipt", {
                b64Stanza: i,
                peerJid: t,
                tcToken: n,
              });
            },
          );
          function t(t, n, r) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        resendOfferOnDecryptionFailure: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              yield X("resendOfferOnDecryptionFailure", {
                peerJid: e,
                callId: t,
              });
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        resendEncRekeyRetry: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              yield X("resendEncRekeyRetry", { peerJid: e, retryCount: t });
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        notifyDeviceIdentityChangedOrDeleted: e,
        handleOnTransportMessage: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n) {
              yield X(
                "handleOnTransportMessage",
                { packet: e, ip: t, port: n },
                [e],
              );
            },
          );
          function t(t, n, r) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        setCallMute: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = yield Z("setCallMute", { enable: e });
            return Number(t);
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        setCallVideoMute: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = yield Z("setCallVideoMute", { enable: e });
            return Number(t);
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        videoStreamPause: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = yield Z("videoStreamPause", {});
            return Number(e);
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        videoStreamResume: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = yield Z("videoStreamResume", {});
            return Number(e);
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        broadcastVideoState: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = yield Z("broadcastVideoState", {});
            return Number(e);
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        sendReaction: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            yield X("sendReaction", { reaction: e });
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        raiseHand: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            yield X("raiseHand", { isHandRaised: e });
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        requestVideoUpgrade: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = yield Z("requestVideoUpgrade", {});
            return Number(e);
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        getCallInfo: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = yield Z("getCallInfo", {});
            return (
              e === "" &&
                o("WALogger").ERROR(
                  B ||
                    (B = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: getCallInfo() failed to retrieve call info",
                    ])),
                ),
              String(e != null ? e : "")
            );
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        acceptPeerVideo: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = yield Z("acceptPeerVideo", { jid: e.jid });
            return (
              t !== 0 &&
                o("WALogger").ERROR(
                  W ||
                    (W = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: acceptPeerVideo: Failed with status ",
                      "",
                    ])),
                  String(t),
                ),
              Number(t)
            );
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        requestPeerMute: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = yield Z("requestPeerMute", { peerJid: e });
            return Number(t);
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        removeCallParticipant: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = yield Z("removeCallParticipant", { peerJid: e });
            return Number(t);
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        waitingRoomAdmit: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = yield Z("waitingRoomAdmit", { peerJid: e });
            return Number(t);
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        waitingRoomDeny: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = yield Z("waitingRoomDeny", { peerJid: e });
            return Number(t);
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        waitingRoomAdmitAll: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = yield Z("waitingRoomAdmitAll", {});
            return Number(e);
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        waitingRoomToggleActiveCall: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = yield Z("waitingRoomToggleActiveCall", { enabled: e });
            return Number(t);
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        startScreenShare: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = yield Z("startScreenShare", {});
            return Number(e);
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        stopScreenShare: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = yield Z("stopScreenShare", {});
            return Number(e);
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        startVideoPreview: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              var n = yield Z("startVideoPreview", { callId: e, selfJid: t });
              return Number(n);
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        requestKeyFrame: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = yield Z("requestKeyFrame", { userJid: e });
            return Number(t);
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        updateParticipantsRxSubscription: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              var n = yield Z("updateParticipantsRxSubscription", {
                participantJids: e,
                videoQualities: t,
              });
              return Number(n);
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        updateNetworkMedium: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              yield X("updateNetworkMedium", {
                networkMedium: e,
                networkMtu: t,
              });
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        getNetworkConditionerState: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            try {
              var e = yield Z("getNetworkConditionerState", {});
              if (e == null) return null;
              var t = JSON.stringify(e);
              return t == null ? null : JSON.parse(t);
            } catch (e) {
              return null;
            }
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        getShortStatisticString: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            try {
              var e = yield Z("getShortStatisticString", {});
              return String(e != null ? e : "");
            } catch (e) {
              return "";
            }
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        getDebugStatisticString: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            try {
              var e = yield Z("getDebugStatisticString", {});
              return String(e != null ? e : "");
            } catch (e) {
              return "";
            }
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        getVoipParam: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            try {
              var t = yield Z("getVoipParam", { paramPath: e });
              return String(t != null ? t : "");
            } catch (e) {
              return "";
            }
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        callbacks: te,
        inviteToCall: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n) {
              yield X("inviteToCall", {
                invitedParticipantPnUserJid: e,
                invitedParticipantLidUserJid: t,
                deviceJids: n,
              });
            },
          );
          function t(t, n, r) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        checkOngoingCalls: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              yield X("checkOngoingCalls", { callIds: e, callCreatorJids: t });
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        sendWebP2PTransport: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n, r, o, a) {
              yield X("sendWebP2PTransport", {
                callId: e,
                ufrag: t,
                pwd: n,
                algo: r,
                fingerprint: o,
                candidatesJson: JSON.stringify(a),
              });
            },
          );
          function t(t, n, r, o, a, i) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      };
    }
    var X = {
      hou1c01: {
        v4: [157, 240, 24, 133],
        v6: [42, 3, 40, 128, 242, 98, 0, 219, 250, 206, 176, 12, 0, 0, 103, 73],
      },
      bog2c01: {
        v4: [163, 70, 152, 133],
        v6: [42, 3, 40, 128, 242, 2, 0, 219, 250, 206, 176, 12, 0, 0, 103, 73],
      },
      bog2c02: {
        v4: [57, 144, 115, 57],
        v6: [42, 3, 40, 128, 243, 47, 1, 57, 250, 206, 176, 12, 0, 0, 103, 73],
      },
      lim1c01: {
        v4: [157, 240, 197, 133],
        v6: [42, 3, 40, 128, 242, 67, 0, 219, 250, 206, 176, 12, 0, 0, 103, 73],
      },
      mia3c01: {
        v4: [57, 144, 23, 57],
        v6: [42, 3, 40, 128, 243, 50, 1, 57, 250, 206, 176, 12, 0, 0, 103, 73],
      },
      mia3c02: {
        v4: [157, 240, 14, 129],
        v6: [42, 3, 40, 128, 242, 44, 1, 219, 250, 206, 176, 12, 0, 0, 103, 73],
      },
      mia3c03: {
        v4: [57, 144, 163, 57],
        v6: [42, 3, 40, 128, 243, 81, 1, 57, 250, 206, 176, 12, 0, 0, 103, 73],
      },
      mia5c01: {
        v4: [57, 144, 197, 57],
        v6: [42, 3, 40, 128, 243, 98, 1, 57, 250, 206, 176, 12, 0, 0, 103, 73],
      },
      mia5c02: {
        v4: [57, 144, 199, 57],
        v6: [42, 3, 40, 128, 243, 99, 1, 57, 250, 206, 176, 12, 0, 0, 103, 73],
      },
    };
    function Y(e) {
      var t = e.content;
      if (String(e.tag) === "te2") {
        var n = e.content,
          r = e.attrs;
        if (r != null && n != null && n instanceof Uint8Array) {
          var o = String(r.relay_name),
            a = X[o];
          if (a != null) {
            if (n.length === 6)
              ((n[0] = a.v4[0]),
                (n[1] = a.v4[1]),
                (n[2] = a.v4[2]),
                (n[3] = a.v4[3]));
            else if (n.length === 18)
              for (var i = 0; i < 16; i++) n[i] = a.v6[i];
          }
        }
      }
      Array.isArray(t) &&
        t.forEach(function (e) {
          Y(e);
        });
    }
    l.createWorkerProxyStackInterface = Q;
  },
  98,
);
