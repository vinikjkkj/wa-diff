__d(
  "WAWebVoipStackInterfaceWeb",
  [
    "WABase64",
    "WALogger",
    "WAOnceWithReset",
    "WAWap",
    "WAWebABProps",
    "WAWebBackendApi",
    "WAWebBweMLModelManager",
    "WAWebCoreActionsODS",
    "WAWebEnvironment",
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
    "WAWebVoipScreenShareStreamKey",
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
      w,
      A,
      F,
      O = r("WAOnceWithReset")(function () {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[VoipStackInterfaceWeb] created on Windows Hybrid - selected factory does not match runtime environment",
              ])),
          )
          .sendLogs("voip-stack-interface-web-created-on-windows");
      });
    function B() {
      if (r("WAWebEnvironment").isWindows)
        throw (
          O(),
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
        l = o("WAWebBackendApi").frontendSendAndReceive("initializeVoipWasm"),
        B = null;
      function q() {
        o("WAWebVoipWebTransportConnectionManager").registerPacketHandler(
          function (e, t, n) {
            var r = B;
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
        voipInit: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n) {
              var r = yield l;
              ((B = r),
                r.initVoipLogging(),
                o("WAWebVoipGatingUtils").isWebTransportEnabled() && q(),
                o("WAWebVoipStorageInit").initVoipStorageAndMLCache(r));
              var a = !1,
                s = !1;
              try {
                yield o(
                  "WAWebVoipVideoRendererRegistry",
                ).videoRendererRegistry.init();
                var f = o(
                  "WAWebVoipVideoRendererRegistry",
                ).videoRendererRegistry.getRendererType();
                a =
                  f ===
                  o("WAWebVoipVideoRendererInterface")
                    .WAWebVoipVideoRendererType.WEBCODECS_H264;
                var g = o("WAWebABProps").getABPropConfigValue(
                    "enable_webcodec_video_encode",
                  ),
                  h =
                    a ||
                    (yield o(
                      "WAWebVoipVideoWebCodecsRenderer",
                    ).WAWebVoipVideoWebCodecsRenderer.checkAvailability());
                s =
                  !o("WAWebUA").UA.isFirefox && h && g === !0
                    ? yield o(
                        "WAWebVoipWebCodecsEncoderState",
                      ).checkEncoderSupport()
                    : !1;
              } catch (e) {
                o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: video capability detection failed, disabling passthrough encode/decode: ",
                      "",
                    ])),
                  e,
                );
              }
              (o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: voipInit: ptDec=",
                    " ptEnc=",
                    "",
                  ])),
                a,
                s,
              ),
                o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [webcodec-encode] enabled=",
                      "",
                    ])),
                  s,
                ),
                o("WAWebVoipWebCodecsEncoderState").setWebCodecsEncoderEnabled(
                  s,
                ),
                o("WALogger").LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [webcodec-encode] WebCodecs encoder state ",
                      "",
                    ])),
                  s,
                ),
                yield o("WAWebReleaseToEventLoop").releaseToEventLoop(),
                o("WAWebVoipQplHelpers").voipInitQplAddPoint(
                  o("WAWebVoipQplHelpers").VoipInitQplPoint
                    .VOIP_STACK_INIT_START,
                ));
              try {
                (o("WAWebVoipStackInterfaceWebHelpers").setABPropsOnWasm(r),
                  r.setABPropBool("enable_passthrough_video_decoder", a),
                  r.setABPropBool("enable_webcodec_video_encode", s),
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
              var y = r.getWebP2PVirtualIpv4(),
                C = r.getWebP2PVirtualIpv6(),
                b = r.getWebP2PVirtualPort();
              (o("WAWebVoipP2PConnectionManager").initP2PVirtualAddresses(
                y,
                C,
                b,
              ),
                o("WAWebVoipP2PConnectionManager").registerOnDataChannelMessage(
                  function (e) {
                    var t = new Uint8Array(e),
                      n = o("WAWebVoipWasmHeapBuffer").ensureHeapBuffer(
                        r,
                        i,
                        t.byteLength,
                      );
                    (r.GROWABLE_HEAP_U8().set(t, n),
                      r.handleOnMessageFromHeap(n, t.byteLength, y, b));
                  },
                ));
              var v = !1;
              o(
                "WAWebVoipP2PConnectionManager",
              ).registerOnDataChannelStateChange(function (e) {
                e === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open
                  ? ((v = !0),
                    o("WALogger").LOG(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: P2P DataChannel opened, notifying WASM active=true",
                        ])),
                    ),
                    r.notifyWebP2PChannelReady(!0, !1))
                  : v &&
                    ((v = !1),
                    o("WALogger").LOG(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
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
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: setHideMyIp called with hideMyIp=",
                  "",
                ])),
              e,
            );
            var t = yield l;
            t.setHideMyIp(e);
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        handleSignOut: function () {
          (o("WALogger").LOG(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "voip: handleSignOut: cleaning up all connections",
              ])),
          ),
            o("WAWebVoipLogDrainer").stopLogDrainer(),
            o("WAWebVoipGatingUtils").isWebTransportEnabled()
              ? o(
                  "WAWebVoipWebTransportConnectionManager",
                ).closeAllConnections()
              : o("WAWebVoipSctpConnectionManager").cleanupAllConnections(),
            l
              .then(function (e) {
                o("WAWebVoipWasmHeapBuffer").freeHeapBuffer(e, i);
              })
              .catch(r("WAWebNoop")));
        },
        startCall: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n, r, a, i, s) {
              var u = yield l;
              o("WAWebBweMLModelManager")
                .initBweMLModelsForCall(u)
                .catch(function (e) {
                  o("WALogger").WARN(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [initBweMLModelsForCall] unhandled error: ",
                        "",
                      ])),
                    e,
                  );
                });
              var c = new u.StringList();
              t.forEach(function (e) {
                c.push_back(e);
              });
              var d = W(u, s);
              try {
                u.startVoipCall(e.toString({ legacy: !0 }), c, n, r, a, i, d);
              } catch (e) {
                throw (
                  o("WAWebVoipNativeStackTraceLogger").logNativeStackTrace(
                    u,
                    e,
                  ),
                  e
                );
              } finally {
                c.delete();
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
            function* (e, t, n, r, a, i, s, u, c, d, m, p, _) {
              if (!o("WAWebVoipGatingUtils").isGroupCallingEnabled()) {
                o("WALogger").ERROR(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: startGroupCall: Web group calling is not enabled",
                    ])),
                );
                return;
              }
              var f = yield l;
              o("WAWebBweMLModelManager")
                .initBweMLModelsForCall(f)
                .catch(function (e) {
                  o("WALogger").WARN(
                    C ||
                      (C = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [initBweMLModelsForCall] unhandled error: ",
                        "",
                      ])),
                    e,
                  );
                });
              var g = new f.StringList();
              e.forEach(function (e) {
                g.push_back(e);
              });
              var h = new f.StringList();
              t.forEach(function (e) {
                h.push_back(e);
              });
              var v = new f.StringList();
              n.forEach(function (e) {
                v.push_back(e);
              });
              var S = f.startVoipGroupCall(
                g,
                h,
                v,
                r,
                a,
                i,
                s,
                u,
                c,
                d,
                m != null ? m : 0,
                p != null ? p : 0,
                _ != null ? _ : "",
              );
              (S !== 0 &&
                o("WALogger")
                  .ERROR(
                    b ||
                      (b = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: startGroupCall: failed to start group call",
                      ])),
                  )
                  .sendLogs("voip-start-group-call-failed"),
                g.delete(),
                h.delete(),
                v.delete());
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
              var n = yield l;
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
            var e = yield l;
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
              var n = yield l;
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
              var s = yield l;
              s.rejectCallWithoutCallContext(e, t, n, r, o, a, i);
            },
          );
          function t(t, n, r, o, a, i, l) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        joinOngoingCall: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n, a, i, s, u, c, d, m, p, _, f, g, h, y, C) {
              if (!o("WAWebVoipGatingUtils").isGroupCallingEnabled()) {
                o("WALogger").ERROR(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: joinOngoingCall: Web group calling is not enabled",
                    ])),
                );
                return;
              }
              var b = yield l,
                R = new b.StringList();
              a.forEach(function (e) {
                R.push_back(e);
              });
              var L = new b.StringList();
              i.forEach(function (e) {
                L.push_back(e);
              });
              var E = new b.StringList();
              s.forEach(function (e) {
                E.push_back(e);
              });
              try {
                var k = b.joinVoipOngoingCall(
                  e,
                  t,
                  n,
                  R,
                  L,
                  E,
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
                if (k !== 0)
                  throw r("err")(
                    "voip: joinOngoingCall: failed to join ongoing call",
                  );
              } catch (e) {
                (o("WAWebCoreActionsODS").logCallGroupJoinError(),
                  o("WALogger")
                    .ERROR(
                      S ||
                        (S = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: joinOngoingCall: failed to join ongoing call ",
                          "",
                        ])),
                      e,
                    )
                    .sendLogs("voip-join-ongoing-call-failed"));
              } finally {
                (R.delete(), L.delete(), E.delete());
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
                    R ||
                      (R = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: previewCallLink: Call link feature is not enabled",
                      ])),
                  ),
                  -1
                );
              var i = 22;
              if (e.length !== i)
                return (
                  o("WALogger").ERROR(
                    L ||
                      (L = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: previewCallLink: invalid token length ",
                        ", expected ",
                        "",
                      ])),
                    e.length,
                    i,
                  ),
                  -1
                );
              var s = yield l;
              try {
                var u = s.previewCallLink(
                  e,
                  t,
                  n != null ? n : 0,
                  r != null ? r : "",
                  a != null ? a : !1,
                );
                return (
                  u !== 0 &&
                    o("WALogger")
                      .ERROR(
                        E ||
                          (E = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: previewCallLink: failed with status ",
                            "",
                          ])),
                        u,
                      )
                      .sendLogs("voip-preview-call-link-failed"),
                  u
                );
              } catch (e) {
                throw (
                  o("WAWebVoipNativeStackTraceLogger").logNativeStackTrace(
                    s,
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
                k ||
                  (k = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: joinCallLink: Call link feature is not enabled",
                  ])),
              );
              return;
            }
            var e = yield l;
            try {
              var t = e.joinCallLink();
              t !== 0 &&
                o("WALogger")
                  .ERROR(
                    I ||
                      (I = babelHelpers.taggedTemplateLiteralLoose([
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
                  T ||
                    (T = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: previewAndJoinCallLink: call links disabled",
                    ])),
                );
                return;
              }
              var s = yield l;
              try {
                o("WAWebBweMLModelManager")
                  .initBweMLModelsForCall(s)
                  .catch(function (e) {
                    o("WALogger").WARN(
                      D ||
                        (D = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [initBweMLModelsForCall] unhandled error: ",
                          "",
                        ])),
                      e,
                    );
                  });
                var u = s.previewAndJoinCallLink(
                  e,
                  t,
                  n != null ? n : 0,
                  r != null ? r : "",
                  a != null ? a : !1,
                  i != null ? i : "",
                );
                u !== 0 &&
                  o("WALogger")
                    .ERROR(
                      x ||
                        (x = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: previewAndJoinCallLink: failed with status ",
                          "",
                        ])),
                      u,
                    )
                    .sendLogs("voip-preview-and-join-call-link-failed");
              } catch (e) {
                throw (
                  o("WAWebVoipNativeStackTraceLogger").logNativeStackTrace(
                    s,
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
            function* (e, t, n, a, i, s, u, c, d) {
              var m = yield l;
              o("WAWebBweMLModelManager")
                .initBweMLModelsForCall(m)
                .catch(function (e) {
                  o("WALogger").WARN(
                    $ ||
                      ($ = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [initBweMLModelsForCall] unhandled error: ",
                        "",
                      ])),
                    e,
                  );
                });
              var p = e.node();
              r("justknobx")._("360") &&
                o("WAWebVoipStackInterfaceWebHelpers").overrideRelayIp(p);
              var _ = o("WABase64").encodeB64(o("WAWap").encodeStanza(p)),
                f = W(m, d),
                g = a != null ? String(a) : "0",
                h = i != null ? String(i) : "0";
              try {
                m.handleIncomingSignalingOffer(_, t, n, g, h, s, u, c, f);
              } catch (e) {
                throw (
                  o("WAWebVoipNativeStackTraceLogger").logNativeStackTrace(
                    m,
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
            function* (e, t, n, r, a, i, s, u) {
              var c = yield l,
                d = o("WABase64").encodeB64(o("WAWap").encodeStanza(e.node())),
                m = W(c, u),
                p = r != null ? String(r) : "0",
                _ = a != null ? String(a) : "0";
              try {
                c.handleIncomingSignalingMessage(d, t, n, p, _, i, s, m);
              } catch (e) {
                throw (
                  o("WAWebVoipNativeStackTraceLogger").logNativeStackTrace(
                    c,
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
              var s = yield l,
                u = e.node();
              r("justknobx")._("360") &&
                o("WAWebVoipStackInterfaceWebHelpers").overrideRelayIp(u);
              var c = o("WABase64").encodeB64(o("WAWap").encodeStanza(u)),
                d = W(s, i);
              try {
                s.handleIncomingSignalingAck(c, t, n, a, d);
              } catch (e) {
                throw (
                  o("WAWebVoipNativeStackTraceLogger").logNativeStackTrace(
                    s,
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
              var r = yield l,
                a = o("WABase64").encodeB64(o("WAWap").encodeStanza(e.node())),
                i = W(r, n);
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
              var n = yield l;
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
              var n = yield l;
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
              var r = B != null ? B : yield l,
                a = new Uint8Array(e),
                s = o("WAWebVoipWasmHeapBuffer").ensureHeapBuffer(
                  r,
                  i,
                  a.byteLength,
                );
              s !== 0 &&
                (r.GROWABLE_HEAP_U8().set(a, s),
                r.handleOnMessageFromHeap(s, a.byteLength, t, n));
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
              var n = B != null ? B : yield l;
              n.markRelayConnected(e, t);
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        setCallMute: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = yield l,
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
            var t = yield l,
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
            var e = yield l,
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
            var e = yield l,
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
            var e = yield l,
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
            var t = yield l;
            t.sendReaction(e);
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        raiseHand: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = yield l;
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
              var n = yield l,
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
            var e = yield l,
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
            var e = yield l,
              t = e.getCallInfo();
            return (
              t === "" &&
                o("WALogger").ERROR(
                  P ||
                    (P = babelHelpers.taggedTemplateLiteralLoose([
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
              n = yield l,
              r = n.acceptPeerVideo(t);
            return (
              r !== 0 &&
                o("WALogger").ERROR(
                  N ||
                    (N = babelHelpers.taggedTemplateLiteralLoose([
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
            var t = yield l,
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
            var t = yield l,
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
            var t = yield l,
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
            var t = yield l,
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
            var e = yield l,
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
            var t = yield l,
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
              var n = yield l,
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
            var e = yield l,
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
            var e = yield l,
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
              var n = yield l,
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
            var t = yield l,
              n = o("WAWebVoipScreenShareStreamKey").getBaseJidFromStreamKey(e),
              r = t.requestKeyFrame(n);
            return r;
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        updateNetworkMedium: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              var n = yield l;
              (n.updateNetworkMedium(e, 0),
                o("WALogger").LOG(
                  M ||
                    (M = babelHelpers.taggedTemplateLiteralLoose([
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
              var e = yield l,
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
              var e = yield l;
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
              var e = yield l;
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
              var t = yield l,
                n = t.getVoipParam(e);
              return (
                o("WALogger").LOG(
                  w ||
                    (w = babelHelpers.taggedTemplateLiteralLoose([
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
                  A ||
                    (A = babelHelpers.taggedTemplateLiteralLoose([
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
        isWebP2PEnabled: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            try {
              var t = yield l;
              return t.isWebP2PEnabled(e) === !0;
            } catch (e) {
              return (
                o("WALogger").ERROR(
                  F ||
                    (F = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: isWebP2PEnabled: error=",
                      "",
                    ])),
                  e,
                ),
                !1
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
              var i = yield l,
                s = JSON.stringify(a);
              i.sendWebP2PTransport(e, t, n, r, o, s);
            },
          );
          function t(t, n, r, o, a, i) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        callbacks: e,
        inviteToCall: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n) {
              var r = yield l,
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
              var n = yield l,
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
    function W(e, t) {
      var n = new e.Uint8List();
      if (t) {
        var r = new Uint8Array(t);
        r.forEach(function (e) {
          return n.push_back(e);
        });
      }
      return n;
    }
    l.createWAWebVoipStackInterface = B;
  },
  98,
);
