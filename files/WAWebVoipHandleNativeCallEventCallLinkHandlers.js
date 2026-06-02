__d(
  "WAWebVoipHandleNativeCallEventCallLinkHandlers",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebCoreActionsODS",
    "WAWebVoipP2PConnectionManager",
    "WAWebVoipSignalingEnums",
    "WAWebVoipStackInterface",
    "WAWebVoipWaCallEnums",
    "getErrorSafe",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = 2e3,
      m = null,
      p = new Set();
    function _() {
      (m != null && (window.clearTimeout(m), (m = null)), p.clear());
    }
    async function f(t) {
      var n = r("nullthrows")(
          await o("WAWebVoipStackInterface").getVoipStackInterface(),
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
                        o("WAWebVoipWaCallEnums").CallParticipantState.Connected
                      );
                    })
                    .map(function (e) {
                      return e.participant.toString();
                    })) != null
              ? i
              : [],
          u = s.some(function (e) {
            return !p.has(e);
          });
        if (u) {
          var c = await n.getCallInfo();
          if (c !== "") {
            var _ = n.parsers.parseCallInfo(c),
              f = _.linkToken != null && _.linkToken !== "";
            f &&
              _.videoEnabled &&
              (s.forEach(function (e) {
                return p.add(e);
              }),
              m != null && window.clearTimeout(m),
              (m = window.setTimeout(function () {
                ((m = null),
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
              }, d)));
          }
        }
      }
    }
    async function g() {
      var e = r("nullthrows")(
        await o("WAWebVoipStackInterface").getVoipStackInterface(),
      );
      if (e.type === "web") {
        o("WAWebBackendApi").frontendFireAndForget("trackVoipActivity", {
          activity: "get_call_info",
          details: "grid_ranking",
        });
        var t = await e.getCallInfo();
        if (t === "") return;
        var n = e.parsers.parseCallInfo(t);
        o("WAWebBackendApi").frontendFireAndForget(
          "handleCallGridRankingChanged",
          { callInfo: n },
        );
      }
    }
    async function h(e) {
      var t = r("nullthrows")(
        await o("WAWebVoipStackInterface").getVoipStackInterface(),
      );
      if (t.type === "web") {
        var n = t.parsers.parseRxTrafficStateForPeerChangedData(e);
        o("WAWebBackendApi").frontendFireAndForget(
          "handleRxTrafficStateForPeerChanged",
          n,
        );
      }
    }
    async function y(e) {
      var t = r("nullthrows")(
        await o("WAWebVoipStackInterface").getVoipStackInterface(),
      );
      if (t.type === "web") {
        var n = t.parsers.parseNetHealthStatusChangedData(e);
        o("WAWebBackendApi").frontendFireAndForget(
          "handleNetHealthStatusChanged",
          n,
        );
      }
    }
    async function C(e) {
      var t = r("nullthrows")(
        await o("WAWebVoipStackInterface").getVoipStackInterface(),
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
        var a = await t.getCallInfo();
        if (a === "") return;
        var i = t.parsers.parseCallInfo(a);
        o("WAWebBackendApi").frontendFireAndForget(
          "handleIsInWaitingRoomChanged",
          { isInWaitingRoom: i.isInWaitingRoom },
        );
      }
    }
    async function b(e) {
      var t = r("nullthrows")(
        await o("WAWebVoipStackInterface").getVoipStackInterface(),
      );
      if (t.type === "web") {
        var n = t.parsers.parseCallLinkNackedData(e);
        (o("WAWebBackendApi").frontendFireAndForget("handleCallLinkNacked", {
          nackCode: n.nackCode,
        }),
          await t.endCall(
            o("WAWebVoipSignalingEnums").EndCallReason.Unknown,
            !1,
          ));
      }
    }
    async function v(e) {
      var t = r("nullthrows")(
        await o("WAWebVoipStackInterface").getVoipStackInterface(),
      );
      if (t.type === "web") {
        var n = t.parsers.parseCallOfferNackedData(e);
        o("WAWebBackendApi").frontendFireAndForget("handleCallOfferNacked", {
          callOfferNackedData: n,
        });
      }
    }
    function S() {
      (o("WAWebCoreActionsODS").logCallGroupJoinError(),
        o("WAWebBackendApi").frontendFireAndForget("handleLobbyNacked", {}));
    }
    function R() {
      (o("WAWebCoreActionsODS").logCallGroupJoinError(),
        o("WAWebBackendApi").frontendFireAndForget("handleLobbyTimeout", {}));
    }
    async function L() {
      o("WAWebBackendApi").frontendFireAndForget("handleWaitingRoomDenied", {});
    }
    async function E() {
      var e = r("nullthrows")(
        await o("WAWebVoipStackInterface").getVoipStackInterface(),
      );
      if (e.type === "web") {
        o("WAWebBackendApi").frontendFireAndForget("trackVoipActivity", {
          activity: "get_call_info",
          details: "waiting_room_state",
        });
        var t = await e.getCallInfo();
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
    }
    async function k(e) {
      var t = r("nullthrows")(
        await o("WAWebVoipStackInterface").getVoipStackInterface(),
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
        var a = await t.getCallInfo();
        if (a === "") {
          (o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: handleCallRejectReceived: no call info, ending",
              ])),
          ),
            await t.endCall(
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
        await t.endCall(o("WAWebVoipSignalingEnums").EndCallReason.Unknown, !1);
      }
    }
    async function I(e) {
      var t = r("nullthrows")(
        await o("WAWebVoipStackInterface").getVoipStackInterface(),
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
        await t.endCall(a, !0);
      }
    }
    async function T(e) {
      var t = r("nullthrows")(
        await o("WAWebVoipStackInterface").getVoipStackInterface(),
      );
      t.type === "web" &&
        (await new Promise(function (e) {
          return window.setTimeout(e, 2500);
        }),
        await t.endCall(
          o("WAWebVoipSignalingEnums").EndCallReason.Timeout,
          !1,
        ));
    }
    async function D(e) {
      var t = r("nullthrows")(
        await o("WAWebVoipStackInterface").getVoipStackInterface(),
      );
      if (t.type === "web") {
        var n = t.parsers.parseRelayBindsFailedData(e);
        (o("WAWebCoreActionsODS").logCallErrorTerminal(),
          await o("WAWebBackendApi").frontendSendAndReceive(
            "handleRelayBindsFailed",
            {},
          ),
          await t.endCall(
            o("WAWebVoipSignalingEnums").EndCallReason.Unknown,
            !1,
          ));
      }
    }
    async function x(e) {
      var t = r("nullthrows")(
        await o("WAWebVoipStackInterface").getVoipStackInterface(),
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
    }
    async function $(e) {
      var t = r("nullthrows")(
        await o("WAWebVoipStackInterface").getVoipStackInterface(),
      );
      if (t.type === "web") {
        var n = t.parsers.parseGroupCallReminderData(e);
        o("WAWebBackendApi").frontendFireAndForget(
          "handleGroupCallReminder",
          n,
        );
      }
    }
    ((l.resetCallLinkHandlerState = _),
      (l.handleGroupInfoChanged = f),
      (l.handleCallGridRankingChanged = g),
      (l.handleRxTrafficStateForPeerChanged = h),
      (l.handleNetHealthStatusChanged = y),
      (l.handleCallLinkStateChanged = C),
      (l.handleCallLinkNacked = b),
      (l.handleCallOfferNacked = v),
      (l.handleLobbyNacked = S),
      (l.handleLobbyTimeout = R),
      (l.handleWaitingRoomDenied = L),
      (l.handleWaitingRoomStateChanged = E),
      (l.handleCallRejectReceived = k),
      (l.handleCallFatal = I),
      (l.handleRTCPByeReceived = T),
      (l.handleRelayBindsFailed = D),
      (l.handleP2PTransportUpdate = x),
      (l.handleGroupCallReminder = $));
  },
  98,
);
