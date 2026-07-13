__d(
  "WAWebWindowsHybridBridgeVoip.v2586",
  [
    "WABase64",
    "WAWebBackendApi",
    "WAWebSerializeVoipWapNode",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e, t) {
        var n = this;
        ((this.handleVoipReady = function () {
          var e;
          (o("WAWebBackendApi").frontendFireAndForget(
            "addStartingLogoutListener",
            function () {
              return n.handleSignOut();
            },
          ),
            (e = n.$3) == null || e.onVoipReady());
        }),
          (this.sendSignalingXmpp = function (e) {
            var t,
              r = e.peerJid,
              o = e.callId,
              a = e.payload,
              i = e.shouldEncryptBeforeSending;
            (t = n.$3) == null || t.onSignalingXmpp(r, o, a, i);
          }),
          (this.handleCallEvent = function (e) {
            var t,
              r = e.eventType,
              o = e.userData,
              a = e.eventDataJson;
            (t = n.$3) == null || t.onCallEvent(r, o, a);
          }),
          (this.requestOpenChat = function (e) {
            var t;
            (t = n.$3) == null || t.onRequestOpenChat(e);
          }),
          (this.requestDeviceJidList = function (e) {
            var t;
            (t = n.$3) == null ||
              t.onRequestDeviceJidList(e).then(function (t) {
                var r;
                (r = n.$1) == null || r.handleDeviceJidList(e.toString(), t);
              });
          }),
          (this.requestPhoneNumberJid = function (e) {
            var t;
            (t = n.$3) == null ||
              t.onRequestPhoneNumberJid == null ||
              t.onRequestPhoneNumberJid(e).then(function (t) {
                var r;
                (r = n.$1) == null || r.handlePhoneNumberJid(e.toString(), t);
              });
          }),
          (this.requestLidJid = function (e) {
            var t;
            (t = n.$3) == null ||
              t.onRequestLidJid == null ||
              t.onRequestLidJid(e).then(function (t) {
                var r;
                (r = n.$1) == null || r.handleLidJid(e.toString(), t);
              });
          }),
          (this.callAgain = function (e) {
            var t,
              r = e.peerJid,
              o = e.isVideoCall;
            (t = n.$3) == null || t.onCallAgain(r, o);
          }),
          (this.handleLidCallerDisplayInfo = function (e) {
            var t;
            (t = n.$3) == null || t.onLidCallerDisplayInfo(e);
          }),
          (this.$1 = e),
          (this.$2 = t),
          this.$1.addEventListener(
            "handleVoipReadyEvent",
            this.handleVoipReady,
          ),
          this.$1.addEventListener("handleVoipCallEvent", this.handleCallEvent),
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
          this.$1.subscribe(null));
      }
      var t = e.prototype;
      return (
        (t.setHandlers = function (t) {
          this.$3 = t;
        }),
        (t.cleanup = function () {
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
            this.$1.removeEventListener("handleCallAgainEvent", this.callAgain),
            this.$1.removeEventListener(
              "handleLidCallerDisplayInfo",
              this.handleLidCallerDisplayInfo,
            ));
        }),
        (t.handleIncomingSignalingOffer = function (
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
        ) {
          this.$2.handleIncomingSignalingOffer(
            o("WAWebSerializeVoipWapNode").serializeVoipWapNode(t),
            n,
            r,
            a,
            i,
            l,
            s,
            u,
            c ? o("WABase64").encodeB64(c) : null,
          );
        }),
        (t.handleIncomingSignalingMessage = function (t, n, r, a, i, l, s, u) {
          this.$2.handleIncomingSignalingMessage(
            o("WAWebSerializeVoipWapNode").serializeVoipWapNode(t),
            n,
            r,
            a,
            i,
            l,
            s,
            u ? o("WABase64").encodeB64(u) : null,
          );
        }),
        (t.handleIncomingSignalingAck = function (t) {
          var e = t.ackInfoError,
            n = t.ackInfoType,
            r = t.peerJid,
            a = t.tcToken,
            i = t.xmlNode;
          this.$2.handleIncomingSignalingAck(
            o("WAWebSerializeVoipWapNode").serializeVoipWapNode(i),
            e,
            n,
            r,
            a ? o("WABase64").encodeB64(a) : null,
          );
        }),
        (t.handleIncomingSignalingReceipt = function (t, n, r) {
          this.$2.handleIncomingSignalingReceipt(
            o("WAWebSerializeVoipWapNode").serializeVoipWapNode(t),
            n,
            r ? o("WABase64").encodeB64(r) : null,
          );
        }),
        (t.resendOfferOnDecryptionFailure = function (t, n) {
          this.$2.resendOfferOnDecryptionFailure(t, n);
        }),
        (t.resendEncRekeyRetry = function (t, n) {
          this.$2.resendEncRekeyRetry(t, n);
        }),
        (t.notifyDeviceIdentityChangedOrDeleted = function (t, n) {
          this.$2.notifyDeviceIdentityChangedOrDeleted(t, n);
        }),
        (t.handleWebViewReady = function () {
          var e;
          (e = this.$1) == null || e.handleWebViewReady();
        }),
        (t.voipInit = function (t, n) {
          var e,
            r = n != null ? n : "",
            o = r.replace(/:\d+@/, "@");
          (e = this.$1) == null || e.voipInit(r, o, t);
        }),
        (t.setHideMyIp = function (t) {
          var e;
          (e = this.$1) == null || e.setHideMyIp(t);
        }),
        (t.setChatNameAndIcon = function (t, n, r) {
          var e;
          (e = this.$1) == null || e.setChatNameAndIcon(t, n, r);
        }),
        (t.handleSignOut = function () {
          var e;
          (e = this.$1) == null || e.handleSignOut();
        }),
        (t.startCall = function (t, n, r, a, i, l, s, u, c, d, m) {
          var e;
          (e = this.$1) == null ||
            e.startCall(
              t.toString({ legacy: !0 }),
              n,
              r,
              a,
              i,
              l,
              s,
              u ? o("WABase64").encodeB64(u) : null,
              c,
              d,
              m,
            );
        }),
        (t.startGroupCall = function (
          t,
          n,
          r,
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
        ) {
          var e;
          (e = this.$1) == null ||
            e.startGroupCall(t, n, r, o, a, i, l, s, u, c, d, m, p, _);
        }),
        (t.handleDeviceJidList = function (t, n) {
          var e;
          (e = this.$1) == null || e.handleDeviceJidList(t, n);
        }),
        (t.previewCallLink = function (t, n, r, o, a) {
          var e;
          (e = this.$1) == null || e.previewCallLink(t, n, r, o, a);
        }),
        (t.previewAndJoinCallLink = function (t, n, r, o, a) {
          var e;
          (e = this.$1) == null || e.previewAndJoinCallLink(t, n, r, o, a);
        }),
        (t.endCall = function (t, n) {
          var e;
          (e = this.$1) == null || e.endCall(t, n);
        }),
        (t.rejectCallWithoutCallContext = function (t, n, r, o, a, i, l) {
          var e;
          (e = this.$1) == null ||
            e.rejectCallWithoutCallContext(t, n, r, o, a, i, l);
        }),
        (t.joinOngoingCall = function (
          t,
          n,
          r,
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
        ) {
          var e;
          (e = this.$1) == null ||
            e.joinOngoingCall(t, n, r, o, a, i, l, s, u, c, d, m, p, _, f, g);
        }),
        (t.inviteToCall = function (t, n, r) {
          var e;
          (e = this.$1) == null || e.inviteToCall(t, n, r);
        }),
        (t.checkOngoingCalls = function (t, n) {}),
        (t.simulateNativeAnr = function (t, n) {
          var e;
          (e = this.$1) == null || e.simulateNativeAnr(t, n);
        }),
        (t.requestCallInfo = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
        (t.requestObtainDevicePermissionAsync = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = yield this.$1.requestObtainDevicePermissionAsync(e),
              n = t.error,
              r = t.permissionGranted;
            return { error: n, permissionGranted: r };
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.requestDevicesCountAsync = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = yield this.$1.getDeviceCountAsync(e),
              n = t.error,
              r = t.deviceCount;
            return { error: n, deviceCount: r };
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        e
      );
    })();
    l.VoipWinRTBridge_v2586 = e;
  },
  98,
);
