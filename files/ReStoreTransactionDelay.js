__d(
  "ReStoreTransactionDelay",
  ["setTimeout"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      var t =
        e === "background"
          ? new Promise(function (e) {
              return r("setTimeout")(e, 0);
            })
          : Promise.resolve();
      await t;
    }
    l.default = e;
  },
  98,
);
