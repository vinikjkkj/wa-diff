__d(
  "WorkerRelay",
  [
    "WorkerRelayNetwork",
    "createWorkerMutation",
    "createWorkerQuery",
    "executeGraphQLQuery",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    i.exports = {
      createWorkerMutation: r("createWorkerMutation"),
      createWorkerQuery: r("createWorkerQuery"),
      executeGraphQLQuery: o("executeGraphQLQuery").executeGraphQLQuery,
      getWorkerRelayEnvironment:
        o("WorkerRelayNetwork").getWorkerNetworkExecute,
      graphql: o("relay-runtime").graphql,
    };
  },
  34,
);
