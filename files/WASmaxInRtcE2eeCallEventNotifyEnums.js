__d(
  "WASmaxInRtcE2eeCallEventNotifyEnums",
  ["WAJids"],
  function (t, n, r, o, a, i, l) {
    var e = { ended: "ended", missed: "missed", started: "started" },
      s = { video: "video", voice: "voice" },
      u = {
        validators: [o("WAJids").validateGroupJid, o("WAJids").validateUserJid],
        typeName: "GroupJid|UserJid",
      };
    ((l.ENUM_ENDED_MISSED_STARTED = e),
      (l.ENUM_VIDEO_VOICE = s),
      (l.GROUPJID_USERJID = u));
  },
  98,
);
