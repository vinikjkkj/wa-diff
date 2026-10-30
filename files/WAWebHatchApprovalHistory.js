__d(
  "WAWebHatchApprovalHistory",
  [
    "WAWebHatchApprovalRequestPreview",
    "WAWebHatchJsonReaders",
    "WAWebHatchUrl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [".fbcdn.net", ".whatsapp.net"],
      s = new Map([
        ["approved", "approved"],
        ["denied", "denied"],
        ["pending", "pending"],
        ["timed_out", "timed_out"],
      ]),
      u = new Map([
        ["allow_always", "allow_always"],
        ["allow_once", "allow_once"],
        ["allow_session", "allow_session"],
        ["allow_today", "allow_today"],
        ["auto_allow", "auto_allow"],
        ["deny", "deny"],
        ["deny_always", "deny_always"],
        ["timed_out", "timed_out"],
      ]),
      c = new Map([
        ["allow_always", "always_allowed"],
        ["allow_once", "allowed"],
        ["allow_session", "allowed"],
        ["allow_today", "allowed"],
        ["auto_allow", "auto_allowed"],
        ["deny", "denied"],
        ["deny_always", "always_denied"],
        ["timed_out", "timed_out"],
      ]),
      d = new Map([
        ["approved", "allowed"],
        ["denied", "denied"],
        ["timed_out", "timed_out"],
      ]);
    function m(e) {
      var t =
          o("WAWebHatchJsonReaders").readBool(e, "ok") === !0
            ? o("WAWebHatchJsonReaders").readObject(e, "result")
            : e,
        n = o("WAWebHatchJsonReaders").readArray(t, "items");
      if (n == null) return null;
      var r = n.map(f).filter(Boolean);
      return {
        nextCursor: o("WAWebHatchJsonReaders").trimToNull(
          o("WAWebHatchJsonReaders").readTrimmedString(t, "next_cursor"),
        ),
        records: r,
        unreadable: n.length - r.length,
      };
    }
    function p(e) {
      var t, n, r, o, a;
      if (e.status === "pending") return null;
      var i = h(e);
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
      return {
        caption: s == null || _(s, l) ? null : s,
        outcome: i,
        record: e,
        title: l,
      };
    }
    function _(e, t) {
      var n = e.replace(/(\u2026|\.\.\.)$/, "").trimEnd();
      return n === e ? e === t : t.startsWith(n);
    }
    function f(e) {
      var t,
        n,
        r,
        a = o("WAWebHatchJsonReaders").trimToNull(
          o("WAWebHatchJsonReaders").readTrimmedString(e, "approval_id"),
        ),
        i = o("WAWebHatchJsonReaders").readObject(e, "display");
      if (a == null || !o("WAWebHatchJsonReaders").isObject(i)) return null;
      var l = function (t) {
        return o("WAWebHatchJsonReaders").trimToNull(
          o("WAWebHatchJsonReaders").readTrimmedString(i, t),
        );
      };
      return {
        decision:
          (t = u.get(
            o("WAWebHatchJsonReaders").readTrimmedString(e, "decision"),
          )) != null
            ? t
            : null,
        displayName: l("display_name"),
        iconKey: l("icon_key"),
        iconUrl: g(l("icon_url")),
        id: a,
        outcomeLabel: l("outcome_label"),
        permissionQuestion: o("WAWebHatchJsonReaders").trimToNull(
          o("WAWebHatchJsonReaders").readTrimmedString(
            o("WAWebHatchJsonReaders").readObject(i, "permission_question"),
            "text",
          ),
        ),
        purposeSummary: l("purpose_summary"),
        requestPreview: o(
          "WAWebHatchApprovalRequestPreview",
        ).decodeHatchApprovalRequestPreview(
          o("WAWebHatchJsonReaders").readObject(i, "request_preview_document"),
        ),
        requestPreviewText: o(
          "WAWebHatchApprovalRequestPreview",
        ).hatchApprovalFlatPreview(
          o("WAWebHatchJsonReaders").readObject(e, "payload"),
        ),
        requestedAtMs:
          (n = o("WAWebHatchJsonReaders").readInteger(e, "requested_at_ms")) !=
          null
            ? n
            : 0,
        scopeSummary: l("scope_summary"),
        status:
          (r = s.get(
            o("WAWebHatchJsonReaders").readTrimmedString(e, "status"),
          )) != null
            ? r
            : null,
        summaryTitle: l("summary_title"),
      };
    }
    function g(t) {
      var n = o("WAWebHatchUrl").toHttpsUrl(t);
      if (n == null) return null;
      var r = new URL(n).hostname.toLowerCase();
      return e.some(function (e) {
        return r.endsWith(e);
      })
        ? n
        : null;
    }
    function h(e) {
      var t;
      if (e.status === "timed_out") return "timed_out";
      if (e.decision != null) {
        var n;
        return (n = c.get(e.decision)) != null ? n : null;
      }
      return e.status == null ? null : (t = d.get(e.status)) != null ? t : null;
    }
    ((l.decodeHatchApprovalHistoryPage = m), (l.hatchApprovalHistoryEntry = p));
  },
  98,
);
