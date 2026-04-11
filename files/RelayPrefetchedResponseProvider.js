__d(
  "RelayPrefetchedResponseProvider",
  ["RelayGraphQLRequestUtils", "RelayPrefetchedStreamCache", "RelayRuntime"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("RelayRuntime").Observable,
      l = {
        get: function (r, o, a, i, l) {
          return e.create(function (e) {
            var t = function (r) {
                if (!r) {
                  e.complete();
                  return;
                }
                if (r.errors) {
                  for (var t of r.errors)
                    if (t.severity === "CRITICAL") {
                      e.error(
                        n("RelayGraphQLRequestUtils").createErrorFromPayload(
                          t,
                          i,
                        ),
                      );
                      return;
                    }
                }
                e.next(r);
              },
              l = n("RelayPrefetchedStreamCache").transformQueryIDForE2ETest(
                i,
                o,
              ),
              s = n("RelayPrefetchedStreamCache").subscribe(
                r,
                l,
                a,
                {
                  complete: e.complete,
                  error: function (n) {
                    return e.complete();
                  },
                  next: t,
                  start: function () {},
                },
                i,
              );
            return function () {
              (s != null && (s.unsubscribe(), (s = null)),
                n("RelayPrefetchedStreamCache").clear(r, l, a));
            };
          });
        },
      };
    a.exports = l;
  },
  null,
);
