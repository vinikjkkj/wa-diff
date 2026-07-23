__d(
  "notifyServerOnNavigation",
  [
    "Env",
    "JSScheduler",
    "Promise",
    "cometAsyncFetch",
    "fetchAnonymousCometRoute",
    "parseCometRouteFetchPayload",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(t, a) {
      var i = function () {
        return new (u || (u = n("Promise")))(function (n, i) {
          (s || (s = o("JSScheduler"))).scheduleLoggingPriCallback(function () {
            r("promiseDone")(
              r("cometAsyncFetch")("/ajax/navigation/", {
                data: {
                  client_previous_actor_id: a !== "0" ? a : null,
                  route_url: t,
                  routing_namespace: (e || (e = r("Env"))).routing_namespace,
                },
                method: "POST",
              }),
              n,
              i,
            );
          });
        });
      };
      return o("fetchAnonymousCometRoute")
        .retryFetchOnError(i)
        .then(function (e) {
          return (
            o("fetchAnonymousCometRoute").handleSRandJSModules(
              e.sr_payload,
              "comet_route_navigation",
              e.log_roots,
            ),
            o("fetchAnonymousCometRoute").handleBulkRouteFetchToggle(e),
            r("parseCometRouteFetchPayload")(e.payload)
          );
        });
    }
    l.default = c;
  },
  98,
);
