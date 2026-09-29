__d(
  "WAWebJobsMigrationGating",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = null,
      s = null;
    function u() {
      return _().queues;
    }
    function c() {
      return _().rest;
    }
    function d() {
      return _().serviced;
    }
    function m() {
      return _();
    }
    function p(e) {
      s = e;
    }
    function _() {
      return s != null
        ? s
        : (e == null &&
            (e = {
              queues: o("WAWebABProps").getABPropConfigValue(
                "wa_web_jm_to_ts_queues",
              ),
              rest: o("WAWebABProps").getABPropConfigValue(
                "wa_web_jm_to_ts_rest",
              ),
              serviced: o("WAWebABProps").getABPropConfigValue(
                "wa_web_jm_to_ts_serviced",
              ),
            }),
          e);
    }
    ((l.isPersistedQueuesEnabled = u),
      (l.isRestOperationsEnabled = c),
      (l.isServicedJobsEnabled = d),
      (l.getJobsMigrationGates = m),
      (l.initJobsMigrationGatesFromWorkerInit = p));
  },
  98,
);
