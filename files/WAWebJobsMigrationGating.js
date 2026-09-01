__d(
  "WAWebJobsMigrationGating",
  ["gkx"],
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
              queues: r("gkx")("17765"),
              rest: r("gkx")("18085"),
              serviced: r("gkx")("18244"),
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
