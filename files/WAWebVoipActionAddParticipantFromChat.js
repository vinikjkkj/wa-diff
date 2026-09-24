__d(
  "WAWebVoipActionAddParticipantFromChat",
  [
    "WAWebCallUserJourneyChatThreadAction",
    "WAWebCallUserJourneyLogger",
    "WAWebVoipStartCall",
    "WAWebWamEnumSubSurface",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (o("WAWebCallUserJourneyChatThreadAction").logChatThreadCallAction(
            o("WAWebCallUserJourneyLogger").PARITY_CALL_ACTION_TYPE
              .TAP_CONFIRM_ADD_PARTICIPANT_FROM_CHAT,
            o("WAWebWamEnumSubSurface").SUB_SURFACE.CHAT_HEADER,
          ),
            yield o("WAWebVoipStartCall").inviteToCall(e));
        })),
        s.apply(this, arguments)
      );
    }
    l.addParticipantFromChat = e;
  },
  98,
);
