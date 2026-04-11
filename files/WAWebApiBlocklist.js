__d(
  "WAWebApiBlocklist",
  [
    "WAWebBoolFunc",
    "WAWebModelStorageUtils",
    "WAWebSchemaBlocklist",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebSchemaBlocklist")
        .getBlocklistTable()
        .all()
        .then(function (e) {
          var t = e.map(function (e) {
            return o("WAWebWidFactory").createUserWidOrThrow(e.id);
          });
          return t;
        });
    }
    function s(e) {
      var t = e.map(function (e) {
        return { id: e.toString() };
      });
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["blocklist"], function (e) {
          var n = e[0];
          return n.clear().then(function () {
            return n.bulkCreate(t).then(o("WAWebBoolFunc").returnTrue);
          });
        });
    }
    ((l.getBlocklist = e), (l.updateBlocklist = s));
  },
  98,
);
