__d(
  "WAWebVoipHandleNativeCallEventCallLinkHandlers",
  [
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
      R = [],
      L = 2e3,
      E = "busy",
      k = 5e3,
      I = null,
      T = null,
      D = new Set();
    function x() {
      (T != null && (window.clearTimeout(T), (T = null)),
        I != null &&
          (window.clearTimeout(I),
          (I = null),
          o("WAWebBackendApi").frontendFireAndForget("stopBusyTone", {})),
        D.clear());
    }
    async function $(t) {
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
        var i, l, s, u;
        (o("WAWebBackendApi").frontendFireAndForget(
          "handleGroupInfoChangedGroupCall",
          { groupInfoChangedPayload: a },
        ),
          o("WAWebCallUserJourneyLogger").CallUserJourneyLogger.setGroupCall(
            !0,
          ));
        var c =
          (i =
            (l = a.CallParticipants) == null
              ? void 0
              : l.filter(function (e) {
                  return (
                    e.outcome ===
                    o("WAWebVoipWaCallEnums").CallParticipantState.Connected
                  );
                }).length) != null
            ? i
            : 0;
        c > 0 &&
          o(
            "WAWebCallUserJourneyLogger",
          ).CallUserJourneyLogger.setConnectedParticipants(c);
        var d =
            (s =
              (u = a.CallParticipants) == null
                ? void 0
                : u
                    .filter(function (e) {
                      return (
                        e.outcome ===
                        o("WAWebVoipWaCallEnums").CallParticipantState.Connected
                      );
                    })
                    .map(function (e) {
                      return e.participant.toString();
                    })) != null
              ? s
              : R,
          m = d.some(function (e) {
            return !D.has(e);
          });
        if (m) {
          var p = await n.getCallInfo();
          if (p !== "") {
            var _ = n.parsers.parseCallInfo(p),
              f = _.linkToken != null && _.linkToken !== "";
            f &&
              _.videoEnabled &&
              (d.forEach(function (e) {
                return D.add(e);
              }),
              T != null && window.clearTimeout(T),
              (T = window.setTimeout(function () {
                ((T = null),
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
              }, L)));
          }
        }
      }
    }
    var P = 50,
      N = o("WAThrottle").throttle(
        function () {
          A().catch(function (e) {
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: handleCallGridRankingChanged: dispatch failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("voip-grid-ranking-dispatch-failed");
          });
        },
        P,
        { leading: !0, trailing: !0 },
      ),
      M = 0;
    function w() {
      N();
    }
    async function A() {
      var e = ++M,
        t = r("nullthrows")(
          await o("WAWebVoipStackInterface").getVoipStackInterface(),
        );
      if (t.type === "web") {
        o("WAWebBackendApi").frontendFireAndForget("trackVoipActivity", {
          activity: "get_call_info",
          details: "grid_ranking",
        });
        var n = await t.getCallInfo();
        if (n !== "" && e === M) {
          var a = t.parsers.parseCallInfo(n);
          o("WAWebBackendApi").frontendFireAndForget(
            "handleCallGridRankingChanged",
            { callInfo: a },
          );
        }
      }
    }
    async function F(e) {
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
    async function O(e) {
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
    async function B(e) {
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
          {
            isInWaitingRoom: i.isInWaitingRoom,
            isWaitingRoomEnabled: i.isWaitingRoomEnabled,
            isWaitingRoomAdmin: i.isWaitingRoomAdmin,
            waitingRoomFilter: i.waitingRoomFilter,
          },
        );
      }
    }
    async function W(e) {
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
    async function q(e) {
      var t = r("nullthrows")(
        await o("WAWebVoipStackInterface").getVoipStackInterface(),
      );
      if (t.type === "web") {
        var n = t.parsers.parseCallOfferNackedData(e);
        o("WAWebBackendApi").frontendFireAndForget("handleCallOfferNacked", {
          callOfferNackedData: n,
        });
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
    }
    function U() {
      (o("WAWebCoreActionsODS").logCallGroupJoinError(),
        o("WAWebBackendApi").frontendFireAndForget("handleLobbyNacked", {}));
    }
    function V() {
      (o("WAWebCoreActionsODS").logCallGroupJoinError(),
        o("WAWebBackendApi").frontendFireAndForget("handleLobbyTimeout", {}));
    }
    async function H() {
      o("WAWebBackendApi").frontendFireAndForget("handleWaitingRoomDenied", {});
    }
    async function G() {
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
            waitingRoomFilter: n.waitingRoomFilter,
            isInWaitingRoom: n.isInWaitingRoom,
            waitingRoomUsers: n.waitingRoomUsers,
            waitingRoomUsersCount: n.waitingRoomUsersCount,
          },
        );
      }
    }
    async function z(e) {
      var t = r("nullthrows")(
        await o("WAWebVoipStackInterface").getVoipStackInterface(),
      );
      if (t.type === "web") {
        var n = t.parsers.parseCallRejectReceivedData(e);
        o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
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
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
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
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "voip: handleCallRejectReceived: skip endCall (group)",
              ])),
          );
          return;
        }
        if (n.reason === E) {
          (o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "voip: handleCallRejectReceived: peer busy, showing busy UI",
              ])),
          ),
            o("WAWebBackendApi").frontendFireAndForget("setPeerBusy", {}),
            o("WAWebBackendApi").frontendFireAndForget("playBusyTone", {}),
            I != null && window.clearTimeout(I));
          var s = n.callId;
          I = window.setTimeout(function () {
            ((I = null),
              o("WAWebBackendApi").frontendFireAndForget("stopBusyTone", {}),
              (async function () {
                try {
                  var e = await t.getCallInfo();
                  if (e === "") {
                    o("WALogger").LOG(
                      g ||
                        (g = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: handleCallRejectReceived: no active call at busy timeout, skipping endCall for callId=",
                          "",
                        ])),
                      s,
                    );
                    return;
                  }
                  var n = t.parsers.parseCallInfo(e).callId;
                  if (n !== s) {
                    o("WALogger").LOG(
                      h ||
                        (h = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: handleCallRejectReceived: active call changed, skipping endCall for callId=",
                          "",
                        ])),
                      s,
                    );
                    return;
                  }
                  (o("WALogger").LOG(
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: handleCallRejectReceived: busy tone timeout, ending callId=",
                        "",
                      ])),
                    s,
                  ),
                    await t.endCall(
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
          }, k);
          return;
        }
        await t.endCall(o("WAWebVoipSignalingEnums").EndCallReason.Unknown, !1);
      }
    }
    async function j(e) {
      var t = r("nullthrows")(
        await o("WAWebVoipStackInterface").getVoipStackInterface(),
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
        await t.endCall(a, !0);
      }
    }
    async function K(e) {
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
    async function Q(e) {
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
    async function X(e) {
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
    async function Y(e) {
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
    async function J(e) {
      var t = r("nullthrows")(
        await o("WAWebVoipStackInterface").getVoipStackInterface(),
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
            await t.endCall(
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
    }
    ((l.resetCallLinkHandlerState = x),
      (l.handleGroupInfoChanged = $),
      (l.handleCallGridRankingChanged = w),
      (l.handleRxTrafficStateForPeerChanged = F),
      (l.handleNetHealthStatusChanged = O),
      (l.handleCallLinkStateChanged = B),
      (l.handleCallLinkNacked = W),
      (l.handleCallOfferNacked = q),
      (l.handleLobbyNacked = U),
      (l.handleLobbyTimeout = V),
      (l.handleWaitingRoomDenied = H),
      (l.handleWaitingRoomStateChanged = G),
      (l.handleCallRejectReceived = z),
      (l.handleCallFatal = j),
      (l.handleRTCPByeReceived = K),
      (l.handleRelayBindsFailed = Q),
      (l.handleP2PTransportUpdate = X),
      (l.handleGroupCallReminder = Y),
      (l.handleUserRemoved = J));
  },
  98,
);
