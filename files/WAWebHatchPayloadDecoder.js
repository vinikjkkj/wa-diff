__d(
  "WAWebHatchPayloadDecoder",
  [
    "WAWebHatchApprovalRecordDecoder",
    "WAWebHatchJsonReaders",
    "WAWebHatchSecureMediaDecoder",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "agent.status",
      s = "hitl.approval_record",
      u = "identity.updated";
    function c(t) {
      var n = t.opKey,
        r = t.payload;
      return n === e
        ? { kind: "agent_status", status: m(r) }
        : n === s
          ? d(r)
          : n === u
            ? { kind: "identity", identity: p(r) }
            : { kind: "unknown" };
    }
    function d(e) {
      var t = o(
        "WAWebHatchApprovalRecordDecoder",
      ).decodeHatchApprovalRecordEvent(e);
      return t != null
        ? { kind: "approval_record", event: t }
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
      var t = o("WAWebHatchJsonReaders").readField(e, "avatar");
      return {
        name: o("WAWebHatchJsonReaders").readString(e, "name"),
        secureImage: o("WAWebHatchSecureMediaDecoder").readSecureMediaField(
          t,
          "secure_image",
        ),
        secureVideoVariants: _(
          o("WAWebHatchJsonReaders").readField(t, "secure_video_variants"),
        ),
      };
    }
    function _(e) {
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
    l.decodeHatchPayload = c;
  },
  98,
);
