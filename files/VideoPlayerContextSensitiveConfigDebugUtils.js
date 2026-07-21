__d(
  "VideoPlayerContextSensitiveConfigDebugUtils",
  ["VideoPlayerContextSensitiveConfigUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n, r) {
      var e = Object.keys(n.context_sensitive_values).reduce(function (e, t) {
          return ((e[t] = n.context_sensitive_values[t]), e);
        }, {}),
        a = Object.keys(e).reduce(function (n, r) {
          var a = o(
            "VideoPlayerContextSensitiveConfigUtils",
          ).getFirstMatchingValueAndContextTargets(t, e[r]);
          return (a != null && (n[r] = a), n);
        }, {}),
        i = {};
      return (
        Object.keys(n.static_values)
          .sort(function (e, t) {
            return e.localeCompare(t);
          })
          .forEach(function (e, t) {
            var o,
              l = n.static_values[e],
              s = r == null ? void 0 : r.sources_by_parameter[e];
            (a[e] && ((l = a[e].value), (s = { type: "CONTEXTUAL_CONFIG" })),
              (i[e] = [l, ((o = s) == null ? void 0 : o.type) || "n/a"]));
          }),
        { config: i }
      );
    };
    l.getConfigForDebug = e;
  },
  98,
);
