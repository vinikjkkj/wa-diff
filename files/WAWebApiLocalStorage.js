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
    function s(e, t) {
      t === void 0 && (t = []);
      var r = d(e);
      return o("WAWebWorkerStorageUtils")
        .getStorage()
        .lock(
          ["local_storage"],
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var n = e[0],
                  o = [],
                  a = yield n.bulkGet(t);
                for (var i of a) i != null && o.push(i);
                (yield n.clear(), yield n.bulkCreateOrReplace([].concat(o, r)));
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        );
    }
    function u(e, t) {
      var r = d(e);
      return o("WAWebWorkerStorageUtils")
        .getStorage()
        .lock(
          ["local_storage"],
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var n = e[0];
                (yield n.bulkRemove(t), yield n.bulkCreateOrReplace(r));
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        );
    }
    function c() {
      return o("WAWebSchemaLocalStorage").getTable().clear();
    }
    function d(e) {
      return e.map(function (e) {
        return { key: e.key, value: e.value };
      });
    }
    ((l.getLocalStorageValue = e),
      (l.updateLocalStorage = s),
      (l.applyLocalStorageChanges = u),
      (l.clearLocalStorage = c));
  },
  98,
);
