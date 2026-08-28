__d(
  "ZenonConnectionStateManager",
  [
    "DateConsts",
    "FBLogger",
    "JSResourceForInteraction",
    "Promise",
    "ZenonAppProvider",
    "ZenonAuditedCheckpointLogId",
    "ZenonCallsModelEmitter",
    "ZenonCallsModelTypes",
    "ZenonConnectionStateMachine",
    "ZenonConnectionStateModel",
    "ZenonConnectionStatePeerConnectionDelegate",
    "ZenonConnectionStateSignalingDelegate",
    "ZenonDGWUtils",
    "ZenonDismissReason",
    "ZenonE2ee",
    "ZenonEncryptionKeysManagerState",
    "ZenonInfraActionsLogger",
    "ZenonLogPromiseRejection",
    "ZenonLogRenderResolutionStats",
    "ZenonNetworkQualityMonitor",
    "ZenonNodeIdNotificationHandler",
    "ZenonParticipantState",
    "ZenonPeerConnectionManager",
    "ZenonSCTPConstants",
    "ZenonSctpMessageTranslator",
    "ZenonTransportType",
    "asyncToGeneratorRuntime",
    "deepEquals",
    "err",
    "getErrorSafe",
    "getZenonMqttChannel",
    "promiseDone",
    "qex",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = r("JSResourceForInteraction")("ZenonDGWStreamManager").__setRef(
        "ZenonConnectionStateManager",
      ),
      c = "E2eeState",
      d = 2 * o("DateConsts").MS_PER_MIN,
      m = new Set([
        (s = o("ZenonSCTPConstants")).SCTP_DATA_TOPIC,
        s.SCTP_FAILOVER_TOPIC,
        s.SCTP_MEDIA_SUBSCRIPTIONS,
        s.E2EE_DATA_MESSAGE_MEDIA_CHANNEL_TOPIC,
        s.SCTP_SIGNALING_TOPIC,
        s.SIMULCAST_TOPIC,
        s.SCTP_RRR,
      ]),
      p = (function () {
        function t(e, t, n, a, i, l, s) {
          var u = this,
            c;
          (l === void 0 && (l = !1),
            (this.$7 = {
              local: o("ZenonNetworkQualityMonitor").ZenonNetworkQuality.Good,
              remote: new Map(),
            }),
            (this.$8 = new (r("ZenonSctpMessageTranslator"))(
              function (e) {
                return u.$3.convertUserIdToNodeId(e);
              },
              function (e) {
                return u.$3.convertServiceIdToNodeId(e);
              },
              function (e) {
                return u.$3.convertNodeIdtoUserId(e);
              },
              function () {
                return u.$3.userIds();
              },
            )),
            (this.$9 = null),
            (this.$10 = null),
            (this.$13 = function () {
              return u.$3;
            }),
            (this.$11 = function (e) {
              (e(u.$3), u.$12(), u.$20());
            }),
            (this.$5 = i),
            this.$5.log({
              isIncomingConnection: n === "incoming",
              name: "connectionStart",
            }),
            (this.$1 = e));
          var d = r("uuidv4")(),
            m = i.getLogIdentifiers().localCallID,
            p = t.getSignalingModel();
          ((this.$2 = t.getSignalingModel().getSignalingID()),
            p.setNotifyCallback(function () {
              u.$11(function (e) {
                e.collisionContext.serverInfoData = p.getRemoteSignalingID();
              });
              var e = p.getOverlayConfigServerLayer();
              e && a.setServerLayer(e);
            }),
            (this.$3 = new (r("ZenonConnectionStateModel"))(
              p,
              new Map(),
              d,
              m,
              n,
              a,
              {
                groupThreadID: null,
                peerID: null,
                serverInfoData: t.getSignalingModel().getRemoteSignalingID(),
              },
            )),
            this.$5.log({ name: "peerConnectionManagerCreated" }));
          var _ = new Map();
          s && r("ZenonLogRenderResolutionStats")(_, s);
          var f = {
              configManager: a,
              dataMessageTranslator: this.$8,
              loggingEventHandler: function (t) {
                return i.log(t);
              },
              mediaStats: _,
              shouldUseSimulcast: l,
            },
            g = new (r("ZenonPeerConnectionManager"))(f),
            h =
              p.getMediaModeManager().getMediaMode() === "sfu" ||
              (((c = p.getRoomInfo().context) == null ? void 0 : c.peerID) !=
                null &&
                n === "outgoing");
          (g.setIceRestartEligible(h),
            g.registerTrackListener(function () {
              u.$12();
            }),
            g.setNetworkStatusListener(function (e) {
              var t = u.$7;
              r("deepEquals")(t, e) ||
                (u.$3.updateNetworkStatus(e),
                u.$12(),
                (u.$7 = e),
                g.onNetworkUpdate(e),
                e.local !== t.local &&
                  r("ZenonInfraActionsLogger").logCheckpoint({
                    auditId: r("ZenonAuditedCheckpointLogId")
                      .RP_ROOMS_INFRA_WWW__PLATFORM,
                    checkpoint: "ZenonNetworkQuality: " + e.local,
                  }));
            }));
          var y = new (r("ZenonPeerConnectionManager"))(f);
          (y.setNetworkStatusListener(function (e) {
            var t = u.$7;
            r("deepEquals")(t, e) ||
              (u.$3.updateNetworkStatus(e),
              u.$12(),
              (u.$7 = e),
              y.onNetworkUpdate(e),
              e.local !== t.local &&
                r("ZenonInfraActionsLogger").logCheckpoint({
                  auditId: r("ZenonAuditedCheckpointLogId")
                    .RP_ROOMS_INFRA_WWW__PLATFORM,
                  checkpoint: "ZenonNetworkQuality: " + e.local,
                }));
          }),
            (this.$4 = new (r("ZenonConnectionStateMachine"))({
              getConnectionModel: this.$13,
              logEvent: function (t) {
                return i.log(t);
              },
              peerConnectionManager: g,
              sctpMessageTranslator: this.$8,
              secondaryPeerConnectionManager: y,
              signalingClient: t,
              updateConnectionModel: this.$11,
            })),
            r(
              "ZenonConnectionStateSignalingDelegate",
            ).setSignalingEventHandlers(t, this.$4),
            r(
              "ZenonConnectionStatePeerConnectionDelegate",
            ).setPeerConnectionEventHandlers(
              g,
              this.$4,
              "primary",
              this.$13,
              n,
            ),
            r(
              "ZenonConnectionStatePeerConnectionDelegate",
            ).setPeerConnectionEventHandlers(
              y,
              this.$4,
              "secondary",
              this.$13,
              n,
            ),
            r("promiseDone")(
              this.createDataMessageSubscription(
                o("ZenonSCTPConstants").SIMULCAST_TOPIC,
                function (e) {
                  try {
                    g.maybeHandleSignalingSimulcastDataMessage(e);
                  } catch (e) {
                    r("FBLogger")("rtc_www").warn(
                      "maybeHandleVideouploadRequest failed:",
                      r("getErrorSafe")(e).message,
                    );
                  }
                },
              ),
            ),
            this.$14(),
            r("ZenonE2ee").isE2eeStackReady() && this.$15(t),
            t.setLoggingEventHandler(function (e) {
              return i.log(e);
            }),
            (this.$6 = 0));
        }
        var a = t.prototype;
        return (
          (a.getSctpMessageTranslator = function () {
            return this.$8;
          }),
          (a.start = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var a,
                  i,
                  l = this;
                if (o("ZenonDGWUtils").shouldUseDGW())
                  if (r("qex")._("4380"))
                    this.$5.log({ name: "dgwConnectionState", pending: !1 });
                  else
                    try {
                      this.$5.log({ name: "dgwConnectionState", pending: !0 });
                      var s = yield u.load();
                      (yield s.getManagerInstance().establishAndGetStream(),
                        this.$5.log({
                          name: "dgwConnectionState",
                          pending: !1,
                        }));
                    } catch (e) {
                      (r("ZenonInfraActionsLogger").logError({
                        auditId: r("ZenonAuditedCheckpointLogId")
                          .RP_ROOMS_INFRA_WWW__ERROR,
                        callType: "mw",
                        checkpoint:
                          "[ZP] Attempting to establish DGW connection",
                        error: r("getErrorSafe")(e).message,
                        errorDomain: "ZenonConnectionStateManager_start",
                      }),
                        r("promiseDone")(
                          this.end(
                            o("ZenonDismissReason").ZenonDismissReason
                              .ClientError,
                            "DGW did not connect",
                          ),
                        ));
                      return;
                    }
                else
                  try {
                    this.$5.log({ name: "mqttConnectionState", pending: !0 });
                    var c = r("getZenonMqttChannel")();
                    (yield this.$16(c),
                      this.$5.log({
                        name: "mqttConnectionState",
                        pending: !1,
                      }));
                  } catch (e) {
                    (r("ZenonInfraActionsLogger").logError({
                      auditId: r("ZenonAuditedCheckpointLogId")
                        .RP_ROOMS_INFRA_WWW__ERROR,
                      callType: "mw",
                      checkpoint:
                        "[ZP] Attempting to establish MQTT connection",
                      error: r("getErrorSafe")(e).message,
                      errorDomain: "ZenonConnectionStateManager_start",
                    }),
                      r("promiseDone")(
                        this.end(
                          o("ZenonDismissReason").ZenonDismissReason
                            .ClientError,
                          "MQTT did not connect",
                        ),
                      ));
                    return;
                  }
                var d = t.appMessages,
                  p = t.callMedia,
                  _ = t.capabilityOverrides,
                  f = t.initialSyncStates,
                  g = t.isSecondaryJoinRole,
                  h = t.localMedia,
                  y = t.mwThriftRingRequest,
                  C = t.usersToRing,
                  b = y != null,
                  v = b ? "incoming" : "outgoing",
                  S = (a = y == null ? void 0 : y.messageBody) != null ? a : {},
                  R = S.ringRequest,
                  L,
                  E;
                if (R) {
                  var k;
                  ((L = Array.from(R.otherParticipants)),
                    (E =
                      ((k = R.offer) == null ? void 0 : k.sdpString) != null));
                }
                var I = (i = t.dataChannels) != null ? i : new Set();
                m.forEach(function (e) {
                  return I.add(e);
                });
                var T = yield this.$17(),
                  D = {
                    appMessages: d,
                    callMedia: p,
                    capabilityOverrides: _,
                    dataChannels: I,
                    direction: v,
                    hasOfferInRing: E,
                    initialSyncStates: f != null ? f : new Map(),
                    isSecondaryJoinRole: g,
                    serializedInitialSyncStates: T,
                    tracks: h,
                    usersToRing: C,
                    usersToRingFromRingRequest: L,
                  };
                return r("ZenonLogPromiseRejection")(
                  new (e || (e = n("Promise")))(function (e, t) {
                    l.$4.processEvent({
                      onError: t,
                      onSuccess: e,
                      payload: D,
                      type: "createConnection",
                    });
                  }),
                );
              },
            );
            function a(e) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (a.startUllc = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = this,
                  a = e.localMedia,
                  i = e.usersToRing,
                  l = i[0],
                  s = new Map(),
                  u = !1,
                  c = function () {
                    l == null ||
                      u ||
                      ((u = !0),
                      n.$3.updateParticipantState(
                        l,
                        o("ZenonParticipantState").ZenonParticipantState
                          .CONNECTED,
                      ),
                      n.$12());
                  },
                  d = yield r("JSResourceForInteraction")(
                    "UllcPeerConnectionManager",
                  )
                    .__setRef("ZenonConnectionStateManager")
                    .load(),
                  m = new d(t, {
                    onConnectionStateChange: function (t) {
                      (t === "connected" &&
                        (c(), (n.$3.peerConnectionConnected = !0), n.$12()),
                        t === "failed" &&
                          ((n.$3.connectionState = "terminated"),
                          (n.$3.dismissDetails = {
                            dismissReason:
                              o("ZenonDismissReason").ZenonDismissReason
                                .ConnectionDropped,
                          }),
                          n.$12(),
                          m.close()));
                    },
                    onDismissReceived: function (t, r) {
                      ((n.$3.connectionState = "terminated"),
                        (n.$3.dismissDetails = {
                          detailedReasonFromMW: r || void 0,
                          dismissReason:
                            o("ZenonDismissReason").ZenonDismissReason
                              .CallEnded,
                        }),
                        n.$12(),
                        m.close());
                    },
                    onIceConnectionStateChange: function (t) {
                      (t === "connected" || t === "completed") && c();
                    },
                    onTrack: function (t) {
                      var e = t.track,
                        r = t.streams[0];
                      r == null
                        ? ((r = new MediaStream()), r.addTrack(e))
                        : r.getTracks().includes(e) || r.addTrack(e);
                      var o = {
                        contentHint: "",
                        contentType: e.kind === "video" ? "video" : "audio",
                        enabled: e.enabled,
                        flags: {},
                        label: e.label,
                        name: e.id,
                        pausedDownlink: !1,
                        remote: !0,
                        trackId: e.id,
                        userMuted: !1,
                        webrtcStream: r,
                        webrtcTrack: e,
                      };
                      (s.set(e.id, o),
                        l != null &&
                          n.$3.addRemoteTrackToTrackMap(
                            {
                              enabled: e.enabled,
                              participantID: l,
                              trackID: e.id,
                              type: o.contentType,
                            },
                            l,
                          ),
                        e.addEventListener("ended", function () {
                          (s.delete(e.id),
                            l != null &&
                              n.$3.removeRemoteTrackFromTrackMap(e.id, l),
                            n.$12());
                        }),
                        c(),
                        n.$12());
                    },
                  });
                for (var p of a) s.set(p.trackId, p);
                (this.$3.registerTrackFetcher(function () {
                  return s;
                }),
                  this.$3.updateParticipantState(
                    this.$3.selfParticipantID,
                    o("ZenonParticipantState").ZenonParticipantState.CONNECTED,
                  ),
                  l != null &&
                    this.$3.updateParticipantState(
                      l,
                      o("ZenonParticipantState").ZenonParticipantState
                        .CONNECTING,
                    ));
                var _ = [];
                for (var f of a) f.webrtcTrack != null && _.push(f.webrtcTrack);
                if (_.length === 0) return (m.close(), null);
                var g = yield m.setupLocal(_);
                return g
                  ? ((this.$3.connectionState = "sdpNegotiated"),
                    this.$12(),
                    (this.$9 = m),
                    (this.$10 = s),
                    m)
                  : (m.close(), null);
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.muteTrack = function (t, n) {
            return (
              n === void 0 && (n = !1),
              this.$9 != null
                ? this.$18(t, !1, n)
                : r("ZenonLogPromiseRejection")(this.$19(t, !1, n))
            );
          }),
          (a.unmuteTrack = function (t, n) {
            return (
              n === void 0 && (n = !1),
              this.$9 != null
                ? this.$18(t, !0, n)
                : r("ZenonLogPromiseRejection")(this.$19(t, !0, n))
            );
          }),
          (a.$18 = function (r, o, a) {
            var t = this.$9;
            if (t == null || a) return (e || (e = n("Promise"))).resolve();
            var i = t.setLocalTrackEnabled(r, o),
              l = this.$10;
            if (i && l != null) {
              var s = l.get(r);
              s != null &&
                (l.set(r, babelHelpers.extends({}, s, { enabled: o })),
                this.$12());
            }
            return (e || (e = n("Promise"))).resolve();
          }),
          (a.$19 = function (r, o, a) {
            var t = this;
            return (
              a === void 0 && (a = !1),
              new (e || (e = n("Promise")))(function (e, n) {
                var i = { enabled: o, isRemote: a, trackID: r };
                t.$4.processEvent({
                  onError: n,
                  onSuccess: e,
                  payload: i,
                  type: "mediaStateUpdateProcessing",
                });
              })
            );
          }),
          (a.stopLocalTrack = function (o) {
            var t = this;
            return r("ZenonLogPromiseRejection")(
              new (e || (e = n("Promise")))(function (e, n) {
                var r = { trackID: o };
                t.$4.processEvent({
                  onError: n,
                  onSuccess: e,
                  payload: r,
                  type: "stopLocalTrack",
                });
              }),
            );
          }),
          (a.end = function (o, a) {
            var t = this;
            return r("ZenonLogPromiseRejection")(
              new (e || (e = n("Promise")))(function (e, n) {
                var r = {
                  dismissReason: o,
                  dismissReasonSetByRemote: !1,
                  dismissSubreason: a,
                  shouldInformPeer: !0,
                };
                t.$4.processEvent({
                  onError: n,
                  onSuccess: e,
                  payload: r,
                  type: "endConnection",
                });
              }),
            );
          }),
          (a.addParticipants = function (o, a) {
            var t = this;
            return r("ZenonLogPromiseRejection")(
              new (e || (e = n("Promise")))(function (e, n) {
                var r = { groupThreadId: a, usersToRing: o };
                t.$4.processEvent({
                  onError: n,
                  onSuccess: e,
                  payload: r,
                  type: "addParticipants",
                });
              }),
            );
          }),
          (a.removeParticipants = function (a) {
            var t = this;
            return r("ZenonLogPromiseRejection")(
              new (e || (e = n("Promise")))(function (e, n) {
                var r = { usersToRemove: a };
                t.$4.processEvent({
                  onError: n,
                  onSuccess: e,
                  payload: r,
                  type: "removeParticipants",
                });
              }),
              o("ZenonAppProvider").isCastingCenterApp(),
            );
          }),
          (a.addLocalTrack = function (o) {
            var t = this;
            return r("ZenonLogPromiseRejection")(
              new (e || (e = n("Promise")))(function (e, n) {
                t.$4.processEvent({
                  onError: n,
                  onSuccess: e,
                  payload: { tracks: [o] },
                  type: "addLocalTracks",
                });
              }),
            );
          }),
          (a.replaceLocalTrack = function (o, a, i) {
            var t = this;
            return (
              i === void 0 && (i = !1),
              r("ZenonLogPromiseRejection")(
                new (e || (e = n("Promise")))(function (e, n) {
                  t.$4.processEvent({
                    onError: n,
                    onSuccess: e,
                    payload: babelHelpers.extends(
                      {},
                      i ? { preserveOriginal: i } : {},
                      { replacementTrack: a, trackIDToReplace: o },
                    ),
                    type: "replaceLocalTrack",
                  });
                }),
              )
            );
          }),
          (a.removeLocalTrack = function (o) {
            var t = this;
            return r("ZenonLogPromiseRejection")(
              new (e || (e = n("Promise")))(function (e, n) {
                t.$4.processEvent({
                  onError: n,
                  onSuccess: e,
                  payload: { trackID: o },
                  type: "removeLocalTrack",
                });
              }),
            );
          }),
          (a.createDataMessageSubscription = function (o, a, i, l) {
            var t = this;
            return this.$9 != null
              ? this.$9.createDataMessageSubscription(o, a, i, l)
              : r("ZenonLogPromiseRejection")(
                  new (e || (e = n("Promise")))(function (e, n) {
                    t.$4.processEvent({
                      onError: n,
                      onSuccess: e,
                      payload: {
                        dataChannelLabel: o,
                        dataChannelOptions: l,
                        messageHandler: a,
                        onSctpChannelOpenCallback: i,
                      },
                      type: "createDataMessageSubscription",
                    });
                  }),
                );
          }),
          (a.removeDataMessageSubscription = function (o, a) {
            var t = this;
            return this.$9 != null
              ? this.$9.removeDataMessageSubscription(o, a)
              : r("ZenonLogPromiseRejection")(
                  new (e || (e = n("Promise")))(function (e, n) {
                    t.$4.processEvent({
                      onError: n,
                      onSuccess: e,
                      payload: { dataChannelLabel: o, messageHandler: a },
                      type: "removeDataMessageSubscription",
                    });
                  }),
                );
          }),
          (a.sendGenericDataMessage = function (a, i, l, s) {
            var t = this;
            if (this.$9 != null) {
              if (s === o("ZenonTransportType").ZenonTransportType.SIGNALING)
                return (e || (e = n("Promise"))).resolve();
              var u = this.$9.sendDataMessage(a, i);
              return u
                ? (e || (e = n("Promise"))).resolve()
                : r("ZenonLogPromiseRejection")(
                    (e || (e = n("Promise"))).reject(
                      r("err")("ULLC sendDataMessage dropped on topic %s", a),
                    ),
                  );
            }
            return r("ZenonLogPromiseRejection")(
              new (e || (e = n("Promise")))(function (e, n) {
                var r = { data: i, recipients: l, topic: a, transportType: s };
                t.$4.processEvent({
                  onError: n,
                  onSuccess: e,
                  payload: r,
                  type: "sendGenericDataMessage",
                });
              }),
            );
          }),
          (a.registerDataMessageService = function (o, a) {
            var t = this;
            return r("ZenonLogPromiseRejection")(
              new (e || (e = n("Promise")))(function (e, n) {
                (t.$3.registerDataMessageService(o, a), e());
              }),
            );
          }),
          (a.updateStateSyncTopic = function (o, a) {
            var t = this;
            return r("ZenonLogPromiseRejection")(
              new (e || (e = n("Promise")))(function (e, n) {
                var r = { inputData: a, topic: o };
                t.$4.processEvent({
                  onError: n,
                  onSuccess: e,
                  payload: r,
                  type: "stateSyncUpdate",
                });
              }),
            );
          }),
          (a.unsubscribeFromStateSyncTopic = function (o) {
            var t = this;
            return r("ZenonLogPromiseRejection")(
              new (e || (e = n("Promise")))(function (e, n) {
                var r = { topic: o };
                t.$4.processEvent({
                  onError: n,
                  onSuccess: e,
                  payload: r,
                  type: "stateSyncUnsubscribe",
                });
              }),
            );
          }),
          (a.subscribeToRemoteVideo = function (o, a) {
            var t = this;
            return r("ZenonLogPromiseRejection")(
              new (e || (e = n("Promise")))(function (e, n) {
                var r = { includeDominantSpeaker: a, subscriptions: o };
                t.$4.processEvent({
                  onError: n,
                  onSuccess: e,
                  payload: r,
                  type: "subscriptionRequest",
                });
              }),
            );
          }),
          (a.approveParticipants = function (o) {
            var t = this;
            return r("ZenonLogPromiseRejection")(
              new (e || (e = n("Promise")))(function (e, n) {
                t.$4.processEvent({
                  onError: n,
                  onSuccess: e,
                  payload: { approvalStatus: 1, targetUsers: o },
                  type: "userApprovalRequest",
                });
              }),
            );
          }),
          (a.denyParticipants = function (o) {
            var t = this;
            return r("ZenonLogPromiseRejection")(
              new (e || (e = n("Promise")))(function (e, n) {
                t.$4.processEvent({
                  onError: n,
                  onSuccess: e,
                  payload: { approvalStatus: 0, targetUsers: o },
                  type: "userApprovalRequest",
                });
              }),
            );
          }),
          (a.forceEncodingEnabled = function (o) {
            var t = this;
            return r("ZenonLogPromiseRejection")(
              new (e || (e = n("Promise")))(function (e, n) {
                t.$4.processEvent({
                  onError: n,
                  onSuccess: e,
                  payload: { enabled: o },
                  type: "forceEncodingEnabled",
                });
              }),
            );
          }),
          (a.getConnectionState = function () {
            return this.$3.connectionState;
          }),
          (a.getSCTPDataChannelState = function (t) {
            return this.$9 != null
              ? this.$9.getDataChannelState(t)
              : this.$4
                  .getContext()
                  .peerConnectionManager.getDataChannelState(t);
          }),
          (a.getClientCallID = function () {
            return this.$1;
          }),
          (a.getSignalingID = function () {
            return this.$2;
          }),
          (a.getRemoteSignalingID = function () {
            return this.$3.collisionContext.serverInfoData;
          }),
          (a.getEncryptionKeysManagerState = function () {
            var e;
            return (e = r("ZenonE2ee").getEncryptionKeysManagerState()) != null
              ? e
              : o(
                  "ZenonEncryptionKeysManagerState",
                ).ZenonEncryptionKeysManagerState$DefaultConstructor();
          }),
          (a.checkAllRemoteUsersHaveCapability = function (t) {
            var e = this,
              n = this.$3.getRemoteConnectedParticipantIDs(),
              o = n.size > 0;
            return (
              n.forEach(function (n) {
                var a = e.$3.getUserCapabilities(n);
                try {
                  var i,
                    l = JSON.parse(a);
                  o = o && ((i = l[t]) != null ? i : !1);
                } catch (e) {
                  (r(
                    "ZenonInfraActionsLogger",
                  ).logCheckpointEmployeesTestUsersOnly({
                    checkpoint: "Failed to parse capabilities String",
                  }),
                    (o = !1));
                }
              }),
              o
            );
          }),
          (a.$14 = function () {
            var e = this;
            r("promiseDone")(
              this.createDataMessageSubscription(
                o("ZenonSCTPConstants").NODEID_NOTIFICATION_TOPIC,
                function (t) {
                  o(
                    "ZenonNodeIdNotificationHandler",
                  ).handleNodeIdNotificationMessage(t, e.$3);
                },
              ),
            );
          }),
          (a.$15 = function (t) {
            var e = this,
              a = t.getSignalingModel().getStateSyncStore();
            (a.addTopicHandler(
              c,
              (function () {
                var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (t) {
                    var n;
                    if (
                      (yield r("ZenonE2ee").processE2eeServerState(
                        t == null ? void 0 : t.data,
                      ),
                      ((n = r("ZenonE2ee").getEncryptionKeysManagerState()) ==
                      null
                        ? void 0
                        : n.sfuE2eeNegotiationState) === 0)
                    ) {
                      e.$5.log({ name: "sfuE2eeNegotiationComplete" });
                      return;
                    }
                  },
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
            ),
              r("promiseDone")(
                this.createDataMessageSubscription(
                  o("ZenonSCTPConstants").E2EE_DATA_MESSAGE_TOPIC,
                  function (e) {
                    return void r("ZenonE2ee").processE2eeMessage(e);
                  },
                ),
              ),
              r("promiseDone")(
                this.createDataMessageSubscription(
                  o("ZenonSCTPConstants").E2EE_DATA_MESSAGE_MEDIA_CHANNEL_TOPIC,
                  function (e) {
                    return void r("ZenonE2ee").processE2eeMessage(e);
                  },
                  function () {
                    return r("ZenonE2ee").onMediaDataChannelReady();
                  },
                ),
              ));
          }),
          (a.$17 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e,
                t = yield r("ZenonE2ee").getSerializedE2eeClientState();
              return (
                t != null &&
                  (t.byteLength === 0 &&
                    r("ZenonInfraActionsLogger").logCheckpoint({
                      auditId: r("ZenonAuditedCheckpointLogId")
                        .RP_ROOMS_INFRA_WWW__PLATFORM,
                      checkpoint: "E2ee client state is empty",
                    }),
                  (e = new Map()),
                  e.set(c, { data: t, version: 1 })),
                e
              );
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$12 = function () {
            o(
              "ZenonCallsModelEmitter",
            ).CallsModelEmitterInstance.emitCallsModel(this.$1, this.$3);
          }),
          (a.$20 = function () {
            if (
              o("ZenonCallsModelEmitter").CONNECTION_STATE_TO_CALL_STATE_MAP[
                this.$3.connectionState
              ] === o("ZenonCallsModelTypes").ZenonCallState.Connected
            ) {
              var e = this.$3.getConsolidatedParticipantStates();
              if (e) {
                var t = Array.from(e.values()),
                  n = t.filter(function (e) {
                    return (
                      e ===
                      o("ZenonParticipantState").ZenonParticipantState.CONNECTED
                    );
                  }),
                  r = n.length;
                r > this.$6 &&
                  (this.$5.log({
                    connectedParticipantsCount: r,
                    name: "setMaxConnectedParticipants",
                  }),
                  (this.$6 = r));
              }
            }
          }),
          (a.$16 = function (o) {
            return new (e || (e = n("Promise")))(function (e, t) {
              if (o.getConnectionState() === "Connected") e();
              else {
                r("ZenonInfraActionsLogger").logCheckpoint({
                  auditId: r("ZenonAuditedCheckpointLogId")
                    .RP_ROOMS_INFRA_WWW__PLATFORM,
                  checkpoint: "MQTT not connected, deferring call start",
                });
                var n = {
                    onMQTTStateChanged: function (r) {
                      r === "Connected" &&
                        (o.unsubscribeChannelEvents(n),
                        window.clearTimeout(a),
                        e());
                    },
                  },
                  a = window.setTimeout(function () {
                    (o.unsubscribeChannelEvents(n),
                      r("ZenonInfraActionsLogger").logCheckpoint({
                        auditId: r("ZenonAuditedCheckpointLogId")
                          .RP_ROOMS_INFRA_WWW__PLATFORM,
                        checkpoint:
                          "MQTT never connected. Current status: " +
                          o.getConnectionState(),
                      }),
                      t(r("err")("timeout")));
                  }, d);
                o.subscribeChannelEvents(n);
              }
            });
          }),
          t
        );
      })();
    l.default = p;
  },
  98,
);
