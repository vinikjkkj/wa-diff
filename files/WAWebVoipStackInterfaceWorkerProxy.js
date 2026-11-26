__d(
  "WAWebVoipStackInterfaceWorkerProxy",
  [
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
    "WAWebVoipSctpFallbackFamilyOutcome",
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
      X = 9e4,
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
      try {
        return r("justknobx")._("360");
      } catch (e) {
        return !1;
      }
    }
    function le() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_voip_pre_init_worker_bootstrap",
      );
    }
    function se() {
      var t;
      ie();
      var n = le();
      o("WAWebCrashAnnotations").logVoipWorkerBootstrapModeForCrash(n);
      var a = new (r("WAWebVoipInitializationBarrier"))(),
        i = o("WAWebBackendApi").frontendSendAndReceive("initializeVoipWasm");
      o("WAWebVoipWasmArtifactRecoveryEvents").onVoipWasmReloadRequested(
        function () {
          i = o("WAWebBackendApi").frontendSendAndReceive("initializeVoipWasm");
        },
      );
      var l = 0,
        se = null,
        ue = new (r("WAWebVoipJsWorkerRespawnGate"))(),
        ce = !1,
        de = !1,
        me = !1;
      function pe(t, n, a, i) {
        return new Promise(function (l, m) {
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
            C = function (l, s) {
              if (!p) {
                ((p = !0),
                  i.removeEventListener("abort", S),
                  h(),
                  y(),
                  a.close("RPC ready timeout"),
                  re(l));
                var t =
                  l === "foreground"
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
                  n,
                  t,
                  s.wallMs.toFixed(1),
                  s.visibleMs.toFixed(1),
                  ne(),
                ),
                  m(
                    r("err")(
                      "voip: [WorkerProxy] timeout waiting for RPC ready (token=" +
                        n +
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
                  n,
                  t.wallMs.toFixed(1),
                  ne(),
                ),
                (g = o(
                  "WAWebVisibilityAwareTimeout",
                ).startVisibilityAwareTimeout({
                  foregroundMs: J,
                  absoluteMs: Z,
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
              foregroundMs: X,
              absoluteMs: Y,
              onTimeout: function (t, n) {
                if (!p) {
                  if (ae() && t === "absolute" && document.hidden && !f) {
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
                  n,
                  t.visibleMs.toFixed(1),
                  ne(),
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
                  n,
                  t.visibleMs.toFixed(1),
                  ne(),
                );
              },
            }),
            S = function () {
              p || ((p = !0), v.cancel(), h(), y(), m(i.reason));
            };
          if (i.aborted) {
            S();
            return;
          }
          (i.addEventListener("abort", S, { once: !0 }),
            (_ = t.worker.addMessageListener("voipRpcReady", function (e) {
              if (e.token === n && !p) {
                ((p = !0), i.removeEventListener("abort", S));
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
                  n,
                  String(r),
                  t.wallMs.toFixed(1),
                  t.visibleMs.toFixed(1),
                  ne(),
                ),
                  l({ incomingSignalingFromHeap: r }));
              }
            })));
        });
      }
      function _e(e, t, n) {
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
      function fe(e) {
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
      function ge(e, t) {
        if (
          (o(
            "WAWebCoreActionsODS",
          ).logCallVoipRpcReadyCleanupShutdownAttempted(),
          o("WAWebVoipPthreadWorkerFields").isPthreadWorkerLoaded(e.worker))
        ) {
          ue.track(
            _e(
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
          fe(t)
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
      function he() {
        var e = se;
        if (e != null) return e;
        var t = o(
          "WAWebVoipPthreadGlueFailureTracker",
        ).getLatchedPthreadGlueFailure();
        if (t != null) return Promise.reject(t);
        var a = (async function () {
          if (
            ue.hasPending() &&
            (o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [WorkerProxy] waiting for previous worker shutdown before respawn",
                ])),
            ),
            await ue.waitForPrevious(function () {
              return se === a;
            }),
            se !== a)
          )
            throw r("err")(
              "voip: JsWorkerThread lifecycle superseded while waiting",
            );
          var e = o(
            "WAWebVoipPthreadGlueFailureTracker",
          ).getLatchedPthreadGlueFailure();
          if (e != null) throw e;
          var t = await i;
          (o("WALogger").LOG(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WorkerProxy] WASM loaded, creating JsWorkerThread",
              ])),
          ),
            t.initVoipLogging(),
            o("WAWebVoipQplHelpers").voipInitQplAnnotateWorkerBootstrapMode(n),
            o("WAWebVoipQplHelpers").voipInitQplAddPoint(
              o("WAWebVoipQplHelpers").VoipInitQplPoint.WORKER_CREATE_START,
            ));
          var s = await o("WAWebVoipJsWorkerCreation")
            .createJsWorkerThread(
              "rpc_bootstrap",
              t,
              n ? "pre-init" : "legacy-pj",
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
              pe(s, d, c, m.signal),
              "pthread_bootstrap",
              { workerID: s.getWorkerID(), ownsThread: !0 },
            );
          (o("WALogger").LOG(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WorkerProxy] posting startVoipRpc token=",
                " ",
                "",
              ])),
            d,
            ne(),
          ),
            s.worker.postMessage(
              {
                type: "cmd",
                cmd: "jsWorkerCmd",
                jsWorkerCmd: "startVoipRpc",
                rpcPort: u.port2,
                token: d,
              },
              [u.port2],
            ));
          var _;
          try {
            _ = await p.finally(function () {
              o("WAWebVoipQplHelpers").voipInitQplAddPoint(
                o("WAWebVoipQplHelpers").VoipInitQplPoint.RPC_SETUP_END,
              );
            });
          } catch (e) {
            throw (m.abort(e), c.close("RPC ready failure"), ge(s, e), e);
          }
          return (
            o("WALogger").LOG(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [WorkerProxy] RPC channel ready",
                ])),
            ),
            ce &&
              ((ce = !1),
              o("WAWebCoreActionsODS").logCallVoipRpcReadyRetrySuccess()),
            { jsWorker: s, rpc: c, capabilities: _ }
          );
        })();
        return (
          (se = a),
          a.catch(function (e) {
            se === a &&
              ((se = null),
              (ce = !0),
              o("WALogger").WARN(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
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
      function ye() {
        if (n && me)
          throw r("err")(
            "voip: RPC attempted while worker lifecycle is shutting down",
          );
      }
      async function Ce(e) {
        (ye(), n && (await a.wait()), ye());
        var t = await he(),
          r = t.capabilities,
          o = t.rpc;
        ye();
        var i = e(r),
          l = i.args,
          s = i.method,
          u = i.transferList;
        o.fire({ args: l, method: s, transferList: u });
      }
      function be(e, t, n) {
        return Ce(function () {
          return { args: t, method: e, transferList: n };
        });
      }
      async function ve(e, t, r, o) {
        (ye(), n && (await a.wait()), ye());
        var i = await he(),
          l = i.rpc;
        return (
          ye(),
          l.invoke({ args: t, method: e, timeoutMs: o, transferList: r })
        );
      }
      function Se(e, t, n) {
        me ||
          be(e, t, n).catch(function (t) {
            me ||
              de ||
              ((de = !0),
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
      function Re(e) {
        o("WAWebVoipWebTransportConnectionManager").registerPacketHandler(
          function (t, n, r) {
            me ||
              e.fire({
                args: { packet: t, ip: n, port: r },
                method: "handleOnTransportMessage",
                transferList: [t],
              });
          },
        );
      }
      async function Le(e, t, n) {
        var r = await he(),
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
      }
      function Ee(e) {
        var t = se;
        t != null &&
          ((se = null),
          (ce = !0),
          o("WAWebVoipLogDrainer").stopLogDrainer(),
          o("WALogger").WARN(
            S ||
              (S = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WorkerProxy] cleared worker lifecycle after init failure: ",
                " ",
                "",
              ])),
            String(e),
            ne(),
          ),
          ue.track(
            t
              .then(function (e) {
                var t = e.jsWorker,
                  n = e.rpc;
                return (n.close("VoIP init failure"), _e(t, "init failure"));
              })
              .catch(r("WAWebNoop")),
          ));
      }
      var ke = {
          onVoipReady: (t = r("WAWebNoop")),
          onCallEvent: t,
          initCaptureDriverJS: o("WAWebVoipAudioCaptureAndPlayback")
            .initCaptureDriverJS,
          startCaptureJS: o("WAWebVoipAudioCaptureAndPlayback").startCaptureJS,
          stopCaptureJS: o("WAWebVoipAudioCaptureAndPlayback").stopCaptureJS,
        },
        Ie = babelHelpers.extends(
          {
            type: "web",
            parsers: r("WAWebVoipJsonParsersWeb"),
            voipInit: async function (t, a, l) {
              var e;
              me = !1;
              var s = await he(),
                u = s.rpc,
                c = await i;
              (o("WAWebVoipGatingUtils").resetWebTransportFallbackState(),
                o("WALogger").LOG(
                  R ||
                    (R = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [WebTransport] voipInit wt=",
                      " (worker proxy)",
                    ])),
                  String(o("WAWebVoipGatingUtils").isWebTransportEnabled()),
                ),
                n || Re(u),
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
                      "WAWebVoipSctpFallbackFamilyOutcome",
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
                      o("WAWebVoipSctpConnectionManager").handleRelayListUpdate(
                        e,
                        {
                          bypassConnectionStagger: o(
                            "WAWebVoipGatingUtils",
                          ).isWebTransportFastSetupEnabled(),
                        },
                      ));
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
                o("WAWebVoipQplHelpers").VoipInitQplPoint.WEBCODECS_PROBE_START,
              );
              try {
                await o(
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
                    (await o(
                      "WAWebVoipVideoWebCodecsRenderer",
                    ).WAWebVoipVideoWebCodecsRenderer.checkAvailability());
                m =
                  !o("WAWebUA").UA.isFirefox && f && _ === !0
                    ? await o(
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
                o("WAWebVoipQplHelpers").VoipInitQplPoint.WEBCODECS_PROBE_END,
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
                o("WAWebVoipWebCodecsEncoderState").setWebCodecsEncoderEnabled(
                  m,
                ),
                o("WALogger").LOG(
                  D ||
                    (D = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [webcodec-encode] WebCodecs encoder state ",
                      "",
                    ])),
                  m,
                ));
              var g = o("WAWebVoipStackInterfaceWebHelpers").buildABPropsBag();
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
                  (e = await o("WAWebCountryCodeUtils").getMyCallingCode()) !=
                  null
                    ? e
                    : "",
                y = o(
                  "WAWebVoipExperimentTargetSample",
                ).getExperimentTargetSampleExpoKeys();
              o("WAWebVoipQplHelpers").voipInitQplAddPoint(
                o("WAWebVoipQplHelpers").VoipInitQplPoint.VOIP_STACK_INIT_START,
              );
              try {
                if (
                  (await o(
                    "WAWebVoipPthreadGlueFailureTracker",
                  ).failFastOnPthreadGlueFailure(
                    Le("voipInit", {
                      selfJid: t,
                      selfUserJid: a,
                      selfLid: l,
                      selfCountryCode: h,
                      selfAbpropBucketIdList: y,
                      abProps: g,
                    }),
                    "module",
                  ),
                  n)
                ) {
                  var C = c.registerMainThreadAfterVoipInit();
                  if (C !== 0)
                    throw r("err")(
                      "voip: failed to register main thread (" + C + ")",
                    );
                }
              } catch (e) {
                throw (Ee(e), e);
              } finally {
                o("WAWebVoipQplHelpers").voipInitQplAddPoint(
                  o("WAWebVoipQplHelpers").VoipInitQplPoint.VOIP_STACK_INIT_END,
                );
              }
              (o("WAWebVoipWasmHeapMonitor").logWasmHeapSnapshot(
                c,
                "voip_stack_init",
              ),
                (de = !1));
              var b = c.getWebP2PVirtualIpv4(),
                v = c.getWebP2PVirtualIpv6(),
                S = c.getWebP2PVirtualPort();
              (o("WAWebVoipP2PConnectionManager").initP2PVirtualAddresses(
                b,
                v,
                S,
              ),
                o("WAWebVoipP2PConnectionManager").registerOnDataChannelMessage(
                  function (e) {
                    Se(
                      "handleOnTransportMessage",
                      { packet: e, ip: b, port: S },
                      [e],
                    );
                  },
                ));
              var P = !1;
              (o(
                "WAWebVoipP2PConnectionManager",
              ).registerOnDataChannelStateChange(function (e) {
                e === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open
                  ? ((P = !0),
                    o("WALogger").LOG(
                      x ||
                        (x = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: P2P DataChannel opened, notifying WASM active=true",
                        ])),
                    ),
                    Se("notifyWebP2PChannelReady", { active: !0, useIPv6: !1 }))
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
                    Se("notifyWebP2PChannelReady", {
                      active: !1,
                      useIPv6: !1,
                    }));
              }),
                n && Re(u));
            },
            setHideMyIp: async function (t) {
              (o("WALogger").LOG(
                P ||
                  (P = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: setHideMyIp called with hideMyIp=",
                    "",
                  ])),
                t,
              ),
                await Le("setHideMyIp", { hideMyIp: t }));
            },
            setOwnOtherDeviceJids: async function (t) {
              await be("setOwnOtherDeviceJids", { ownOtherDeviceJids: t });
            },
            handleSignOut: function () {
              if (
                (o("WALogger").LOG(
                  N ||
                    (N = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: handleSignOut: cleaning up all connections",
                    ])),
                ),
                n &&
                  ((me = !0),
                  a.reset(),
                  o("WAWebVoipP2PConnectionManager").cleanupP2PConnection()),
                (de = !1),
                (ce = !1),
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
                se != null)
              ) {
                var e = se;
                ((se = null),
                  ue.track(
                    e
                      .then(function (e) {
                        var t = e.jsWorker,
                          n = e.rpc;
                        return (n.close("sign out"), _e(t, "sign out"));
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
            startCall: async function (t, n, r, a, l, s, u) {
              (o("WAWebVoipGatingUtils").markCurrentCallAsGroup(!1),
                o("WAWebVoipLobbyEntryPointStore").resetLobbyEntryPoint());
              var e = await i;
              (o("WAWebMLModelManager")
                .initMLModelsForCall(e)
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
                await be("startCall", {
                  peerJid: t.toString({ legacy: !0 }),
                  deviceJids: n,
                  callId: r,
                  useVideo: a,
                  phoneNumberJid: l,
                  isFromDialer: s,
                  tcToken: u,
                }));
            },
            startGroupCall: async function (
              t,
              n,
              r,
              a,
              l,
              s,
              u,
              c,
              d,
              m,
              p,
              _,
              f,
            ) {
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
                _ != null ? _ : null,
              );
              var e = await i;
              (o("WAWebMLModelManager")
                .initMLModelsForCall(e)
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
                await be("startGroupCall", {
                  pnUserJids: t,
                  lidUserJids: n,
                  deviceJidsCsv: r,
                  callId: a,
                  useVideo: l,
                  groupJid: s,
                  isLightWeight: u,
                  scheduleId: c,
                  chatName: d,
                  chatIcon: m,
                  callFromUI: p != null ? p : 0,
                  lobbyEntryType: _ != null ? _ : 0,
                  username: f != null ? f : "",
                }));
            },
            acceptCall: async function (t, n, r) {
              var e = o("WAWebVoipLocalCallStateStore").getLocalCallState();
              (o("WAWebVoipLobbyEntryPointStore").resetLobbyEntryPointOnAccept(
                e === o("WAWebVoipWaCallEnums").CallState.Rejoining,
              ),
                o("WAWebVoipCallStateUtils").isCallIncoming(e) &&
                  o("WAWebVoipGatingUtils").isCurrentCallGroup() &&
                  o(
                    "WAWebCallUserJourneyGating",
                  ).isCallUserJourneyLoggingEnabled() &&
                  o("WAWebVoipLobbyEntryPointStore").setLobbyEntryPoint(
                    r ===
                      o("WAWebWamEnumLobbyEntryPointType")
                        .LOBBY_ENTRY_POINT_TYPE.NOTIFICATION_BUTTON
                      ? o("WAWebWamEnumLobbyEntryPointType")
                          .LOBBY_ENTRY_POINT_TYPE.NOTIFICATION_BUTTON
                      : o("WAWebWamEnumLobbyEntryPointType")
                          .LOBBY_ENTRY_POINT_TYPE.OPEN_FOR_RINGING,
                  ),
                o("WAWebVoipCallIdProvider").resetPendingCallId(),
                await be("acceptCall", {
                  isMicEnabled: t,
                  isCameraEnabled: n,
                }));
            },
            rejectCallWithEndReason: async function (t) {
              (o("WAWebVoipLobbyEntryPointStore").resetLobbyEntryPoint(),
                await be("rejectCallWithEndReason", { endReason: t }));
            },
          },
          o(
            "WAWebVoipWorkerProxyScreeningCalls",
          ).createWorkerProxyScreeningCalls(ve),
          {
            endCall: async function (t, n) {
              o("WAWebVoipGatingUtils").isWebTransportEnabled() &&
                o("WAWebVoipWebTransportConnectionManager").prepareForEndCall();
              try {
                await be("endCall", { endCallReason: t, sendTerminate: n });
              } finally {
                (o("WAWebVoipGatingUtils").isWebTransportEnabled() &&
                  o(
                    "WAWebVoipWebTransportConnectionManager",
                  ).closeAllConnections(),
                  o(
                    "WAWebVoipTransportFallbackTracker",
                  ).finalizeFallbackOutcome(),
                  o("WAWebVoipTransportFallbackTracker").resetFallbackTracker(),
                  o("WAWebVoipGatingUtils").resetWebTransportFallbackState());
              }
            },
            transferCallStart: async function (t) {
              return Number(await ve("transferCallStart", t));
            },
            rejectCallWithoutCallContext: async function (t, n, r, o, a, i, l) {
              await be("rejectCallWithoutCallContext", {
                callId: t,
                isGroupCall: n,
                peerJid: r,
                callCreatorJid: o,
                reason: a,
                retryCount: i,
                registration: l,
              });
            },
            joinOngoingCall: async function (
              t,
              n,
              r,
              a,
              i,
              l,
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
            ) {
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
                h != null ? h : null,
                !f,
              ),
                o("WAWebVoipCallIdProvider").resetPendingCallId(),
                await be("joinOngoingCall", {
                  callId: t,
                  callCreatorJid: n,
                  initialPeerJid: r,
                  groupParticipantsPnUserJid: a,
                  groupParticipantsLidUserJid: i,
                  groupParticipantsDeviceJidsCsv: l,
                  hasVideo: s,
                  groupJid: u,
                  initialGroupTransactionId: c,
                  callCreatorIsNotContact: d,
                  callLinkCode: m,
                  isLightweight: p,
                  scheduledId: _,
                  joinAndAccept: f,
                  chatName: g,
                  lobbyEntryType: h != null ? h : 0,
                  isDeviceSwitch: y != null ? y : !1,
                }));
            },
          },
          o(
            "WAWebVoipWorkerProxyVoiceChatCalls",
          ).createWorkerProxyVoiceChatCalls(ve, function () {
            return i;
          }),
          o(
            "WAWebVoipWorkerProxyFieldstatsCalls",
          ).createWorkerProxyFieldstatsCalls(ve, function () {
            return se != null && !me;
          }),
          {
            simulateNativeAnr: t,
            handleDeviceJidList: t,
            previewCallLink: async function (t, n, r, a, i) {
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
              var e = 22;
              if (t.length !== e)
                return (
                  o("WALogger").ERROR(
                    W ||
                      (W = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: previewCallLink: invalid token length ",
                        ", expected ",
                        "",
                      ])),
                    t.length,
                    e,
                  ),
                  -1
                );
              var l = o(
                "WAWebVoipLobbyEntryPointStore",
              ).snapshotLobbyEntryPoint();
              (o("WAWebVoipLobbyEntryPointStore").setLobbyEntryPoint(
                r != null ? r : null,
              ),
                o("WAWebVoipCallIdProvider").resetPendingCallId());
              var s = await ve("previewCallLink", {
                token: t,
                videoEnabled: n,
                lobbyEntryType: r != null ? r : 0,
                username: a != null ? a : "",
                videoMuted:
                  (i != null ? i : !1) ||
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
                  o("WAWebVoipLobbyEntryPointStore").restoreLobbyEntryPoint(l)),
                Number(s)
              );
            },
            joinCallLink: async function () {
              if (!o("WAWebVoipGatingUtils").isCallingEnabled()) {
                o("WALogger").ERROR(
                  U ||
                    (U = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: joinCallLink: Call link feature is not enabled",
                    ])),
                );
                return;
              }
              await be("joinCallLink", {});
            },
            previewAndJoinCallLink: async function (t, n, r, a, l, s) {
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
                r != null ? r : null,
              ),
                o("WAWebVoipCallIdProvider").resetPendingCallId());
              var e = await i;
              return (
                o("WAWebMLModelManager")
                  .initMLModelsForCall(e)
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
                await be("previewAndJoinCallLink", {
                  token: t,
                  videoEnabled: n,
                  lobbyEntryType: r != null ? r : 0,
                  username: a != null ? a : "",
                  videoMuted:
                    (l != null ? l : !1) ||
                    !o("WAWebVoipLocalVideoPolicy").isLocalVideoAllowed(),
                  pushName: s != null ? s : "",
                }),
                0
              );
            },
          },
          o(
            "WAWebVoipWorkerProxySignalingCalls",
          ).createWorkerProxySignalingCalls(be, Ce, function () {
            return i;
          }),
          {
            notifyDeviceIdentityChangedOrDeleted: t,
            handleOnTransportMessage: async function (t, n, r) {
              await be(
                "handleOnTransportMessage",
                { packet: t, ip: n, port: r },
                [t],
              );
            },
            markRelayConnected: async function (t, n) {
              await be("markRelayConnected", { ip: t, port: n });
            },
            logTsEventStringData: async function (t, n, r) {
              se != null &&
                Se("logTsEventStringData", {
                  eventId: t,
                  eventValue: n,
                  ignoreDupe: r,
                });
            },
            setCallMute: async function (t) {
              var e = await ve("setCallMute", { enable: t });
              return Number(e);
            },
            setCallVideoMute: async function (t) {
              if (!t && !o("WAWebVoipLocalVideoPolicy").isLocalVideoAllowed())
                return (
                  o("WALogger").LOG(
                    G ||
                      (G = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: setCallVideoMute(false) blocked by local video policy",
                      ])),
                  ),
                  o("WAWebVoipLocalVideoPolicy").LOCAL_VIDEO_BLOCKED_STATUS
                );
              var e = await ve("setCallVideoMute", { enable: t });
              return Number(e);
            },
            videoStreamPause: async function () {
              var e = await ve("videoStreamPause", {});
              return Number(e);
            },
            videoStreamResume: async function () {
              var e = await ve("videoStreamResume", {});
              return Number(e);
            },
            broadcastVideoState: async function () {
              var e = await ve("broadcastVideoState", {});
              return Number(e);
            },
            sendReaction: async function (t) {
              await be("sendReaction", { reaction: t });
            },
            raiseHand: async function (t) {
              await be("raiseHand", { isHandRaised: t });
            },
            sendCapiDtmfTone: async function (t) {
              var e = await ve("sendCapiDtmfTone", { tone: t });
              return Number(e);
            },
            notifyUiViewChange: async function (t, n) {
              var e = await ve("notifyUiViewChange", {
                viewMode: t,
                pinnedPeerJid: n != null ? n : "",
              });
              return Number(e);
            },
            requestVideoUpgrade: async function () {
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
              var e = await ve("requestVideoUpgrade", {});
              return Number(e);
            },
            getCallInfo: async function () {
              var e = await ve("getCallInfo", {});
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
            acceptPeerVideo: async function (t) {
              var e = await ve("acceptPeerVideo", { jid: t.jid });
              return (
                e !== 0 &&
                  o("WALogger").ERROR(
                    K ||
                      (K = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: acceptPeerVideo: Failed with status ",
                        "",
                      ])),
                    String(e),
                  ),
                Number(e)
              );
            },
            requestPeerMute: async function (t) {
              var e = await ve("requestPeerMute", { peerJid: t });
              return Number(e);
            },
            removeCallParticipant: async function (t) {
              var e = await ve("removeCallParticipant", { peerJid: t });
              return Number(e);
            },
            waitingRoomAdmit: async function (t) {
              var e = await ve("waitingRoomAdmit", { peerJid: t });
              return Number(e);
            },
            waitingRoomDeny: async function (t) {
              var e = await ve("waitingRoomDeny", { peerJid: t });
              return Number(e);
            },
            waitingRoomAdmitAll: async function () {
              var e = await ve("waitingRoomAdmitAll", {});
              return Number(e);
            },
            waitingRoomToggleActiveCall: async function (t) {
              var e = await ve("waitingRoomToggleActiveCall", { enabled: t });
              return Number(e);
            },
            startScreenShare: async function () {
              var e = await ve("startScreenShare", {});
              return Number(e);
            },
            stopScreenShare: async function () {
              var e = await ve("stopScreenShare", {});
              return Number(e);
            },
            startVideoPreview: async function (t, n) {
              var e = await ve("startVideoPreview", { callId: t, selfJid: n });
              return Number(e);
            },
            requestKeyFrame: async function (t, n) {
              var e = await ve(
                n ? "requestAuxiliaryKeyFrame" : "requestKeyFrame",
                { userJid: t.toJid() },
              );
              return Number(e);
            },
            updateParticipantsRxSubscription: async function (t, n) {
              var e = await ve("updateParticipantsRxSubscription", {
                participantJids: t,
                videoQualities: n,
              });
              return Number(e);
            },
            updateNetworkMedium: async function (t, n) {
              await be("updateNetworkMedium", {
                networkMedium: t,
                networkMtu: n,
              });
            },
            getNetworkConditionerState: async function () {
              try {
                var e = await ve("getNetworkConditionerState", {});
                if (e == null) return null;
                var t = JSON.stringify(e);
                return t == null ? null : JSON.parse(t);
              } catch (e) {
                return null;
              }
            },
            getShortStatisticString: async function () {
              try {
                var e = await ve("getShortStatisticString", {});
                return String(e != null ? e : "");
              } catch (e) {
                return "";
              }
            },
            getDebugStatisticString: async function () {
              try {
                var e = await ve("getDebugStatisticString", {});
                return String(e != null ? e : "");
              } catch (e) {
                return "";
              }
            },
            consumeVideoCaptureFps: async function () {
              return o(
                "WAWebVoipVideoCaptureFpsTracker",
              ).consumeVideoCaptureFpsSnapshot();
            },
            getVoipParam: async function (t) {
              try {
                var e = await ve("getVoipParam", { paramPath: t });
                return String(e != null ? e : "");
              } catch (e) {
                return "";
              }
            },
            isWebP2PEnabled: async function (t) {
              try {
                var e = await ve("isWebP2PEnabled", { callId: t });
                return e === !0;
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
            callbacks: ke,
            inviteToCall: async function (t, n, r) {
              var e = await ve("inviteToCall", {
                invitedParticipantPnUserJid: t,
                invitedParticipantLidUserJid: n,
                deviceJids: r,
              });
              return typeof e == "number" ? e : null;
            },
            sendWave: async function (t, n, r) {
              await be("sendWave", {
                participantPnUserJid: t,
                participantLidUserJid: n,
                deviceJids: r,
              });
            },
            checkOngoingCalls: async function (t, n) {
              await be("checkOngoingCalls", { callIds: t, callCreatorJids: n });
            },
            sendWebP2PTransport: async function (t, n, r, o, a, i) {
              await be("sendWebP2PTransport", {
                callId: t,
                ufrag: n,
                pwd: r,
                algo: o,
                fingerprint: a,
                candidatesJson: JSON.stringify(i),
              });
            },
          },
        );
      if (!n) return Ie;
      var Te = async function (t, n, r) {
        await Ie.voipInit(t, n, r);
      };
      return babelHelpers.extends({}, Ie, {
        voipInit: function (t, n, r) {
          return a.run({ selfJid: t, selfUserJid: n, selfLid: r }, function () {
            return Te(t, n, r);
          });
        },
      });
    }
    l.createWorkerProxyStackInterface = se;
  },
  98,
);
