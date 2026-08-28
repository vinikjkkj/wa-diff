__d(
  "AdsAdgroupFrozenFieldsDataProviderPlugin",
  [
    "AdsAdgroupFrozenFieldsDataLoader",
    "LoadObjectMap",
    "promiseDone",
    "promiseLoadObjectsFromKeys",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      e(function (e) {
        return e.merge(t.loadedData);
      });
    }
    var s = {
        initialState: function (n) {
          return r("LoadObjectMap").create(function (t) {
            r("promiseDone")(
              r("promiseLoadObjectsFromKeys")(t, function (e) {
                return o(
                  "AdsAdgroupFrozenFieldsDataLoader",
                ).genFrozenFieldsData(e);
              }),
              function (t) {
                e(n, { loadedData: t });
              },
            );
          });
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
