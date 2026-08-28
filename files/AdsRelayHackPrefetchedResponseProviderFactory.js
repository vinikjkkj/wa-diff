__d(
  "AdsRelayHackPrefetchedResponseProviderFactory",
  [
    "AdsRelayHackPreloaderCache",
    "FBLogger",
    "RelayGraphQLRequestUtils",
    "memoizeByReference",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return {
        get: function (n, a, i, l, s) {
          return o("relay-runtime").Observable.create(function (t) {
            var s = function (o) {
                if (!o) {
                  t.complete();
                  return;
                }
                if (o.errors) {
                  for (var n of o.errors)
                    if (n.severity === "CRITICAL") {
                      (r("FBLogger")("andromeda", "relay_hack_preloaders").warn(
                        "Received a critical error from Relay preloader. Query name: %s, Error: %s",
                        l,
                        n.message,
                      ),
                        e.ignoreCriticalErrors === !0
                          ? t.complete()
                          : t.error(
                              r(
                                "RelayGraphQLRequestUtils",
                              ).createErrorFromPayload(n, l),
                            ));
                      return;
                    }
                }
                if (o.data != null && e.subsetMatching != null) {
                  var a = e.subsetMatching.slicePrefetchedResponse(i, o.data);
                  t.next(babelHelpers.extends({}, o, { data: a }));
                } else t.next(o);
              },
              u = o("AdsRelayHackPreloaderCache").subscribe(
                n,
                a,
                i,
                {
                  complete: t.complete,
                  error: function (n) {
                    return t.complete();
                  },
                  next: s,
                  start: function () {},
                },
                e,
                l,
              );
            return function () {
              (u != null && (u.unsubscribe(), (u = null)),
                o(
                  "AdsRelayHackPreloaderCache",
                ).scheduleClearAfterPreloadingDone(n, a, i));
            };
          });
        },
      };
    }
    var s = r("memoizeByReference")(e);
    l.default = s;
  },
  98,
);
