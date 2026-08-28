__d(
  "MeetingAssistantStateMeetingAssistantStateTypes",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = (e = n("$InternalEnum"))({
        UNAVAILABLE: 0,
        NOT_RECORDING: 1,
        RECORDING: 2,
      }),
      s = e({
        UNKNOWN: 0,
        NOT_CONNECTED: 1,
        CONNECTED: 2,
        CONNECTION_REQUESTED: 3,
      }),
      u = e({ UNAVAILABLE: 0, AGREED: 1, DECLINED: 2 }),
      c = e({ UNAVAILABLE: 0, ABLE: 1, UNABLE: 2 });
    a.exports = {
      AbilityToStartTranscription: c,
      AssistantStatus: s,
      TranscriptionConsentStatus: u,
      TranscriptionStatus: l,
    };
  },
  null,
);
