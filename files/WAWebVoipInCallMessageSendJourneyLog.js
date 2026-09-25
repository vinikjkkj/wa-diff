__d(
  "WAWebVoipInCallMessageSendJourneyLog",
  ["WAWebCallUserJourneyChatThreadAction", "WAWebCallUserJourneyLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      o("WAWebCallUserJourneyChatThreadAction").logChatThreadCallAction(
        o("WAWebCallUserJourneyLogger").PARITY_CALL_ACTION_TYPE
          .MESSAGE_SEND_IN_LINKED_CHAT,
      );
    }
    l.logMessageSendInLinkedChat = e;
  },
  98,
);
