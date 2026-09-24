__d(
  "WAWebVoipActionRingParticipant",
  [
    "WAWebCallUserJourneyInCallAction",
    "WAWebCallUserJourneyLogger",
    "WAWebVoipStartCall",
    "WAWebWamEnumSubSurface",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      (o("WAWebCallUserJourneyInCallAction").logInCallAction(
        o("WAWebCallUserJourneyLogger").PARITY_CALL_ACTION_TYPE
          .RING_PARTICIPANT,
        o("WAWebWamEnumSubSurface").SUB_SURFACE.PARTICIPANT_LIST,
      ),
        o("WAWebVoipStartCall").inviteToCall(e));
    }
    l.ringParticipantFromCall = e;
  },
  98,
);
