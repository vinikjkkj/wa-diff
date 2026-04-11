__d(
  "WAWebGalaxyFlowsError",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    var e = n("$InternalEnum").Mirrored([
        "SANCTIONED",
        "METADATA_EMPTY_RESPONSE",
        "METADATA_INVALID_EXTENSIONS_ID",
        "METADATA_INVALID_PUBLIC_KEY",
        "PUBLIC_KEY_SINGATURE_VERIFICATION_EXCEPTION",
        "MISSING_IDENTITY_KEY",
        "EXTENSIONS_METADATA_GRAPHQL_RESPONSE_ERROR",
      ]),
      l = (function (e) {
        function t(t) {
          var n;
          return ((n = e.call(this) || this), (n.name = t), n);
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error));
    ((i.WaeGalaxyFlowMetdataErrors = e), (i.WaeGalaxyFlowError = l));
  },
  66,
);
