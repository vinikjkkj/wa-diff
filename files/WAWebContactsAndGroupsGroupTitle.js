__d(
  "WAWebContactsAndGroupsGroupTitle",
  [
    "WAReplaceRepeatingWhitespace",
    "WAWebGroupMetadataGetters",
    "WAWebParticipantListUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = u(e.groupMetadata);
      return t == null ? e.title() : c(t);
    }
    function s(e) {
      return u(e.groupMetadata) != null;
    }
    function u(e) {
      return e != null && o("WAWebGroupMetadataGetters").getIsUnnamed(e)
        ? e
        : null;
    }
    function c(e) {
      return r("WAReplaceRepeatingWhitespace")(
        o(
          "WAWebParticipantListUtils",
        ).calculateUnnamedGroupFullParticipantsList(e, !0),
      );
    }
    ((l.getContactsAndGroupsGroupTitle = e),
      (l.isGroupNamedAfterMembers = s),
      (l.getUnnamedGroupMetadata = u),
      (l.getMemberNamesTitle = c));
  },
  98,
);
