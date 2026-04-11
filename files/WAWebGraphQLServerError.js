__d(
  "WAWebGraphQLServerError",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    var e = n("$InternalEnum")({ INVALID_ACCESS_TOKEN: 190 }),
      l = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this) || this),
            (n.name = "GraphQLServerError"),
            (n.source = t),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error));
    function s(e) {
      var t,
        n,
        r = (t = (n = e.source) == null ? void 0 : n.errors) != null ? t : [];
      return r
        .map(function (e) {
          return (
            "code=" +
            e.code +
            (e.summary != null ? " summary=" + e.summary : "") +
            (e.description != null ? " description=" + e.description : "") +
            (e.message != null ? " message=" + e.message : "")
          );
        })
        .join("; ");
    }
    ((i.GraphQLErrorCode = e),
      (i.GraphQLServerError = l),
      (i.formatGraphQLServerError = s));
  },
  66,
);
