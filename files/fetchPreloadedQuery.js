__d(
  "fetchPreloadedQuery",
  ["relay-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var r = n.networkCacheConfig,
        a = n.source,
        i = n.variables,
        l = o("relay-runtime").createOperationDescriptor(t, i, r);
      return o("relay-runtime")
        .__internal.fetchQueryDeduped(e, l.request.identifier, function () {
          return e === n.environment && a != null
            ? e.executeWithSource({ operation: l, source: a })
            : e.execute({ operation: l });
        })
        .map(function () {
          var t = e.lookup(l.fragment);
          return (
            o("relay-runtime").handlePotentialSnapshotErrors(e, t.fieldErrors),
            t.data
          );
        });
    }
    l.default = e;
  },
  98,
);
