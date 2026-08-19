__d(
  "WAWebVoipStackInterfaceWorkerProxy",
  [
    "Promise",
    "WABase64",
    "WALogger",
    "WAWap",
    "WAWebABProps",
    "WAWebBackendApi",
    "WAWebCoreActionsODS",
    "WAWebCountryCodeUtils",
    "WAWebLowEndDeviceExperimentGating",
    "WAWebMLModelManager",
    "WAWebNoop",
    "WAWebUA",
    "WAWebVisibilityAwareTimeout",
    "WAWebVoipABPropConfig",
    "WAWebVoipAudioCaptureAndPlayback",
    "WAWebVoipGatingUtils",
    "WAWebVoipInitializationBarrier",
    "WAWebVoipJsWorkerThread",
    "WAWebVoipJsonParsersWeb",
    "WAWebVoipLobbyEntryPointStore",
    "WAWebVoipLogDrainer",
    "WAWebVoipMessagePortRpc",
    "WAWebVoipP2PConnectionManager",
    "WAWebVoipPerfOptimizations",
    "WAWebVoipQplHelpers",
    "WAWebVoipRelayConnectionUtils",
    "WAWebVoipRelayOverrides",
    "WAWebVoipScreenShareStreamKey",
    "WAWebVoipSctpConnectionManager",
    "WAWebVoipStorageInit",
    "WAWebVoipTransportFallbackTracker",
    "WAWebVoipVideoCaptureFpsTracker",
    "WAWebVoipVideoRendererInterface",
    "WAWebVoipVideoRendererRegistry",
    "WAWebVoipVideoWebCodecsRenderer",
    "WAWebVoipWasmHeapMonitor",
    "WAWebVoipWebCodecsEncoderState",
    "WAWebVoipWebTransportConnectionManager",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
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
      G,
      z,
      j,
      K;
    function Q() {
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
    var X = 9e4,
      Y = 300 * 1e3,
      J = 45 * 1e3,
      Z = 600 * 1e3,
      ee = 9e4,
      te = 300 * 1e3;
    function ne() {
      return (
        "hidden=" +
        String(document.hidden) +
        " visibility=" +
        document.visibilityState +
        " focus=" +
        String(document.hasFocus())
      );
    }
    function re(e) {
      e === "foreground"
        ? o("WAWebCoreActionsODS").logCallVoipRpcReadyTimeoutForeground()
        : o("WAWebCoreActionsODS").logCallVoipRpcReadyTimeoutAbsolute();
    }
    function oe(e) {
      e === "foreground"
        ? o("WAWebCoreActionsODS").logCallVoipRpcInitTimeoutForeground()
        : o("WAWebCoreActionsODS").logCallVoipRpcInitTimeoutAbsolute();
    }
    function ae() {
      try {
        return r("justknobx")._("1699");
      } catch (e) {
        return !1;
      }
    }
    function ie() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_voip_pre_init_worker_bootstrap",
      );
    }
    function le() {
      var e,
        t = ie(),
        a = new (r("WAWebVoipInitializationBarrier"))(),
        i = o("WAWebBackendApi").frontendSendAndReceive("initializeVoipWasm"),
        l = 0,
        le = null,
        se = !1,
        ue = !1,
        ce = !1;
      function de(e, t, a) {
        return new (K || (K = n("Promise")))(function (n, i) {
          var l = !1,
            p = null,
            _ = !1,
            f = null,
            g = function () {
              var t = p;
              t != null &&
                (e.worker.removeMessageListener("voipRpcReady", t), (p = null));
            },
            h = function () {
              f != null && (f.cancel(), (f = null));
            },
            y = function (n, u) {
              if (!l) {
                ((l = !0), g(), h(), a.close("RPC ready timeout"), re(n));
                var e =
                  n === "foreground"
                    ? "foreground timeout"
                    : "absolute timeout";
                (o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [WorkerProxy] RPC ready timeout token=",
                      " reason=",
                      " wallElapsed=",
                      "ms visibleElapsed=",
                      "ms ",
                      "",
                    ])),
                  t,
                  e,
                  u.wallMs.toFixed(1),
                  u.visibleMs.toFixed(1),
                  ne(),
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
            C = function (n) {
              (o("WAWebCoreActionsODS").logCallVoipRpcReadyHiddenGraceStarted(),
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [WorkerProxy] RPC ready deferring teardown while hidden token=",
                      " wallElapsed=",
                      "ms ",
                      "",
                    ])),
                  t,
                  n.wallMs.toFixed(1),
                  ne(),
                ),
                (f = o(
                  "WAWebVisibilityAwareTimeout",
                ).startVisibilityAwareTimeout({
                  foregroundMs: J,
                  absoluteMs: Z,
                  onTimeout: function (t, r) {
                    (t === "foreground"
                      ? o(
                          "WAWebCoreActionsODS",
                        ).logCallVoipRpcReadyHiddenGraceExhaustedForeground()
                      : o(
                          "WAWebCoreActionsODS",
                        ).logCallVoipRpcReadyHiddenGraceExhaustedAbsolute(),
                      y("absolute", {
                        wallMs: n.wallMs + r.wallMs,
                        visibleMs: n.visibleMs + r.visibleMs,
                        wasBackgroundPaused:
                          n.wasBackgroundPaused || r.wasBackgroundPaused,
                      }));
                  },
                })));
            },
            b = o("WAWebVisibilityAwareTimeout").startVisibilityAwareTimeout({
              foregroundMs: X,
              absoluteMs: Y,
              onTimeout: function (t, n) {
                if (!l) {
                  if (ae() && t === "absolute" && document.hidden && !_) {
                    ((_ = !0), C(n));
                    return;
                  }
                  y(t, n);
                }
              },
              onPause: function (n) {
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [WorkerProxy] RPC ready wait paused token=",
                      " visibleElapsed=",
                      "ms ",
                      "",
                    ])),
                  t,
                  n.visibleMs.toFixed(1),
                  ne(),
                );
              },
              onResume: function (n) {
                o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [WorkerProxy] RPC ready wait resumed token=",
                      " visibleElapsed=",
                      "ms ",
                      "",
                    ])),
                  t,
                  n.visibleMs.toFixed(1),
                  ne(),
                );
              },
            });
          p = e.worker.addMessageListener("voipRpcReady", function (e) {
            if (e.token === t && !l) {
              l = !0;
              var r = b.cancel();
              (g(),
                _ &&
                  o(
                    "WAWebCoreActionsODS",
                  ).logCallVoipRpcReadyHiddenGraceRecovered(),
                h(),
                r.wasBackgroundPaused &&
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
                  r.wallMs.toFixed(1),
                  r.visibleMs.toFixed(1),
                  ne(),
                ),
                n());
            }
          });
        });
      }
      function me() {
        var e = le;
        if (e != null) return e;
        var a = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield i;
          (o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WorkerProxy] WASM loaded, creating JsWorkerThread",
              ])),
          ),
            e.initVoipLogging(),
            o("WAWebVoipQplHelpers").voipInitQplAnnotateWorkerBootstrapMode(t),
            o("WAWebVoipQplHelpers").voipInitQplAddPoint(
              o("WAWebVoipQplHelpers").VoipInitQplPoint.WORKER_CREATE_START,
            ));
          var n = yield r("WAWebVoipJsWorkerThread")
            .create(e, t ? "pre-init" : "legacy-pj")
            .finally(function () {
              o("WAWebVoipQplHelpers").voipInitQplAddPoint(
                o("WAWebVoipQplHelpers").VoipInitQplPoint.WORKER_CREATE_END,
              );
            });
          o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WorkerProxy] JsWorkerThread created",
              ])),
          );
          var a = new MessageChannel(),
            s = new (o("WAWebVoipMessagePortRpc").MessagePortRpc)(a.port1);
          (s.start(),
            o("WAWebVoipQplHelpers").voipInitQplAddPoint(
              o("WAWebVoipQplHelpers").VoipInitQplPoint.RPC_SETUP_START,
            ));
          var u = l++,
            c = de(n, u, s);
          (o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WorkerProxy] posting startVoipRpc token=",
                " ",
                "",
              ])),
            u,
            ne(),
          ),
            n.worker.postMessage(
              {
                type: "cmd",
                cmd: "jsWorkerCmd",
                jsWorkerCmd: "startVoipRpc",
                rpcPort: a.port2,
                token: u,
              },
              [a.port2],
            ));
          try {
            yield c.finally(function () {
              o("WAWebVoipQplHelpers").voipInitQplAddPoint(
                o("WAWebVoipQplHelpers").VoipInitQplPoint.RPC_SETUP_END,
              );
            });
          } catch (e) {
            throw (
              s.close("RPC ready failure"),
              o(
                "WAWebCoreActionsODS",
              ).logCallVoipRpcReadyCleanupShutdownAttempted(),
              n.shutdown().catch(function (e) {
                (o(
                  "WAWebCoreActionsODS",
                ).logCallVoipRpcReadyCleanupShutdownFailed(),
                  o("WALogger").WARN(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [WorkerProxy] shutdown after RPC fail: ",
                        "",
                      ])),
                    String(e),
                  ));
              }),
              e
            );
          }
          return (
            o("WALogger").LOG(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [WorkerProxy] RPC channel ready",
                ])),
            ),
            se &&
              ((se = !1),
              o("WAWebCoreActionsODS").logCallVoipRpcReadyRetrySuccess()),
            { jsWorker: n, rpc: s }
          );
        })();
        return (
          (le = a),
          a.catch(function (e) {
            le === a &&
              ((le = null),
              (se = !0),
              o("WALogger").WARN(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WorkerProxy] cleared failed worker lifecycle: ",
                    " ",
                    "",
                  ])),
                String(e),
                ne(),
              ));
          }),
          a
        );
      }
      function pe() {
        if (t && ce)
          throw r("err")(
            "voip: RPC attempted while worker lifecycle is shutting down",
          );
      }
      function _e(e, t, n) {
        return fe.apply(this, arguments);
      }
      function fe() {
        return (
          (fe = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, n, r) {
              (pe(), t && (yield a.wait()), pe());
              var o = yield me(),
                i = o.rpc;
              (pe(), i.fire({ args: n, method: e, transferList: r }));
            },
          )),
          fe.apply(this, arguments)
        );
      }
      function ge(e, t, n) {
        return he.apply(this, arguments);
      }
      function he() {
        return (
          (he = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, n, r) {
              (pe(), t && (yield a.wait()), pe());
              var o = yield me(),
                i = o.rpc;
              return (pe(), i.invoke(e, n, r));
            },
          )),
          he.apply(this, arguments)
        );
      }
      function ye(e, t, n) {
        ce ||
          _e(e, t, n).catch(function (t) {
            ce ||
              ue ||
              ((ue = !0),
              o("WALogger")
                .ERROR(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [WorkerProxy] fire-and-forget RPC failed method=",
                      "",
                    ])),
                  e,
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("voip-worker-rpc-fire-failed"));
          });
      }
      function Ce(e) {
        o("WAWebVoipWebTransportConnectionManager").registerPacketHandler(
          function (t, n, r) {
            ce ||
              e.fire({
                args: { packet: t, ip: n, port: r },
                method: "handleOnTransportMessage",
                transferList: [t],
              });
          },
        );
      }
      function be(e, t, n) {
        return ve.apply(this, arguments);
      }
      function ve() {
        return (
          (ve = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n) {
              var r = yield me(),
                a = r.rpc;
              return a.invokeWithVisibilityAwareTimeout(
                e,
                t,
                {
                  foregroundMs: ee,
                  absoluteMs: te,
                  onTimeout: oe,
                  onBackgroundPauseSuccess: o("WAWebCoreActionsODS")
                    .logCallVoipRpcInitBackgroundPauseSuccess,
                },
                n,
              );
            },
          )),
          ve.apply(this, arguments)
        );
      }
      function Se(e) {
        var t = le;
        t != null &&
          ((le = null),
          (se = !0),
          o("WAWebVoipLogDrainer").stopLogDrainer(),
          o("WALogger").WARN(
            b ||
              (b = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WorkerProxy] cleared worker lifecycle after init failure: ",
                " ",
                "",
              ])),
            String(e),
            ne(),
          ),
          t
            .then(function (e) {
              var t = e.jsWorker,
                n = e.rpc;
              (n.close("VoIP init failure"),
                t.shutdown().catch(function (e) {
                  o("WALogger").WARN(
                    v ||
                      (v = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [WorkerProxy] worker shutdown after init failure failed: ",
                        "",
                      ])),
                    String(e),
                  );
                }));
            })
            .catch(r("WAWebNoop")));
      }
      var Re = {
          onVoipReady: (e = r("WAWebNoop")),
          onCallEvent: e,
          initCaptureDriverJS: o("WAWebVoipAudioCaptureAndPlayback")
            .initCaptureDriverJS,
          startCaptureJS: o("WAWebVoipAudioCaptureAndPlayback").startCaptureJS,
          stopCaptureJS: o("WAWebVoipAudioCaptureAndPlayback").stopCaptureJS,
        },
        Le = {
          type: "web",
          parsers: r("WAWebVoipJsonParsersWeb"),
          voipInit: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, n, a) {
                var l;
                ce = !1;
                var s = yield me(),
                  u = s.rpc,
                  c = yield i;
                (o("WAWebVoipGatingUtils").resetWebTransportFallbackState(),
                  o("WALogger").LOG(
                    S ||
                      (S = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [WebTransport] voipInit wt=",
                        " (worker proxy)",
                      ])),
                    String(o("WAWebVoipGatingUtils").isWebTransportEnabled()),
                  ),
                  t || Ce(u),
                  o(
                    "WAWebVoipWebTransportConnectionManager",
                  ).registerFallbackHandler(function (e) {
                    (o("WALogger")
                      .LOG(
                        R ||
                          (R = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [WebTransport] Falling back to SCTP after connect failure (worker proxy)",
                          ])),
                      )
                      .sendLogs("webtransport-fallback-handler-invoked"),
                      o(
                        "WAWebVoipSctpConnectionManager",
                      ).markSctpEnteredViaWebTransportFallback(),
                      o("WAWebVoipGatingUtils").markWebTransportFellBack(),
                      o(
                        "WAWebVoipTransportFallbackTracker",
                      ).markFallbackTriggered(),
                      o(
                        "WAWebVoipWebTransportConnectionManager",
                      ).closeAllConnections(),
                      e != null
                        ? o(
                            "WAWebVoipSctpConnectionManager",
                          ).handleRelayListUpdate(e)
                        : o("WALogger")
                            .WARN(
                              L ||
                                (L = babelHelpers.taggedTemplateLiteralLoose([
                                  "voip: [WebTransport] Fallback handler had no cached relay list to replay",
                                ])),
                            )
                            .sendLogs("webtransport-fallback-no-relay-list"));
                  }),
                  o("WAWebVoipPerfOptimizations").isPerfOptimizationEnabled(
                    o("WAWebVoipPerfOptimizations").PerfOptimizationFlag
                      .LOG_RING_BUFFER,
                  ) && o("WAWebVoipLogDrainer").startLogDrainer(c),
                  o("WAWebVoipStorageInit").initVoipStorageAndMLCache(c));
                var d = !1,
                  m = !1;
                o("WAWebVoipQplHelpers").voipInitQplAddPoint(
                  o("WAWebVoipQplHelpers").VoipInitQplPoint
                    .WEBCODECS_PROBE_START,
                );
                try {
                  yield o(
                    "WAWebVoipVideoRendererRegistry",
                  ).videoRendererRegistry.init();
                  var p = o(
                    "WAWebVoipVideoRendererRegistry",
                  ).videoRendererRegistry.getRendererType();
                  d =
                    p ===
                    o("WAWebVoipVideoRendererInterface")
                      .WAWebVoipVideoRendererType.WEBCODECS_H264;
                  var _ = o("WAWebABProps").getABPropConfigValue(
                      "enable_webcodec_video_encode",
                    ),
                    f =
                      d ||
                      (yield o(
                        "WAWebVoipVideoWebCodecsRenderer",
                      ).WAWebVoipVideoWebCodecsRenderer.checkAvailability());
                  m =
                    !o("WAWebUA").UA.isFirefox && f && _ === !0
                      ? yield o(
                          "WAWebVoipWebCodecsEncoderState",
                        ).checkEncoderSupport()
                      : !1;
                } catch (e) {
                  o("WALogger").WARN(
                    E ||
                      (E = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: video cap detect failed, passthrough off: ",
                        "",
                      ])),
                    e,
                  );
                }
                (o("WAWebVoipQplHelpers").voipInitQplAddPoint(
                  o("WAWebVoipQplHelpers").VoipInitQplPoint.WEBCODECS_PROBE_END,
                ),
                  o("WALogger").LOG(
                    k ||
                      (k = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [WorkerProxy] dec=",
                        " enc=",
                        "",
                      ])),
                    d,
                    m,
                  ),
                  o("WALogger").LOG(
                    I ||
                      (I = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [webcodec-encode] enabled=",
                        "",
                      ])),
                    m,
                  ),
                  o(
                    "WAWebVoipWebCodecsEncoderState",
                  ).setWebCodecsEncoderEnabled(m),
                  o("WALogger").LOG(
                    T ||
                      (T = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [webcodec-encode] WebCodecs encoder state ",
                        "",
                      ])),
                    m,
                  ));
                var g = Q();
                ((g.enable_passthrough_video_decoder = {
                  value: d,
                  type: "bool",
                }),
                  (g.enable_webcodec_video_encode = { value: m, type: "bool" }),
                  o(
                    "WAWebLowEndDeviceExperimentGating",
                  ).shouldDisableSoftwareAudioProcessing() &&
                    ((g.ns_builtin_available = { value: !0, type: "bool" }),
                    (g.disable_sw_ns_when_builtin_available = {
                      value: !0,
                      type: "bool",
                    }),
                    (g.ml_ns_skip_processing = { value: !0, type: "bool" }),
                    (g.disable_agc = { value: !0, type: "bool" }),
                    (g.hw_aec_available = { value: !0, type: "bool" }),
                    (g.disable_sw_ec_when_builtin_available = {
                      value: !0,
                      type: "bool",
                    }),
                    (g.disable_standalone_agc = { value: !0, type: "bool" }),
                    (g.disable_eq = { value: !0, type: "bool" })));
                var h =
                  (l = yield o("WAWebCountryCodeUtils").getMyCallingCode()) !=
                  null
                    ? l
                    : "";
                o("WAWebVoipQplHelpers").voipInitQplAddPoint(
                  o("WAWebVoipQplHelpers").VoipInitQplPoint
                    .VOIP_STACK_INIT_START,
                );
                try {
                  if (
                    (yield be("voipInit", {
                      selfJid: e,
                      selfUserJid: n,
                      selfLid: a,
                      selfCountryCode: h,
                      abProps: g,
                    }),
                    t)
                  ) {
                    var y = c.registerMainThreadAfterVoipInit();
                    if (y !== 0)
                      throw r("err")(
                        "voip: failed to register main thread (" + y + ")",
                      );
                  }
                } catch (e) {
                  throw (Se(e), e);
                } finally {
                  o("WAWebVoipQplHelpers").voipInitQplAddPoint(
                    o("WAWebVoipQplHelpers").VoipInitQplPoint
                      .VOIP_STACK_INIT_END,
                  );
                }
                (o("WAWebVoipWasmHeapMonitor").logWasmHeapSnapshot(
                  c,
                  "voip_stack_init",
                ),
                  (ue = !1));
                var C = c.getWebP2PVirtualIpv4(),
                  b = c.getWebP2PVirtualIpv6(),
                  v = c.getWebP2PVirtualPort();
                (o("WAWebVoipP2PConnectionManager").initP2PVirtualAddresses(
                  C,
                  b,
                  v,
                ),
                  o(
                    "WAWebVoipP2PConnectionManager",
                  ).registerOnDataChannelMessage(function (e) {
                    ye(
                      "handleOnTransportMessage",
                      { packet: e, ip: C, port: v },
                      [e],
                    );
                  }));
                var $ = !1;
                (o(
                  "WAWebVoipP2PConnectionManager",
                ).registerOnDataChannelStateChange(function (e) {
                  e === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open
                    ? (($ = !0),
                      o("WALogger").LOG(
                        D ||
                          (D = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: P2P DataChannel opened, notifying WASM active=true",
                          ])),
                      ),
                      ye("notifyWebP2PChannelReady", {
                        active: !0,
                        useIPv6: !1,
                      }))
                    : $ &&
                      (($ = !1),
                      o("WALogger").LOG(
                        x ||
                          (x = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: P2P DataChannel ",
                            " (was open), WASM active=false",
                          ])),
                        e,
                      ),
                      ye("notifyWebP2PChannelReady", {
                        active: !1,
                        useIPv6: !1,
                      }));
                }),
                  t && Ce(u));
              },
            );
            function a(t, n, r) {
              return e.apply(this, arguments);
            }
            return a;
          })(),
          setHideMyIp: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                (o("WALogger").LOG(
                  $ ||
                    ($ = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: setHideMyIp called with hideMyIp=",
                      "",
                    ])),
                  e,
                ),
                  yield be("setHideMyIp", { hideMyIp: e }));
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          handleSignOut: function () {
            if (
              (o("WALogger").LOG(
                P ||
                  (P = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: handleSignOut: cleaning up all connections",
                  ])),
              ),
              t &&
                ((ce = !0),
                a.reset(),
                o("WAWebVoipP2PConnectionManager").cleanupP2PConnection()),
              (ue = !1),
              (se = !1),
              o("WAWebVoipLogDrainer").stopLogDrainer(),
              o("WAWebVoipGatingUtils").isWebTransportEnabled()
                ? o(
                    "WAWebVoipWebTransportConnectionManager",
                  ).closeAllConnections()
                : (o(
                    "WAWebVoipWebTransportConnectionManager",
                  ).closeAllConnections(),
                  o("WAWebVoipSctpConnectionManager").cleanupAllConnections()),
              o("WAWebVoipTransportFallbackTracker").finalizeFallbackOutcome(),
              o("WAWebVoipTransportFallbackTracker").resetFallbackTracker(),
              o("WAWebVoipGatingUtils").resetWebTransportFallbackState(),
              le != null)
            ) {
              var e = le;
              ((le = null),
                e
                  .then(function (e) {
                    var t = e.jsWorker,
                      n = e.rpc;
                    return (n.close("sign out"), t.shutdown());
                  })
                  .catch(function (e) {
                    o("WALogger").WARN(
                      N ||
                        (N = babelHelpers.taggedTemplateLiteralLoose([
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
              function* (e, t, n, r, a, l, s) {
                (o("WAWebVoipGatingUtils").markCurrentCallAsGroup(!1),
                  o("WAWebVoipLobbyEntryPointStore").resetLobbyEntryPoint());
                var u = yield i;
                (o("WAWebMLModelManager")
                  .initMLModelsForCall(u)
                  .catch(function (e) {
                    o("WALogger").WARN(
                      M ||
                        (M = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [initMLModelsForCall] unhandled error: ",
                          "",
                        ])),
                      e,
                    );
                  }),
                  yield _e("startCall", {
                    peerJid: e.toString({ legacy: !0 }),
                    deviceJids: t,
                    callId: n,
                    useVideo: r,
                    phoneNumberJid: a,
                    isFromDialer: l,
                    tcToken: s,
                  }));
              },
            );
            function t(t, n, r, o, a, i, l) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          startGroupCall: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n, r, a, l, s, u, c, d, m, p, _) {
                if (
                  (o("WAWebVoipGatingUtils").markCurrentCallAsGroup(!0),
                  !o("WAWebVoipGatingUtils").isGroupCallingEnabled())
                ) {
                  o("WALogger").ERROR(
                    w ||
                      (w = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: startGroupCall: Web group calling is not enabled",
                      ])),
                  );
                  return;
                }
                o("WAWebVoipLobbyEntryPointStore").setLobbyEntryPoint(
                  p != null ? p : null,
                  r,
                );
                var f = yield i;
                (o("WAWebMLModelManager")
                  .initMLModelsForCall(f)
                  .catch(function (e) {
                    o("WALogger").WARN(
                      A ||
                        (A = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [initMLModelsForCall] unhandled error: ",
                          "",
                        ])),
                      e,
                    );
                  }),
                  yield _e("startGroupCall", {
                    pnUserJids: e,
                    lidUserJids: t,
                    deviceJidsCsv: n,
                    callId: r,
                    useVideo: a,
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
            function t(t, n, r, o, a, i, l, s, u, c, d, m, p) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          acceptCall: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                (o("WAWebVoipLobbyEntryPointStore").resetLobbyEntryPoint(),
                  yield _e("acceptCall", {
                    isMicEnabled: e,
                    isCameraEnabled: t,
                  }));
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          rejectCall: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              yield _e("rejectCall", {});
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
                  o(
                    "WAWebVoipWebTransportConnectionManager",
                  ).prepareForEndCall();
                try {
                  yield _e("endCall", { endCallReason: e, sendTerminate: t });
                } finally {
                  (o("WAWebVoipGatingUtils").isWebTransportEnabled() &&
                    o(
                      "WAWebVoipWebTransportConnectionManager",
                    ).closeAllConnections(),
                    o(
                      "WAWebVoipTransportFallbackTracker",
                    ).finalizeFallbackOutcome(),
                    o(
                      "WAWebVoipTransportFallbackTracker",
                    ).resetFallbackTracker(),
                    o("WAWebVoipGatingUtils").resetWebTransportFallbackState());
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
                yield _e("rejectCallWithoutCallContext", {
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
                if (
                  (o("WAWebVoipGatingUtils").markCurrentCallAsGroup(!0),
                  !o("WAWebVoipGatingUtils").isGroupCallingEnabled())
                ) {
                  o("WALogger").ERROR(
                    F ||
                      (F = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: joinOngoingCall: Web group calling is not enabled",
                      ])),
                  );
                  return;
                }
                (o("WAWebVoipLobbyEntryPointStore").setLobbyEntryPoint(
                  g != null ? g : null,
                  e,
                ),
                  yield _e("joinOngoingCall", {
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
                  }));
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
              function* (e, t, n, r, a) {
                if (!o("WAWebVoipGatingUtils").callLinksEnabled())
                  return (
                    o("WALogger").ERROR(
                      O ||
                        (O = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: previewCallLink: Call link feature is not enabled",
                        ])),
                    ),
                    -1
                  );
                var i = 22;
                if (e.length !== i)
                  return (
                    o("WALogger").ERROR(
                      B ||
                        (B = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: previewCallLink: invalid token length ",
                          ", expected ",
                          "",
                        ])),
                      e.length,
                      i,
                    ),
                    -1
                  );
                o("WAWebVoipLobbyEntryPointStore").setLobbyEntryPoint(
                  n != null ? n : null,
                  null,
                );
                var l = yield ge("previewCallLink", {
                  token: e,
                  videoEnabled: t,
                  lobbyEntryType: n != null ? n : 0,
                  username: r != null ? r : "",
                  videoMuted: a != null ? a : !1,
                });
                return (
                  l !== 0 &&
                    (o("WALogger").ERROR(
                      W ||
                        (W = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: previewCallLink: failed with status ",
                          "",
                        ])),
                      String(l),
                    ),
                    o("WAWebVoipLobbyEntryPointStore").resetLobbyEntryPoint()),
                  Number(l)
                );
              },
            );
            function t(t, n, r, o, a) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          joinCallLink: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (!o("WAWebVoipGatingUtils").callLinksEnabled()) {
                o("WALogger").ERROR(
                  q ||
                    (q = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: joinCallLink: Call link feature is not enabled",
                    ])),
                );
                return;
              }
              yield _e("joinCallLink", {});
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          previewAndJoinCallLink: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n, r, a, l) {
                if (!o("WAWebVoipGatingUtils").callLinksEnabled()) {
                  o("WALogger").ERROR(
                    U ||
                      (U = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: previewAndJoinCallLink: call links disabled",
                      ])),
                  );
                  return;
                }
                o("WAWebVoipLobbyEntryPointStore").setLobbyEntryPoint(
                  n != null ? n : null,
                  null,
                );
                var s = yield i;
                (o("WAWebMLModelManager")
                  .initMLModelsForCall(s)
                  .catch(function (e) {
                    o("WALogger").WARN(
                      V ||
                        (V = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [initMLModelsForCall] unhandled error: ",
                          "",
                        ])),
                      e,
                    );
                  }),
                  yield _e("previewAndJoinCallLink", {
                    token: e,
                    videoEnabled: t,
                    lobbyEntryType: n != null ? n : 0,
                    username: r != null ? r : "",
                    videoMuted: a != null ? a : !1,
                    pushName: l != null ? l : "",
                  }));
              },
            );
            function t(t, n, r, o, a, i) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          handleIncomingSignalingOffer: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n, a, l, s, u, c, d) {
                var m = yield i;
                o("WAWebMLModelManager")
                  .initMLModelsForCall(m)
                  .catch(function (e) {
                    o("WALogger").WARN(
                      H ||
                        (H = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [initMLModelsForCall] unhandled error: ",
                          "",
                        ])),
                      e,
                    );
                  });
                var p = e.node();
                r("justknobx")._("360") &&
                  o("WAWebVoipRelayOverrides").overrideRelayIp(p);
                var _ = o("WABase64").encodeB64(o("WAWap").encodeStanza(p)),
                  f = a != null ? String(a) : "0",
                  g = l != null ? String(l) : "0";
                yield _e("handleIncomingSignalingOffer", {
                  b64Stanza: _,
                  msgPlatform: t,
                  msgVersion: n,
                  msgEStr: f,
                  msgTStr: g,
                  msgOffline: s,
                  isOfferNotContact: u,
                  peerJid: c,
                  tcToken: d,
                });
              },
            );
            function t(t, n, r, o, a, i, l, s, u) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          handleIncomingSignalingMessage: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n, a, i, l, s, u) {
                var c = e.node();
                r("justknobx")._("360") &&
                  o("WAWebVoipRelayOverrides").overrideRelayIp(c);
                var d = o("WABase64").encodeB64(o("WAWap").encodeStanza(c)),
                  m = a != null ? String(a) : "0",
                  p = i != null ? String(i) : "0";
                yield _e("handleIncomingSignalingMessage", {
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
              function* (e) {
                var t = e.ackInfoError,
                  n = e.ackInfoType,
                  a = e.peerJid,
                  i = e.tcToken,
                  l = e.xmlNode,
                  s = l.node();
                r("justknobx")._("360") &&
                  o("WAWebVoipRelayOverrides").overrideRelayIp(s);
                var u = o("WABase64").encodeB64(o("WAWap").encodeStanza(s));
                yield _e("handleIncomingSignalingAck", {
                  b64Stanza: u,
                  ackInfoError: t,
                  ackInfoType: n,
                  peerJid: a,
                  tcToken: i,
                });
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          handleIncomingSignalingReceipt: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n) {
                var a = e.node();
                r("justknobx")._("360") &&
                  o("WAWebVoipRelayOverrides").overrideRelayIp(a);
                var i = o("WABase64").encodeB64(o("WAWap").encodeStanza(a));
                yield _e("handleIncomingSignalingReceipt", {
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
                yield _e("resendOfferOnDecryptionFailure", {
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
                yield _e("resendEncRekeyRetry", { peerJid: e, retryCount: t });
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
                yield _e(
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
          markRelayConnected: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                yield _e("markRelayConnected", { ip: e, port: t });
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          setCallMute: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield ge("setCallMute", { enable: e });
                return Number(t);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          setCallVideoMute: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield ge("setCallVideoMute", { enable: e });
                return Number(t);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          videoStreamPause: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = yield ge("videoStreamPause", {});
              return Number(e);
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          videoStreamResume: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = yield ge("videoStreamResume", {});
              return Number(e);
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          broadcastVideoState: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = yield ge("broadcastVideoState", {});
              return Number(e);
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          sendReaction: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                yield _e("sendReaction", { reaction: e });
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          raiseHand: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                yield _e("raiseHand", { isHandRaised: e });
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          notifyUiViewChange: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = yield ge("notifyUiViewChange", {
                  viewMode: e,
                  pinnedPeerJid: t != null ? t : "",
                });
                return Number(n);
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          requestVideoUpgrade: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = yield ge("requestVideoUpgrade", {});
              return Number(e);
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          getCallInfo: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = yield ge("getCallInfo", {});
              return (
                e === "" &&
                  o("WALogger").ERROR(
                    G ||
                      (G = babelHelpers.taggedTemplateLiteralLoose([
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
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield ge("acceptPeerVideo", { jid: e.jid });
                return (
                  t !== 0 &&
                    o("WALogger").ERROR(
                      z ||
                        (z = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: acceptPeerVideo: Failed with status ",
                          "",
                        ])),
                      String(t),
                    ),
                  Number(t)
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          requestPeerMute: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield ge("requestPeerMute", { peerJid: e });
                return Number(t);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          removeCallParticipant: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield ge("removeCallParticipant", { peerJid: e });
                return Number(t);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          waitingRoomAdmit: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield ge("waitingRoomAdmit", { peerJid: e });
                return Number(t);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          waitingRoomDeny: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield ge("waitingRoomDeny", { peerJid: e });
                return Number(t);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          waitingRoomAdmitAll: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = yield ge("waitingRoomAdmitAll", {});
              return Number(e);
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          waitingRoomToggleActiveCall: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield ge("waitingRoomToggleActiveCall", { enabled: e });
                return Number(t);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          startScreenShare: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = yield ge("startScreenShare", {});
              return Number(e);
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          stopScreenShare: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = yield ge("stopScreenShare", {});
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
                var n = yield ge("startVideoPreview", {
                  callId: e,
                  selfJid: t,
                });
                return Number(n);
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          requestKeyFrame: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o(
                    "WAWebVoipScreenShareStreamKey",
                  ).getBaseJidFromStreamKey(e),
                  n = yield ge(
                    o("WAWebVoipScreenShareStreamKey").isScreenShareStreamKey(e)
                      ? "requestAuxiliaryKeyFrame"
                      : "requestKeyFrame",
                    { userJid: t },
                  );
                return Number(n);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          updateParticipantsRxSubscription: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = yield ge("updateParticipantsRxSubscription", {
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
                yield _e("updateNetworkMedium", {
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
                var e = yield ge("getNetworkConditionerState", {});
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
                var e = yield ge("getShortStatisticString", {});
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
                var e = yield ge("getDebugStatisticString", {});
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
          consumeVideoCaptureFps: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              return o(
                "WAWebVoipVideoCaptureFpsTracker",
              ).consumeVideoCaptureFpsSnapshot();
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          getVoipParam: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                try {
                  var t = yield ge("getVoipParam", { paramPath: e });
                  return String(t != null ? t : "");
                } catch (e) {
                  return "";
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          isWebP2PEnabled: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                try {
                  var t = yield ge("isWebP2PEnabled", { callId: e });
                  return t === !0;
                } catch (e) {
                  return (
                    o("WALogger").WARN(
                      j ||
                        (j = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [WorkerProxy] isWebP2PEnabled RPC failed, defaulting to false: ",
                          "",
                        ])),
                      String(e),
                    ),
                    !1
                  );
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          callbacks: Re,
          inviteToCall: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n) {
                yield _e("inviteToCall", {
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
                yield _e("checkOngoingCalls", {
                  callIds: e,
                  callCreatorJids: t,
                });
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
                yield _e("sendWebP2PTransport", {
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
      if (!t) return Le;
      var Ee = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            yield Le.voipInit(e, t, n);
          },
        );
        return function (n, r, o) {
          return e.apply(this, arguments);
        };
      })();
      return babelHelpers.extends({}, Le, {
        voipInit: function (t, n, r) {
          return a.run({ selfJid: t, selfUserJid: n, selfLid: r }, function () {
            return Ee(t, n, r);
          });
        },
      });
    }
    l.createWorkerProxyStackInterface = le;
  },
  98,
);
