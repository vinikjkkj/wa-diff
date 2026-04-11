__d(
  "WAWebApiAbPropEventSamplingConfig",
  [
    "Promise",
    "WAWebBoolFunc",
    "WAWebModelStorageInitialize",
    "WAWebModelStorageUtils",
    "WAWebSchemaAbPropEventSamplingConfig",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      return o("WAWebModelStorageInitialize")
        .initializeWithoutGKs()
        .then(function () {
          return o("WAWebSchemaAbPropEventSamplingConfig")
            .getAbpropEventSamplingConfigsTable()
            .all()
            .then(function (e) {
              return e;
            });
        });
    }
    function u(e) {
      return o("WAWebModelStorageInitialize")
        .initializeWithoutGKs()
        .then(function () {
          return o("WAWebSchemaAbPropEventSamplingConfig")
            .getAbpropEventSamplingConfigsTable()
            .get(e)
            .then(function (e) {
              return e == null ? void 0 : e.samplingWeight;
            });
        });
    }
    function c(t) {
      if (t == null || t.length === 0)
        return (e || (e = n("Promise"))).resolve(!1);
      var r = [];
      return (
        t.forEach(function (e) {
          r.push({ eventCode: e.eventCode, samplingWeight: e.samplingWeight });
        }),
        o("WAWebModelStorageUtils")
          .getStorage()
          .lock(["abprop-event-sampling-configs"], function (e) {
            var t = e[0];
            return t.clear().then(function () {
              return t.bulkCreate(r).then(o("WAWebBoolFunc").returnTrue);
            });
          })
      );
    }
    ((l.getEventSamplingConfigs = s),
      (l.getEventSamplingWeight = u),
      (l.updateEventSamplingConfigs = c));
  },
  98,
);
