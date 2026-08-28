__d(
  "ZenonCallsModelEmitter",
  [
    "EventEmitter",
    "ZenonActorHooks",
    "ZenonCall",
    "ZenonCallsModelTypes",
    "ZenonConnectionStateTypes",
    "ZenonDismissReason",
    "ZenonParticipantState",
    "ZenonSignalingConstants",
    "filterMap",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 100,
      u = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.$ZenonCallsModelEmitter$p_1 = new Map()),
            (t.$ZenonCallsModelEmitter$p_2 = new Map()),
            (t.$ZenonCallsModelEmitter$p_3 = null),
            (t.$ZenonCallsModelEmitter$p_4 = null),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.emitCallsModel = function (t, n) {
            var e = this;
            this.$ZenonCallsModelEmitter$p_3 !== null
              ? this.$ZenonCallsModelEmitter$p_2.set(t, n)
              : (this.$ZenonCallsModelEmitter$p_5(t, n),
                (this.$ZenonCallsModelEmitter$p_3 = window.setTimeout(
                  function () {
                    (e.$ZenonCallsModelEmitter$p_2.forEach(function (t, n) {
                      e.$ZenonCallsModelEmitter$p_5(n, t);
                    }),
                      e.$ZenonCallsModelEmitter$p_2.clear(),
                      (e.$ZenonCallsModelEmitter$p_3 = null));
                  },
                  s,
                )));
          }),
          (n.getCurrentClientCallID_DO_NOT_USE = function () {
            return this.$ZenonCallsModelEmitter$p_4;
          }),
          (n.setCurrentClientCallID = function (t) {
            this.$ZenonCallsModelEmitter$p_4 = t;
          }),
          (n.$ZenonCallsModelEmitter$p_5 = function (t, n) {
            var e = this.$ZenonCallsModelEmitter$p_1.get(t),
              a = new (r("ZenonCall"))({
                callState: this.$ZenonCallsModelEmitter$p_6(n),
                clientCallId: t,
                clientEndpointId: n.clientEndpointId,
                collisionContext: babelHelpers.extends({}, n.collisionContext),
                endCallDetails: this.$ZenonCallsModelEmitter$p_7(n),
                endCallReason: this.$ZenonCallsModelEmitter$p_8(n),
                features: n.currentUserCapabilities,
                isVideoCall: this.$ZenonCallsModelEmitter$p_9(n, e),
                localCallId: n.localCallId,
                localMediaTracks: this.$ZenonCallsModelEmitter$p_10(n),
                mediaTracks: this.$ZenonCallsModelEmitter$p_11(n),
                participants: this.$ZenonCallsModelEmitter$p_12(n),
                peerConnectionConnected: n.peerConnectionConnected,
                remoteMediaTracks: this.$ZenonCallsModelEmitter$p_13(n),
                rtpReceivers_I_KNOW_WHAT_I_AM_DOING:
                  this.$ZenonCallsModelEmitter$p_14(n),
                rtpSenders_I_KNOW_WHAT_I_AM_DOING:
                  this.$ZenonCallsModelEmitter$p_15(n),
                selfParticipantID: o("ZenonActorHooks").ZenonActor.getID(),
                sharedCallId: n.getRemoteSignalingId(),
                stateSyncInputStates: this.$ZenonCallsModelEmitter$p_16(n),
                stateSyncOutputStates: this.$ZenonCallsModelEmitter$p_17(n),
                userIdToNodeIdMap: this.$ZenonCallsModelEmitter$p_18(n),
              });
            ((this.$ZenonCallsModelEmitter$p_1 = new Map(
              this.$ZenonCallsModelEmitter$p_1,
            ).set(t, a)),
              this.emitCallsModelDelegate(this.$ZenonCallsModelEmitter$p_1));
          }),
          (n.emitCallsModelDelegate = function (t) {
            this.emit("callsModelUpdate", t);
          }),
          (n.$ZenonCallsModelEmitter$p_6 = function (t) {
            return d[t.connectionState];
          }),
          (n.$ZenonCallsModelEmitter$p_7 = function (t) {
            var e;
            return (e = t.dismissDetails) == null
              ? void 0
              : e.detailedReasonFromMW;
          }),
          (n.$ZenonCallsModelEmitter$p_8 = function (t) {
            return t.dismissDetails != null &&
              t.dismissDetails.dismissReason != null
              ? o("ZenonDismissReason").dismissToEndCallReason(
                  t.dismissDetails.dismissReason,
                )
              : null;
          }),
          (n.$ZenonCallsModelEmitter$p_10 = function (t) {
            return r("filterMap")(
              this.$ZenonCallsModelEmitter$p_11(t),
              function (e) {
                return e.remote === !1;
              },
            );
          }),
          (n.$ZenonCallsModelEmitter$p_13 = function (t) {
            return r("filterMap")(
              this.$ZenonCallsModelEmitter$p_11(t),
              function (e) {
                return e.remote === !0;
              },
            );
          }),
          (n.$ZenonCallsModelEmitter$p_11 = function (t) {
            return t.getTracks();
          }),
          (n.$ZenonCallsModelEmitter$p_12 = function (t) {
            var e = t.getUserToTracksMap(),
              n = t.getTracks(),
              a = t.getExistingParticipantIds(),
              i = t.actorRepresentatives,
              l = this.$ZenonCallsModelEmitter$p_19(t),
              s = r("immutable")
                .Map()
                .withMutations(function (s) {
                  l.forEach(function (l, u) {
                    var c,
                      d,
                      m = r("immutable")
                        .Set((c = e.get(u)) == null ? void 0 : c.keys())
                        .filter(function (e) {
                          return n.has(e);
                        })
                        .toArray(),
                      p = m
                        .map(function (e) {
                          return n.get(e);
                        })
                        .filter(Boolean)
                        .map(function (e) {
                          return babelHelpers.extends({}, e);
                        });
                    s.set(u, {
                      id: u,
                      isExistingParticipant: a.has(u),
                      isVideoSubscribed: t.getIsUserVideoSubscribed(u),
                      nodeId: t.convertUserIdToNodeId(u),
                      participantType: o("ZenonCallsModelTypes")
                        .ZenonCallParticipantType.Messenger,
                      representativeID: (d = i.get(u)) != null ? d : null,
                      state: o("ZenonParticipantState").toCallParticipantState(
                        l,
                      ),
                      trackIDs: m,
                      tracks: p,
                      userCapabilities: t.getUserCapabilities(u),
                    });
                  });
                });
            return this.$ZenonCallsModelEmitter$p_20(s, t);
          }),
          (n.$ZenonCallsModelEmitter$p_20 = function (t, n) {
            var e = t.get(n.selfParticipantID);
            if (!e) return t;
            var r = babelHelpers.extends({}, e, {
              id: o("ZenonActorHooks").ZenonActor.getID(),
            });
            return t.delete(n.selfParticipantID).set(r.id, r);
          }),
          (n.$ZenonCallsModelEmitter$p_16 = function (t) {
            return r("immutable").Map(t.getStateSyncInputs());
          }),
          (n.$ZenonCallsModelEmitter$p_17 = function (t) {
            return r("immutable").Map(t.getStateSyncOutputs());
          }),
          (n.$ZenonCallsModelEmitter$p_15 = function (t) {
            var e = [].concat(t.getRtpSenders_I_KNOW_WHAT_I_AM_DOING());
            return e;
          }),
          (n.$ZenonCallsModelEmitter$p_14 = function (t) {
            var e = [].concat(t.getRtpReceivers_I_KNOW_WHAT_I_AM_DOING());
            return e;
          }),
          (n.$ZenonCallsModelEmitter$p_18 = function (t) {
            return t.getUserIdToNodeIdMap();
          }),
          (n.getCallsModel = function () {
            return this.$ZenonCallsModelEmitter$p_1;
          }),
          (n.$ZenonCallsModelEmitter$p_21 = function (t) {
            var e = t.actorRepresentatives,
              n = t.getConsolidatedParticipantStates(),
              r = new Map();
            return (
              n.forEach(function (t, n) {
                var a,
                  i = (a = e.get(n)) != null ? a : null;
                if (
                  i !== null &&
                  t <=
                    o("ZenonParticipantState").ZenonParticipantState.CONNECTED
                ) {
                  var l,
                    s,
                    u =
                      (l = r.get(i)) != null
                        ? l
                        : o("ZenonParticipantState").ZenonParticipantState
                            .UNKNOWN;
                  r.set(
                    i,
                    (s = o("ZenonParticipantState").ZenonParticipantState.cast(
                      Math.max(u, t),
                    )) != null
                      ? s
                      : o("ZenonParticipantState").ZenonParticipantState
                          .UNKNOWN,
                  );
                }
              }),
              r
            );
          }),
          (n.$ZenonCallsModelEmitter$p_19 = function (t) {
            var e = t.getConsolidatedParticipantStates(),
              n = t.duplicatedParticipantsProcessingMode;
            if (
              n ===
              o("ZenonConnectionStateTypes")
                .ZenonDuplicatedParticipantsProcessingMode.KEEP_ALL_PARTICIPANTS
            )
              return e;
            var r = this.$ZenonCallsModelEmitter$p_21(t),
              a = t.actorRepresentatives,
              i = new Map();
            return (
              e.forEach(function (e, t) {
                var l,
                  s = (l = r.get(t)) != null ? l : null;
                if (s !== null)
                  s !==
                    o("ZenonParticipantState").ZenonParticipantState
                      .CONNECTING &&
                  s !==
                    o("ZenonParticipantState").ZenonParticipantState.CONNECTED
                    ? i.set(t, s)
                    : n ===
                        o("ZenonConnectionStateTypes")
                          .ZenonDuplicatedParticipantsProcessingMode
                          .DISCONNECT_DUPLICATED &&
                      i.set(
                        t,
                        o("ZenonParticipantState").ZenonParticipantState
                          .DISCONNECTED,
                      );
                else {
                  var u,
                    c = (u = a.get(t)) != null ? u : null;
                  (c === null ||
                    e ===
                      o("ZenonParticipantState").ZenonParticipantState
                        .CONNECTING ||
                    e ===
                      o("ZenonParticipantState").ZenonParticipantState
                        .CONNECTED) &&
                    i.set(t, e);
                }
              }),
              i
            );
          }),
          (n.$ZenonCallsModelEmitter$p_9 = function (t, n) {
            return (
              (n == null ? void 0 : n.isVideoCall) ||
              this.$ZenonCallsModelEmitter$p_22(t)
            );
          }),
          (n.$ZenonCallsModelEmitter$p_22 = function (t) {
            var e = this.$ZenonCallsModelEmitter$p_11(t),
              n = !1;
            return (
              e.forEach(function (e) {
                return (n =
                  n ||
                  ((e.contentType === "video" || e.contentType === "screen") &&
                    e.enabled &&
                    e.webrtcTrack.readyState === "live" &&
                    e.trackId !== o("ZenonSignalingConstants").DEFAULT_TRACK));
              }),
              n
            );
          }),
          t
        );
      })(r("EventEmitter")),
      c = new u(),
      d = Object.freeze({
        clientInitiatedRenegotiation: (e = o("ZenonCallsModelTypes"))
          .ZenonCallState.Connected,
        creatingSdp: e.ZenonCallState.Connecting,
        init: e.ZenonCallState.New,
        peerConnectionRestarting: e.ZenonCallState.Connected,
        pendingApproval: e.ZenonCallState.PendingApproval,
        sdpNegotiated: e.ZenonCallState.Connected,
        sdpSet: e.ZenonCallState.Connecting,
        serverInitiatedRenegotiating: e.ZenonCallState.Connected,
        terminated: e.ZenonCallState.Terminated,
        waitingForIncoming: e.ZenonCallState.New,
      });
    ((l.CALLS_MODEL_EMITTER_DELAY_MS = s),
      (l.CallsModelEmitterInstance = c),
      (l.CONNECTION_STATE_TO_CALL_STATE_MAP = d));
  },
  98,
);
