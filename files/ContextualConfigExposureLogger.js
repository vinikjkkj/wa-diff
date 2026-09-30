__d(
  "ContextualConfigExposureLogger",
  [
    "ContextualConfigExposureFalcoEvent",
    "ContextualConfigExposureLoggerFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {},
      s = function (t) {
        var e = t.bucket_name,
          n = t.cfg_ver_timestamp,
          o = t.config_contents,
          a = t.config_name,
          i = t.context,
          l = t.context_value,
          s = t.exception,
          u = t.monitor,
          c = t.monitor_value,
          d = t.policy_id,
          m = t.result,
          p = t.sample_rate,
          _ = t.version;
        r("ContextualConfigExposureFalcoEvent").log(function () {
          return {
            bucket_name: e,
            cfg_ver_timestamp: n,
            config_contents: o,
            config_name: a,
            context: i,
            context_value: l,
            exception: s,
            monitor: u,
            monitor_value: c,
            policy_id: d,
            result: m,
            sample_rate: p,
            version: _,
          };
        });
      },
      u = r("ContextualConfigExposureLoggerFactory")(e, s);
    l.default = u;
  },
  98,
);
