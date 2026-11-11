__d(
  "WAWebGroupCallTitleUtils",
  ["WAWebGroupMetadataGetters", "WAWebParticipantListUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return s(e == null ? void 0 : e.groupMetadata);
    }
    function s(e) {
      if (!(e == null || !o("WAWebGroupMetadataGetters").getIsUnnamed(e)))
        return o(
          "WAWebParticipantListUtils",
        ).calculateUnnamedGroupParticipantsList(e);
    }
    ((l.getUnnamedGroupCallNameOverride = e),
      (l.getUnnamedGroupCallNameOverrideFor = s));
  },
  98,
);
