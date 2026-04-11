__d(
  "relay-runtime",
  [
    "Promise",
    "relay-runtime/experimental",
    "relay-runtime/handlers/RelayDefaultHandlerProvider",
    "relay-runtime/handlers/connection/ConnectionHandler",
    "relay-runtime/handlers/connection/ConnectionInterface",
    "relay-runtime/handlers/connection/MutationHandlers",
    "relay-runtime/mutations/RelayDeclarativeMutationConfig",
    "relay-runtime/mutations/applyOptimisticMutation",
    "relay-runtime/mutations/commitLocalUpdate",
    "relay-runtime/mutations/commitMutation",
    "relay-runtime/network/RelayNetwork",
    "relay-runtime/network/RelayObservable",
    "relay-runtime/network/RelayQueryResponseCache",
    "relay-runtime/query/GraphQLTag",
    "relay-runtime/query/PreloadableQueryRegistry",
    "relay-runtime/query/fetchQuery",
    "relay-runtime/query/fetchQueryInternal",
    "relay-runtime/query/fetchQuery_DEPRECATED",
    "relay-runtime/store/ClientID",
    "relay-runtime/store/RelayConcreteVariables",
    "relay-runtime/store/RelayModernEnvironment",
    "relay-runtime/store/RelayModernOperationDescriptor",
    "relay-runtime/store/RelayModernRecord",
    "relay-runtime/store/RelayModernSelector",
    "relay-runtime/store/RelayModernStore",
    "relay-runtime/store/RelayOperationTracker",
    "relay-runtime/store/RelayRecordSource",
    "relay-runtime/store/RelayStoreUtils",
    "relay-runtime/store/ResolverFragments",
    "relay-runtime/store/ViewerPattern",
    "relay-runtime/store/createFragmentSpecResolver",
    "relay-runtime/store/createRelayContext",
    "relay-runtime/store/createRelayLoggingContext",
    "relay-runtime/store/isRelayModernEnvironment",
    "relay-runtime/store/live-resolvers/LiveResolverSuspenseSentinel",
    "relay-runtime/store/normalizeResponse",
    "relay-runtime/store/readInlineData",
    "relay-runtime/subscription/requestSubscription",
    "relay-runtime/util/RelayConcreteNode",
    "relay-runtime/util/RelayDefaultHandleKey",
    "relay-runtime/util/RelayError",
    "relay-runtime/util/RelayFeatureFlags",
    "relay-runtime/util/RelayProfiler",
    "relay-runtime/util/RelayReplaySubject",
    "relay-runtime/util/createPayloadFor3DField",
    "relay-runtime/util/deepFreeze",
    "relay-runtime/util/getFragmentIdentifier",
    "relay-runtime/util/getPaginationMetadata",
    "relay-runtime/util/getPaginationVariables",
    "relay-runtime/util/getPendingOperationsForFragment",
    "relay-runtime/util/getRefetchMetadata",
    "relay-runtime/util/getRelayHandleKey",
    "relay-runtime/util/getRequestIdentifier",
    "relay-runtime/util/getValueAtPath",
    "relay-runtime/util/handlePotentialSnapshotErrors",
    "relay-runtime/util/isPromise",
    "relay-runtime/util/isScalarAndEqual",
    "relay-runtime/util/recycleNodesInto",
    "relay-runtime/util/stableCopy",
    "relay-runtime/util/withProvidedVariables",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l,
      s,
      u,
      c = n("relay-runtime/experimental").isErrorResult,
      d = n("relay-runtime/experimental").isValueResult,
      m = n("relay-runtime/store/ClientID").generateClientID,
      p = n("relay-runtime/store/ClientID").generateUniqueClientID,
      _ = n("relay-runtime/store/ClientID").isClientID,
      f = n(
        "relay-runtime/store/live-resolvers/LiveResolverSuspenseSentinel",
      ).isSuspenseSentinel,
      g = n(
        "relay-runtime/store/live-resolvers/LiveResolverSuspenseSentinel",
      ).suspenseSentinel,
      h = n(
        "relay-runtime/util/handlePotentialSnapshotErrors",
      ).handlePotentialSnapshotErrors,
      y = (e || (e = n("relay-runtime/util/stableCopy"))).hasCycle,
      C = e.stableCopy;
    a.exports = {
      Environment: n("relay-runtime/store/RelayModernEnvironment"),
      Network: n("relay-runtime/network/RelayNetwork"),
      Observable: n("relay-runtime/network/RelayObservable"),
      QueryResponseCache: n("relay-runtime/network/RelayQueryResponseCache"),
      RecordSource: n("relay-runtime/store/RelayRecordSource"),
      Record: s || (s = n("relay-runtime/store/RelayModernRecord")),
      ReplaySubject: n("relay-runtime/util/RelayReplaySubject"),
      Store: n("relay-runtime/store/RelayModernStore"),
      areEqualSelectors: n("relay-runtime/store/RelayModernSelector")
        .areEqualSelectors,
      createFragmentSpecResolver: n(
        "relay-runtime/store/createFragmentSpecResolver",
      ),
      createNormalizationSelector: n("relay-runtime/store/RelayModernSelector")
        .createNormalizationSelector,
      createOperationDescriptor: n(
        "relay-runtime/store/RelayModernOperationDescriptor",
      ).createOperationDescriptor,
      createReaderSelector: n("relay-runtime/store/RelayModernSelector")
        .createReaderSelector,
      createRequestDescriptor: n(
        "relay-runtime/store/RelayModernOperationDescriptor",
      ).createRequestDescriptor,
      getArgumentValues: n("relay-runtime/store/RelayStoreUtils")
        .getArgumentValues,
      getDataIDsFromFragment: n("relay-runtime/store/RelayModernSelector")
        .getDataIDsFromFragment,
      getDataIDsFromObject: n("relay-runtime/store/RelayModernSelector")
        .getDataIDsFromObject,
      getNode: n("relay-runtime/query/GraphQLTag").getNode,
      getFragment: n("relay-runtime/query/GraphQLTag").getFragment,
      getInlineDataFragment: n("relay-runtime/query/GraphQLTag")
        .getInlineDataFragment,
      getModuleComponentKey: n("relay-runtime/store/RelayStoreUtils")
        .getModuleComponentKey,
      getModuleOperationKey: n("relay-runtime/store/RelayStoreUtils")
        .getModuleOperationKey,
      getPaginationFragment: n("relay-runtime/query/GraphQLTag")
        .getPaginationFragment,
      getPluralSelector: n("relay-runtime/store/RelayModernSelector")
        .getPluralSelector,
      getRefetchableFragment: n("relay-runtime/query/GraphQLTag")
        .getRefetchableFragment,
      getRequest: n("relay-runtime/query/GraphQLTag").getRequest,
      getRequestIdentifier: n("relay-runtime/util/getRequestIdentifier"),
      getSelector: n("relay-runtime/store/RelayModernSelector").getSelector,
      getSelectorsFromObject: n("relay-runtime/store/RelayModernSelector")
        .getSelectorsFromObject,
      getSingularSelector: n("relay-runtime/store/RelayModernSelector")
        .getSingularSelector,
      getStorageKey: n("relay-runtime/store/RelayStoreUtils").getStorageKey,
      getVariablesFromFragment: n("relay-runtime/store/RelayModernSelector")
        .getVariablesFromFragment,
      getVariablesFromObject: n("relay-runtime/store/RelayModernSelector")
        .getVariablesFromObject,
      getVariablesFromPluralFragment: n(
        "relay-runtime/store/RelayModernSelector",
      ).getVariablesFromPluralFragment,
      getVariablesFromSingularFragment: n(
        "relay-runtime/store/RelayModernSelector",
      ).getVariablesFromSingularFragment,
      handlePotentialSnapshotErrors: h,
      graphql: n("relay-runtime/query/GraphQLTag").graphql,
      isErrorResult: c,
      isValueResult: d,
      isFragment: n("relay-runtime/query/GraphQLTag").isFragment,
      isInlineDataFragment: n("relay-runtime/query/GraphQLTag")
        .isInlineDataFragment,
      isSuspenseSentinel: f,
      suspenseSentinel: g,
      isRequest: n("relay-runtime/query/GraphQLTag").isRequest,
      readInlineData: n("relay-runtime/store/readInlineData"),
      readFragment: n("relay-runtime/store/ResolverFragments").readFragment,
      MutationTypes: n("relay-runtime/mutations/RelayDeclarativeMutationConfig")
        .MutationTypes,
      RangeOperations: n(
        "relay-runtime/mutations/RelayDeclarativeMutationConfig",
      ).RangeOperations,
      DefaultHandlerProvider: n(
        "relay-runtime/handlers/RelayDefaultHandlerProvider",
      ),
      ConnectionHandler: n(
        "relay-runtime/handlers/connection/ConnectionHandler",
      ),
      MutationHandlers: n("relay-runtime/handlers/connection/MutationHandlers"),
      VIEWER_ID: n("relay-runtime/store/ViewerPattern").VIEWER_ID,
      VIEWER_TYPE: n("relay-runtime/store/ViewerPattern").VIEWER_TYPE,
      applyOptimisticMutation: n(
        "relay-runtime/mutations/applyOptimisticMutation",
      ),
      commitLocalUpdate: n("relay-runtime/mutations/commitLocalUpdate"),
      commitMutation: n("relay-runtime/mutations/commitMutation"),
      fetchQuery: n("relay-runtime/query/fetchQuery"),
      fetchQuery_DEPRECATED: n("relay-runtime/query/fetchQuery_DEPRECATED"),
      isRelayModernEnvironment: n(
        "relay-runtime/store/isRelayModernEnvironment",
      ),
      requestSubscription: n("relay-runtime/subscription/requestSubscription"),
      ConnectionInterface: n(
        "relay-runtime/handlers/connection/ConnectionInterface",
      ),
      PreloadableQueryRegistry: n(
        "relay-runtime/query/PreloadableQueryRegistry",
      ),
      RelayProfiler: n("relay-runtime/util/RelayProfiler"),
      createPayloadFor3DField: n("relay-runtime/util/createPayloadFor3DField"),
      RelayConcreteNode: n("relay-runtime/util/RelayConcreteNode"),
      RelayError: n("relay-runtime/util/RelayError"),
      RelayFeatureFlags: n("relay-runtime/util/RelayFeatureFlags"),
      DEFAULT_HANDLE_KEY: n("relay-runtime/util/RelayDefaultHandleKey")
        .DEFAULT_HANDLE_KEY,
      FRAGMENTS_KEY: n("relay-runtime/store/RelayStoreUtils").FRAGMENTS_KEY,
      FRAGMENT_OWNER_KEY: n("relay-runtime/store/RelayStoreUtils")
        .FRAGMENT_OWNER_KEY,
      ID_KEY: n("relay-runtime/store/RelayStoreUtils").ID_KEY,
      REF_KEY: n("relay-runtime/store/RelayStoreUtils").REF_KEY,
      REFS_KEY: n("relay-runtime/store/RelayStoreUtils").REFS_KEY,
      ROOT_ID: n("relay-runtime/store/RelayStoreUtils").ROOT_ID,
      ROOT_TYPE: n("relay-runtime/store/RelayStoreUtils").ROOT_TYPE,
      TYPENAME_KEY: n("relay-runtime/store/RelayStoreUtils").TYPENAME_KEY,
      deepFreeze: u || (u = n("relay-runtime/util/deepFreeze")),
      generateClientID: m,
      generateUniqueClientID: p,
      getRelayHandleKey: n("relay-runtime/util/getRelayHandleKey"),
      isClientID: _,
      isPromise: n("relay-runtime/util/isPromise"),
      isScalarAndEqual: n("relay-runtime/util/isScalarAndEqual"),
      recycleNodesInto: n("relay-runtime/util/recycleNodesInto"),
      stableCopy: C,
      hasCycle: y,
      getFragmentIdentifier: n("relay-runtime/util/getFragmentIdentifier"),
      getRefetchMetadata: n("relay-runtime/util/getRefetchMetadata"),
      getPaginationMetadata: n("relay-runtime/util/getPaginationMetadata"),
      getPaginationVariables: n("relay-runtime/util/getPaginationVariables"),
      getPendingOperationsForFragment: n(
        "relay-runtime/util/getPendingOperationsForFragment",
      ),
      getValueAtPath: n("relay-runtime/util/getValueAtPath"),
      __internal: {
        ResolverFragments: n("relay-runtime/store/ResolverFragments"),
        OperationTracker: n("relay-runtime/store/RelayOperationTracker"),
        createRelayContext: n("relay-runtime/store/createRelayContext"),
        createRelayLoggingContext: n(
          "relay-runtime/store/createRelayLoggingContext",
        ),
        getOperationVariables: n("relay-runtime/store/RelayConcreteVariables")
          .getOperationVariables,
        getLocalVariables: n("relay-runtime/store/RelayConcreteVariables")
          .getLocalVariables,
        fetchQuery: n("relay-runtime/query/fetchQueryInternal").fetchQuery,
        fetchQueryDeduped: n("relay-runtime/query/fetchQueryInternal")
          .fetchQueryDeduped,
        getPromiseForActiveRequest: n("relay-runtime/query/fetchQueryInternal")
          .getPromiseForActiveRequest,
        getObservableForActiveRequest: n(
          "relay-runtime/query/fetchQueryInternal",
        ).getObservableForActiveRequest,
        normalizeResponse: n("relay-runtime/store/normalizeResponse"),
        withProvidedVariables: n("relay-runtime/util/withProvidedVariables"),
      },
    };
  },
  null,
);
