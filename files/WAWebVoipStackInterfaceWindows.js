__d(
  "WAWebVoipStackInterfaceWindows",
  [
    "WABase64",
    "WALogger",
    "WAWebAdvSyncDeviceListApi",
    "WAWebAuraRingtonePlayback",
    "WAWebBackendApi",
    "WAWebEnvironment",
    "WAWebLidMigrationUtils",
    "WAWebSendMsgDatabaseJob",
    "WAWebVoipHandleLidCallerDisplayInfo",
    "WAWebVoipHandleNativeCallEvent",
    "WAWebVoipSendSignalingXmpp",
    "WAWebVoipWaCallEnums",
    "WAWebWidFactory",
    "WAWebWindowsHybridBridgeFactory",
    "WAWebWindowsHybridBridgeInitiator",
    "WAWebWindowsNativeVoipParsers",
    "asyncToGeneratorRuntime",
    "cr:16754",
    "err",
    "gkx",
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
      E = (e = n("cr:16754")) != null ? e : {},
      k = E.VoipWinRTBridge;
    r("gkx")("4112") ||
      o("WALogger")
        .ERROR(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[VoipStackInterfaceWindows] imported without gk enabled",
            ])),
        )
        .sendLogs("voip-stack-interface-windows-imported-without-gk");
    function I() {
      if (!r("WAWebEnvironment").isWindows)
        throw r("err")(
          "createWAWebVoipStackInterface: Attempted to create Windows stack in non-Windows environment",
        );
      return {
        type: "windows",
        voipInit: function (t, n, a) {
          var e;
          return (e = o("WAWebWindowsHybridBridgeFactory").getWindowsBridge(
            r("WAWebWindowsHybridBridgeInitiator")
              .WAWebVoipStackInterfaceWindows,
          )) == null || (e = e.voip) == null
            ? void 0
            : e.voipInit(a, t || null);
        },
        setHideMyIp: function (t) {
          var e;
          return (e = o("WAWebWindowsHybridBridgeFactory").getWindowsBridge(
            r("WAWebWindowsHybridBridgeInitiator")
              .WAWebVoipStackInterfaceWindows,
          )) == null || (e = e.voip) == null
            ? void 0
            : e.setHideMyIp(t);
        },
        setChatNameAndIcon: function (t, n, a) {
          var e;
          return (e = o("WAWebWindowsHybridBridgeFactory").getWindowsBridge(
            r("WAWebWindowsHybridBridgeInitiator")
              .WAWebVoipStackInterfaceWindows,
          )) == null || (e = e.voip) == null
            ? void 0
            : e.setChatNameAndIcon(t, n, a);
        },
        handleWebViewReady: function () {
          var e;
          return (e = o("WAWebWindowsHybridBridgeFactory").getWindowsBridge(
            r("WAWebWindowsHybridBridgeInitiator")
              .WAWebVoipStackInterfaceWindows,
          )) == null || (e = e.voip) == null
            ? void 0
            : e.handleWebViewReady();
        },
        handleSignOut: function () {
          var e;
          return (e = o("WAWebWindowsHybridBridgeFactory").getWindowsBridge(
            r("WAWebWindowsHybridBridgeInitiator")
              .WAWebVoipStackInterfaceWindows,
          )) == null || (e = e.voip) == null
            ? void 0
            : e.handleSignOut();
        },
        startCall: function (t, n, a, i, l, s, u, c, d, m) {
          var e;
          return (e = o("WAWebWindowsHybridBridgeFactory").getWindowsBridge(
            r("WAWebWindowsHybridBridgeInitiator")
              .WAWebVoipStackInterfaceWindows,
          )) == null || (e = e.voip) == null
            ? void 0
            : e.startCall(t, n, a, i, l, !0, s, u, c, d, m);
        },
        startGroupCall: function (t, n, a, i, l, s, u, c, d, m, p, _, f) {
          var e;
          return (e = o("WAWebWindowsHybridBridgeFactory").getWindowsBridge(
            r("WAWebWindowsHybridBridgeInitiator")
              .WAWebVoipStackInterfaceWindows,
          )) == null || (e = e.voip) == null
            ? void 0
            : e.startGroupCall(t, n, a, i, l, s, u, c, !0, d, m, p, _, f);
        },
        endCall: function (t, n) {
          var e;
          return (e = o("WAWebWindowsHybridBridgeFactory").getWindowsBridge(
            r("WAWebWindowsHybridBridgeInitiator")
              .WAWebVoipStackInterfaceWindows,
          )) == null || (e = e.voip) == null
            ? void 0
            : e.endCall(t, n);
        },
        rejectCallWithoutCallContext: function (t, n, a, i, l, s, u) {
          var e;
          return (e = o("WAWebWindowsHybridBridgeFactory").getWindowsBridge(
            r("WAWebWindowsHybridBridgeInitiator")
              .WAWebVoipStackInterfaceWindows,
          )) == null || (e = e.voip) == null
            ? void 0
            : e.rejectCallWithoutCallContext(t, n, a, i, l, s, u);
        },
        joinOngoingCall: function (
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
          var e;
          return (e = o("WAWebWindowsHybridBridgeFactory").getWindowsBridge(
            r("WAWebWindowsHybridBridgeInitiator")
              .WAWebVoipStackInterfaceWindows,
          )) == null || (e = e.voip) == null
            ? void 0
            : e.joinOngoingCall(
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
              );
        },
        simulateNativeAnr: function (t, n) {
          var e,
            a =
              (e = o("WAWebWindowsHybridBridgeFactory").getWindowsBridge(
                r("WAWebWindowsHybridBridgeInitiator")
                  .WAWebVoipStackInterfaceWindows,
              )) == null
                ? void 0
                : e.voip;
          if (a != null && k != null && a instanceof k)
            try {
              a.simulateNativeAnr(t, n);
            } catch (e) {
              o("WALogger").ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "simulateNativeAnr: failed: ",
                    "",
                  ])),
                e,
              );
            }
          else
            o("WALogger").ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "simulateNativeAnr: not defined in the bridge",
                ])),
            );
        },
        inviteToCall: function (t, n, a) {
          var e;
          return (e = o("WAWebWindowsHybridBridgeFactory").getWindowsBridge(
            r("WAWebWindowsHybridBridgeInitiator")
              .WAWebVoipStackInterfaceWindows,
          )) == null || (e = e.voip) == null
            ? void 0
            : e.inviteToCall(t, n, a);
        },
        checkOngoingCalls: function (t, n) {
          var e;
          return (e = o("WAWebWindowsHybridBridgeFactory").getWindowsBridge(
            r("WAWebWindowsHybridBridgeInitiator")
              .WAWebVoipStackInterfaceWindows,
          )) == null ||
            (e = e.voip) == null ||
            e.checkOngoingCalls == null
            ? void 0
            : e.checkOngoingCalls(t, n);
        },
        handleDeviceJidList: function (t, n) {
          var e;
          return (e = o("WAWebWindowsHybridBridgeFactory").getWindowsBridge(
            r("WAWebWindowsHybridBridgeInitiator")
              .WAWebVoipStackInterfaceWindows,
          )) == null || (e = e.voip) == null
            ? void 0
            : e.handleDeviceJidList(t, n);
        },
        previewCallLink: function (t, n, a, i) {
          var e;
          return (e = o("WAWebWindowsHybridBridgeFactory").getWindowsBridge(
            r("WAWebWindowsHybridBridgeInitiator")
              .WAWebVoipStackInterfaceWindows,
          )) == null || (e = e.voip) == null
            ? void 0
            : e.previewCallLink(t, n, !0, a, i);
        },
        previewAndJoinCallLink: function (t, n, a, i, l, s) {
          var e;
          return (e = o("WAWebWindowsHybridBridgeFactory").getWindowsBridge(
            r("WAWebWindowsHybridBridgeInitiator")
              .WAWebVoipStackInterfaceWindows,
          )) == null ||
            (e = e.voip) == null ||
            e.previewAndJoinCallLink == null
            ? void 0
            : e.previewAndJoinCallLink(t, n, !0, a, i);
        },
        handleIncomingSignalingOffer: function (t, n, a, i, l, s, u, c, d) {
          var e,
            m,
            p =
              (e = o("WAWebAuraRingtonePlayback").getRingtoneId(
                o("WAWebWidFactory").createWid(c),
              )) != null
                ? e
                : null;
          return (m = o("WAWebWindowsHybridBridgeFactory").getWindowsBridge(
            r("WAWebWindowsHybridBridgeInitiator")
              .WAWebVoipStackInterfaceWindows,
          )) == null || (m = m.voip) == null
            ? void 0
            : m.handleIncomingSignalingOffer(t, n, a, i, l, s, u, c, d, p);
        },
        handleIncomingSignalingMessage: function (t, n, a, i, l, s, u, c) {
          var e;
          return (e = o("WAWebWindowsHybridBridgeFactory").getWindowsBridge(
            r("WAWebWindowsHybridBridgeInitiator")
              .WAWebVoipStackInterfaceWindows,
          )) == null || (e = e.voip) == null
            ? void 0
            : e.handleIncomingSignalingMessage(t, n, a, i, l, s, u, c);
        },
        handleIncomingSignalingAck: function (t) {
          var e,
            n = t.ackInfoError,
            a = t.ackInfoType,
            i = t.peerJid,
            l = t.tcToken,
            s = t.xmlNode;
          return (e = o("WAWebWindowsHybridBridgeFactory").getWindowsBridge(
            r("WAWebWindowsHybridBridgeInitiator")
              .WAWebVoipStackInterfaceWindows,
          )) == null || (e = e.voip) == null
            ? void 0
            : e.handleIncomingSignalingAck({
                ackInfoError: n,
                ackInfoType: a,
                peerJid: i,
                tcToken: l,
                xmlNode: s,
              });
        },
        handleIncomingSignalingReceipt: function (t, n, a) {
          var e;
          return (e = o("WAWebWindowsHybridBridgeFactory").getWindowsBridge(
            r("WAWebWindowsHybridBridgeInitiator")
              .WAWebVoipStackInterfaceWindows,
          )) == null || (e = e.voip) == null
            ? void 0
            : e.handleIncomingSignalingReceipt(t, n, a);
        },
        resendOfferOnDecryptionFailure: function (t, n) {
          var e;
          return (e = o("WAWebWindowsHybridBridgeFactory").getWindowsBridge(
            r("WAWebWindowsHybridBridgeInitiator")
              .WAWebVoipStackInterfaceWindows,
          )) == null || (e = e.voip) == null
            ? void 0
            : e.resendOfferOnDecryptionFailure(t, n);
        },
        resendEncRekeyRetry: function (t, n) {
          var e;
          return (e = o("WAWebWindowsHybridBridgeFactory").getWindowsBridge(
            r("WAWebWindowsHybridBridgeInitiator")
              .WAWebVoipStackInterfaceWindows,
          )) == null || (e = e.voip) == null
            ? void 0
            : e.resendEncRekeyRetry(t, n);
        },
        notifyDeviceIdentityChangedOrDeleted: function (t, n) {
          var e;
          return (e = o("WAWebWindowsHybridBridgeFactory").getWindowsBridge(
            r("WAWebWindowsHybridBridgeInitiator")
              .WAWebVoipStackInterfaceWindows,
          )) == null || (e = e.voip) == null
            ? void 0
            : e.notifyDeviceIdentityChangedOrDeleted(t, n);
        },
        callbacks: {
          onVoipReady: function () {
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: onVoipReady",
                ])),
            );
          },
          onCallEvent: function (t, n, r) {
            var e = o("WAWebVoipWaCallEnums").CallEvent.cast(t);
            if (e == null) {
              o("WALogger")
                .ERROR(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: onCallEvent: invalid event type ",
                      "",
                    ])),
                  t,
                )
                .sendLogs("voip: onCallEvent: invalid event type");
              return;
            }
            (o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: onCallEvent ",
                  "",
                ])),
              e != null ? o("WAWebVoipWaCallEnums").CallEvent.getName(e) : t,
            ),
              o("WAWebVoipHandleNativeCallEvent")
                .handleWAWebVoipNativeCallEvent(e, r)
                .catch(function (e) {
                  o("WALogger").WARN(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [onCallEvent] unhandled error: ",
                        "",
                      ])),
                    e,
                  );
                }));
          },
          onSignalingXmpp: function (t, n, r, a) {
            o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: onSignalingXmpp",
                ])),
            );
            var e = o("WABase64").decodeB64(r),
              i = new Uint8Array(e),
              l = new Uint8Array(i.length + 1);
            (l.set(i, 1),
              o("WAWebVoipSendSignalingXmpp")
                .sendWAWebVoipSignalingXmpp({
                  peerJid: t,
                  callId: n,
                  xmlPayload: l,
                })
                .catch(function (e) {
                  o("WALogger").WARN(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [onSignalingXmpp] unhandled error: ",
                        "",
                      ])),
                    e,
                  );
                }));
          },
          onRequestOpenChat: function (t) {
            (o("WALogger").LOG(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: onRequestOpenChat",
                ])),
            ),
              o("WAWebBackendApi").frontendFireAndForget("requestOpenChat", {
                chatJid: t,
              }));
          },
          onRequestDeviceJidList: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                o("WALogger").LOG(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: onRequestDeviceJidList",
                    ])),
                );
                var t = o("WAWebWidFactory").createWid(String(e));
                yield o("WAWebAdvSyncDeviceListApi").syncDeviceList({
                  wids: [t],
                  context: "voip",
                  phash: null,
                });
                var n = yield o("WAWebSendMsgDatabaseJob").getFanOutListJob([
                  t,
                ]);
                t.isLid() &&
                  n.some(function (e) {
                    return !e.isLid();
                  }) &&
                  (n = n.map(function (e) {
                    var t;
                    return e.isLid()
                      ? e
                      : (t = o("WAWebLidMigrationUtils").toLid(e)) != null
                        ? t
                        : e;
                  }));
                var r = n.map(function (e) {
                  return e.toString({ legacy: !0, formatIncludeDevice: !0 });
                });
                return r;
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          onCallAgain: function (t, n) {
            o("WALogger").LOG(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: onCallAgain",
                ])),
            );
            var e = o("WAWebWidFactory").createWid(String(t));
            o("WAWebBackendApi").frontendFireAndForget("startVoipCallByWid", {
              peerJid: e,
              isVideo: n,
            });
          },
          onLidCallerDisplayInfo: function (t) {
            (o("WALogger").LOG(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: onLidCallerDisplayInfo",
                ])),
            ),
              o("WAWebVoipHandleLidCallerDisplayInfo")
                .handleWAWebVoipLidCallerDisplayInfo(t)
                .catch(function (e) {
                  o("WALogger").WARN(
                    v ||
                      (v = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [onLidCallerDisplayInfo] unhandled error: ",
                        "",
                      ])),
                    e,
                  );
                }));
          },
          onRequestPhoneNumberJid: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t,
                  n,
                  r = o("WAWebWidFactory").createWid(String(e));
                return (
                  o("WALogger").LOG(
                    S ||
                      (S = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: onRequestPhoneNumberJid",
                      ])),
                  ),
                  r.isUser() || (r = o("WAWebWidFactory").asUserWidOrThrow(r)),
                  r.isLid()
                    ? (t =
                        (n = o("WAWebLidMigrationUtils").toPn(r)) == null
                          ? void 0
                          : n.toString()) != null
                      ? t
                      : ""
                    : r.toString()
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          onRequestLidJid: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t,
                  n,
                  r = o("WAWebWidFactory").createWid(String(e));
                return (
                  o("WALogger").LOG(
                    R ||
                      (R = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: onRequestLidJid",
                      ])),
                  ),
                  r.isUser() || (r = o("WAWebWidFactory").asUserWidOrThrow(r)),
                  r.isLid()
                    ? r.toString()
                    : (t =
                          (n = o("WAWebLidMigrationUtils").toLid(r)) == null
                            ? void 0
                            : n.toString()) != null
                      ? t
                      : ""
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          onRequestJoinCall: function (t) {
            (o("WALogger").LOG(
              L ||
                (L = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: onRequestJoinCall callId=",
                  "",
                ])),
              t,
            ),
              o("WAWebBackendApi").frontendFireAndForget("requestJoinCall", {
                callId: t,
              }));
          },
        },
        parsers: r("WAWebWindowsNativeVoipParsers"),
      };
    }
    l.createWAWebVoipStackInterface = I;
  },
  98,
);
