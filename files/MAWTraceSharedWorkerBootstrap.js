__d(
  "MAWTraceSharedWorkerBootstrap",
  [
    "Deferred",
    "MAWStartupLoggingUtils",
    "MWInteractionTracing",
    "MWInteractionTracingKey",
    "emptyFunction",
    "getErrorSafe",
    "pageID",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = [
          {
            end: "load_hrp_end",
            name: "MAWWebWorkerSingleton.loadInitialHRP",
            start: "load_hrp_start",
          },
          {
            end: "get_worker_reference_end",
            name: "MAWWebWorkerSingleton.getInitialWorkerReference",
            start: "get_worker_reference_start",
          },
          {
            end: "worker_connection_end",
            name: "MAWWebWorkerSingleton.waitForInitialConnection",
            start: "worker_constructor_start",
          },
        ].map(function (e) {
          return babelHelpers.extends({}, e, {
            done: new (r("Deferred"))(),
            started: !1,
          });
        }),
        a = function (a) {
          if (a.type === "point") {
            var t = function (n) {
              a.data.event === n.start && !n.started
                ? ((n.started = !0),
                  r("promiseDone")(
                    r("MWInteractionTracing").trace(
                      {
                        group: "worker-setup",
                        id: o("MWInteractionTracingKey").micTraceId(
                          r("pageID"),
                        ),
                      },
                      n.name,
                      {
                        annotations: {
                          includesRetries: !0,
                          reason: e,
                          workerVersion: 2,
                        },
                      },
                      function () {
                        return n.done.getPromise();
                      },
                    ),
                    r("emptyFunction"),
                    r("emptyFunction"),
                  ))
                : a.data.event === n.end && n.started && n.done.resolve();
            };
            for (var i of n) t(i);
          }
          o("MAWStartupLoggingUtils").logSharedWorkerQPLEvents(a);
        },
        i = function (t) {
          for (var e of n) e.started && e.done.reject(r("getErrorSafe")(t));
        };
      try {
        return t(a).then(
          function (e) {
            return e;
          },
          function (e) {
            throw (i(e), e);
          },
        );
      } catch (e) {
        throw (i(e), e);
      }
    }
    l.traceSharedWorkerBootstrap = e;
  },
  98,
);
