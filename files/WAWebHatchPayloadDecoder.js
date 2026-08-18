__d(
  "WAWebHatchPayloadDecoder",
  ["WAWebHatchApprovalRecordDecoder", "WAWebHatchJsonReaders"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "agent.status",
      s = "hitl.approval",
      u = "hitl.approval_record",
      c = "hitl.snapshot",
      d = "identity.updated";
    function m(t) {
      var n = t.opKey,
        r = t.payload;
      return n === e
        ? { kind: "agent_status", status: p(r) }
        : n === u
          ? g(r)
          : n === s
            ? { kind: "approval", approval: v(r) }
            : n === d
              ? { kind: "identity", identity: _(r) }
              : n === c
                ? { kind: "approval_snapshot", approvalSnapshot: S(r) }
                : { kind: "unknown" };
    }
    function p(e) {
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
    function _(e) {
      var t,
        n = (t = o("WAWebHatchJsonReaders")).readField(e, "avatar");
      return {
        name: t.readString(e, "name"),
        avatarUrl: t.readString(n, "image_url"),
        videoVariants: b(t.readField(n, "video_variants")),
        secureImage: f(t.readField(n, "secure_image")),
        secureVideoVariants: C(t.readField(n, "secure_video_variants")),
      };
    }
    function f(e) {
      var t = h(o("WAWebHatchJsonReaders").readString(e, "media_type")),
        n = y(e, "direct_path"),
        r = y(e, "media_key_b64"),
        a = y(e, "file_enc_sha256_b64"),
        i = y(e, "file_sha256_b64");
      return t == null || n == null || r == null || a == null || i == null
        ? null
        : {
            directPath: n,
            mediaKey: r,
            encFilehash: a,
            filehash: i,
            mediaType: t,
            mimeType: o("WAWebHatchJsonReaders").readString(e, "mime_type"),
            sidecarB64: o("WAWebHatchJsonReaders").readString(e, "sidecar_b64"),
            fileLength: o("WAWebHatchJsonReaders").readNumber(e, "file_length"),
            staticUrl: o("WAWebHatchJsonReaders").readString(e, "url"),
          };
    }
    function g(e) {
      var t = o(
        "WAWebHatchApprovalRecordDecoder",
      ).decodeHatchApprovalRecordEvent(e);
      return t != null
        ? { kind: "approval_record", event: t }
        : { kind: "unknown" };
    }
    function h(e) {
      return e === "image" || e === "video" ? e : null;
    }
    function y(e, t) {
      var n = o("WAWebHatchJsonReaders").readString(e, t);
      return n != null && n !== "" ? n : null;
    }
    function C(e) {
      if (!Array.isArray(e)) return null;
      var t = {},
        n = !1;
      for (var r of e) {
        var a = o("WAWebHatchJsonReaders").readString(r, "variant"),
          i = f(o("WAWebHatchJsonReaders").readField(r, "media"));
        a != null && a !== "" && i != null && ((t[a] = i), (n = !0));
      }
      return n ? t : null;
    }
    function b(e) {
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
    function v(e) {
      return L(o("WAWebHatchJsonReaders").readField(e, "approval"));
    }
    function S(e) {
      var t;
      return {
        asOfMs: (t = o("WAWebHatchJsonReaders")).readNumber(e, "as_of_ms"),
        nextCursor: t.readString(e, "next_cursor"),
        pending: R(t.readArray(e, "pending")),
        recent: R(t.readArray(e, "recent")),
      };
    }
    function R(e) {
      return e == null ? [] : e.map(L);
    }
    function L(e) {
      var t,
        n = (t = o("WAWebHatchJsonReaders")).readBool(e, "turn_grant_eligible");
      return babelHelpers.extends(
        {
          approvalId: t.readString(e, "approval_id"),
          decision: t.readString(e, "decision"),
          reason: t.readString(e, "reason"),
          shortExplanation: t.readString(e, "short_explanation"),
          richExplanation: t.readString(e, "rich_explanation"),
          displayName: t.readString(e, "display_name"),
          actionLabel: t.readString(e, "action_label"),
          iconUrl: t.readString(e, "icon_url"),
          payloadPreview: t.readString(e, "payload_preview"),
          scheme: t.readString(e, "scheme"),
          host: t.readString(e, "host"),
          path: t.readString(e, "path"),
        },
        n != null ? { turnGrantEligible: n } : null,
        E(e),
      );
    }
    function E(e) {
      var t = {},
        n = o("WAWebHatchJsonReaders").readBool(
          e,
          "space_reader_grant_eligible",
        );
      n != null && (t.spaceReaderGrantEligible = n);
      var r = o("WAWebHatchJsonReaders").readString(
        o("WAWebHatchJsonReaders").readField(e, "runtime_request_trace"),
        "space_display_name",
      );
      r != null && (t.spaceDisplayName = r);
      var a = o("WAWebHatchJsonReaders").readString(e, "policy_subject");
      a != null && (t.policySubject = a);
      var i = o("WAWebHatchJsonReaders").readString(e, "workload");
      i != null && (t.workload = i);
      var l = k(o("WAWebHatchJsonReaders").readArray(e, "declared_hosts"));
      return (l.length > 0 && (t.declaredHosts = l), t);
    }
    function k(e) {
      if (e == null) return [];
      var t = [],
        n = new Set();
      for (var r of e) {
        var a = o("WAWebHatchJsonReaders").readString(r, "host");
        a != null && a !== "" && !n.has(a) && (n.add(a), t.push(a));
      }
      return t;
    }
    l.decodeHatchPayload = m;
  },
  98,
);
