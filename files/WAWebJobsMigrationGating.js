__d(
  "WAWebJobsMigrationGating",
  ["WAWebABProps", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { decommission: !0, queues: !0, rest: !0, serviced: !0 },
      s = null,
      u = null;
    function c() {
      return g().decommission;
    }
    function d() {
      return g().queues;
    }
    function m() {
      return g().rest;
    }
    function p() {
      return g().serviced;
    }
    function _() {
      return g();
    }
    function f(e) {
      u = e;
    }
    function g() {
      return u != null ? u : (s == null && (s = h()), s);
    }
    function h() {
      return r("gkx")("14549")
        ? e
        : {
            decommission: !1,
            queues: o("WAWebABProps").getABPropConfigValue(
              "wa_web_jm_to_ts_queues",
            ),
            rest: o("WAWebABProps").getABPropConfigValue(
              "wa_web_jm_to_ts_rest",
            ),
            serviced: o("WAWebABProps").getABPropConfigValue(
              "wa_web_jm_to_ts_serviced",
            ),
          };
    }
    ((l.isJobsManagerDecommissioned = c),
      (l.isPersistedQueuesEnabled = d),
      (l.isRestOperationsEnabled = m),
      (l.isServicedJobsEnabled = p),
      (l.getJobsMigrationGates = _),
      (l.initJobsMigrationGatesFromWorkerInit = f));
  },
  98,
);
