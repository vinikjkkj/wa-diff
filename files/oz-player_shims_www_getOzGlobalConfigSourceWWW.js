__d(
  "oz-player/shims/www/getOzGlobalConfigSourceWWW",
  ["oz-player/configs/MockOzConfig"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      allow_subsequent_prefetch: !0,
      bandwidth_header_expire_threshold: 0,
      clear_prefetch_before_unload: !1,
      systemic_risk_abr_prefetch_initial_risk_factor: 3,
      prefetch_retention_duration_ms: 0,
      prefetch_resolution_threshold: 1e3,
      systemic_risk_abr_prefetch_low_mos_resolution: 260,
      systemic_risk_abr_min_watchable_mos: 0,
      systemic_risk_abr_parse_prefetch_mos: !1,
      enable_prefetch_logging: !0,
    };
    function s() {
      return new (r("oz-player/configs/MockOzConfig"))(e);
    }
    l.default = s;
  },
  98,
);
