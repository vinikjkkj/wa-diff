__d(
  "WAWebBizAiThreadControlExtraJson",
  ["WAWebBizAiHandoffActor", "WAWebBoolFunc", "WAWebProtobufsE2E.pb"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1e3;
    function s(e) {
      var t = e.raw,
        n = e.isSmartComposerEnabled,
        r = n === void 0 ? o("WAWebBoolFunc").returnFalse : n,
        a = e.notificationTimestampMs,
        i = a === void 0 ? null : a;
      if (t == null) return null;
      var l = u(t);
      if (l == null || l.is_global_thread_state_update !== !0) return null;
      var s = l.thread_states;
      if (!Array.isArray(s)) return null;
      var d = r(),
        m = [];
      for (var p of s) {
        var _ = c({
          entry: p,
          smartComposerEnabled: d,
          notificationTimestampMs: i,
        });
        _ != null && m.push(_);
      }
      return m;
    }
    function u(e) {
      try {
        return JSON.parse(e);
      } catch (e) {
        return null;
      }
    }
    function c(e) {
      var t,
        n,
        r = e.entry,
        a = e.notificationTimestampMs,
        i = e.smartComposerEnabled,
        l = m(r.ai_reply_status, i);
      if (l == null) return null;
      var s = (t = r.consumer_uid) == null ? void 0 : t.lid,
        u = (n = r.consumer_uid) == null ? void 0 : n.pn;
      if (s == null && u == null) return null;
      var c = i ? r.ai_reply_status === "suggested_replies" : void 0;
      return {
        consumerLid: s,
        consumerPhoneNumber: u,
        lastHandoffActor: {
          actor: o("WAWebBizAiHandoffActor").parseBizAiHandoffActor(
            r.last_handoff_actor,
          ),
        },
        status: l,
        suggestedRepliesEnabled: c,
        timestampMs: d(r.ai_reply_status_update_ts, a),
      };
    }
    function d(t, n) {
      return typeof t == "number" && Number.isInteger(t) && t > 0 ? t * e : n;
    }
    function m(e, t) {
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
    function p(e) {
      var t;
      if (e == null) return null;
      var n = u(e),
        r =
          n == null || (t = n.update_state) == null
            ? void 0
            : t.suggested_replies_enabled;
      return typeof r == "boolean" ? r : null;
    }
    function _(e) {
      var t;
      if (e == null) return null;
      var n = (t = u(e)) == null ? void 0 : t.last_handoff_actor;
      return typeof n == "string"
        ? o("WAWebBizAiHandoffActor").parseBizAiHandoffActor(n)
        : null;
    }
    ((l.parseBulkThreadControl = s),
      (l.parseSuggestedRepliesFromUpdateState = p),
      (l.parseLastHandoffActor = _));
  },
  98,
);
