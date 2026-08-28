__d(
  "ZenonPeerConnectionWrapper",
  [
    "FBLogger",
    "FrameEncryptionWasmTypes",
    "Promise",
    "ZenonAuditedCheckpointLogId",
    "ZenonCodecPreferencesUtils",
    "ZenonDataChannelWrapper",
    "ZenonE2ee",
    "ZenonEventListenerCache",
    "ZenonInfraActionsLogger",
    "ZenonPeerConnectionHelper",
    "ZenonSDP",
    "ZenonSimulcastSdpUtils",
    "ZenonSimulcastUtils",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t(e, t, n, a) {
          var i = this;
          (n === void 0 && (n = {}),
            a === void 0 && (a = !1),
            (this.$4 = new (r("ZenonEventListenerCache"))()),
            (this.$9 = !1),
            (this.$10 = !1),
            (this.$15 = function (e) {
              var t = e.channel,
                n = i.$6.get(t.label);
              i.$5.set(t.label, new (r("ZenonDataChannelWrapper"))(t, i.$7, n));
            }),
            (this.$2 = e),
            (this.$3 = n),
            (this.$1 = o("ZenonPeerConnectionHelper").createPeerConnection(
              e,
              n,
            )),
            (this.$5 = new Map()),
            (this.$6 = new Map()),
            (this.$7 = t),
            (this.$8 = a),
            a && (this.$9 = !0),
            (this.$11 = new Map()),
            (this.$12 = new Map()),
            (this.$13 = new Map()),
            this.addEventListener("datachannel", this.$15));
        }
        var a = t.prototype;
        return (
          (a.createOffer = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                e === void 0 && (e = {});
                var t = yield this.$16(e);
                if (this.$9) {
                  if (t.sdp != null)
                    try {
                      t.sdp = o(
                        "ZenonSimulcastSdpUtils",
                      ).addSimulcastToChromeOffer(
                        t.sdp,
                        o("ZenonSimulcastUtils").getNumLayers(),
                      );
                    } catch (e) {
                      r("ZenonInfraActionsLogger").logError({
                        auditId: r("ZenonAuditedCheckpointLogId")
                          .RP_ROOMS_INFRA_WWW__ERROR,
                        error: r("getErrorSafe")(e).toString(),
                        errorDomain:
                          "ZenonPeerConnectionWrapper_createOffer_addSimulcastToChromeOffer",
                      });
                    }
                  this.$9 = !1;
                }
                return new (o("ZenonSDP").ZenonLocalSDP)(t);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.rollbackSdp = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              try {
                yield this.$1.setLocalDescription({ type: "rollback" });
              } catch (t) {
                var e = r("getErrorSafe")(t);
                throw (
                  r("ZenonInfraActionsLogger").logError({
                    auditId: r("ZenonAuditedCheckpointLogId")
                      .RP_ROOMS_INFRA_WWW__ERROR,
                    error: e.toString(),
                    errorDomain: "ZenonPeerConnectionWrapper_rollbackSDP",
                  }),
                  e
                );
              }
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.setLocalDescription = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                this.$17(e.getMedia(), this.$11);
                var t = e.toDescInit();
                try {
                  this.getSignalingState() !== "closed" &&
                    (yield this.$1.setLocalDescription(t));
                } catch (e) {
                  var n = r("getErrorSafe")(e);
                  throw (
                    r("FBLogger")("rtc_www")
                      .catching(n)
                      .mustfix(
                        "Error processing modern API setLocalDescription in ZenonPeerConnectionWrapper.",
                      ),
                    n
                  );
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.createAnswer = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = yield this.$1.createAnswer(),
                t = new (o("ZenonSDP").ZenonLocalSDP)(e);
              return ((this.$14 = t.getSSLRole()), t);
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.setRemoteDescription = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                if (
                  (this.$17(e.getMedia(), this.$12), e.getType() === "answer")
                ) {
                  var t = e.getSSLRole();
                  if (t != null && this.$14 == null)
                    this.$14 = this.getOppositeSSLRole(t);
                  else if (t == null && this.$14 != null) {
                    var n = this.getOppositeSSLRole(this.$14);
                    e.setSSLRole(n);
                  }
                }
                var a = e.toDescInit();
                (this.$18(a),
                  r("ZenonE2ee").terminateCallIfE2eeViolation(
                    o("FrameEncryptionWasmTypes").ZenonE2eeComponent
                      .PRE_REMOTE_SDP,
                    "",
                  ));
                try {
                  if (this.getSignalingState() !== "closed")
                    yield this.$1.setRemoteDescription(a);
                  else
                    throw r("err")(
                      "Cannot set remote description: peer connection is already closed",
                    );
                } catch (e) {
                  var i = r("getErrorSafe")(e);
                  throw (
                    r("FBLogger")("rtc_www")
                      .catching(i)
                      .mustfix(
                        "Error processing modern API setRemoteDescription in ZenonPeerConnectionWrapper.",
                      ),
                    i
                  );
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.setRemoteIceCandidate = function (o) {
            return this.$1.remoteDescription === null
              ? (r("FBLogger")("rtc_www").mustfix(
                  "Remote ICE candidate should not be applied before remote description",
                ),
                (e || (e = n("Promise"))).resolve())
              : this.$1.addIceCandidate(o);
          }),
          (a.close = function () {
            (this.$5.forEach(function (e) {
              return e.close();
            }),
              this.$5.clear(),
              o("ZenonPeerConnectionHelper").closePeerConnection(this.$1));
          }),
          (a.restart = function () {
            ((this.$1 = o("ZenonPeerConnectionHelper").createPeerConnection(
              this.$2,
              this.$3,
            )),
              this.addCachedEventListenersToPeerConnection());
          }),
          (a.addEventListener = function (t, n) {
            (this.$4.add(t, n), this.$1.addEventListener(t, n));
          }),
          (a.createDataChannel = function (t, n, o, a, i) {
            var e = function () {},
              l = { onClosing: e, onMessage: n, onOpen: o },
              s = this.$5.get(t);
            if (s == null)
              if (a) {
                var u = this.$1.createDataChannel(t, this.$19(i));
                u == null
                  ? r("FBLogger")("rtc_www").mustfix(
                      "Unable to create requested data channel: %s",
                      t,
                    )
                  : ((u.binaryType = "arraybuffer"),
                    this.$5.set(
                      t,
                      new (r("ZenonDataChannelWrapper"))(u, this.$7, l),
                    ));
              } else this.$6.set(t, l);
            else s.setListeners(l);
          }),
          (a.getDataChannelState = function (t) {
            var e = this.$5.get(t);
            return e == null ? void 0 : e.getState();
          }),
          (a.sendDataMessage = function (t, n) {
            var e = this.$5.get(t);
            e != null
              ? e.send(n)
              : r("FBLogger")("rtc_www").mustfix(
                  "Unable to send a message on data channel: %s",
                  t,
                );
          }),
          (a.getCnameFromTrackId = function (t) {
            var e;
            return (e = this.$13.get(t)) != null ? e : null;
          }),
          (a.getAllEventListeners = function () {
            return this.$4.getAll();
          }),
          (a.getEventListenersForType = function (t) {
            var e;
            return (e = this.$4.getByType(t)) != null ? e : [];
          }),
          (a.canAcceptRemoteSdp = function () {
            return (
              this.$1.iceConnectionState !== "closed" &&
              this.$1.signalingState !== "closed"
            );
          }),
          (a.removeEventListener = function (t, n) {
            (this.$4.delete(t, n), this.$1.removeEventListener(t, n));
          }),
          (a.removeAllEventListeners = function () {
            var e = this;
            this.$4.forEachEventListener(function (t, n) {
              (e.$1.removeEventListener(t), e.$4.delete(t, n));
            });
          }),
          (a.addCachedEventListenersToPeerConnection = function () {
            var e = this;
            this.$4.forEachEventListener(function (t, n) {
              e.$1.addEventListener(t, n);
            });
          }),
          (a.addTrack = function (t, n) {
            return n == null ? this.$1.addTrack(t) : this.$1.addTrack(t, n);
          }),
          (a.addTransceiver = function (t, n) {
            return this.$1.addTransceiver(t, n);
          }),
          (a.getTransceivers = function () {
            return typeof this.$1.getTransceivers == "function"
              ? this.$1.getTransceivers()
              : [];
          }),
          (a.getTransceiverFromSender = function (t) {
            return this.getTransceivers().find(function (e) {
              return e.sender === t;
            });
          }),
          (a.getReceivers = function () {
            return typeof this.$1.getReceivers == "function"
              ? this.$1.getReceivers()
              : [];
          }),
          (a.getSenders = function () {
            return typeof this.$1.getSenders == "function"
              ? this.$1.getSenders()
              : [];
          }),
          (a.getStats = function (t) {
            return this.$1.getStats(t);
          }),
          (a.getSignalingState = function () {
            return this.$1.signalingState;
          }),
          (a.removeTrack = function (t) {
            var e = !1;
            for (var n of this.$1.getSenders())
              n.track === t && (this.$1.removeTrack(n), (e = !0));
            e ||
              r("ZenonInfraActionsLogger").logCheckpoint({
                auditId: r("ZenonAuditedCheckpointLogId")
                  .RP_ROOMS_INFRA_WWW__STATE_MACHINE,
                checkpoint:
                  "ZenonPeerConnectionWrapper.removeTrack: Could not find sender for track " +
                  t.id,
              });
          }),
          (a.supportsSimulcast = function () {
            return this.$8;
          }),
          (a.getSimulcastInitialized = function () {
            return this.$10;
          }),
          (a.setSimulcastInitialized = function (t) {
            this.$10 = t;
          }),
          (a.$16 = function (r) {
            return (e || (e = n("Promise"))).resolve(this.$1.createOffer(r));
          }),
          (a.$17 = function (t, n) {
            var e = this;
            t.forEach(function (t) {
              if (t.type !== "application") {
                var r = t.msid,
                  o = e.getTrackIdFromMsid(r);
                o != null && t.mid != null && n.set(String(t.mid), o);
              }
            });
          }),
          (a.$19 = function (t) {
            return (t === void 0 && (t = {}), (t.negotiated = !1), t);
          }),
          (a.$18 = function (t) {
            var e = this,
              n = t.sdp,
              r = t.type,
              a = new (o("ZenonSDP").ZenonRemoteSDP)({
                sdp: n,
                type: r,
              }).getTrackIdAndCnameMap();
            a.forEach(function (t, n) {
              e.$13.set(n, t);
            });
          }),
          (a.getTrackIdFromMsid = function (t) {
            if (t != null) {
              var e = t.split(" ");
              if (e.length >= 2) return e[1];
              r("FBLogger")("rtc_www").warn(
                "MSID did not have an eligible ID for caching",
              );
            }
            return null;
          }),
          (a.getLocalMWTrackId = function (t) {
            var e;
            return t !== null && (e = this.$11.get(t)) != null ? e : null;
          }),
          (a.getRemoteMWTrackId = function (t) {
            var e;
            return t !== null && (e = this.$12.get(t)) != null ? e : null;
          }),
          (a.getCurrentRemoteDescription = function () {
            return this.$1.currentRemoteDescription != null
              ? new (o("ZenonSDP").ZenonRemoteSDP)({
                  sdp: this.$1.currentRemoteDescription.sdp,
                  type: this.$1.currentRemoteDescription.type,
                })
              : null;
          }),
          (a.getOppositeSSLRole = function (t) {
            return t === "active" ? "passive" : "active";
          }),
          (a.setVideoCodecPreferences = function (t) {
            var e = this.getTransceivers();
            return o("ZenonCodecPreferencesUtils").applyVideoCodecPreferences(
              e,
              t,
            );
          }),
          (a.applyFilteredVideoCodecPreferences = function (t) {
            var e = this.getTransceivers();
            return o(
              "ZenonCodecPreferencesUtils",
            ).applyFilteredVideoCodecPreferences(e, t);
          }),
          (a.getDataChannel_TESTONLY = function (t) {
            return this.$5.get(t);
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
