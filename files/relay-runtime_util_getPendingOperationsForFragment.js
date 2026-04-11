__d(
  "relay-runtime/util/getPendingOperationsForFragment",
  ["relay-runtime/query/fetchQueryInternal"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n(
      "relay-runtime/query/fetchQueryInternal",
    ).getPromiseForActiveRequest;
    function l(t, n, r) {
      var o,
        a,
        i = [],
        l = e(t, r);
      if (l != null) i = [r];
      else {
        var s,
          u,
          c = t.getOperationTracker(),
          d = c.getPendingOperationsAffectingOwner(r);
        ((i = (s = d == null ? void 0 : d.pendingOperations) != null ? s : []),
          (l = (u = d == null ? void 0 : d.promise) != null ? u : null));
      }
      if (!l) return null;
      var m =
        (o =
          (a = i) == null
            ? void 0
            : a
                .map(function (e) {
                  return e.node.params.name;
                })
                .join(",")) != null
          ? o
          : null;
      (m == null || m.length === 0) && (m = "Unknown pending operation");
      var p = n.name,
        _ = m === p ? "Relay(" + m + ")" : "Relay(" + m + ":" + p + ")";
      return (
        (l.displayName = _),
        t.__log({
          name: "pendingoperation.found",
          fragment: n,
          fragmentOwner: r,
          pendingOperations: i,
        }),
        { promise: l, pendingOperations: i }
      );
    }
    a.exports = l;
  },
  null,
);
