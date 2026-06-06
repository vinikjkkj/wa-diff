__d(
  "WAWebVoipStackInterfaceWorkerProxy",
  [
    "WABase64",
    "WALogger",
    "WAWap",
    "WAWebABProps",
    "WAWebBackendApi",
    "WAWebBweMLModelManager",
    "WAWebCoreActionsODS",
    "WAWebLowEndDeviceExperimentGating",
    "WAWebNoop",
    "WAWebUA",
    "WAWebVisibilityAwareTimeout",
    "WAWebVoipABPropConfig",
    "WAWebVoipAudioCaptureAndPlayback",
    "WAWebVoipGatingUtils",
    "WAWebVoipJsWorkerThread",
    "WAWebVoipJsonParsersWeb",
    "WAWebVoipLobbyEntryPointStore",
    "WAWebVoipLogDrainer",
    "WAWebVoipMessagePortRpc",
    "WAWebVoipP2PConnectionManager",
    "WAWebVoipPerfOptimizations",
    "WAWebVoipRelayConnectionUtils",
    "WAWebVoipRelayOverrides",
    "WAWebVoipSctpConnectionManager",
    "WAWebVoipStorageInit",
    "WAWebVoipVideoCaptureFpsTracker",
    "WAWebVoipVideoRendererInterface",
    "WAWebVoipVideoRendererRegistry",
    "WAWebVoipVideoWebCodecsRenderer",
    "WAWebVoipWasmHeapMonitor",
    "WAWebVoipWebCodecsEncoderState",
    "WAWebVoipWebTransportConnectionManager",
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
      H = 300 * 1e3,
      G = 9e4,
      z = 300 * 1e3;
    function j() {
      return (
        "hidden=" +
        String(document.hidden) +
        " visibility=" +
        document.visibilityState +
        " focus=" +
        String(document.hasFocus())
      );
    }
    function K(e) {
      e === "foreground"
        ? o("WAWebCoreActionsODS").logCallVoipRpcReadyTimeoutForeground()
        : o("WAWebCoreActionsODS").logCallVoipRpcReadyTimeoutAbsolute();
    }
    function Q(e) {
      e === "foreground"
        ? o("WAWebCoreActionsODS").logCallVoipRpcInitTimeoutForeground()
        : o("WAWebCoreActionsODS").logCallVoipRpcInitTimeoutAbsolute();
    }
    function X() {
      var e,
        t = o("WAWebBackendApi").frontendSendAndReceive("initializeVoipWasm"),
        n = 0,
        a = null,
        i = !1;
      function l(e, t, n) {
        return new Promise(function (a, i) {
          var l = !1,
            m = null,
            p = function () {
              var t = m;
              t != null &&
                (e.worker.removeMessageListener("voipRpcReady", t), (m = null));
            },
            _ = o("WAWebVisibilityAwareTimeout").startVisibilityAwareTimeout({
              foregroundMs: V,
              absoluteMs: H,
              onTimeout: function (a, u) {
                if (!l) {
                  ((l = !0), p(), n.close("RPC ready timeout"), K(a));
                  var e =
                    a === "foreground"
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
                    j(),
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
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [WorkerProxy] RPC ready wait paused token=",
                      " visibleElapsed=",
                      "ms ",
                      "",
                    ])),
                  t,
                  n.visibleMs.toFixed(1),
                  j(),
                );
              },
              onResume: function (n) {
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [WorkerProxy] RPC ready wait resumed token=",
                      " visibleElapsed=",
                      "ms ",
                      "",
                    ])),
                  t,
                  n.visibleMs.toFixed(1),
                  j(),
                );
              },
            });
          m = e.worker.addMessageListener("voipRpcReady", function (e) {
            if (e.token === t && !l) {
              l = !0;
              var n = _.cancel();
              (p(),
                n.wasBackgroundPaused &&
                  o(
                    "WAWebCoreActionsODS",
                  ).logCallVoipRpcReadyBackgroundPauseSuccess(),
                o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [WorkerProxy] RPC ready ack token=",
                      " wallElapsed=",
                      "ms visibleElapsed=",
                      "ms ",
                      "",
                    ])),
                  t,
                  n.wallMs.toFixed(1),
                  n.visibleMs.toFixed(1),
                  j(),
                ),
                a());
            }
          });
        });
      }
      function X() {
        var e = a;
        if (e != null) return e;
        var s = (async function () {
          (await t,
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [WorkerProxy] WASM loaded, creating JsWorkerThread",
                ])),
            ));
          var e = await r("WAWebVoipJsWorkerThread").create();
          o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WorkerProxy] JsWorkerThread created",
              ])),
          );
          var a = new MessageChannel(),
            s = new (o("WAWebVoipMessagePortRpc").MessagePortRpc)(a.port1);
          s.start();
          var u = n++,
            c = l(e, u, s);
          (o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WorkerProxy] posting startVoipRpc token=",
                " ",
                "",
              ])),
            u,
            j(),
          ),
            e.worker.postMessage(
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
            await c;
          } catch (t) {
            throw (
              s.close("RPC ready failure"),
              o(
                "WAWebCoreActionsODS",
              ).logCallVoipRpcReadyCleanupShutdownAttempted(),
              e.shutdown().catch(function (e) {
                (o(
                  "WAWebCoreActionsODS",
                ).logCallVoipRpcReadyCleanupShutdownFailed(),
                  o("WALogger").WARN(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
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
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [WorkerProxy] RPC channel ready",
                ])),
            ),
            i &&
              ((i = !1),
              o("WAWebCoreActionsODS").logCallVoipRpcReadyRetrySuccess()),
            { jsWorker: e, rpc: s }
          );
        })();
        return (
          (a = s),
          s.catch(function (e) {
            a === s &&
              ((a = null),
              (i = !0),
              o("WALogger").WARN(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WorkerProxy] cleared failed worker lifecycle: ",
                    " ",
                    "",
                  ])),
                String(e),
                j(),
              ));
          }),
          s
        );
      }
      async function Y(e, t, n) {
        var r = await X(),
          o = r.rpc;
        o.fire(e, t, n);
      }
      async function J(e, t, n) {
        var r = await X(),
          o = r.rpc;
        return o.invoke(e, t, n);
      }
      async function Z(e, t, n) {
        var r = await X(),
          a = r.rpc;
        return a.invokeWithVisibilityAwareTimeout(
          e,
          t,
          {
            foregroundMs: G,
            absoluteMs: z,
            onTimeout: Q,
            onBackgroundPauseSuccess: o("WAWebCoreActionsODS")
              .logCallVoipRpcInitBackgroundPauseSuccess,
          },
          n,
        );
      }
      function ee(e) {
        var t = a;
        t != null &&
          ((a = null),
          (i = !0),
          o("WAWebVoipLogDrainer").stopLogDrainer(),
          o("WALogger").WARN(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WorkerProxy] cleared worker lifecycle after init failure: ",
                " ",
                "",
              ])),
            String(e),
            j(),
          ),
          t
            .then(function (e) {
              var t = e.jsWorker,
                n = e.rpc;
              (n.close("VoIP init failure"),
                t.shutdown().catch(function (e) {
                  o("WALogger").WARN(
                    C ||
                      (C = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [WorkerProxy] worker shutdown after init failure failed: ",
                        "",
                      ])),
                    String(e),
                  );
                }));
            })
            .catch(r("WAWebNoop")));
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
        voipInit: async function (n, r, a) {
          var e = await X(),
            i = e.rpc,
            l = await t;
          (o("WAWebVoipGatingUtils").isWebTransportEnabled() &&
            o("WAWebVoipWebTransportConnectionManager").registerPacketHandler(
              function (e, t, n) {
                i.fire(
                  "handleOnTransportMessage",
                  { packet: e, ip: t, port: n },
                  [e],
                );
              },
            ),
            o("WAWebVoipPerfOptimizations").isPerfOptimizationEnabled(
              o("WAWebVoipPerfOptimizations").PerfOptimizationFlag
                .LOG_RING_BUFFER,
            ) && o("WAWebVoipLogDrainer").startLogDrainer(l),
            o("WAWebVoipStorageInit").initVoipStorageAndMLCache(l));
          var s = !1,
            u = !1;
          try {
            await o(
              "WAWebVoipVideoRendererRegistry",
            ).videoRendererRegistry.init();
            var c = o(
              "WAWebVoipVideoRendererRegistry",
            ).videoRendererRegistry.getRendererType();
            s =
              c ===
              o("WAWebVoipVideoRendererInterface").WAWebVoipVideoRendererType
                .WEBCODECS_H264;
            var d = o("WAWebABProps").getABPropConfigValue(
                "enable_webcodec_video_encode",
              ),
              m =
                s ||
                (await o(
                  "WAWebVoipVideoWebCodecsRenderer",
                ).WAWebVoipVideoWebCodecsRenderer.checkAvailability());
            u =
              !o("WAWebUA").UA.isFirefox && m && d === !0
                ? await o(
                    "WAWebVoipWebCodecsEncoderState",
                  ).checkEncoderSupport()
                : !1;
          } catch (e) {
            o("WALogger").WARN(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: video cap detect failed, passthrough off: ",
                  "",
                ])),
              e,
            );
          }
          (o("WALogger").LOG(
            v ||
              (v = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WorkerProxy] dec=",
                " enc=",
                "",
              ])),
            s,
            u,
          ),
            o("WALogger").LOG(
              S ||
                (S = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [webcodec-encode] enabled=",
                  "",
                ])),
              u,
            ),
            o("WAWebVoipWebCodecsEncoderState").setWebCodecsEncoderEnabled(u),
            o("WALogger").LOG(
              R ||
                (R = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [webcodec-encode] WebCodecs encoder state ",
                  "",
                ])),
              u,
            ));
          var p = U();
          ((p.enable_passthrough_video_decoder = { value: s, type: "bool" }),
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
              (p.disable_eq = { value: !0, type: "bool" })));
          try {
            await Z("voipInit", {
              selfJid: n,
              selfUserJid: r,
              selfLid: a,
              abProps: p,
            });
          } catch (e) {
            throw (ee(e), e);
          }
          o("WAWebVoipWasmHeapMonitor").logWasmHeapSnapshot(
            l,
            "voip_stack_init",
          );
          var _ = l.getWebP2PVirtualIpv4(),
            f = l.getWebP2PVirtualIpv6(),
            g = l.getWebP2PVirtualPort();
          (o("WAWebVoipP2PConnectionManager").initP2PVirtualAddresses(_, f, g),
            o("WAWebVoipP2PConnectionManager").registerOnDataChannelMessage(
              function (e) {
                Y("handleOnTransportMessage", { packet: e, ip: _, port: g }, [
                  e,
                ]);
              },
            ));
          var h = !1;
          o("WAWebVoipP2PConnectionManager").registerOnDataChannelStateChange(
            function (e) {
              e === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open
                ? ((h = !0),
                  o("WALogger").LOG(
                    L ||
                      (L = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: P2P DataChannel opened, notifying WASM active=true",
                      ])),
                  ),
                  Y("notifyWebP2PChannelReady", { active: !0, useIPv6: !1 }))
                : h &&
                  ((h = !1),
                  o("WALogger").LOG(
                    E ||
                      (E = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: P2P DataChannel ",
                        " (was open), WASM active=false",
                      ])),
                    e,
                  ),
                  Y("notifyWebP2PChannelReady", { active: !1, useIPv6: !1 }));
            },
          );
        },
        setHideMyIp: async function (t) {
          (o("WALogger").LOG(
            k ||
              (k = babelHelpers.taggedTemplateLiteralLoose([
                "voip: setHideMyIp called with hideMyIp=",
                "",
              ])),
            t,
          ),
            await Z("setHideMyIp", { hideMyIp: t }));
        },
        handleSignOut: function () {
          if (
            (o("WALogger").LOG(
              I ||
                (I = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: handleSignOut: cleaning up all connections",
                ])),
            ),
            (i = !1),
            o("WAWebVoipLogDrainer").stopLogDrainer(),
            o("WAWebVoipGatingUtils").isWebTransportEnabled()
              ? o(
                  "WAWebVoipWebTransportConnectionManager",
                ).closeAllConnections()
              : o("WAWebVoipSctpConnectionManager").cleanupAllConnections(),
            a != null)
          ) {
            var e = a;
            ((a = null),
              e
                .then(function (e) {
                  var t = e.jsWorker,
                    n = e.rpc;
                  return (n.close("sign out"), t.shutdown());
                })
                .catch(function (e) {
                  o("WALogger").WARN(
                    T ||
                      (T = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [handleSignOut] worker shutdown error: ",
                        "",
                      ])),
                    e,
                  );
                }));
          }
        },
        startCall: async function (n, r, a, i, l, s, u) {
          o("WAWebVoipLobbyEntryPointStore").resetLobbyEntryPoint();
          var e = await t;
          (o("WAWebBweMLModelManager")
            .initBweMLModelsForCall(e)
            .catch(function (e) {
              o("WALogger").WARN(
                D ||
                  (D = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [initBweMLModelsForCall] unhandled error: ",
                    "",
                  ])),
                e,
              );
            }),
            await Y("startCall", {
              peerJid: n.toString({ legacy: !0 }),
              deviceJids: r,
              callId: a,
              useVideo: i,
              phoneNumberJid: l,
              isFromDialer: s,
              tcToken: u,
            }));
        },
        startGroupCall: async function (n, r, a, i, l, s, u, c, d, m, p, _, f) {
          if (!o("WAWebVoipGatingUtils").isGroupCallingEnabled()) {
            o("WALogger").ERROR(
              x ||
                (x = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: startGroupCall: Web group calling is not enabled",
                ])),
            );
            return;
          }
          o("WAWebVoipLobbyEntryPointStore").setLobbyEntryPoint(
            _ != null ? _ : null,
            i,
          );
          var e = await t;
          (o("WAWebBweMLModelManager")
            .initBweMLModelsForCall(e)
            .catch(function (e) {
              o("WALogger").WARN(
                $ ||
                  ($ = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [initBweMLModelsForCall] unhandled error: ",
                    "",
                  ])),
                e,
              );
            }),
            await Y("startGroupCall", {
              pnUserJids: n,
              lidUserJids: r,
              deviceJidsCsv: a,
              callId: i,
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
        acceptCall: async function (t, n) {
          (o("WAWebVoipLobbyEntryPointStore").resetLobbyEntryPoint(),
            await Y("acceptCall", { isMicEnabled: t, isCameraEnabled: n }));
        },
        rejectCall: async function () {
          await Y("rejectCall", {});
        },
        endCall: async function (t, n) {
          o("WAWebVoipGatingUtils").isWebTransportEnabled() &&
            o("WAWebVoipWebTransportConnectionManager").prepareForEndCall();
          try {
            await Y("endCall", { endCallReason: t, sendTerminate: n });
          } finally {
            o("WAWebVoipGatingUtils").isWebTransportEnabled() &&
              o("WAWebVoipWebTransportConnectionManager").closeAllConnections();
          }
        },
        rejectCallWithoutCallContext: async function (t, n, r, o, a, i, l) {
          await Y("rejectCallWithoutCallContext", {
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
          if (!o("WAWebVoipGatingUtils").isGroupCallingEnabled()) {
            o("WALogger").ERROR(
              P ||
                (P = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: joinOngoingCall: Web group calling is not enabled",
                ])),
            );
            return;
          }
          (o("WAWebVoipLobbyEntryPointStore").setLobbyEntryPoint(
            h != null ? h : null,
            t,
          ),
            await Y("joinOngoingCall", {
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
        simulateNativeAnr: e,
        handleDeviceJidList: e,
        previewCallLink: async function (t, n, r, a, i) {
          if (!o("WAWebVoipGatingUtils").callLinksEnabled())
            return (
              o("WALogger").ERROR(
                N ||
                  (N = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: previewCallLink: Call link feature is not enabled",
                  ])),
              ),
              -1
            );
          var e = 22;
          if (t.length !== e)
            return (
              o("WALogger").ERROR(
                M ||
                  (M = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: previewCallLink: invalid token length ",
                    ", expected ",
                    "",
                  ])),
                t.length,
                e,
              ),
              -1
            );
          o("WAWebVoipLobbyEntryPointStore").setLobbyEntryPoint(
            r != null ? r : null,
            null,
          );
          var l = await J("previewCallLink", {
            token: t,
            videoEnabled: n,
            lobbyEntryType: r != null ? r : 0,
            username: a != null ? a : "",
            videoMuted: i != null ? i : !1,
          });
          return (
            l !== 0 &&
              (o("WALogger").ERROR(
                w ||
                  (w = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: previewCallLink: failed with status ",
                    "",
                  ])),
                String(l),
              ),
              o("WAWebVoipLobbyEntryPointStore").resetLobbyEntryPoint()),
            Number(l)
          );
        },
        joinCallLink: async function () {
          if (!o("WAWebVoipGatingUtils").callLinksEnabled()) {
            o("WALogger").ERROR(
              A ||
                (A = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: joinCallLink: Call link feature is not enabled",
                ])),
            );
            return;
          }
          await Y("joinCallLink", {});
        },
        previewAndJoinCallLink: async function (n, r, a, i, l) {
          if (!o("WAWebVoipGatingUtils").callLinksEnabled()) {
            o("WALogger").ERROR(
              F ||
                (F = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: previewAndJoinCallLink: call links disabled",
                ])),
            );
            return;
          }
          o("WAWebVoipLobbyEntryPointStore").setLobbyEntryPoint(
            a != null ? a : null,
            null,
          );
          var e = await t;
          (o("WAWebBweMLModelManager")
            .initBweMLModelsForCall(e)
            .catch(function (e) {
              o("WALogger").WARN(
                O ||
                  (O = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [initBweMLModelsForCall] unhandled error: ",
                    "",
                  ])),
                e,
              );
            }),
            await Y("previewAndJoinCallLink", {
              token: n,
              videoEnabled: r,
              lobbyEntryType: a != null ? a : 0,
              username: i != null ? i : "",
              videoMuted: l != null ? l : !1,
            }));
        },
        handleIncomingSignalingOffer: async function (
          n,
          a,
          i,
          l,
          s,
          u,
          c,
          d,
          m,
        ) {
          var e = await t;
          o("WAWebBweMLModelManager")
            .initBweMLModelsForCall(e)
            .catch(function (e) {
              o("WALogger").WARN(
                B ||
                  (B = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [initBweMLModelsForCall] unhandled error: ",
                    "",
                  ])),
                e,
              );
            });
          var p = n.node();
          r("justknobx")._("360") &&
            o("WAWebVoipRelayOverrides").overrideRelayIp(p);
          var _ = o("WABase64").encodeB64(o("WAWap").encodeStanza(p)),
            f = l != null ? String(l) : "0",
            g = s != null ? String(s) : "0";
          await Y("handleIncomingSignalingOffer", {
            b64Stanza: _,
            msgPlatform: a,
            msgVersion: i,
            msgEStr: f,
            msgTStr: g,
            msgOffline: u,
            isOfferNotContact: c,
            peerJid: d,
            tcToken: m,
          });
        },
        handleIncomingSignalingMessage: async function (
          t,
          n,
          a,
          i,
          l,
          s,
          u,
          c,
        ) {
          var e = t.node();
          r("justknobx")._("360") &&
            o("WAWebVoipRelayOverrides").overrideRelayIp(e);
          var d = o("WABase64").encodeB64(o("WAWap").encodeStanza(e)),
            m = i != null ? String(i) : "0",
            p = l != null ? String(l) : "0";
          await Y("handleIncomingSignalingMessage", {
            b64Stanza: d,
            msgPlatform: n,
            msgVersion: a,
            msgEStr: m,
            msgTStr: p,
            msgOffline: s,
            peerJid: u,
            tcToken: c,
          });
        },
        handleIncomingSignalingAck: async function (t, n, a, i, l) {
          var e = t.node();
          r("justknobx")._("360") &&
            o("WAWebVoipRelayOverrides").overrideRelayIp(e);
          var s = o("WABase64").encodeB64(o("WAWap").encodeStanza(e));
          await Y("handleIncomingSignalingAck", {
            b64Stanza: s,
            ackInfoError: n,
            ackInfoType: a,
            peerJid: i,
            tcToken: l,
          });
        },
        handleIncomingSignalingReceipt: async function (t, n, a) {
          var e = t.node();
          r("justknobx")._("360") &&
            o("WAWebVoipRelayOverrides").overrideRelayIp(e);
          var i = o("WABase64").encodeB64(o("WAWap").encodeStanza(e));
          await Y("handleIncomingSignalingReceipt", {
            b64Stanza: i,
            peerJid: n,
            tcToken: a,
          });
        },
        resendOfferOnDecryptionFailure: async function (t, n) {
          await Y("resendOfferOnDecryptionFailure", { peerJid: t, callId: n });
        },
        resendEncRekeyRetry: async function (t, n) {
          await Y("resendEncRekeyRetry", { peerJid: t, retryCount: n });
        },
        notifyDeviceIdentityChangedOrDeleted: e,
        handleOnTransportMessage: async function (t, n, r) {
          await Y("handleOnTransportMessage", { packet: t, ip: n, port: r }, [
            t,
          ]);
        },
        setCallMute: async function (t) {
          var e = await J("setCallMute", { enable: t });
          return Number(e);
        },
        setCallVideoMute: async function (t) {
          var e = await J("setCallVideoMute", { enable: t });
          return Number(e);
        },
        videoStreamPause: async function () {
          var e = await J("videoStreamPause", {});
          return Number(e);
        },
        videoStreamResume: async function () {
          var e = await J("videoStreamResume", {});
          return Number(e);
        },
        broadcastVideoState: async function () {
          var e = await J("broadcastVideoState", {});
          return Number(e);
        },
        sendReaction: async function (t) {
          await Y("sendReaction", { reaction: t });
        },
        raiseHand: async function (t) {
          await Y("raiseHand", { isHandRaised: t });
        },
        notifyUiViewChange: async function (t, n) {
          var e = await J("notifyUiViewChange", {
            viewMode: t,
            pinnedPeerJid: n != null ? n : "",
          });
          return Number(e);
        },
        requestVideoUpgrade: async function () {
          var e = await J("requestVideoUpgrade", {});
          return Number(e);
        },
        getCallInfo: async function () {
          var e = await J("getCallInfo", {});
          return (
            e === "" &&
              o("WALogger").ERROR(
                W ||
                  (W = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: getCallInfo() failed to retrieve call info",
                  ])),
              ),
            String(e != null ? e : "")
          );
        },
        acceptPeerVideo: async function (t) {
          var e = await J("acceptPeerVideo", { jid: t.jid });
          return (
            e !== 0 &&
              o("WALogger").ERROR(
                q ||
                  (q = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: acceptPeerVideo: Failed with status ",
                    "",
                  ])),
                String(e),
              ),
            Number(e)
          );
        },
        requestPeerMute: async function (t) {
          var e = await J("requestPeerMute", { peerJid: t });
          return Number(e);
        },
        removeCallParticipant: async function (t) {
          var e = await J("removeCallParticipant", { peerJid: t });
          return Number(e);
        },
        waitingRoomAdmit: async function (t) {
          var e = await J("waitingRoomAdmit", { peerJid: t });
          return Number(e);
        },
        waitingRoomDeny: async function (t) {
          var e = await J("waitingRoomDeny", { peerJid: t });
          return Number(e);
        },
        waitingRoomAdmitAll: async function () {
          var e = await J("waitingRoomAdmitAll", {});
          return Number(e);
        },
        waitingRoomToggleActiveCall: async function (t) {
          var e = await J("waitingRoomToggleActiveCall", { enabled: t });
          return Number(e);
        },
        startScreenShare: async function () {
          var e = await J("startScreenShare", {});
          return Number(e);
        },
        stopScreenShare: async function () {
          var e = await J("stopScreenShare", {});
          return Number(e);
        },
        startVideoPreview: async function (t, n) {
          var e = await J("startVideoPreview", { callId: t, selfJid: n });
          return Number(e);
        },
        requestKeyFrame: async function (t) {
          var e = await J("requestKeyFrame", { userJid: t });
          return Number(e);
        },
        updateParticipantsRxSubscription: async function (t, n) {
          var e = await J("updateParticipantsRxSubscription", {
            participantJids: t,
            videoQualities: n,
          });
          return Number(e);
        },
        updateNetworkMedium: async function (t, n) {
          await Y("updateNetworkMedium", { networkMedium: t, networkMtu: n });
        },
        getNetworkConditionerState: async function () {
          try {
            var e = await J("getNetworkConditionerState", {});
            if (e == null) return null;
            var t = JSON.stringify(e);
            return t == null ? null : JSON.parse(t);
          } catch (e) {
            return null;
          }
        },
        getShortStatisticString: async function () {
          try {
            var e = await J("getShortStatisticString", {});
            return String(e != null ? e : "");
          } catch (e) {
            return "";
          }
        },
        getDebugStatisticString: async function () {
          try {
            var e = await J("getDebugStatisticString", {});
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
            var e = await J("getVoipParam", { paramPath: t });
            return String(e != null ? e : "");
          } catch (e) {
            return "";
          }
        },
        callbacks: te,
        inviteToCall: async function (t, n, r) {
          await Y("inviteToCall", {
            invitedParticipantPnUserJid: t,
            invitedParticipantLidUserJid: n,
            deviceJids: r,
          });
        },
        checkOngoingCalls: async function (t, n) {
          await Y("checkOngoingCalls", { callIds: t, callCreatorJids: n });
        },
        sendWebP2PTransport: async function (t, n, r, o, a, i) {
          await Y("sendWebP2PTransport", {
            callId: t,
            ufrag: n,
            pwd: r,
            algo: o,
            fingerprint: a,
            candidatesJson: JSON.stringify(i),
          });
        },
      };
    }
    l.createWorkerProxyStackInterface = X;
  },
  98,
);
