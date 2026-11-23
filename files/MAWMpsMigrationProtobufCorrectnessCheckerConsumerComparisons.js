__d(
  "MAWMpsMigrationProtobufCorrectnessCheckerConsumerComparisons",
  [
    "MAWMpsMigrationProtobufCorrectnessCheckerMediaComparisons",
    "MAWMpsMigrationProtobufCorrectnessCheckerUtils",
    "WAResultOrError",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n, r, a, i, l, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k;
      if (
        ((n = e.payload) == null || (n = n.applicationData) == null
          ? void 0
          : n.revoke) != null &&
        ((r = t.payload) == null || (r = r.applicationData) == null
          ? void 0
          : r.revoke) != null
      )
        return d(
          e.payload.applicationData.revoke,
          t.payload.applicationData.revoke,
        );
      if (
        ((a = e.payload) == null ? void 0 : a.content) == null ||
        ((i = t.payload) == null ? void 0 : i.content) == null
      )
        return o("WAResultOrError").makeError("unsupported_protobuf_type");
      if (
        e.payload.content.audioMessage != null &&
        t.payload.content.audioMessage != null
      ) {
        var I = e.audioMessage(),
          T = t.audioMessage();
        if (I != null && T != null)
          return o(
            "MAWMpsMigrationProtobufCorrectnessCheckerMediaComparisons",
          ).compareAudioMessage(I, T);
      }
      if (
        ((l = e.payload) == null || (l = l.content) == null
          ? void 0
          : l.documentMessage) != null &&
        ((m = t.payload) == null || (m = m.content) == null
          ? void 0
          : m.documentMessage) != null
      ) {
        var D = e.documentMessage(),
          x = t.documentMessage();
        if (D != null && x != null)
          return o(
            "MAWMpsMigrationProtobufCorrectnessCheckerMediaComparisons",
          ).compareDocumentMessage(D, x);
      }
      if (
        ((p = e.payload) == null || (p = p.content) == null
          ? void 0
          : p.imageMessage) != null &&
        ((_ = t.payload) == null || (_ = _.content) == null
          ? void 0
          : _.imageMessage) != null
      ) {
        var $ = e.imageMessage(),
          P = t.imageMessage();
        if (
          ($ == null ? void 0 : $.payload) != null &&
          (P == null ? void 0 : P.payload) != null
        )
          return o(
            "MAWMpsMigrationProtobufCorrectnessCheckerMediaComparisons",
          ).compareImageTransport($.payload, P.payload);
      }
      if (
        ((f = e.payload) == null || (f = f.content) == null
          ? void 0
          : f.videoMessage) != null &&
        ((g = t.payload) == null || (g = g.content) == null
          ? void 0
          : g.videoMessage) != null
      ) {
        var N = e.videoMessage(),
          M = t.videoMessage();
        if (N != null && M != null) {
          var w = o(
            "MAWMpsMigrationProtobufCorrectnessCheckerUtils",
          ).compareMessageText(N.caption, M.caption);
          return w.success
            ? o(
                "MAWMpsMigrationProtobufCorrectnessCheckerMediaComparisons",
              ).compareVideoTransport(N.payload, M.payload)
            : o("WAResultOrError").makeError("video_caption_" + w.error);
        }
      }
      if (
        ((h = e.payload) == null || (h = h.content) == null
          ? void 0
          : h.stickerMessage) != null &&
        ((y = t.payload) == null || (y = y.content) == null
          ? void 0
          : y.stickerMessage) != null
      ) {
        var A = e.stickerMessage(),
          F = t.stickerMessage();
        if (A != null && F != null)
          return o(
            "MAWMpsMigrationProtobufCorrectnessCheckerMediaComparisons",
          ).compareStickerMessage(A, F);
      }
      if (
        ((C = e.payload) == null || (C = C.content) == null
          ? void 0
          : C.editMessage) != null &&
        ((b = t.payload) == null || (b = b.content) == null
          ? void 0
          : b.editMessage) != null
      )
        return s(e.payload.content.editMessage, t.payload.content.editMessage);
      if (
        ((v = e.payload) == null || (v = v.content) == null
          ? void 0
          : v.groupInviteMessage) != null &&
        ((S = t.payload) == null || (S = S.content) == null
          ? void 0
          : S.groupInviteMessage) != null
      )
        return u(
          e.payload.content.groupInviteMessage,
          t.payload.content.groupInviteMessage,
        );
      if (
        ((R = e.payload) == null || (R = R.content) == null
          ? void 0
          : R.reactionMessage) != null &&
        ((L = t.payload) == null || (L = L.content) == null
          ? void 0
          : L.reactionMessage) != null
      )
        return c(
          e.payload.content.reactionMessage,
          t.payload.content.reactionMessage,
        );
      if (
        ((E = e.payload) == null || (E = E.content) == null
          ? void 0
          : E.messageText) != null &&
        ((k = t.payload) == null || (k = k.content) == null
          ? void 0
          : k.messageText) != null
      ) {
        var O, B;
        return o(
          "MAWMpsMigrationProtobufCorrectnessCheckerUtils",
        ).compareMessageText(
          (O = e.payload) == null || (O = O.content) == null
            ? void 0
            : O.messageText,
          (B = t.payload) == null || (B = B.content) == null
            ? void 0
            : B.messageText,
        );
      }
      return o("WAResultOrError").makeError("unsupported_protobuf_type");
    }
    function s(e, t) {
      return o(
        "MAWMpsMigrationProtobufCorrectnessCheckerUtils",
      ).compareMessageKey(e.key, t.key)
        ? o(
            "MAWMpsMigrationProtobufCorrectnessCheckerUtils",
          ).softCompareTimestamps(e.timestampMs, t.timestampMs)
          ? o(
              "MAWMpsMigrationProtobufCorrectnessCheckerUtils",
            ).compareMessageText(e.message, t.message)
          : o("WAResultOrError").makeError("edit_message_timestamp_mismatch")
        : o("WAResultOrError").makeError("edit_message_key_mismatch");
    }
    function u(e, t) {
      return e.groupJid !== t.groupJid
        ? o("WAResultOrError").makeError(
            "group_invite_message_group_jid_mismatch",
          )
        : e.inviteCode !== t.inviteCode
          ? o("WAResultOrError").makeError(
              "group_invite_message_invite_code_mismatch",
            )
          : o(
                "MAWMpsMigrationProtobufCorrectnessCheckerUtils",
              ).softCompareTimestamps(e.inviteExpiration, t.inviteExpiration)
            ? e.groupName !== t.groupName
              ? o("WAResultOrError").makeError(
                  "group_invite_message_group_name_mismatch",
                )
              : o("WAResultOrError").makeResult()
            : o("WAResultOrError").makeError(
                "group_invite_message_invite_expiration_mismatch",
              );
    }
    function c(e, t) {
      return o(
        "MAWMpsMigrationProtobufCorrectnessCheckerUtils",
      ).compareMessageKey(e.key, t.key)
        ? o(
            "MAWMpsMigrationProtobufCorrectnessCheckerUtils",
          ).softCompareTimestamps(e.senderTimestampMs, t.senderTimestampMs)
          ? e.text !== t.text
            ? o("WAResultOrError").makeError("reaction_message_text_mismatch")
            : o("WAResultOrError").makeResult()
          : o("WAResultOrError").makeError(
              "reaction_message_sender_timestamp_mismatch",
            )
        : o("WAResultOrError").makeError("reaction_message_key_mismatch");
    }
    function d(e, t) {
      return o(
        "MAWMpsMigrationProtobufCorrectnessCheckerUtils",
      ).compareMessageKey(e.key, t.key)
        ? o("WAResultOrError").makeResult()
        : o("WAResultOrError").makeError("revoke_message_key_mismatch");
    }
    l.compareConsumerApplication = e;
  },
  98,
);
