__d(
  "MetaConfig",
  [
    "invariant",
    "ExecutionEnvironment",
    "MetaConfigMap",
    "MetaconfigWebExposureFalcoEvent",
    "ODS",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = {},
      d = {
        _: function (n) {
          var t = r("MetaConfigMap").get(n);
          t != null || s(0, 57910, n);
          var a = t.log_id,
            i = t.value;
          return (
            a != null &&
              c[n] !== !0 &&
              ((u || (u = r("ExecutionEnvironment"))).isInBrowser &&
                ((e || (e = o("ODS"))).bumpEntityKey(
                  530,
                  "metaconfig.web.exposure",
                  "falco_logger",
                ),
                r("MetaconfigWebExposureFalcoEvent").logImmediately(
                  function () {
                    return { identifier: n, log_id: a };
                  },
                )),
              (c[n] = !0)),
            i
          );
        },
      },
      m = d;
    l.default = m;
  },
  98,
);
