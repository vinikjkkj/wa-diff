__d(
  "createWorkerMutation",
  [
    "FBLogger",
    "WorkerRelayNetwork",
    "asyncToGeneratorRuntime",
    "executeGraphQLQuery",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("relay-runtime").getRequest(e);
      if (t.params.operationKind !== "mutation")
        throw r("FBLogger")("messenger_web").mustfixThrow(
          "createWorkerMutation: Expected mutation operation",
        );
      var a = o("WorkerRelayNetwork").getWorkerNetworkExecute(),
        i = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            var n = yield a;
            return o("executeGraphQLQuery")
              .executeGraphQLQuery(n, e, t)
              .then(function (e) {
                return e.toPromise();
              })
              .then(function (e) {
                var t,
                  n = Array.isArray(e)
                    ? (t = e[0]) == null
                      ? void 0
                      : t.data
                    : e == null
                      ? void 0
                      : e.data;
                return n == null ? null : n;
              });
          });
          return function (n) {
            return t.apply(this, arguments);
          };
        })();
      return [i];
    }
    l.default = e;
  },
  98,
);
