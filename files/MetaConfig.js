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
        _: function (n, a) {
          var t = r("MetaConfigMap").get(n);
          t != null || s(0, 57910, n);
          var i = t.log_id,
            l = t.value;
          return (
            a !== !0 &&
              i != null &&
              c[n] !== !0 &&
              ((u || (u = r("ExecutionEnvironment"))).isInBrowser &&
                ((e || (e = o("ODS"))).bumpEntityKey(
                  530,
                  "metaconfig.web.exposure",
                  "falco_logger",
                ),
                r("MetaconfigWebExposureFalcoEvent").logImmediately(
                  function () {
                    return { identifier: n, log_id: i };
                  },
                )),
              (c[n] = !0)),
            l
          );
        },
      },
      m = d;
    l.default = m;
  },
  98,
);
