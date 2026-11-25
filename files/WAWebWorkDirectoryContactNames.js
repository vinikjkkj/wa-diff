__d(
  "WAWebWorkDirectoryContactNames",
  [
    "WAWebContactCollection",
    "WAWebLidMigrationUtils",
    "WAWebRestoreGroupsAndContacts",
    "WAWebUserUtils",
    "WAWebWorkDirectoryFetchMembersJob",
    "WAWebWorkDirectoryMemberLookup",
  ],
  function (t, n, r, o, a, i, l) {
    var e = !1;
    function s() {
      e ||
        ((e = !0),
        o(
          "WAWebWorkDirectoryFetchMembersJob",
        ).subscribeToWorkDirectoryMembersLoad(u),
        o("WAWebContactCollection").ContactCollection.on("add", d),
        o("WAWebContactCollection").ContactCollection.on(
          "lid-pn-mapping-updated",
          c,
        ),
        u(),
        o("WAWebRestoreGroupsAndContacts").waitForRestoredContacts().then(u));
    }
    function u() {
      m() != null && o("WAWebContactCollection").ContactCollection.forEach(d);
    }
    function c() {
      m() != null &&
        o("WAWebContactCollection").ContactCollection.forEach(function (e) {
          e.id.isLid() || d(e);
        });
    }
    function d(e) {
      var t,
        n = m(),
        r = e.id;
      if (!(n == null || !r.isUser() || r.isBot())) {
        var a = o("WAWebLidMigrationUtils").toUserLid(r),
          i =
            a == null
              ? null
              : o("WAWebWorkDirectoryMemberLookup")
                  .getWorkDirectoryMemberIndex(n)
                  .get(a.user),
          l = i == null || o("WAWebUserUtils").isMeAccount(r) ? null : i.name;
        ((t = e.directoryName) != null ? t : null) !== l &&
          e.set({ directoryName: l });
      }
    }
    function m() {
      var e = o("WAWebUserUtils").getMaybeMeLidUser();
      return e == null
        ? null
        : o("WAWebWorkDirectoryFetchMembersJob").getLoadedWorkDirectoryMembers(
            e.toString(),
          );
    }
    l.startWorkDirectoryContactNames = s;
  },
  98,
);
