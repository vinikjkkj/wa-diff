__d(
  "WAWebVoipStackInterfaceWeb",
  [
    "WABase64",
    "WALogger",
    "WAOnceWithReset",
    "WAWap",
    "WAWebABProps",
    "WAWebBackendApi",
    "WAWebCallUserJourneyGating",
    "WAWebCoreActionsODS",
    "WAWebCountryCodeUtils",
    "WAWebEnvironment",
    "WAWebLowEndDeviceExperimentGating",
    "WAWebMLModelManager",
    "WAWebNoop",
    "WAWebReleaseToEventLoop",
    "WAWebUA",
    "WAWebVoipAudioCaptureAndPlayback",
    "WAWebVoipCallIdProvider",
    "WAWebVoipCallStateUtils",
    "WAWebVoipExperimentTargetSample",
    "WAWebVoipGatingUtils",
    "WAWebVoipJsonParsersWeb",
    "WAWebVoipLobbyEntryPointStore",
    "WAWebVoipLobbyVisibilityStore",
    "WAWebVoipLocalCallStateStore",
    "WAWebVoipLocalVideoPolicy",
    "WAWebVoipLogDrainer",
    "WAWebVoipMainThreadLockMarker",
    "WAWebVoipMainThreadLockODS",
    "WAWebVoipNativeStackTraceLogger",
    "WAWebVoipP2PConnectionManager",
    "WAWebVoipPerfOptimizations",
    "WAWebVoipQplHelpers",
    "WAWebVoipRelayConnectQpl",
    "WAWebVoipRelayConnectionUtils",
    "WAWebVoipScreeningRecordingInfo",
    "WAWebVoipSctpConnectionManager",
    "WAWebVoipStackInterfaceWebCallbacks",
    "WAWebVoipStackInterfaceWebHelpers",
    "WAWebVoipStackInterfaceWorkerProxy",
    "WAWebVoipStorageInit",
    "WAWebVoipTransportFallbackTracker",
    "WAWebVoipVideoCaptureFpsTracker",
    "WAWebVoipVideoRendererInterface",
    "WAWebVoipVideoRendererRegistry",
    "WAWebVoipVideoWebCodecsRenderer",
    "WAWebVoipWaCallEnums",
    "WAWebVoipWasmArtifactRecoveryEvents",
    "WAWebVoipWasmHeapBuffer",
    "WAWebVoipWasmHeapMonitor",
    "WAWebVoipWebCodecsEncoderState",
    "WAWebVoipWebTransportConnectionManager",
    "WAWebWamEnumLobbyEntryPointType",
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
      G,
      z = r("WAOnceWithReset")(function () {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[VoipStackInterfaceWeb] created on Windows Hybrid - selected factory does not match runtime environment",
              ])),
          )
          .sendLogs("voip-stack-interface-web-created-on-windows");
      });
    function j() {
      try {
        return r("justknobx")._("360");
      } catch (e) {
        return !1;
      }
    }
    function K() {
      if (
        (j(),
        r("WAWebEnvironment").isWindows &&
          !o("WAWebVoipGatingUtils").isWinHybridPlusEnabled())
      )
        throw (
          z(),
          r("err")(
            "createWAWebVoipStackInterface: Attempted to create Web stack in Windows environment",
          )
        );
      if (!o("WAWebVoipGatingUtils").isVoipDownloadEnabled())
        throw r("err")(
          "createWAWebVoipStackInterface: VoIP download is not enabled",
        );
      var e = {
        onVoipReady: r("WAWebNoop"),
        onCallEvent: r("WAWebNoop"),
        initCaptureDriverJS: o("WAWebVoipAudioCaptureAndPlayback")
          .initCaptureDriverJS,
        startCaptureJS: o("WAWebVoipAudioCaptureAndPlayback").startCaptureJS,
        stopCaptureJS: o("WAWebVoipAudioCaptureAndPlayback").stopCaptureJS,
      };
      ((window.WhatsAppVoipWasmCallbacks = e),
        (window.WhatsAppVoipWasmWorkerCompatibleCallbacks = o(
          "WAWebVoipStackInterfaceWebCallbacks",
        ).createWorkerCompatibleCallbacks()));
      var t =
        o("WAWebABProps").getABPropConfigValue(
          "enable_web_voip_proxy_and_sctp_workers",
        ) === !0;
      if ((o("WAWebVoipQplHelpers").voipInitQplAnnotateExecutionMode(t), t)) {
        var a = n("WAWebVoipStackInterfaceWorkerProxy");
        return a.createWorkerProxyStackInterface();
      }
      var i = o("WAWebVoipWasmHeapBuffer").createHeapBufferState(),
        l = o("WAWebBackendApi").frontendSendAndReceive("initializeVoipWasm");
      o("WAWebVoipWasmArtifactRecoveryEvents").onVoipWasmReloadRequested(
        function () {
          l = o("WAWebBackendApi").frontendSendAndReceive("initializeVoipWasm");
        },
      );
      var K = null;
      function Y() {
        o("WAWebVoipWebTransportConnectionManager").registerPacketHandler(
          function (e, t, n) {
            var r = K;
            if (r == null) {
              o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WebTransport] Dropping inbound packet: WASM not initialized",
                  ])),
              );
              return;
            }
            var a = new Uint8Array(e),
              l = o("WAWebVoipWasmHeapBuffer").ensureHeapBuffer(
                r,
                i,
                a.byteLength,
              );
            l !== 0 &&
              (r.GROWABLE_HEAP_U8().set(a, l),
              r.handleOnMessageFromHeap(l, a.byteLength, t, n));
          },
        );
      }
      return {
        type: "web",
        parsers: r("WAWebVoipJsonParsersWeb"),
        voipInit: async function (t, n, r) {
          var e,
            a = await l;
          ((K = a),
            o("WAWebVoipGatingUtils").resetWebTransportFallbackState(),
            a.initVoipLogging(),
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [WebTransport] voipInit wt=",
                  "",
                ])),
              String(o("WAWebVoipGatingUtils").isWebTransportEnabled()),
            ),
            Y(),
            o("WAWebVoipWebTransportConnectionManager").registerFallbackHandler(
              function (e) {
                if (
                  (o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [WebTransport] Falling back to SCTP after connect failure",
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
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [WebTransport] Fallback handler had no cached relay list to replay",
                      ])),
                  );
              },
            ),
            o("WAWebVoipWebTransportConnectionManager").registerHealthyHandler(
              o("WAWebVoipSctpConnectionManager")
                .cleanupWebTransportSctpWarmStandby,
            ),
            o("WAWebVoipStorageInit").initVoipStorageAndMLCache(a));
          var s = !1,
            y = !1;
          try {
            await o(
              "WAWebVoipVideoRendererRegistry",
            ).videoRendererRegistry.init();
            var C = o(
              "WAWebVoipVideoRendererRegistry",
            ).videoRendererRegistry.getRendererType();
            s =
              C ===
              o("WAWebVoipVideoRendererInterface").WAWebVoipVideoRendererType
                .WEBCODECS_H264;
            var b = o("WAWebABProps").getABPropConfigValue(
                "enable_webcodec_video_encode",
              ),
              v =
                s ||
                (await o(
                  "WAWebVoipVideoWebCodecsRenderer",
                ).WAWebVoipVideoWebCodecsRenderer.checkAvailability());
            y =
              !o("WAWebUA").UA.isFirefox && v && b === !0
                ? await o(
                    "WAWebVoipWebCodecsEncoderState",
                  ).checkEncoderSupport()
                : !1;
          } catch (e) {
            o("WALogger").WARN(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: video capability detection failed, disabling passthrough encode/decode: ",
                  "",
                ])),
              e,
            );
          }
          (o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "voip: voipInit: ptDec=",
                " ptEnc=",
                "",
              ])),
            s,
            y,
          ),
            o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [webcodec-encode] enabled=",
                  "",
                ])),
              y,
            ),
            o("WAWebVoipWebCodecsEncoderState").setWebCodecsEncoderEnabled(y),
            o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [webcodec-encode] WebCodecs encoder state ",
                  "",
                ])),
              y,
            ),
            await o("WAWebReleaseToEventLoop").releaseToEventLoop());
          var S =
            (e = await o("WAWebCountryCodeUtils").getMyCallingCode()) != null
              ? e
              : "";
          o("WAWebVoipQplHelpers").voipInitQplAddPoint(
            o("WAWebVoipQplHelpers").VoipInitQplPoint.VOIP_STACK_INIT_START,
          );
          try {
            (o("WAWebVoipStackInterfaceWebHelpers").setABPropsOnWasm(a),
              a.setABPropBool("enable_passthrough_video_decoder", s),
              a.setABPropBool("enable_webcodec_video_encode", y),
              o(
                "WAWebLowEndDeviceExperimentGating",
              ).shouldDisableSoftwareAudioProcessing() &&
                (a.setABPropBool("ns_builtin_available", !0),
                a.setABPropBool("disable_sw_ns_when_builtin_available", !0),
                a.setABPropBool("ml_ns_skip_processing", !0),
                a.setABPropBool("disable_agc", !0),
                a.setABPropBool("hw_aec_available", !0),
                a.setABPropBool("disable_sw_ec_when_builtin_available", !0),
                a.setABPropBool("disable_standalone_agc", !0),
                a.setABPropBool("disable_eq", !0)),
              a.setABPropString("self_country_code", S),
              a.setABPropString(
                "self_abprop_bucket_id_list",
                o(
                  "WAWebVoipExperimentTargetSample",
                ).getExperimentTargetSampleExpoKeys(),
              ),
              a.initVoipStack(t, n, r));
          } catch (e) {
            throw (
              o("WAWebVoipNativeStackTraceLogger").logNativeStackTrace(a, e),
              e
            );
          } finally {
            o("WAWebVoipQplHelpers").voipInitQplAddPoint(
              o("WAWebVoipQplHelpers").VoipInitQplPoint.VOIP_STACK_INIT_END,
            );
          }
          (o("WAWebVoipWasmHeapMonitor").logWasmHeapSnapshot(
            a,
            "voip_stack_init",
          ),
            o("WAWebVoipPerfOptimizations").isPerfOptimizationEnabled(
              o("WAWebVoipPerfOptimizations").PerfOptimizationFlag
                .LOG_RING_BUFFER,
            ) && o("WAWebVoipLogDrainer").startLogDrainer(a));
          var R = a.getWebP2PVirtualIpv4(),
            L = a.getWebP2PVirtualIpv6(),
            E = a.getWebP2PVirtualPort();
          (o("WAWebVoipP2PConnectionManager").initP2PVirtualAddresses(R, L, E),
            o("WAWebVoipP2PConnectionManager").registerOnDataChannelMessage(
              function (e) {
                var t = new Uint8Array(e),
                  n = o("WAWebVoipWasmHeapBuffer").ensureHeapBuffer(
                    a,
                    i,
                    t.byteLength,
                  );
                n !== 0 &&
                  (a.GROWABLE_HEAP_U8().set(t, n),
                  a.handleOnMessageFromHeap(n, t.byteLength, R, E));
              },
            ));
          var k = !1;
          o("WAWebVoipP2PConnectionManager").registerOnDataChannelStateChange(
            function (e) {
              e === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open
                ? ((k = !0),
                  o("WALogger").LOG(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: P2P DataChannel opened, notifying WASM active=true",
                      ])),
                  ),
                  a.notifyWebP2PChannelReady(!0, !1))
                : k &&
                  ((k = !1),
                  o("WALogger").LOG(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: P2P DataChannel state changed to ",
                        " after being open, notifying WASM active=false",
                      ])),
                    e,
                  ),
                  a.notifyWebP2PChannelReady(!1, !1));
            },
          );
        },
        setHideMyIp: async function (t) {
          o("WALogger").LOG(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "voip: setHideMyIp called with hideMyIp=",
                "",
              ])),
            t,
          );
          var e = await l;
          e.setHideMyIp(t);
        },
        setOwnOtherDeviceJids: async function (t) {
          var e = await l,
            n = new e.StringList();
          t.forEach(function (e) {
            return n.push_back(e);
          });
          try {
            e.setOwnOtherDeviceJids(n);
          } finally {
            n.delete();
          }
        },
        handleSignOut: function () {
          (o("WALogger").LOG(
            C ||
              (C = babelHelpers.taggedTemplateLiteralLoose([
                "voip: handleSignOut: cleaning up all connections",
              ])),
          ),
            o("WAWebVoipLogDrainer").stopLogDrainer(),
            o("WAWebVoipWebTransportConnectionManager").closeAllConnections(),
            o("WAWebVoipSctpConnectionManager").cleanupAllConnections(),
            o("WAWebVoipTransportFallbackTracker").finalizeFallbackOutcome(),
            o("WAWebVoipTransportFallbackTracker").resetFallbackTracker(),
            o("WAWebVoipGatingUtils").resetWebTransportFallbackState(),
            l
              .then(function (e) {
                o("WAWebVoipWasmHeapBuffer").freeHeapBuffer(e, i);
              })
              .catch(r("WAWebNoop")));
        },
        startCall: async function (t, n, r, a, i, s, u) {
          (o("WAWebVoipGatingUtils").markCurrentCallAsGroup(!1),
            o("WAWebVoipLobbyEntryPointStore").resetLobbyEntryPoint());
          var e = await l;
          o("WAWebMLModelManager")
            .initMLModelsForCall(e)
            .catch(function (e) {
              o("WALogger").WARN(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [initMLModelsForCall] unhandled error: ",
                    "",
                  ])),
                e,
              );
            });
          var c = new e.StringList();
          n.forEach(function (e) {
            c.push_back(e);
          });
          var d = Q(e, u);
          try {
            e.startVoipCall(t.toString({ legacy: !0 }), c, r, a, i, s, d);
          } catch (t) {
            throw (
              o("WAWebVoipNativeStackTraceLogger").logNativeStackTrace(e, t),
              t
            );
          } finally {
            (c.delete(), d.delete());
          }
        },
        startGroupCall: async function (t, n, r, a, i, s, u, c, d, m, p, _, f) {
          if (
            (o("WAWebVoipGatingUtils").markCurrentCallAsGroup(!0),
            !o("WAWebVoipGatingUtils").isCallingEnabled())
          ) {
            o("WALogger").ERROR(
              v ||
                (v = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: startGroupCall: Web group calling is not enabled",
                ])),
            );
            return;
          }
          o("WAWebVoipLobbyEntryPointStore").setLobbyEntryPoint(
            _ != null ? _ : null,
          );
          var e = await l;
          o("WAWebMLModelManager")
            .initMLModelsForCall(e)
            .catch(function (e) {
              o("WALogger").WARN(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [initMLModelsForCall] unhandled error: ",
                    "",
                  ])),
                e,
              );
            });
          var g = new e.StringList();
          t.forEach(function (e) {
            g.push_back(e);
          });
          var h = new e.StringList();
          n.forEach(function (e) {
            h.push_back(e);
          });
          var y = new e.StringList();
          r.forEach(function (e) {
            y.push_back(e);
          });
          try {
            var C = e.startVoipGroupCall(
              g,
              h,
              y,
              a,
              i,
              s,
              u,
              c,
              d,
              m,
              p != null ? p : 0,
              _ != null ? _ : 0,
              f != null ? f : "",
            );
            C !== 0 &&
              o("WALogger")
                .ERROR(
                  R ||
                    (R = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: startGroupCall: failed to start group call",
                    ])),
                )
                .sendLogs("voip-start-group-call-failed");
          } finally {
            (g.delete(), h.delete(), y.delete());
          }
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
              o("WAWebVoipLobbyEntryPointStore").setLobbyEntryPoint(X(r)),
            o("WAWebVoipCallIdProvider").resetPendingCallId());
          var a = await l;
          try {
            a.acceptCall(t, n);
          } catch (e) {
            throw (
              o("WAWebVoipNativeStackTraceLogger").logNativeStackTrace(a, e),
              e
            );
          }
        },
        rejectCallWithEndReason: async function (t) {
          o("WAWebVoipLobbyEntryPointStore").resetLobbyEntryPoint();
          var e = await l;
          try {
            e.rejectCallWithEndReason(t);
          } catch (t) {
            throw (
              o("WAWebVoipNativeStackTraceLogger").logNativeStackTrace(e, t),
              t
            );
          }
        },
        screenCall: async function (t) {
          var e = await l;
          try {
            return e.screenCall(t);
          } catch (t) {
            throw (
              o("WAWebVoipNativeStackTraceLogger").logNativeStackTrace(e, t),
              t
            );
          }
        },
        acceptMediaOnly: async function () {
          var e = await l;
          try {
            return e.acceptMediaOnly();
          } catch (t) {
            throw (
              o("WAWebVoipNativeStackTraceLogger").logNativeStackTrace(e, t),
              t
            );
          }
        },
        commitAccept: async function () {
          o("WAWebVoipCallIdProvider").resetPendingCallId();
          var e = await l;
          try {
            return e.commitAccept();
          } catch (t) {
            throw (
              o("WAWebVoipNativeStackTraceLogger").logNativeStackTrace(e, t),
              t
            );
          }
        },
        screeningPromptFinished: async function () {
          var e = await l;
          try {
            return e.screeningPromptFinished();
          } catch (t) {
            throw (
              o("WAWebVoipNativeStackTraceLogger").logNativeStackTrace(e, t),
              t
            );
          }
        },
        getScreeningRecordingInfo: async function () {
          var e = await l;
          try {
            return o(
              "WAWebVoipScreeningRecordingInfo",
            ).parseScreeningRecordingInfo(e.getScreeningRecordingInfo());
          } catch (t) {
            return (
              o("WAWebVoipNativeStackTraceLogger").logNativeStackTrace(e, t),
              null
            );
          }
        },
        endCall: async function (t, n) {
          var e = await l;
          o("WAWebVoipGatingUtils").isWebTransportEnabled() &&
            o("WAWebVoipWebTransportConnectionManager").prepareForEndCall();
          try {
            e.endCall(t, n);
          } catch (t) {
            throw (
              o("WAWebVoipNativeStackTraceLogger").logNativeStackTrace(e, t),
              t
            );
          } finally {
            (o("WAWebVoipGatingUtils").isWebTransportEnabled() &&
              o("WAWebVoipWebTransportConnectionManager").closeAllConnections(),
              o("WAWebVoipTransportFallbackTracker").finalizeFallbackOutcome(),
              o("WAWebVoipTransportFallbackTracker").resetFallbackTracker(),
              o("WAWebVoipGatingUtils").resetWebTransportFallbackState());
          }
        },
        transferCallStart: async function (t) {
          var e = t.callId,
            n = t.cameraOff,
            r = t.hasVideo,
            a = t.mute,
            i = t.peerActiveDevice,
            s = t.rootCallCreator,
            u = t.rootCallId,
            c = await l;
          try {
            return c.transferCallStart(u, s, i, e, r, a, n);
          } catch (e) {
            throw (
              o("WAWebVoipNativeStackTraceLogger").logNativeStackTrace(c, e),
              e
            );
          }
        },
        rejectCallWithoutCallContext: async function (t, n, r, o, a, i, s) {
          var e = await l;
          e.rejectCallWithoutCallContext(t, n, r, o, a, i, s);
        },
        joinOngoingCall: async function (
          t,
          n,
          a,
          i,
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
        ) {
          if (
            (o("WAWebVoipGatingUtils").markCurrentCallAsGroup(!0),
            !o("WAWebVoipGatingUtils").isCallingEnabled())
          ) {
            o("WALogger").ERROR(
              L ||
                (L = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: joinOngoingCall: Web group calling is not enabled",
                ])),
            );
            return;
          }
          (o("WAWebVoipLobbyEntryPointStore").setLobbyEntryPoint(
            C != null ? C : null,
            !h,
          ),
            o("WAWebVoipCallIdProvider").resetPendingCallId());
          var e = await l,
            v = new e.StringList();
          i.forEach(function (e) {
            v.push_back(e);
          });
          var S = new e.StringList();
          s.forEach(function (e) {
            S.push_back(e);
          });
          var R = new e.StringList();
          u.forEach(function (e) {
            R.push_back(e);
          });
          try {
            var k = e.joinVoipOngoingCall(
              t,
              n,
              a,
              v,
              S,
              R,
              c,
              d,
              m,
              p,
              _,
              f,
              g,
              h,
              y,
              C != null ? C : 0,
              b != null ? b : !1,
            );
            if (k !== 0)
              throw r("err")(
                "voip: joinOngoingCall: failed to join ongoing call",
              );
          } catch (e) {
            (o("WAWebCoreActionsODS").logCallGroupJoinError(),
              o("WALogger")
                .ERROR(
                  E ||
                    (E = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: joinOngoingCall: failed to join ongoing call ",
                      "",
                    ])),
                  e,
                )
                .sendLogs("voip-join-ongoing-call-failed"));
          } finally {
            (v.delete(), S.delete(), R.delete());
          }
        },
        startVoiceChat: async function (t) {
          var e = t.callId,
            n = t.groupJid,
            r = t.groupPhash,
            a = t.groupSize,
            i = t.mute;
          (o("WAWebVoipGatingUtils").markCurrentCallAsGroup(!0),
            o("WAWebVoipLobbyEntryPointStore").setLobbyEntryPoint(null));
          var s = await l;
          o("WAWebMLModelManager")
            .initMLModelsForCall(s)
            .catch(function (e) {
              o("WALogger").WARN(
                k ||
                  (k = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [initMLModelsForCall] unhandled error: ",
                    "",
                  ])),
                e,
              );
            });
          var u = s.startVoipVoiceChat(e, n, r, a, i);
          return (
            u !== 0 &&
              o("WALogger")
                .ERROR(
                  I ||
                    (I = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: startVoiceChat: failed with status ",
                      "",
                    ])),
                  u,
                )
                .sendLogs("voip-start-voice-chat-failed"),
            u
          );
        },
        joinVoiceChat: async function (t) {
          var e = t.callCreatorIsNotContact,
            n = t.callCreatorJid,
            r = t.callId,
            a = t.groupJid,
            i = t.groupParticipantsDeviceJidsCsv,
            s = t.groupParticipantsLidUserJid,
            u = t.groupParticipantsPnUserJid,
            c = t.groupPhash,
            d = t.initialGroupTransactionId,
            m = t.isDeviceSwitch,
            p = t.joinAndAccept,
            _ = t.lobbyEntryType;
          (o("WAWebVoipGatingUtils").markCurrentCallAsGroup(!0),
            o("WAWebVoipLobbyEntryPointStore").setLobbyEntryPoint(
              _ != null ? _ : null,
              !p,
            ),
            o("WAWebVoipCallIdProvider").resetPendingCallId());
          var f = await l,
            g = [],
            h = function (t) {
              var e = new f.StringList();
              return (
                g.push(e),
                t.forEach(function (t) {
                  return e.push_back(t);
                }),
                e
              );
            };
          try {
            var y = f.joinVoipVoiceChat(
              r,
              n,
              h(u),
              h(s),
              h(i),
              a,
              d,
              e,
              c,
              p,
              m,
            );
            return (
              y !== 0 &&
                (o("WAWebCoreActionsODS").logCallGroupJoinError(),
                o("WALogger")
                  .ERROR(
                    T ||
                      (T = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: joinVoiceChat: failed with status ",
                        "",
                      ])),
                    y,
                  )
                  .sendLogs("voip-join-voice-chat-failed")),
              y
            );
          } finally {
            g.forEach(function (e) {
              return e.delete();
            });
          }
        },
        sendWaveAll: async function () {
          var e = await l,
            t = e.sendWaveAll();
          return t;
        },
        extendVoiceChatTimeout: async function (t) {
          var e = await l;
          return e.extendVoiceChatTimeout(t);
        },
        simulateNativeAnr: r("WAWebNoop"),
        handleDeviceJidList: r("WAWebNoop"),
        previewCallLink: async function (t, n, r, a, i) {
          if (!o("WAWebVoipGatingUtils").isCallingEnabled())
            return (
              o("WALogger").ERROR(
                D ||
                  (D = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: previewCallLink: Call link feature is not enabled",
                  ])),
              ),
              -1
            );
          var e = 22;
          if (t.length !== e)
            return (
              o("WALogger").ERROR(
                x ||
                  (x = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: previewCallLink: invalid token length ",
                    ", expected ",
                    "",
                  ])),
                t.length,
                e,
              ),
              -1
            );
          var s = o("WAWebVoipLobbyEntryPointStore").snapshotLobbyEntryPoint();
          (o("WAWebVoipLobbyEntryPointStore").setLobbyEntryPoint(
            r != null ? r : null,
          ),
            o("WAWebVoipCallIdProvider").resetPendingCallId());
          var u = await l.catch(function (e) {
            throw (
              o("WAWebVoipLobbyEntryPointStore").resetLobbyEntryPoint(),
              e
            );
          });
          try {
            var c = u.previewCallLink(
              t,
              n,
              r != null ? r : 0,
              a != null ? a : "",
              (i != null ? i : !1) ||
                !o("WAWebVoipLocalVideoPolicy").isLocalVideoAllowed(),
            );
            return (
              c !== 0 &&
                (o("WALogger")
                  .ERROR(
                    $ ||
                      ($ = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: previewCallLink: failed with status ",
                        "",
                      ])),
                    c,
                  )
                  .sendLogs("voip-preview-call-link-failed"),
                o("WAWebVoipLobbyEntryPointStore").restoreLobbyEntryPoint(s)),
              c
            );
          } catch (e) {
            throw (
              o("WAWebVoipLobbyEntryPointStore").resetLobbyEntryPoint(),
              o("WAWebVoipNativeStackTraceLogger").logNativeStackTrace(u, e),
              e
            );
          }
        },
        joinCallLink: async function () {
          if (!o("WAWebVoipGatingUtils").isCallingEnabled()) {
            o("WALogger").ERROR(
              P ||
                (P = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: joinCallLink: Call link feature is not enabled",
                ])),
            );
            return;
          }
          var e = await l;
          try {
            var t = e.joinCallLink();
            t !== 0 &&
              o("WALogger")
                .ERROR(
                  N ||
                    (N = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: joinCallLink: failed with status ",
                      "",
                    ])),
                  t,
                )
                .sendLogs("voip-join-call-link-failed");
          } catch (t) {
            throw (
              o("WAWebVoipNativeStackTraceLogger").logNativeStackTrace(e, t),
              t
            );
          }
        },
        previewAndJoinCallLink: async function (t, n, r, a, i, s) {
          if (!o("WAWebVoipGatingUtils").isCallingEnabled())
            return (
              o("WALogger").ERROR(
                M ||
                  (M = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: previewAndJoinCallLink: call links disabled",
                  ])),
              ),
              -1
            );
          var e = o("WAWebVoipLobbyEntryPointStore").snapshotLobbyEntryPoint();
          (o("WAWebVoipLobbyEntryPointStore").setLobbyEntryPoint(
            r != null ? r : null,
          ),
            o("WAWebVoipCallIdProvider").resetPendingCallId());
          var u = await l.catch(function (e) {
            throw (
              o("WAWebVoipLobbyEntryPointStore").resetLobbyEntryPoint(),
              e
            );
          });
          try {
            o("WAWebMLModelManager")
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
              });
            var c = u.previewAndJoinCallLink(
              t,
              n,
              r != null ? r : 0,
              a != null ? a : "",
              (i != null ? i : !1) ||
                !o("WAWebVoipLocalVideoPolicy").isLocalVideoAllowed(),
              s != null ? s : "",
            );
            return (
              c !== 0 &&
                (o("WALogger")
                  .ERROR(
                    A ||
                      (A = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: previewAndJoinCallLink: failed with status ",
                        "",
                      ])),
                    c,
                  )
                  .sendLogs("voip-preview-and-join-call-link-failed"),
                o("WAWebVoipLobbyEntryPointStore").restoreLobbyEntryPoint(e)),
              c
            );
          } catch (e) {
            throw (
              o("WAWebVoipLobbyEntryPointStore").resetLobbyEntryPoint(),
              o("WAWebVoipNativeStackTraceLogger").logNativeStackTrace(u, e),
              e
            );
          }
        },
        handleIncomingSignalingOffer: async function (
          t,
          n,
          r,
          a,
          i,
          s,
          u,
          c,
          d,
        ) {
          var e = await l;
          o("WAWebMLModelManager")
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
            });
          var m = t.node(),
            p = o("WABase64").encodeB64(o("WAWap").encodeStanza(m)),
            _ = Q(e, d),
            f = a != null ? String(a) : "0",
            g = i != null ? String(i) : "0";
          try {
            e.handleIncomingSignalingOffer(p, n, r, f, g, s, u, c, _);
          } catch (t) {
            throw (
              o("WAWebVoipNativeStackTraceLogger").logNativeStackTrace(e, t),
              t
            );
          } finally {
            _.delete();
          }
        },
        handleIncomingSignalingMessage: async function (t) {
          var e = t.msgE,
            n = t.msgOffline,
            r = t.msgPlatform,
            a = t.msgT,
            i = t.msgVersion,
            s = t.peerJid,
            u = t.tcToken,
            c = t.xmlNode,
            d = await l,
            m = o("WABase64").encodeB64(o("WAWap").encodeStanza(c.node())),
            p = Q(d, u),
            _ = e != null ? String(e) : "0",
            f = a != null ? String(a) : "0";
          try {
            d.handleIncomingSignalingMessage(m, r, i, _, f, n, s, p);
          } catch (e) {
            throw (
              o("WAWebVoipNativeStackTraceLogger").logNativeStackTrace(d, e),
              e
            );
          } finally {
            p.delete();
          }
        },
        handleIncomingSignalingAck: async function (t) {
          var e = t.ackInfoError,
            n = t.ackInfoType,
            r = t.peerJid,
            a = t.tcToken,
            i = t.xmlNode,
            s = await l,
            u = i.node(),
            c = o("WABase64").encodeB64(o("WAWap").encodeStanza(u)),
            d = Q(s, a);
          try {
            s.handleIncomingSignalingAck(c, e, n, r, d);
          } catch (e) {
            throw (
              o("WAWebVoipNativeStackTraceLogger").logNativeStackTrace(s, e),
              e
            );
          } finally {
            d.delete();
          }
        },
        handleIncomingSignalingReceipt: async function (t, n, r) {
          var e = await l,
            a = o("WABase64").encodeB64(o("WAWap").encodeStanza(t.node())),
            i = Q(e, r);
          try {
            e.handleIncomingSignalingReceipt(a, n, i);
          } catch (t) {
            throw (
              o("WAWebVoipNativeStackTraceLogger").logNativeStackTrace(e, t),
              t
            );
          } finally {
            i.delete();
          }
        },
        resendOfferOnDecryptionFailure: async function (t, n) {
          var e = await l;
          e.resendOfferOnDecryptionFailure(t, n);
        },
        resendEncRekeyRetry: async function (t, n) {
          var e = await l;
          e.resendEncRekeyRetry(t, n);
        },
        notifyDeviceIdentityChangedOrDeleted: r("WAWebNoop"),
        handleOnTransportMessage: async function (t, n, r) {
          var e = K != null ? K : await l,
            a = new Uint8Array(t),
            s = o("WAWebVoipWasmHeapBuffer").ensureHeapBuffer(
              e,
              i,
              a.byteLength,
            );
          s !== 0 &&
            (e.GROWABLE_HEAP_U8().set(a, s),
            e.handleOnMessageFromHeap(s, a.byteLength, n, r));
        },
        markRelayConnected: async function (t, n) {
          var e = K != null ? K : await l;
          e.markRelayConnected(t, n);
        },
        logTsEventStringData: async function (t, n, r) {
          var e = K != null ? K : await l;
          e.tsLoggerLogEventStringData(t, n, r);
        },
        setCallMute: async function (t) {
          var e = await l,
            n = e.setCallMute(t);
          return n;
        },
        setCallVideoMute: async function (t) {
          if (!t && !o("WAWebVoipLocalVideoPolicy").isLocalVideoAllowed())
            return (
              o("WALogger").LOG(
                O ||
                  (O = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: setCallVideoMute(false) blocked by local video policy",
                  ])),
              ),
              o("WAWebVoipLocalVideoPolicy").LOCAL_VIDEO_BLOCKED_STATUS
            );
          var e = await l,
            n = e.setCallVideoMute(t);
          return n;
        },
        videoStreamPause: async function () {
          var e = await l,
            t = e.videoStreamPause();
          return t;
        },
        videoStreamResume: async function () {
          var e = await l,
            t = e.videoStreamResume();
          return t;
        },
        broadcastVideoState: async function () {
          var e = await l,
            t = e.broadcastVideoState();
          return t;
        },
        sendReaction: async function (t) {
          var e = await l;
          e.sendReaction(t);
        },
        raiseHand: async function (t) {
          var e = await l;
          e.raiseHand(t);
        },
        sendCapiDtmfTone: async function (t) {
          var e = await l;
          return e.sendCapiDtmfTone(t);
        },
        notifyUiViewChange: async function (t, n) {
          var e = await l,
            r = e.notifyUiViewChange(t, n != null ? n : "");
          return r;
        },
        requestVideoUpgrade: async function () {
          if (!o("WAWebVoipLocalVideoPolicy").isLocalVideoAllowed())
            return (
              o("WALogger").LOG(
                B ||
                  (B = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: requestVideoUpgrade blocked by local video policy",
                  ])),
              ),
              o("WAWebVoipLocalVideoPolicy").LOCAL_VIDEO_BLOCKED_STATUS
            );
          var e = await l,
            t = e.requestVideoUpgrade();
          return t;
        },
        getCallInfo: async function () {
          var e = await l,
            t = e.getCallInfo();
          return (
            t === "" &&
              o("WALogger").ERROR(
                W ||
                  (W = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: getCallInfo() failed to retrieve call info",
                  ])),
              ),
            t
          );
        },
        acceptPeerVideo: async function (t) {
          var e = t.jid,
            n = await l,
            r = n.acceptPeerVideo(e);
          return (
            r !== 0 &&
              o("WALogger").ERROR(
                q ||
                  (q = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: acceptPeerVideo: Failed with status ",
                    "",
                  ])),
                r,
              ),
            r
          );
        },
        requestPeerMute: async function (t) {
          var e = await l,
            n = e.requestPeerMute(t);
          return n;
        },
        removeCallParticipant: async function (t) {
          var e = await l,
            n = e.removeCallParticipant(t);
          return n;
        },
        waitingRoomAdmit: async function (t) {
          var e = await l,
            n = e.waitingRoomAdmit(t);
          return n;
        },
        waitingRoomDeny: async function (t) {
          var e = await l,
            n = e.waitingRoomDeny(t);
          return n;
        },
        waitingRoomAdmitAll: async function () {
          var e = await l,
            t = e.waitingRoomAdmitAll();
          return t;
        },
        waitingRoomToggleActiveCall: async function (t) {
          var e = await l,
            n = e.waitingRoomToggleActiveCall(t);
          return n;
        },
        updateParticipantsRxSubscription: async function (t, n) {
          var e = await l,
            r = new e.StringList();
          t.forEach(function (e) {
            r.push_back(e);
          });
          var o = new e.IntList();
          n.forEach(function (e) {
            o.push_back(e);
          });
          try {
            var a = e.updateParticipantsRxSubscription(r, o);
            return a;
          } finally {
            (r.delete(), o.delete());
          }
        },
        startScreenShare: async function () {
          var e = await l,
            t = e.startScreenShare();
          return t;
        },
        stopScreenShare: async function () {
          var e = await l,
            t = e.stopScreenShare();
          return t;
        },
        startVideoPreview: async function (t, n) {
          var e = await l,
            r = e.startVideoPreview(t, n);
          return r;
        },
        requestKeyFrame: async function (t, n) {
          var e = await l,
            r = t.toJid(),
            o = n ? e.requestAuxiliaryKeyFrame(r) : e.requestKeyFrame(r);
          return o;
        },
        updateNetworkMedium: async function (t, n) {
          var e = await l;
          (e.updateNetworkMedium(t, 0),
            o("WALogger").LOG(
              U ||
                (U = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: updateNetworkMedium: medium=",
                  ", mtu=0",
                ])),
              t,
            ));
        },
        getNetworkConditionerState: async function () {
          try {
            var e = await l,
              t = e.isTxNetworkConditionerOn(),
              n = e.isRxNetworkConditionerOn(),
              r = null,
              o = null;
            return (
              t && (r = e.getCurrentTxNetworkConditionerParameters()),
              n && (o = e.getCurrentRxNetworkConditionerParameters()),
              { isTxOn: t, isRxOn: n, txParams: r, rxParams: o }
            );
          } catch (e) {
            return null;
          }
        },
        getShortStatisticString: async function () {
          try {
            var e = await l;
            return e.getShortStatisticString();
          } catch (e) {
            return "";
          }
        },
        getDebugStatisticString: async function () {
          try {
            var e = await l;
            return e.getDebugStatisticString();
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
            var e = await l,
              n = e.getVoipParam(t);
            return (
              o("WALogger").LOG(
                V ||
                  (V = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: getVoipParam(",
                    ") = ",
                    "",
                  ])),
                t,
                n,
              ),
              n
            );
          } catch (e) {
            return (
              o("WALogger").ERROR(
                H ||
                  (H = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: getVoipParam: error=",
                    "",
                  ])),
                e,
              ),
              ""
            );
          }
        },
        cleanupUnfinishedCallStats: async function () {
          var e = await l,
            t = o("WAWebVoipMainThreadLockMarker").startMainThreadLockMarker(
              "fs_cleanup",
              "main",
            );
          try {
            e.cleanupUnfinishedCallStats();
          } catch (t) {
            throw (
              o("WAWebVoipNativeStackTraceLogger").logNativeStackTrace(e, t),
              t
            );
          } finally {
            o("WAWebVoipMainThreadLockODS").logMainThreadLockCallDuration(
              "fs_cleanup",
              o("WAWebVoipMainThreadLockMarker").finishMainThreadLockMarker(t),
            );
          }
          return !0;
        },
        isWebP2PEnabled: async function (t) {
          try {
            var e = await l;
            return e.isWebP2PEnabled(t) === !0;
          } catch (e) {
            return (
              o("WALogger").ERROR(
                G ||
                  (G = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: isWebP2PEnabled: error=",
                    "",
                  ])),
                e,
              ),
              !1
            );
          }
        },
        sendWebP2PTransport: async function (t, n, r, o, a, i) {
          var e = await l,
            s = JSON.stringify(i);
          e.sendWebP2PTransport(t, n, r, o, a, s);
        },
        callbacks: e,
        inviteToCall: async function (t, n, r) {
          var e = await l,
            o = new e.StringList();
          r.forEach(function (e) {
            return o.push_back(e);
          });
          try {
            var a = e.inviteToCall(t, n, o);
            return a;
          } finally {
            o.delete();
          }
        },
        sendWave: async function (t, n, r) {
          var e = await l,
            o = new e.StringList();
          r.forEach(function (e) {
            return o.push_back(e);
          });
          try {
            var a = e.sendWave(t, n, o);
          } finally {
            o.delete();
          }
        },
        checkOngoingCalls: async function (t, n) {
          var e = await l,
            r = new e.StringList();
          t.forEach(function (e) {
            return r.push_back(e);
          });
          var o = new e.StringList();
          n.forEach(function (e) {
            return o.push_back(e);
          });
          try {
            e.checkOngoingCalls(r, o);
          } finally {
            (r.delete(), o.delete());
          }
        },
      };
    }
    function Q(e, t) {
      var n = new e.Uint8List();
      if (t) {
        var r = new Uint8Array(t);
        r.forEach(function (e) {
          return n.push_back(e);
        });
      }
      return n;
    }
    function X(e) {
      var t =
        o("WAWebCallUserJourneyGating").isCallUserJourneyM2Enabled() &&
        o("WAWebVoipLobbyVisibilityStore").getGroupRingLobbyEntryPoint() ===
          o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE
            .OPEN_FOR_RINGING;
      return e ===
        o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE
          .NOTIFICATION_BUTTON && !t
        ? o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE
            .NOTIFICATION_BUTTON
        : o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE
            .OPEN_FOR_RINGING;
    }
    l.createWAWebVoipStackInterface = K;
  },
  98,
);
