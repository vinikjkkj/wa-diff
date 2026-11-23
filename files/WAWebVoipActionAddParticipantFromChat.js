__d(
  "WAWebVoipActionAddParticipantFromChat",
  [
    "WAWebCallUserJourneyChatThreadAction",
    "WAWebCallUserJourneyLogger",
    "WAWebVoipStartCall",
    "WAWebWamEnumSubSurface",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      (o("WAWebCallUserJourneyChatThreadAction").logChatThreadCallAction(
        o("WAWebCallUserJourneyLogger").PARITY_CALL_ACTION_TYPE
          .TAP_CONFIRM_ADD_PARTICIPANT_FROM_CHAT,
        o("WAWebWamEnumSubSurface").SUB_SURFACE.CHAT_HEADER,
      ),
        await o("WAWebVoipStartCall").inviteToCall(e));
    }
    l.addParticipantFromChat = e;
  },
  98,
);
