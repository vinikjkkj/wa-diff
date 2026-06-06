__d(
  "WAWebFtsBaseManifestReaderWriter",
  [],
  function (t, n, r, o, a, i) {
    var e = (function () {
      function e(e) {
        this.$1 = e;
      }
      var t = e.prototype;
      return (
        (t.__performReadWriteOperation = async function (t) {
          var e = await this.$1.acquire(),
            n;
          try {
            n = await t();
          } finally {
            e.release();
          }
          return n;
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
