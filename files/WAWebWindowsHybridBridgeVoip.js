__d(
  "WAWebWindowsHybridBridgeVoip",
  [
    "WABase64",
    "WALogger",
    "WAWebBackendApi",
    "WAWebODS",
    "WAWebSerializeVoipWapNode",
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
                  var n;
                  (r("WAWebODS").incr(
                    "web.hybrid.bridge.voip.send.handle_device_jid_list",
                  ),
                    (n = a.$1) == null ||
                      n.handleDeviceJidList(e.toString(), t));
                });
            }),
            (this.requestPhoneNumberJid = function (e) {
              var t;
              (t = a.$3) == null ||
                t.onRequestPhoneNumberJid == null ||
                t.onRequestPhoneNumberJid(e).then(function (t) {
                  var n;
                  (r("WAWebODS").incr(
                    "web.hybrid.bridge.voip.send.handle_phone_number_jid",
                  ),
                    (n = a.$1) == null ||
                      n.handlePhoneNumberJid(e.toString(), t));
                });
            }),
            (this.requestLidJid = function (e) {
              var t;
              (t = a.$3) == null ||
                t.onRequestLidJid == null ||
                t.onRequestLidJid(e).then(function (t) {
                  var n;
                  (r("WAWebODS").incr(
                    "web.hybrid.bridge.voip.send.handle_lid_jid",
                  ),
                    (n = a.$1) == null || n.handleLidJid(e.toString(), t));
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
            (r("WAWebODS").incr(
              "web.hybrid.bridge.voip.send.handle_incoming_signaling_offer",
            ),
              this.$2.handleIncomingSignalingOffer(
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
            (r("WAWebODS").incr(
              "web.hybrid.bridge.voip.send.handle_incoming_signaling_message",
            ),
              this.$2.handleIncomingSignalingMessage(
                o("WAWebSerializeVoipWapNode").serializeVoipWapNode(t),
                n,
                a,
                i,
                l,
                s,
                u,
                c ? o("WABase64").encodeB64(c) : null,
              ));
          }),
          (a.handleIncomingSignalingAck = function (t, n, a, i, l) {
            (r("WAWebODS").incr(
              "web.hybrid.bridge.voip.send.handle_incoming_signaling_ack",
            ),
              this.$2.handleIncomingSignalingAck(
                o("WAWebSerializeVoipWapNode").serializeVoipWapNode(t),
                n,
                a,
                i,
                l ? o("WABase64").encodeB64(l) : null,
              ));
          }),
          (a.handleIncomingSignalingReceipt = function (t, n, a) {
            (r("WAWebODS").incr(
              "web.hybrid.bridge.voip.send.handle_incoming_signaling_receipt",
            ),
              this.$2.handleIncomingSignalingReceipt(
                o("WAWebSerializeVoipWapNode").serializeVoipWapNode(t),
                n,
                a ? o("WABase64").encodeB64(a) : null,
              ));
          }),
          (a.resendOfferOnDecryptionFailure = function (t, n) {
            (r("WAWebODS").incr(
              "web.hybrid.bridge.voip.send.resend_offer_on_decryption_failure",
            ),
              this.$2.resendOfferOnDecryptionFailure(t, n));
          }),
          (a.resendEncRekeyRetry = function (t, n) {
            (r("WAWebODS").incr(
              "web.hybrid.bridge.voip.send.resend_enc_rekey_retry",
            ),
              this.$2.resendEncRekeyRetry(t, n));
          }),
          (a.notifyDeviceIdentityChangedOrDeleted = function (t, n) {
            (r("WAWebODS").incr(
              "web.hybrid.bridge.voip.send.notify_device_identity_changed_or_deleted",
            ),
              this.$2.notifyDeviceIdentityChangedOrDeleted(t, n));
          }),
          (a.handleWebViewReady = function () {
            var e;
            (r("WAWebODS").incr(
              "web.hybrid.bridge.voip.send.handle_web_view_ready",
            ),
              (e = this.$1) == null || e.handleWebViewReady());
          }),
          (a.voipInit = function (t, n, o) {
            var e;
            (r("WAWebODS").incr("web.hybrid.bridge.voip.send.voip_init"),
              (e = this.$1) == null || e.voipInit(t, n, o));
          }),
          (a.setHideMyIp = function (t) {
            var e;
            (r("WAWebODS").incr("web.hybrid.bridge.voip.send.set_hide_my_ip"),
              (e = this.$1) == null || e.setHideMyIp(t));
          }),
          (a.setChatNameAndIcon = function (t, n, o) {
            var e;
            (r("WAWebODS").incr(
              "web.hybrid.bridge.voip.send.set_chat_name_and_icon",
            ),
              (e = this.$1) == null || e.setChatNameAndIcon(t, n, o));
          }),
          (a.handleSignOut = function () {
            var e;
            (r("WAWebODS").incr("web.hybrid.bridge.voip.send.handle_sign_out"),
              (e = this.$1) == null || e.handleSignOut());
          }),
          (a.startCall = function (t, n, a, i, l, s, u, c, d, m, p) {
            var e;
            (r("WAWebODS").incr("web.hybrid.bridge.voip.send.start_call"),
              (e = this.$1) == null ||
                e.startCall(
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
                ));
          }),
          (a.startGroupCall = function (
            t,
            n,
            o,
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
          ) {
            var e;
            (r("WAWebODS").incr("web.hybrid.bridge.voip.send.start_group_call"),
              (e = this.$1) == null ||
                e.startGroupCall(t, n, o, a, i, l, s, u, c, d, m, p, _, f));
          }),
          (a.handleDeviceJidList = function (t, n) {
            var e;
            (r("WAWebODS").incr(
              "web.hybrid.bridge.voip.send.handle_device_jid_list",
            ),
              (e = this.$1) == null || e.handleDeviceJidList(t, n));
          }),
          (a.previewCallLink = function (t, n, o, a, i) {
            var e;
            (r("WAWebODS").incr(
              "web.hybrid.bridge.voip.send.preview_call_link",
            ),
              (e = this.$1) == null || e.previewCallLink(t, n, o, a, i));
          }),
          (a.previewAndJoinCallLink = function (t, n, o, a, i) {
            var e;
            (r("WAWebODS").incr(
              "web.hybrid.bridge.voip.send.preview_and_join_call_link",
            ),
              (e = this.$1) == null || e.previewAndJoinCallLink(t, n, o, a, i));
          }),
          (a.endCall = function (t, n) {
            var e;
            (r("WAWebODS").incr("web.hybrid.bridge.voip.send.end_call"),
              (e = this.$1) == null || e.endCall(t, n));
          }),
          (a.rejectCallWithoutCallContext = function (t, n, o, a, i, l, s) {
            var e;
            (r("WAWebODS").incr(
              "web.hybrid.bridge.voip.send.reject_call_without_call_context",
            ),
              (e = this.$1) == null ||
                e.rejectCallWithoutCallContext(t, n, o, a, i, l, s));
          }),
          (a.joinOngoingCall = function (
            t,
            n,
            o,
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
            var e;
            (r("WAWebODS").incr(
              "web.hybrid.bridge.voip.send.join_ongoing_call",
            ),
              (e = this.$1) == null ||
                e.joinOngoingCall(
                  t,
                  n,
                  o,
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
                  y != null ? y : !1,
                ));
          }),
          (a.inviteToCall = function (t, n, o) {
            var e;
            (r("WAWebODS").incr("web.hybrid.bridge.voip.send.invite_to_call"),
              (e = this.$1) == null || e.inviteToCall(t, n, o));
          }),
          (a.checkOngoingCalls = function (t, n) {
            var e;
            (r("WAWebODS").incr(
              "web.hybrid.bridge.voip.send.check_ongoing_calls",
            ),
              (e = this.$1) == null || e.checkOngoingCalls(t, n));
          }),
          (a.simulateNativeAnr = function (t, n) {
            var e;
            (r("WAWebODS").incr(
              "web.hybrid.bridge.voip.send.simulate_native_anr",
            ),
              (e = this.$1) == null || e.simulateNativeAnr(t, n));
          }),
          (a.requestCallInfo = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              r("WAWebODS").incr("web.hybrid.bridge.voip.send.get_call_info");
              var e = yield this.$1.getCallInfo(),
                t = e.callInfoJsonBase64,
                n = e.error;
              return { callInfoJsonBase64: t, error: n };
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.requestObtainDevicePermissionAsync = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                r("WAWebODS").incr(
                  "web.hybrid.bridge.voip.send.request_obtain_device_permission_async",
                );
                var t = yield this.$1.requestObtainDevicePermissionAsync(e),
                  n = t.error,
                  o = t.permissionGranted;
                return { error: n, permissionGranted: o };
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
                r("WAWebODS").incr(
                  "web.hybrid.bridge.voip.send.get_device_count_async",
                );
                var t = yield this.$1.getDeviceCountAsync(e),
                  n = t.deviceCount,
                  o = t.error;
                return { error: o, deviceCount: n };
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
