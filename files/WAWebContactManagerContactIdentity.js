__d(
  "WAWebContactManagerContactIdentity",
  ["WAJids", "WAWebLidMigrationUtils", "WAWebWidFactory"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
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
    l.toContactManagerMetadataJid = e;
  },
  98,
);
