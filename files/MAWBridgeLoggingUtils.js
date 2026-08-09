__d(
  "MAWBridgeLoggingUtils",
  ["ODS", "Random", "WAHashStringToNumber"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 3185,
      u = "armadillo_worker_runtime",
      c = "getWorkerHeartbeat",
      d = 10,
      m = new Array(d);
    function p(t, n, r) {
      (e || (e = o("ODS"))).bumpEntityKey(s, u, t + "_" + n + "_" + r);
    }
    function _(e) {
      return o("WAHashStringToNumber").hashStringToNumber(
        e + Math.round(o("Random").random() * 1e4) + 1e4,
      );
    }
    function f(t, n) {
      (p(t, n, "start"),
        n !== c &&
          ((e || (e = o("ODS"))).bumpEntityKey(s, u, "route_start"),
          m.length === d && m.shift(),
          m.push(t + "_" + n)));
    }
    function g(t) {
      m.filter(Boolean).forEach(function (n) {
        (e || (e = o("ODS"))).bumpEntityKey(s, u, n + t);
      });
    }
    function h(t, n) {
      (p(t, n, "success"),
        n !== c && (e || (e = o("ODS"))).bumpEntityKey(s, u, "route_success"));
    }
    function y(t, n) {
      (p(t, n, "fail"),
        n !== c && (e || (e = o("ODS"))).bumpEntityKey(s, u, "route_fail"));
    }
    function C(t, n) {
      (p(t, n, "timeout"),
        n !== c && (e || (e = o("ODS"))).bumpEntityKey(s, u, "route_timeout"));
    }
    function b() {
      (g("_before_unresponsive"), m.fill(null));
    }
    ((l.CAT_ID = s),
      (l.ENT = u),
      (l.HEARTBEAT_ROUTE = c),
      (l.RECENT_ROUTES_NUM = d),
      (l.getBridgeEventInstanceKey = _),
      (l.routeStart = f),
      (l.routeSuccess = h),
      (l.routeFail = y),
      (l.routeTimeoutFail = C),
      (l.logRecentBridgeEvents = b));
  },
  98,
);
