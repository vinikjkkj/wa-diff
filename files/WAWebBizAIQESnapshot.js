__d(
  "WAWebBizAIQESnapshot",
  ["WATimeUtils", "WAWebUserPrefsStore"],
  function (t, n, r, o, a, i, l) {
    var e = "biz_ai_qe_snapshot",
      s = 21600;
    function u() {
      var t = r("WAWebUserPrefsStore").getUser(e);
      if (t == null || typeof t != "object") return null;
      var n = t.onboarded,
        o = t.ts,
        a = t.values;
      return typeof o != "number" || a == null || typeof a != "object"
        ? null
        : {
            values: m(a),
            ids: c(t.ids, a),
            onboarded: typeof n == "boolean" ? n : null,
            ts: o,
          };
    }
    function c(e, t) {
      var n = e == null ? Object.keys(t) : e,
        r = new Set();
      return (
        Array.isArray(n) &&
          n.forEach(function (e) {
            typeof e == "string" &&
              ((t[e] == null && t[e] !== void 0) || typeof t[e] == "boolean") &&
              r.add(e);
          }),
        r
      );
    }
    function d(e) {
      return o("WATimeUtils").unixTime() - e.ts < s;
    }
    function m(e) {
      var t = new Map();
      return (
        Object.entries(e).forEach(function (e) {
          var n = e[0],
            r = e[1];
          typeof r == "boolean" && t.set(n, r);
        }),
        t
      );
    }
    ((l.BIZ_AI_QE_SNAPSHOT_KEY = e),
      (l.readBizAIQESnapshot = u),
      (l.isRecentBizAIQESnapshot = d),
      (l.parseBizAIQEValues = m));
  },
  98,
);
