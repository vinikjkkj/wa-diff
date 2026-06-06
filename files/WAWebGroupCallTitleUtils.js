__d(
  "WAWebGroupCallTitleUtils",
  ["WAWebParticipantListUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e == null ? void 0 : e.groupMetadata;
      if (!(t == null || !t.isUnnamed))
        return o(
          "WAWebParticipantListUtils",
        ).calculateUnnamedGroupParticipantsList(t);
    }
    l.getUnnamedGroupCallNameOverride = e;
  },
  98,
);
