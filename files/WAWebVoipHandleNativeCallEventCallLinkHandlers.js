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
    "WAWebUserPrefsMeUser",
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
    function $(e) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                  : R,
              m = d.some(function (e) {
                return !D.has(e);
              });
            if (m) {
              var p = yield t.getCallInfo();
              if (p !== "") {
                var _ = t.parsers.parseCallInfo(p),
                  f = _.linkToken != null && _.linkToken !== "";
                f &&
                  _.videoEnabled &&
                  (d.forEach(function (e) {
                    return D.add(e);
                  }),
                  T != null && window.clearTimeout(T),
                  (T = window.setTimeout(function () {
                    ((T = null),
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
                  }, L)));
              }
            }
          }
        })),
        P.apply(this, arguments)
      );
    }
    var N = 50,
      M = o("WAThrottle").throttle(
        function () {
          F().catch(function (t) {
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
        N,
        { leading: !0, trailing: !0 },
      ),
      w = 0;
    function A() {
      M();
    }
    function F() {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = ++w,
            t = r("nullthrows")(
              yield o("WAWebVoipStackInterface").getVoipStackInterface(),
            );
          if (t.type === "web") {
            o("WAWebBackendApi").frontendFireAndForget("trackVoipActivity", {
              activity: "get_call_info",
              details: "grid_ranking",
            });
            var n = yield t.getCallInfo();
            if (n !== "" && e === w) {
              var a = t.parsers.parseCallInfo(n);
              o("WAWebBackendApi").frontendFireAndForget(
                "handleCallGridRankingChanged",
                { callInfo: a },
              );
            }
          }
        })),
        O.apply(this, arguments)
      );
    }
    function B(e) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        W.apply(this, arguments)
      );
    }
    function q(e) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        U.apply(this, arguments)
      );
    }
    function V(e) {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        H.apply(this, arguments)
      );
    }
    function G(e) {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        z.apply(this, arguments)
      );
    }
    function j(e) {
      return K.apply(this, arguments);
    }
    function K() {
      return (
        (K = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        K.apply(this, arguments)
      );
    }
    function Q() {
      (o("WAWebCoreActionsODS").logCallGroupJoinError(),
        o("WAWebBackendApi").frontendFireAndForget("handleLobbyNacked", {}));
    }
    function X() {
      (o("WAWebCoreActionsODS").logCallGroupJoinError(),
        o("WAWebBackendApi").frontendFireAndForget("handleLobbyTimeout", {}));
    }
    function Y() {
      return J.apply(this, arguments);
    }
    function J() {
      return (
        (J = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("WAWebBackendApi").frontendFireAndForget(
            "handleWaitingRoomDenied",
            {},
          );
        })),
        J.apply(this, arguments)
      );
    }
    function Z() {
      return ee.apply(this, arguments);
    }
    function ee() {
      return (
        (ee = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
        ee.apply(this, arguments)
      );
    }
    function te(e) {
      return ne.apply(this, arguments);
    }
    function ne() {
      return (
        (ne = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            if (a.reason === E) {
              (o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: handleCallRejectReceived: peer busy, showing busy UI",
                  ])),
              ),
                o("WAWebBackendApi").frontendFireAndForget("setPeerBusy", {}),
                o("WAWebBackendApi").frontendFireAndForget("playBusyTone", {}),
                I != null && window.clearTimeout(I));
              var u = a.callId;
              I = window.setTimeout(function () {
                ((I = null),
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
              }, k);
              return;
            }
            yield t.endCall(
              o("WAWebVoipSignalingEnums").EndCallReason.Unknown,
              !1,
            );
          }
        })),
        ne.apply(this, arguments)
      );
    }
    function re(e) {
      return oe.apply(this, arguments);
    }
    function oe() {
      return (
        (oe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        oe.apply(this, arguments)
      );
    }
    function ae(e) {
      return ie.apply(this, arguments);
    }
    function ie() {
      return (
        (ie = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = r("nullthrows")(
            yield o("WAWebVoipStackInterface").getVoipStackInterface(),
          );
          t.type === "web" &&
            (yield new (S || (S = n("Promise")))(function (e) {
              return window.setTimeout(e, 2500);
            }),
            yield t.endCall(
              o("WAWebVoipSignalingEnums").EndCallReason.Timeout,
              !1,
            ));
        })),
        ie.apply(this, arguments)
      );
    }
    function le(e) {
      return se.apply(this, arguments);
    }
    function se() {
      return (
        (se = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        se.apply(this, arguments)
      );
    }
    function ue(e) {
      return ce.apply(this, arguments);
    }
    function ce() {
      return (
        (ce = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        ce.apply(this, arguments)
      );
    }
    function de(e) {
      return me.apply(this, arguments);
    }
    function me() {
      return (
        (me = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        me.apply(this, arguments)
      );
    }
    function pe(e) {
      return _e.apply(this, arguments);
    }
    function _e() {
      return (
        (_e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
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
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
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
        _e.apply(this, arguments)
      );
    }
    ((l.resetCallLinkHandlerState = x),
      (l.handleGroupInfoChanged = $),
      (l.handleCallGridRankingChanged = A),
      (l.handleRxTrafficStateForPeerChanged = B),
      (l.handleNetHealthStatusChanged = q),
      (l.handleCallLinkStateChanged = V),
      (l.handleCallLinkNacked = G),
      (l.handleCallOfferNacked = j),
      (l.handleLobbyNacked = Q),
      (l.handleLobbyTimeout = X),
      (l.handleWaitingRoomDenied = Y),
      (l.handleWaitingRoomStateChanged = Z),
      (l.handleCallRejectReceived = te),
      (l.handleCallFatal = re),
      (l.handleRTCPByeReceived = ae),
      (l.handleRelayBindsFailed = le),
      (l.handleP2PTransportUpdate = ue),
      (l.handleGroupCallReminder = de),
      (l.handleUserRemoved = pe));
  },
  98,
);
