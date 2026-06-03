__d(
  "WAWebApiLocalStorage",
  [
    "WAWebSchemaLocalStorage",
    "WAWebWorkerStorageUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebSchemaLocalStorage")
        .getTable()
        .get(e)
        .then(function (e) {
          return e == null ? void 0 : e.value;
        });
    }
    function s(e) {
      var t = e.map(function (e) {
        return { key: e.key, value: e.value };
      });
      return o("WAWebWorkerStorageUtils")
        .getStorage()
        .lock(
          ["local_storage"],
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var n = e[0];
                (yield n.clear(), yield n.bulkCreateOrReplace(t));
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        );
    }
    function u() {
      return o("WAWebSchemaLocalStorage").getTable().clear();
    }
    ((l.getLocalStorageValue = e),
      (l.updateLocalStorage = s),
      (l.clearLocalStorage = u));
  },
  98,
);
