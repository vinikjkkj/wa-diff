__d(
  "WAWebVoipStackInterfaceWorkerProxy",
  [
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
    "WAWebVisibilityAwareTimeout",
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
    "WAWebVoipWasmHeapMonitor",
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
      q,
      U,
      V,
      H,
      G;
    function z() {
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
    var j = 9e4,
      K = 300 * 1e3,
      Q = 9e4,
      X = 300 * 1e3;
    function Y() {
      return (
        "hidden=" +
        String(document.hidden) +
        " visibility=" +
        document.visibilityState +
        " focus=" +
        String(document.hasFocus())
      );
    }
    function J(e) {
      e === "foreground"
        ? o("WAWebCoreActionsODS").logCallVoipRpcReadyTimeoutForeground()
        : o("WAWebCoreActionsODS").logCallVoipRpcReadyTimeoutAbsolute();
    }
    function Z(e) {
      e === "foreground"
        ? o("WAWebCoreActionsODS").logCallVoipRpcInitTimeoutForeground()
        : o("WAWebCoreActionsODS").logCallVoipRpcInitTimeoutAbsolute();
    }
    var ee = (function () {
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
          return new (G || (G = n("Promise")))(function (n, l) {
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
        (t.invokeWithVisibilityAwareTimeout = function (t, a, i, l) {
          var e = this,
            s = i.absoluteMs,
            d = i.foregroundMs,
            m = i.onBackgroundPauseSuccess,
            p = i.onTimeout,
            _ = this.$2++;
          return new (G || (G = n("Promise")))(function (n, i) {
            var f = o(
              "WAWebVisibilityAwareTimeout",
            ).startVisibilityAwareTimeout({
              foregroundMs: d,
              absoluteMs: s,
              onTimeout: function (o, a) {
                (e.$3.delete(_), p(o));
                var n =
                  o === "foreground"
                    ? "foreground timeout"
                    : "absolute timeout";
                i(
                  r("err")(
                    "voip: [RPC] timeout for " +
                      t +
                      " (id=" +
                      _ +
                      ", reason=" +
                      n +
                      ", wallElapsed=" +
                      a.wallMs.toFixed(1) +
                      "ms, visibleElapsed=" +
                      a.visibleMs.toFixed(1) +
                      "ms)",
                  ),
                );
              },
              onPause: function (n) {
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [RPC] wait paused for ",
                      " (id=",
                      ", visibleElapsed=",
                      "ms)",
                    ])),
                  t,
                  _,
                  n.visibleMs.toFixed(1),
                );
              },
              onResume: function (n) {
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [RPC] wait resumed for ",
                      " (id=",
                      ", visibleElapsed=",
                      "ms)",
                    ])),
                  t,
                  _,
                  n.visibleMs.toFixed(1),
                );
              },
            });
            (e.$3.set(_, {
              resolve: function (t) {
                var e = f.cancel();
                (e.wasBackgroundPaused && m(), n(t));
              },
              reject: function (t) {
                (f.cancel(), i(t));
              },
            }),
              e.$4.postMessage(
                { id: _, method: t, args: a },
                l != null ? l : [],
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
    function te() {
      var e,
        t = o("WAWebBackendApi").frontendSendAndReceive("initializeVoipWasm"),
        a = 0,
        i = null,
        l = !1;
      function s(e, t, a) {
        return new (G || (G = n("Promise")))(function (n, i) {
          var l = !1,
            s = null,
            u = function () {
              var t = s;
              t != null &&
                (e.worker.removeMessageListener("voipRpcReady", t), (s = null));
            },
            c = o("WAWebVisibilityAwareTimeout").startVisibilityAwareTimeout({
              foregroundMs: j,
              absoluteMs: K,
              onTimeout: function (n, s) {
                if (!l) {
                  ((l = !0), u(), a.close("RPC ready timeout"), J(n));
                  var e =
                    n === "foreground"
                      ? "foreground timeout"
                      : "absolute timeout";
                  (o("WALogger").WARN(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [WorkerProxy] RPC ready timeout token=",
                        " reason=",
                        " wallElapsed=",
                        "ms visibleElapsed=",
                        "ms ",
                        "",
                      ])),
                    t,
                    e,
                    s.wallMs.toFixed(1),
                    s.visibleMs.toFixed(1),
                    Y(),
                  ),
                    i(
                      r("err")(
                        "voip: [WorkerProxy] timeout waiting for RPC ready (token=" +
                          t +
                          ", reason=" +
                          e +
                          ")",
                      ),
                    ));
                }
              },
              onPause: function (n) {
                o("WALogger").LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [WorkerProxy] RPC ready wait paused token=",
                      " visibleElapsed=",
                      "ms ",
                      "",
                    ])),
                  t,
                  n.visibleMs.toFixed(1),
                  Y(),
                );
              },
              onResume: function (n) {
                o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [WorkerProxy] RPC ready wait resumed token=",
                      " visibleElapsed=",
                      "ms ",
                      "",
                    ])),
                  t,
                  n.visibleMs.toFixed(1),
                  Y(),
                );
              },
            });
          s = e.worker.addMessageListener("voipRpcReady", function (e) {
            if (e.token === t && !l) {
              l = !0;
              var r = c.cancel();
              (u(),
                r.wasBackgroundPaused &&
                  o(
                    "WAWebCoreActionsODS",
                  ).logCallVoipRpcReadyBackgroundPauseSuccess(),
                o("WALogger").LOG(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [WorkerProxy] RPC ready ack token=",
                      " wallElapsed=",
                      "ms visibleElapsed=",
                      "ms ",
                      "",
                    ])),
                  t,
                  r.wallMs.toFixed(1),
                  r.visibleMs.toFixed(1),
                  Y(),
                ),
                n());
            }
          });
        });
      }
      function u() {
        var e = i;
        if (e != null) return e;
        var u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (yield t,
            o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [WorkerProxy] WASM loaded, creating JsWorkerThread",
                ])),
            ));
          var e = yield r("WAWebVoipJsWorkerThread").create();
          o("WALogger").LOG(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WorkerProxy] JsWorkerThread created",
              ])),
          );
          var n = new MessageChannel(),
            i = new ee(n.port1);
          i.start();
          var u = a++,
            c = s(e, u, i);
          (o("WALogger").LOG(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WorkerProxy] posting startVoipRpc token=",
                " ",
                "",
              ])),
            u,
            Y(),
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
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [WorkerProxy] shutdown after RPC fail: ",
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
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
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
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WorkerProxy] cleared failed worker lifecycle: ",
                    " ",
                    "",
                  ])),
                String(e),
                Y(),
              ));
          }),
          u
        );
      }
      function c(e, t, n) {
        return te.apply(this, arguments);
      }
      function te() {
        return (
          (te = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n) {
              var r = yield u(),
                o = r.rpc;
              o.fire(e, t, n);
            },
          )),
          te.apply(this, arguments)
        );
      }
      function ne(e, t, n) {
        return oe.apply(this, arguments);
      }
      function oe() {
        return (
          (oe = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n) {
              var r = yield u(),
                o = r.rpc;
              return o.invoke(e, t, n);
            },
          )),
          oe.apply(this, arguments)
        );
      }
      function ae(e, t, n) {
        return ie.apply(this, arguments);
      }
      function ie() {
        return (
          (ie = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n) {
              var r = yield u(),
                a = r.rpc;
              return a.invokeWithVisibilityAwareTimeout(
                e,
                t,
                {
                  foregroundMs: Q,
                  absoluteMs: X,
                  onTimeout: Z,
                  onBackgroundPauseSuccess: o("WAWebCoreActionsODS")
                    .logCallVoipRpcInitBackgroundPauseSuccess,
                },
                n,
              );
            },
          )),
          ie.apply(this, arguments)
        );
      }
      function le(e) {
        var t = i;
        t != null &&
          ((i = null),
          (l = !0),
          o("WAWebVoipLogDrainer").stopLogDrainer(),
          o("WALogger").WARN(
            v ||
              (v = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WorkerProxy] cleared worker lifecycle after init failure: ",
                " ",
                "",
              ])),
            String(e),
            Y(),
          ),
          t
            .then(function (e) {
              var t = e.jsWorker,
                n = e.rpc;
              (n.close("VoIP init failure"),
                t.shutdown().catch(function (e) {
                  o("WALogger").WARN(
                    S ||
                      (S = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [WorkerProxy] worker shutdown after init failure failed: ",
                        "",
                      ])),
                    String(e),
                  );
                }));
            })
            .catch(r("WAWebNoop")));
      }
      var se = {
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
              var a = yield u(),
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
                d = !1;
              try {
                yield o(
                  "WAWebVoipVideoRendererRegistry",
                ).videoRendererRegistry.init();
                var m = o(
                  "WAWebVoipVideoRendererRegistry",
                ).videoRendererRegistry.getRendererType();
                s =
                  m ===
                  o("WAWebVoipVideoRendererInterface")
                    .WAWebVoipVideoRendererType.WEBCODECS_H264;
                var p = o("WAWebABProps").getABPropConfigValue(
                    "enable_webcodec_video_encode",
                  ),
                  _ =
                    s ||
                    (yield o(
                      "WAWebVoipVideoWebCodecsRenderer",
                    ).WAWebVoipVideoWebCodecsRenderer.checkAvailability());
                d =
                  _ && p === !0
                    ? yield o(
                        "WAWebVoipWebCodecsEncoderState",
                      ).checkEncoderSupport()
                    : !1;
              } catch (e) {
                o("WALogger").WARN(
                  R ||
                    (R = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: video cap detect failed, passthrough off: ",
                      "",
                    ])),
                  e,
                );
              }
              (o("WALogger").LOG(
                L ||
                  (L = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WorkerProxy] dec=",
                    " enc=",
                    "",
                  ])),
                s,
                d,
              ),
                o("WALogger").LOG(
                  E ||
                    (E = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [webcodec-encode] enabled=",
                      "",
                    ])),
                  d,
                ),
                o("WAWebVoipWebCodecsEncoderState").setWebCodecsEncoderEnabled(
                  d,
                ),
                o("WALogger").LOG(
                  k ||
                    (k = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [webcodec-encode] WebCodecs encoder state ",
                      "",
                    ])),
                  d,
                ));
              var f = z();
              ((f.enable_passthrough_video_decoder = {
                value: s,
                type: "bool",
              }),
                (f.enable_webcodec_video_encode = { value: d, type: "bool" }),
                o(
                  "WAWebLowEndDeviceExperimentGating",
                ).shouldDisableSoftwareAudioProcessing() &&
                  ((f.ns_builtin_available = { value: !0, type: "bool" }),
                  (f.disable_sw_ns_when_builtin_available = {
                    value: !0,
                    type: "bool",
                  }),
                  (f.ml_ns_skip_processing = { value: !0, type: "bool" }),
                  (f.disable_agc = { value: !0, type: "bool" }),
                  (f.hw_aec_available = { value: !0, type: "bool" }),
                  (f.disable_sw_ec_when_builtin_available = {
                    value: !0,
                    type: "bool",
                  }),
                  (f.disable_standalone_agc = { value: !0, type: "bool" }),
                  (f.disable_eq = { value: !0, type: "bool" })));
              try {
                yield ae("voipInit", {
                  selfJid: e,
                  selfUserJid: n,
                  selfLid: r,
                  abProps: f,
                });
              } catch (e) {
                throw (le(e), e);
              }
              o("WAWebVoipWasmHeapMonitor").logWasmHeapSnapshot(
                l,
                "voip_stack_init",
              );
              var g = l.getWebP2PVirtualIpv4(),
                h = l.getWebP2PVirtualIpv6(),
                y = l.getWebP2PVirtualPort();
              (o("WAWebVoipP2PConnectionManager").initP2PVirtualAddresses(
                g,
                h,
                y,
              ),
                o("WAWebVoipP2PConnectionManager").registerOnDataChannelMessage(
                  function (e) {
                    c(
                      "handleOnTransportMessage",
                      { packet: e, ip: g, port: y },
                      [e],
                    );
                  },
                ));
              var C = !1;
              o(
                "WAWebVoipP2PConnectionManager",
              ).registerOnDataChannelStateChange(function (e) {
                e === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open
                  ? ((C = !0),
                    o("WALogger").LOG(
                      I ||
                        (I = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: P2P DataChannel opened, notifying WASM active=true",
                        ])),
                    ),
                    c("notifyWebP2PChannelReady", { active: !0, useIPv6: !1 }))
                  : C &&
                    ((C = !1),
                    o("WALogger").LOG(
                      T ||
                        (T = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: P2P DataChannel ",
                          " (was open), WASM active=false",
                        ])),
                      e,
                    ),
                    c("notifyWebP2PChannelReady", { active: !1, useIPv6: !1 }));
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
              D ||
                (D = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: setHideMyIp called with hideMyIp=",
                  "",
                ])),
              e,
            ),
              yield ae("setHideMyIp", { hideMyIp: e }));
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        handleSignOut: function () {
          if (
            (o("WALogger").LOG(
              x ||
                (x = babelHelpers.taggedTemplateLiteralLoose([
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
                    $ ||
                      ($ = babelHelpers.taggedTemplateLiteralLoose([
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
                    P ||
                      (P = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [initBweMLModelsForCall] unhandled error: ",
                        "",
                      ])),
                    e,
                  );
                }),
                yield c("startCall", {
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
            function* (e, n, r, a, i, l, s, u, d, m, p, _, f) {
              if (!o("WAWebVoipGatingUtils").isGroupCallingEnabled()) {
                o("WALogger").ERROR(
                  N ||
                    (N = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: startGroupCall: Web group calling is not enabled",
                    ])),
                );
                return;
              }
              var g = yield t;
              (o("WAWebBweMLModelManager")
                .initBweMLModelsForCall(g)
                .catch(function (e) {
                  o("WALogger").WARN(
                    M ||
                      (M = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [initBweMLModelsForCall] unhandled error: ",
                        "",
                      ])),
                    e,
                  );
                }),
                yield c("startGroupCall", {
                  pnUserJids: e,
                  lidUserJids: n,
                  deviceJidsCsv: r,
                  callId: a,
                  useVideo: i,
                  groupJid: l,
                  isLightWeight: s,
                  scheduleId: u,
                  chatName: d,
                  chatIcon: m,
                  callFromUI: p != null ? p : 0,
                  lobbyEntryType: _ != null ? _ : 0,
                  username: f != null ? f : "",
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
              yield c("acceptCall", { isMicEnabled: e, isCameraEnabled: t });
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        rejectCall: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            yield c("rejectCall", {});
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
                yield c("endCall", { endCallReason: e, sendTerminate: t });
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
              yield c("rejectCallWithoutCallContext", {
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
            function* (e, t, n, r, a, i, l, s, u, d, m, p, _, f, g, h, y) {
              if (!o("WAWebVoipGatingUtils").isGroupCallingEnabled()) {
                o("WALogger").ERROR(
                  w ||
                    (w = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: joinOngoingCall: Web group calling is not enabled",
                    ])),
                );
                return;
              }
              yield c("joinOngoingCall", {
                callId: e,
                callCreatorJid: t,
                initialPeerJid: n,
                groupParticipantsPnUserJid: r,
                groupParticipantsLidUserJid: a,
                groupParticipantsDeviceJidsCsv: i,
                hasVideo: l,
                groupJid: s,
                initialGroupTransactionId: u,
                callCreatorIsNotContact: d,
                callLinkCode: m,
                isLightweight: p,
                scheduledId: _,
                joinAndAccept: f,
                chatName: g,
                lobbyEntryType: h != null ? h : 0,
                isDeviceSwitch: y != null ? y : !1,
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
                  A ||
                    (A = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: previewCallLink: Call link feature is not enabled",
                    ])),
                );
                return;
              }
              var a = 22;
              if (e.length !== a) {
                o("WALogger").ERROR(
                  F ||
                    (F = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: previewCallLink: invalid token length ",
                      ", expected ",
                      "",
                    ])),
                  e.length,
                  a,
                );
                return;
              }
              var i = yield ne("previewCallLink", {
                token: e,
                videoEnabled: t,
                lobbyEntryType: n != null ? n : 0,
                username: r != null ? r : "",
              });
              i !== 0 &&
                o("WALogger").ERROR(
                  O ||
                    (O = babelHelpers.taggedTemplateLiteralLoose([
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
                B ||
                  (B = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: joinCallLink: Call link feature is not enabled",
                  ])),
              );
              return;
            }
            yield c("joinCallLink", {});
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
                  W ||
                    (W = babelHelpers.taggedTemplateLiteralLoose([
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
                    q ||
                      (q = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [initBweMLModelsForCall] unhandled error: ",
                        "",
                      ])),
                    e,
                  );
                }),
                yield c("previewAndJoinCallLink", {
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
            function* (e, n, a, i, l, s, u, d, m) {
              var p = yield t;
              o("WAWebBweMLModelManager")
                .initBweMLModelsForCall(p)
                .catch(function (e) {
                  o("WALogger").WARN(
                    U ||
                      (U = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [initBweMLModelsForCall] unhandled error: ",
                        "",
                      ])),
                    e,
                  );
                });
              var _ = e.node();
              r("justknobx")._("360") && re(_);
              var f = o("WABase64").encodeB64(o("WAWap").encodeStanza(_)),
                g = i != null ? String(i) : "0",
                h = l != null ? String(l) : "0";
              yield c("handleIncomingSignalingOffer", {
                b64Stanza: f,
                msgPlatform: n,
                msgVersion: a,
                msgEStr: g,
                msgTStr: h,
                msgOffline: s,
                isOfferNotContact: u,
                peerJid: d,
                tcToken: m,
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
              var d = e.node();
              r("justknobx")._("360") && re(d);
              var m = o("WABase64").encodeB64(o("WAWap").encodeStanza(d)),
                p = a != null ? String(a) : "0",
                _ = i != null ? String(i) : "0";
              yield c("handleIncomingSignalingMessage", {
                b64Stanza: m,
                msgPlatform: t,
                msgVersion: n,
                msgEStr: p,
                msgTStr: _,
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
              r("justknobx")._("360") && re(l);
              var s = o("WABase64").encodeB64(o("WAWap").encodeStanza(l));
              yield c("handleIncomingSignalingAck", {
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
              r("justknobx")._("360") && re(a);
              var i = o("WABase64").encodeB64(o("WAWap").encodeStanza(a));
              yield c("handleIncomingSignalingReceipt", {
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
              yield c("resendOfferOnDecryptionFailure", {
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
              yield c("resendEncRekeyRetry", { peerJid: e, retryCount: t });
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
              yield c(
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
            var t = yield ne("setCallMute", { enable: e });
            return Number(t);
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        setCallVideoMute: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = yield ne("setCallVideoMute", { enable: e });
            return Number(t);
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        videoStreamPause: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = yield ne("videoStreamPause", {});
            return Number(e);
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        videoStreamResume: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = yield ne("videoStreamResume", {});
            return Number(e);
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        broadcastVideoState: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = yield ne("broadcastVideoState", {});
            return Number(e);
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        sendReaction: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            yield c("sendReaction", { reaction: e });
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        raiseHand: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            yield c("raiseHand", { isHandRaised: e });
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        requestVideoUpgrade: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = yield ne("requestVideoUpgrade", {});
            return Number(e);
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        getCallInfo: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = yield ne("getCallInfo", {});
            return (
              e === "" &&
                o("WALogger").ERROR(
                  V ||
                    (V = babelHelpers.taggedTemplateLiteralLoose([
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
            var t = yield ne("acceptPeerVideo", { jid: e.jid });
            return (
              t !== 0 &&
                o("WALogger").ERROR(
                  H ||
                    (H = babelHelpers.taggedTemplateLiteralLoose([
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
            var t = yield ne("requestPeerMute", { peerJid: e });
            return Number(t);
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        removeCallParticipant: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = yield ne("removeCallParticipant", { peerJid: e });
            return Number(t);
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        waitingRoomAdmit: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = yield ne("waitingRoomAdmit", { peerJid: e });
            return Number(t);
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        waitingRoomDeny: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = yield ne("waitingRoomDeny", { peerJid: e });
            return Number(t);
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        waitingRoomAdmitAll: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = yield ne("waitingRoomAdmitAll", {});
            return Number(e);
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        waitingRoomToggleActiveCall: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = yield ne("waitingRoomToggleActiveCall", { enabled: e });
            return Number(t);
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        startScreenShare: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = yield ne("startScreenShare", {});
            return Number(e);
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        stopScreenShare: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = yield ne("stopScreenShare", {});
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
              var n = yield ne("startVideoPreview", { callId: e, selfJid: t });
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
            var t = yield ne("requestKeyFrame", { userJid: e });
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
              var n = yield ne("updateParticipantsRxSubscription", {
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
              yield c("updateNetworkMedium", {
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
              var e = yield ne("getNetworkConditionerState", {});
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
              var e = yield ne("getShortStatisticString", {});
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
              var e = yield ne("getDebugStatisticString", {});
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
              var t = yield ne("getVoipParam", { paramPath: e });
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
        callbacks: se,
        inviteToCall: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n) {
              yield c("inviteToCall", {
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
              yield c("checkOngoingCalls", { callIds: e, callCreatorJids: t });
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
              yield c("sendWebP2PTransport", {
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
    var ne = {
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
    function re(e) {
      var t = e.content;
      if (String(e.tag) === "te2") {
        var n = e.content,
          r = e.attrs;
        if (r != null && n != null && n instanceof Uint8Array) {
          var o = String(r.relay_name),
            a = ne[o];
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
          re(e);
        });
    }
    l.createWorkerProxyStackInterface = te;
  },
  98,
);
