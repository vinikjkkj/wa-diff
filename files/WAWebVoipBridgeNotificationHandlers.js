__d(
  "WAWebVoipBridgeNotificationHandlers",
  [
    "fbt",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebCallAcceptedElsewhereNotificationDeferral",
    "WAWebCallBusyTone",
    "WAWebCallCollection",
    "WAWebCallLogUtils",
    "WAWebGroupMetadataCollection",
    "WAWebNotificationBackend",
    "WAWebNotificationsCallNotification",
    "WAWebNotificationsMissedCallTracker",
    "WAWebParticipantListUtils",
    "WAWebVoipCallSurveyState",
    "WAWebVoipGatingUtils",
    "WAWebVoipHandleNativeCallEvent",
    "WAWebVoipLinkPreviewCallLink",
    "WAWebVoipNackHandlers",
    "WAWebVoipStartCall",
    "WAWebVoipWaCallEnums",
    "WAWebWamEnumLobbyEntryPointType",
    "WAWebWidFactory",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e, u, c, d, m, p, _, f, g;
    function h(t, n) {
      var a = s._(/*BTDS*/ "Group call").toString();
      try {
        if (t != null) {
          var i = r("WAWebGroupMetadataCollection").get(t);
          if ((i == null ? void 0 : i.subject) != null && i.subject !== "")
            return i.subject;
        }
        if (n.length === 0) return a;
        var l = o("WAWebCallLogUtils").sortParticipantWidsByPriority(n);
        return o(
          "WAWebParticipantListUtils",
        ).formatParticipantWidsPreserveOrder(l, !0);
      } catch (t) {
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: computeGroupCallTitle failed, using fallback title",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("voip-compute-group-call-title-failed"),
          a
        );
      }
    }
    function y(e, t) {
      if (
        t === o("WAWebVoipWaCallEnums").CallLogResult.AcceptedElsewhere &&
        e.isGroup &&
        o("WAWebVoipGatingUtils").isDeviceSwitchingEnabled() &&
        o("WAWebABProps").getABPropConfigValue(
          "enable_call_transfer_notification",
        )
      ) {
        var n = e.id;
        if (n != null) {
          var r,
            a = (r = e.groupCallParticipants) != null ? r : [],
            i = h(e.groupJid, a),
            l = {
              callId: n,
              groupJid: e.groupJid,
              isVideo: e.isVideo,
              onJoinCall: function () {
                o("WAWebVoipStartCall").joinOngoingCallByCallId(n);
              },
              participantWids: a,
              title: i,
            };
          (o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: routing call-accepted-elsewhere notification for group call ",
                " through foreground deferral",
              ])),
            n,
          ),
            o(
              "WAWebCallAcceptedElsewhereNotificationDeferral",
            ).deferCallAcceptedElsewhereNotificationUntilForeground(l));
        }
      }
    }
    var C = {
      cancelCallNotification: function (t) {
        var e = t.wid;
        o("WAWebNotificationsCallNotification").cancelCallNotification(e);
      },
      handleCallEndingForSurvey: function (t) {
        var e = t.callLogResult,
          n = t.connectTime,
          a = t.userRatingInterval;
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "voip: handleCallEndingForSurvey - connectTime: ",
              ", userRatingInterval: ",
              ", callLogResult: ",
              "",
            ])),
          n,
          a,
          e,
        );
        var i = r("WAWebCallCollection").lastActiveCall;
        (o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "voip: handleCallEndingForSurvey - lastActiveCall exists: ",
              ", callLogResult value: ",
              "",
            ])),
          i != null,
          e,
        ),
          i != null &&
            e != null &&
            ((i.callLogResult = e),
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: handleCallEndingForSurvey - stored callLogResult: ",
                  " on lastActiveCall",
                ])),
              e,
            ),
            y(i, e)),
          e === o("WAWebVoipWaCallEnums").CallLogResult.Missed &&
            document.hidden &&
            o("WAWebNotificationsMissedCallTracker").markCallMissedWhileHidden(
              o("WATimeUtils").unixTime(),
            ),
          o("WAWebVoipCallSurveyState").shouldShowSurveyBasedOnInterval(a)
            ? (o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: Showing post-call survey based on call ending event (fallback)",
                  ])),
              ),
              r(
                "WAWebCallCollection",
              ).setShouldShowPostCallSurveyOnLastActiveCall(!0))
            : a >= 0 &&
              o("WAWebVoipHandleNativeCallEvent")
                .sendStoredFieldstats()
                .catch(function (e) {
                  o("WALogger")
                    .WARN(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: sendStoredFieldstats failed",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e));
                }));
      },
      handleGroupCallReminder: function (t) {
        var e = t.linkToken;
        if (e != null) {
          if (
            t.reminderType ===
              o("WAWebVoipWaCallEnums").ServerReminderType
                .CallLinkJoinedCreator ||
            t.reminderType ===
              o("WAWebVoipWaCallEnums").ServerReminderType
                .CallLinkCreatorCallConnected
          ) {
            var n = t.participants.map(function (e) {
              return o("WAWebWidFactory").createUserWidOrThrow(
                e.jid.user,
                e.jid.server,
              );
            });
            o("WAWebNotificationBackend").showCallLinkJoinedNotification({
              callId: t.callId,
              linkToken: e,
              participantWids: n,
              onJoinCall: function () {
                var n =
                  t.reminderType ===
                  o("WAWebVoipWaCallEnums").ServerReminderType
                    .CallLinkCreatorCallConnected
                    ? o("WAWebWamEnumLobbyEntryPointType")
                        .LOBBY_ENTRY_POINT_TYPE
                        .LINK_CREATOR_CALL_CONNECTED_PUSH_NOTIFICATION
                    : o("WAWebWamEnumLobbyEntryPointType")
                        .LOBBY_ENTRY_POINT_TYPE
                        .CALL_LINK_CREATOR_PUSH_NOTIFICATION;
                o("WAWebVoipLinkPreviewCallLink").handleClickCallLink(
                  {
                    resultType: "CALL_LINK",
                    data: {
                      token: e,
                      callType: t.isVideoCall ? "video" : "audio",
                    },
                  },
                  n,
                );
              },
            });
            return;
          }
          if (
            t.reminderType ===
              o("WAWebVoipWaCallEnums").ServerReminderType.WaitingRoomJoined ||
            t.reminderType ===
              o("WAWebVoipWaCallEnums").ServerReminderType
                .WaitingRoomMultipleJoined
          ) {
            o("WAWebNotificationBackend").showWaitingRoomNotification({
              callId: t.callId,
              linkToken: e,
              waitingRoomUserWids: t.waitingRoomUsers,
              onOpenWaitingRoom: function () {
                var n =
                  t.reminderType ===
                  o("WAWebVoipWaCallEnums").ServerReminderType
                    .WaitingRoomMultipleJoined
                    ? o("WAWebWamEnumLobbyEntryPointType")
                        .LOBBY_ENTRY_POINT_TYPE
                        .WAITING_ROOM_MULTIPLE_JOINED_PUSH_NOTIFICATION
                    : o("WAWebWamEnumLobbyEntryPointType")
                        .LOBBY_ENTRY_POINT_TYPE
                        .WAITING_ROOM_JOINED_PUSH_NOTIFICATION;
                o("WAWebVoipLinkPreviewCallLink").handleClickCallLink(
                  {
                    resultType: "CALL_LINK",
                    data: {
                      token: e,
                      callType: t.isVideoCall ? "video" : "audio",
                    },
                  },
                  n,
                );
              },
            });
            return;
          }
        }
      },
      showVoiceChatWaveNotification: function (t) {
        o("WAWebNotificationBackend")
          .showVoiceChatWaveNotification(
            babelHelpers.extends({}, t, {
              onJoinCall: function () {
                o("WAWebVoipStartCall")
                  .joinOngoingCallByCallId(t.callId)
                  .catch(function (e) {
                    o("WALogger")
                      .ERROR(
                        f ||
                          (f = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: failed to join ongoing call from wave notification",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e))
                      .sendLogs("voip-wave-join-call-failed");
                  });
              },
            }),
          )
          .catch(function (e) {
            o("WALogger")
              .ERROR(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: failed to show voice chat wave notification",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("voip-wave-notification-failed");
          });
      },
      showUserRemovedDialog: function (t) {
        var e = t.removerJid;
        o("WAWebVoipNackHandlers").showUserRemovedDialog(e);
      },
      showParticipantRemovedToast: function (t) {
        var e = t.removeeJid;
        o("WAWebVoipNackHandlers").showParticipantRemovedToast(e);
      },
      playBusyTone: function () {
        o("WAWebCallBusyTone").playBusyTone();
      },
      stopBusyTone: function () {
        o("WAWebCallBusyTone").stopBusyTone();
      },
      setPeerBusy: function () {
        var e;
        (e = r("WAWebCallCollection").activeCall) == null || e.markPeerBusy();
      },
    };
    l.VoipBridgeNotificationHandlers = C;
  },
  226,
);
