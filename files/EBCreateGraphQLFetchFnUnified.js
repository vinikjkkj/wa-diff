__d(
  "EBCreateGraphQLFetchFnUnified",
  [
    "EBAPIWorkerCheck",
    "WorkerRelay",
    "WorkerRelayNetwork",
    "asyncToGeneratorRuntime",
    "createMainThreadQuery",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("requireDeferred")("CometRelayEnvironment").__setRef(
      "EBCreateGraphQLFetchFnUnified",
    );
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = o("EBAPIWorkerCheck").runningInWorker();
          if (t)
            return (
              yield o("WorkerRelayNetwork").createWorkerNetworkExecute(),
              o("WorkerRelay").createWorkerQuery
            );
          var n = yield e.load();
          return function (e, t) {
            var r = o("createMainThreadQuery").getWorkerLikeRelayEnvironment(n);
            return o("createMainThreadQuery").createMainThreadQuery(e, t, r);
          };
        })),
        u.apply(this, arguments)
      );
    }
    l.createGraphQlFetchFnUnified = s;
  },
  98,
);
