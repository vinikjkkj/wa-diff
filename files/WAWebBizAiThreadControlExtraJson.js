__d(
  "WAWebBizAiThreadControlExtraJson",
  ["WAWebProtobufsE2E.pb"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (e == null) return null;
      var t = s(e);
      if (t == null || t.is_global_thread_state_update !== !0) return null;
      var n = t.thread_states;
      if (!Array.isArray(n)) return null;
      var r = [];
      for (var o of n) {
        var a = u(o);
        a != null && r.push(a);
      }
      return r;
    }
    function s(e) {
      try {
        return JSON.parse(e);
      } catch (e) {
        return null;
      }
    }
    function u(e) {
      var t,
        n,
        r = c(e.ai_reply_status);
      if (r == null) return null;
      var o = (t = e.consumer_uid) == null ? void 0 : t.lid,
        a = (n = e.consumer_uid) == null ? void 0 : n.pn;
      if (o == null && a == null) return null;
      var i = e.ai_reply_status_update_ts;
      return {
        consumerLid: o,
        consumerPhoneNumber: a,
        status: r,
        timestampMs: i != null && i > 0 ? i : null,
      };
    }
    function c(e) {
      return e === "unmuted"
        ? o("WAWebProtobufsE2E.pb")
            .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
            .CONTROL_TAKEN
        : e === "muted"
          ? o("WAWebProtobufsE2E.pb")
              .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
              .CONTROL_PASSED
          : null;
    }
    l.parseBulkThreadControl = e;
  },
  98,
);
