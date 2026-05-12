__d(
  "WAWebHarmfulFileWamLogger",
  [
    "WAWebABProps",
    "WAWebDangerousFileOpenStatsV2WamEvent",
    "WAWebHarmfulFileSenderRelationshipResolver",
    "WAWebWamEnumHarmfulFileWarningSenderRelationship",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      o("WAWebABProps").getABPropConfigValue("harmful_file_dialog_logging") ===
        !0 &&
        new (o(
          "WAWebDangerousFileOpenStatsV2WamEvent",
        ).DangerousFileOpenStatsV2WamEvent)({
          harmfulFileWarningClickthroughAction: e,
          harmfulFileWarningSenderRelationship: s(t),
        }).commit();
    }
    function s(e) {
      return e ===
        o("WAWebHarmfulFileSenderRelationshipResolver")
          .HarmfulFileSenderRelationship.CONTACT
        ? o("WAWebWamEnumHarmfulFileWarningSenderRelationship")
            .HARMFUL_FILE_WARNING_SENDER_RELATIONSHIP.CONTACT
        : o("WAWebWamEnumHarmfulFileWarningSenderRelationship")
            .HARMFUL_FILE_WARNING_SENDER_RELATIONSHIP.NON_CONTACT;
    }
    l.logHarmfulFileWarningInteraction = e;
  },
  98,
);
