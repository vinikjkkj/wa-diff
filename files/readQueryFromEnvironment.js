__d(
  "readQueryFromEnvironment",
  ["relay-runtime", "relay-runtime/store/RelayModernOperationDescriptor"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var r = o(
          "relay-runtime/store/RelayModernOperationDescriptor",
        ).createOperationDescriptor(t, n),
        a = e.lookup(r.fragment);
      return (
        o("relay-runtime").handlePotentialSnapshotErrors(e, a.fieldErrors),
        { data: a.data, isMissingData: a.isMissingData }
      );
    }
    l.default = e;
  },
  98,
);
