__d(
  "WAPromiseMap",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    async function e(e, t) {
      var n = await e;
      return Promise.all(
        n.map(function (e, n) {
          return Promise.resolve(t(e, n));
        }),
      );
    }
    i.promiseMap = e;
  },
  66,
);
