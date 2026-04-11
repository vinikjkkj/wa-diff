__d(
  "relay-runtime/mutations/readUpdatableQuery",
  [
    "relay-runtime/mutations/createUpdatableProxy",
    "relay-runtime/query/GraphQLTag",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("relay-runtime/query/GraphQLTag").getUpdatableQuery,
      l = n(
        "relay-runtime/mutations/createUpdatableProxy",
      ).createUpdatableProxy;
    function s(t, n, r, o) {
      var a = e(t);
      return { updatableData: l(r.getRoot(), n, a.fragment.selections, r, o) };
    }
    a.exports = { readUpdatableQuery: s };
  },
  null,
);
