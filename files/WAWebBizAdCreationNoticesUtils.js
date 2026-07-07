__d(
  "WAWebBizAdCreationNoticesUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = ["ERROR", "BLOCKING_TIP"],
      l = ["ACTIVE_FEEDBACK", "CONFIRMATION"],
      s = ["INFO", "SABR_TIP", "TIP", "TIP_V2"];
    function u(e) {
      return (function (e) {
        if (e === "ERROR") return 0;
        if (e === "BLOCKING_TIP") return 1;
        if (e === "POLICY_UPDATE") return 2;
        if (e === "ASL_WARNING" || e === "WARNING") return 3;
        if (e === "INFO") return 4;
        if (e === "SABR_TIP" || e === "TIP" || e === "TIP_V2") return 5;
        if (e === "CONFIRMATION") return 6;
        if (e === "ACTIVE_FEEDBACK") return 7;
        if (e === "STOP") return 8;
        {
          var t = e;
          return 1 / 0;
        }
      })(e);
    }
    function c(e) {
      if (e.length === 0) return null;
      for (var t = e[0], n = u(t.severity), r = 1; r < e.length; r++) {
        var o = u(e[r].severity);
        o < n && ((t = e[r]), (n = o));
      }
      return t;
    }
    function d(t) {
      return Object.keys(t).some(function (n) {
        return t[n].some(function (t) {
          return e.includes(t.severity);
        });
      });
    }
    function m(e, t) {
      var n = {},
        r = {};
      return (
        Object.keys(e).forEach(function (o) {
          var a = [],
            i = [];
          (e[o].forEach(function (e) {
            e.noticeName != null && t.has(e.noticeName) ? i.push(e) : a.push(e);
          }),
            a.length > 0 && (n[o] = a),
            i.length > 0 && (r[o] = i));
        }),
        { forBanner: n, forInline: r }
      );
    }
    function p(e, t) {
      var n = d(e);
      return n ? !0 : t != null ? d(t) : !1;
    }
    ((i.ERROR_SEVERITIES = e),
      (i.SUCCESS_SEVERITIES = l),
      (i.TIP_SEVERITIES = s),
      (i.getDisplayPriority = u),
      (i.pickHighestPriorityNotice = c),
      (i.partitionNoticesByInlineSet = m),
      (i.hasBlockingErrors = p));
  },
  66,
);
