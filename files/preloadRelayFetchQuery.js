__d(
  "preloadRelayFetchQuery",
  ["relay-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r) {
      r === void 0 && (r = "store-or-network");
      var a = o("relay-runtime").getRequest(t),
        i = o("relay-runtime").createOperationDescriptor(a, n);
      e.retain(i);
      var l = o("relay-runtime").fetchQuery(e, t, n, { fetchPolicy: r });
      return (l.subscribe({}), l);
    }
    l.default = e;
  },
  98,
);
