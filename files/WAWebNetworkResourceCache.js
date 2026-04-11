__d(
  "WAWebNetworkResourceCache",
  ["WAPromiseCache", "err"],
  function (t, n, r, o, a, i, l) {
    var e = function () {
        if (s)
          throw r("err")(
            "An instance of NetworkResourceCache is already created, use getNetworkResourceCache.",
          );
        var e = function (t) {
          return self.fetch(t).then(function (e) {
            return e.json();
          });
        };
        this.cache == null &&
          (this.cache = new (r("WAPromiseCache"))(
            function (t) {
              return e(t);
            },
            {
              maxCached: 100,
              maxAge: 36e4,
              shouldCache: function (t) {
                return !!t;
              },
            },
          ));
      },
      s;
    function u() {
      return (s || (s = new e()), s);
    }
    l.getNetworkResourceCache = u;
  },
  98,
);
