__d(
  "WAWebVoipHandleNativeCallEventCallLinkHandlers",
  [
    "Promise",
    "WALogger",
    "WAThrottle",
    "WAWebBackendApi",
    "WAWebCoreActionsODS",
    "WAWebUserPrefsMeUser",
    "WAWebVoipP2PConnectionManager",
    "WAWebVoipSignalingEnums",
    "WAWebVoipStackInterface",
    "WAWebVoipWaCallEnums",
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
      b = [],
      v = 2e3,
      S = "busy",
      R = 5e3,
      L = null,
      E = null,
      k = new Set();
    function I() {
      (E != null && (window.clearTimeout(E), (E = null)),
        L != null &&
          (window.clearTimeout(L),
          (L = null),
          o("WAWebBackendApi").frontendFireAndForget("stopBusyTone", {})),
        k.clear());
    }
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            var a, i;
            o("WAWebBackendApi").frontendFireAndForget(
              "handleGroupInfoChangedGroupCall",
              { groupInfoChangedPayload: n },
            );
            var l =
                (a =
                  (i = n.CallParticipants) == null
                    ? void 0
                    : i
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
                  ? a
                  : b,
              u = l.some(function (e) {
                return !k.has(e);
              });
            if (u) {
              var c = yield t.getCallInfo();
              if (c !== "") {
                var d = t.parsers.parseCallInfo(c),
                  m = d.linkToken != null && d.linkToken !== "";
                m &&
                  d.videoEnabled &&
                  (l.forEach(function (e) {
                    return k.add(e);
                  }),
                  E != null && window.clearTimeout(E),
                  (E = window.setTimeout(function () {
                    ((E = null),
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
                  }, v)));
              }
            }
          }
        })),
        D.apply(this, arguments)
      );
    }
    var x = 50,
      $ = o("WAThrottle").throttle(
        function () {
          M().catch(function (t) {
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
        x,
        { leading: !0, trailing: !0 },
      ),
      P = 0;
    function N() {
      $();
    }
    function M() {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = ++P,
            t = r("nullthrows")(
              yield o("WAWebVoipStackInterface").getVoipStackInterface(),
            );
          if (t.type === "web") {
            o("WAWebBackendApi").frontendFireAndForget("trackVoipActivity", {
              activity: "get_call_info",
              details: "grid_ranking",
            });
            var n = yield t.getCallInfo();
            if (n !== "" && e === P) {
              var a = t.parsers.parseCallInfo(n);
              o("WAWebBackendApi").frontendFireAndForget(
                "handleCallGridRankingChanged",
                { callInfo: a },
              );
            }
          }
        })),
        w.apply(this, arguments)
      );
    }
    function A(e) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        F.apply(this, arguments)
      );
    }
    function O(e) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            var n = t.parsers.parseCallOfferNackedData(e);
            o("WAWebBackendApi").frontendFireAndForget(
              "handleCallOfferNacked",
              { callOfferNackedData: n },
            );
          }
        })),
        G.apply(this, arguments)
      );
    }
    function z() {
      (o("WAWebCoreActionsODS").logCallGroupJoinError(),
        o("WAWebBackendApi").frontendFireAndForget("handleLobbyNacked", {}));
    }
    function j() {
      (o("WAWebCoreActionsODS").logCallGroupJoinError(),
        o("WAWebBackendApi").frontendFireAndForget("handleLobbyTimeout", {}));
    }
    function K() {
      return Q.apply(this, arguments);
    }
    function Q() {
      return (
        (Q = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("WAWebBackendApi").frontendFireAndForget(
            "handleWaitingRoomDenied",
            {},
          );
        })),
        Q.apply(this, arguments)
      );
    }
    function X() {
      return Y.apply(this, arguments);
    }
    function Y() {
      return (
        (Y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
        Y.apply(this, arguments)
      );
    }
    function J(e) {
      return Z.apply(this, arguments);
    }
    function Z() {
      return (
        (Z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = r("nullthrows")(
            yield o("WAWebVoipStackInterface").getVoipStackInterface(),
          );
          if (t.type === "web") {
            var a = t.parsers.parseCallRejectReceivedData(e);
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
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
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
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
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: handleCallRejectReceived: skip endCall (group)",
                  ])),
              );
              return;
            }
            if (a.reason === S) {
              (o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: handleCallRejectReceived: peer busy, showing busy UI",
                  ])),
              ),
                o("WAWebBackendApi").frontendFireAndForget("setPeerBusy", {}),
                o("WAWebBackendApi").frontendFireAndForget("playBusyTone", {}),
                L != null && window.clearTimeout(L));
              var h = a.callId;
              L = window.setTimeout(function () {
                ((L = null),
                  o("WAWebBackendApi").frontendFireAndForget(
                    "stopBusyTone",
                    {},
                  ),
                  n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                    try {
                      var e = yield t.getCallInfo();
                      if (e === "") {
                        o("WALogger").LOG(
                          p ||
                            (p = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: handleCallRejectReceived: no active call at busy timeout, skipping endCall for callId=",
                              "",
                            ])),
                          h,
                        );
                        return;
                      }
                      var n = t.parsers.parseCallInfo(e).callId;
                      if (n !== h) {
                        o("WALogger").LOG(
                          _ ||
                            (_ = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: handleCallRejectReceived: active call changed, skipping endCall for callId=",
                              "",
                            ])),
                          h,
                        );
                        return;
                      }
                      (o("WALogger").LOG(
                        f ||
                          (f = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: handleCallRejectReceived: busy tone timeout, ending callId=",
                            "",
                          ])),
                        h,
                      ),
                        yield t.endCall(
                          o("WAWebVoipSignalingEnums").EndCallReason.Unknown,
                          !1,
                        ));
                    } catch (e) {
                      o("WALogger")
                        .ERROR(
                          g ||
                            (g = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: handleCallRejectReceived: busy timeout callback failed",
                            ])),
                        )
                        .catching(r("getErrorSafe")(e))
                        .sendLogs("voip-busy-timeout-failed");
                    }
                  })());
              }, R);
              return;
            }
            yield t.endCall(
              o("WAWebVoipSignalingEnums").EndCallReason.Unknown,
              !1,
            );
          }
        })),
        Z.apply(this, arguments)
      );
    }
    function ee(e) {
      return te.apply(this, arguments);
    }
    function te() {
      return (
        (te = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = r("nullthrows")(
            yield o("WAWebVoipStackInterface").getVoipStackInterface(),
          );
          if (t.type === "web") {
            var n = t.parsers.parseCallFatalData(e);
            o("WAWebCoreActionsODS").logCallErrorTerminal();
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
          t.type === "web" &&
            (yield new (C || (C = n("Promise")))(function (e) {
              return window.setTimeout(e, 2500);
            }),
            yield t.endCall(
              o("WAWebVoipSignalingEnums").EndCallReason.Timeout,
              !1,
            ));
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
            var n = t.parsers.parseGroupCallReminderData(e);
            o("WAWebBackendApi").frontendFireAndForget(
              "handleGroupCallReminder",
              n,
            );
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
            var n = t.parsers.parseUserRemovedData(e);
            if (o("WAWebUserPrefsMeUser").isMeAccount(n.removeeJid)) {
              var a,
                i = n.removerJid,
                l = (a = i == null ? void 0 : i.toString()) != null ? a : null;
              (o("WALogger").LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
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
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
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
        de.apply(this, arguments)
      );
    }
    ((l.resetCallLinkHandlerState = I),
      (l.handleGroupInfoChanged = T),
      (l.handleCallGridRankingChanged = N),
      (l.handleRxTrafficStateForPeerChanged = A),
      (l.handleNetHealthStatusChanged = O),
      (l.handleCallLinkStateChanged = W),
      (l.handleCallLinkNacked = U),
      (l.handleCallOfferNacked = H),
      (l.handleLobbyNacked = z),
      (l.handleLobbyTimeout = j),
      (l.handleWaitingRoomDenied = K),
      (l.handleWaitingRoomStateChanged = X),
      (l.handleCallRejectReceived = J),
      (l.handleCallFatal = ee),
      (l.handleRTCPByeReceived = ne),
      (l.handleRelayBindsFailed = oe),
      (l.handleP2PTransportUpdate = ie),
      (l.handleGroupCallReminder = se),
      (l.handleUserRemoved = ce));
  },
  98,
);
