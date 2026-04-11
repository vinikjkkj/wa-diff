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
      };
    function u() {
      return !0;
    }
    var c = new (o("WALruCache").LruCache)(s);
    ((l.shouldUseMediaKeyCache = u), (l.MediaKeyCache = c));
  },
  98,
);
