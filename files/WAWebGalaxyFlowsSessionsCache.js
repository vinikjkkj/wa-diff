__d(
  "WAWebGalaxyFlowsSessionsCache",
  ["WATimeUtils", "WAWebABProps", "WAWebLruCacheMap"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1e3,
      s = new (o("WAWebLruCacheMap").LruCacheMap)({ sizeLimit: e });
    function u() {
      return new (o("WAWebLruCacheMap").LruCacheMap)({
        sizeLimit: o("WAWebABProps").getABPropConfigValue(
          "extensions_user_report_store_max_data_max_sessions_per_message",
        ),
      });
    }
    function c() {
      return new (o("WAWebLruCacheMap").LruCacheMap)({
        sizeLimit: o("WAWebABProps").getABPropConfigValue(
          "extensions_user_report_store_max_data_exchanges_per_session",
        ),
      });
    }
    function d(e, t) {
      var n = e + "_" + t,
        r = o("WATimeUtils").unixTime(),
        a = "session_" + n + "_" + r.toString(),
        i = s.get(n);
      i == null &&
        ((i = { timestamp: r, sessions: u(), latestSessionId: null }),
        s.set(n, i));
      var l = { timestamp: r, sessionData: c() };
      return (
        i.sessions.set(a, l),
        (i.timestamp = r),
        (i.latestSessionId = a),
        a
      );
    }
    function m(e, t) {
      var n = e + "_" + t,
        r = s.get(n);
      if (r == null) return null;
      var o = r.latestSessionId;
      return o == null ? null : r.sessions.get(o);
    }
    function p(e, t, n, r) {
      var a = m(e, t);
      if (a != null) {
        var i = o("WATimeUtils").unixTime(),
          l = { timestamp: i, screenName: n, data: r };
        a.sessionData.set("navigation_" + i.toString(), l);
      }
    }
    function _(e, t) {
      var n = e + "_" + t,
        r = s.get(n);
      if (r == null) return [];
      var o = [];
      return (
        r.sessions.iterateOnEach(function (e) {
          e.sessionData.iterateOnEach(function (e) {
            o.push({
              screenName: e.screenName,
              timestamp: e.timestamp,
              data: e.data,
            });
          });
        }),
        o
      );
    }
    ((l.GalaxyFlowSessionsCache = s),
      (l.createFlowSession = d),
      (l.addDataToLatestSession = p),
      (l.getFlowDataForMessage = _));
  },
  98,
);
