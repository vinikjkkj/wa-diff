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
        : y();
    }
    function c() {
      var t, n, o, a;
      return (t =
        (n = (o = s) == null ? void 0 : o.decommissionArm) != null
          ? n
          : (a = e) == null
            ? void 0
            : a.decommissionArm) != null
        ? t
        : r("gkx")("14549");
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
      s = e;
    }
    function g() {
      return s != null ? s : (e == null && (e = h()), e);
    }
    function h() {
      return r("gkx")("14549")
        ? {
            decommission: r("gkx")("2034"),
            decommissionArm: !0,
            queues: !0,
            rest: !0,
            serviced: !0,
          }
        : {
            decommission: !1,
            decommissionArm: !1,
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
    function y() {
      return r("gkx")("14549") && r("gkx")("2034");
    }
    ((l.isJobsManagerDecommissioned = u),
      (l.isJobsManagerDecommissionArm = c),
      (l.isPersistedQueuesEnabled = d),
      (l.isRestOperationsEnabled = m),
      (l.isServicedJobsEnabled = p),
      (l.getJobsMigrationGates = _),
      (l.initJobsMigrationGatesFromWorkerInit = f));
  },
  98,
);
