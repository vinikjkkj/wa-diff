__d(
  "WAWebVoipStackInterfaceWorkerProxy",
  [
    "Promise",
    "WACustomError",
    "WALogger",
    "WAWebABProps",
    "WAWebBackendApi",
    "WAWebCallUserJourneyGating",
    "WAWebCoreActionsODS",
    "WAWebCountryCodeUtils",
    "WAWebCrashAnnotations",
    "WAWebLowEndDeviceExperimentGating",
    "WAWebMLModelManager",
    "WAWebNoop",
    "WAWebODS",
    "WAWebUA",
    "WAWebVisibilityAwareTimeout",
    "WAWebVoipAudioCaptureAndPlayback",
    "WAWebVoipCallIdProvider",
    "WAWebVoipCallStateUtils",
    "WAWebVoipExperimentTargetSample",
    "WAWebVoipGatingUtils",
    "WAWebVoipInitializationBarrier",
    "WAWebVoipJsWorkerCreation",
    "WAWebVoipJsWorkerRespawnGate",
    "WAWebVoipJsonParsersWeb",
    "WAWebVoipLobbyEntryPointStore",
    "WAWebVoipLocalCallStateStore",
    "WAWebVoipLocalVideoPolicy",
    "WAWebVoipLogDrainer",
    "WAWebVoipMessagePortRpc",
    "WAWebVoipP2PConnectionManager",
    "WAWebVoipPerfOptimizations",
    "WAWebVoipPthreadGlueFailureTracker",
    "WAWebVoipPthreadHardening",
    "WAWebVoipPthreadWorkerFields",
    "WAWebVoipQplHelpers",
    "WAWebVoipRelayConnectQpl",
    "WAWebVoipRelayConnectionUtils",
    "WAWebVoipSctpConnectionManager",
    "WAWebVoipStackInterfaceWebHelpers",
    "WAWebVoipStorageInit",
    "WAWebVoipTransportFallbackTracker",
    "WAWebVoipVideoCaptureFpsTracker",
    "WAWebVoipVideoRendererInterface",
    "WAWebVoipVideoRendererRegistry",
    "WAWebVoipVideoWebCodecsRenderer",
    "WAWebVoipWaCallEnums",
    "WAWebVoipWasmArtifactRecoveryEvents",
    "WAWebVoipWasmArtifactSkewErrors",
    "WAWebVoipWasmHeapMonitor",
    "WAWebVoipWebCodecsEncoderState",
    "WAWebVoipWebTransportConnectionManager",
    "WAWebVoipWorkerProxyFieldstatsCalls",
    "WAWebVoipWorkerProxyScreeningCalls",
    "WAWebVoipWorkerProxySignalingCalls",
    "WAWebVoipWorkerProxyVoiceChatCalls",
    "WAWebWamEnumLobbyEntryPointType",
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
      X,
      Y = 9e4,
      J = 300 * 1e3,
      Z = 45 * 1e3,
      ee = 600 * 1e3,
      te = 9e4,
      ne = 300 * 1e3;
    function re() {
      return (
        "hidden=" +
        String(document.hidden) +
        " visibility=" +
        document.visibilityState +
        " focus=" +
        String(document.hasFocus())
      );
    }
    function oe(e) {
      e === "foreground"
        ? o("WAWebCoreActionsODS").logCallVoipRpcReadyTimeoutForeground()
        : o("WAWebCoreActionsODS").logCallVoipRpcReadyTimeoutAbsolute();
    }
    function ae(e) {
      e === "foreground"
        ? o("WAWebCoreActionsODS").logCallVoipRpcInitTimeoutForeground()
        : o("WAWebCoreActionsODS").logCallVoipRpcInitTimeoutAbsolute();
    }
    function ie() {
      try {
        return r("justknobx")._("1699");
      } catch (e) {
        return !1;
      }
    }
    function le() {
      try {
        return r("justknobx")._("360");
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
      var t;
      le();
      var a = se();
      o("WAWebCrashAnnotations").logVoipWorkerBootstrapModeForCrash(a);
      var i = new (r("WAWebVoipInitializationBarrier"))(),
        l = o("WAWebBackendApi").frontendSendAndReceive("initializeVoipWasm");
      o("WAWebVoipWasmArtifactRecoveryEvents").onVoipWasmReloadRequested(
        function () {
          l = o("WAWebBackendApi").frontendSendAndReceive("initializeVoipWasm");
        },
      );
      var ue = 0,
        ce = null,
        de = new (r("WAWebVoipJsWorkerRespawnGate"))(),
        me = !1,
        pe = !1,
        _e = !1;
      function fe(t, a, i, l) {
        return new (X || (X = n("Promise")))(function (n, m) {
          var p = !1,
            _ = null,
            f = !1,
            g = null,
            h = function () {
              var e = _;
              e != null &&
                (t.worker.removeMessageListener("voipRpcReady", e), (_ = null));
            },
            y = function () {
              g != null && (g.cancel(), (g = null));
            },
            C = function (n, s) {
              if (!p) {
                ((p = !0),
                  l.removeEventListener("abort", S),
                  h(),
                  y(),
                  i.close("RPC ready timeout"),
                  oe(n));
                var t =
                  n === "foreground"
                    ? "foreground timeout"
                    : "absolute timeout";
                (o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [WorkerProxy] RPC ready timeout token=",
                      " reason=",
                      " wallElapsed=",
                      "ms visibleElapsed=",
                      "ms ",
                      "",
                    ])),
                  a,
                  t,
                  s.wallMs.toFixed(1),
                  s.visibleMs.toFixed(1),
                  re(),
                ),
                  m(
                    r("err")(
                      "voip: [WorkerProxy] timeout waiting for RPC ready (token=" +
                        a +
                        ", reason=" +
                        t +
                        ")",
                    ),
                  ));
              }
            },
            b = function (t) {
              (o("WAWebCoreActionsODS").logCallVoipRpcReadyHiddenGraceStarted(),
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [WorkerProxy] RPC ready deferring teardown while hidden token=",
                      " wallElapsed=",
                      "ms ",
                      "",
                    ])),
                  a,
                  t.wallMs.toFixed(1),
                  re(),
                ),
                (g = o(
                  "WAWebVisibilityAwareTimeout",
                ).startVisibilityAwareTimeout({
                  foregroundMs: Z,
                  absoluteMs: ee,
                  onTimeout: function (n, r) {
                    (n === "foreground"
                      ? o(
                          "WAWebCoreActionsODS",
                        ).logCallVoipRpcReadyHiddenGraceExhaustedForeground()
                      : o(
                          "WAWebCoreActionsODS",
                        ).logCallVoipRpcReadyHiddenGraceExhaustedAbsolute(),
                      C("absolute", {
                        wallMs: t.wallMs + r.wallMs,
                        visibleMs: t.visibleMs + r.visibleMs,
                        wasBackgroundPaused:
                          t.wasBackgroundPaused || r.wasBackgroundPaused,
                      }));
                  },
                })));
            },
            v = o("WAWebVisibilityAwareTimeout").startVisibilityAwareTimeout({
              foregroundMs: Y,
              absoluteMs: J,
              onTimeout: function (t, n) {
                if (!p) {
                  if (ie() && t === "absolute" && document.hidden && !f) {
                    ((f = !0), b(n));
                    return;
                  }
                  C(t, n);
                }
              },
              onPause: function (t) {
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [WorkerProxy] RPC ready wait paused token=",
                      " visibleElapsed=",
                      "ms ",
                      "",
                    ])),
                  a,
                  t.visibleMs.toFixed(1),
                  re(),
                );
              },
              onResume: function (t) {
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [WorkerProxy] RPC ready wait resumed token=",
                      " visibleElapsed=",
                      "ms ",
                      "",
                    ])),
                  a,
                  t.visibleMs.toFixed(1),
                  re(),
                );
              },
            }),
            S = function () {
              p || ((p = !0), v.cancel(), h(), y(), m(l.reason));
            };
          if (l.aborted) {
            S();
            return;
          }
          (l.addEventListener("abort", S, { once: !0 }),
            (_ = t.worker.addMessageListener("voipRpcReady", function (e) {
              if (e.token === a && !p) {
                ((p = !0), l.removeEventListener("abort", S));
                var t = v.cancel();
                (h(),
                  f &&
                    o(
                      "WAWebCoreActionsODS",
                    ).logCallVoipRpcReadyHiddenGraceRecovered(),
                  y(),
                  t.wasBackgroundPaused &&
                    o(
                      "WAWebCoreActionsODS",
                    ).logCallVoipRpcReadyBackgroundPauseSuccess());
                var r = e.incomingSignalingFromHeap === !0;
                (o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [WorkerProxy] RPC ready ack token=",
                      " incomingSignalingFromHeap=",
                      " wallElapsed=",
                      "ms visibleElapsed=",
                      "ms ",
                      "",
                    ])),
                  a,
                  String(r),
                  t.wallMs.toFixed(1),
                  t.visibleMs.toFixed(1),
                  re(),
                ),
                  n({ incomingSignalingFromHeap: r }));
              }
            })));
        });
      }
      function ge(e, t, n) {
        return e.shutdown().catch(function (e) {
          (e instanceof o("WACustomError").TimeoutError
            ? r("WAWebODS").incr("web.call.voip_init.js_worker.join_timeout")
            : n == null || n(),
            o("WALogger").WARN(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [WorkerProxy] worker shutdown after ",
                  " failed: ",
                  "",
                ])),
              t,
              String(e),
            ));
        });
      }
      function he(e) {
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
      function ye(e, t) {
        if (
          (o(
            "WAWebCoreActionsODS",
          ).logCallVoipRpcReadyCleanupShutdownAttempted(),
          o("WAWebVoipPthreadWorkerFields").isPthreadWorkerLoaded(e.worker))
        ) {
          de.track(
            ge(
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
          he(t)
        ) {
          e.discardUnloadedWorker();
          return;
        }
        (o("WALogger").LOG(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
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
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WorkerProxy] worker shutdown after RPC ready failure failed: ",
                    "",
                  ])),
                String(e),
              ));
          }));
      }
      function Ce() {
        var e = ce;
        if (e != null) return e;
        var t = o(
          "WAWebVoipPthreadGlueFailureTracker",
        ).getLatchedPthreadGlueFailure();
        if (t != null) return (X || (X = n("Promise"))).reject(t);
        var i = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            de.hasPending() &&
            (o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [WorkerProxy] waiting for previous worker shutdown before respawn",
                ])),
            ),
            yield de.waitForPrevious(function () {
              return ce === i;
            }),
            ce !== i)
          )
            throw r("err")(
              "voip: JsWorkerThread lifecycle superseded while waiting",
            );
          var e = o(
            "WAWebVoipPthreadGlueFailureTracker",
          ).getLatchedPthreadGlueFailure();
          if (e != null) throw e;
          var t = yield l;
          (o("WALogger").LOG(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WorkerProxy] WASM loaded, creating JsWorkerThread",
              ])),
          ),
            t.initVoipLogging(),
            o("WAWebVoipQplHelpers").voipInitQplAnnotateWorkerBootstrapMode(a),
            o("WAWebVoipQplHelpers").voipInitQplAddPoint(
              o("WAWebVoipQplHelpers").VoipInitQplPoint.WORKER_CREATE_START,
            ));
          var n = yield o("WAWebVoipJsWorkerCreation")
            .createJsWorkerThread(
              "rpc_bootstrap",
              t,
              a ? "pre-init" : "legacy-pj",
            )
            .finally(function () {
              o("WAWebVoipQplHelpers").voipInitQplAddPoint(
                o("WAWebVoipQplHelpers").VoipInitQplPoint.WORKER_CREATE_END,
              );
            });
          o("WALogger").LOG(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WorkerProxy] JsWorkerThread created",
              ])),
          );
          var s = new MessageChannel(),
            u = new (o("WAWebVoipMessagePortRpc").MessagePortRpc)(s.port1);
          (u.start(),
            o("WAWebVoipQplHelpers").voipInitQplAddPoint(
              o("WAWebVoipQplHelpers").VoipInitQplPoint.RPC_SETUP_START,
            ));
          var c = ue++,
            d = new AbortController(),
            m = o(
              "WAWebVoipPthreadGlueFailureTracker",
            ).failFastOnPthreadGlueFailure(
              fe(n, c, u, d.signal),
              "pthread_bootstrap",
              { workerID: n.getWorkerID(), ownsThread: !0 },
            );
          (o("WALogger").LOG(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WorkerProxy] posting startVoipRpc token=",
                " ",
                "",
              ])),
            c,
            re(),
          ),
            n.worker.postMessage(
              {
                type: "cmd",
                cmd: "jsWorkerCmd",
                jsWorkerCmd: "startVoipRpc",
                rpcPort: s.port2,
                token: c,
              },
              [s.port2],
            ));
          var p;
          try {
            p = yield m.finally(function () {
              o("WAWebVoipQplHelpers").voipInitQplAddPoint(
                o("WAWebVoipQplHelpers").VoipInitQplPoint.RPC_SETUP_END,
              );
            });
          } catch (e) {
            throw (d.abort(e), u.close("RPC ready failure"), ye(n, e), e);
          }
          return (
            o("WALogger").LOG(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [WorkerProxy] RPC channel ready",
                ])),
            ),
            me &&
              ((me = !1),
              o("WAWebCoreActionsODS").logCallVoipRpcReadyRetrySuccess()),
            { jsWorker: n, rpc: u, capabilities: p }
          );
        })();
        return (
          (ce = i),
          i.catch(function (e) {
            ce === i &&
              ((ce = null),
              (me = !0),
              o("WALogger").WARN(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WorkerProxy] cleared failed worker lifecycle: ",
                    " ",
                    "",
                  ])),
                String(e),
                re(),
              ));
          }),
          i
        );
      }
      function be() {
        if (a && _e)
          throw r("err")(
            "voip: RPC attempted while worker lifecycle is shutting down",
          );
      }
      function ve(e) {
        return Se.apply(this, arguments);
      }
      function Se() {
        return (
          (Se = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            (be(), a && (yield i.wait()), be());
            var t = yield Ce(),
              n = t.capabilities,
              r = t.rpc;
            be();
            var o = e(n),
              l = o.args,
              s = o.method,
              u = o.transferList;
            r.fire({ args: l, method: s, transferList: u });
          })),
          Se.apply(this, arguments)
        );
      }
      function Re(e, t, n) {
        return ve(function () {
          return { args: t, method: e, transferList: n };
        });
      }
      function Le(e, t, n, r) {
        return Ee.apply(this, arguments);
      }
      function Ee() {
        return (
          (Ee = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n, r) {
              (be(), a && (yield i.wait()), be());
              var o = yield Ce(),
                l = o.rpc;
              return (
                be(),
                l.invoke({ args: t, method: e, timeoutMs: r, transferList: n })
              );
            },
          )),
          Ee.apply(this, arguments)
        );
      }
      function ke(e, t, n) {
        _e ||
          Re(e, t, n).catch(function (t) {
            _e ||
              pe ||
              ((pe = !0),
              o("WALogger")
                .ERROR(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [WorkerProxy] fire-and-forget RPC failed method=",
                      "",
                    ])),
                  e,
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("voip-worker-rpc-fire-failed"));
          });
      }
      function Ie(e) {
        o("WAWebVoipWebTransportConnectionManager").registerPacketHandler(
          function (t, n, r) {
            _e ||
              e.fire({
                args: { packet: t, ip: n, port: r },
                method: "handleOnTransportMessage",
                transferList: [t],
              });
          },
        );
      }
      function Te(e, t, n) {
        return De.apply(this, arguments);
      }
      function De() {
        return (
          (De = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n) {
              var r = yield Ce(),
                a = r.rpc;
              return a.invokeWithVisibilityAwareTimeout(
                e,
                t,
                {
                  foregroundMs: te,
                  absoluteMs: ne,
                  onTimeout: ae,
                  onBackgroundPauseSuccess: o("WAWebCoreActionsODS")
                    .logCallVoipRpcInitBackgroundPauseSuccess,
                },
                n,
              );
            },
          )),
          De.apply(this, arguments)
        );
      }
      function xe(e) {
        var t = ce;
        t != null &&
          ((ce = null),
          (me = !0),
          o("WAWebVoipLogDrainer").stopLogDrainer(),
          o("WALogger").WARN(
            S ||
              (S = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WorkerProxy] cleared worker lifecycle after init failure: ",
                " ",
                "",
              ])),
            String(e),
            re(),
          ),
          de.track(
            t
              .then(function (e) {
                var t = e.jsWorker,
                  n = e.rpc;
                return (n.close("VoIP init failure"), ge(t, "init failure"));
              })
              .catch(r("WAWebNoop")),
          ));
      }
      var $e = {
          onVoipReady: (t = r("WAWebNoop")),
          onCallEvent: t,
          initCaptureDriverJS: o("WAWebVoipAudioCaptureAndPlayback")
            .initCaptureDriverJS,
          startCaptureJS: o("WAWebVoipAudioCaptureAndPlayback").startCaptureJS,
          stopCaptureJS: o("WAWebVoipAudioCaptureAndPlayback").stopCaptureJS,
        },
        Pe = babelHelpers.extends(
          {
            type: "web",
            parsers: r("WAWebVoipJsonParsersWeb"),
            voipInit: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e, t, n) {
                  var i;
                  _e = !1;
                  var s = yield Ce(),
                    u = s.rpc,
                    c = yield l;
                  (o("WAWebVoipGatingUtils").resetWebTransportFallbackState(),
                    o("WALogger").LOG(
                      R ||
                        (R = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [WebTransport] voipInit wt=",
                          " (worker proxy)",
                        ])),
                      String(o("WAWebVoipGatingUtils").isWebTransportEnabled()),
                    ),
                    a || Ie(u),
                    o(
                      "WAWebVoipWebTransportConnectionManager",
                    ).registerFallbackHandler(function (e) {
                      if (
                        (o("WALogger").LOG(
                          L ||
                            (L = babelHelpers.taggedTemplateLiteralLoose([
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
                        e != null)
                      ) {
                        o(
                          "WAWebVoipTransportFallbackTracker",
                        ).markFallbackSctpStarted();
                        var t = o(
                          "WAWebVoipSctpConnectionManager",
                        ).activateWebTransportSctpWarmStandbyForRelayList(e);
                        (t &&
                          o(
                            "WAWebVoipRelayConnectQpl",
                          ).markVoipRelayConnectQplMeasured(),
                          o(
                            "WAWebVoipSctpConnectionManager",
                          ).handleRelayListUpdate(e, {
                            bypassConnectionStagger: o(
                              "WAWebVoipGatingUtils",
                            ).isWebTransportFastSetupEnabled(),
                          }));
                      } else
                        o("WALogger").WARN(
                          E ||
                            (E = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: [WebTransport] Fallback handler had no cached relay list to replay",
                            ])),
                        );
                    }),
                    o(
                      "WAWebVoipWebTransportConnectionManager",
                    ).registerHealthyHandler(
                      o("WAWebVoipSctpConnectionManager")
                        .cleanupWebTransportSctpWarmStandby,
                    ),
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
                      k ||
                        (k = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: video cap detect failed, passthrough off: ",
                          "",
                        ])),
                      e,
                    );
                  }
                  (o("WAWebVoipQplHelpers").voipInitQplAddPoint(
                    o("WAWebVoipQplHelpers").VoipInitQplPoint
                      .WEBCODECS_PROBE_END,
                  ),
                    o("WALogger").LOG(
                      I ||
                        (I = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [WorkerProxy] dec=",
                          " enc=",
                          "",
                        ])),
                      d,
                      m,
                    ),
                    o("WALogger").LOG(
                      T ||
                        (T = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [webcodec-encode] enabled=",
                          "",
                        ])),
                      m,
                    ),
                    o(
                      "WAWebVoipWebCodecsEncoderState",
                    ).setWebCodecsEncoderEnabled(m),
                    o("WALogger").LOG(
                      D ||
                        (D = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [webcodec-encode] WebCodecs encoder state ",
                          "",
                        ])),
                      m,
                    ));
                  var g = o(
                    "WAWebVoipStackInterfaceWebHelpers",
                  ).buildABPropsBag();
                  ((g.enable_passthrough_video_decoder = {
                    value: d,
                    type: "bool",
                  }),
                    (g.enable_webcodec_video_encode = {
                      value: m,
                      type: "bool",
                    }),
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
                      (i = yield o(
                        "WAWebCountryCodeUtils",
                      ).getMyCallingCode()) != null
                        ? i
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
                        Te("voipInit", {
                          selfJid: e,
                          selfUserJid: t,
                          selfLid: n,
                          selfCountryCode: h,
                          selfAbpropBucketIdList: y,
                          abProps: g,
                        }),
                        "module",
                      ),
                      a)
                    ) {
                      var C = c.registerMainThreadAfterVoipInit();
                      if (C !== 0)
                        throw r("err")(
                          "voip: failed to register main thread (" + C + ")",
                        );
                    }
                  } catch (e) {
                    throw (xe(e), e);
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
                    (pe = !1));
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
                      ke(
                        "handleOnTransportMessage",
                        { packet: e, ip: b, port: S },
                        [e],
                      );
                    }));
                  var P = !1;
                  (o(
                    "WAWebVoipP2PConnectionManager",
                  ).registerOnDataChannelStateChange(function (e) {
                    e ===
                    o("WAWebVoipRelayConnectionUtils").ConnectionState.Open
                      ? ((P = !0),
                        o("WALogger").LOG(
                          x ||
                            (x = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: P2P DataChannel opened, notifying WASM active=true",
                            ])),
                        ),
                        ke("notifyWebP2PChannelReady", {
                          active: !0,
                          useIPv6: !1,
                        }))
                      : P &&
                        ((P = !1),
                        o("WALogger").LOG(
                          $ ||
                            ($ = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: P2P DataChannel ",
                              " (was open), WASM active=false",
                            ])),
                          e,
                        ),
                        ke("notifyWebP2PChannelReady", {
                          active: !1,
                          useIPv6: !1,
                        }));
                  }),
                    a && Ie(u));
                },
              );
              function t(t, n, r) {
                return e.apply(this, arguments);
              }
              return t;
            })(),
            setHideMyIp: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  (o("WALogger").LOG(
                    P ||
                      (P = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: setHideMyIp called with hideMyIp=",
                        "",
                      ])),
                    e,
                  ),
                    yield Te("setHideMyIp", { hideMyIp: e }));
                },
              );
              function t(t) {
                return e.apply(this, arguments);
              }
              return t;
            })(),
            setOwnOtherDeviceJids: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  yield Re("setOwnOtherDeviceJids", { ownOtherDeviceJids: e });
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
                  N ||
                    (N = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: handleSignOut: cleaning up all connections",
                    ])),
                ),
                a &&
                  ((_e = !0),
                  i.reset(),
                  o("WAWebVoipP2PConnectionManager").cleanupP2PConnection()),
                (pe = !1),
                (me = !1),
                o("WAWebVoipLogDrainer").stopLogDrainer(),
                o(
                  "WAWebVoipWebTransportConnectionManager",
                ).closeAllConnections(),
                o("WAWebVoipSctpConnectionManager").cleanupAllConnections(),
                o(
                  "WAWebVoipTransportFallbackTracker",
                ).finalizeFallbackOutcome(),
                o("WAWebVoipTransportFallbackTracker").resetFallbackTracker(),
                o("WAWebVoipGatingUtils").resetWebTransportFallbackState(),
                ce != null)
              ) {
                var e = ce;
                ((ce = null),
                  de.track(
                    e
                      .then(function (e) {
                        var t = e.jsWorker,
                          n = e.rpc;
                        return (n.close("sign out"), ge(t, "sign out"));
                      })
                      .catch(function (e) {
                        o("WALogger").WARN(
                          M ||
                            (M = babelHelpers.taggedTemplateLiteralLoose([
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
                function* (e, t, n, r, a, i, s) {
                  (o("WAWebVoipGatingUtils").markCurrentCallAsGroup(!1),
                    o("WAWebVoipLobbyEntryPointStore").resetLobbyEntryPoint());
                  var u = yield l;
                  (o("WAWebMLModelManager")
                    .initMLModelsForCall(u)
                    .catch(function (e) {
                      o("WALogger").WARN(
                        w ||
                          (w = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [initMLModelsForCall] unhandled error: ",
                            "",
                          ])),
                        e,
                      );
                    }),
                    yield Re("startCall", {
                      peerJid: e.toString({ legacy: !0 }),
                      deviceJids: t,
                      callId: n,
                      useVideo: r,
                      phoneNumberJid: a,
                      isFromDialer: i,
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
                function* (e, t, n, r, a, i, s, u, c, d, m, p, _) {
                  if (
                    (o("WAWebVoipGatingUtils").markCurrentCallAsGroup(!0),
                    !o("WAWebVoipGatingUtils").isCallingEnabled())
                  ) {
                    o("WALogger").ERROR(
                      A ||
                        (A = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: startGroupCall: Web group calling is not enabled",
                        ])),
                    );
                    return;
                  }
                  o("WAWebVoipLobbyEntryPointStore").setLobbyEntryPoint(
                    p != null ? p : null,
                  );
                  var f = yield l;
                  (o("WAWebMLModelManager")
                    .initMLModelsForCall(f)
                    .catch(function (e) {
                      o("WALogger").WARN(
                        F ||
                          (F = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [initMLModelsForCall] unhandled error: ",
                            "",
                          ])),
                        e,
                      );
                    }),
                    yield Re("startGroupCall", {
                      pnUserJids: e,
                      lidUserJids: t,
                      deviceJidsCsv: n,
                      callId: r,
                      useVideo: a,
                      groupJid: i,
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
                function* (e, t, n) {
                  var r = o("WAWebVoipLocalCallStateStore").getLocalCallState();
                  (o(
                    "WAWebVoipLobbyEntryPointStore",
                  ).resetLobbyEntryPointOnAccept(
                    r === o("WAWebVoipWaCallEnums").CallState.Rejoining,
                  ),
                    o("WAWebVoipCallStateUtils").isCallIncoming(r) &&
                      o("WAWebVoipGatingUtils").isCurrentCallGroup() &&
                      o(
                        "WAWebCallUserJourneyGating",
                      ).isCallUserJourneyLoggingEnabled() &&
                      o("WAWebVoipLobbyEntryPointStore").setLobbyEntryPoint(
                        n ===
                          o("WAWebWamEnumLobbyEntryPointType")
                            .LOBBY_ENTRY_POINT_TYPE.NOTIFICATION_BUTTON
                          ? o("WAWebWamEnumLobbyEntryPointType")
                              .LOBBY_ENTRY_POINT_TYPE.NOTIFICATION_BUTTON
                          : o("WAWebWamEnumLobbyEntryPointType")
                              .LOBBY_ENTRY_POINT_TYPE.OPEN_FOR_RINGING,
                      ),
                    o("WAWebVoipCallIdProvider").resetPendingCallId(),
                    yield Re("acceptCall", {
                      isMicEnabled: e,
                      isCameraEnabled: t,
                    }));
                },
              );
              function t(t, n, r) {
                return e.apply(this, arguments);
              }
              return t;
            })(),
            rejectCallWithEndReason: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  (o("WAWebVoipLobbyEntryPointStore").resetLobbyEntryPoint(),
                    yield Re("rejectCallWithEndReason", { endReason: e }));
                },
              );
              function t(t) {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          },
          o(
            "WAWebVoipWorkerProxyScreeningCalls",
          ).createWorkerProxyScreeningCalls(Le),
          {
            endCall: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e, t) {
                  o("WAWebVoipGatingUtils").isWebTransportEnabled() &&
                    o(
                      "WAWebVoipWebTransportConnectionManager",
                    ).prepareForEndCall();
                  try {
                    yield Re("endCall", { endCallReason: e, sendTerminate: t });
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
                      o(
                        "WAWebVoipGatingUtils",
                      ).resetWebTransportFallbackState());
                  }
                },
              );
              function t(t, n) {
                return e.apply(this, arguments);
              }
              return t;
            })(),
            transferCallStart: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  return Number(yield Le("transferCallStart", e));
                },
              );
              function t(t) {
                return e.apply(this, arguments);
              }
              return t;
            })(),
            rejectCallWithoutCallContext: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e, t, n, r, o, a, i) {
                  yield Re("rejectCallWithoutCallContext", {
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
                    !o("WAWebVoipGatingUtils").isCallingEnabled())
                  ) {
                    o("WALogger").ERROR(
                      O ||
                        (O = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: joinOngoingCall: Web group calling is not enabled",
                        ])),
                    );
                    return;
                  }
                  (o("WAWebVoipLobbyEntryPointStore").setLobbyEntryPoint(
                    g != null ? g : null,
                    !_,
                  ),
                    o("WAWebVoipCallIdProvider").resetPendingCallId(),
                    yield Re("joinOngoingCall", {
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
          },
          o(
            "WAWebVoipWorkerProxyVoiceChatCalls",
          ).createWorkerProxyVoiceChatCalls(Le, function () {
            return l;
          }),
          o(
            "WAWebVoipWorkerProxyFieldstatsCalls",
          ).createWorkerProxyFieldstatsCalls(Le, function () {
            return ce != null && !_e;
          }),
          {
            simulateNativeAnr: t,
            handleDeviceJidList: t,
            previewCallLink: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e, t, n, r, a) {
                  if (!o("WAWebVoipGatingUtils").isCallingEnabled())
                    return (
                      o("WALogger").ERROR(
                        B ||
                          (B = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: previewCallLink: Call link feature is not enabled",
                          ])),
                      ),
                      -1
                    );
                  var i = 22;
                  if (e.length !== i)
                    return (
                      o("WALogger").ERROR(
                        W ||
                          (W = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: previewCallLink: invalid token length ",
                            ", expected ",
                            "",
                          ])),
                        e.length,
                        i,
                      ),
                      -1
                    );
                  var l = o(
                    "WAWebVoipLobbyEntryPointStore",
                  ).snapshotLobbyEntryPoint();
                  (o("WAWebVoipLobbyEntryPointStore").setLobbyEntryPoint(
                    n != null ? n : null,
                  ),
                    o("WAWebVoipCallIdProvider").resetPendingCallId());
                  var s = yield Le("previewCallLink", {
                    token: e,
                    videoEnabled: t,
                    lobbyEntryType: n != null ? n : 0,
                    username: r != null ? r : "",
                    videoMuted:
                      (a != null ? a : !1) ||
                      !o("WAWebVoipLocalVideoPolicy").isLocalVideoAllowed(),
                  });
                  return (
                    s !== 0 &&
                      (o("WALogger").ERROR(
                        q ||
                          (q = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: previewCallLink: failed with status ",
                            "",
                          ])),
                        String(s),
                      ),
                      o("WAWebVoipLobbyEntryPointStore").restoreLobbyEntryPoint(
                        l,
                      )),
                    Number(s)
                  );
                },
              );
              function t(t, n, r, o, a) {
                return e.apply(this, arguments);
              }
              return t;
            })(),
            joinCallLink: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  if (!o("WAWebVoipGatingUtils").isCallingEnabled()) {
                    o("WALogger").ERROR(
                      U ||
                        (U = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: joinCallLink: Call link feature is not enabled",
                        ])),
                    );
                    return;
                  }
                  yield Re("joinCallLink", {});
                },
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
            previewAndJoinCallLink: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e, t, n, r, a, i) {
                  if (!o("WAWebVoipGatingUtils").isCallingEnabled())
                    return (
                      o("WALogger").ERROR(
                        V ||
                          (V = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: previewAndJoinCallLink: call links disabled",
                          ])),
                      ),
                      -1
                    );
                  (o("WAWebVoipLobbyEntryPointStore").setLobbyEntryPoint(
                    n != null ? n : null,
                  ),
                    o("WAWebVoipCallIdProvider").resetPendingCallId());
                  var s = yield l;
                  return (
                    o("WAWebMLModelManager")
                      .initMLModelsForCall(s)
                      .catch(function (e) {
                        o("WALogger").WARN(
                          H ||
                            (H = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: [initMLModelsForCall] unhandled error: ",
                              "",
                            ])),
                          e,
                        );
                      }),
                    yield Re("previewAndJoinCallLink", {
                      token: e,
                      videoEnabled: t,
                      lobbyEntryType: n != null ? n : 0,
                      username: r != null ? r : "",
                      videoMuted:
                        (a != null ? a : !1) ||
                        !o("WAWebVoipLocalVideoPolicy").isLocalVideoAllowed(),
                      pushName: i != null ? i : "",
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
          },
          o(
            "WAWebVoipWorkerProxySignalingCalls",
          ).createWorkerProxySignalingCalls(Re, ve, function () {
            return l;
          }),
          {
            notifyDeviceIdentityChangedOrDeleted: t,
            handleOnTransportMessage: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e, t, n) {
                  yield Re(
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
                  yield Re("markRelayConnected", { ip: e, port: t });
                },
              );
              function t(t, n) {
                return e.apply(this, arguments);
              }
              return t;
            })(),
            logTsEventStringData: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e, t, n) {
                  ce != null &&
                    ke("logTsEventStringData", {
                      eventId: e,
                      eventValue: t,
                      ignoreDupe: n,
                    });
                },
              );
              function t(t, n, r) {
                return e.apply(this, arguments);
              }
              return t;
            })(),
            setCallMute: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var t = yield Le("setCallMute", { enable: e });
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
                  if (
                    !e &&
                    !o("WAWebVoipLocalVideoPolicy").isLocalVideoAllowed()
                  )
                    return (
                      o("WALogger").LOG(
                        G ||
                          (G = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: setCallVideoMute(false) blocked by local video policy",
                          ])),
                      ),
                      o("WAWebVoipLocalVideoPolicy").LOCAL_VIDEO_BLOCKED_STATUS
                    );
                  var t = yield Le("setCallVideoMute", { enable: e });
                  return Number(t);
                },
              );
              function t(t) {
                return e.apply(this, arguments);
              }
              return t;
            })(),
            videoStreamPause: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  var e = yield Le("videoStreamPause", {});
                  return Number(e);
                },
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
            videoStreamResume: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  var e = yield Le("videoStreamResume", {});
                  return Number(e);
                },
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
            broadcastVideoState: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  var e = yield Le("broadcastVideoState", {});
                  return Number(e);
                },
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
            sendReaction: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  yield Re("sendReaction", { reaction: e });
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
                  yield Re("raiseHand", { isHandRaised: e });
                },
              );
              function t(t) {
                return e.apply(this, arguments);
              }
              return t;
            })(),
            sendCapiDtmfTone: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var t = yield Le("sendCapiDtmfTone", { tone: e });
                  return Number(t);
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
                  var n = yield Le("notifyUiViewChange", {
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
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  if (!o("WAWebVoipLocalVideoPolicy").isLocalVideoAllowed())
                    return (
                      o("WALogger").LOG(
                        z ||
                          (z = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: requestVideoUpgrade blocked by local video policy",
                          ])),
                      ),
                      o("WAWebVoipLocalVideoPolicy").LOCAL_VIDEO_BLOCKED_STATUS
                    );
                  var e = yield Le("requestVideoUpgrade", {});
                  return Number(e);
                },
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
            getCallInfo: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  var e = yield Le("getCallInfo", {});
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
                },
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
            acceptPeerVideo: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var t = yield Le("acceptPeerVideo", { jid: e.jid });
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
                  var t = yield Le("requestPeerMute", { peerJid: e });
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
                  var t = yield Le("removeCallParticipant", { peerJid: e });
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
                  var t = yield Le("waitingRoomAdmit", { peerJid: e });
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
                  var t = yield Le("waitingRoomDeny", { peerJid: e });
                  return Number(t);
                },
              );
              function t(t) {
                return e.apply(this, arguments);
              }
              return t;
            })(),
            waitingRoomAdmitAll: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  var e = yield Le("waitingRoomAdmitAll", {});
                  return Number(e);
                },
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
            waitingRoomToggleActiveCall: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var t = yield Le("waitingRoomToggleActiveCall", {
                    enabled: e,
                  });
                  return Number(t);
                },
              );
              function t(t) {
                return e.apply(this, arguments);
              }
              return t;
            })(),
            startScreenShare: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  var e = yield Le("startScreenShare", {});
                  return Number(e);
                },
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
            stopScreenShare: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  var e = yield Le("stopScreenShare", {});
                  return Number(e);
                },
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
            startVideoPreview: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e, t) {
                  var n = yield Le("startVideoPreview", {
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
                  var n = yield Le(
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
                  var n = yield Le("updateParticipantsRxSubscription", {
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
                  yield Re("updateNetworkMedium", {
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
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  try {
                    var e = yield Le("getNetworkConditionerState", {});
                    if (e == null) return null;
                    var t = JSON.stringify(e);
                    return t == null ? null : JSON.parse(t);
                  } catch (e) {
                    return null;
                  }
                },
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
            getShortStatisticString: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  try {
                    var e = yield Le("getShortStatisticString", {});
                    return String(e != null ? e : "");
                  } catch (e) {
                    return "";
                  }
                },
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
            getDebugStatisticString: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  try {
                    var e = yield Le("getDebugStatisticString", {});
                    return String(e != null ? e : "");
                  } catch (e) {
                    return "";
                  }
                },
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
            consumeVideoCaptureFps: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  return o(
                    "WAWebVoipVideoCaptureFpsTracker",
                  ).consumeVideoCaptureFpsSnapshot();
                },
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
            getVoipParam: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  try {
                    var t = yield Le("getVoipParam", { paramPath: e });
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
                    var t = yield Le("isWebP2PEnabled", { callId: e });
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
            callbacks: $e,
            inviteToCall: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e, t, n) {
                  yield Re("inviteToCall", {
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
                  yield Re("sendWave", {
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
                  yield Re("checkOngoingCalls", {
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
                  yield Re("sendWebP2PTransport", {
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
          },
        );
      if (!a) return Pe;
      var Ne = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            yield Pe.voipInit(e, t, n);
          },
        );
        return function (n, r, o) {
          return e.apply(this, arguments);
        };
      })();
      return babelHelpers.extends({}, Pe, {
        voipInit: function (t, n, r) {
          return i.run({ selfJid: t, selfUserJid: n, selfLid: r }, function () {
            return Ne(t, n, r);
          });
        },
      });
    }
    l.createWorkerProxyStackInterface = ue;
  },
  98,
);
