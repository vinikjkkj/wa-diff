__d(
  "WAWebApiOrphanReceipt",
  [
    "WAWebLidMigrationUtils",
    "WAWebModelStorageUtils",
    "WAWebSchemaOrphanReceipt",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebSchemaOrphanReceipt").getOrphanReceiptTable().remove(e);
    }
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = [e];
          if (e.remote.isUser()) {
            var n = o("WAWebLidMigrationUtils").getAlternateMsgKey(e);
            n != null && t.push(n);
          }
          var r = yield o("WAWebSchemaOrphanReceipt")
            .getOrphanReceiptTable()
            .bulkGet(t.map(String));
          return r.find(function (e) {
            return e != null;
          });
        })),
        u.apply(this, arguments)
      );
    }
    function c(e, t, n) {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["orphan-receipt"], function (r) {
          var o = r[0];
          return o.bulkGet(n).then(function (r) {
            var a = n.reduce(function (n, o, a) {
              var i = r[a];
              i == null && (i = { msgKey: o });
              var l = i[e];
              return ((l == null || l > t) && ((i[e] = t), n.push(i)), n);
            }, []);
            return o.bulkCreateOrReplace(a);
          });
        });
    }
    ((l.removeOrphanReceipt = e),
      (l.getOrphanReceipt = s),
      (l.createOrUpdateOrphanReceipt = c));
  },
  98,
);
