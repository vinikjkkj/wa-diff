__d(
  "WAWebVoipStackInterfaceWeb",
  [
    "WABase64",
    "WACommonTaskScheduler",
    "WALogger",
    "WAPromiseDelays",
    "WAWap",
    "WAWebABProps",
    "WAWebBackendApi",
    "WAWebBweMLModelManager",
    "WAWebLowEndDeviceExperimentGating",
    "WAWebNoop",
    "WAWebVoipABPropConfig",
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
    "WAWebVoipStackInterfaceWorkerProxy",
    "WAWebVoipStorageInit",
    "WAWebVoipVideoRendererInterface",
    "WAWebVoipVideoRendererRegistry",
    "WAWebVoipVideoWebCodecsRenderer",
    "WAWebVoipWasmHeapBuffer",
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
    function A(t) {
      for (var n of r("WAWebVoipABPropConfig")) {
        var a = n.abProp,
          i = n.type,
          l = n.wasmKey;
        try {
          var s = o("WAWebABProps").getABPropConfigValue(a);
          i === "bool"
            ? t.setABPropBool(l, s)
            : i === "string"
              ? t.setABPropString(l, String(s))
              : t.setABPropInt(l, s);
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
    }
    function F() {
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
      return {
        type: "web",
        parsers: r("WAWebVoipJsonParsersWeb"),
        voipInit: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n) {
              var a = yield l;
              o("WAWebVoipStorageInit").initVoipStorageAndMLCache(a);
              var _ = !1,
                f = !1;
              try {
                yield o(
                  "WAWebVoipVideoRendererRegistry",
                ).videoRendererRegistry.init();
                var g = o(
                  "WAWebVoipVideoRendererRegistry",
                ).videoRendererRegistry.getRendererType();
                _ =
                  g ===
                  o("WAWebVoipVideoRendererInterface")
                    .WAWebVoipVideoRendererType.WEBCODECS_H264;
                var h = o("WAWebABProps").getABPropConfigValue(
                    "enable_webcodec_video_encode",
                  ),
                  y =
                    _ ||
                    (yield o(
                      "WAWebVoipVideoWebCodecsRenderer",
                    ).WAWebVoipVideoWebCodecsRenderer.checkAvailability());
                f =
                  y && h === !0
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
                _,
                f,
              ),
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [webcodec-encode] enabled=",
                      "",
                    ])),
                  f,
                ),
                o("WAWebVoipWebCodecsEncoderState").setWebCodecsEncoderEnabled(
                  f,
                ),
                o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [webcodec-encode] WebCodecs encoder state ",
                      "",
                    ])),
                  f,
                ),
                o("WAWebABProps").getABPropConfigValue(
                  "wmi_worker_scheduler_web",
                )
                  ? yield r("WACommonTaskScheduler").yield()
                  : yield o("WAPromiseDelays").releaseToEventLoop(),
                o("WAWebVoipQplHelpers").voipInitQplAddPoint(
                  o("WAWebVoipQplHelpers").VoipInitQplPoint
                    .VOIP_STACK_INIT_START,
                ));
              try {
                (A(a),
                  a.setABPropBool("enable_passthrough_video_decoder", _),
                  a.setABPropBool("enable_webcodec_video_encode", f),
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
                  a.initVoipStack(e, t, n));
              } catch (e) {
                throw (
                  o("WAWebVoipNativeStackTraceLogger").logNativeStackTrace(
                    a,
                    e,
                  ),
                  e
                );
              } finally {
                o("WAWebVoipQplHelpers").voipInitQplAddPoint(
                  o("WAWebVoipQplHelpers").VoipInitQplPoint.VOIP_STACK_INIT_END,
                );
              }
              o("WAWebVoipPerfOptimizations").isPerfOptimizationEnabled(
                o("WAWebVoipPerfOptimizations").PerfOptimizationFlag
                  .LOG_RING_BUFFER,
              ) && o("WAWebVoipLogDrainer").startLogDrainer(a);
              var C = a.getWebP2PVirtualIpv4(),
                b = a.getWebP2PVirtualIpv6(),
                v = a.getWebP2PVirtualPort();
              (o("WAWebVoipP2PConnectionManager").initP2PVirtualAddresses(
                C,
                b,
                v,
              ),
                o("WAWebVoipP2PConnectionManager").registerOnDataChannelMessage(
                  function (e) {
                    var t = new Uint8Array(e),
                      n = o("WAWebVoipWasmHeapBuffer").ensureHeapBuffer(
                        a,
                        i,
                        t.byteLength,
                      );
                    (a.GROWABLE_HEAP_U8().set(t, n),
                      a.handleOnMessageFromHeap(n, t.byteLength, C, v));
                  },
                ));
              var S = !1;
              o(
                "WAWebVoipP2PConnectionManager",
              ).registerOnDataChannelStateChange(function (e) {
                e === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open
                  ? ((S = !0),
                    o("WALogger").LOG(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: P2P DataChannel opened, notifying WASM active=true",
                        ])),
                    ),
                    a.notifyWebP2PChannelReady(!0, !1))
                  : S &&
                    ((S = !1),
                    o("WALogger").LOG(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: P2P DataChannel state changed to ",
                          " after being open, notifying WASM active=false",
                        ])),
                      e,
                    ),
                    a.notifyWebP2PChannelReady(!1, !1));
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
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
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
              var d = O(u, s);
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
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
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
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
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
              var b = new f.StringList();
              t.forEach(function (e) {
                b.push_back(e);
              });
              var v = new f.StringList();
              n.forEach(function (e) {
                v.push_back(e);
              });
              var S = f.startVoipGroupCall(
                g,
                b,
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
                    C ||
                      (C = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: startGroupCall: failed to start group call",
                      ])),
                  )
                  .sendLogs("voip-start-group-call-failed"),
                g.delete(),
                b.delete(),
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
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: joinOngoingCall: Web group calling is not enabled",
                    ])),
                );
                return;
              }
              var S = yield l,
                R = new S.StringList();
              a.forEach(function (e) {
                R.push_back(e);
              });
              var L = new S.StringList();
              i.forEach(function (e) {
                L.push_back(e);
              });
              var E = new S.StringList();
              s.forEach(function (e) {
                E.push_back(e);
              });
              try {
                var k = S.joinVoipOngoingCall(
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
                o("WALogger")
                  .ERROR(
                    v ||
                      (v = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: joinOngoingCall: failed to join ongoing call ",
                        "",
                      ])),
                    e,
                  )
                  .sendLogs("voip-join-ongoing-call-failed");
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
            function* (e, t, n, r) {
              if (!o("WAWebVoipGatingUtils").callLinksEnabled()) {
                o("WALogger").ERROR(
                  S ||
                    (S = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: previewCallLink: Call link feature is not enabled",
                    ])),
                );
                return;
              }
              var a = 22;
              if (e.length !== a) {
                o("WALogger").ERROR(
                  R ||
                    (R = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: previewCallLink: invalid token length ",
                      ", expected ",
                      "",
                    ])),
                  e.length,
                  a,
                );
                return;
              }
              var i = yield l;
              try {
                var s = i.previewCallLink(
                  e,
                  t,
                  n != null ? n : 0,
                  r != null ? r : "",
                );
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
                    .sendLogs("voip-preview-call-link-failed");
              } catch (e) {
                throw (
                  o("WAWebVoipNativeStackTraceLogger").logNativeStackTrace(
                    i,
                    e,
                  ),
                  e
                );
              }
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
                E ||
                  (E = babelHelpers.taggedTemplateLiteralLoose([
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
            function* (e, t, n, r) {
              if (!o("WAWebVoipGatingUtils").callLinksEnabled()) {
                o("WALogger").ERROR(
                  I ||
                    (I = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: previewAndJoinCallLink: call links disabled",
                    ])),
                );
                return;
              }
              var a = yield l;
              try {
                o("WAWebBweMLModelManager")
                  .initBweMLModelsForCall(a)
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
                var i = a.previewAndJoinCallLink(
                  e,
                  t,
                  n != null ? n : 0,
                  r != null ? r : "",
                );
                i !== 0 &&
                  o("WALogger")
                    .ERROR(
                      D ||
                        (D = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: previewAndJoinCallLink: failed with status ",
                          "",
                        ])),
                      i,
                    )
                    .sendLogs("voip-preview-and-join-call-link-failed");
              } catch (e) {
                throw (
                  o("WAWebVoipNativeStackTraceLogger").logNativeStackTrace(
                    a,
                    e,
                  ),
                  e
                );
              }
            },
          );
          function t(t, n, r, o) {
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
                    x ||
                      (x = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [initBweMLModelsForCall] unhandled error: ",
                        "",
                      ])),
                    e,
                  );
                });
              var p = e.node();
              r("justknobx")._("360") && W(p);
              var _ = o("WABase64").encodeB64(o("WAWap").encodeStanza(p)),
                f = O(m, d),
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
                m = O(c, u),
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
              r("justknobx")._("360") && W(u);
              var c = o("WABase64").encodeB64(o("WAWap").encodeStanza(u)),
                d = O(s, i);
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
                i = O(r, n);
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
              var r = yield l,
                a = new Uint8Array(e),
                s = o("WAWebVoipWasmHeapBuffer").ensureHeapBuffer(
                  r,
                  i,
                  a.byteLength,
                );
              (r.GROWABLE_HEAP_U8().set(a, s),
                r.handleOnMessageFromHeap(s, a.byteLength, t, n));
            },
          );
          function t(t, n, r) {
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
              n = yield l,
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
              var n = yield l;
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
        getVoipParam: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            try {
              var t = yield l,
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
    function O(e, t) {
      var n = new e.Uint8List();
      if (t) {
        var r = new Uint8Array(t);
        r.forEach(function (e) {
          return n.push_back(e);
        });
      }
      return n;
    }
    var B = {
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
    function W(e) {
      var t = e.content;
      if (String(e.tag) === "te2") {
        var n = e.content,
          r = e.attrs;
        if (r != null && n != null && n instanceof Uint8Array) {
          var o = String(r.relay_name),
            a = B[o];
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
          W(e);
        });
    }
    l.createWAWebVoipStackInterface = F;
  },
  98,
);
