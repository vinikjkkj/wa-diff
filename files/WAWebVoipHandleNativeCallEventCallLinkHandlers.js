__d(
  "WAWebVoipHandleNativeCallEventCallLinkHandlers",
  [
    "Promise",
    "WALogger",
    "WAWebBackendApi",
    "WAWebCoreActionsODS",
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
      m = 2e3,
      p = null,
      _ = new Set();
    function f() {
      (p != null && (window.clearTimeout(p), (p = null)), _.clear());
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
                return !_.has(e);
              });
            if (u) {
              var c = yield n.getCallInfo();
              if (c !== "") {
                var d = n.parsers.parseCallInfo(c),
                  f = d.linkToken != null && d.linkToken !== "";
                f &&
                  d.videoEnabled &&
                  (s.forEach(function (e) {
                    return _.add(e);
                  }),
                  p != null && window.clearTimeout(p),
                  (p = window.setTimeout(function () {
                    ((p = null),
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
                  }, m)));
              }
            }
          }
        })),
        h.apply(this, arguments)
      );
    }
    function y() {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            var n = t.parsers.parseNetHealthStatusChangedData(e);
            o("WAWebBackendApi").frontendFireAndForget(
              "handleNetHealthStatusChanged",
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
            var n = t.parsers.parseCallOfferNackedData(e);
            o("WAWebBackendApi").frontendFireAndForget(
              "handleCallOfferNacked",
              { callOfferNackedData: n },
            );
          }
        })),
        D.apply(this, arguments)
      );
    }
    function x() {
      o("WAWebBackendApi").frontendFireAndForget("handleLobbyNacked", {});
    }
    function $() {
      o("WAWebBackendApi").frontendFireAndForget("handleLobbyTimeout", {});
    }
    function P() {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("WAWebBackendApi").frontendFireAndForget(
            "handleWaitingRoomDenied",
            {},
          );
        })),
        N.apply(this, arguments)
      );
    }
    function M() {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
          t.type === "web" &&
            (yield new (d || (d = n("Promise")))(function (e) {
              return window.setTimeout(e, 2500);
            }),
            yield t.endCall(
              o("WAWebVoipSignalingEnums").EndCallReason.Timeout,
              !1,
            ));
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
            var n = t.parsers.parseGroupCallReminderData(e);
            o("WAWebBackendApi").frontendFireAndForget(
              "handleGroupCallReminder",
              n,
            );
          }
        })),
        j.apply(this, arguments)
      );
    }
    ((l.resetCallLinkHandlerState = f),
      (l.handleGroupInfoChanged = g),
      (l.handleCallGridRankingChanged = y),
      (l.handleRxTrafficStateForPeerChanged = b),
      (l.handleNetHealthStatusChanged = S),
      (l.handleCallLinkStateChanged = L),
      (l.handleCallLinkNacked = k),
      (l.handleCallOfferNacked = T),
      (l.handleLobbyNacked = x),
      (l.handleLobbyTimeout = $),
      (l.handleWaitingRoomDenied = P),
      (l.handleWaitingRoomStateChanged = M),
      (l.handleCallRejectReceived = A),
      (l.handleCallFatal = O),
      (l.handleRTCPByeReceived = W),
      (l.handleRelayBindsFailed = U),
      (l.handleP2PTransportUpdate = H),
      (l.handleGroupCallReminder = z));
  },
  98,
);
