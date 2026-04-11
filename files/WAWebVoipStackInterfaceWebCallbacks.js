__d(
  "WAWebVoipStackInterfaceWebCallbacks",
  [
    "WABinary",
    "WAByteArray",
    "WACryptoHkdfSync",
    "WACryptoSha256HmacBuilder",
    "WALogger",
    "WAWebBweModelPathProvider",
    "WAWebChatCollection",
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebTrustedContactsUtils",
    "WAWebVoipAudioCaptureAndPlayback",
    "WAWebVoipBrowserAudioStatus",
    "WAWebVoipGatingUtils",
    "WAWebVoipHandleNativeCallEvent",
    "WAWebVoipP2PConnectionManager",
    "WAWebVoipPersistentFS",
    "WAWebVoipSctpConnectionManager",
    "WAWebVoipSendSignalingXmpp",
    "WAWebVoipVideoCaptureAndRendering",
    "WAWebVoipVideoFrameConsumedSignal",
    "WAWebVoipWaCallEnums",
    "WAWebVoipWebTransportConnectionManager",
    "WAWebWidFactory",
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
      V = 50,
      H = Reflect.get(globalThis, "Atomics");
    function G() {
      var t = o("WAWebVoipGatingUtils").isWebTransportEnabled();
      function n(t) {
        var n = o("WAWebWidFactory").createWid(t);
        if (n == null)
          return (
            o("WALogger").ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: isParticipantKnownContact: Invalid JID ",
                  "",
                ])),
              t,
            ),
            !1
          );
        var r = o("WAWebContactCollection").ContactCollection.get(n);
        if (r != null) {
          var a = o("WAWebFrontendContactGetters").getIsMyContact(r);
          if (a) return !0;
        }
        var i = o("WAWebChatCollection").ChatCollection.get(n);
        if (i != null) {
          var l = i.tcToken,
            u = i.tcTokenTimestamp;
          if (l != null && u != null) {
            var c = !o("WAWebTrustedContactsUtils").isTokenExpired(
              u,
              o("WAWebTrustedContactsUtils").TcTokenMode.Receiver,
            );
            if (c) return !0;
          }
        }
        return (
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: isParticipantKnownContact: ",
                " unknown",
              ])),
            t,
          ),
          !1
        );
      }
      var r = {
        onSignalingXmpp: function (t) {
          var e = Date.now(),
            n = t.callId,
            r = t.peerJid,
            a = t.xmlPayload;
          (o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: onSignalingXmpp",
              ])),
          ),
            o("WAWebVoipSendSignalingXmpp")
              .sendWAWebVoipSignalingXmpp({
                peerJid: r,
                callId: n,
                xmlPayload: a,
              })
              .catch(function (e) {
                o("WALogger").WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [onSignalingXmpp] unhandled error: ",
                      "",
                    ])),
                  e,
                );
              }));
          var i = Date.now() - e;
          i > V &&
            o("WALogger").WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [Callbacks] Slow sync onSignalingXmpp: ",
                  "ms",
                ])),
              i,
            );
        },
        onCallEvent: function (t) {
          var e = Date.now(),
            n = t.eventDataJson,
            r = t.eventType,
            a = t.userData,
            i = o("WAWebVoipWaCallEnums").CallEvent.cast(r);
          if (i == null) {
            o("WALogger")
              .ERROR(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: onCallEvent: invalid event type ",
                    "",
                  ])),
                r,
              )
              .sendLogs("voip: onCallEvent: invalid event type");
            return;
          }
          var l = o("WAWebVoipWaCallEnums").CallEvent.getName(i);
          (l !== "SpeakerStatusChanged" &&
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: onCallEvent ",
                  "",
                ])),
              i != null ? o("WAWebVoipWaCallEnums").CallEvent.getName(i) : r,
            ),
            o("WAWebVoipHandleNativeCallEvent")
              .handleWAWebVoipNativeCallEvent(i, n)
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
          var s = Date.now() - e;
          s > V &&
            o("WALogger").WARN(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [Callbacks] Slow sync onCallEvent ",
                  ": ",
                  "ms",
                ])),
              l,
              s,
            );
        },
        sendDataToRelay: function (n) {
          var e = n.data,
            r = n.ip,
            a = n.len,
            i = n.port;
          if (
            o("WAWebVoipP2PConnectionManager").isP2PVirtualAddress(r, i) &&
            o("WAWebVoipP2PConnectionManager").isP2PEnabled()
          )
            return (
              o("WAWebVoipP2PConnectionManager").sendP2PData(
                new Uint8Array(e).buffer,
              ),
              a
            );
          var l = o("WAByteArray").uint8ArrayToBuffer(e);
          return (
            t
              ? o("WAWebVoipWebTransportConnectionManager").sendData(l, r, i)
              : o("WAWebVoipSctpConnectionManager").sendWAWebVoipDataToRelay(
                  l,
                  r,
                  i,
                ),
            a
          );
        },
        loggingCallback: function (t) {
          var e = t.level,
            n = t.message;
          switch (e) {
            case 1:
              o("WALogger").ERROR(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: wasm: ",
                    "",
                  ])),
                n,
              );
              break;
            case 2:
              o("WALogger").WARN(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: wasm: ",
                    "",
                  ])),
                n,
              );
              break;
            case 3:
              o("WALogger").LOG(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: wasm: ",
                    "",
                  ])),
                n,
              );
              break;
            case 4:
            case 5:
              break;
            default:
              break;
          }
        },
        dataChannelStateCallback: function (t) {
          var e = t.connectionId,
            n = t.errorReason,
            r = t.event;
          (o("WALogger").LOG(
            C ||
              (C = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [DCThread] dcState: event=",
                " connId=",
                " reason=",
                "",
              ])),
            r,
            e,
            n != null ? n : "N/A",
          ),
            r === "open"
              ? o("WAWebVoipP2PConnectionManager").isP2PConnectionId(e)
                ? o(
                    "WAWebVoipP2PConnectionManager",
                  ).handleWorkerP2PChannelOpened()
                : o("WAWebVoipSctpConnectionManager").handleDataChannelOpened(e)
              : (r === "close" || r === "error") &&
                (o("WAWebVoipP2PConnectionManager").isP2PConnectionId(e)
                  ? o(
                      "WAWebVoipP2PConnectionManager",
                    ).handleWorkerP2PChannelClosed(t.stats)
                  : (t.stats != null &&
                      o("WAWebVoipSctpConnectionManager").mergeWorkerStats(
                        e,
                        t.stats,
                      ),
                    r === "error" &&
                      (n != null
                        ? o(
                            "WAWebVoipSctpConnectionManager",
                          ).handleDataChannelErrored(e, n)
                        : o(
                            "WAWebVoipSctpConnectionManager",
                          ).handleDataChannelErrored(e)))));
        },
        initCaptureDriverJS: function (t) {
          var e = t.bits_per_sample,
            n = t.channels,
            r = t.frames_per_chunk,
            a = t.sample_rate;
          (o("WALogger").LOG(
            b ||
              (b = babelHelpers.taggedTemplateLiteralLoose([
                "wasm: [AV:initCaptureDriverJS]",
              ])),
          ),
            o("WAWebVoipAudioCaptureAndPlayback")
              .initCaptureDriverJS({
                sample_rate: a,
                channels: n,
                bits_per_sample: e,
                frames_per_chunk: r,
              })
              .catch(function (e) {
                o("WALogger").WARN(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:initCaptureDriverJS] unhandled error: ",
                      "",
                    ])),
                  e,
                );
              }));
        },
        startCaptureJS: function () {
          (o("WALogger").LOG(
            S ||
              (S = babelHelpers.taggedTemplateLiteralLoose([
                "wasm: [AV:startCaptureJS]",
              ])),
          ),
            o("WAWebVoipAudioCaptureAndPlayback")
              .startCaptureJS()
              .catch(function (e) {
                o("WALogger").WARN(
                  R ||
                    (R = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:startCaptureJS] unhandled error: ",
                      "",
                    ])),
                  e,
                );
              }));
        },
        stopCaptureJS: function () {
          (o("WALogger").LOG(
            L ||
              (L = babelHelpers.taggedTemplateLiteralLoose([
                "wasm: [AV:stopCaptureJS]",
              ])),
          ),
            o("WAWebVoipAudioCaptureAndPlayback")
              .stopCaptureJS()
              .catch(function (e) {
                o("WALogger").WARN(
                  E ||
                    (E = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:stopCaptureJS] unhandled error: ",
                      "",
                    ])),
                  e,
                );
              }));
        },
        initPlaybackDriverJS: function (t) {
          var e = t.bits_per_sample,
            n = t.channels,
            r = t.frames_per_chunk,
            a = t.sample_rate;
          (o("WALogger").LOG(
            k ||
              (k = babelHelpers.taggedTemplateLiteralLoose([
                "wasm: [AV:initPlaybackDriverJS]",
              ])),
          ),
            o("WAWebVoipAudioCaptureAndPlayback")
              .initPlaybackDriverJS({
                sample_rate: a,
                channels: n,
                bits_per_sample: e,
                frames_per_chunk: r,
              })
              .catch(function (e) {
                o("WALogger").WARN(
                  I ||
                    (I = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:initPlaybackDriverJS] unhandled error: ",
                      "",
                    ])),
                  e,
                );
              }));
        },
        startPlaybackJS: function () {
          (o("WALogger").LOG(
            T ||
              (T = babelHelpers.taggedTemplateLiteralLoose([
                "wasm: [AV:startPlaybackJS]",
              ])),
          ),
            o("WAWebVoipAudioCaptureAndPlayback")
              .startPlaybackJS()
              .catch(function (e) {
                o("WALogger").WARN(
                  D ||
                    (D = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:startPlaybackJS] unhandled error: ",
                      "",
                    ])),
                  e,
                );
              }));
        },
        stopPlaybackJS: function () {
          (o("WALogger").LOG(
            x ||
              (x = babelHelpers.taggedTemplateLiteralLoose([
                "wasm: [AV:stopPlaybackJS]",
              ])),
          ),
            o("WAWebVoipAudioCaptureAndPlayback")
              .stopPlaybackJS()
              .catch(function (e) {
                o("WALogger").WARN(
                  $ ||
                    ($ = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:stopPlaybackJS] unhandled error: ",
                      "",
                    ])),
                  e,
                );
              }));
        },
        startVideoCaptureJS: function (t) {
          var e = t.camera_id,
            n = t.height,
            r = t.isAVUpgrade,
            a = r === void 0 ? !1 : r,
            i = t.max_fps,
            l = t.width;
          (o("WALogger").LOG(
            P ||
              (P = babelHelpers.taggedTemplateLiteralLoose([
                "wasm: [AV:startVideoCaptureJS]",
              ])),
          ),
            o("WAWebVoipVideoCaptureAndRendering")
              .startVideoCaptureJS({
                camera_id: "",
                width: l,
                height: n,
                max_fps: i,
                isAVUpgrade: a,
              })
              .catch(function (e) {
                o("WALogger").WARN(
                  N ||
                    (N = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:startVideoCaptureJS] unhandled error: ",
                      "",
                    ])),
                  e,
                );
              }));
        },
        stopVideoCaptureJS: function () {
          (o("WALogger").LOG(
            M ||
              (M = babelHelpers.taggedTemplateLiteralLoose([
                "wasm: [AV:stopVideoCaptureJS]",
              ])),
          ),
            o("WAWebVoipVideoCaptureAndRendering")
              .stopVideoCaptureJS()
              .catch(function (e) {
                o("WALogger").WARN(
                  w ||
                    (w = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:stopVideoCaptureJS] unhandled error: ",
                      "",
                    ])),
                  e,
                );
              }));
        },
        onVideoFrameWasmToJs: function (t) {
          var e = t.format,
            n = t.frameBuffer,
            r = t.height,
            a = t.isKeyFrame,
            i = t.orientation,
            l = t.timestamp,
            s = t.userJid,
            u = t.width;
          o("WAWebVoipVideoCaptureAndRendering")
            .onVideoFrameWasmToJs({
              userJid: s,
              frameBuffer: n,
              width: u,
              height: r,
              orientation: i,
              format: e,
              timestamp: l,
              isKeyFrame: a,
            })
            .catch(function (e) {
              o("WALogger").WARN(
                A ||
                  (A = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:onVideoFrameWasmToJs] unhandled error: ",
                    "",
                  ])),
                e,
              );
            });
        },
        startDesktopCaptureJS: function (t) {
          o("WALogger").LOG(
            F ||
              (F = babelHelpers.taggedTemplateLiteralLoose([
                "wasm: [AV:startDesktopCaptureJS]",
              ])),
          );
          var e = t.height,
            n = t.max_fps,
            r = t.width;
          o("WAWebVoipVideoCaptureAndRendering")
            .startDesktopCaptureJS({ width: r, height: e, maxFps: n })
            .catch(function (e) {
              o("WALogger").WARN(
                O ||
                  (O = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:startDesktopCaptureJS] unhandled error: ",
                    "",
                  ])),
                e,
              );
            });
        },
        stopDesktopCaptureJS: function () {
          (o("WALogger").LOG(
            B ||
              (B = babelHelpers.taggedTemplateLiteralLoose([
                "wasm: [AV:stopDesktopCaptureJS]",
              ])),
          ),
            o("WAWebVoipVideoCaptureAndRendering")
              .stopDesktopCaptureJS()
              .catch(function (e) {
                o("WALogger").WARN(
                  W ||
                    (W = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:stopDesktopCaptureJS] unhandled error: ",
                      "",
                    ])),
                  e,
                );
              }));
        },
        cryptoHkdfExtractWithSaltAndExpand: function (t) {
          var e = t.info_,
            n = t.key_,
            r = t.length,
            a = t.salt_,
            i = new Uint8Array(n),
            l = o("WABinary").Binary.build(e).readByteArrayView();
          return o("WACryptoHkdfSync").hkdf(i, a != null ? a : void 0, l, r);
        },
        hmacSha256KeyGenerator: function (t) {
          var e = t.data_,
            n = t.key_,
            r = new Uint8Array(e),
            a = new Uint8Array(n);
          return new (o("WACryptoSha256HmacBuilder").Sha256HMacBuilder)(a)
            .update(r)
            .finish();
        },
        isParticipantKnownContact: function (t) {
          var e = t.jid;
          try {
            return n(e);
          } catch (t) {
            return (
              o("WALogger")
                .ERROR(
                  q ||
                    (q = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: isParticipantKnownContact: error ",
                      ": ",
                      "",
                    ])),
                  e,
                  t,
                )
                .sendLogs("voip-is-participant-known-contact-error"),
              !1
            );
          }
        },
        contactLookupSyncRequest: function (t) {
          var e = !1;
          try {
            e = n(t.jid);
          } catch (e) {
            o("WALogger")
              .ERROR(
                U ||
                  (U = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: contactLookupSyncRequest: error ",
                    ": ",
                    "",
                  ])),
                t.jid,
                e,
              )
              .sendLogs("voip-is-participant-known-contact-sync-error");
          }
          var r = new Int32Array(t.buffer);
          (H.store(r, 1, e ? 1 : 0), H.store(r, 0, 1), H.notify(r, 0, 1));
        },
        getBrowserAudioProcessingStatus: function () {
          var e = o(
            "WAWebVoipBrowserAudioStatus",
          ).getBrowserAudioProcessingApplied();
          return e == null
            ? -1
            : (e.echoCancellation ? 1 : 0) +
                (e.noiseSuppression ? 2 : 0) +
                (e.autoGainControl ? 4 : 0);
        },
        getPersistentDirectoryPath: function () {
          return o("WAWebVoipPersistentFS").getVoipPersistentDirectoryPath();
        },
        getBweModelPath: function (t) {
          var e = t.versionName;
          return o("WAWebBweModelPathProvider").getBweModelPath(e);
        },
        videoFrameConsumed: function () {
          o("WAWebVoipVideoFrameConsumedSignal").notifyVideoFrameConsumed();
        },
      };
      return r;
    }
    l.createWorkerCompatibleCallbacks = G;
  },
  98,
);
