__d(
  "WAWebCoexV2RetryMarkerStore",
  [
    "WAWebModelStorageUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a = u(e, t);
          return o("WAWebModelStorageUtils")
            .getStorage()
            .lock(
              ["message-info"],
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var t = e[0];
                    if ((yield t.get(a)) == null)
                      throw r("err")(
                        "[coexv2] missing agent message-info row for retry marker",
                      );
                    yield t.merge(a, { hasAdditionalRetryTargets: !0 });
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            );
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t) {
      return [
        e.toString(),
        o("WAWebWidFactory").asUserWidOrThrow(t).toString(),
      ];
    }
    l.markCoexV2RepresentedTargets = e;
  },
  98,
);
