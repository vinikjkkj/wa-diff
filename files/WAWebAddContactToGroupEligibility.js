__d(
  "WAWebAddContactToGroupEligibility",
  ["WAWebContactGetters", "WAWebLidMigrationUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = t.groupMetadata;
      if (
        !o("WAWebContactGetters").getIsGroup(t) ||
        n == null ||
        !n.participants.iAmMember() ||
        !n.participants.iAmAdmin()
      )
        return !1;
      var r =
        n.isLidAddressingMode === !0
          ? o("WAWebLidMigrationUtils").toLid(e.id)
          : o("WAWebLidMigrationUtils").toPn(e.id);
      return !(r != null && n.participants.get(r));
    }
    l.isContactAddableToGroup = e;
  },
  98,
);
