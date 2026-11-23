__d(
  "WAWebDeleteAllCacheStorage",
  [],
  function (t, n, r, o, a, i) {
    async function e() {
      var e = window.caches;
      if (e != null) {
        var t = await e.keys();
        await Promise.all(
          t.map(function (t) {
            return e.delete(t);
          }),
        );
      }
    }
    i.default = e;
  },
  66,
);
