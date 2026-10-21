__d(
  "WAWebNearestChannelVideos",
  [],
  function (t, n, r, o, a, i) {
    var e = 1;
    function l(t, n) {
      var r = [];
      if (
        (t.forEach(function (e, t) {
          e.isOnScreen && r.push(t);
        }),
        r.length === 0)
      ) {
        var o = new Set(
          t.map(function (e) {
            return e.key;
          }),
        );
        return n.filter(function (e) {
          return o.has(e);
        });
      }
      var a = Math.min(r[r.length - 1] - r[0] + 1 + e * 2, t.length),
        i = Math.min(Math.max(r[0] - e, 0), t.length - a);
      return t.slice(i, i + a).map(function (e) {
        return e.key;
      });
    }
    i.selectNearestChannelVideos = l;
  },
  66,
);
