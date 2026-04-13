__d(
  "useWAWebInMemoryMediaBlobCache",
  ["WAWebMediaInMemoryBlobCache", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useEffect,
      d = s.useMemo,
      m = s.useSyncExternalStore;
    function p(e) {
      return o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.subscribe(
        e,
      );
    }
    function _(e) {
      var t = o("react-compiler-runtime").c(8),
        n;
      t[0] !== e
        ? ((n = function () {
            return o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.has(
              e,
            );
          }),
          (t[0] = e),
          (t[1] = n))
        : (n = t[1]);
      var r = n,
        a = m(p, r),
        i;
      e: {
        if (a) {
          o(
            "WAWebMediaInMemoryBlobCache",
          ).InMemoryMediaBlobCache.increaseUsageCount(e);
          var l;
          (t[2] !== e
            ? ((l = o(
                "WAWebMediaInMemoryBlobCache",
              ).InMemoryMediaBlobCache.getOrCreateURL(e)),
              (t[2] = e),
              (t[3] = l))
            : (l = t[3]),
            (i = l));
          break e;
        }
        i = null;
      }
      var s = i,
        u,
        d;
      return (
        t[4] !== s || t[5] !== e
          ? ((u = function () {
              return function () {
                s != null &&
                  o(
                    "WAWebMediaInMemoryBlobCache",
                  ).InMemoryMediaBlobCache.decreaseUsageCount(e);
              };
            }),
            (d = [e, s]),
            (t[4] = s),
            (t[5] = e),
            (t[6] = u),
            (t[7] = d))
          : ((u = t[6]), (d = t[7])),
        c(u, d),
        s
      );
    }
    l.default = _;
  },
  98,
);
