__d(
  "WAWebCommonCTWAQplHelpers",
  ["WAWebGraphQLServerError", "WAWebQplFlowWrapper"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.error,
        n = e.errorAnnotationName,
        r = e.errorMessageAnnotationName,
        a = e.event,
        i;
      if (t instanceof o("WAWebGraphQLServerError").GraphQLServerError) {
        var l, s;
        i = {
          string:
            ((s = {}),
            (s[n] = (l = t.name) != null ? l : "UNKNOWN"),
            (s[r] = t.source.errors
              .map(function (e) {
                var t;
                return "[" + e.code + "] " + ((t = e.message) != null ? t : "");
              })
              .join("|")),
            s),
        };
      } else if (t instanceof Error) {
        var u, c, d;
        i = {
          string:
            ((d = {}),
            (d[n] = (u = t.name) != null ? u : "UNKNOWN"),
            (d[r] = (c = t.message) != null ? c : ""),
            d),
        };
      } else {
        var m;
        i = { string: ((m = {}), (m[n] = String(t)), (m[r] = ""), m) };
      }
      o("WAWebQplFlowWrapper").QPL.markerAnnotate(a, i);
    }
    l.qplAnnotateGraphQLError = e;
  },
  98,
);
