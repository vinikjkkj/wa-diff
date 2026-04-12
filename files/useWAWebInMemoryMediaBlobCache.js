__d(
  "useWAWebInMemoryMediaBlobCache",
  ["WAWebMediaInMemoryBlobCache", "react"],
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
      var t = u(
          function () {
            return o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.has(
              e,
            );
          },
          [e],
        ),
        n = m(p, t),
        r = d(
          function () {
            return n
              ? (o(
                  "WAWebMediaInMemoryBlobCache",
                ).InMemoryMediaBlobCache.increaseUsageCount(e),
                o(
                  "WAWebMediaInMemoryBlobCache",
                ).InMemoryMediaBlobCache.getOrCreateURL(e))
              : null;
          },
          [e, n],
        );
      return (
        c(
          function () {
            return function () {
              r != null &&
                o(
                  "WAWebMediaInMemoryBlobCache",
                ).InMemoryMediaBlobCache.decreaseUsageCount(e);
            };
          },
          [e, r],
        ),
        r
      );
    }
    l.default = _;
  },
  98,
);
