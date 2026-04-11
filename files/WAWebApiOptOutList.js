__d(
  "WAWebApiOptOutList",
  [
    "Promise",
    "WAWebBoolFunc",
    "WAWebModelStorageUtils",
    "WAWebSchemaOptOutList",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      return o("WAWebSchemaOptOutList")
        .getOptOutListTable()
        .all()
        .then(function (e) {
          var t = e.map(function (e) {
            return o("WAWebWidFactory").createUserWidOrThrow(e.id);
          });
          return t;
        });
    }
    function u(t) {
      if (!t) return (e || (e = n("Promise"))).resolve(!1);
      var r = t.map(function (e) {
        return { id: e.toString() };
      });
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["optoutlist"], function (e) {
          var t = e[0];
          return t.clear().then(function () {
            return t.bulkCreate(r).then(o("WAWebBoolFunc").returnTrue);
          });
        });
    }
    ((l.getOptOutList = s), (l.updateOptOutList = u));
  },
  98,
);
