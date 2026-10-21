__d(
  "WAWebHatchLibraryStripItems",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t, n, r) {
      var o = [].concat(
        e.map(function (e) {
          return { item: { kind: "media", msg: e }, timeMs: t(e) };
        }),
        n.map(function (e) {
          var t;
          return {
            item: { kind: "space", space: e },
            timeMs: (t = e.accessedAtMs) != null ? t : -1 / 0,
          };
        }),
      );
      return o
        .sort(l)
        .slice(0, r)
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
