__d(
  "WAWebEventSamplingCache",
  ["WAWebApiAbPropEventSamplingConfig", "WAWebEventSampling"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map(),
      s = !1;
    function u(t) {
      return s ? e.get(t) : null;
    }
    function c() {
      o("WAWebEventSampling").setGetEventSamplingConfigValueImpl(u);
    }
    async function d() {
      var t = await o(
        "WAWebApiAbPropEventSamplingConfig",
      ).getEventSamplingConfigs();
      (t.forEach(function (t) {
        e.set(t.eventCode, t.samplingWeight);
      }),
        (s = !0));
    }
    ((l.initializeEventSamplingCache = c),
      (l.updateEventSamplingFromStorage = d));
  },
  98,
);
