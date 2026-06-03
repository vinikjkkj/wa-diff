__d(
  "WAWebDeleteAllCacheStorage",
  ["Promise", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i) {
    var e;
    function l() {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = window.caches;
          if (t != null) {
            var r = yield t.keys();
            yield (e || (e = n("Promise"))).all(
              r.map(function (e) {
                return t.delete(e);
              }),
            );
          }
        })),
        s.apply(this, arguments)
      );
    }
    i.default = l;
  },
  66,
);
