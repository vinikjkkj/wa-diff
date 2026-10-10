__d(
  "WAWebHatchLibraryStripItems",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t, n) {
      var r = [].concat(
        e.map(function (e) {
          return { item: { kind: "media", msg: e }, timeMs: e.t * 1e3 };
        }),
        t.map(function (e) {
          var t;
          return {
            item: { kind: "space", space: e },
            timeMs: (t = e.accessedAtMs) != null ? t : -1 / 0,
          };
        }),
      );
      return r
        .sort(l)
        .slice(0, n)
        .map(function (e) {
          var t = e.item;
          return t;
        });
    }
    function l(e, t) {
      return e.timeMs === t.timeMs ? 0 : t.timeMs > e.timeMs ? 1 : -1;
    }
    i.getHatchLibraryStripItems = e;
  },
  66,
);
