__d(
  "WebLoomSampling",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n, r) {
      var o,
        a =
          t === "QPL"
            ? e.samplingConfig.adaptive_config.qpl
            : e.samplingConfig.adaptive_config.interactions,
        i = r != null ? n + "." + r : "" + n,
        l = a.events[i];
      if (l != null) return l;
      var s = (o = a.modules[(n >> 16) & 65535]) != null ? o : 0;
      return s;
    }
    i.getSampleRate = e;
  },
  66,
);
