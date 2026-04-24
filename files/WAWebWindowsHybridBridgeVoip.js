__d(
  "WAWebWindowsHybridBridgeVoip",
  [
    "WABase64",
    "WALogger",
    "WAWebBackendApi",
    "WAWebODS",
    "WAWebSerializeVoipWapNode",
    "WAWebWindowsHybridBridgeTrace",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function () {
        function t(t, n) {
          var a = this;
          ((this.handleVoipReady = function () {
            var e;
            (o("WAWebBackendApi").frontendFireAndForget(
              "addStartingLogoutListener",
              function () {
                return a.handleSignOut();
              },
            ),
              (e = a.$3) == null || e.onVoipReady());
          }),
            (this.sendSignalingXmpp = function (t) {
              var n,
                r = t.callId,
                i = t.payload,
                l = t.peerJid,
                s = t.shouldEncryptBeforeSending,
                u = function (t) {
                  return t.replace(
                    /^([^@]*)([^@][^@][^@][^@])@(.*)$/,
                    "...$2@$3",
                  );
                };
              (o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[VoipWinRTBridge] sendSignalingXmpp peer=",
                    " call=",
                    " encrypt=",
                    "",
                  ])),
                u(l),
                r,
                s,
              ),
                (n = a.$3) == null || n.onSignalingXmpp(l, r, i, s));
            }),
            (this.handleCallEvent = function (e) {
              var t,
                n = e.eventDataJson,
                r = e.eventType,
                o = e.userData;
              (t = a.$3) == null || t.onCallEvent(r, o, n);
            }),
            (this.requestOpenChat = function (e) {
              var t;
              (t = a.$3) == null || t.onRequestOpenChat(e);
            }),
            (this.requestDeviceJidList = function (e) {
              var t;
              (t = a.$3) == null ||
                t.onRequestDeviceJidList(e).then(function (t) {
                  (r("WAWebODS").incr(
                    "web.hybrid.bridge.voip.send.handle_device_jid_list",
                  ),
                    o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                      {
                        bridge: "voip",
                        method: "handleDeviceJidList",
                        type: "sync",
                      },
                      function () {
                        var n;
                        return (n = a.$1) == null
                          ? void 0
                          : n.handleDeviceJidList(e.toString(), t);
                      },
                    ));
                });
            }),
            (this.requestPhoneNumberJid = function (e) {
              var t;
              (t = a.$3) == null ||
                t.onRequestPhoneNumberJid == null ||
                t.onRequestPhoneNumberJid(e).then(function (t) {
                  (r("WAWebODS").incr(
                    "web.hybrid.bridge.voip.send.handle_phone_number_jid",
                  ),
                    o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                      {
                        bridge: "voip",
                        method: "handlePhoneNumberJid",
                        type: "sync",
                      },
                      function () {
                        var n;
                        return (n = a.$1) == null
                          ? void 0
                          : n.handlePhoneNumberJid(e.toString(), t);
                      },
                    ));
                });
            }),
            (this.requestLidJid = function (e) {
              var t;
              (t = a.$3) == null ||
                t.onRequestLidJid == null ||
                t.onRequestLidJid(e).then(function (t) {
                  (r("WAWebODS").incr(
                    "web.hybrid.bridge.voip.send.handle_lid_jid",
                  ),
                    o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                      { bridge: "voip", method: "handleLidJid", type: "sync" },
                      function () {
                        var n;
                        return (n = a.$1) == null
                          ? void 0
                          : n.handleLidJid(e.toString(), t);
                      },
                    ));
                });
            }),
            (this.callAgain = function (e) {
              var t,
                n = e.isVideoCall,
                r = e.peerJid;
              (t = a.$3) == null || t.onCallAgain(r, n);
            }),
            (this.handleLidCallerDisplayInfo = function (e) {
              var t;
              (t = a.$3) == null || t.onLidCallerDisplayInfo(e);
            }),
            (this.requestJoinCall = function (e) {
              var t;
              (t = a.$3) == null ||
                t.onRequestJoinCall == null ||
                t.onRequestJoinCall(String(e));
            }),
            (this.$1 = t),
            (this.$2 = n),
            this.$1.addEventListener(
              "handleVoipReadyEvent",
              this.handleVoipReady,
            ),
            this.$1.addEventListener(
              "handleVoipCallEvent",
              this.handleCallEvent,
            ),
            this.$1.addEventListener(
              "handleSignalingXmppEvent",
              this.sendSignalingXmpp,
            ),
            this.$1.addEventListener(
              "handleRequestOpenChatEvent",
              this.requestOpenChat,
            ),
            this.$1.addEventListener(
              "handleRequestDeviceJidListEvent",
              this.requestDeviceJidList,
            ),
            this.$1.addEventListener(
              "handleRequestPhoneNumberJidEvent",
              this.requestPhoneNumberJid,
            ),
            this.$1.addEventListener(
              "handleRequestLidJidEvent",
              this.requestLidJid,
            ),
            this.$1.addEventListener("handleCallAgainEvent", this.callAgain),
            this.$1.addEventListener(
              "handleLidCallerDisplayInfoEvent",
              this.handleLidCallerDisplayInfo,
            ),
            this.$1.addEventListener(
              "handleRequestJoinCallEvent",
              this.requestJoinCall,
            ),
            this.$1.subscribe(null));
        }
        var a = t.prototype;
        return (
          (a.setHandlers = function (t) {
            this.$3 = t;
          }),
          (a.cleanup = function () {
            this.$1.removeEventListener != null &&
              (this.$1.removeEventListener(
                "handleVoipReadyEvent",
                this.handleVoipReady,
              ),
              this.$1.removeEventListener(
                "handleVoipCallEvent",
                this.handleCallEvent,
              ),
              this.$1.removeEventListener(
                "handleSignalingXmppEvent",
                this.sendSignalingXmpp,
              ),
              this.$1.removeEventListener(
                "handleRequestOpenChatEvent",
                this.requestOpenChat,
              ),
              this.$1.removeEventListener(
                "handleRequestDeviceJidListEvent",
                this.requestDeviceJidList,
              ),
              this.$1.removeEventListener(
                "handleRequestPhoneNumberJidEvent",
                this.requestPhoneNumberJid,
              ),
              this.$1.removeEventListener(
                "handleRequestLidJidEvent",
                this.requestLidJid,
              ),
              this.$1.removeEventListener(
                "handleCallAgainEvent",
                this.callAgain,
              ),
              this.$1.removeEventListener(
                "handleLidCallerDisplayInfo",
                this.handleLidCallerDisplayInfo,
              ),
              this.$1.removeEventListener(
                "handleRequestJoinCallEvent",
                this.requestJoinCall,
              ));
          }),
          (a.handleIncomingSignalingOffer = function (
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
          ) {
            var e = this;
            (r("WAWebODS").incr(
              "web.hybrid.bridge.voip.send.handle_incoming_signaling_offer",
            ),
              o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                {
                  bridge: "voipSignaling",
                  method: "handleIncomingSignalingOffer",
                  type: "sync",
                },
                function () {
                  return e.$2.handleIncomingSignalingOffer(
                    o("WAWebSerializeVoipWapNode").serializeVoipWapNode(t),
                    n,
                    a,
                    i,
                    l,
                    s,
                    u,
                    c,
                    d ? o("WABase64").encodeB64(d) : null,
                    m,
                  );
                },
              ));
          }),
          (a.handleIncomingSignalingMessage = function (
            t,
            n,
            a,
            i,
            l,
            s,
            u,
            c,
          ) {
            var e = this;
            (r("WAWebODS").incr(
              "web.hybrid.bridge.voip.send.handle_incoming_signaling_message",
            ),
              o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                {
                  bridge: "voipSignaling",
                  method: "handleIncomingSignalingMessage",
                  type: "sync",
                },
                function () {
                  return e.$2.handleIncomingSignalingMessage(
                    o("WAWebSerializeVoipWapNode").serializeVoipWapNode(t),
                    n,
                    a,
                    i,
                    l,
                    s,
                    u,
                    c ? o("WABase64").encodeB64(c) : null,
                  );
                },
              ));
          }),
          (a.handleIncomingSignalingAck = function (t, n, a, i, l) {
            var e = this;
            (r("WAWebODS").incr(
              "web.hybrid.bridge.voip.send.handle_incoming_signaling_ack",
            ),
              o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                {
                  bridge: "voipSignaling",
                  method: "handleIncomingSignalingAck",
                  type: "sync",
                },
                function () {
                  return e.$2.handleIncomingSignalingAck(
                    o("WAWebSerializeVoipWapNode").serializeVoipWapNode(t),
                    n,
                    a,
                    i,
                    l ? o("WABase64").encodeB64(l) : null,
                  );
                },
              ));
          }),
          (a.handleIncomingSignalingReceipt = function (t, n, a) {
            var e = this;
            (r("WAWebODS").incr(
              "web.hybrid.bridge.voip.send.handle_incoming_signaling_receipt",
            ),
              o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                {
                  bridge: "voipSignaling",
                  method: "handleIncomingSignalingReceipt",
                  type: "sync",
                },
                function () {
                  return e.$2.handleIncomingSignalingReceipt(
                    o("WAWebSerializeVoipWapNode").serializeVoipWapNode(t),
                    n,
                    a ? o("WABase64").encodeB64(a) : null,
                  );
                },
              ));
          }),
          (a.resendOfferOnDecryptionFailure = function (t, n) {
            var e = this;
            (r("WAWebODS").incr(
              "web.hybrid.bridge.voip.send.resend_offer_on_decryption_failure",
            ),
              o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                {
                  bridge: "voipSignaling",
                  method: "resendOfferOnDecryptionFailure",
                  type: "sync",
                },
                function () {
                  return e.$2.resendOfferOnDecryptionFailure(t, n);
                },
              ));
          }),
          (a.resendEncRekeyRetry = function (t, n) {
            var e = this;
            (r("WAWebODS").incr(
              "web.hybrid.bridge.voip.send.resend_enc_rekey_retry",
            ),
              o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                {
                  bridge: "voipSignaling",
                  method: "resendEncRekeyRetry",
                  type: "sync",
                },
                function () {
                  return e.$2.resendEncRekeyRetry(t, n);
                },
              ));
          }),
          (a.notifyDeviceIdentityChangedOrDeleted = function (t, n) {
            var e = this;
            (r("WAWebODS").incr(
              "web.hybrid.bridge.voip.send.notify_device_identity_changed_or_deleted",
            ),
              o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                {
                  bridge: "voipSignaling",
                  method: "notifyDeviceIdentityChangedOrDeleted",
                  type: "sync",
                },
                function () {
                  return e.$2.notifyDeviceIdentityChangedOrDeleted(t, n);
                },
              ));
          }),
          (a.handleWebViewReady = function () {
            var e = this;
            (r("WAWebODS").incr(
              "web.hybrid.bridge.voip.send.handle_web_view_ready",
            ),
              o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                { bridge: "voip", method: "handleWebViewReady", type: "sync" },
                function () {
                  var t;
                  return (t = e.$1) == null ? void 0 : t.handleWebViewReady();
                },
              ));
          }),
          (a.voipInit = function (t, n, a) {
            var e = this;
            (r("WAWebODS").incr("web.hybrid.bridge.voip.send.voip_init"),
              o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                { bridge: "voip", method: "voipInit", type: "sync" },
                function () {
                  var r;
                  return (r = e.$1) == null ? void 0 : r.voipInit(t, n, a);
                },
              ));
          }),
          (a.setHideMyIp = function (t) {
            var e = this;
            (r("WAWebODS").incr("web.hybrid.bridge.voip.send.set_hide_my_ip"),
              o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                { bridge: "voip", method: "setHideMyIp", type: "sync" },
                function () {
                  var n;
                  return (n = e.$1) == null ? void 0 : n.setHideMyIp(t);
                },
              ));
          }),
          (a.setChatNameAndIcon = function (t, n, a) {
            var e = this;
            (r("WAWebODS").incr(
              "web.hybrid.bridge.voip.send.set_chat_name_and_icon",
            ),
              o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                { bridge: "voip", method: "setChatNameAndIcon", type: "sync" },
                function () {
                  var r;
                  return (r = e.$1) == null
                    ? void 0
                    : r.setChatNameAndIcon(t, n, a);
                },
              ));
          }),
          (a.handleSignOut = function () {
            var e = this;
            (r("WAWebODS").incr("web.hybrid.bridge.voip.send.handle_sign_out"),
              o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                { bridge: "voip", method: "handleSignOut", type: "sync" },
                function () {
                  var t;
                  return (t = e.$1) == null ? void 0 : t.handleSignOut();
                },
              ));
          }),
          (a.startCall = function (t, n, a, i, l, s, u, c, d, m, p) {
            var e = this;
            (r("WAWebODS").incr("web.hybrid.bridge.voip.send.start_call"),
              o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                { bridge: "voip", method: "startCall", type: "sync" },
                function () {
                  var r;
                  return (r = e.$1) == null
                    ? void 0
                    : r.startCall(
                        t.toString({ legacy: !0 }),
                        n,
                        a,
                        i,
                        l,
                        s,
                        u,
                        c ? o("WABase64").encodeB64(c) : null,
                        d,
                        m,
                        p,
                      );
                },
              ));
          }),
          (a.startGroupCall = function (
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
          ) {
            var e = this;
            (r("WAWebODS").incr("web.hybrid.bridge.voip.send.start_group_call"),
              o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                { bridge: "voip", method: "startGroupCall", type: "sync" },
                function () {
                  var r;
                  return (r = e.$1) == null
                    ? void 0
                    : r.startGroupCall(
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
                      );
                },
              ));
          }),
          (a.handleDeviceJidList = function (t, n) {
            var e = this;
            (r("WAWebODS").incr(
              "web.hybrid.bridge.voip.send.handle_device_jid_list",
            ),
              o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                { bridge: "voip", method: "handleDeviceJidList", type: "sync" },
                function () {
                  var r;
                  return (r = e.$1) == null
                    ? void 0
                    : r.handleDeviceJidList(t, n);
                },
              ));
          }),
          (a.previewCallLink = function (t, n, a, i, l) {
            var e = this;
            (r("WAWebODS").incr(
              "web.hybrid.bridge.voip.send.preview_call_link",
            ),
              o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                { bridge: "voip", method: "previewCallLink", type: "sync" },
                function () {
                  var r;
                  return (r = e.$1) == null
                    ? void 0
                    : r.previewCallLink(t, n, a, i, l);
                },
              ));
          }),
          (a.previewAndJoinCallLink = function (t, n, a, i, l) {
            var e = this;
            (r("WAWebODS").incr(
              "web.hybrid.bridge.voip.send.preview_and_join_call_link",
            ),
              o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                {
                  bridge: "voip",
                  method: "previewAndJoinCallLink",
                  type: "sync",
                },
                function () {
                  var r;
                  return (r = e.$1) == null
                    ? void 0
                    : r.previewAndJoinCallLink(t, n, a, i, l);
                },
              ));
          }),
          (a.endCall = function (t, n) {
            var e = this;
            (r("WAWebODS").incr("web.hybrid.bridge.voip.send.end_call"),
              o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                { bridge: "voip", method: "endCall", type: "sync" },
                function () {
                  var r;
                  return (r = e.$1) == null ? void 0 : r.endCall(t, n);
                },
              ));
          }),
          (a.rejectCallWithoutCallContext = function (t, n, a, i, l, s, u) {
            var e = this;
            (r("WAWebODS").incr(
              "web.hybrid.bridge.voip.send.reject_call_without_call_context",
            ),
              o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                {
                  bridge: "voip",
                  method: "rejectCallWithoutCallContext",
                  type: "sync",
                },
                function () {
                  var r;
                  return (r = e.$1) == null
                    ? void 0
                    : r.rejectCallWithoutCallContext(t, n, a, i, l, s, u);
                },
              ));
          }),
          (a.joinOngoingCall = function (
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
            var e = this;
            (r("WAWebODS").incr(
              "web.hybrid.bridge.voip.send.join_ongoing_call",
            ),
              o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                { bridge: "voip", method: "joinOngoingCall", type: "sync" },
                function () {
                  var r;
                  return (r = e.$1) == null
                    ? void 0
                    : r.joinOngoingCall(
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
                        C != null ? C : !1,
                      );
                },
              ));
          }),
          (a.inviteToCall = function (t, n, a) {
            var e = this;
            (r("WAWebODS").incr("web.hybrid.bridge.voip.send.invite_to_call"),
              o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                { bridge: "voip", method: "inviteToCall", type: "sync" },
                function () {
                  var r;
                  return (r = e.$1) == null ? void 0 : r.inviteToCall(t, n, a);
                },
              ));
          }),
          (a.checkOngoingCalls = function (t, n) {
            var e = this;
            (r("WAWebODS").incr(
              "web.hybrid.bridge.voip.send.check_ongoing_calls",
            ),
              o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                { bridge: "voip", method: "checkOngoingCalls", type: "sync" },
                function () {
                  var r;
                  return (r = e.$1) == null
                    ? void 0
                    : r.checkOngoingCalls(t, n);
                },
              ));
          }),
          (a.simulateNativeAnr = function (t, n) {
            var e = this;
            (r("WAWebODS").incr(
              "web.hybrid.bridge.voip.send.simulate_native_anr",
            ),
              o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                { bridge: "voip", method: "simulateNativeAnr", type: "sync" },
                function () {
                  var r;
                  return (r = e.$1) == null
                    ? void 0
                    : r.simulateNativeAnr(t, n);
                },
              ));
          }),
          (a.requestCallInfo = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = this;
              r("WAWebODS").incr("web.hybrid.bridge.voip.send.get_call_info");
              var t = yield o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                  { bridge: "voip", method: "getCallInfo", type: "sync" },
                  function () {
                    return e.$1.getCallInfo();
                  },
                ),
                n = t.callInfoJsonBase64,
                a = t.error;
              return { callInfoJsonBase64: n, error: a };
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.requestObtainDevicePermissionAsync = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this;
                r("WAWebODS").incr(
                  "web.hybrid.bridge.voip.send.request_obtain_device_permission_async",
                );
                var n = yield o(
                    "WAWebWindowsHybridBridgeTrace",
                  ).traceBridgeCall(
                    {
                      bridge: "voip",
                      method: "requestObtainDevicePermissionAsync",
                      type: "async",
                    },
                    function () {
                      return t.$1.requestObtainDevicePermissionAsync(e);
                    },
                  ),
                  a = n.error,
                  i = n.permissionGranted;
                return { error: a, permissionGranted: i };
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.requestDevicesCountAsync = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this;
                r("WAWebODS").incr(
                  "web.hybrid.bridge.voip.send.get_device_count_async",
                );
                var n = yield o(
                    "WAWebWindowsHybridBridgeTrace",
                  ).traceBridgeCall(
                    {
                      bridge: "voip",
                      method: "getDeviceCountAsync",
                      type: "async",
                    },
                    function () {
                      return t.$1.getDeviceCountAsync(e);
                    },
                  ),
                  a = n.deviceCount,
                  i = n.error;
                return { error: i, deviceCount: a };
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          t
        );
      })();
    l.VoipWinRTBridge = s;
  },
  98,
);
