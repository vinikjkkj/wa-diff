__d(
  "relay-runtime/util/getRefetchMetadata",
  ["invariant"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n, r;
      ((n = e.metadata) == null ? void 0 : n.plural) !== !0 ||
        l(0, 14163, e.name, t, e.name, t);
      var o = (r = e.metadata) == null ? void 0 : r.refetch;
      o != null || l(0, 14164, t, e.name);
      var a = o.operation.default ? o.operation.default : o.operation,
        i = o.fragmentPathInResult;
      typeof a != "string" || l(0, 14165, t);
      var s = o.identifierInfo;
      return (
        s != null &&
          (s.identifierField == null ||
            typeof s.identifierField == "string" ||
            l(0, 21796),
          s.identifierQueryVariableName == null ||
            typeof s.identifierQueryVariableName == "string" ||
            l(0, 71205)),
        {
          fragmentRefPathInResponse: i,
          identifierInfo: s,
          refetchableRequest: a,
          refetchMetadata: o,
        }
      );
    }
    a.exports = e;
  },
  null,
);
