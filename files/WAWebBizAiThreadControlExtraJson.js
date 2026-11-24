__d(
  "WAWebBizAiThreadControlExtraJson",
  ["WAWebBizAiHandoffActor", "WAWebProtobufsE2E.pb"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1e3;
    function s(e) {
      var t = e.notificationTimestampMs,
        n = t === void 0 ? null : t,
        r = e.raw;
      if (r == null) return null;
      var o = u(r);
      if (o == null || o.is_global_thread_state_update !== !0) return null;
      var a = o.thread_states;
      if (!Array.isArray(a)) return null;
      var i = [];
      for (var l of a) {
        var s = c({ entry: l, notificationTimestampMs: n });
        s != null && i.push(s);
      }
      return i;
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
        i = m(r.ai_reply_status);
      if (i == null) return null;
      var l = (t = r.consumer_uid) == null ? void 0 : t.lid,
        s = (n = r.consumer_uid) == null ? void 0 : n.pn;
      return l == null && s == null
        ? null
        : {
            consumerLid: l,
            consumerPhoneNumber: s,
            lastHandoffActor: {
              actor: o("WAWebBizAiHandoffActor").parseBizAiHandoffActor(
                r.last_handoff_actor,
              ),
            },
            status: i,
            suggestedRepliesEnabled: r.ai_reply_status === "suggested_replies",
            timestampMs: d(r.ai_reply_status_update_ts, a),
          };
    }
    function d(t, n) {
      return typeof t == "number" && Number.isInteger(t) && t > 0 ? t * e : n;
    }
    function m(e) {
      return e === "unmuted"
        ? o("WAWebProtobufsE2E.pb")
            .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
            .CONTROL_TAKEN
        : e === "muted" || e === "suggested_replies"
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
    function f(e) {
      var t;
      if (e == null) return null;
      var n = (t = u(e)) == null ? void 0 : t.handoff_reason;
      return typeof n == "string" ? n : null;
    }
    ((l.parseBulkThreadControl = s),
      (l.parseSuggestedRepliesFromUpdateState = p),
      (l.parseLastHandoffActor = _),
      (l.parseHandoffReason = f));
  },
  98,
);
