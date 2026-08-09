__d(
  "createWorkerQuery",
  [
    "FBLogger",
    "IGDWebUtils",
    "MAWRotateDTSG",
    "WARetryableError",
    "WorkerRelayNetwork",
    "asyncToGeneratorRuntime",
    "executeGraphQLQuery",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a = o("relay-runtime").getRequest(e);
          if (a.params.operationKind !== "query")
            throw r("FBLogger")("messenger_web").mustfixThrow(
              "createWorkerQuery: Expected query operation",
            );
          var i = yield o("WorkerRelayNetwork").getWorkerNetworkExecute();
          n == null || n.onExecute == null || n.onExecute();
          var l = o("IGDWebUtils").isOnInstagramWeb(),
            s = yield o("executeGraphQLQuery")
              .executeGraphQLQuery(i, e, t)
              .then(function (e) {
                return e.toPromise();
              })
              .then(function (e) {
                var t;
                n == null || n.onResponse == null || n.onResponse(e);
                var r = Array.isArray(e)
                  ? (t = e[0]) == null
                    ? void 0
                    : t.data
                  : e == null
                    ? void 0
                    : e.data;
                if (r != null) return r;
              })
              .catch(function (e) {
                if (
                  (("code" in e && e.code === 1357004) ||
                    ("message" in e && e.message.indexOf("1357004") !== -1) ||
                    (typeof e == "string" && e.indexOf("1357004") !== -1)) &&
                  !l
                )
                  return (
                    r("FBLogger")("messenger_web").info(
                      "Failed with expired DTSG, attempting to rotate.",
                    ),
                    o("MAWRotateDTSG")
                      .tryRotateDTSG()
                      .then(function (t) {
                        throw t ? new (r("WARetryableError"))(e) : e;
                      })
                  );
                throw e;
              });
          return s;
        })),
        s.apply(this, arguments)
      );
    }
    l.default = e;
  },
  98,
);
