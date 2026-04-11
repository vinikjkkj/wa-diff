__d(
  "relay-runtime/store/RelayModernOperationDescriptor",
  [
    "invariant",
    "relay-runtime/store/RelayConcreteVariables",
    "relay-runtime/store/RelayModernSelector",
    "relay-runtime/store/RelayStoreUtils",
    "relay-runtime/util/RelayFeatureFlags",
    "relay-runtime/util/deepFreeze",
    "relay-runtime/util/getRequestIdentifier",
    "relay-runtime/util/stableCopy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (e || (e = n("relay-runtime/util/stableCopy"))).hasCycle,
      c = n("relay-runtime/store/RelayConcreteVariables").getOperationVariables,
      d = n(
        "relay-runtime/store/RelayModernSelector",
      ).createNormalizationSelector,
      m = n("relay-runtime/store/RelayModernSelector").createReaderSelector,
      p = n("relay-runtime/store/RelayStoreUtils").ROOT_ID;
    function _(e, t, r, o) {
      o === void 0 && (o = p);
      var a = e.operation,
        i = c(a, e.params.providedVariables, t);
      n("relay-runtime/util/RelayFeatureFlags")
        .ENABLE_CYLE_DETECTION_IN_VARIABLES &&
        (!u(i) || l(0, 82931, e.operation.name));
      var s = f(e, i, r),
        _ = { fragment: m(e.fragment, o, i, s), request: s, root: d(a, o, i) };
      return _;
    }
    function f(e, t, r) {
      var o = {
        identifier: n("relay-runtime/util/getRequestIdentifier")(e.params, t),
        node: e,
        variables: t,
        cacheConfig: r,
      };
      return o;
    }
    a.exports = { createOperationDescriptor: _, createRequestDescriptor: f };
  },
  null,
);
