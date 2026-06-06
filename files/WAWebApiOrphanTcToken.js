__d(
  "WAWebApiOrphanTcToken",
  ["WAWebLidMigrationUtils", "WAWebSchemaOrphanTcToken"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      if (e.isUser()) {
        var t = o("WAWebSchemaOrphanTcToken").getOrphanTcTokenTable(),
          n = o("WAWebLidMigrationUtils").toPn(e),
          r = o("WAWebLidMigrationUtils").toLid(e),
          a = [];
        (n != null && a.push(t.remove(n.toString())),
          r != null && a.push(t.remove(r.toString())),
          await Promise.all(a));
      }
    }
    async function s(e) {
      var t, n;
      if (!e.isUser()) return null;
      var r = o("WAWebSchemaOrphanTcToken").getOrphanTcTokenTable(),
        a = o("WAWebLidMigrationUtils").toPn(e),
        i = o("WAWebLidMigrationUtils").toLid(e),
        l = [];
      (a != null && l.push(r.get(a.toString())),
        i != null && l.push(r.get(i.toString())));
      var s = await Promise.all(l),
        u = s[0],
        c = s[1],
        d = (t = u == null ? void 0 : u.tcTokenTimestamp) != null ? t : 0,
        m = (n = c == null ? void 0 : c.tcTokenTimestamp) != null ? n : 0;
      return d > m || c == null ? u : c;
    }
    async function u(e, t) {
      var n;
      if (e.isUser()) {
        var r = (n = o("WAWebLidMigrationUtils").toLid(e)) != null ? n : e,
          a = r.toString();
        return o("WAWebSchemaOrphanTcToken")
          .getOrphanTcTokenTable()
          .createOrMerge(a, babelHelpers.extends({ chatId: a }, t));
      }
    }
    ((l.removeOrphanTcToken = e),
      (l.getOrphanTcToken = s),
      (l.createOrUpdateOrphanTcToken = u));
  },
  98,
);
