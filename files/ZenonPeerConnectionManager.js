__d(
  "ZenonPeerConnectionManager",
  [
    "DateConsts",
    "FBLogger",
    "ODS",
    "Promise",
    "ZenonAuditedCheckpointLogId",
    "ZenonBrowsers",
    "ZenonClientTslogUploader",
    "ZenonIceConnectionMonitor",
    "ZenonInfraActionsLogger",
    "ZenonLogPromiseRejection",
    "ZenonMediaActionLogger",
    "ZenonMediaChannelManager",
    "ZenonMediaError",
    "ZenonMediaStatsUtil",
    "ZenonPeerConnectionConfig",
    "ZenonPeerConnectionStateMachine",
    "ZenonPeerConnectionWrapper",
    "ZenonSDPManager",
    "ZenonSimulcastDataMessageParser",
    "ZenonSimulcastManager",
    "ZenonSimulcastUtils",
    "emptyFunction",
    "getErrorSafe",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 2 * o("DateConsts").MS_PER_SEC,
      c = 6,
      d = (function () {
        function t(e) {
          var t = this,
            n;
          ((this.$5 = null),
            (this.$6 = function () {}),
            (this.$7 = new Set()),
            (this.$8 = new Map()),
            (this.$9 = new Map()),
            (this.$10 = !1),
            (this.$12 = new Map()),
            (this.$13 = !1),
            (this.$16 = 0),
            (this.$17 = !1),
            (this.$18 = !1),
            (this.$20 = function (e) {
              var n = e.target,
                a = n.iceConnectionState;
              (t.$14.updateIceConnectionState(a),
                t.$14.logIceConnectionState(t.$6),
                t.$14.updateIceConnectionTimer(function () {
                  return t.$1.processEvent({
                    onError: r("emptyFunction"),
                    onSuccess: r("emptyFunction"),
                    payload: {
                      error:
                        o("ZenonMediaError").ZenonMediaError.IceDisconnected,
                      stopLocalTracks: !0,
                    },
                    type: "endCall",
                  });
                }),
                t.$13 && t.$14.updateIceRestartTimer(t.$1, u),
                t.$1.processEvent({
                  onError: r("emptyFunction"),
                  onSuccess: r("emptyFunction"),
                  payload: { iceConnectionState: a },
                  type: "iceConnectionStateChange",
                }));
            }),
            (this.$22 = function (e) {
              var n = e.target;
              if (
                (n.signalingState === "closed" &&
                  r("ZenonInfraActionsLogger").logCheckpoint({
                    auditId: r("ZenonAuditedCheckpointLogId")
                      .RP_ROOMS_INFRA_WWW__STATE_MACHINE,
                    checkpoint:
                      "Peer connection signaling state changed to closed",
                  }),
                n.connectionState === "closed")
              ) {
                var a = !0,
                  i = o("ZenonMediaError").ZenonMediaError.ConnectionClosed;
                (r("ZenonInfraActionsLogger").logCheckpoint({
                  auditId: r("ZenonAuditedCheckpointLogId")
                    .RP_ROOMS_INFRA_WWW__STATE_MACHINE,
                  checkpoint: "Peer connection state changed to closed",
                }),
                  t.$1.processEvent({
                    onError: r("emptyFunction"),
                    onSuccess: r("emptyFunction"),
                    payload: { error: i, stopLocalTracks: a },
                    type: "endCall",
                  }));
              }
            }),
            (this.$21 = function (e) {
              var n = e.candidate;
              n != null &&
                t.$1.processEvent({
                  onError: r("emptyFunction"),
                  onSuccess: r("emptyFunction"),
                  payload: n,
                  type: "iceCandidateReady",
                });
            }),
            (this.$14 = new (r("ZenonIceConnectionMonitor"))()),
            (this.$10 = (n = e.shouldUseSimulcast) != null ? n : !1),
            (this.$11 = o("ZenonBrowsers").isChrome()),
            e.loggingEventHandler && (this.$6 = e.loggingEventHandler),
            (this.$5 = null));
          var a = r("ZenonPeerConnectionConfig").getConfigZenonPlatform();
          ((this.$4 = new (r("ZenonPeerConnectionWrapper"))(
            e.configManager,
            e.dataMessageTranslator,
            babelHelpers.extends({}, a),
            this.$10,
          )),
            this.$6({ name: "peerConnectionCreated" }));
          var i = o("ZenonMediaStatsUtil").shouldUseTSLog();
          ((this.$2 = new (r("ZenonMediaChannelManager"))({
            areTslogsEnabled: i,
            dataMessageTranslator: e.dataMessageTranslator,
            mediaStats: e.mediaStats,
            onFirstMediaPacket: function (n, r) {
              return t.$6({
                name: "firstMediaPacketReceived",
                timestamp: r,
                type: n,
              });
            },
            onFirstSentMediaPacket: function (n, r) {
              return t.$6({
                name: "firstMediaPacketSent",
                timestamp: r,
                type: n,
              });
            },
            onMediaStatUpdate: function (n) {
              return t.$6({ mediaStats: n, name: "setMediaStats" });
            },
            peerConnection: this.$4,
          })),
            (this.$3 = new (r("ZenonSDPManager"))(this.$4, e.configManager)),
            (this.$1 = new (r("ZenonPeerConnectionStateMachine"))(
              babelHelpers.extends({}, this.$19(), {
                logEvent: function (n) {
                  return t.$6(n);
                },
                mediaChannelManager: this.$2,
                sdpManager: this.$3,
                tslogUploader: i
                  ? new (r("ZenonClientTslogUploader"))(function (e) {
                      return t.$6(e);
                    }, this.$2)
                  : null,
              }),
            )),
            this.$4.addEventListener("iceconnectionstatechange", this.$20),
            this.$4.addEventListener("icecandidate", this.$21),
            this.$4.addEventListener("signalingstatechange", this.$22));
        }
        var a = t.prototype;
        return (
          (a.subscribeDataChannelOpen = function (t, n) {
            var e,
              r = (e = this.$12.get(n)) != null ? e : [];
            (r.push(t), this.$12.set(n, r));
          }),
          (a.unsubscribeDataChannelOpen = function (t, n) {
            var e,
              r = (e = this.$12.get(n)) != null ? e : [],
              o = r.filter(function (e) {
                return e !== t;
              });
            this.$12.set(n, o);
          }),
          (a.onNetworkUpdate = function (t) {
            (this.$14.updateNetworkStatus(t.local),
              this.$13 && this.$14.updateIceRestartTimer(this.$1, u));
          }),
          (a.getLocalMediaStateVersion = function () {
            return this.$1.getLocalMediaStateVersion();
          }),
          (a.setLocalMediaStateVersion = function (t) {
            var e = this;
            return r("ZenonLogPromiseRejection")(
              new (s || (s = n("Promise")))(function (n, r) {
                e.$1.processEvent({
                  onError: r,
                  onSuccess: n,
                  payload: { version: t },
                  type: "setLocalMediaStateVersion",
                });
              }),
            );
          }),
          (a.addLocalTracks = function (t, o, a, i) {
            var e = this;
            return r("ZenonLogPromiseRejection")(
              new (s || (s = n("Promise")))(function (n, r) {
                e.$1.processEvent({
                  onError: r,
                  onSuccess: n,
                  payload: {
                    callInitiator: i,
                    callMedia: a,
                    mediaMode: o,
                    tracks: t,
                  },
                  type: "addLocalTracks",
                });
              }),
            );
          }),
          (a.removeLocalTrack = function (t) {
            var e = this;
            return r("ZenonLogPromiseRejection")(
              new (s || (s = n("Promise")))(function (n, r) {
                e.$1.processEvent({
                  onError: r,
                  onSuccess: n,
                  payload: { trackId: t },
                  type: "removeLocalTrack",
                });
              }),
            );
          }),
          (a.replaceLocalTrack = function (t, o, a) {
            var e = this;
            return (
              a === void 0 && (a = !1),
              r("ZenonLogPromiseRejection")(
                new (s || (s = n("Promise")))(function (n, r) {
                  e.$1.processEvent({
                    onError: r,
                    onSuccess: n,
                    payload: babelHelpers.extends(
                      {},
                      a ? { preserveOriginal: a } : {},
                      { replacementTrack: o, trackIdToReplace: t },
                    ),
                    type: "replaceLocalTrack",
                  });
                }),
              )
            );
          }),
          (a.createDataChannel = function (t, o, a) {
            var e = this;
            return (
              this.$23(o),
              this.$15 == null &&
                r("FBLogger")("rtweb").warn(
                  "Data channel instantion role not setup properly",
                ),
              r("ZenonLogPromiseRejection")(
                new (s || (s = n("Promise")))(function (n, i) {
                  var l;
                  (e.$7.add(t),
                    a && e.$8.set(t, a),
                    e.$1.processEvent({
                      onError: i,
                      onSuccess: n,
                      payload: {
                        dataChannelLabel: t,
                        dataChannelOptions: a,
                        onDataChannelMessage: function (o) {
                          (e.$1.processEvent({
                            onError: r("emptyFunction"),
                            onSuccess: r("emptyFunction"),
                            payload: { dataChannelLabel: t, dataMessage: o },
                            type: "dataChannelMessageReceived",
                          }),
                            e.$10 &&
                              t === "data" &&
                              e.maybeHandleSimulcastDataMessage(o));
                        },
                        onDataChannelOpen: function () {
                          var n = e.$12.get(t);
                          (n == null ||
                            n.forEach(function (e) {
                              e();
                            }),
                            e.$24(o),
                            e.$16++);
                        },
                        shouldEstablishDataChannel:
                          (l = e.$15) != null ? l : !0,
                      },
                      type: "createDataChannel",
                    }));
                }),
              )
            );
          }),
          (a.$23 = function (t) {
            this.$17 ||
              (this.$25("sctp_" + t.toString() + "_attempt"), (this.$17 = !0));
          }),
          (a.$24 = function (t) {
            this.$18 ||
              (this.$25("sctp_" + t.toString() + "_success"), (this.$18 = !0));
          }),
          (a.$25 = function (n) {
            (e || (e = o("ODS"))).bumpEntityKey(4083, "zenon_sctp", n);
          }),
          (a.onSimulcastSignalingDataMessage = function (t) {
            this.$10 &&
              this.$11 &&
              this.maybeHandleSignalingSimulcastDataMessage(t);
          }),
          (a.createDataMessageSubscription = function (t, o) {
            var e = this;
            return this.$9.has(t)
              ? (s || (s = n("Promise"))).resolve()
              : (this.$9.set(t, o),
                r("ZenonLogPromiseRejection")(
                  new (s || (s = n("Promise")))(function (n, r) {
                    e.$1.processEvent({
                      onError: r,
                      onSuccess: n,
                      payload: {
                        dataChannelLabel: t,
                        onSignalingDataMessage: o,
                      },
                      type: "createDataMessageSubscription",
                    });
                  }),
                ));
          }),
          (a.removeDataMessageSubscription = function (t) {
            var e = this;
            if (this.$9.has(t)) {
              var o,
                a = (o = this.$9.get(t)) != null ? o : function () {};
              return (
                this.$9.delete(t),
                r("ZenonLogPromiseRejection")(
                  new (s || (s = n("Promise")))(function (n, r) {
                    e.$1.processEvent({
                      onError: r,
                      onSuccess: n,
                      payload: {
                        dataChannelLabel: t,
                        onSignalingDataMessage: a,
                      },
                      type: "removeDataMessageSubscription",
                    });
                  }),
                )
              );
            }
            return (s || (s = n("Promise"))).resolve();
          }),
          (a.getDataChannelOpenCount = function () {
            return this.$16;
          }),
          (a.getDataChannelLabels = function () {
            return this.$7;
          }),
          (a.getDataChannelOptions = function (t) {
            var e;
            return (e = this.$8.get(t)) != null ? e : {};
          }),
          (a.getDataChannelState = function (t) {
            return this.$4.getDataChannelState(t);
          }),
          (a.getDataMessageSubscriptions = function () {
            return this.$9;
          }),
          (a.getSupportsSimulcastOverSignaling = function () {
            return this.$11;
          }),
          (a.setShouldEstablishDataChannel = function (t) {
            this.$15 = t;
          }),
          (a.setIceRestartEligible = function (t) {
            ((this.$13 = t && o("ZenonBrowsers").supportsIceRestart()),
              this.$13 || this.$14.clearIceRestartTimer());
          }),
          (a.getIceRestartEnabled = function () {
            return this.$13;
          }),
          (a.localMediaStateUpdateRetry = function (t) {
            var e = this;
            return r("ZenonLogPromiseRejection")(
              new (s || (s = n("Promise")))(function (n, r) {
                var o = e.$1.getContext();
                o.retryCount < c &&
                  (o.retryCount++,
                  (o.localMediaStateUpdateRetryTimerId = window.setTimeout(
                    function () {
                      e.$1.processEvent({
                        onError: r,
                        onSuccess: n,
                        type: "localMediaStateUpdateRetry",
                      });
                    },
                    t,
                  )));
              }),
            );
          }),
          (a.clearRetryCount = function () {
            var e = this.$1.getContext();
            e.retryCount = 0;
          }),
          (a.cancelPendingNegotiation = function () {
            var e = this;
            return r("ZenonLogPromiseRejection")(
              new (s || (s = n("Promise")))(function (t, n) {
                e.$1.processEvent({
                  onError: n,
                  onSuccess: t,
                  type: "remoteSdpFailed",
                });
              }),
            );
          }),
          (a.muteRemoteTrack = function (t) {
            var e = this;
            return r("ZenonLogPromiseRejection")(
              new (s || (s = n("Promise")))(function (n, r) {
                e.$1.processEvent({
                  onError: r,
                  onSuccess: n,
                  payload: { trackId: t },
                  type: "muteRemoteTrack",
                });
              }),
            );
          }),
          (a.unmuteRemoteTrack = function (t) {
            var e = this;
            return r("ZenonLogPromiseRejection")(
              new (s || (s = n("Promise")))(function (n, r) {
                e.$1.processEvent({
                  onError: r,
                  onSuccess: n,
                  payload: { trackId: t },
                  type: "unmuteRemoteTrack",
                });
              }),
            );
          }),
          (a.muteLocalTrack = function (t) {
            var e = this;
            return r("ZenonLogPromiseRejection")(
              new (s || (s = n("Promise")))(function (n, r) {
                e.$1.processEvent({
                  onError: r,
                  onSuccess: n,
                  payload: { trackId: t },
                  type: "muteLocalTrack",
                });
              }),
            );
          }),
          (a.unmuteLocalTrack = function (t) {
            var e = this;
            return r("ZenonLogPromiseRejection")(
              new (s || (s = n("Promise")))(function (n, r) {
                e.$1.processEvent({
                  onError: r,
                  onSuccess: n,
                  payload: { trackId: t },
                  type: "unmuteLocalTrack",
                });
              }),
            );
          }),
          (a.stopLocalTrack = function (t) {
            var e = this;
            return r("ZenonLogPromiseRejection")(
              new (s || (s = n("Promise")))(function (n, r) {
                e.$1.processEvent({
                  onError: r,
                  onSuccess: n,
                  payload: { trackId: t },
                  type: "stopLocalTrack",
                });
              }),
            );
          }),
          (a.applyLocalSdp = function () {
            var e = this;
            return r("ZenonLogPromiseRejection")(
              new (s || (s = n("Promise")))(function (t, n) {
                e.$1.processEvent({
                  onError: n,
                  onSuccess: t,
                  type: "applyLocalSdp",
                });
              }),
            );
          }),
          (a.applyMediaUpdate = function (t) {
            var e = this;
            return r("ZenonLogPromiseRejection")(
              new (s || (s = n("Promise")))(function (n, r) {
                e.$1.processEvent({
                  onError: r,
                  onSuccess: n,
                  payload: { mediaStates: t },
                  type: "applyMediaUpdate",
                });
              }),
            );
          }),
          (a.applyRemoteSdp = function (t, o, a, i, l, u, c, d) {
            var e = this;
            return r("ZenonLogPromiseRejection")(
              new (s || (s = n("Promise")))(function (n, r) {
                e.$1.processEvent({
                  onError: r,
                  onSuccess: n,
                  payload: {
                    e2eeServerState: d,
                    mediaStates: o,
                    messageID: c,
                    onProcessed: u,
                    renegotiationOffer: i,
                    sdp: t,
                    sdpOriginLocalId: l,
                    source: a,
                  },
                  type: "applyRemoteSdp",
                });
              }),
            );
          }),
          (a.applyRemoteIceCandidate = function (t) {
            var e = this;
            return r("ZenonLogPromiseRejection")(
              new (s || (s = n("Promise")))(function (n, r) {
                e.$1.processEvent({
                  onError: r,
                  onSuccess: n,
                  payload: t,
                  type: "applyRemoteIceCandidate",
                });
              }),
            );
          }),
          (a.forceEncodingEnabled = function (t) {
            var e = this;
            return r("ZenonLogPromiseRejection")(
              new (s || (s = n("Promise")))(function (n, r) {
                e.$1.processEvent({
                  onError: r,
                  onSuccess: n,
                  payload: { enabled: t },
                  type: "forceEncodingEnabled",
                });
              }),
            );
          }),
          (a.end = function (t, o) {
            var e = this;
            return r("ZenonLogPromiseRejection")(
              new (s || (s = n("Promise")))(function (n, r) {
                (e.$14.clearIceRestartTimer(),
                  e.$1.processEvent({
                    onError: r,
                    onSuccess: n,
                    payload: { restart: o, stopLocalTracks: t },
                    type: "endCall",
                  }));
              }),
            );
          }),
          (a.restart = function () {
            var e = this;
            return r("ZenonLogPromiseRejection")(
              new (s || (s = n("Promise")))(function (t, n) {
                (r(
                  "ZenonInfraActionsLogger",
                ).logCheckpointEmployeesTestUsersOnly({
                  checkpoint:
                    "Beginning the restart process on peer connection",
                }),
                  r("promiseDone")(e.end(!1, !0)),
                  e.$2.clearTracks(),
                  (e.$17 = !1),
                  (e.$18 = !1),
                  e.$1.processEvent({
                    onError: n,
                    onSuccess: t,
                    type: "restartPeerConnection",
                  }));
              }),
            );
          }),
          (a.getTracks = function () {
            return this.$2.getTracks();
          }),
          (a.getLocalTracksForMWS = function () {
            return this.$2.getLocalTracksForMWS();
          }),
          (a.getRtpSenders = function () {
            return this.$4.getSenders();
          }),
          (a.getRtpReceivers = function () {
            return this.$4.getReceivers();
          }),
          (a.setPeerConnectionEventHandlers = function (t) {
            this.$5 = t;
          }),
          (a.swapPeerConnectionEventHandlers = function (t) {
            var e = this.$5;
            ((this.$5 = t.$5), (t.$5 = e));
          }),
          (a.setNetworkStatusListener = function (t) {
            this.$2.setNetworkStatusListener(t);
          }),
          (a.registerTrackListener = function (t) {
            this.$2.registerTrackListener(t);
          }),
          (a.setTrackListenersFromManager = function (t) {
            this.$2.setTrackListenersFromManager(t.$2);
          }),
          (a.setLoggingEventHandler = function (t) {
            this.$6 = t;
          }),
          (a.sendDataMessage = function (t, o) {
            var e = this;
            return r("ZenonLogPromiseRejection")(
              new (s || (s = n("Promise")))(function (n, r) {
                (e.$4.sendDataMessage(t, o), n());
              }),
            );
          }),
          (a.$19 = function () {
            return {
              onConnectionDestroyed: this.$26("onConnectionDestroyed"),
              onConnectionDropped: this.$26("onConnectionDropped"),
              onConnectionEstablished: this.$26("onConnectionEstablished"),
              onCreateDataMessageSubscription: this.$26(
                "onCreateDataMessageSubscription",
              ),
              onDataChannelMessageReceived: this.$26(
                "onDataChannelMessageReceived",
              ),
              onIceCandidateReady: this.$26("onIceCandidateReady"),
              onLocalMediaStateUpdate: this.$26("onLocalMediaStateUpdate"),
              onLocalSdpSet: this.$26("onLocalSdpSet"),
              onRemoteSdpSet: this.$26("onRemoteSdpSet"),
              onRemoveDataMessageSubscription: this.$26(
                "onRemoveDataMessageSubscription",
              ),
            };
          }),
          (a.$26 = function (t) {
            var e = this;
            return function () {
              if (e.$5 && e.$5[t]) {
                var r;
                return (r = e.$5)[t].apply(r, arguments);
              }
              return (s || (s = n("Promise"))).resolve();
            };
          }),
          (a.maybeHandleSimulcastDataMessage = function (t) {
            try {
              var e = JSON.parse(t.message),
                n = e.body,
                a = n.videoUploadRequest,
                i = a.perSsrcTargetBitrateBpsMap,
                l = a.qualityMask;
              if (a != null && l != null && l !== 0 && i != null) {
                var s = o(
                  "ZenonSimulcastDataMessageParser",
                ).parseSimulcastControlMessage({
                  perSsrcTargetBitrateBpsMap: i,
                  qualityMask: l,
                });
                this.handleSimulcastUploadRequest(s);
              }
            } catch (e) {
              var u = r("getErrorSafe")(e);
              r("FBLogger")("rtc_www").warn(
                "MaybeHandleSimulcastDataMessage failed:",
                u.message,
              );
            }
          }),
          (a.maybeHandleSignalingSimulcastDataMessage = function (t) {
            try {
              var e = JSON.parse(t.message);
              if (
                e.qualityMask != null &&
                e.qualityMask !== 0 &&
                e.perSsrcTargetBitrateBpsMap != null
              ) {
                var n = {
                    perSsrcTargetBitrateBpsMap: e.perSsrcTargetBitrateBpsMap,
                    qualityMask: e.qualityMask,
                  },
                  a = o(
                    "ZenonSimulcastDataMessageParser",
                  ).parseSimulcastControlMessage(n);
                this.handleSimulcastUploadRequest(a);
              }
            } catch (e) {
              var i = r("getErrorSafe")(e);
              r("FBLogger")("rtc_www").warn(
                "MaybeHandleSignalingSimulcastDataMessage failed:",
                i.message,
              );
            }
          }),
          (a.handleSimulcastUploadRequest = function (t) {
            var e, n, a, i, l, s, u;
            if (
              !o(
                "ZenonSimulcastUtils",
              ).isCurrentBrowserCompatibleWithSimulcast() ||
              !this.$4.supportsSimulcast() ||
              typeof ((e = RTCRtpSender) == null
                ? void 0
                : e.prototype.getParameters) != "function"
            ) {
              r("ZenonMediaActionLogger").logCheckpoint(
                "ZenonPeerConnectionManager: handleSimulcastUploadRequest: Simulcast not supported!",
              );
              return;
            }
            var c = this.$4.getSenders().filter(function (e) {
              return e.track && e.track.kind === "video";
            });
            if (c.length === 0) {
              r("ZenonMediaActionLogger").logCheckpoint(
                "ZenonPeerConnectionManager: handleSimulcastUploadRequest: No Senders!",
              );
              return;
            }
            var d = c[0];
            if (!(!("getParameters" in d) || !("setParameters" in d))) {
              var m = this.$4.getTransceiverFromSender(d);
              if (!m) {
                r("ZenonMediaActionLogger").logCheckpoint(
                  "ZenonPeerConnectionManager: handleSimulcastUploadRequest: Transceiver is null!",
                );
                return;
              }
              if (!m.stopped) {
                var p = !1,
                  _ = this.$2.getTracks();
                if ((n = d.track) != null && n.id) {
                  var f,
                    g = _.get((f = d.track) == null ? void 0 : f.id);
                  p = g && g.contentType === "screen";
                }
                var h = this.getTotalVideoParticipants(),
                  y = o("ZenonSimulcastManager").getSimulcastEncodingParameters(
                    d.getParameters(),
                    t,
                    h,
                    o("ZenonSimulcastManager").getSimulcastSsrcToLayerMap(
                      ((a = this.$3.getLocalSdp()) == null
                        ? void 0
                        : a.toDesc().sdp) || "",
                    ),
                    p,
                    o("ZenonSimulcastUtils").getMaxNumLayers(),
                    {
                      height:
                        (i =
                          (l = d.track) == null
                            ? void 0
                            : l.getSettings().height) != null
                          ? i
                          : 720,
                      width:
                        (s =
                          (u = d.track) == null
                            ? void 0
                            : u.getSettings().width) != null
                          ? s
                          : 1280,
                    },
                    o("ZenonSimulcastManager").ALLOW_SCREENSHARE_SIMULCAST,
                    o("ZenonSimulcastManager").MIN_NUM_ACTIVE_LAYERS,
                  ),
                  C = y.params;
                r("promiseDone")(d.setParameters(C));
              }
            }
          }),
          (a.getTotalVideoParticipants = function () {
            var e = this.$4.getTransceivers(),
              t = this.$4.getReceivers(),
              n = 0;
            if (e != null && e.length > 0) {
              var r = e.filter(function (e) {
                var t, n;
                return (
                  ((t = e.receiver.track) == null ? void 0 : t.kind) ===
                    "video" &&
                  e.currentDirection !== "inactive" &&
                  ((n = e.receiver.track) == null ? void 0 : n.readyState) ===
                    "live"
                );
              });
              n = r.length;
            } else {
              var o = t.filter(function (e) {
                var t;
                return ((t = e.track) == null ? void 0 : t.kind) === "video";
              });
              n = o.length + 1;
            }
            return n;
          }),
          (a.renegotiateNullSenderTransport = function () {
            for (var e of this.getRtpSenders())
              if (e.transport == null) {
                r("promiseDone")(this.applyLocalSdp());
                break;
              }
          }),
          t
        );
      })();
    l.default = d;
  },
  98,
);
