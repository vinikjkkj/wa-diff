__d(
  "RelayHooks",
  [
    "ReactiveExecutorResolverFragments",
    "RelayFBEnvironmentActorID",
    "configureRelayForWWW",
    "react-relay/relay-hooks/EntryPointContainer.react",
    "react-relay/relay-hooks/RelayEnvironmentProvider",
    "react-relay/relay-hooks/loadEntryPoint",
    "react-relay/relay-hooks/loadQuery",
    "react-relay/relay-hooks/preloadQuery_DEPRECATED",
    "react-relay/relay-hooks/prepareEntryPoint_DEPRECATED",
    "react-relay/relay-hooks/useClientQuery",
    "react-relay/relay-hooks/useEntryPointLoader",
    "react-relay/relay-hooks/useFragment",
    "react-relay/relay-hooks/useLazyLoadQuery",
    "react-relay/relay-hooks/usePaginationFragment",
    "react-relay/relay-hooks/usePreloadedQuery",
    "react-relay/relay-hooks/useQueryLoader",
    "react-relay/relay-hooks/useRefetchableFragment",
    "react-relay/relay-hooks/useRelayEnvironment",
    "react-relay/relay-hooks/useSubscribeToInvalidationState",
    "relay-runtime",
    "relay-runtime/query/PreloadableQueryRegistry",
    "useFBMutation",
    "useFBSubscription",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("ReactiveExecutorResolverFragments").readFragment,
      l = n("RelayFBEnvironmentActorID").useActorID,
      s = n("react-relay/relay-hooks/loadQuery").loadQuery,
      u = n("relay-runtime").fetchQuery,
      c = n("relay-runtime").graphql,
      d = n("relay-runtime").readInlineData;
    (n("configureRelayForWWW")(),
      (a.exports = {
        EntryPointContainer: n(
          "react-relay/relay-hooks/EntryPointContainer.react",
        ),
        PreloadableQueryRegistry: n(
          "relay-runtime/query/PreloadableQueryRegistry",
        ),
        RelayEnvironmentProvider: n(
          "react-relay/relay-hooks/RelayEnvironmentProvider",
        ),
        fetchQuery: u,
        graphql: c,
        loadQuery: s,
        loadEntryPoint: n("react-relay/relay-hooks/loadEntryPoint"),
        preloadQuery_DEPRECATED: n(
          "react-relay/relay-hooks/preloadQuery_DEPRECATED",
        ),
        prepareEntryPoint_DEPRECATED: n(
          "react-relay/relay-hooks/prepareEntryPoint_DEPRECATED",
        ),
        readInlineData: d,
        useActorID: l,
        useClientQuery: n("react-relay/relay-hooks/useClientQuery"),
        useFragment: n("react-relay/relay-hooks/useFragment"),
        useLazyLoadQuery: n("react-relay/relay-hooks/useLazyLoadQuery"),
        useEntryPointLoader: n("react-relay/relay-hooks/useEntryPointLoader"),
        useQueryLoader: n("react-relay/relay-hooks/useQueryLoader"),
        usePaginationFragment: n(
          "react-relay/relay-hooks/usePaginationFragment",
        ),
        useMutation: n("useFBMutation"),
        usePreloadedQuery: n("react-relay/relay-hooks/usePreloadedQuery"),
        useRefetchableFragment: n(
          "react-relay/relay-hooks/useRefetchableFragment",
        ),
        useRelayEnvironment: n("react-relay/relay-hooks/useRelayEnvironment"),
        useSubscribeToInvalidationState: n(
          "react-relay/relay-hooks/useSubscribeToInvalidationState",
        ),
        useSubscription: n("useFBSubscription"),
        readFragment: e,
      }));
  },
  null,
);
