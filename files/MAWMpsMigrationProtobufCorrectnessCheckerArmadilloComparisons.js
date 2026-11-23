__d(
  "MAWMpsMigrationProtobufCorrectnessCheckerArmadilloComparisons",
  [
    "MAWMpsMigrationProtobufCorrectnessCheckerConsumerComparisons",
    "MAWMpsMigrationProtobufCorrectnessCheckerMediaComparisons",
    "MAWMpsMigrationProtobufCorrectnessCheckerUtils",
    "WAMediaTransport.pb",
    "WAResultOrError",
    "decodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = e.subProtocol(),
        r = t.subProtocol();
      return (n == null ? void 0 : n.kind) === "consumerApplication" &&
        (r == null ? void 0 : r.kind) === "consumerApplication"
        ? o(
            "MAWMpsMigrationProtobufCorrectnessCheckerConsumerComparisons",
          ).compareConsumerApplication(n, r)
        : (n == null ? void 0 : n.kind) === "armadillo" &&
            (r == null ? void 0 : r.kind) === "armadillo"
          ? s(n, r)
          : o("WAResultOrError").makeError(
              "message_application_subprotocol_mismatch",
            );
    }
    function s(e, t) {
      var n, r, a, i, l, s, p, _, f, g, h;
      if (
        ((n = e.payload) == null ? void 0 : n.content) == null ||
        ((r = t.payload) == null ? void 0 : r.content) == null
      )
        return o("WAResultOrError").makeError("unsupported_protobuf_type");
      if (
        ((a = e.payload.content) == null ? void 0 : a.extendedContentMessage) !=
          null &&
        t.payload.content.extendedContentMessage != null
      ) {
        var y = e.extendedContentMessage(),
          C = t.extendedContentMessage();
        if (y != null && C != null) return u(y, C);
      }
      if (
        ((i = e.payload) == null || (i = i.content) == null
          ? void 0
          : i.bumpExistingMessage) != null &&
        ((l = t.payload) == null || (l = l.content) == null
          ? void 0
          : l.bumpExistingMessage) != null
      ) {
        var b, v;
        return o(
          "MAWMpsMigrationProtobufCorrectnessCheckerUtils",
        ).compareMessageKey(
          (b = e.payload) == null ||
            (b = b.content) == null ||
            (b = b.bumpExistingMessage) == null
            ? void 0
            : b.key,
          (v = t.payload) == null ||
            (v = v.content) == null ||
            (v = v.bumpExistingMessage) == null
            ? void 0
            : v.key,
        )
          ? o("WAResultOrError").makeResult()
          : o("WAResultOrError").makeError(
              "bump_existing_message_key_mismatch",
            );
      }
      if (
        ((s = e.payload) == null || (s = s.content) == null
          ? void 0
          : s.noteReplyMessage) != null &&
        ((p = t.payload) == null || (p = p.content) == null
          ? void 0
          : p.noteReplyMessage) != null
      ) {
        var S, R;
        return c(
          (S = e.payload) == null || (S = S.content) == null
            ? void 0
            : S.noteReplyMessage,
          (R = t.payload) == null || (R = R.content) == null
            ? void 0
            : R.noteReplyMessage,
        );
      }
      return ((_ = e.payload) == null || (_ = _.content) == null
        ? void 0
        : _.ravenActionNotifMessage) != null &&
        ((f = t.payload) == null || (f = f.content) == null
          ? void 0
          : f.ravenActionNotifMessage) != null
        ? d(
            e.payload.content.ravenActionNotifMessage,
            t.payload.content.ravenActionNotifMessage,
          )
        : ((g = e.payload) == null || (g = g.content) == null
              ? void 0
              : g.ravenMessageMsgr) != null &&
            ((h = t.payload) == null || (h = h.content) == null
              ? void 0
              : h.ravenMessageMsgr) != null
          ? m(
              e.payload.content.ravenMessageMsgr,
              t.payload.content.ravenMessageMsgr,
            )
          : o("WAResultOrError").makeError("unsupported_protobuf_type");
    }
    function u(t, n) {
      var r = t.favicon(),
        a = n.favicon();
      if (r != null && a != null) {
        var i = o(
          "MAWMpsMigrationProtobufCorrectnessCheckerMediaComparisons",
        ).compareImageTransport(r, a);
        if (i.error != null)
          return o("WAResultOrError").makeError(
            "extended_content_message_favicon_" + i.error,
          );
      }
      var l = t.headerImage(),
        s = n.headerImage();
      if (l != null && s != null) {
        var u = o(
          "MAWMpsMigrationProtobufCorrectnessCheckerMediaComparisons",
        ).compareImageTransport(l, s);
        if (u.error != null)
          return o("WAResultOrError").makeError(
            "extended_content_message_header_image_" + u.error,
          );
      }
      var c = t.previews(),
        d = n.previews();
      if (c != null && d != null) {
        var m = o(
          "MAWMpsMigrationProtobufCorrectnessCheckerUtils",
        ).compareArray(
          c,
          d,
          o("MAWMpsMigrationProtobufCorrectnessCheckerMediaComparisons")
            .sortImageTransport,
          o("MAWMpsMigrationProtobufCorrectnessCheckerMediaComparisons")
            .compareImageTransport,
        );
        if (!m.success)
          return o("WAResultOrError").makeError(
            "extended_content_message_previews_" + m.error,
          );
      }
      var f = t.associatedMessage(),
        g = n.associatedMessage();
      if (f != null && g != null) {
        var h = e(f, g);
        if (!h.success)
          return o("WAResultOrError").makeError(
            "extended_content_message_associated_message_" + h.error,
          );
      }
      if (t.payload.targetType !== n.payload.targetType)
        return o("WAResultOrError").makeError(
          "extended_content_message_target_type_mismatch",
        );
      if (t.payload.targetUsername !== n.payload.targetUsername)
        return o("WAResultOrError").makeError(
          "extended_content_message_target_username_mismatch",
        );
      if (t.payload.targetId !== n.payload.targetId)
        return o("WAResultOrError").makeError(
          "extended_content_message_target_id_mismatch",
        );
      if (
        !o(
          "MAWMpsMigrationProtobufCorrectnessCheckerUtils",
        ).softCompareTimestamps(
          t.payload.targetExpiringAtSec,
          n.payload.targetExpiringAtSec,
        )
      )
        return o("WAResultOrError").makeError(
          "extended_content_message_target_expiring_at_sec_mismatch",
        );
      if (t.payload.xmaLayoutType !== n.payload.xmaLayoutType)
        return o("WAResultOrError").makeError(
          "extended_content_message_xma_layout_type_mismatch",
        );
      var y = o("MAWMpsMigrationProtobufCorrectnessCheckerUtils").compareArray(
        t.payload.ctas,
        n.payload.ctas,
        p,
        _,
      );
      if (!y.success)
        return o("WAResultOrError").makeError(
          "extended_content_message_ctas_" + y.error,
        );
      if (t.payload.titleText !== n.payload.titleText)
        return o("WAResultOrError").makeError(
          "extended_content_message_title_text_mismatch",
        );
      if (t.payload.subtitleText !== n.payload.subtitleText)
        return o("WAResultOrError").makeError(
          "extended_content_message_subtitle_text_mismatch",
        );
      if (t.payload.maxTitleNumOfLines !== n.payload.maxTitleNumOfLines)
        return o("WAResultOrError").makeError(
          "extended_content_message_max_title_num_of_lines_mismatch",
        );
      if (t.payload.maxSubtitleNumOfLines !== n.payload.maxSubtitleNumOfLines)
        return o("WAResultOrError").makeError(
          "extended_content_message_max_subtitle_num_of_lines_mismatch",
        );
      if (t.payload.headerTitle !== n.payload.headerTitle)
        return o("WAResultOrError").makeError(
          "extended_content_message_header_title_mismatch",
        );
      if (t.payload.overlayIconGlyph !== n.payload.overlayIconGlyph)
        return o("WAResultOrError").makeError(
          "extended_content_message_overlay_icon_glyph_mismatch",
        );
      if (t.payload.overlayTitle !== n.payload.overlayTitle)
        return o("WAResultOrError").makeError(
          "extended_content_message_overlay_title_mismatch",
        );
      if (t.payload.overlayDescription !== n.payload.overlayDescription)
        return o("WAResultOrError").makeError(
          "extended_content_message_overlay_description_mismatch",
        );
      if (t.payload.sentWithMessageId !== n.payload.sentWithMessageId)
        return o("WAResultOrError").makeError(
          "extended_content_message_sent_with_message_id_mismatch",
        );
      if (
        !o("MAWMpsMigrationProtobufCorrectnessCheckerUtils").softCompareStrings(
          t.payload.messageText,
          n.payload.messageText,
        )
      )
        return o("WAResultOrError").makeError(
          "extended_content_message_message_text_mismatch",
        );
      if (t.payload.headerSubtitle !== n.payload.headerSubtitle)
        return o("WAResultOrError").makeError(
          "extended_content_message_header_subtitle_mismatch",
        );
      if (t.payload.xmaDataclass !== n.payload.xmaDataclass)
        return o("WAResultOrError").makeError(
          "extended_content_message_xma_dataclass_mismatch",
        );
      if (t.payload.contentRef !== n.payload.contentRef)
        return o("WAResultOrError").makeError(
          "extended_content_message_content_ref_mismatch",
        );
      var C = o("MAWMpsMigrationProtobufCorrectnessCheckerUtils").compareArray(
        t.payload.mentionedJid,
        n.payload.mentionedJid,
        function (e, t) {
          return (e || "").localeCompare(t || "");
        },
        o("MAWMpsMigrationProtobufCorrectnessCheckerUtils")
          .directComparsionFunction,
      );
      if (!C.success)
        return o("WAResultOrError").makeError(
          "extended_content_message_mentioned_jid_" + C.error,
        );
      var b = o("MAWMpsMigrationProtobufCorrectnessCheckerUtils").compareArray(
        t.payload.commands,
        n.payload.commands,
        o("MAWMpsMigrationProtobufCorrectnessCheckerUtils").sortCommand,
        o("MAWMpsMigrationProtobufCorrectnessCheckerUtils").compareCommand,
      );
      if (!b.success)
        return o("WAResultOrError").makeError(
          "extended_content_message_commands_" + b.error,
        );
      var v = o("MAWMpsMigrationProtobufCorrectnessCheckerUtils").compareArray(
        t.payload.mentions,
        n.payload.mentions,
        o("MAWMpsMigrationProtobufCorrectnessCheckerUtils").sortMention,
        o("MAWMpsMigrationProtobufCorrectnessCheckerUtils").compareMention,
      );
      return v.success
        ? o("WAResultOrError").makeResult()
        : o("WAResultOrError").makeError(
            "extended_content_message_mentions_" + v.error,
          );
    }
    function c(e, t) {
      var n = o(
        "MAWMpsMigrationProtobufCorrectnessCheckerUtils",
      ).compareMessageText(e.noteText, t.noteText);
      if (!n.success)
        return o("WAResultOrError").makeError(
          "note_reply_note_text_" + n.error,
        );
      if (
        !o(
          "MAWMpsMigrationProtobufCorrectnessCheckerUtils",
        ).softCompareTimestamps(e.noteTimestampMs, t.noteTimestampMs)
      )
        return o("WAResultOrError").makeError(
          "note_reply_note_timestamp_ms_mismatch",
        );
      var r = o(
        "MAWMpsMigrationProtobufCorrectnessCheckerUtils",
      ).compareMessageText(e.textContent, t.textContent);
      return r.success
        ? o("WAResultOrError").makeResult()
        : o("WAResultOrError").makeError("note_reply_text_content_" + r.error);
    }
    function d(e, t) {
      return o(
        "MAWMpsMigrationProtobufCorrectnessCheckerUtils",
      ).compareMessageKey(e.key, t.key)
        ? e.actionType !== t.actionType
          ? o("WAResultOrError").makeError(
              "raven_action_notif_action_type_mismatch",
            )
          : o(
                "MAWMpsMigrationProtobufCorrectnessCheckerUtils",
              ).softCompareTimestamps(e.actionTimestamp, t.actionTimestamp)
            ? o("WAResultOrError").makeResult()
            : o("WAResultOrError").makeError(
                "raven_action_notif_action_timestamp_mismatch",
              )
        : o("WAResultOrError").makeError("raven_action_notif_key_mismatch");
    }
    function m(e, t) {
      var n, r, a, i;
      if (e.ephemeralType !== t.ephemeralType)
        return o("WAResultOrError").makeError(
          "raven_message_ephemeral_type_mismatch",
        );
      if (
        ((n = e.imageMessage) == null ? void 0 : n.payload) != null &&
        ((r = t.imageMessage) == null ? void 0 : r.payload) != null
      ) {
        var l, s;
        try {
          var u;
          l = o("decodeProtobuf").decodeProtobuf(
            o("WAMediaTransport.pb").ImageTransportSpec,
            (u = e.imageMessage) == null ? void 0 : u.payload,
          );
        } catch (e) {
          return o("WAResultOrError").makeError(
            "raven_message_image_decoding_error_a",
          );
        }
        try {
          var c;
          s = o("decodeProtobuf").decodeProtobuf(
            o("WAMediaTransport.pb").ImageTransportSpec,
            (c = t.imageMessage) == null ? void 0 : c.payload,
          );
        } catch (e) {
          return o("WAResultOrError").makeError(
            "raven_message_image_decoding_error_b",
          );
        }
        var d = o(
          "MAWMpsMigrationProtobufCorrectnessCheckerMediaComparisons",
        ).compareImageTransport(l, s);
        if (!d.success)
          return o("WAResultOrError").makeError(
            "raven_message_image_" + d.error,
          );
      }
      if (
        ((a = e.videoMessage) == null ? void 0 : a.payload) != null &&
        ((i = t.videoMessage) == null ? void 0 : i.payload) != null
      ) {
        var m, p;
        try {
          m = o("decodeProtobuf").decodeProtobuf(
            o("WAMediaTransport.pb").VideoTransportSpec,
            e.videoMessage.payload,
          );
        } catch (e) {
          return o("WAResultOrError").makeError(
            "raven_message_video_decoding_error_a",
          );
        }
        try {
          var _;
          p = o("decodeProtobuf").decodeProtobuf(
            o("WAMediaTransport.pb").VideoTransportSpec,
            (_ = t.videoMessage) == null ? void 0 : _.payload,
          );
        } catch (e) {
          return o("WAResultOrError").makeError(
            "raven_message_video_decoding_error_b",
          );
        }
        var f = o(
          "MAWMpsMigrationProtobufCorrectnessCheckerMediaComparisons",
        ).compareVideoTransport(m, p);
        if (!f.success)
          return o("WAResultOrError").makeError(
            "raven_message_video_" + f.error,
          );
      }
      return o("WAResultOrError").makeResult();
    }
    function p(e, t) {
      return (e.actionUrl || "").localeCompare(t.actionUrl || "");
    }
    function _(e, t) {
      return e.buttonType !== t.buttonType
        ? o("WAResultOrError").makeError("cta_button_type_mismatch")
        : e.title !== t.title
          ? o("WAResultOrError").makeError("cta_title_mismatch")
          : e.actionUrl !== t.actionUrl
            ? o("WAResultOrError").makeError("cta_action_url_mismatch")
            : e.nativeUrl !== t.nativeUrl
              ? o("WAResultOrError").makeError("cta_native_url_mismatch")
              : e.ctaType !== t.ctaType
                ? o("WAResultOrError").makeError("cta_cta_type_mismatch")
                : e.actionContentBlob !== t.actionContentBlob
                  ? o("WAResultOrError").makeError(
                      "cta_action_content_blob_mismatch",
                    )
                  : o("WAResultOrError").makeResult();
    }
    l.compareMessageApplication = e;
  },
  98,
);
