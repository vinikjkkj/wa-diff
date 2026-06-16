__d(
  "WAWebHatchPayloadDecoder",
  ["WAWebHatchJsonReaders"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "agent.status",
      s = "hitl.approval",
      u = "identity.updated";
    function c(t) {
      var n = t.opKey,
        r = t.payload;
      return n === e
        ? { kind: "agent_status", status: d(r) }
        : n === s
          ? { kind: "approval", approval: _(r) }
          : n === u
            ? { kind: "identity", identity: m(r) }
            : { kind: "unknown" };
    }
    function d(e) {
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
    function m(e) {
      var t,
        n = (t = o("WAWebHatchJsonReaders")).readField(e, "avatar");
      return {
        name: t.readString(e, "name"),
        avatarUrl: t.readString(n, "image_url"),
        videoVariants: p(t.readField(n, "video_variants")),
      };
    }
    function p(e) {
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
    function _(e) {
      var t,
        n = (t = o("WAWebHatchJsonReaders")).readField(e, "approval");
      return {
        approvalId: t.readString(n, "approval_id"),
        decision: t.readString(n, "decision"),
        reason: t.readString(n, "reason"),
        shortExplanation: t.readString(n, "short_explanation"),
        richExplanation: t.readString(n, "rich_explanation"),
        displayName: t.readString(n, "display_name"),
        actionLabel: t.readString(n, "action_label"),
      };
    }
    l.decodeHatchPayload = c;
  },
  98,
);
