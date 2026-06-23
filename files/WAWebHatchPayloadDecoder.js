__d(
  "WAWebHatchPayloadDecoder",
  ["WAWebHatchJsonReaders"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "agent.status",
      s = "hitl.approval",
      u = "hitl.snapshot",
      c = "identity.updated";
    function d(t) {
      var n = t.opKey,
        r = t.payload;
      return n === e
        ? { kind: "agent_status", status: m(r) }
        : n === s
          ? { kind: "approval", approval: f(r) }
          : n === c
            ? { kind: "identity", identity: p(r) }
            : n === u
              ? { kind: "approval_snapshot", approvalSnapshot: g(r) }
              : { kind: "unknown" };
    }
    function m(e) {
      var t = o("WAWebHatchJsonReaders").readString(e, "activity_emoji");
      return babelHelpers.extends(
        {
          activityCode: o("WAWebHatchJsonReaders").readString(
            e,
            "activity_code",
          ),
        },
        t != null && t !== "" ? { activityEmoji: t } : null,
        {
          activityText: o("WAWebHatchJsonReaders").readString(
            e,
            "activity_text",
          ),
        },
      );
    }
    function p(e) {
      var t,
        n = (t = o("WAWebHatchJsonReaders")).readField(e, "avatar");
      return {
        name: t.readString(e, "name"),
        avatarUrl: t.readString(n, "image_url"),
        videoVariants: _(t.readField(n, "video_variants")),
      };
    }
    function _(e) {
      if (!Array.isArray(e)) return null;
      var t = {},
        n = !1;
      for (var r of e) {
        var a = o("WAWebHatchJsonReaders").readString(r, "variant"),
          i = o("WAWebHatchJsonReaders").readString(r, "video_url");
        a != null &&
          a !== "" &&
          i != null &&
          i !== "" &&
          ((t[a] = i), (n = !0));
      }
      return n ? t : null;
    }
    function f(e) {
      return y(o("WAWebHatchJsonReaders").readField(e, "approval"));
    }
    function g(e) {
      var t;
      return {
        asOfMs: (t = o("WAWebHatchJsonReaders")).readNumber(e, "as_of_ms"),
        nextCursor: t.readString(e, "next_cursor"),
        pending: h(t.readArray(e, "pending")),
        recent: h(t.readArray(e, "recent")),
      };
    }
    function h(e) {
      return e == null ? [] : e.map(y);
    }
    function y(e) {
      var t;
      return {
        approvalId: (t = o("WAWebHatchJsonReaders")).readString(
          e,
          "approval_id",
        ),
        decision: t.readString(e, "decision"),
        reason: t.readString(e, "reason"),
        shortExplanation: t.readString(e, "short_explanation"),
        richExplanation: t.readString(e, "rich_explanation"),
        displayName: t.readString(e, "display_name"),
        actionLabel: t.readString(e, "action_label"),
      };
    }
    l.decodeHatchPayload = d;
  },
  98,
);
