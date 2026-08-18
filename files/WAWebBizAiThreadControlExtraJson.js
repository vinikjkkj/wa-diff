__d(
  "WAWebBizAiThreadControlExtraJson",
  ["WAWebBoolFunc", "WAWebProtobufsE2E.pb"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.raw,
        n = e.isSmartComposerEnabled,
        r = n === void 0 ? o("WAWebBoolFunc").returnFalse : n,
        a = e.notificationTimestampMs,
        i = a === void 0 ? null : a;
      if (t == null) return null;
      var l = s(t);
      if (l == null || l.is_global_thread_state_update !== !0) return null;
      var c = l.thread_states;
      if (!Array.isArray(c)) return null;
      var d = r(),
        m = [];
      for (var p of c) {
        var _ = u({
          entry: p,
          smartComposerEnabled: d,
          notificationTimestampMs: i,
        });
        _ != null && m.push(_);
      }
      return m;
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
        r = e.entry,
        o = e.notificationTimestampMs,
        a = e.smartComposerEnabled,
        i = c(r.ai_reply_status, a);
      if (i == null) return null;
      var l = (t = r.consumer_uid) == null ? void 0 : t.lid,
        s = (n = r.consumer_uid) == null ? void 0 : n.pn;
      if (l == null && s == null) return null;
      var u = r.ai_reply_status_update_ts,
        d = a ? r.ai_reply_status === "suggested_replies" : void 0;
      return {
        consumerLid: l,
        consumerPhoneNumber: s,
        status: i,
        suggestedRepliesEnabled: d,
        timestampMs: u != null && u > 0 ? u : o,
      };
    }
    function c(e, t) {
      return e === "unmuted"
        ? o("WAWebProtobufsE2E.pb")
            .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
            .CONTROL_TAKEN
        : e === "muted" || (t && e === "suggested_replies")
          ? o("WAWebProtobufsE2E.pb")
              .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
              .CONTROL_PASSED
          : null;
    }
    function d(e) {
      var t;
      if (e == null) return null;
      var n = s(e),
        r =
          n == null || (t = n.update_state) == null
            ? void 0
            : t.suggested_replies_enabled;
      return typeof r == "boolean" ? r : null;
    }
    ((l.parseBulkThreadControl = e),
      (l.parseSuggestedRepliesFromUpdateState = d));
  },
  98,
);
