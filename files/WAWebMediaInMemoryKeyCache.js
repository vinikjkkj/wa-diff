__d(
  "WAWebMediaInMemoryKeyCache",
  ["WALruCache"],
  function (t, n, r, o, a, i, l) {
    var e = 10,
      s = {
        sizeLimit: e,
        getSize: function (t) {
          return 1;
        },
      },
      u = new (o("WALruCache").LruCache)(s);
    l.MediaKeyCache = u;
  },
  98,
);
