__d(
  "WAWebJobsMigrationGating",
  ["WAWebABProps", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = null,
      s = null;
    function u() {
      var t, n, r, o;
      return (t =
        (n = (r = s) == null ? void 0 : r.decommission) != null
          ? n
          : (o = e) == null
            ? void 0
            : o.decommission) != null
        ? t
        : h();
    }
    function c() {
      return f().queues;
    }
    function d() {
      return f().rest;
    }
    function m() {
      return f().serviced;
    }
    function p() {
      return f();
    }
    function _(e) {
      s = e;
    }
    function f() {
      return s != null ? s : (e == null && (e = g()), e);
    }
    function g() {
      return r("gkx")("14549")
        ? { decommission: r("gkx")("2034"), queues: !0, rest: !0, serviced: !0 }
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
    function h() {
      return r("gkx")("14549") && r("gkx")("2034");
    }
    ((l.isJobsManagerDecommissioned = u),
      (l.isPersistedQueuesEnabled = c),
      (l.isRestOperationsEnabled = d),
      (l.isServicedJobsEnabled = m),
      (l.getJobsMigrationGates = p),
      (l.initJobsMigrationGatesFromWorkerInit = _));
  },
  98,
);
