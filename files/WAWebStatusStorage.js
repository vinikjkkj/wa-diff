__d(
  "WAWebStatusStorage",
  ["WAWebStatusStorageInitialize"],
  function (t, n, r, o, a, i, l) {
    async function e() {
      await o("WAWebStatusStorageInitialize").initialize();
    }
    (Object.keys(o("WAWebStatusStorageInitialize")).forEach(function (e) {
      e === "default" ||
        e === "__esModule" ||
        (l[e] = o("WAWebStatusStorageInitialize")[e]);
    }),
      (l.initialize = e));
  },
  98,
);
