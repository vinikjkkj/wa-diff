__d(
  "relay-runtime/store/observeQueryExperimental",
  [
    "relay-runtime/store/RelayModernOperationDescriptor",
    "relay-runtime/store/observeFragmentExperimental",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n(
        "relay-runtime/store/observeFragmentExperimental",
      ).observeFragment,
      l = n(
        "relay-runtime/store/RelayModernOperationDescriptor",
      ).createOperationDescriptor;
    function s(t, n, r) {
      var o,
        a = l(n, r),
        i = {
          __fragmentOwner: a.request,
          __fragments:
            ((o = {}), (o[a.fragment.node.name] = a.request.variables), o),
          __id: a.fragment.dataID,
        },
        s = a.request.node.fragment;
      return e(t, s, i);
    }
    a.exports = { observeQuery: s };
  },
  null,
);
