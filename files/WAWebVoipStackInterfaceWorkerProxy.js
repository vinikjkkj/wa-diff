__d(
  "WAWebVoipStackInterfaceWorkerProxy",
  [
    "Promise",
    "WABase64",
    "WACustomError",
    "WALogger",
    "WAWap",
    "WAWebABProps",
    "WAWebBackendApi",
    "WAWebCoreActionsODS",
    "WAWebCountryCodeUtils",
    "WAWebCrashAnnotations",
    "WAWebLowEndDeviceExperimentGating",
    "WAWebMLModelManager",
    "WAWebNoop",
    "WAWebUA",
    "WAWebVisibilityAwareTimeout",
    "WAWebVoipABPropConfig",
    "WAWebVoipAudioCaptureAndPlayback",
    "WAWebVoipCallIdProvider",
    "WAWebVoipExperimentTargetSample",
    "WAWebVoipGatingUtils",
    "WAWebVoipInitializationBarrier",
    "WAWebVoipJsWorkerRespawnGate",
    "WAWebVoipJsWorkerThread",
    "WAWebVoipJsonParsersWeb",
    "WAWebVoipLobbyEntryPointStore",
    "WAWebVoipLogDrainer",
    "WAWebVoipMessagePortRpc",
    "WAWebVoipP2PConnectionManager",
    "WAWebVoipPerfOptimizations",
    "WAWebVoipPthreadGlueFailureTracker",
    "WAWebVoipPthreadHardening",
    "WAWebVoipPthreadWorkerFields",
    "WAWebVoipQplHelpers",
    "WAWebVoipRelayConnectionUtils",
    "WAWebVoipRelayOverrides",
    "WAWebVoipSctpConnectionManager",
    "WAWebVoipStorageInit",
    "WAWebVoipTransportFallbackTracker",
    "WAWebVoipVideoCaptureFpsTracker",
    "WAWebVoipVideoRendererInterface",
    "WAWebVoipVideoRendererRegistry",
    "WAWebVoipVideoWebCodecsRenderer",
    "WAWebVoipWasmArtifactSkewErrors",
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
      K,
      Q,
      X;
    function Y() {
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
    var J = 9e4,
      Z = 300 * 1e3,
      ee = 45 * 1e3,
      te = 600 * 1e3,
      ne = 9e4,
      re = 300 * 1e3;
    function oe() {
      return (
        "hidden=" +
        String(document.hidden) +
        " visibility=" +
        document.visibilityState +
        " focus=" +
        String(document.hasFocus())
      );
    }
    function ae(e) {
      e === "foreground"
        ? o("WAWebCoreActionsODS").logCallVoipRpcReadyTimeoutForeground()
        : o("WAWebCoreActionsODS").logCallVoipRpcReadyTimeoutAbsolute();
    }
    function ie(e) {
      e === "foreground"
        ? o("WAWebCoreActionsODS").logCallVoipRpcInitTimeoutForeground()
        : o("WAWebCoreActionsODS").logCallVoipRpcInitTimeoutAbsolute();
    }
    function le() {
      try {
        return r("justknobx")._("1699");
      } catch (e) {
        return !1;
      }
    }
    function se() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_voip_pre_init_worker_bootstrap",
      );
    }
    function ue() {
      var e,
        t = se();
      o("WAWebCrashAnnotations").logVoipWorkerBootstrapModeForCrash(t);
      var a = new (r("WAWebVoipInitializationBarrier"))(),
        i = o("WAWebBackendApi").frontendSendAndReceive("initializeVoipWasm"),
        l = 0,
        ue = null,
        ce = new (r("WAWebVoipJsWorkerRespawnGate"))(),
        de = !1,
        me = !1,
        pe = !1;
      function _e(e, t, a, i) {
        return new (X || (X = n("Promise")))(function (n, l) {
          var p = !1,
            _ = null,
            f = !1,
            g = null,
            h = function () {
              var t = _;
              t != null &&
                (e.worker.removeMessageListener("voipRpcReady", t), (_ = null));
            },
            y = function () {
              g != null && (g.cancel(), (g = null));
            },
            C = function (n, u) {
              if (!p) {
                ((p = !0),
                  i.removeEventListener("abort", S),
                  h(),
                  y(),
                  a.close("RPC ready timeout"),
                  ae(n));
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
                  oe(),
                ),
                  l(
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
            b = function (n) {
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
                  oe(),
                ),
                (g = o(
                  "WAWebVisibilityAwareTimeout",
                ).startVisibilityAwareTimeout({
                  foregroundMs: ee,
                  absoluteMs: te,
                  onTimeout: function (t, r) {
                    (t === "foreground"
                      ? o(
                          "WAWebCoreActionsODS",
                        ).logCallVoipRpcReadyHiddenGraceExhaustedForeground()
                      : o(
                          "WAWebCoreActionsODS",
                        ).logCallVoipRpcReadyHiddenGraceExhaustedAbsolute(),
                      C("absolute", {
                        wallMs: n.wallMs + r.wallMs,
                        visibleMs: n.visibleMs + r.visibleMs,
                        wasBackgroundPaused:
                          n.wasBackgroundPaused || r.wasBackgroundPaused,
                      }));
                  },
                })));
            },
            v = o("WAWebVisibilityAwareTimeout").startVisibilityAwareTimeout({
              foregroundMs: J,
              absoluteMs: Z,
              onTimeout: function (t, n) {
                if (!p) {
                  if (le() && t === "absolute" && document.hidden && !f) {
                    ((f = !0), b(n));
                    return;
                  }
                  C(t, n);
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
                  oe(),
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
                  oe(),
                );
              },
            }),
            S = function () {
              p || ((p = !0), v.cancel(), h(), y(), l(i.reason));
            };
          if (i.aborted) {
            S();
            return;
          }
          (i.addEventListener("abort", S, { once: !0 }),
            (_ = e.worker.addMessageListener("voipRpcReady", function (e) {
              if (e.token === t && !p) {
                ((p = !0), i.removeEventListener("abort", S));
                var r = v.cancel();
                (h(),
                  f &&
                    o(
                      "WAWebCoreActionsODS",
                    ).logCallVoipRpcReadyHiddenGraceRecovered(),
                  y(),
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
                    oe(),
                  ),
                  n());
              }
            })));
        });
      }
      function fe(e, t, n) {
        return e.shutdown().catch(function (e) {
          (e instanceof o("WACustomError").TimeoutError
            ? o("WAWebCoreActionsODS").logCallVoipInitJsWorkerJoinTimeout()
            : n == null || n(),
            o("WALogger").WARN(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [WorkerProxy] worker shutdown after ",
                  " failed: ",
                  "",
                ])),
              t,
              String(e),
            ));
        });
      }
      function ge(e) {
        var t = e instanceof Error ? e.message : String(e);
        return (
          t.includes(
            o("WAWebVoipWasmArtifactSkewErrors")
              .PINNED_WORKER_GLUE_LOAD_FAILED_TOKEN,
          ) ||
          t.includes(
            o("WAWebVoipWasmArtifactSkewErrors")
              .WORKER_GLUE_BUILD_MISMATCH_TOKEN,
          )
        );
      }
      function he(e, t) {
        if (
          (o(
            "WAWebCoreActionsODS",
          ).logCallVoipRpcReadyCleanupShutdownAttempted(),
          o("WAWebVoipPthreadWorkerFields").isPthreadWorkerLoaded(e.worker))
        ) {
          ce.track(
            fe(
              e,
              "RPC ready failure",
              o("WAWebCoreActionsODS").logCallVoipRpcReadyCleanupShutdownFailed,
            ),
          );
          return;
        }
        if (
          o(
            "WAWebVoipPthreadHardening",
          ).isVoipWorkerLifecycleHardeningEnabled() &&
          ge(t)
        ) {
          e.discardUnloadedWorker();
          return;
        }
        (o("WALogger").LOG(
          _ ||
            (_ = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [WorkerProxy] worker ",
              " had not loaded at RPC-ready failure; joining it without holding the retry",
            ])),
          String(e.getWorkerID()),
        ),
          e.shutdown().catch(function (e) {
            (e instanceof o("WACustomError").TimeoutError ||
              o(
                "WAWebCoreActionsODS",
              ).logCallVoipRpcReadyCleanupShutdownFailed(),
              o("WALogger").WARN(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WorkerProxy] worker shutdown after RPC ready failure failed: ",
                    "",
                  ])),
                String(e),
              ));
          }));
      }
      function ye() {
        var e = ue;
        if (e != null) return e;
        var a = o(
          "WAWebVoipPthreadGlueFailureTracker",
        ).getLatchedPthreadGlueFailure();
        if (a != null) return (X || (X = n("Promise"))).reject(a);
        var s = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            ce.hasPending() &&
            (o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [WorkerProxy] waiting for previous worker shutdown before respawn",
                ])),
            ),
            yield ce.waitForPrevious(function () {
              return ue === s;
            }),
            ue !== s)
          )
            throw r("err")(
              "voip: JsWorkerThread lifecycle superseded while waiting",
            );
          var e = o(
            "WAWebVoipPthreadGlueFailureTracker",
          ).getLatchedPthreadGlueFailure();
          if (e != null) throw e;
          var n = yield i;
          (o("WALogger").LOG(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WorkerProxy] WASM loaded, creating JsWorkerThread",
              ])),
          ),
            n.initVoipLogging(),
            o("WAWebVoipQplHelpers").voipInitQplAnnotateWorkerBootstrapMode(t),
            o("WAWebVoipQplHelpers").voipInitQplAddPoint(
              o("WAWebVoipQplHelpers").VoipInitQplPoint.WORKER_CREATE_START,
            ));
          var a = yield r("WAWebVoipJsWorkerThread")
            .create(n, t ? "pre-init" : "legacy-pj")
            .finally(function () {
              o("WAWebVoipQplHelpers").voipInitQplAddPoint(
                o("WAWebVoipQplHelpers").VoipInitQplPoint.WORKER_CREATE_END,
              );
            });
          o("WALogger").LOG(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WorkerProxy] JsWorkerThread created",
              ])),
          );
          var u = new MessageChannel(),
            c = new (o("WAWebVoipMessagePortRpc").MessagePortRpc)(u.port1);
          (c.start(),
            o("WAWebVoipQplHelpers").voipInitQplAddPoint(
              o("WAWebVoipQplHelpers").VoipInitQplPoint.RPC_SETUP_START,
            ));
          var d = l++,
            m = new AbortController(),
            p = o(
              "WAWebVoipPthreadGlueFailureTracker",
            ).failFastOnPthreadGlueFailure(
              _e(a, d, c, m.signal),
              "pthread_bootstrap",
              { workerID: a.getWorkerID(), ownsThread: !0 },
            );
          (o("WALogger").LOG(
            C ||
              (C = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WorkerProxy] posting startVoipRpc token=",
                " ",
                "",
              ])),
            d,
            oe(),
          ),
            a.worker.postMessage(
              {
                type: "cmd",
                cmd: "jsWorkerCmd",
                jsWorkerCmd: "startVoipRpc",
                rpcPort: u.port2,
                token: d,
              },
              [u.port2],
            ));
          try {
            yield p.finally(function () {
              o("WAWebVoipQplHelpers").voipInitQplAddPoint(
                o("WAWebVoipQplHelpers").VoipInitQplPoint.RPC_SETUP_END,
              );
            });
          } catch (e) {
            throw (m.abort(e), c.close("RPC ready failure"), he(a, e), e);
          }
          return (
            o("WALogger").LOG(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [WorkerProxy] RPC channel ready",
                ])),
            ),
            de &&
              ((de = !1),
              o("WAWebCoreActionsODS").logCallVoipRpcReadyRetrySuccess()),
            { jsWorker: a, rpc: c }
          );
        })();
        return (
          (ue = s),
          s.catch(function (e) {
            ue === s &&
              ((ue = null),
              (de = !0),
              o("WALogger").WARN(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WorkerProxy] cleared failed worker lifecycle: ",
                    " ",
                    "",
                  ])),
                String(e),
                oe(),
              ));
          }),
          s
        );
      }
      function Ce() {
        if (t && pe)
          throw r("err")(
            "voip: RPC attempted while worker lifecycle is shutting down",
          );
      }
      function be(e, t, n) {
        return ve.apply(this, arguments);
      }
      function ve() {
        return (
          (ve = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, n, r) {
              (Ce(), t && (yield a.wait()), Ce());
              var o = yield ye(),
                i = o.rpc;
              (Ce(), i.fire({ args: n, method: e, transferList: r }));
            },
          )),
          ve.apply(this, arguments)
        );
      }
      function Se(e, t, n) {
        return Re.apply(this, arguments);
      }
      function Re() {
        return (
          (Re = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, n, r) {
              (Ce(), t && (yield a.wait()), Ce());
              var o = yield ye(),
                i = o.rpc;
              return (Ce(), i.invoke(e, n, r));
            },
          )),
          Re.apply(this, arguments)
        );
      }
      function Le(e, t, n) {
        pe ||
          be(e, t, n).catch(function (t) {
            pe ||
              me ||
              ((me = !0),
              o("WALogger")
                .ERROR(
                  S ||
                    (S = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [WorkerProxy] fire-and-forget RPC failed method=",
                      "",
                    ])),
                  e,
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("voip-worker-rpc-fire-failed"));
          });
      }
      function Ee(e) {
        o("WAWebVoipWebTransportConnectionManager").registerPacketHandler(
          function (t, n, r) {
            pe ||
              e.fire({
                args: { packet: t, ip: n, port: r },
                method: "handleOnTransportMessage",
                transferList: [t],
              });
          },
        );
      }
      function ke(e, t, n) {
        return Ie.apply(this, arguments);
      }
      function Ie() {
        return (
          (Ie = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n) {
              var r = yield ye(),
                a = r.rpc;
              return a.invokeWithVisibilityAwareTimeout(
                e,
                t,
                {
                  foregroundMs: ne,
                  absoluteMs: re,
                  onTimeout: ie,
                  onBackgroundPauseSuccess: o("WAWebCoreActionsODS")
                    .logCallVoipRpcInitBackgroundPauseSuccess,
                },
                n,
              );
            },
          )),
          Ie.apply(this, arguments)
        );
      }
      function Te(e) {
        var t = ue;
        t != null &&
          ((ue = null),
          (de = !0),
          o("WAWebVoipLogDrainer").stopLogDrainer(),
          o("WALogger").WARN(
            R ||
              (R = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WorkerProxy] cleared worker lifecycle after init failure: ",
                " ",
                "",
              ])),
            String(e),
            oe(),
          ),
          ce.track(
            t
              .then(function (e) {
                var t = e.jsWorker,
                  n = e.rpc;
                return (n.close("VoIP init failure"), fe(t, "init failure"));
              })
              .catch(r("WAWebNoop")),
          ));
      }
      var De = {
          onVoipReady: (e = r("WAWebNoop")),
          onCallEvent: e,
          initCaptureDriverJS: o("WAWebVoipAudioCaptureAndPlayback")
            .initCaptureDriverJS,
          startCaptureJS: o("WAWebVoipAudioCaptureAndPlayback").startCaptureJS,
          stopCaptureJS: o("WAWebVoipAudioCaptureAndPlayback").stopCaptureJS,
        },
        xe = {
          type: "web",
          parsers: r("WAWebVoipJsonParsersWeb"),
          voipInit: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, n, a) {
                var l;
                pe = !1;
                var s = yield ye(),
                  u = s.rpc,
                  c = yield i;
                (o("WAWebVoipGatingUtils").resetWebTransportFallbackState(),
                  o("WALogger").LOG(
                    L ||
                      (L = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [WebTransport] voipInit wt=",
                        " (worker proxy)",
                      ])),
                    String(o("WAWebVoipGatingUtils").isWebTransportEnabled()),
                  ),
                  t || Ee(u),
                  o(
                    "WAWebVoipWebTransportConnectionManager",
                  ).registerFallbackHandler(function (e) {
                    (o("WALogger").LOG(
                      E ||
                        (E = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [WebTransport] Falling back to SCTP after connect failure (worker proxy)",
                        ])),
                    ),
                      o(
                        "WAWebVoipSctpConnectionManager",
                      ).markSctpEnteredViaWebTransportFallback(),
                      o("WAWebVoipGatingUtils").markWebTransportFellBack(),
                      o(
                        "WAWebVoipTransportFallbackTracker",
                      ).markFallbackTriggered(),
                      o(
                        "WAWebVoipWebTransportConnectionManager",
                      ).closeAllConnections(!1),
                      e != null
                        ? (o(
                            "WAWebVoipTransportFallbackTracker",
                          ).markFallbackSctpStarted(),
                          o(
                            "WAWebVoipSctpConnectionManager",
                          ).handleRelayListUpdate(e, {
                            bypassConnectionStagger: o(
                              "WAWebVoipGatingUtils",
                            ).isWebTransportFastSetupEnabled(),
                          }))
                        : o("WALogger").WARN(
                            k ||
                              (k = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [WebTransport] Fallback handler had no cached relay list to replay",
                              ])),
                          ));
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
                    I ||
                      (I = babelHelpers.taggedTemplateLiteralLoose([
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
                    T ||
                      (T = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [WorkerProxy] dec=",
                        " enc=",
                        "",
                      ])),
                    d,
                    m,
                  ),
                  o("WALogger").LOG(
                    D ||
                      (D = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [webcodec-encode] enabled=",
                        "",
                      ])),
                    m,
                  ),
                  o(
                    "WAWebVoipWebCodecsEncoderState",
                  ).setWebCodecsEncoderEnabled(m),
                  o("WALogger").LOG(
                    x ||
                      (x = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [webcodec-encode] WebCodecs encoder state ",
                        "",
                      ])),
                    m,
                  ));
                var g = Y();
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
                      : "",
                  y = o(
                    "WAWebVoipExperimentTargetSample",
                  ).getExperimentTargetSampleExpoKeys();
                o("WAWebVoipQplHelpers").voipInitQplAddPoint(
                  o("WAWebVoipQplHelpers").VoipInitQplPoint
                    .VOIP_STACK_INIT_START,
                );
                try {
                  if (
                    (yield o(
                      "WAWebVoipPthreadGlueFailureTracker",
                    ).failFastOnPthreadGlueFailure(
                      ke("voipInit", {
                        selfJid: e,
                        selfUserJid: n,
                        selfLid: a,
                        selfCountryCode: h,
                        selfAbpropBucketIdList: y,
                        abProps: g,
                      }),
                      "module",
                    ),
                    t)
                  ) {
                    var C = c.registerMainThreadAfterVoipInit();
                    if (C !== 0)
                      throw r("err")(
                        "voip: failed to register main thread (" + C + ")",
                      );
                  }
                } catch (e) {
                  throw (Te(e), e);
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
                  (me = !1));
                var b = c.getWebP2PVirtualIpv4(),
                  v = c.getWebP2PVirtualIpv6(),
                  S = c.getWebP2PVirtualPort();
                (o("WAWebVoipP2PConnectionManager").initP2PVirtualAddresses(
                  b,
                  v,
                  S,
                ),
                  o(
                    "WAWebVoipP2PConnectionManager",
                  ).registerOnDataChannelMessage(function (e) {
                    Le(
                      "handleOnTransportMessage",
                      { packet: e, ip: b, port: S },
                      [e],
                    );
                  }));
                var R = !1;
                (o(
                  "WAWebVoipP2PConnectionManager",
                ).registerOnDataChannelStateChange(function (e) {
                  e === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open
                    ? ((R = !0),
                      o("WALogger").LOG(
                        $ ||
                          ($ = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: P2P DataChannel opened, notifying WASM active=true",
                          ])),
                      ),
                      Le("notifyWebP2PChannelReady", {
                        active: !0,
                        useIPv6: !1,
                      }))
                    : R &&
                      ((R = !1),
                      o("WALogger").LOG(
                        P ||
                          (P = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: P2P DataChannel ",
                            " (was open), WASM active=false",
                          ])),
                        e,
                      ),
                      Le("notifyWebP2PChannelReady", {
                        active: !1,
                        useIPv6: !1,
                      }));
                }),
                  t && Ee(u));
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
                  N ||
                    (N = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: setHideMyIp called with hideMyIp=",
                      "",
                    ])),
                  e,
                ),
                  yield ke("setHideMyIp", { hideMyIp: e }));
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
                M ||
                  (M = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: handleSignOut: cleaning up all connections",
                  ])),
              ),
              t &&
                ((pe = !0),
                a.reset(),
                o("WAWebVoipP2PConnectionManager").cleanupP2PConnection()),
              (me = !1),
              (de = !1),
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
              ue != null)
            ) {
              var e = ue;
              ((ue = null),
                ce.track(
                  e
                    .then(function (e) {
                      var t = e.jsWorker,
                        n = e.rpc;
                      return (n.close("sign out"), fe(t, "sign out"));
                    })
                    .catch(function (e) {
                      o("WALogger").WARN(
                        w ||
                          (w = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [handleSignOut] worker shutdown error: ",
                            "",
                          ])),
                        e,
                      );
                    }),
                ));
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
                      A ||
                        (A = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [initMLModelsForCall] unhandled error: ",
                          "",
                        ])),
                      e,
                    );
                  }),
                  yield be("startCall", {
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
                    F ||
                      (F = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: startGroupCall: Web group calling is not enabled",
                      ])),
                  );
                  return;
                }
                o("WAWebVoipLobbyEntryPointStore").setLobbyEntryPoint(
                  p != null ? p : null,
                );
                var f = yield i;
                (o("WAWebMLModelManager")
                  .initMLModelsForCall(f)
                  .catch(function (e) {
                    o("WALogger").WARN(
                      O ||
                        (O = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [initMLModelsForCall] unhandled error: ",
                          "",
                        ])),
                      e,
                    );
                  }),
                  yield be("startGroupCall", {
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
                  o("WAWebVoipCallIdProvider").resetPendingCallId(),
                  yield be("acceptCall", {
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
              (o("WAWebVoipLobbyEntryPointStore").resetLobbyEntryPoint(),
                yield be("rejectCall", {}));
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
                  yield be("endCall", { endCallReason: e, sendTerminate: t });
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
                yield be("rejectCallWithoutCallContext", {
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
                    B ||
                      (B = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: joinOngoingCall: Web group calling is not enabled",
                      ])),
                  );
                  return;
                }
                (o("WAWebVoipLobbyEntryPointStore").setLobbyEntryPoint(
                  g != null ? g : null,
                ),
                  o("WAWebVoipCallIdProvider").resetPendingCallId(),
                  yield be("joinOngoingCall", {
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
                      W ||
                        (W = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: previewCallLink: Call link feature is not enabled",
                        ])),
                    ),
                    -1
                  );
                var i = 22;
                if (e.length !== i)
                  return (
                    o("WALogger").ERROR(
                      q ||
                        (q = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: previewCallLink: invalid token length ",
                          ", expected ",
                          "",
                        ])),
                      e.length,
                      i,
                    ),
                    -1
                  );
                (o("WAWebVoipLobbyEntryPointStore").setLobbyEntryPoint(
                  n != null ? n : null,
                ),
                  o("WAWebVoipCallIdProvider").resetPendingCallId());
                var l = yield Se("previewCallLink", {
                  token: e,
                  videoEnabled: t,
                  lobbyEntryType: n != null ? n : 0,
                  username: r != null ? r : "",
                  videoMuted: a != null ? a : !1,
                });
                return (
                  l !== 0 &&
                    (o("WALogger").ERROR(
                      U ||
                        (U = babelHelpers.taggedTemplateLiteralLoose([
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
                  V ||
                    (V = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: joinCallLink: Call link feature is not enabled",
                    ])),
                );
                return;
              }
              yield be("joinCallLink", {});
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          previewAndJoinCallLink: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n, r, a, l) {
                if (!o("WAWebVoipGatingUtils").callLinksEnabled())
                  return (
                    o("WALogger").ERROR(
                      H ||
                        (H = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: previewAndJoinCallLink: call links disabled",
                        ])),
                    ),
                    -1
                  );
                (o("WAWebVoipLobbyEntryPointStore").setLobbyEntryPoint(
                  n != null ? n : null,
                ),
                  o("WAWebVoipCallIdProvider").resetPendingCallId());
                var s = yield i;
                return (
                  o("WAWebMLModelManager")
                    .initMLModelsForCall(s)
                    .catch(function (e) {
                      o("WALogger").WARN(
                        G ||
                          (G = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [initMLModelsForCall] unhandled error: ",
                            "",
                          ])),
                        e,
                      );
                    }),
                  yield be("previewAndJoinCallLink", {
                    token: e,
                    videoEnabled: t,
                    lobbyEntryType: n != null ? n : 0,
                    username: r != null ? r : "",
                    videoMuted: a != null ? a : !1,
                    pushName: l != null ? l : "",
                  }),
                  0
                );
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
                      z ||
                        (z = babelHelpers.taggedTemplateLiteralLoose([
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
                yield be("handleIncomingSignalingOffer", {
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
                yield be("handleIncomingSignalingMessage", {
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
                yield be("handleIncomingSignalingAck", {
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
                yield be("handleIncomingSignalingReceipt", {
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
                yield be("resendOfferOnDecryptionFailure", {
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
                yield be("resendEncRekeyRetry", { peerJid: e, retryCount: t });
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
                yield be(
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
                yield be("markRelayConnected", { ip: e, port: t });
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
                var t = yield Se("setCallMute", { enable: e });
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
                var t = yield Se("setCallVideoMute", { enable: e });
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
              var e = yield Se("videoStreamPause", {});
              return Number(e);
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          videoStreamResume: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = yield Se("videoStreamResume", {});
              return Number(e);
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          broadcastVideoState: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = yield Se("broadcastVideoState", {});
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
                yield be("sendReaction", { reaction: e });
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
                yield be("raiseHand", { isHandRaised: e });
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
                var n = yield Se("notifyUiViewChange", {
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
              var e = yield Se("requestVideoUpgrade", {});
              return Number(e);
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          getCallInfo: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = yield Se("getCallInfo", {});
              return (
                e === "" &&
                  o("WALogger").ERROR(
                    j ||
                      (j = babelHelpers.taggedTemplateLiteralLoose([
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
                var t = yield Se("acceptPeerVideo", { jid: e.jid });
                return (
                  t !== 0 &&
                    o("WALogger").ERROR(
                      K ||
                        (K = babelHelpers.taggedTemplateLiteralLoose([
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
                var t = yield Se("requestPeerMute", { peerJid: e });
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
                var t = yield Se("removeCallParticipant", { peerJid: e });
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
                var t = yield Se("waitingRoomAdmit", { peerJid: e });
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
                var t = yield Se("waitingRoomDeny", { peerJid: e });
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
              var e = yield Se("waitingRoomAdmitAll", {});
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
                var t = yield Se("waitingRoomToggleActiveCall", { enabled: e });
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
              var e = yield Se("startScreenShare", {});
              return Number(e);
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          stopScreenShare: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = yield Se("stopScreenShare", {});
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
                var n = yield Se("startVideoPreview", {
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
              function* (e, t) {
                var n = yield Se(
                  t ? "requestAuxiliaryKeyFrame" : "requestKeyFrame",
                  { userJid: e.toJid() },
                );
                return Number(n);
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          updateParticipantsRxSubscription: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = yield Se("updateParticipantsRxSubscription", {
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
                yield be("updateNetworkMedium", {
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
                var e = yield Se("getNetworkConditionerState", {});
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
                var e = yield Se("getShortStatisticString", {});
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
                var e = yield Se("getDebugStatisticString", {});
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
                  var t = yield Se("getVoipParam", { paramPath: e });
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
                  var t = yield Se("isWebP2PEnabled", { callId: e });
                  return t === !0;
                } catch (e) {
                  return (
                    o("WALogger").WARN(
                      Q ||
                        (Q = babelHelpers.taggedTemplateLiteralLoose([
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
          callbacks: De,
          inviteToCall: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n) {
                yield be("inviteToCall", {
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
          sendWave: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n) {
                yield be("sendWave", {
                  participantPnUserJid: e,
                  participantLidUserJid: t,
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
                yield be("checkOngoingCalls", {
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
                yield be("sendWebP2PTransport", {
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
      if (!t) return xe;
      var $e = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            yield xe.voipInit(e, t, n);
          },
        );
        return function (n, r, o) {
          return e.apply(this, arguments);
        };
      })();
      return babelHelpers.extends({}, xe, {
        voipInit: function (t, n, r) {
          return a.run({ selfJid: t, selfUserJid: n, selfLid: r }, function () {
            return $e(t, n, r);
          });
        },
      });
    }
    l.createWorkerProxyStackInterface = ue;
  },
  98,
);
