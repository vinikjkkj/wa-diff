__d(
  "WAWebContactManagerContactIdentity",
  [
    "WAJids",
    "WAWebContactsDbLidMigrationUtils",
    "WAWebLidMigrationUtils",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
          "WAWebContactsDbLidMigrationUtils",
        ).maybeReplacePhoneNumbersWithLatestLids(
          e.map(function (e) {
            return e.id;
          }),
        ),
        n = new Map();
      return (
        e.forEach(function (e, r) {
          var o = t[r],
            a = n.get(o);
          a == null ? n.set(o, [e]) : a.push(e);
        }),
        Array.from(n, function (e) {
          var t = e[0],
            n = e[1];
          return { canonicalId: t, rows: n };
        })
      );
    }
    function s(e) {
      for (var t of e) {
        var n = u(t.id);
        if (n != null) return n;
      }
      return null;
    }
    function u(e) {
      try {
        var t = o("WAWebWidFactory").createUserWidOrThrow(e),
          n = o("WAJids").interpretAndValidateJid(t.toJid());
        if (n.jidType === "lidUser") return n.userJid;
        var r = o("WAWebLidMigrationUtils").toUserLid(t);
        if (r == null) return null;
        var a = o("WAJids").interpretAndValidateJid(r.toJid());
        return a.jidType === "lidUser" ? a.userJid : null;
      } catch (e) {
        return null;
      }
    }
    ((l.groupContactRowsByCanonicalId = e),
      (l.selectContactManagerMetadataJid = s),
      (l.toContactManagerMetadataJid = u));
  },
  98,
);
