__d(
  "relay-runtime/util/getPaginationMetadata",
  ["invariant", "relay-runtime/util/getRefetchMetadata"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var r,
        o,
        a = n("relay-runtime/util/getRefetchMetadata")(e, t),
        i = a.refetchableRequest,
        s = a.refetchMetadata,
        u = s.connection;
      u != null || l(0, 14162, t, e.name);
      var c = u.path,
        d = (
          (r = (o = e.metadata) == null ? void 0 : o.connection) != null
            ? r
            : []
        )[0];
      d != null || l(0, 14162, t, e.name);
      var m = s.identifierInfo;
      return (
        (m == null ? void 0 : m.identifierField) == null ||
          typeof m.identifierField == "string" ||
          l(0, 21796),
        {
          connectionPathInFragmentData: c,
          identifierField: m == null ? void 0 : m.identifierField,
          paginationRequest: i,
          paginationMetadata: u,
          stream: d.stream === !0,
        }
      );
    }
    a.exports = e;
  },
  null,
);
