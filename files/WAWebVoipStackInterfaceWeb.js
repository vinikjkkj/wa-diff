__d(
  "WAWebVoipStackInterfaceWeb",
  [
    "WABase64",
    "WACommonTaskScheduler",
    "WALogger",
    "WAWap",
    "WAWebABProps",
    "WAWebBackendApi",
    "WAWebBweMLModelManager",
    "WAWebCoreActionsODS",
    "WAWebLowEndDeviceExperimentGating",
    "WAWebNoop",
    "WAWebReleaseToEventLoop",
    "WAWebUA",
    "WAWebVoipAudioCaptureAndPlayback",
    "WAWebVoipGatingUtils",
    "WAWebVoipJsonParsersWeb",
    "WAWebVoipLogDrainer",
    "WAWebVoipNativeStackTraceLogger",
    "WAWebVoipP2PConnectionManager",
    "WAWebVoipPerfOptimizations",
    "WAWebVoipQplHelpers",
    "WAWebVoipRelayConnectionUtils",
    "WAWebVoipSctpConnectionManager",
    "WAWebVoipStackInterfaceWebCallbacks",
    "WAWebVoipStackInterfaceWebHelpers",
    "WAWebVoipStackInterfaceWorkerProxy",
    "WAWebVoipStorageInit",
    "WAWebVoipVideoCaptureFpsTracker",
    "WAWebVoipVideoRendererInterface",
    "WAWebVoipVideoRendererRegistry",
    "WAWebVoipVideoWebCodecsRenderer",
    "WAWebVoipWasmHeapBuffer",
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
      w;
    function A() {
      if (!o("WAWebVoipGatingUtils").isVoipDownloadEnabled())
        throw r("err")(
          "createWAWebVoipStackInterface: VoIP download is not enabled",
        );
      var t = {
        onVoipReady: r("WAWebNoop"),
        onCallEvent: r("WAWebNoop"),
        initCaptureDriverJS: o("WAWebVoipAudioCaptureAndPlayback")
          .initCaptureDriverJS,
        startCaptureJS: o("WAWebVoipAudioCaptureAndPlayback").startCaptureJS,
        stopCaptureJS: o("WAWebVoipAudioCaptureAndPlayback").stopCaptureJS,
      };
      ((window.WhatsAppVoipWasmCallbacks = t),
        (window.WhatsAppVoipWasmWorkerCompatibleCallbacks = o(
          "WAWebVoipStackInterfaceWebCallbacks",
        ).createWorkerCompatibleCallbacks()));
      var a =
        o("WAWebABProps").getABPropConfigValue(
          "enable_web_voip_proxy_and_sctp_workers",
        ) === !0;
      if ((o("WAWebVoipQplHelpers").voipInitQplAnnotateExecutionMode(a), a)) {
        var i = n("WAWebVoipStackInterfaceWorkerProxy");
        return i.createWorkerProxyStackInterface();
      }
      var l = o("WAWebVoipWasmHeapBuffer").createHeapBufferState(),
        A = o("WAWebBackendApi").frontendSendAndReceive("initializeVoipWasm"),
        O = null;
      function B() {
        o("WAWebVoipWebTransportConnectionManager").registerPacketHandler(
          function (t, n, r) {
            var a = O;
            if (a == null) {
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WebTransport] Dropping inbound packet: WASM not initialized",
                  ])),
              );
              return;
            }
            var i = new Uint8Array(t),
              s = o("WAWebVoipWasmHeapBuffer").ensureHeapBuffer(
                a,
                l,
                i.byteLength,
              );
            s !== 0 &&
              (a.GROWABLE_HEAP_U8().set(i, s),
              a.handleOnMessageFromHeap(s, i.byteLength, n, r));
          },
        );
      }
      return {
        type: "web",
        parsers: r("WAWebVoipJsonParsersWeb"),
        voipInit: async function (t, n, a) {
          var e = await A;
          ((O = e),
            o("WAWebVoipGatingUtils").isWebTransportEnabled() && B(),
            o("WAWebVoipStorageInit").initVoipStorageAndMLCache(e));
          var i = !1,
            _ = !1;
          try {
            await o(
              "WAWebVoipVideoRendererRegistry",
            ).videoRendererRegistry.init();
            var f = o(
              "WAWebVoipVideoRendererRegistry",
            ).videoRendererRegistry.getRendererType();
            i =
              f ===
              o("WAWebVoipVideoRendererInterface").WAWebVoipVideoRendererType
                .WEBCODECS_H264;
            var g = o("WAWebABProps").getABPropConfigValue(
                "enable_webcodec_video_encode",
              ),
              h =
                i ||
                (await o(
                  "WAWebVoipVideoWebCodecsRenderer",
                ).WAWebVoipVideoWebCodecsRenderer.checkAvailability());
            _ =
              !o("WAWebUA").UA.isFirefox && h && g === !0
                ? await o(
                    "WAWebVoipWebCodecsEncoderState",
                  ).checkEncoderSupport()
                : !1;
          } catch (e) {
            o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: video capability detection failed, disabling passthrough encode/decode: ",
                  "",
                ])),
              e,
            );
          }
          (o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: voipInit: ptDec=",
                " ptEnc=",
                "",
              ])),
            i,
            _,
          ),
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [webcodec-encode] enabled=",
                  "",
                ])),
              _,
            ),
            o("WAWebVoipWebCodecsEncoderState").setWebCodecsEncoderEnabled(_),
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [webcodec-encode] WebCodecs encoder state ",
                  "",
                ])),
              _,
            ),
            o("WAWebABProps").getABPropConfigValue("wmi_worker_scheduler_web")
              ? await r("WACommonTaskScheduler").yield()
              : await o("WAWebReleaseToEventLoop").releaseToEventLoop(),
            o("WAWebVoipQplHelpers").voipInitQplAddPoint(
              o("WAWebVoipQplHelpers").VoipInitQplPoint.VOIP_STACK_INIT_START,
            ));
          try {
            (o("WAWebVoipStackInterfaceWebHelpers").setABPropsOnWasm(e),
              e.setABPropBool("enable_passthrough_video_decoder", i),
              e.setABPropBool("enable_webcodec_video_encode", _),
              o(
                "WAWebLowEndDeviceExperimentGating",
              ).shouldDisableSoftwareAudioProcessing() &&
                (e.setABPropBool("ns_builtin_available", !0),
                e.setABPropBool("disable_sw_ns_when_builtin_available", !0),
                e.setABPropBool("ml_ns_skip_processing", !0),
                e.setABPropBool("disable_agc", !0),
                e.setABPropBool("hw_aec_available", !0),
                e.setABPropBool("disable_sw_ec_when_builtin_available", !0),
                e.setABPropBool("disable_standalone_agc", !0),
                e.setABPropBool("disable_eq", !0)),
              e.initVoipStack(t, n, a));
          } catch (t) {
            throw (
              o("WAWebVoipNativeStackTraceLogger").logNativeStackTrace(e, t),
              t
            );
          } finally {
            o("WAWebVoipQplHelpers").voipInitQplAddPoint(
              o("WAWebVoipQplHelpers").VoipInitQplPoint.VOIP_STACK_INIT_END,
            );
          }
          (o("WAWebVoipWasmHeapMonitor").logWasmHeapSnapshot(
            e,
            "voip_stack_init",
          ),
            o("WAWebVoipPerfOptimizations").isPerfOptimizationEnabled(
              o("WAWebVoipPerfOptimizations").PerfOptimizationFlag
                .LOG_RING_BUFFER,
            ) && o("WAWebVoipLogDrainer").startLogDrainer(e));
          var y = e.getWebP2PVirtualIpv4(),
            C = e.getWebP2PVirtualIpv6(),
            b = e.getWebP2PVirtualPort();
          (o("WAWebVoipP2PConnectionManager").initP2PVirtualAddresses(y, C, b),
            o("WAWebVoipP2PConnectionManager").registerOnDataChannelMessage(
              function (t) {
                var n = new Uint8Array(t),
                  r = o("WAWebVoipWasmHeapBuffer").ensureHeapBuffer(
                    e,
                    l,
                    n.byteLength,
                  );
                (e.GROWABLE_HEAP_U8().set(n, r),
                  e.handleOnMessageFromHeap(r, n.byteLength, y, b));
              },
            ));
          var v = !1;
          o("WAWebVoipP2PConnectionManager").registerOnDataChannelStateChange(
            function (t) {
              t === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open
                ? ((v = !0),
                  o("WALogger").LOG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: P2P DataChannel opened, notifying WASM active=true",
                      ])),
                  ),
                  e.notifyWebP2PChannelReady(!0, !1))
                : v &&
                  ((v = !1),
                  o("WALogger").LOG(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: P2P DataChannel state changed to ",
                        " after being open, notifying WASM active=false",
                      ])),
                    t,
                  ),
                  e.notifyWebP2PChannelReady(!1, !1));
            },
          );
        },
        setHideMyIp: async function (t) {
          o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "voip: setHideMyIp called with hideMyIp=",
                "",
              ])),
            t,
          );
          var e = await A;
          e.setHideMyIp(t);
        },
        handleSignOut: function () {
          (o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "voip: handleSignOut: cleaning up all connections",
              ])),
          ),
            o("WAWebVoipLogDrainer").stopLogDrainer(),
            o("WAWebVoipGatingUtils").isWebTransportEnabled()
              ? o(
                  "WAWebVoipWebTransportConnectionManager",
                ).closeAllConnections()
              : o("WAWebVoipSctpConnectionManager").cleanupAllConnections(),
            A.then(function (e) {
              o("WAWebVoipWasmHeapBuffer").freeHeapBuffer(e, l);
            }).catch(r("WAWebNoop")));
        },
        startCall: async function (t, n, r, a, i, l, s) {
          var e = await A;
          o("WAWebBweMLModelManager")
            .initBweMLModelsForCall(e)
            .catch(function (e) {
              o("WALogger").WARN(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [initBweMLModelsForCall] unhandled error: ",
                    "",
                  ])),
                e,
              );
            });
          var u = new e.StringList();
          n.forEach(function (e) {
            u.push_back(e);
          });
          var c = F(e, s);
          try {
            e.startVoipCall(t.toString({ legacy: !0 }), u, r, a, i, l, c);
          } catch (t) {
            throw (
              o("WAWebVoipNativeStackTraceLogger").logNativeStackTrace(e, t),
              t
            );
          } finally {
            u.delete();
          }
        },
        startGroupCall: async function (t, n, r, a, i, l, s, u, c, d, m, p, _) {
          if (!o("WAWebVoipGatingUtils").isGroupCallingEnabled()) {
            o("WALogger").ERROR(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: startGroupCall: Web group calling is not enabled",
                ])),
            );
            return;
          }
          var e = await A;
          o("WAWebBweMLModelManager")
            .initBweMLModelsForCall(e)
            .catch(function (e) {
              o("WALogger").WARN(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [initBweMLModelsForCall] unhandled error: ",
                    "",
                  ])),
                e,
              );
            });
          var f = new e.StringList();
          t.forEach(function (e) {
            f.push_back(e);
          });
          var g = new e.StringList();
          n.forEach(function (e) {
            g.push_back(e);
          });
          var b = new e.StringList();
          r.forEach(function (e) {
            b.push_back(e);
          });
          var v = e.startVoipGroupCall(
            f,
            g,
            b,
            a,
            i,
            l,
            s,
            u,
            c,
            d,
            m != null ? m : 0,
            p != null ? p : 0,
            _ != null ? _ : "",
          );
          (v !== 0 &&
            o("WALogger")
              .ERROR(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: startGroupCall: failed to start group call",
                  ])),
              )
              .sendLogs("voip-start-group-call-failed"),
            f.delete(),
            g.delete(),
            b.delete());
        },
        acceptCall: async function (t, n) {
          var e = await A;
          try {
            e.acceptCall(t, n);
          } catch (t) {
            throw (
              o("WAWebVoipNativeStackTraceLogger").logNativeStackTrace(e, t),
              t
            );
          }
        },
        rejectCall: async function () {
          var e = await A;
          try {
            e.rejectCall();
          } catch (t) {
            throw (
              o("WAWebVoipNativeStackTraceLogger").logNativeStackTrace(e, t),
              t
            );
          }
        },
        endCall: async function (t, n) {
          var e = await A;
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
            o("WAWebVoipGatingUtils").isWebTransportEnabled() &&
              o("WAWebVoipWebTransportConnectionManager").closeAllConnections();
          }
        },
        rejectCallWithoutCallContext: async function (t, n, r, o, a, i, l) {
          var e = await A;
          e.rejectCallWithoutCallContext(t, n, r, o, a, i, l);
        },
        joinOngoingCall: async function (
          t,
          n,
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
          C,
        ) {
          if (!o("WAWebVoipGatingUtils").isGroupCallingEnabled()) {
            o("WALogger").ERROR(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: joinOngoingCall: Web group calling is not enabled",
                ])),
            );
            return;
          }
          var e = await A,
            S = new e.StringList();
          i.forEach(function (e) {
            S.push_back(e);
          });
          var R = new e.StringList();
          l.forEach(function (e) {
            R.push_back(e);
          });
          var L = new e.StringList();
          s.forEach(function (e) {
            L.push_back(e);
          });
          try {
            var E = e.joinVoipOngoingCall(
              t,
              n,
              a,
              S,
              R,
              L,
              u,
              c,
              d,
              m,
              p,
              _,
              f,
              g,
              h,
              y != null ? y : 0,
              C != null ? C : !1,
            );
            if (E !== 0)
              throw r("err")(
                "voip: joinOngoingCall: failed to join ongoing call",
              );
          } catch (e) {
            (o("WAWebCoreActionsODS").logCallGroupJoinError(),
              o("WALogger")
                .ERROR(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: joinOngoingCall: failed to join ongoing call ",
                      "",
                    ])),
                  e,
                )
                .sendLogs("voip-join-ongoing-call-failed"));
          } finally {
            (S.delete(), R.delete(), L.delete());
          }
        },
        simulateNativeAnr: r("WAWebNoop"),
        handleDeviceJidList: r("WAWebNoop"),
        previewCallLink: async function (t, n, r, a, i) {
          if (!o("WAWebVoipGatingUtils").callLinksEnabled())
            return (
              o("WALogger").ERROR(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: previewCallLink: Call link feature is not enabled",
                  ])),
              ),
              -1
            );
          var e = 22;
          if (t.length !== e)
            return (
              o("WALogger").ERROR(
                R ||
                  (R = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: previewCallLink: invalid token length ",
                    ", expected ",
                    "",
                  ])),
                t.length,
                e,
              ),
              -1
            );
          var l = await A;
          try {
            var s = l.previewCallLink(
              t,
              n,
              r != null ? r : 0,
              a != null ? a : "",
              i != null ? i : !1,
            );
            return (
              s !== 0 &&
                o("WALogger")
                  .ERROR(
                    L ||
                      (L = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: previewCallLink: failed with status ",
                        "",
                      ])),
                    s,
                  )
                  .sendLogs("voip-preview-call-link-failed"),
              s
            );
          } catch (e) {
            throw (
              o("WAWebVoipNativeStackTraceLogger").logNativeStackTrace(l, e),
              e
            );
          }
        },
        joinCallLink: async function () {
          if (!o("WAWebVoipGatingUtils").callLinksEnabled()) {
            o("WALogger").ERROR(
              E ||
                (E = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: joinCallLink: Call link feature is not enabled",
                ])),
            );
            return;
          }
          var e = await A;
          try {
            var t = e.joinCallLink();
            t !== 0 &&
              o("WALogger")
                .ERROR(
                  k ||
                    (k = babelHelpers.taggedTemplateLiteralLoose([
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
        previewAndJoinCallLink: async function (t, n, r, a, i) {
          if (!o("WAWebVoipGatingUtils").callLinksEnabled()) {
            o("WALogger").ERROR(
              I ||
                (I = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: previewAndJoinCallLink: call links disabled",
                ])),
            );
            return;
          }
          var e = await A;
          try {
            o("WAWebBweMLModelManager")
              .initBweMLModelsForCall(e)
              .catch(function (e) {
                o("WALogger").WARN(
                  T ||
                    (T = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [initBweMLModelsForCall] unhandled error: ",
                      "",
                    ])),
                  e,
                );
              });
            var l = e.previewAndJoinCallLink(
              t,
              n,
              r != null ? r : 0,
              a != null ? a : "",
              i != null ? i : !1,
            );
            l !== 0 &&
              o("WALogger")
                .ERROR(
                  D ||
                    (D = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: previewAndJoinCallLink: failed with status ",
                      "",
                    ])),
                  l,
                )
                .sendLogs("voip-preview-and-join-call-link-failed");
          } catch (t) {
            throw (
              o("WAWebVoipNativeStackTraceLogger").logNativeStackTrace(e, t),
              t
            );
          }
        },
        handleIncomingSignalingOffer: async function (
          t,
          n,
          a,
          i,
          l,
          s,
          u,
          c,
          d,
        ) {
          var e = await A;
          o("WAWebBweMLModelManager")
            .initBweMLModelsForCall(e)
            .catch(function (e) {
              o("WALogger").WARN(
                x ||
                  (x = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [initBweMLModelsForCall] unhandled error: ",
                    "",
                  ])),
                e,
              );
            });
          var m = t.node();
          r("justknobx")._("360") &&
            o("WAWebVoipStackInterfaceWebHelpers").overrideRelayIp(m);
          var p = o("WABase64").encodeB64(o("WAWap").encodeStanza(m)),
            _ = F(e, d),
            f = i != null ? String(i) : "0",
            g = l != null ? String(l) : "0";
          try {
            e.handleIncomingSignalingOffer(p, n, a, f, g, s, u, c, _);
          } catch (t) {
            throw (
              o("WAWebVoipNativeStackTraceLogger").logNativeStackTrace(e, t),
              t
            );
          }
        },
        handleIncomingSignalingMessage: async function (
          t,
          n,
          r,
          a,
          i,
          l,
          s,
          u,
        ) {
          var e = await A,
            c = o("WABase64").encodeB64(o("WAWap").encodeStanza(t.node())),
            d = F(e, u),
            m = a != null ? String(a) : "0",
            p = i != null ? String(i) : "0";
          try {
            e.handleIncomingSignalingMessage(c, n, r, m, p, l, s, d);
          } catch (t) {
            throw (
              o("WAWebVoipNativeStackTraceLogger").logNativeStackTrace(e, t),
              t
            );
          }
        },
        handleIncomingSignalingAck: async function (t, n, a, i, l) {
          var e = await A,
            s = t.node();
          r("justknobx")._("360") &&
            o("WAWebVoipStackInterfaceWebHelpers").overrideRelayIp(s);
          var u = o("WABase64").encodeB64(o("WAWap").encodeStanza(s)),
            c = F(e, l);
          try {
            e.handleIncomingSignalingAck(u, n, a, i, c);
          } catch (t) {
            throw (
              o("WAWebVoipNativeStackTraceLogger").logNativeStackTrace(e, t),
              t
            );
          }
        },
        handleIncomingSignalingReceipt: async function (t, n, r) {
          var e = await A,
            a = o("WABase64").encodeB64(o("WAWap").encodeStanza(t.node())),
            i = F(e, r);
          try {
            e.handleIncomingSignalingReceipt(a, n, i);
          } catch (t) {
            throw (
              o("WAWebVoipNativeStackTraceLogger").logNativeStackTrace(e, t),
              t
            );
          }
        },
        resendOfferOnDecryptionFailure: async function (t, n) {
          var e = await A;
          e.resendOfferOnDecryptionFailure(t, n);
        },
        resendEncRekeyRetry: async function (t, n) {
          var e = await A;
          e.resendEncRekeyRetry(t, n);
        },
        notifyDeviceIdentityChangedOrDeleted: r("WAWebNoop"),
        handleOnTransportMessage: async function (t, n, r) {
          var e = O != null ? O : await A,
            a = new Uint8Array(t),
            i = o("WAWebVoipWasmHeapBuffer").ensureHeapBuffer(
              e,
              l,
              a.byteLength,
            );
          i !== 0 &&
            (e.GROWABLE_HEAP_U8().set(a, i),
            e.handleOnMessageFromHeap(i, a.byteLength, n, r));
        },
        setCallMute: async function (t) {
          var e = await A,
            n = e.setCallMute(t);
          return n;
        },
        setCallVideoMute: async function (t) {
          var e = await A,
            n = e.setCallVideoMute(t);
          return n;
        },
        videoStreamPause: async function () {
          var e = await A,
            t = e.videoStreamPause();
          return t;
        },
        videoStreamResume: async function () {
          var e = await A,
            t = e.videoStreamResume();
          return t;
        },
        broadcastVideoState: async function () {
          var e = await A,
            t = e.broadcastVideoState();
          return t;
        },
        sendReaction: async function (t) {
          var e = await A;
          e.sendReaction(t);
        },
        raiseHand: async function (t) {
          var e = await A;
          e.raiseHand(t);
        },
        requestVideoUpgrade: async function () {
          var e = await A,
            t = e.requestVideoUpgrade();
          return t;
        },
        getCallInfo: async function () {
          var e = await A,
            t = e.getCallInfo();
          return (
            t === "" &&
              o("WALogger").ERROR(
                $ ||
                  ($ = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: getCallInfo() failed to retrieve call info",
                  ])),
              ),
            t
          );
        },
        acceptPeerVideo: async function (t) {
          var e = t.jid,
            n = await A,
            r = n.acceptPeerVideo(e);
          return (
            r !== 0 &&
              o("WALogger").ERROR(
                P ||
                  (P = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: acceptPeerVideo: Failed with status ",
                    "",
                  ])),
                r,
              ),
            r
          );
        },
        requestPeerMute: async function (t) {
          var e = await A,
            n = e.requestPeerMute(t);
          return n;
        },
        removeCallParticipant: async function (t) {
          var e = await A,
            n = e.removeCallParticipant(t);
          return n;
        },
        waitingRoomAdmit: async function (t) {
          var e = await A,
            n = e.waitingRoomAdmit(t);
          return n;
        },
        waitingRoomDeny: async function (t) {
          var e = await A,
            n = e.waitingRoomDeny(t);
          return n;
        },
        waitingRoomAdmitAll: async function () {
          var e = await A,
            t = e.waitingRoomAdmitAll();
          return t;
        },
        waitingRoomToggleActiveCall: async function (t) {
          var e = await A,
            n = e.waitingRoomToggleActiveCall(t);
          return n;
        },
        updateParticipantsRxSubscription: async function (t, n) {
          var e = await A,
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
          var e = await A,
            t = e.startScreenShare();
          return t;
        },
        stopScreenShare: async function () {
          var e = await A,
            t = e.stopScreenShare();
          return t;
        },
        startVideoPreview: async function (t, n) {
          var e = await A,
            r = e.startVideoPreview(t, n);
          return r;
        },
        requestKeyFrame: async function (t) {
          var e = await A,
            n = e.requestKeyFrame(t);
          return n;
        },
        updateNetworkMedium: async function (t, n) {
          var e = await A;
          (e.updateNetworkMedium(t, 0),
            o("WALogger").LOG(
              N ||
                (N = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: updateNetworkMedium: medium=",
                  ", mtu=0",
                ])),
              t,
            ));
        },
        getNetworkConditionerState: async function () {
          try {
            var e = await A,
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
            var e = await A;
            return e.getShortStatisticString();
          } catch (e) {
            return "";
          }
        },
        getDebugStatisticString: async function () {
          try {
            var e = await A;
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
            var e = await A,
              n = e.getVoipParam(t);
            return (
              o("WALogger").LOG(
                M ||
                  (M = babelHelpers.taggedTemplateLiteralLoose([
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
                w ||
                  (w = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: getVoipParam: error=",
                    "",
                  ])),
                e,
              ),
              ""
            );
          }
        },
        sendWebP2PTransport: async function (t, n, r, o, a, i) {
          var e = await A,
            l = JSON.stringify(i);
          e.sendWebP2PTransport(t, n, r, o, a, l);
        },
        callbacks: t,
        inviteToCall: async function (t, n, r) {
          var e = await A,
            o = new e.StringList();
          r.forEach(function (e) {
            return o.push_back(e);
          });
          var a = e.inviteToCall(t, n, o);
        },
        checkOngoingCalls: async function (t, n) {
          var e = await A,
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
    function F(e, t) {
      var n = new e.Uint8List();
      if (t) {
        var r = new Uint8Array(t);
        r.forEach(function (e) {
          return n.push_back(e);
        });
      }
      return n;
    }
    l.createWAWebVoipStackInterface = A;
  },
  98,
);
