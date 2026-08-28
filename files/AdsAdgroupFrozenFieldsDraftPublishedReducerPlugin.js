__d(
  "AdsAdgroupFrozenFieldsDraftPublishedReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = n.publishedObjectIDs;
          if (!e) return t;
          var r = t,
            o = t.getLoadedMap();
          return (
            e.forEach(function (e) {
              o.has(e) && o.get(e) === null && (r = r.delete(e));
            }),
            r
          );
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
