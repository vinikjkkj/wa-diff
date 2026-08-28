__d(
  "DuplexBotModuleTypes",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = (e = n("$InternalEnum"))({
        FACEBOOK: 0,
        INSTAGRAM: 1,
        AR: 2,
        META: 3,
      }),
      s = e({ USER: 0, CONFERENCE: 1, SERVER_INFO: 2 }),
      u = e({
        UNKNOWN: 0,
        META_AI: 1,
        IG_CREATOR: 2,
        BIZ_AGENT: 3,
        IMMERSIVE_EXPERIENCE: 4,
        ASA_AGENT: 5,
        MOBIUS: 6,
        SG_LIVE_AI: 7,
        WAVEFORM: 8,
        EMBER: 9,
        DATING: 10,
        AGENT_KIT: 11,
        MOBICLAW_VOICE: 13,
      }),
      c = e({ DIRECT_CALL: 0, IMMERSIVE: 1 }),
      d = e({ UNKNOWN: 0, SYSTEM: 1, USER: 2, ASSISTANT: 3 });
    a.exports = {
      ExperimentUniverse: l,
      ExposureType: s,
      LlmService: u,
      MessageRole: d,
      UgcExperience: c,
    };
  },
  null,
);
