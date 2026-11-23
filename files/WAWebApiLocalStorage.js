__d(
  "WAWebApiLocalStorage",
  ["WAWebSchemaLocalStorage", "WAWebWorkerStorageUtils"],
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
      var n = d(e);
      return o("WAWebWorkerStorageUtils")
        .getStorage()
        .lock(["local_storage"], async function (e) {
          var r = e[0],
            o = [],
            a = await r.bulkGet(t);
          for (var i of a) i != null && o.push(i);
          (await r.clear(), await r.bulkCreateOrReplace([].concat(o, n)));
        });
    }
    function u(e, t) {
      var n = d(e);
      return o("WAWebWorkerStorageUtils")
        .getStorage()
        .lock(["local_storage"], async function (e) {
          var r = e[0];
          (await r.bulkRemove(t), await r.bulkCreateOrReplace(n));
        });
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
