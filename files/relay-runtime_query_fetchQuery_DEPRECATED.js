__d(
  "relay-runtime/query/fetchQuery_DEPRECATED",
  [
    "relay-runtime/query/GraphQLTag",
    "relay-runtime/store/RelayModernOperationDescriptor",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n(
        "relay-runtime/store/RelayModernOperationDescriptor",
      ).createOperationDescriptor,
      l = n("relay-runtime/query/GraphQLTag").getRequest;
    function s(t, n, r, o) {
      var a = l(n);
      if (a.params.operationKind !== "query")
        throw new Error("fetchQuery: Expected query operation");
      var i = e(a, r, o);
      return t
        .execute({ operation: i })
        .map(function () {
          return t.lookup(i.fragment).data;
        })
        .toPromise();
    }
    a.exports = s;
  },
  null,
);
