__d(
  "WAWebBlockWarningGatingUtils",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_blocked_participant_chat_warning",
      );
    }
    function s() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_blocked_participant_call_warning",
      );
    }
    ((l.isBlockedParticipantChatWarningEnabled = e),
      (l.isBlockedParticipantCallWarningEnabled = s));
  },
  98,
);
