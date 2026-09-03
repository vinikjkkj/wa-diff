__d(
  "WAWebVoipOutgoingSetupLatencyMode",
  ["$InternalEnum", "WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum")({
      CONTROL: 0,
      CACHE_AWARE_SYNC: 1,
      SOCKET_HEALTH_CHECK: 2,
      BOTH: 3,
    });
    function s() {
      var t;
      return (t = o("WAWebABProps").getABPropConfigValue(
        "web_voip_outgoing_call_setup_latency_mode",
      )) != null
        ? t
        : e.CONTROL;
    }
    function u() {
      var t = s();
      return t === e.CACHE_AWARE_SYNC || t === e.BOTH;
    }
    function c() {
      var t = s();
      return t === e.SOCKET_HEALTH_CHECK || t === e.BOTH;
    }
    ((l.isCacheAwareSyncEnabled = u), (l.isSocketHealthCheckEnabled = c));
  },
  98,
);
