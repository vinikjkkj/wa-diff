__d(
  "EBMinosProcessMessages",
  [
    "Base64Utils",
    "EBMinosLogger",
    "EBMinosMessageEncryptionVersion",
    "EBMinosMessageMetadataVersion",
    "EBMinosTypes",
    "MSGDataclassTypes.flow",
    "MpsTypes",
    "WAFrankingTypes",
    "WAResultOrError",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d, m, p, _, f, g, h, y, C;
    function b(t) {
      var n = t != null ? t : {},
        r = n.actor_token,
        a = n.encrypted_protobuf,
        i = n.franking_tag,
        l = n.mek_fbid,
        c = n.mek_id,
        d = n.message_encryption_version,
        m = n.message_metadata_version,
        p = n.protobuf_timestamp,
        _ = n.reporting_tag,
        f = n.transport_sender_message_signature,
        g = n.transport_sender_signing_pk;
      if (
        (d == null &&
          o("EBMinosLogger").minosLogger.ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "missing message_encryption_version on restore",
              ])),
          ),
        r == null ||
          a == null ||
          d == null ||
          m == null ||
          l == null ||
          c == null ||
          p == null ||
          f == null ||
          g == null)
      )
        return o("WAResultOrError").makeError("top-level-missing-fields");
      var h = o(
        "EBMinosMessageEncryptionVersion",
      ).MinosMessageEncryptionVersion.cast(d);
      if (h == null)
        return (
          o("EBMinosLogger").minosLogger.ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "Failed to cast message encryption version: ",
                "",
              ])),
            d,
          ),
          o("WAResultOrError").makeError("invalid-message-encryption-version")
        );
      var y = o(
        "EBMinosMessageMetadataVersion",
      ).MinosMessageMetadataVersion.cast(m);
      return y == null
        ? (o("EBMinosLogger").minosLogger.ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "Failed to cast message metadata version: ",
                "",
              ])),
            m,
          ),
          o("WAResultOrError").makeError("invalid-message-metadata-version"))
        : o("WAResultOrError").makeResult({
            actorToken: o("EBMinosTypes").unsafeCastToUserFbId(r),
            encryptedProtobuf: o("EBMinosTypes").unsafeCastToEncryptedMessage(
              o("Base64Utils").toArrayBuffer(a),
            ),
            frankingTag:
              i != null
                ? o("WAFrankingTypes").castToFrankingTag(
                    new Uint8Array(o("Base64Utils").toArrayBuffer(i)),
                  )
                : null,
            mekFbid: o("EBMinosTypes").unsafeCastToMekFbId(l),
            mekId: o("EBMinosTypes").unsafeCastToMekId(
              o("Base64Utils").toArrayBuffer(c),
            ),
            messageEncryptionVersion: h,
            messageMetadataVersion: y,
            protobufTimestamp: o("MpsTypes").toTimestamp(parseInt(p, 10)),
            reportingTag:
              _ != null
                ? o("WAFrankingTypes").castToReportingTag(
                    new Uint8Array(o("Base64Utils").toArrayBuffer(_)),
                  )
                : null,
            transportSenderMessageSignature: o(
              "EBMinosTypes",
            ).unsafeCastToEncryptedMessageSignature(
              o("Base64Utils").toArrayBuffer(f),
            ),
            transportSenderSigningPk: o(
              "EBMinosTypes",
            ).unsafeCastToTransportSigningPK(o("Base64Utils").toArrayBuffer(g)),
          });
    }
    function v(e) {
      return e === "PHOTO"
        ? o("MSGDataclassTypes.flow").MpsMessageTag.Photo
        : e === "PERMANENT"
          ? o("MSGDataclassTypes.flow").MpsMessageTag.Permanent
          : e === "EPHEMERAL"
            ? o("MSGDataclassTypes.flow").MpsMessageTag.Ephemeral
            : e === "VIDEO"
              ? o("MSGDataclassTypes.flow").MpsMessageTag.Video
              : e === "GIF"
                ? o("MSGDataclassTypes.flow").MpsMessageTag.Gif
                : e === "AUDIO"
                  ? o("MSGDataclassTypes.flow").MpsMessageTag.Audio
                  : e === "FILE"
                    ? o("MSGDataclassTypes.flow").MpsMessageTag.File
                    : e === "RAVEN"
                      ? o("MSGDataclassTypes.flow").MpsMessageTag.Raven
                      : e === "UNREAD_RAVEN"
                        ? o("MSGDataclassTypes.flow").MpsMessageTag.UnreadRaven
                        : e === "SHARE_IG_MEDIA"
                          ? o("MSGDataclassTypes.flow").MpsMessageTag
                              .ShareIgMedia
                          : e === "SHARE_LINK"
                            ? o("MSGDataclassTypes.flow").MpsMessageTag
                                .ShareLink
                            : e === "SHARE_IG_CLIPS"
                              ? o("MSGDataclassTypes.flow").MpsMessageTag
                                  .ShareIgClips
                              : e === "SHH"
                                ? o("MSGDataclassTypes.flow").MpsMessageTag.Shh
                                : e === "STORY_REPLY"
                                  ? o("MSGDataclassTypes.flow").MpsMessageTag
                                      .StoryReply
                                  : e === "DISAPPEARING_MESSAGE"
                                    ? o("MSGDataclassTypes.flow").MpsMessageTag
                                        .DisappearingMessage
                                    : e === "RAVEN_SEEN"
                                      ? o("MSGDataclassTypes.flow")
                                          .MpsMessageTag.RavenSeen
                                      : e === "RAVEN_REPLAYED"
                                        ? o("MSGDataclassTypes.flow")
                                            .MpsMessageTag.RavenReplayed
                                        : e === "RAVEN_READ_ONCE"
                                          ? o("MSGDataclassTypes.flow")
                                              .MpsMessageTag.RavenReadOnce
                                          : e === "RAVEN_REPLAYABLE"
                                            ? o("MSGDataclassTypes.flow")
                                                .MpsMessageTag.RavenReplayable
                                            : e === "RAVEN_PERMANENT"
                                              ? o("MSGDataclassTypes.flow")
                                                  .MpsMessageTag.RavenPermanent
                                              : e === "ACTION_LOG"
                                                ? o("MSGDataclassTypes.flow")
                                                    .MpsMessageTag.ActionLog
                                                : null;
    }
    function S(e) {
      if (e == null) return [];
      var t = [];
      for (var n of e) {
        var r = v(n);
        r == null
          ? o("EBMinosLogger").minosLogger.ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "convertArrayToMpsMessageTags: unrecognized message tag: ",
                  "",
                ])),
              n,
            )
          : t.push(r);
      }
      return t;
    }
    function R(e) {
      var t = e != null ? e : {},
        n = t.actor_token,
        r = t.encrypted_protobuf,
        a = t.franking_tag,
        i = t.mek_fbid,
        l = t.mek_id,
        s = t.message_encryption_version,
        u = t.message_metadata_version,
        c = t.protobuf_timestamp,
        _ = t.reporting_tag,
        f = t.supplemental_key,
        g = t.supplemental_otid,
        h = t.transport_sender_message_signature,
        y = t.transport_sender_signing_pk;
      if (
        (s == null &&
          o("EBMinosLogger").minosLogger.ERROR(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "missing message_encryption_version on restore",
              ])),
          ),
        n == null ||
          r == null ||
          s == null ||
          u == null ||
          i == null ||
          l == null ||
          c == null ||
          h == null ||
          y == null ||
          f == null ||
          g == null)
      )
        return null;
      var C = o(
        "EBMinosMessageEncryptionVersion",
      ).MinosMessageEncryptionVersion.cast(s);
      if (C == null)
        return (
          o("EBMinosLogger").minosLogger.ERROR(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "Failed to cast message encryption version: ",
                "",
              ])),
            s,
          ),
          null
        );
      var b = o(
        "EBMinosMessageMetadataVersion",
      ).MinosMessageMetadataVersion.cast(u);
      return b == null
        ? (o("EBMinosLogger").minosLogger.ERROR(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "Failed to cast message metadata version: ",
                "",
              ])),
            u,
          ),
          null)
        : {
            actorToken: o("EBMinosTypes").unsafeCastToUserFbId(n),
            encryptedProtobuf: o("EBMinosTypes").unsafeCastToEncryptedMessage(
              o("Base64Utils").toArrayBuffer(r),
            ),
            frankingTag:
              a != null
                ? o("WAFrankingTypes").castToFrankingTag(
                    new Uint8Array(o("Base64Utils").toArrayBuffer(a)),
                  )
                : null,
            mekFbid: o("EBMinosTypes").unsafeCastToMekFbId(i),
            mekId: o("EBMinosTypes").unsafeCastToMekId(
              o("Base64Utils").toArrayBuffer(l),
            ),
            messageEncryptionVersion: C,
            messageMetadataVersion: b,
            protobufTimestamp: o("MpsTypes").toTimestamp(parseInt(c, 10)),
            reportingTag:
              _ != null
                ? o("WAFrankingTypes").castToReportingTag(
                    new Uint8Array(o("Base64Utils").toArrayBuffer(_)),
                  )
                : null,
            supplementalKey: o("MpsTypes").toSupplementalKey(f),
            supplementalOtid: o("MpsTypes").toMessageId(g),
            transportSenderMessageSignature: o(
              "EBMinosTypes",
            ).unsafeCastToEncryptedMessageSignature(
              o("Base64Utils").toArrayBuffer(h),
            ),
            transportSenderSigningPk: o(
              "EBMinosTypes",
            ).unsafeCastToTransportSigningPK(o("Base64Utils").toArrayBuffer(y)),
          };
    }
    function L(e) {
      return e == null
        ? []
        : e
            .map(function (e) {
              var t = e.echo_document,
                n = e.otid,
                r = e.protobuf_stanzas;
              if (n == null)
                return (
                  o("EBMinosLogger").minosLogger.ERROR(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "processMinosMessages: otid is null",
                      ])),
                  ),
                  null
                );
              if (r == null)
                return (
                  t == null &&
                    o("EBMinosLogger").minosLogger.ERROR(
                      f ||
                        (f = babelHelpers.taggedTemplateLiteralLoose([
                          "processMinosMessages: protobuf_stanzas and echo_documents are null",
                        ])),
                    ),
                  null
                );
              var a = r.message_tags,
                i = r.supplemental_protobufs_v2,
                l = i === void 0 ? [] : i,
                s = r.top_level_protobuf_v2;
              if (s == null) return null;
              var u = b(s);
              if (!u.success)
                return (
                  o("EBMinosLogger").minosLogger.ERROR(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "processMinosMessages: top_level_protobuf_v2 conversion failed",
                      ])),
                  ),
                  null
                );
              var c = l
                  .map(function (e) {
                    var t = e == null ? void 0 : e.supplemental_key,
                      n = R(e);
                    if (t == null) {
                      o("EBMinosLogger").minosLogger.LOG(
                        h ||
                          (h = babelHelpers.taggedTemplateLiteralLoose([
                            "processMinosMessages: minos supplementalKey is null",
                          ])),
                      );
                      return;
                    }
                    if (n == null) {
                      o("EBMinosLogger").minosLogger.LOG(
                        y ||
                          (y = babelHelpers.taggedTemplateLiteralLoose([
                            "processMinosMessages: minosSupplementalProtobuf is null",
                          ])),
                      );
                      return;
                    }
                    return n;
                  })
                  .filter(Boolean),
                d = o("MpsTypes").toMessageId(n);
              return {
                messageTags: S(a),
                otid: d,
                supplementalProtobufsV2: c,
                topLevelProtobufV2: u.value,
              };
            })
            .filter(Boolean);
    }
    function E(e, t, n) {
      return t ===
        o("EBMinosMessageMetadataVersion").MinosMessageMetadataVersion.V1
        ? e
        : isNaN(n)
          ? (o("EBMinosLogger").minosLogger.ERROR(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "createMessageTimestamp: otid is not a number",
                ])),
            ),
            o("MpsTypes").toTimestamp(0))
          : k(n);
    }
    function k(e) {
      return o("MpsTypes").toTimestamp(Number(BigInt(e) >> BigInt(22)));
    }
    ((l.convertArrayToMpsMessageTags = S),
      (l.processMinosMessages = L),
      (l.createMessageTimestamp = E),
      (l.extractTimestampFromOtid = k));
  },
  98,
);
