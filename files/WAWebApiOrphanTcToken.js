__d(
  "WAWebApiOrphanTcToken",
  [
    "Promise",
    "WAWebLidMigrationUtils",
    "WAWebSchemaOrphanTcToken",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (t.isUser()) {
            var r = o("WAWebSchemaOrphanTcToken").getOrphanTcTokenTable(),
              a = o("WAWebLidMigrationUtils").toPn(t),
              i = o("WAWebLidMigrationUtils").toLid(t),
              l = [];
            (a != null && l.push(r.remove(a.toString())),
              i != null && l.push(r.remove(i.toString())),
              yield (e || (e = n("Promise"))).all(l));
          }
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r, a;
          if (!t.isUser()) return null;
          var i = o("WAWebSchemaOrphanTcToken").getOrphanTcTokenTable(),
            l = o("WAWebLidMigrationUtils").toPn(t),
            s = o("WAWebLidMigrationUtils").toLid(t),
            u = [];
          (l != null && u.push(i.get(l.toString())),
            s != null && u.push(i.get(s.toString())));
          var c = yield (e || (e = n("Promise"))).all(u),
            d = c[0],
            m = c[1],
            p = (r = d == null ? void 0 : d.tcTokenTimestamp) != null ? r : 0,
            _ = (a = m == null ? void 0 : m.tcTokenTimestamp) != null ? a : 0;
          return p > _ || m == null ? d : m;
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n;
          if (e.isUser()) {
            var r = (n = o("WAWebLidMigrationUtils").toLid(e)) != null ? n : e,
              a = r.toString();
            return o("WAWebSchemaOrphanTcToken")
              .getOrphanTcTokenTable()
              .createOrMerge(a, babelHelpers.extends({ chatId: a }, t));
          }
        })),
        p.apply(this, arguments)
      );
    }
    ((l.removeOrphanTcToken = s),
      (l.getOrphanTcToken = c),
      (l.createOrUpdateOrphanTcToken = m));
  },
  98,
);
