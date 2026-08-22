__d(
  "WAWebHeaderSubtitlePlaceholder",
  [
    "fbt",
    "WAWebFrontendContactGetters",
    "WAWebGroupMetadataTypeUtils",
    "WAWebGroupType",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t,
        n,
        r,
        a =
          e != null &&
          (t = e.groupMetadata) != null &&
          t.participants.iAmAdmin() &&
          (n = e.groupMetadata) != null &&
          n.announce
            ? s._(/*BTDS*/ "Only admins can send messages")
            : s._(/*BTDS*/ "click here for group info"),
        i;
      if (
        o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(e.groupMetadata) ===
        o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
      ) {
        var l;
        e != null && (l = e.groupMetadata) != null && l.participants.iAmAdmin()
          ? (i = s._(/*BTDS*/ "Only admins can send messages"))
          : (i = s._(/*BTDS*/ "Announcements"));
      } else if (
        o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(e.groupMetadata) ===
          o("WAWebGroupType").GroupType.LINKED_SUBGROUP &&
        (r = e.groupMetadata) != null &&
        r.participants.iAmMember()
      ) {
        var u,
          c = (u = e.groupMetadata) == null ? void 0 : u.getParentGroupChat(),
          d = c == null ? void 0 : c.contact,
          m =
            d != null
              ? o("WAWebFrontendContactGetters").getFormattedName(d)
              : null;
        m != null &&
          (i = s._(/*BTDS*/ "{community}", [s._param("community", m)]));
      }
      return i != null ? i : a;
    }
    l.getSubtitlePlaceholder = e;
  },
  226,
);
