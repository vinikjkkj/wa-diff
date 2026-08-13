__d(
  "WAWebBizAiThreadControlExtraJson",
  ["WAWebProtobufsE2E.pb"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.raw,
        n = e.isSmartComposerEnabled,
        r =
          n === void 0
            ? function () {
                return !1;
              }
            : n,
        o = e.notificationTimestampMs,
        a = o === void 0 ? null : o;
      if (t == null) return null;
      var i = s(t);
      if (i == null || i.is_global_thread_state_update !== !0) return null;
      var l = i.thread_states;
      if (!Array.isArray(l)) return null;
      var c = r(),
        d = [];
      for (var m of l) {
        var p = u({
          entry: m,
          smartComposerEnabled: c,
          notificationTimestampMs: a,
        });
        p != null && d.push(p);
      }
      return d;
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
