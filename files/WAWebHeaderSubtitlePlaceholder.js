__d(
  "WAWebHeaderSubtitlePlaceholder",
  ["fbt", "WAWebFrontendContactGetters", "WAWebGroupType"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t,
        n,
        r,
        a,
        i,
        l =
          e != null &&
          (t = e.groupMetadata) != null &&
          t.participants.iAmAdmin() &&
          (n = e.groupMetadata) != null &&
          n.announce
            ? s._(/*BTDS*/ "Only admins can send messages")
            : s._(/*BTDS*/ "click here for group info"),
        u;
      if (
        ((r = e.groupMetadata) == null ? void 0 : r.groupType) ===
        o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
      ) {
        var c;
        e != null && (c = e.groupMetadata) != null && c.participants.iAmAdmin()
          ? (u = s._(/*BTDS*/ "Only admins can send messages"))
          : (u = s._(/*BTDS*/ "Announcements"));
      } else if (
        ((a = e.groupMetadata) == null ? void 0 : a.groupType) ===
          o("WAWebGroupType").GroupType.LINKED_SUBGROUP &&
        (i = e.groupMetadata) != null &&
        i.participants.iAmMember()
      ) {
        var d,
          m = (d = e.groupMetadata) == null ? void 0 : d.getParentGroupChat(),
          p = m == null ? void 0 : m.contact,
          _ =
            p != null
              ? o("WAWebFrontendContactGetters").getFormattedName(p)
              : null;
        _ != null &&
          (u = s._(/*BTDS*/ "{community}", [s._param("community", _)]));
      }
      return u != null ? u : l;
    }
    l.getSubtitlePlaceholder = e;
  },
  226,
);
