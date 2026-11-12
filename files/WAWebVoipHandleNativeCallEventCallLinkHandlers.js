__d(
  "WAWebVoipHandleNativeCallEventCallLinkHandlers",
  [
    "Promise",
    "WALogger",
    "WAThrottle",
    "WAWebBackendApi",
    "WAWebCallUserJourneyLogger",
    "WAWebCoreActionsODS",
    "WAWebGroupQueryJob",
    "WAWebUserUtils",
    "WAWebVoipErrorLogUpload",
    "WAWebVoipP2PConnectionManager",
    "WAWebVoipSignalingEnums",
    "WAWebVoipStackInterface",
    "WAWebVoipWaCallEnums",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "nullthrows",
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
      L = [],
      E = 2e3,
      k = "busy",
      I = 5e3,
      T = null,
      D = null,
      x = new Set();
    function $() {
      (D != null && (window.clearTimeout(D), (D = null)),
        T != null &&
          (window.clearTimeout(T),
          (T = null),
          o("WAWebBackendApi").frontendFireAndForget("stopBusyTone", {})),
        x.clear());
    }
    function P(e) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = r("nullthrows")(
              yield o("WAWebVoipStackInterface").getVoipStackInterface(),
            ),
            n = t.parsers.parseGroupInfoChangedData(e);
          if (
            (o("WAWebBackendApi").frontendFireAndForget(
              "generateCallLogFromEventGroupInfoChanged",
              { groupInfoChangedData: n },
            ),
            t.type === "web")
          ) {
            var a, i, l, u;
            (o("WAWebBackendApi").frontendFireAndForget(
              "handleGroupInfoChangedGroupCall",
              { groupInfoChangedPayload: n },
            ),
              o(
                "WAWebCallUserJourneyLogger",
              ).CallUserJourneyLogger.setGroupCall(!0));
            var c =
              (a =
                (i = n.CallParticipants) == null
                  ? void 0
                  : i.filter(function (e) {
                      return (
                        e.outcome ===
                        o("WAWebVoipWaCallEnums").CallParticipantState.Connected
                      );
                    }).length) != null
                ? a
                : 0;
            c > 0 &&
              o(
                "WAWebCallUserJourneyLogger",
              ).CallUserJourneyLogger.setConnectedParticipants(c);
            var d =
                (l =
                  (u = n.CallParticipants) == null
                    ? void 0
                    : u
                        .filter(function (e) {
                          return (
                            e.outcome ===
                            o("WAWebVoipWaCallEnums").CallParticipantState
                              .Connected
                          );
                        })
                        .map(function (e) {
                          return e.participant.toString();
                        })) != null
                  ? l
                  : L,
              m = d.some(function (e) {
                return !x.has(e);
              });
            if (m) {
              var p = yield t.getCallInfo();
              if (p !== "") {
                var _ = t.parsers.parseCallInfo(p),
                  f = _.linkToken != null && _.linkToken !== "";
                f &&
                  _.videoEnabled &&
                  (d.forEach(function (e) {
                    return x.add(e);
                  }),
                  D != null && window.clearTimeout(D),
                  (D = window.setTimeout(function () {
                    ((D = null),
                      t.broadcastVideoState().catch(function (e) {
                        o("WALogger")
                          .WARN(
                            s ||
                              (s = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [GroupInfoChanged] broadcastVideoState failed",
                              ])),
                          )
                          .catching(r("getErrorSafe")(e));
                      }));
                  }, E)));
              }
            }
          }
        })),
        N.apply(this, arguments)
      );
    }
    var M = 50,
      w = o("WAThrottle").throttle(
        function () {
          O().catch(function (t) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: handleCallGridRankingChanged: dispatch failed",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("voip-grid-ranking-dispatch-failed");
          });
        },
        M,
        { leading: !0, trailing: !0 },
      ),
      A = 0;
    function F() {
      w();
    }
    function O() {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = ++A,
            t = r("nullthrows")(
              yield o("WAWebVoipStackInterface").getVoipStackInterface(),
            );
          if (t.type === "web") {
            o("WAWebBackendApi").frontendFireAndForget("trackVoipActivity", {
              activity: "get_call_info",
              details: "grid_ranking",
            });
            var n = yield t.getCallInfo();
            if (n !== "" && e === A) {
              var a = t.parsers.parseCallInfo(n);
              o("WAWebBackendApi").frontendFireAndForget(
                "handleCallGridRankingChanged",
                { callInfo: a },
              );
            }
          }
        })),
        B.apply(this, arguments)
      );
    }
    function W(e) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = r("nullthrows")(
            yield o("WAWebVoipStackInterface").getVoipStackInterface(),
          );
          if (t.type === "web") {
            var n = t.parsers.parseRxTrafficStateForPeerChangedData(e);
            o("WAWebBackendApi").frontendFireAndForget(
              "handleRxTrafficStateForPeerChanged",
              n,
            );
          }
        })),
        q.apply(this, arguments)
      );
    }
    function U(e) {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = r("nullthrows")(
            yield o("WAWebVoipStackInterface").getVoipStackInterface(),
          );
          if (t.type === "web") {
            var n = t.parsers.parseNetHealthStatusChangedData(e);
            o("WAWebBackendApi").frontendFireAndForget(
              "handleNetHealthStatusChanged",
              n,
            );
          }
        })),
        V.apply(this, arguments)
      );
    }
    function H(e) {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = r("nullthrows")(
            yield o("WAWebVoipStackInterface").getVoipStackInterface(),
          );
          if (t.type === "web") {
            var n = t.parsers.parseCallLinkStateChangedData(e);
            (o("WAWebBackendApi").frontendFireAndForget(
              "handleCallLinkStateChanged",
              n,
            ),
              o("WAWebBackendApi").frontendFireAndForget("trackVoipActivity", {
                activity: "get_call_info",
                details: "call_link_state",
              }));
            var a = yield t.getCallInfo();
            if (a === "") return;
            var i = t.parsers.parseCallInfo(a);
            o("WAWebBackendApi").frontendFireAndForget(
              "handleIsInWaitingRoomChanged",
              {
                isInWaitingRoom: i.isInWaitingRoom,
                isWaitingRoomEnabled: i.isWaitingRoomEnabled,
                isWaitingRoomAdmin: i.isWaitingRoomAdmin,
                waitingRoomFilter: i.waitingRoomFilter,
              },
            );
          }
        })),
        G.apply(this, arguments)
      );
    }
    function z(e) {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = r("nullthrows")(
            yield o("WAWebVoipStackInterface").getVoipStackInterface(),
          );
          if (t.type === "web") {
            var n = t.parsers.parseCallLinkNackedData(e);
            (o("WAWebBackendApi").frontendFireAndForget(
              "handleCallLinkNacked",
              { nackCode: n.nackCode },
            ),
              yield t.endCall(
                o("WAWebVoipSignalingEnums").EndCallReason.Unknown,
                !1,
              ));
          }
        })),
        j.apply(this, arguments)
      );
    }
    function K(e) {
      return Q.apply(this, arguments);
    }
    function Q() {
      return (
        (Q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = r("nullthrows")(
            yield o("WAWebVoipStackInterface").getVoipStackInterface(),
          );
          if (t.type === "web") {
            var n = t.parsers.parseCallOfferNackedData(e);
            o("WAWebBackendApi").frontendFireAndForget(
              "handleCallOfferNacked",
              { callOfferNackedData: n },
            );
          } else if (t.type === "windows")
            try {
              var a,
                i = JSON.parse(e),
                l = (a = i == null ? void 0 : i.GroupJid) != null ? a : null;
              typeof l == "string" &&
                l !== "" &&
                (o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: handleCallOfferNacked: refreshing group info after membership mismatch (412)",
                    ])),
                ),
                o("WAWebGroupQueryJob")
                  .queryAndUpdateGroupMetadataById({
                    id: o("WAWebWidFactory").createWid(l),
                  })
                  .catch(function (e) {
                    o("WALogger")
                      .ERROR(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: handleCallOfferNacked: group info refresh failed",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e))
                      .sendLogs("voip-refresh-group-info-on-mismatch-windows");
                  }));
            } catch (e) {
              o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: handleCallOfferNacked: malformed payload or JID",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("voip-refresh-group-info-on-mismatch-windows");
            }
        })),
        Q.apply(this, arguments)
      );
    }
    function X() {
      (o("WAWebCoreActionsODS").logCallGroupJoinError(),
        o("WAWebBackendApi").frontendFireAndForget("handleLobbyNacked", {}));
    }
    function Y() {
      (o("WAWebCoreActionsODS").logCallGroupJoinError(),
        o("WAWebBackendApi").frontendFireAndForget("handleLobbyTimeout", {}));
    }
    function J() {
      return Z.apply(this, arguments);
    }
    function Z() {
      return (
        (Z = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("WAWebBackendApi").frontendFireAndForget(
            "handleWaitingRoomDenied",
            {},
          );
        })),
        Z.apply(this, arguments)
      );
    }
    function ee() {
      return te.apply(this, arguments);
    }
    function te() {
      return (
        (te = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = r("nullthrows")(
            yield o("WAWebVoipStackInterface").getVoipStackInterface(),
          );
          if (e.type === "web") {
            o("WAWebBackendApi").frontendFireAndForget("trackVoipActivity", {
              activity: "get_call_info",
              details: "waiting_room_state",
            });
            var t = yield e.getCallInfo();
            if (t === "") return;
            var n = e.parsers.parseCallInfo(t);
            o("WAWebBackendApi").frontendFireAndForget(
              "handleWaitingRoomStateChanged",
              {
                isWaitingRoomEnabled: n.isWaitingRoomEnabled,
                isWaitingRoomAdmin: n.isWaitingRoomAdmin,
                waitingRoomFilter: n.waitingRoomFilter,
                isInWaitingRoom: n.isInWaitingRoom,
                waitingRoomUsers: n.waitingRoomUsers,
                waitingRoomUsersCount: n.waitingRoomUsersCount,
              },
            );
          }
        })),
        te.apply(this, arguments)
      );
    }
    function ne(e) {
      return re.apply(this, arguments);
    }
    function re() {
      return (
        (re = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = r("nullthrows")(
            yield o("WAWebVoipStackInterface").getVoipStackInterface(),
          );
          if (t.type === "web") {
            var a = t.parsers.parseCallRejectReceivedData(e);
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: handleCallRejectReceived: callId=",
                  ", reason=",
                  "",
                ])),
              a.callId,
              a.reason,
            );
            var i = yield t.getCallInfo();
            if (i === "") {
              (o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: handleCallRejectReceived: no call info, ending",
                  ])),
              ),
                yield t.endCall(
                  o("WAWebVoipSignalingEnums").EndCallReason.Unknown,
                  !1,
                ));
              return;
            }
            var l = t.parsers.parseCallInfo(i),
              s = l.isGroupCall === !0;
            if (s) {
              o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: handleCallRejectReceived: skip endCall (group)",
                  ])),
              );
              return;
            }
            if (a.reason === k) {
              (o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: handleCallRejectReceived: peer busy, showing busy UI",
                  ])),
              ),
                o("WAWebBackendApi").frontendFireAndForget("setPeerBusy", {}),
                o("WAWebBackendApi").frontendFireAndForget("playBusyTone", {}),
                T != null && window.clearTimeout(T));
              var u = a.callId;
              T = window.setTimeout(function () {
                ((T = null),
                  o("WAWebBackendApi").frontendFireAndForget(
                    "stopBusyTone",
                    {},
                  ),
                  n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                    try {
                      var e = yield t.getCallInfo();
                      if (e === "") {
                        o("WALogger").LOG(
                          g ||
                            (g = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: handleCallRejectReceived: no active call at busy timeout, skipping endCall for callId=",
                              "",
                            ])),
                          u,
                        );
                        return;
                      }
                      var n = t.parsers.parseCallInfo(e).callId;
                      if (n !== u) {
                        o("WALogger").LOG(
                          h ||
                            (h = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: handleCallRejectReceived: active call changed, skipping endCall for callId=",
                              "",
                            ])),
                          u,
                        );
                        return;
                      }
                      (o("WALogger").LOG(
                        y ||
                          (y = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: handleCallRejectReceived: busy tone timeout, ending callId=",
                            "",
                          ])),
                        u,
                      ),
                        yield t.endCall(
                          o("WAWebVoipSignalingEnums").EndCallReason.Unknown,
                          !1,
                        ));
                    } catch (e) {
                      o("WALogger")
                        .ERROR(
                          C ||
                            (C = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: handleCallRejectReceived: busy timeout callback failed",
                            ])),
                        )
                        .catching(r("getErrorSafe")(e))
                        .sendLogs("voip-busy-timeout-failed");
                    }
                  })());
              }, I);
              return;
            }
            yield t.endCall(
              o("WAWebVoipSignalingEnums").EndCallReason.Unknown,
              !1,
            );
          }
        })),
        re.apply(this, arguments)
      );
    }
    function oe(e) {
      return ae.apply(this, arguments);
    }
    function ae() {
      return (
        (ae = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = r("nullthrows")(
            yield o("WAWebVoipStackInterface").getVoipStackInterface(),
          );
          if (t.type === "web") {
            var n = t.parsers.parseCallFatalData(e);
            (o("WALogger").LOG(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: handleCallFatal: reason_code=",
                  "",
                ])),
              n.reasonCode,
            ),
              n.reasonCode ===
                o("WAWebVoipWaCallEnums").CallFatalReasonCode.AudioInitError &&
                o("WAWebVoipErrorLogUpload").maybeUploadAudioRecordFatalLogs(),
              o("WAWebCoreActionsODS").logCallErrorTerminal());
            var a =
              n.reasonCode ===
                o("WAWebVoipWaCallEnums").CallFatalReasonCode.TxTimeout ||
              n.reasonCode ===
                o("WAWebVoipWaCallEnums").CallFatalReasonCode.RxTimeout
                ? o("WAWebVoipSignalingEnums").EndCallReason.Timeout
                : o("WAWebVoipSignalingEnums").EndCallReason.Unknown;
            yield t.endCall(a, !0);
          }
        })),
        ae.apply(this, arguments)
      );
    }
    function ie(e) {
      return le.apply(this, arguments);
    }
    function le() {
      return (
        (le = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = r("nullthrows")(
            yield o("WAWebVoipStackInterface").getVoipStackInterface(),
          );
          t.type === "web" &&
            (yield new (R || (R = n("Promise")))(function (e) {
              return window.setTimeout(e, 2500);
            }),
            yield t.endCall(
              o("WAWebVoipSignalingEnums").EndCallReason.Timeout,
              !1,
            ));
        })),
        le.apply(this, arguments)
      );
    }
    function se(e) {
      return ue.apply(this, arguments);
    }
    function ue() {
      return (
        (ue = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = r("nullthrows")(
            yield o("WAWebVoipStackInterface").getVoipStackInterface(),
          );
          if (t.type === "web") {
            var n = t.parsers.parseRelayBindsFailedData(e);
            (o("WAWebCoreActionsODS").logCallErrorTerminal(),
              yield o("WAWebBackendApi").frontendSendAndReceive(
                "handleRelayBindsFailed",
                {},
              ),
              yield t.endCall(
                o("WAWebVoipSignalingEnums").EndCallReason.Unknown,
                !1,
              ));
          }
        })),
        ue.apply(this, arguments)
      );
    }
    function ce(e) {
      return de.apply(this, arguments);
    }
    function de() {
      return (
        (de = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = r("nullthrows")(
            yield o("WAWebVoipStackInterface").getVoipStackInterface(),
          );
          if (t.type === "web") {
            var n = t.parsers.parseP2PTransportUpdateData(e);
            o("WAWebVoipP2PConnectionManager").handleRemoteCredentials({
              ufrag: n.ice_ufrag,
              pwd: n.ice_pwd,
              algorithm: n.cert_algorithm,
              fingerprint: n.cert_fingerprint,
            });
            for (var a of n.candidates)
              o("WAWebVoipP2PConnectionManager").handleRemoteCandidate(a);
          }
        })),
        de.apply(this, arguments)
      );
    }
    function me(e) {
      return pe.apply(this, arguments);
    }
    function pe() {
      return (
        (pe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = r("nullthrows")(
            yield o("WAWebVoipStackInterface").getVoipStackInterface(),
          );
          if (t.type === "web") {
            var n = t.parsers.parseGroupCallReminderData(e);
            o("WAWebBackendApi").frontendFireAndForget(
              "handleGroupCallReminder",
              n,
            );
          }
        })),
        pe.apply(this, arguments)
      );
    }
    function _e(e) {
      return fe.apply(this, arguments);
    }
    function fe() {
      return (
        (fe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = r("nullthrows")(
            yield o("WAWebVoipStackInterface").getVoipStackInterface(),
          );
          if (t.type === "web") {
            var n = t.parsers.parseUserRemovedData(e);
            if (o("WAWebUserUtils").isMeAccount(n.removeeJid)) {
              var a,
                i = n.removerJid,
                l = (a = i == null ? void 0 : i.toString()) != null ? a : null;
              (o("WALogger").LOG(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: User was removed from call by ",
                    "",
                  ])),
                l != null ? l : "unknown",
              ),
                o("WAWebBackendApi").frontendFireAndForget(
                  "showUserRemovedDialog",
                  { removerJid: l },
                ),
                yield t.endCall(
                  o("WAWebVoipSignalingEnums").EndCallReason.Unknown,
                  !0,
                ));
            } else {
              var s = n.removeeJid;
              (o("WALogger").LOG(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: Participant ",
                    " was removed from call",
                  ])),
                s.toString(),
              ),
                o("WAWebBackendApi").frontendFireAndForget(
                  "showParticipantRemovedToast",
                  { removeeJid: s.toString() },
                ));
            }
          }
        })),
        fe.apply(this, arguments)
      );
    }
    ((l.resetCallLinkHandlerState = $),
      (l.handleGroupInfoChanged = P),
      (l.handleCallGridRankingChanged = F),
      (l.handleRxTrafficStateForPeerChanged = W),
      (l.handleNetHealthStatusChanged = U),
      (l.handleCallLinkStateChanged = H),
      (l.handleCallLinkNacked = z),
      (l.handleCallOfferNacked = K),
      (l.handleLobbyNacked = X),
      (l.handleLobbyTimeout = Y),
      (l.handleWaitingRoomDenied = J),
      (l.handleWaitingRoomStateChanged = ee),
      (l.handleCallRejectReceived = ne),
      (l.handleCallFatal = oe),
      (l.handleRTCPByeReceived = ie),
      (l.handleRelayBindsFailed = se),
      (l.handleP2PTransportUpdate = ce),
      (l.handleGroupCallReminder = me),
      (l.handleUserRemoved = _e));
  },
  98,
);
