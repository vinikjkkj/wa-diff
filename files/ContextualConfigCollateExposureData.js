__d(
  "ContextualConfigCollateExposureData",
  ["ContextualConfigConstants", "ContextualConfigResolvedContextsUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["cfg_ver_timestamp", "policy_id", "version", "sample_rate"],
      s = function (t) {
        return t.join(o("ContextualConfigConstants").LIST_DELIMITER);
      },
      u = function (n, r) {
        for (var t of e) r[t] != null && (n[t] = r[t]);
        r.name && (n.config_name = r.name);
      },
      c = function (t, n) {
        var e = n[0],
          r = n[1],
          a = n[2],
          i = n[3];
        (e != null && (t.exception = e.message),
          (t.result =
            s(
              r.map(function (e) {
                return e.value;
              }),
            ) || "INVALID"),
          (t.context = s(
            o("ContextualConfigResolvedContextsUtils").getContextNames(a),
          )),
          (t.context_value = s(
            o("ContextualConfigResolvedContextsUtils").getContextValues(a),
          )),
          (t.bucket_name = s(
            o("ContextualConfigResolvedContextsUtils").getBucketNames(a),
          )),
          (t.monitor = s(
            o("ContextualConfigResolvedContextsUtils").getContextNames(i),
          )),
          (t.monitor_value = s(
            o("ContextualConfigResolvedContextsUtils").getContextValues(i),
          )));
      };
    function d(e, t, n) {
      var r = {
        sample_rate: o("ContextualConfigConstants").ANALYTICS_SAMPLE_RATE,
      };
      return (
        u(r, e),
        c(r, t),
        n && (r.config_contents = JSON.stringify(e)),
        r
      );
    }
    l.default = d;
  },
  98,
);
