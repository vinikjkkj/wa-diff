__d(
  "WAWebVoipHandleNativeCallEventCallLinkHandlers",
  [
    "Promise",
    "WALogger",
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
      _ = 2e3,
      f = null,
      g = new Set();
    function h() {
      (f != null && (window.clearTimeout(f), (f = null)), g.clear());
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = r("nullthrows")(
              yield o("WAWebVoipStackInterface").getVoipStackInterface(),
            ),
            a = n.parsers.parseGroupInfoChangedData(t);
          if (
            (o("WAWebBackendApi").frontendFireAndForget(
              "generateCallLogFromEventGroupInfoChanged",
              { groupInfoChangedData: a },
            ),
            n.type === "web")
          ) {
            var i, l;
            o("WAWebBackendApi").frontendFireAndForget(
              "handleGroupInfoChangedGroupCall",
              { groupInfoChangedPayload: a },
            );
            var s =
                (i =
                  (l = a.CallParticipants) == null
                    ? void 0
                    : l
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
                  ? i
                  : [],
              u = s.some(function (e) {
                return !g.has(e);
              });
            if (u) {
              var c = yield n.getCallInfo();
              if (c !== "") {
                var d = n.parsers.parseCallInfo(c),
                  m = d.linkToken != null && d.linkToken !== "";
                m &&
                  d.videoEnabled &&
                  (s.forEach(function (e) {
                    return g.add(e);
                  }),
                  f != null && window.clearTimeout(f),
                  (f = window.setTimeout(function () {
                    ((f = null),
                      n.broadcastVideoState().catch(function (t) {
                        o("WALogger")
                          .WARN(
                            e ||
                              (e = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [GroupInfoChanged] broadcastVideoState failed",
                              ])),
                          )
                          .catching(r("getErrorSafe")(t));
                      }));
                  }, _)));
              }
            }
          }
        })),
        C.apply(this, arguments)
      );
    }
    function b() {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = r("nullthrows")(
            yield o("WAWebVoipStackInterface").getVoipStackInterface(),
          );
          if (e.type === "web") {
            o("WAWebBackendApi").frontendFireAndForget("trackVoipActivity", {
              activity: "get_call_info",
              details: "grid_ranking",
            });
            var t = yield e.getCallInfo();
            if (t === "") return;
            var n = e.parsers.parseCallInfo(t);
            o("WAWebBackendApi").frontendFireAndForget(
              "handleCallGridRankingChanged",
              { callInfo: n },
            );
          }
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        E.apply(this, arguments)
      );
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
              { isInWaitingRoom: i.isInWaitingRoom },
            );
          }
        })),
        I.apply(this, arguments)
      );
    }
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        D.apply(this, arguments)
      );
    }
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        $.apply(this, arguments)
      );
    }
    function P() {
      (o("WAWebCoreActionsODS").logCallGroupJoinError(),
        o("WAWebBackendApi").frontendFireAndForget("handleLobbyNacked", {}));
    }
    function N() {
      (o("WAWebCoreActionsODS").logCallGroupJoinError(),
        o("WAWebBackendApi").frontendFireAndForget("handleLobbyTimeout", {}));
    }
    function M() {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("WAWebBackendApi").frontendFireAndForget(
            "handleWaitingRoomDenied",
            {},
          );
        })),
        w.apply(this, arguments)
      );
    }
    function A() {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
                isInWaitingRoom: n.isInWaitingRoom,
                waitingRoomUsers: n.waitingRoomUsers,
                waitingRoomUsersCount: n.waitingRoomUsersCount,
              },
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
            var n = t.parsers.parseCallRejectReceivedData(e);
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: handleCallRejectReceived: callId=",
                  ", reason=",
                  "",
                ])),
              n.callId,
              n.reason,
            );
            var a = yield t.getCallInfo();
            if (a === "") {
              (o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: handleCallRejectReceived: no call info, ending",
                  ])),
              ),
                yield t.endCall(
                  o("WAWebVoipSignalingEnums").EndCallReason.Unknown,
                  !1,
                ));
              return;
            }
            var i = t.parsers.parseCallInfo(a),
              l = i.isGroupCall === !0;
            if (l) {
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: handleCallRejectReceived: skip endCall (group)",
                  ])),
              );
              return;
            }
            yield t.endCall(
              o("WAWebVoipSignalingEnums").EndCallReason.Unknown,
              !1,
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
          t.type === "web" &&
            (yield new (p || (p = n("Promise")))(function (e) {
              return window.setTimeout(e, 2500);
            }),
            yield t.endCall(
              o("WAWebVoipSignalingEnums").EndCallReason.Timeout,
              !1,
            ));
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
            var n = t.parsers.parseGroupCallReminderData(e);
            o("WAWebBackendApi").frontendFireAndForget(
              "handleGroupCallReminder",
              n,
            );
          }
        })),
        Q.apply(this, arguments)
      );
    }
    function X(e) {
      return Y.apply(this, arguments);
    }
    function Y() {
      return (
        (Y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
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
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
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
        Y.apply(this, arguments)
      );
    }
    ((l.resetCallLinkHandlerState = h),
      (l.handleGroupInfoChanged = y),
      (l.handleCallGridRankingChanged = b),
      (l.handleRxTrafficStateForPeerChanged = S),
      (l.handleNetHealthStatusChanged = L),
      (l.handleCallLinkStateChanged = k),
      (l.handleCallLinkNacked = T),
      (l.handleCallOfferNacked = x),
      (l.handleLobbyNacked = P),
      (l.handleLobbyTimeout = N),
      (l.handleWaitingRoomDenied = M),
      (l.handleWaitingRoomStateChanged = A),
      (l.handleCallRejectReceived = O),
      (l.handleCallFatal = W),
      (l.handleRTCPByeReceived = U),
      (l.handleRelayBindsFailed = H),
      (l.handleP2PTransportUpdate = z),
      (l.handleGroupCallReminder = K),
      (l.handleUserRemoved = X));
  },
  98,
);
