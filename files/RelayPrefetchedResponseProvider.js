__d(
  "RelayPrefetchedResponseProvider",
  ["RelayGraphQLRequestUtils", "RelayPrefetchedStreamCache", "RelayRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      get: function (t, n, a, i, l) {
        return o("RelayRuntime").Observable.create(function (e) {
          var l = function (n) {
              if (!n) {
                e.complete();
                return;
              }
              if (n.errors) {
                for (var t of n.errors)
                  if (t.severity === "CRITICAL") {
                    e.error(
                      r("RelayGraphQLRequestUtils").createErrorFromPayload(
                        t,
                        i,
                      ),
                    );
                    return;
                  }
              }
              e.next(n);
            },
            s = o("RelayPrefetchedStreamCache").transformQueryIDForE2ETest(
              i,
              n,
            ),
            u = o("RelayPrefetchedStreamCache").subscribe(
              t,
              s,
              a,
              {
                complete: e.complete,
                error: function (n) {
                  return e.complete();
                },
                next: l,
                start: function () {},
              },
              i,
            );
          return function () {
            (u != null && (u.unsubscribe(), (u = null)),
              o("RelayPrefetchedStreamCache").clear(t, s, a));
          };
        });
      },
    };
    i.exports = e;
  },
  34,
);
