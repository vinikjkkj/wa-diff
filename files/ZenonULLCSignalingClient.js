__d(
  "ZenonULLCSignalingClient",
  [
    "FBLogger",
    "JSResourceForInteraction",
    "MediaOnlySdpInfoFactory",
    "MediaOnlySdpInfoTypes",
    "Promise",
    "ULLCMessageTranslator",
    "ZenonDGWUtils",
    "ZenonDismissReason",
    "ZenonEdgerayDNSCache",
    "ZenonInfraActionsLogger",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("JSResourceForInteraction")("ZenonDGWStreamManager").__setRef(
        "ZenonULLCSignalingClient",
      ),
      u = (function () {
        function t(e, t, n, r, o) {
          var a = this;
          (o === void 0 && (o = null),
            (this.$5 = null),
            (this.$6 = function () {}),
            (this.$7 = "init"),
            (this.$8 = null),
            (this.$9 = []),
            (this.$10 = null),
            (this.$11 = null),
            (this.$12 = null),
            (this.$13 = null),
            (this.$14 = new Map()),
            (this.$1 = e),
            (this.$2 = t),
            (this.$3 = n),
            (this.$4 = o),
            t.setReceiver(function (e, t, n) {
              return a.processReceiveEvent(e, t, n);
            }));
        }
        var a = t.prototype;
        return (
          (a.initializeMediaOnlySdpInfo = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = yield o(
                  "MediaOnlySdpInfoFactory",
                ).createMediaOnlySdpInfo(e, t);
                return n == null
                  ? (r("FBLogger")("rtc_www").warn(
                      "ZenonULLCSignalingClient: Failed to create MediaOnlySdpInfo",
                    ),
                    !1)
                  : ((this.$8 = n), !0);
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.getSignalingModel = function () {
            return this.$1;
          }),
          (a.processReceiveEvent = function (t, n, o) {
            t.eventName === "remoteSdpRequest"
              ? this.$15(t, n)
              : t.eventName === "terminateRequest"
                ? this.$16(t)
                : t.eventName === "inviteRequest" &&
                  r("FBLogger")("rtc_www").warn(
                    "ZenonULLCSignalingClient: Received unexpected inviteRequest in ULLC mode",
                  );
          }),
          (a.receiveMessage = function (t) {
            var e = t.getHeader(),
              n = e.remoteSignalingID,
              r = e.roomInfo;
            (n != null &&
              this.$1.getRemoteSignalingID() !== n &&
              (this.$1.updateRemoteSignalingID(n),
              this.$6({
                conferenceName: r.name,
                name: "setRemoteSignalingID",
                remoteSignalingID: n,
              }),
              this.$1.notify()),
              this.$2.receiveMessage(t));
          }),
          (a.sendInvite = function (o, a, i) {
            return this.$7 !== "init"
              ? (r("FBLogger")("rtc_www").warn(
                  "ZenonULLCSignalingClient: sendInvite called in unexpected state: %s",
                  this.$7,
                ),
                (e || (e = n("Promise"))).resolve())
              : (this.$9.push({
                  appMessages: a != null ? a : null,
                  participants: o,
                  type: "invite",
                }),
                this.$17());
          }),
          (a.sendClientInfo = function (o, a, i, l) {
            return this.$7 !== "init"
              ? (r("FBLogger")("rtc_www").warn(
                  "ZenonULLCSignalingClient: sendClientInfo called in unexpected state: %s",
                  this.$7,
                ),
                (e || (e = n("Promise"))).resolve())
              : (this.$9.push({ type: "clientInfo", userCapabilities: o }),
                this.$17());
          }),
          (a.sendSdp = function (r, o) {
            return (e || (e = n("Promise"))).resolve();
          }),
          (a.sendIceCandidate = function (r) {
            return (e || (e = n("Promise"))).resolve();
          }),
          (a.sendMediaUpdate = function (r) {
            return (e || (e = n("Promise"))).resolve();
          }),
          (a.initiateClientRenegotiation = function (r) {
            return (e || (e = n("Promise"))).resolve();
          }),
          (a.respondToInvite = function (r) {
            return (e || (e = n("Promise"))).resolve();
          }),
          (a.sendAddParticipantsMessage = function (r, o) {
            return (e || (e = n("Promise"))).resolve();
          }),
          (a.sendAnswerIntent = function () {
            return (e || (e = n("Promise"))).resolve();
          }),
          (a.sendClientEvent = function (r) {
            return (e || (e = n("Promise"))).resolve();
          }),
          (a.sendGenericDataMessage = function (r, o, a, i) {
            return (e || (e = n("Promise"))).resolve();
          }),
          (a.sendRemoveParticipantsRequest = function (r) {
            return (e || (e = n("Promise"))).resolve();
          }),
          (a.sendUsersApprovalRequest = function (r, o) {
            return (e || (e = n("Promise"))).resolve();
          }),
          (a.sendStateSyncUnsubscribe = function (r) {
            return (e || (e = n("Promise"))).resolve();
          }),
          (a.sendStateSyncUpdate = function (r, o) {
            return (e || (e = n("Promise"))).resolve();
          }),
          (a.sendSubscriptionRequest = function (r) {
            return (e || (e = n("Promise"))).resolve();
          }),
          (a.closeTransport = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (o("ZenonDGWUtils").shouldUseDGW()) {
                var e = yield s.load();
                e.getManagerInstance().closeStream("call ended");
              }
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.sendDismiss = function (r) {
            return (
              this.$6({ name: "dismissSent" }),
              (this.$7 = "terminated"),
              (e || (e = n("Promise"))).resolve()
            );
          }),
          (a.silentlyTerminate = function () {
            return (
              (this.$7 = "terminated"),
              (e || (e = n("Promise"))).resolve()
            );
          }),
          (a.isTerminated = function () {
            return this.$7 === "terminated";
          }),
          (a.setSignalingEventHandlers = function (t) {
            if (this.$5 != null) {
              r("FBLogger")("rtc_www").mustfix(
                "setSignalingEventHandlers should only be called once, to avoid accidentally losing handlers.",
              );
              return;
            }
            this.$5 = t;
          }),
          (a.setLoggingEventHandler = function (t) {
            ((this.$6 = t), this.$2.setLoggingEventHandler(t));
          }),
          (a.setSecureDataMessageManager = function (t) {}),
          (a.getMediaOnlySdpInfo = function () {
            return this.$8;
          }),
          (a.getUllcJoinPayload = function () {
            return this.$10;
          }),
          (a.setMutatedOfferSdp = function (t) {
            this.$11 = t;
          }),
          (a.setUllcDGWTransport = function (t) {
            this.$12 = t;
          }),
          (a.setAiSessionCallingParams = function (t) {
            this.$13 = t;
          }),
          (a.addBinaryAppMessage = function (t, n) {
            this.$14.set(t, n);
          }),
          (a.$17 = function () {
            var t,
              a,
              i,
              l = !1,
              s = !1;
            for (var u of this.$9)
              u.type === "invite"
                ? (l = !0)
                : u.type === "clientInfo" && (s = !0);
            if (!l || !s) return (e || (e = n("Promise"))).resolve();
            if (this.$8 == null)
              return (
                r("FBLogger")("rtc_www").warn(
                  "ZenonULLCSignalingClient: MediaOnlySdpInfo not initialized before join request",
                ),
                (e || (e = n("Promise"))).resolve()
              );
            this.$7 = "joinRequestSent";
            var c = null,
              d = null;
            for (var m of this.$9)
              m.type === "invite"
                ? (c = m)
                : m.type === "clientInfo" && (d = m);
            if (((this.$9 = []), c == null || d == null))
              return (e || (e = n("Promise"))).resolve();
            var p = o("ULLCMessageTranslator").translateToJoinRequest(
                this.$8,
                c.appMessages,
                (t = this.$13) != null ? t : void 0,
              ),
              _ = [].concat((a = p.appMessages) != null ? a : []);
            for (var f of this.$14) {
              var g = f[0],
                h = f[1];
              _.push({ payload: h, topic: g });
            }
            return (
              (this.$10 = babelHelpers.extends({}, p, { appMessages: _ })),
              this.$12 != null
                ? this.$12
                    .sendJoinRequest(this.$10, this.$1.getSignalingID())
                    .then(function (e) {})
                : this.$18({
                    actorID: null,
                    appMessages: (i = c.appMessages) != null ? i : void 0,
                    eventName: "inviteRequest",
                    inviterID: "0",
                    isRemoteOfferer: !1,
                    otherParticipants: c.participants,
                    requestingVideo: !1,
                    roomInfo: this.$1.getRoomInfo(),
                    userID: this.$1.getUserInfo().userID,
                  })
            );
          }),
          (a.$15 = function (t, n) {
            if (this.$7 !== "joinRequestSent") {
              this.$7 === "joinResponseReceived" &&
                r("FBLogger")("rtc_www").warn(
                  "ZenonULLCSignalingClient: Ignoring duplicate join response",
                );
              return;
            }
            if (t.eventName === "remoteSdpRequest") {
              var e = o("ULLCMessageTranslator").translateJoinResponse(t);
              if (e != null && e.type === "terminateRequest") {
                (r("FBLogger")("rtc_www").warn(
                  "ZenonULLCSignalingClient: Server returned error: %s",
                  e.detailedReason,
                ),
                  this.$16({
                    eventName: "terminateRequest",
                    fromJoinResponse: !0,
                    reason:
                      o("ZenonDismissReason").ZenonDismissReason
                        .SignalingMessageFailed,
                    shouldInformPeer: !1,
                  }));
                return;
              }
            }
            ((this.$7 = "joinResponseReceived"),
              this.$8 != null &&
                t.eventName === "remoteSdpRequest" &&
                this.$19(t),
              this.$1.notify());
          }),
          (a.$19 = function (t) {
            var e,
              n,
              a,
              i,
              l,
              s = this.$8;
            if (s != null) {
              var u = (e = t.edgerayVipUpdatedIpV4) != null ? e : "",
                c = (n = t.edgerayVipUpdatedIpV6) != null ? n : "",
                d = (a = t.serverUfragUpdated) != null ? a : "";
              if (!(!u && !c && !d)) {
                var m = s.edgerayAddress,
                  p = o("MediaOnlySdpInfoTypes").isGedgeUllcVipType(m.vipType),
                  _ = (i = m.ip4Address) != null ? i : "",
                  f = (l = m.ip6Address) != null ? l : "";
                p
                  ? (!_ && u && (_ = u), !f && c && (f = c))
                  : (u && (_ = u), c && (f = c));
                var g = {
                  dnsAddress: m.dnsAddress,
                  ip4Address: _ || void 0,
                  ip6Address: f || void 0,
                  port: m.port,
                  vipType: m.vipType,
                };
                ((this.$8 = babelHelpers.extends({}, s, {
                  edgerayAddress: g,
                  serverUfrag: d || s.serverUfrag,
                })),
                  o("ZenonEdgerayDNSCache").isEnabled() &&
                    (_ || f) &&
                    o("ZenonEdgerayDNSCache").updateFromServerResponse(
                      m.dnsAddress,
                      _,
                      f,
                      m.vipType,
                    ),
                  r(
                    "ZenonInfraActionsLogger",
                  ).logCheckpointEmployeesTestUsersOnly({
                    callType: "mw",
                    checkpoint:
                      "[ULLC DNS] Server edgeray update applied. hasIp4=" +
                      String(_ !== "") +
                      ", hasIp6=" +
                      String(f !== "") +
                      ", gedge=" +
                      String(p),
                  }));
              }
            }
          }),
          (a.$16 = function (t) {
            if (
              this.$7 !== "terminated" &&
              ((this.$7 = "terminated"),
              t.eventName === "terminateRequest" &&
                this.$5 &&
                this.$5.onDismissReceived)
            ) {
              var e;
              this.$5.onDismissReceived(
                this.$1.getSignalingID(),
                t.reason,
                (e = t.subreason) != null ? e : null,
                t.detailedReasonFromMW,
              );
            }
          }),
          (a.$18 = function (r) {
            var t = this;
            return new (e || (e = n("Promise")))(function (e, n) {
              return t.$3.sendEvent(r, e, n);
            });
          }),
          t
        );
      })();
    l.default = u;
  },
  98,
);
