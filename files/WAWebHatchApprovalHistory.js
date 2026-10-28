__d(
  "WAWebHatchApprovalHistory",
  ["WAWebHatchApprovalRequestPreview", "WAWebHatchJsonReaders"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map([
        ["approved", "approved"],
        ["denied", "denied"],
        ["pending", "pending"],
        ["timed_out", "timed_out"],
      ]),
      s = new Map([
        ["allow_always", "allow_always"],
        ["allow_once", "allow_once"],
        ["allow_session", "allow_session"],
        ["allow_today", "allow_today"],
        ["auto_allow", "auto_allow"],
        ["deny", "deny"],
        ["deny_always", "deny_always"],
        ["timed_out", "timed_out"],
      ]),
      u = new Map([
        ["allow_always", "always_allowed"],
        ["allow_once", "allowed"],
        ["allow_session", "allowed"],
        ["allow_today", "allowed"],
        ["auto_allow", "auto_allowed"],
        ["deny", "denied"],
        ["deny_always", "always_denied"],
        ["timed_out", "timed_out"],
      ]),
      c = new Map([
        ["approved", "allowed"],
        ["denied", "denied"],
        ["timed_out", "timed_out"],
      ]);
    function d(e) {
      var t =
          o("WAWebHatchJsonReaders").readBool(e, "ok") === !0
            ? o("WAWebHatchJsonReaders").readObject(e, "result")
            : e,
        n = o("WAWebHatchJsonReaders").readArray(t, "items");
      if (n == null) return null;
      var r = n.map(p).filter(Boolean);
      return {
        nextCursor: o("WAWebHatchJsonReaders").trimToNull(
          o("WAWebHatchJsonReaders").readTrimmedString(t, "next_cursor"),
        ),
        records: r,
        unreadable: n.length - r.length,
      };
    }
    function m(e) {
      var t, n, r, o, a;
      if (e.status === "pending") return null;
      var i = _(e);
      if (i == null && e.outcomeLabel == null) return null;
      var l =
          (t =
            (n =
              (r = (o = e.summaryTitle) != null ? o : e.purposeSummary) != null
                ? r
                : e.displayName) != null
              ? n
              : e.permissionQuestion) != null
            ? t
            : e.id,
        s = (a = e.scopeSummary) != null ? a : e.purposeSummary;
      return { caption: s === l ? null : s, outcome: i, record: e, title: l };
    }
    function p(t) {
      var n,
        r,
        a,
        i = o("WAWebHatchJsonReaders").trimToNull(
          o("WAWebHatchJsonReaders").readTrimmedString(t, "approval_id"),
        ),
        l = o("WAWebHatchJsonReaders").readObject(t, "display");
      if (i == null || !o("WAWebHatchJsonReaders").isObject(l)) return null;
      var u = function (t) {
        return o("WAWebHatchJsonReaders").trimToNull(
          o("WAWebHatchJsonReaders").readTrimmedString(l, t),
        );
      };
      return {
        decision:
          (n = s.get(
            o("WAWebHatchJsonReaders").readTrimmedString(t, "decision"),
          )) != null
            ? n
            : null,
        displayName: u("display_name"),
        iconKey: u("icon_key"),
        id: i,
        outcomeLabel: u("outcome_label"),
        permissionQuestion: o("WAWebHatchJsonReaders").trimToNull(
          o("WAWebHatchJsonReaders").readTrimmedString(
            o("WAWebHatchJsonReaders").readObject(l, "permission_question"),
            "text",
          ),
        ),
        purposeSummary: u("purpose_summary"),
        requestPreview: o(
          "WAWebHatchApprovalRequestPreview",
        ).decodeHatchApprovalRequestPreview(
          o("WAWebHatchJsonReaders").readObject(l, "request_preview_document"),
        ),
        requestPreviewText: o(
          "WAWebHatchApprovalRequestPreview",
        ).hatchApprovalFlatPreview(
          o("WAWebHatchJsonReaders").readObject(t, "payload"),
        ),
        requestedAtMs:
          (r = o("WAWebHatchJsonReaders").readInteger(t, "requested_at_ms")) !=
          null
            ? r
            : 0,
        scopeSummary: u("scope_summary"),
        status:
          (a = e.get(
            o("WAWebHatchJsonReaders").readTrimmedString(t, "status"),
          )) != null
            ? a
            : null,
        summaryTitle: u("summary_title"),
      };
    }
    function _(e) {
      var t;
      if (e.status === "timed_out") return "timed_out";
      if (e.decision != null) {
        var n;
        return (n = u.get(e.decision)) != null ? n : null;
      }
      return e.status == null ? null : (t = c.get(e.status)) != null ? t : null;
    }
    ((l.decodeHatchApprovalHistoryPage = d), (l.hatchApprovalHistoryEntry = m));
  },
  98,
);
