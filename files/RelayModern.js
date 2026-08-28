__d(
  "RelayModern",
  [
    "RelayFBEnvironmentDefinitions",
    "RelayFBMutations",
    "RelayFBSubscription",
    "configureRelayForWWW",
    "enqueueMutation",
    "react-relay/ReactRelayContext",
    "react-relay/ReactRelayFragmentContainer",
    "react-relay/ReactRelayLocalQueryRenderer",
    "react-relay/ReactRelayPaginationContainer",
    "react-relay/ReactRelayQueryRenderer",
    "react-relay/ReactRelayRefetchContainer",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = n("RelayFBEnvironmentDefinitions").createEnvironment,
      s = n("RelayFBEnvironmentDefinitions").createEnvironmentFactory,
      u = n("enqueueMutation").enqueueMutation,
      c = (e = n("relay-runtime")).fetchQuery_DEPRECATED;
    n("configureRelayForWWW")();
    var d = n("RelayFBSubscription").addFBisms(e.requestSubscription);
    a.exports = {
      ConnectionHandler: e.ConnectionHandler,
      QueryRenderer: n("react-relay/ReactRelayQueryRenderer"),
      LocalQueryRenderer: n("react-relay/ReactRelayLocalQueryRenderer"),
      MutationTypes: e.MutationTypes,
      RangeOperations: e.RangeOperations,
      ReactRelayContext: n("react-relay/ReactRelayContext"),
      applyOptimisticMutation: e.applyOptimisticMutation,
      commitLocalUpdate: e.commitLocalUpdate,
      createFragmentContainer: n("react-relay/ReactRelayFragmentContainer")
        .createContainer,
      createPaginationContainer: n("react-relay/ReactRelayPaginationContainer")
        .createContainer,
      createRefetchContainer: n("react-relay/ReactRelayRefetchContainer")
        .createContainer,
      fetchQuery_DEPRECATED: e.fetchQuery_DEPRECATED,
      graphql: e.graphql,
      readInlineData: e.readInlineData,
      commitMutation: n("RelayFBMutations").addFBisms(e.commitMutation),
      enqueueMutation: n("RelayFBMutations").addFBisms(u),
      requestSubscription: d,
      createEnvironment: l,
      createEnvironmentFactory: s,
      fetchQuery: c,
    };
  },
  null,
);
