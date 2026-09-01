__d(
  "WormStoreRunner",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      return {
        read: function (r, o) {
          return e.runInTransaction(
            [t],
            "readonly",
            function (e) {
              return o(e.stores[t]);
            },
            r,
          );
        },
        write: function (r, o) {
          return e.runInTransaction(
            [t],
            "readwrite",
            function (e) {
              return o(e.stores[t]);
            },
            r,
          );
        },
      };
    }
    i.makeWormStoreRunner = e;
  },
  66,
);
