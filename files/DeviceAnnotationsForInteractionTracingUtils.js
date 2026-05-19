__d(
  "DeviceAnnotationsForInteractionTracingUtils",
  ["Network"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      (s(e), u(e));
    }
    function s(e) {
      var t, n;
      ((t = window) == null ? void 0 : t.innerWidth) == null ||
        ((n = window) == null ? void 0 : n.innerHeight) == null ||
        e.addAnnotationInt(
          "viewport_pixels",
          window.innerWidth * window.innerHeight,
        );
    }
    function u(e) {
      if (r("Network").containsNetworkInformation()) {
        var t = r("Network").getRTT(),
          n = r("Network").getEffectiveType(),
          o = r("Network").getBandwidth(),
          a = r("Network").getType();
        (t != null && e.addAnnotationInt("network_rtt", t),
          n != null && e.addAnnotation("network_effective_type", String(n)),
          o != null && e.addAnnotationDouble("network_downlink", o),
          a != null && e.addAnnotation("network_type", String(a)));
      }
    }
    l.addDeviceAnnotationsForInteractionTracing = e;
  },
  98,
);
