__d(
  "WAWebDeleteAllCacheStorage",
  [],
  function (t, n, r, o, a, i) {
    async function e(e, t) {
      e === void 0 && (e = []);
      var n = window.caches;
      if (n != null) {
        var r = await n.keys();
        (t == null ? void 0 : t.aborted) !== !0 &&
          (await Promise.all(
            r
              .filter(function (t) {
                return !e.includes(t);
              })
              .map(function (e) {
                return n.delete(e);
              }),
          ));
      }
    }
    i.default = e;
  },
  66,
);
