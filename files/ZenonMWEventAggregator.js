__d(
  "ZenonMWEventAggregator",
  [
    "ZenonSignalingMessage",
    "ZenonSignalingTypes",
    "promiseDone",
    "randomInt",
    "throttle",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 250,
      s = 100,
      u = (function () {
        function t(t, n) {
          var o = this;
          ((this.$3 = {}),
            (this.$4 = new Set()),
            (this.$5 = {}),
            (this.$6 = {}),
            (this.$7 = 0),
            (this.$8 = !1),
            (this.$1 = t),
            (this.$2 = n),
            (this.$9 = r("throttle")(
              function (e, t) {
                o.$10(e, t);
              },
              e,
              this,
            )));
        }
        var n = t.prototype;
        return (
          (n.sendEvent = function (t, n, r) {
            var e,
              a = [];
            switch (t.eventName) {
              case "clientInfoRequest":
                ((this.$3.clientInfoRequest = t), (a = this.$11()));
                break;
              case "inviteRequest":
                ((this.$3.inviteRequest = t), (a = this.$11()));
                break;
              case "localSdpRequest":
                t.sdp.type === "offer"
                  ? this.$8
                    ? (a = [t])
                    : ((this.$3.localSdpRequest = t),
                      (this.$8 = !0),
                      (a = this.$11()))
                  : t.sdp.type === "answer" &&
                    (this.$8
                      ? this.$6.initiateRenegotiationResponse != null
                        ? ((this.$6.localSdpRequest = t), (a = this.$12()))
                        : ((this.$5.localSdpRequest = t), (a = this.$13()))
                      : ((this.$3.localSdpRequest = t),
                        (this.$8 = !0),
                        (a = this.$11())));
                break;
              case "remoteSdpResponse":
                t.type === "offer"
                  ? t.statusCode ===
                    o("ZenonSignalingTypes").ZenonSignalingStatusCode.OK
                    ? this.$6.initiateRenegotiationResponse != null
                      ? ((this.$6.remoteSdpResponse = t), (a = this.$12()))
                      : ((this.$5.remoteSdpResponse = t), (a = this.$13()))
                    : ((this.$5 = {}), (this.$6 = {}), (a = [t]))
                  : (a = [t]);
                break;
              case "iceCandidateRequest":
              case "pingRequest":
                this.$1.getMediaModeManager().getMediaMode() === "p2p" &&
                  (a = [t]);
                break;
              case "subscriptionRequest":
                this.$9([t], t);
                break;
              case "initiateRenegotiationResponse":
                t.hasRemoteOffer === !0
                  ? ((this.$6.initiateRenegotiationResponse = t),
                    (a = this.$12()))
                  : (a = [t]);
                break;
              case "stateSyncNotifyResponse":
                if (!this.$4.has(t.ackMessageId)) {
                  if ((this.$4.add(t.ackMessageId), this.$4.size > s)) {
                    var i,
                      l = (i = this.$4.values().next().value) != null ? i : "";
                    this.$4.delete(l);
                  }
                  a = [t];
                }
                break;
              case "wakeupRequest":
                var u = {
                  ackMessageId: (e = t.ackMessageId) != null ? e : "",
                  eventName: "wakeupResponse",
                };
                return this.$10([u], u, n, r);
              case "usersApprovalRequest":
              case "iceCandidateResponse":
              case "addParticipantsRequest":
              case "dismissResponse":
              case "genericDataMessageRequest":
              case "genericDataMessageResponse":
              case "inviteResponse":
              case "mediaUpdateRequest":
              case "mediaUpdateResponse":
              case "overlayConfigServerUpdateRequest":
              case "participantUpdateResponse":
              case "removeParticipantsRequest":
              case "stateSyncUnsubscribeRequest":
              case "stateSyncUpdateRequest":
              case "terminateRequest":
              case "clientEventRequest":
              case "wakeupResponse":
                a = [t];
                break;
            }
            return this.$10(a, t, n, r);
          }),
          (n.$14 = function (t, n) {
            return {
              actorID: this.$1.getActorID(),
              messageID:
                t != null ? t : String(r("randomInt")(0, 4294967294) + 1),
              messageTags: n != null ? n : [],
              protocol: this.$1.getProtocol(),
              remoteInfo: this.$1.getRemoteInfo(),
              remoteSignalingID: this.$1.getRemoteSignalingID(),
              retryCount: 0,
              roomInfo: this.$1.getRoomInfo(),
              sequenceNumber: this.$7++,
              signalingID: this.$1.getSignalingID(),
              userInfo: this.$1.getUserInfo(),
            };
          }),
          (n.$11 = function () {
            var e = this.$3,
              t = e.clientInfoRequest,
              n = e.inviteRequest,
              r = e.localSdpRequest;
            return t != null && r != null
              ? ((this.$3 = {}), n != null ? [n, t, r] : [t, r])
              : [];
          }),
          (n.$13 = function () {
            var e = this.$5,
              t = e.localSdpRequest,
              n = e.remoteSdpResponse;
            return n && t ? ((this.$5 = {}), [n, t]) : [];
          }),
          (n.$12 = function () {
            var e = this.$6,
              t = e.initiateRenegotiationResponse,
              n = e.localSdpRequest,
              r = e.remoteSdpResponse;
            return t && r && n ? ((this.$6 = {}), [t, r, n]) : [];
          }),
          (n.$10 = function (t, n, o, a) {
            if (t.length > 0) {
              var e,
                i,
                l,
                s,
                u =
                  (e = n.ackMessageId) != null
                    ? e
                    : (i = t.find(function (e) {
                          return e.ackMessageId;
                        })) == null
                      ? void 0
                      : i.ackMessageId,
                c =
                  (l = n.messageTags) != null
                    ? l
                    : (s = t.find(function (e) {
                          return e.messageTags;
                        })) == null
                      ? void 0
                      : s.messageTags,
                d = this.$14(u, c),
                m = new (r("ZenonSignalingMessage"))(d, t);
              return (
                r("promiseDone")(this.$2.sendMessage(m), o, a),
                d.messageID
              );
            }
            return (o == null || o(), "");
          }),
          t
        );
      })();
    l.default = u;
  },
  98,
);
