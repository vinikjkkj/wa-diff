__d(
  "WAWebVoipStackInterfaceWeb",
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
        voipInit: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n) {
              var r = yield A;
              ((O = r),
                o("WAWebVoipGatingUtils").isWebTransportEnabled() && B(),
                o("WAWebVoipStorageInit").initVoipStorageAndMLCache(r));
              var a = !1,
                i = !1;
              try {
                yield o(
                  "WAWebVoipVideoRendererRegistry",
                ).videoRendererRegistry.init();
                var _ = o(
                  "WAWebVoipVideoRendererRegistry",
                ).videoRendererRegistry.getRendererType();
                a =
                  _ ===
                  o("WAWebVoipVideoRendererInterface")
                    .WAWebVoipVideoRendererType.WEBCODECS_H264;
                var f = o("WAWebABProps").getABPropConfigValue(
                    "enable_webcodec_video_encode",
                  ),
                  g =
                    a ||
                    (yield o(
                      "WAWebVoipVideoWebCodecsRenderer",
                    ).WAWebVoipVideoWebCodecsRenderer.checkAvailability());
                i =
                  !o("WAWebUA").UA.isFirefox && g && f === !0
                    ? yield o(
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
                a,
                i,
              ),
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [webcodec-encode] enabled=",
                      "",
                    ])),
                  i,
                ),
                o("WAWebVoipWebCodecsEncoderState").setWebCodecsEncoderEnabled(
                  i,
                ),
                o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [webcodec-encode] WebCodecs encoder state ",
                      "",
                    ])),
                  i,
                ),
                yield o("WAWebReleaseToEventLoop").releaseToEventLoop(),
                o("WAWebVoipQplHelpers").voipInitQplAddPoint(
                  o("WAWebVoipQplHelpers").VoipInitQplPoint
                    .VOIP_STACK_INIT_START,
                ));
              try {
                (o("WAWebVoipStackInterfaceWebHelpers").setABPropsOnWasm(r),
                  r.setABPropBool("enable_passthrough_video_decoder", a),
                  r.setABPropBool("enable_webcodec_video_encode", i),
                  o(
                    "WAWebLowEndDeviceExperimentGating",
                  ).shouldDisableSoftwareAudioProcessing() &&
                    (r.setABPropBool("ns_builtin_available", !0),
                    r.setABPropBool("disable_sw_ns_when_builtin_available", !0),
                    r.setABPropBool("ml_ns_skip_processing", !0),
                    r.setABPropBool("disable_agc", !0),
                    r.setABPropBool("hw_aec_available", !0),
                    r.setABPropBool("disable_sw_ec_when_builtin_available", !0),
                    r.setABPropBool("disable_standalone_agc", !0),
                    r.setABPropBool("disable_eq", !0)),
                  r.initVoipStack(e, t, n));
              } catch (e) {
                throw (
                  o("WAWebVoipNativeStackTraceLogger").logNativeStackTrace(
                    r,
                    e,
                  ),
                  e
                );
              } finally {
                o("WAWebVoipQplHelpers").voipInitQplAddPoint(
                  o("WAWebVoipQplHelpers").VoipInitQplPoint.VOIP_STACK_INIT_END,
                );
              }
              (o("WAWebVoipWasmHeapMonitor").logWasmHeapSnapshot(
                r,
                "voip_stack_init",
              ),
                o("WAWebVoipPerfOptimizations").isPerfOptimizationEnabled(
                  o("WAWebVoipPerfOptimizations").PerfOptimizationFlag
                    .LOG_RING_BUFFER,
                ) && o("WAWebVoipLogDrainer").startLogDrainer(r));
              var h = r.getWebP2PVirtualIpv4(),
                y = r.getWebP2PVirtualIpv6(),
                C = r.getWebP2PVirtualPort();
              (o("WAWebVoipP2PConnectionManager").initP2PVirtualAddresses(
                h,
                y,
                C,
              ),
                o("WAWebVoipP2PConnectionManager").registerOnDataChannelMessage(
                  function (e) {
                    var t = new Uint8Array(e),
                      n = o("WAWebVoipWasmHeapBuffer").ensureHeapBuffer(
                        r,
                        l,
                        t.byteLength,
                      );
                    (r.GROWABLE_HEAP_U8().set(t, n),
                      r.handleOnMessageFromHeap(n, t.byteLength, h, C));
                  },
                ));
              var b = !1;
              o(
                "WAWebVoipP2PConnectionManager",
              ).registerOnDataChannelStateChange(function (e) {
                e === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open
                  ? ((b = !0),
                    o("WALogger").LOG(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: P2P DataChannel opened, notifying WASM active=true",
                        ])),
                    ),
                    r.notifyWebP2PChannelReady(!0, !1))
                  : b &&
                    ((b = !1),
                    o("WALogger").LOG(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: P2P DataChannel state changed to ",
                          " after being open, notifying WASM active=false",
                        ])),
                      e,
                    ),
                    r.notifyWebP2PChannelReady(!1, !1));
              });
            },
          );
          function t(t, n, r) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        setHideMyIp: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: setHideMyIp called with hideMyIp=",
                  "",
                ])),
              e,
            );
            var t = yield A;
            t.setHideMyIp(e);
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
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
        startCall: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n, r, a, i, l) {
              var s = yield A;
              o("WAWebBweMLModelManager")
                .initBweMLModelsForCall(s)
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
              var u = new s.StringList();
              t.forEach(function (e) {
                u.push_back(e);
              });
              var c = F(s, l);
              try {
                s.startVoipCall(e.toString({ legacy: !0 }), u, n, r, a, i, c);
              } catch (e) {
                throw (
                  o("WAWebVoipNativeStackTraceLogger").logNativeStackTrace(
                    s,
                    e,
                  ),
                  e
                );
              } finally {
                u.delete();
              }
            },
          );
          function t(t, n, r, o, a, i, l) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        startGroupCall: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n, r, a, i, l, s, u, c, d, m, p) {
              if (!o("WAWebVoipGatingUtils").isGroupCallingEnabled()) {
                o("WALogger").ERROR(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: startGroupCall: Web group calling is not enabled",
                    ])),
                );
                return;
              }
              var _ = yield A;
              o("WAWebBweMLModelManager")
                .initBweMLModelsForCall(_)
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
              var f = new _.StringList();
              e.forEach(function (e) {
                f.push_back(e);
              });
              var g = new _.StringList();
              t.forEach(function (e) {
                g.push_back(e);
              });
              var b = new _.StringList();
              n.forEach(function (e) {
                b.push_back(e);
              });
              var v = _.startVoipGroupCall(
                f,
                g,
                b,
                r,
                a,
                i,
                l,
                s,
                u,
                c,
                d != null ? d : 0,
                m != null ? m : 0,
                p != null ? p : "",
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
          );
          function t(t, n, r, o, a, i, l, s, u, c, d, m, p) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        acceptCall: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              var n = yield A;
              try {
                n.acceptCall(e, t);
              } catch (e) {
                throw (
                  o("WAWebVoipNativeStackTraceLogger").logNativeStackTrace(
                    n,
                    e,
                  ),
                  e
                );
              }
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        rejectCall: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = yield A;
            try {
              e.rejectCall();
            } catch (t) {
              throw (
                o("WAWebVoipNativeStackTraceLogger").logNativeStackTrace(e, t),
                t
              );
            }
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        endCall: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              var n = yield A;
              o("WAWebVoipGatingUtils").isWebTransportEnabled() &&
                o("WAWebVoipWebTransportConnectionManager").prepareForEndCall();
              try {
                n.endCall(e, t);
              } catch (e) {
                throw (
                  o("WAWebVoipNativeStackTraceLogger").logNativeStackTrace(
                    n,
                    e,
                  ),
                  e
                );
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
              var l = yield A;
              l.rejectCallWithoutCallContext(e, t, n, r, o, a, i);
            },
          );
          function t(t, n, r, o, a, i, l) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        joinOngoingCall: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n, a, i, l, s, u, c, d, m, p, _, f, g, h, y) {
              if (!o("WAWebVoipGatingUtils").isGroupCallingEnabled()) {
                o("WALogger").ERROR(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: joinOngoingCall: Web group calling is not enabled",
                    ])),
                );
                return;
              }
              var C = yield A,
                S = new C.StringList();
              a.forEach(function (e) {
                S.push_back(e);
              });
              var R = new C.StringList();
              i.forEach(function (e) {
                R.push_back(e);
              });
              var L = new C.StringList();
              l.forEach(function (e) {
                L.push_back(e);
              });
              try {
                var E = C.joinVoipOngoingCall(
                  e,
                  t,
                  n,
                  S,
                  R,
                  L,
                  s,
                  u,
                  c,
                  d,
                  m,
                  p,
                  _,
                  f,
                  g,
                  h != null ? h : 0,
                  y != null ? y : !1,
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
          );
          function t(t, n, r, o, a, i, l, s, u, c, d, m, p, _, f, g, h) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        simulateNativeAnr: r("WAWebNoop"),
        handleDeviceJidList: r("WAWebNoop"),
        previewCallLink: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n, r, a) {
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
              var i = 22;
              if (e.length !== i)
                return (
                  o("WALogger").ERROR(
                    R ||
                      (R = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: previewCallLink: invalid token length ",
                        ", expected ",
                        "",
                      ])),
                    e.length,
                    i,
                  ),
                  -1
                );
              var l = yield A;
              try {
                var s = l.previewCallLink(
                  e,
                  t,
                  n != null ? n : 0,
                  r != null ? r : "",
                  a != null ? a : !1,
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
                  o("WAWebVoipNativeStackTraceLogger").logNativeStackTrace(
                    l,
                    e,
                  ),
                  e
                );
              }
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
                E ||
                  (E = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: joinCallLink: Call link feature is not enabled",
                  ])),
              );
              return;
            }
            var e = yield A;
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
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        previewAndJoinCallLink: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n, r, a, i) {
              if (!o("WAWebVoipGatingUtils").callLinksEnabled()) {
                o("WALogger").ERROR(
                  I ||
                    (I = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: previewAndJoinCallLink: call links disabled",
                    ])),
                );
                return;
              }
              var l = yield A;
              try {
                o("WAWebBweMLModelManager")
                  .initBweMLModelsForCall(l)
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
                var s = l.previewAndJoinCallLink(
                  e,
                  t,
                  n != null ? n : 0,
                  r != null ? r : "",
                  a != null ? a : !1,
                  i != null ? i : "",
                );
                s !== 0 &&
                  o("WALogger")
                    .ERROR(
                      D ||
                        (D = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: previewAndJoinCallLink: failed with status ",
                          "",
                        ])),
                      s,
                    )
                    .sendLogs("voip-preview-and-join-call-link-failed");
              } catch (e) {
                throw (
                  o("WAWebVoipNativeStackTraceLogger").logNativeStackTrace(
                    l,
                    e,
                  ),
                  e
                );
              }
            },
          );
          function t(t, n, r, o, a, i) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        handleIncomingSignalingOffer: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n, a, i, l, s, u, c) {
              var d = yield A;
              o("WAWebBweMLModelManager")
                .initBweMLModelsForCall(d)
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
              var m = e.node();
              r("justknobx")._("360") &&
                o("WAWebVoipStackInterfaceWebHelpers").overrideRelayIp(m);
              var p = o("WABase64").encodeB64(o("WAWap").encodeStanza(m)),
                _ = F(d, c),
                f = a != null ? String(a) : "0",
                g = i != null ? String(i) : "0";
              try {
                d.handleIncomingSignalingOffer(p, t, n, f, g, l, s, u, _);
              } catch (e) {
                throw (
                  o("WAWebVoipNativeStackTraceLogger").logNativeStackTrace(
                    d,
                    e,
                  ),
                  e
                );
              }
            },
          );
          function t(t, n, r, o, a, i, l, s, u) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        handleIncomingSignalingMessage: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n, r, a, i, l, s) {
              var u = yield A,
                c = o("WABase64").encodeB64(o("WAWap").encodeStanza(e.node())),
                d = F(u, s),
                m = r != null ? String(r) : "0",
                p = a != null ? String(a) : "0";
              try {
                u.handleIncomingSignalingMessage(c, t, n, m, p, i, l, d);
              } catch (e) {
                throw (
                  o("WAWebVoipNativeStackTraceLogger").logNativeStackTrace(
                    u,
                    e,
                  ),
                  e
                );
              }
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
              var l = yield A,
                s = e.node();
              r("justknobx")._("360") &&
                o("WAWebVoipStackInterfaceWebHelpers").overrideRelayIp(s);
              var u = o("WABase64").encodeB64(o("WAWap").encodeStanza(s)),
                c = F(l, i);
              try {
                l.handleIncomingSignalingAck(u, t, n, a, c);
              } catch (e) {
                throw (
                  o("WAWebVoipNativeStackTraceLogger").logNativeStackTrace(
                    l,
                    e,
                  ),
                  e
                );
              }
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
              var r = yield A,
                a = o("WABase64").encodeB64(o("WAWap").encodeStanza(e.node())),
                i = F(r, n);
              try {
                r.handleIncomingSignalingReceipt(a, t, i);
              } catch (e) {
                throw (
                  o("WAWebVoipNativeStackTraceLogger").logNativeStackTrace(
                    r,
                    e,
                  ),
                  e
                );
              }
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
              var n = yield A;
              n.resendOfferOnDecryptionFailure(e, t);
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
              var n = yield A;
              n.resendEncRekeyRetry(e, t);
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        notifyDeviceIdentityChangedOrDeleted: r("WAWebNoop"),
        handleOnTransportMessage: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n) {
              var r = O != null ? O : yield A,
                a = new Uint8Array(e),
                i = o("WAWebVoipWasmHeapBuffer").ensureHeapBuffer(
                  r,
                  l,
                  a.byteLength,
                );
              i !== 0 &&
                (r.GROWABLE_HEAP_U8().set(a, i),
                r.handleOnMessageFromHeap(i, a.byteLength, t, n));
            },
          );
          function t(t, n, r) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        setCallMute: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = yield A,
              n = t.setCallMute(e);
            return n;
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        setCallVideoMute: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = yield A,
              n = t.setCallVideoMute(e);
            return n;
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        videoStreamPause: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = yield A,
              t = e.videoStreamPause();
            return t;
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        videoStreamResume: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = yield A,
              t = e.videoStreamResume();
            return t;
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        broadcastVideoState: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = yield A,
              t = e.broadcastVideoState();
            return t;
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        sendReaction: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = yield A;
            t.sendReaction(e);
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        raiseHand: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = yield A;
            t.raiseHand(e);
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        notifyUiViewChange: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              var n = yield A,
                r = n.notifyUiViewChange(e, t != null ? t : "");
              return r;
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        requestVideoUpgrade: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = yield A,
              t = e.requestVideoUpgrade();
            return t;
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        getCallInfo: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = yield A,
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
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        acceptPeerVideo: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = e.jid,
              n = yield A,
              r = n.acceptPeerVideo(t);
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
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        requestPeerMute: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = yield A,
              n = t.requestPeerMute(e);
            return n;
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        removeCallParticipant: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = yield A,
              n = t.removeCallParticipant(e);
            return n;
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        waitingRoomAdmit: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = yield A,
              n = t.waitingRoomAdmit(e);
            return n;
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        waitingRoomDeny: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = yield A,
              n = t.waitingRoomDeny(e);
            return n;
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        waitingRoomAdmitAll: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = yield A,
              t = e.waitingRoomAdmitAll();
            return t;
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        waitingRoomToggleActiveCall: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = yield A,
              n = t.waitingRoomToggleActiveCall(e);
            return n;
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        updateParticipantsRxSubscription: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              var n = yield A,
                r = new n.StringList();
              e.forEach(function (e) {
                r.push_back(e);
              });
              var o = new n.IntList();
              t.forEach(function (e) {
                o.push_back(e);
              });
              try {
                var a = n.updateParticipantsRxSubscription(r, o);
                return a;
              } finally {
                (r.delete(), o.delete());
              }
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        startScreenShare: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = yield A,
              t = e.startScreenShare();
            return t;
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        stopScreenShare: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = yield A,
              t = e.stopScreenShare();
            return t;
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        startVideoPreview: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              var n = yield A,
                r = n.startVideoPreview(e, t);
              return r;
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        requestKeyFrame: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = yield A,
              n = t.requestKeyFrame(e);
            return n;
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        updateNetworkMedium: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              var n = yield A;
              (n.updateNetworkMedium(e, 0),
                o("WALogger").LOG(
                  N ||
                    (N = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: updateNetworkMedium: medium=",
                      ", mtu=0",
                    ])),
                  e,
                ));
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
              var e = yield A,
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
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        getShortStatisticString: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            try {
              var e = yield A;
              return e.getShortStatisticString();
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
              var e = yield A;
              return e.getDebugStatisticString();
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
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            try {
              var t = yield A,
                n = t.getVoipParam(e);
              return (
                o("WALogger").LOG(
                  M ||
                    (M = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: getVoipParam(",
                      ") = ",
                      "",
                    ])),
                  e,
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
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        sendWebP2PTransport: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n, r, o, a) {
              var i = yield A,
                l = JSON.stringify(a);
              i.sendWebP2PTransport(e, t, n, r, o, l);
            },
          );
          function t(t, n, r, o, a, i) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        callbacks: t,
        inviteToCall: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n) {
              var r = yield A,
                o = new r.StringList();
              n.forEach(function (e) {
                return o.push_back(e);
              });
              var a = r.inviteToCall(e, t, o);
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
              var n = yield A,
                r = new n.StringList();
              e.forEach(function (e) {
                return r.push_back(e);
              });
              var o = new n.StringList();
              t.forEach(function (e) {
                return o.push_back(e);
              });
              try {
                n.checkOngoingCalls(r, o);
              } finally {
                (r.delete(), o.delete());
              }
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
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
