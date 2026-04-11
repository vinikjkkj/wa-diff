__d(
  "WAWebEventSamplingCache",
  [
    "WAWebApiAbPropEventSamplingConfig",
    "WAWebEventSampling",
    "asyncToGeneratorRuntime",
  ],
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
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = yield o(
            "WAWebApiAbPropEventSamplingConfig",
          ).getEventSamplingConfigs();
          (t.forEach(function (t) {
            e.set(t.eventCode, t.samplingWeight);
          }),
            (s = !0));
        })),
        m.apply(this, arguments)
      );
    }
    ((l.initializeEventSamplingCache = c),
      (l.updateEventSamplingFromStorage = d));
  },
  98,
);
