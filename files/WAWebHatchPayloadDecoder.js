__d(
  "WAWebHatchPayloadDecoder",
  [
    "WAWebHatchApprovalRecordDecoder",
    "WAWebHatchChannelNotificationDecoder",
    "WAWebHatchJsonReaders",
    "WAWebHatchSecureMediaDecoder",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "agent.status",
      s = "hitl.approval_record",
      u = "identity.updated",
      c = "notification";
    function d(e) {
      return e === s || e === u || e === c;
    }
    function m(t) {
      var n = t.opKey,
        r = t.payload;
      return n === e
        ? { kind: "agent_status", status: g(r) }
        : n === s
          ? _(r)
          : n === u
            ? p(r)
            : n === c
              ? f(r)
              : { kind: "unknown" };
    }
    function p(e) {
      var t = h(e);
      return (t.name != null &&
        !o("WAWebHatchJsonReaders").isBlankText(t.name)) ||
        t.secureImage != null ||
        t.secureVideoVariants != null
        ? { kind: "identity", identity: t }
        : { kind: "unknown" };
    }
    function _(e) {
      var t = o(
        "WAWebHatchApprovalRecordDecoder",
      ).decodeHatchApprovalRecordEvent(e);
      return t != null
        ? { kind: "approval_record", event: t }
        : { kind: "unknown" };
    }
    function f(e) {
      var t = o(
        "WAWebHatchChannelNotificationDecoder",
      ).decodeHatchChannelNotification(e);
      return t != null
        ? { kind: "channel_notification", notification: t }
        : { kind: "unknown" };
    }
    function g(e) {
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
    function h(e) {
      var t = o("WAWebHatchJsonReaders").readField(e, "avatar");
      return {
        name: o("WAWebHatchJsonReaders").readString(e, "name"),
        secureImage: o("WAWebHatchSecureMediaDecoder").readSecureMediaField(
          t,
          "secure_image",
        ),
        secureVideoVariants: y(
          o("WAWebHatchJsonReaders").readField(t, "secure_video_variants"),
        ),
      };
    }
    function y(e) {
      if (!Array.isArray(e)) return null;
      var t = {},
        n = !1;
      for (var r of e) {
        var a = o("WAWebHatchJsonReaders").readString(r, "variant"),
          i = o("WAWebHatchSecureMediaDecoder").readSecureMediaField(
            r,
            "media",
          );
        a != null && a !== "" && i != null && ((t[a] = i), (n = !0));
      }
      return n ? t : null;
    }
    ((l.bypassesLastWriteWins = d), (l.decodeHatchPayload = m));
  },
  98,
);
