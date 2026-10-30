__d(
  "WAWebVoipOneOnOneJoinableCall",
  [
    "WALogger",
    "WAWebCallRandomIdStore",
    "WAWebCallUserJourneyGating",
    "WAWebJoinableCallWamEvent",
    "WAWebVoipCallStateUtils",
    "WAWebVoipIncomingCallUiActionStore",
    "WAWebVoipLobbyVisibilityStore",
    "WAWebWamEnumCallResultType",
    "WAWebWamEnumCallSide",
    "WAWebWamEnumIncomingCallUiActionType",
    "WAWebWamEnumLobbyEntryPointType",
    "WAWebWamEnumLobbyExitType",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Set([
        o("WAWebWamEnumIncomingCallUiActionType").INCOMING_CALL_UI_ACTION_TYPE
          .INCOMING_CALL_SCREEN_ANSWER,
        o("WAWebWamEnumIncomingCallUiActionType").INCOMING_CALL_UI_ACTION_TYPE
          .PENDING_CALL_SCREEN_END_AND_ANSWER,
      ]);
    function u(t, n, a) {
      var i = a.callId;
      if (
        !(
          !o("WAWebVoipCallStateUtils").isCallConnected(n) ||
          o("WAWebVoipCallStateUtils").isCallConnected(t) ||
          a.isGroupCall === !0 ||
          a.isCaller === !0 ||
          typeof i != "string" ||
          !s.has(
            o("WAWebVoipIncomingCallUiActionStore").getIncomingCallUiAction(),
          ) ||
          !o("WAWebCallUserJourneyGating").isCallUserJourneyM2Enabled()
        )
      ) {
        var l = o("WAWebCallRandomIdStore").getCurrentCallRandomId();
        if (l != null) {
          var u = o(
            "WAWebVoipLobbyVisibilityStore",
          ).getOneOnOneRingForJoinableCall(i);
          if (u != null) {
            var c = u.lobbyVisibleForMs != null;
            try {
              var d;
              new (o("WAWebJoinableCallWamEvent").JoinableCallWamEvent)({
                callRandomId: l,
                callSide: o("WAWebWamEnumCallSide").CALL_SIDE.CALLEE,
                isOneOnOneCall: !0,
                legacyCallResult: o("WAWebWamEnumCallResultType")
                  .CALL_RESULT_TYPE.CONNECTED,
                lobbyEntryPoint: c
                  ? o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE
                      .OPEN_FOR_RINGING
                  : o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE
                      .NOT_OPENED,
                lobbyExit: o("WAWebWamEnumLobbyExitType").LOBBY_EXIT_TYPE
                  .CONNECTED,
                lobbyVisibleT: (d = u.lobbyVisibleForMs) != null ? d : 0,
                videoEnabled: a.videoEnabled === !0,
              }).commit();
            } catch (t) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [cujl] 1:1 joinable_call commit failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("voip-cujl-one-on-one-joinable-call-commit-failed");
              return;
            }
            o("WAWebVoipLobbyVisibilityStore").markOneOnOneJoinableCallLogged(
              i,
            );
          }
        }
      }
    }
    l.maybeLogOneOnOneJoinableCall = u;
  },
  98,
);
