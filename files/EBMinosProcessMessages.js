__d(
  "EBMinosProcessMessages",
  [
    "Base64Utils",
    "EBMinosErrors",
    "EBMinosLogger",
    "EBMinosMessageEncryptionVersion",
    "EBMinosMessageMetadataVersion",
    "EBMinosServerOriginGating",
    "EBMinosTypes",
    "MSGDataclassTypes.flow",
    "MpsTypes",
    "WAFrankingTypes",
    "WAResultOrError",
    "WmiErrorReport",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(e, t) {
      var n = e != null ? e : {},
        r = n.actor_token,
        a = n.encrypted_protobuf,
        i = n.franking_tag,
        l = n.mek_fbid,
        s = n.mek_id,
        u = n.message_encryption_version,
        c = n.message_metadata_version,
        d = n.protobuf_timestamp,
        m = n.reporting_tag,
        p = n.server_origin_content_type,
        _ = n.transport_sender_message_signature,
        f = n.transport_sender_signing_pk;
      if (
        r == null ||
        a == null ||
        u == null ||
        c == null ||
        l == null ||
        s == null ||
        d == null ||
        _ == null ||
        f == null
      )
        return (
          o("WmiErrorReport").reportWmiError(
            o("EBMinosErrors").EBMinosErrors.error(
              "payload_incomplete",
              "top-level protobuf is missing required field(s)",
            ),
            t,
          ),
          o("WAResultOrError").makeError("top-level-missing-fields")
        );
      var g = o(
        "EBMinosMessageEncryptionVersion",
      ).MinosMessageEncryptionVersion.cast(u);
      if (g == null)
        return (
          o("WmiErrorReport").reportWmiError(
            o("EBMinosErrors").EBMinosErrors.error(
              "payload_incomplete",
              "top-level message encryption version %s is not recognized",
              u,
            ),
            t,
          ),
          o("WAResultOrError").makeError("invalid-message-encryption-version")
        );
      var h = o(
        "EBMinosMessageMetadataVersion",
      ).MinosMessageMetadataVersion.cast(c);
      return h == null
        ? (o("WmiErrorReport").reportWmiError(
            o("EBMinosErrors").EBMinosErrors.error(
              "payload_incomplete",
              "top-level message metadata version %s is not recognized",
              c,
            ),
            t,
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
              o("Base64Utils").toArrayBuffer(s),
            ),
            messageEncryptionVersion: g,
            messageMetadataVersion: h,
            protobufTimestamp: o("MpsTypes").toTimestamp(parseInt(d, 10)),
            reportingTag:
              m != null
                ? o("WAFrankingTypes").castToReportingTag(
                    new Uint8Array(o("Base64Utils").toArrayBuffer(m)),
                  )
                : null,
            serverOriginContentType: p,
            transportSenderMessageSignature: o(
              "EBMinosTypes",
            ).unsafeCastToEncryptedMessageSignature(
              o("Base64Utils").toArrayBuffer(_),
            ),
            transportSenderSigningPk: o(
              "EBMinosTypes",
            ).unsafeCastToTransportSigningPK(o("Base64Utils").toArrayBuffer(f)),
          });
    }
    function d(e) {
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
    function m(e) {
      if (e == null) return [];
      var t = [];
      for (var n of e) {
        var r = d(n);
        r == null
          ? o("WmiErrorReport").reportWmiError(
              o("EBMinosErrors").EBMinosErrors.error(
                "message_tag_dropped",
                "message tag %s is not recognized",
                n,
              ),
              { loggerProject: "wmi_minos" },
            )
          : t.push(r);
      }
      return t;
    }
    function p(e, t) {
      var n = e != null ? e : {},
        r = n.actor_token,
        a = n.encrypted_protobuf,
        i = n.franking_tag,
        l = n.mek_fbid,
        s = n.mek_id,
        u = n.message_encryption_version,
        c = n.message_metadata_version,
        d = n.protobuf_timestamp,
        m = n.reporting_tag,
        p = n.supplemental_key,
        _ = n.supplemental_otid,
        f = n.transport_sender_message_signature,
        g = n.transport_sender_signing_pk;
      if (
        r == null ||
        a == null ||
        u == null ||
        c == null ||
        l == null ||
        s == null ||
        d == null ||
        f == null ||
        g == null ||
        p == null ||
        _ == null
      )
        return (
          o("WmiErrorReport").reportWmiError(
            o("EBMinosErrors").EBMinosErrors.error(
              "payload_incomplete",
              "supplemental protobuf is missing required field(s)",
            ),
            t,
          ),
          null
        );
      var h = o(
        "EBMinosMessageEncryptionVersion",
      ).MinosMessageEncryptionVersion.cast(u);
      if (h == null)
        return (
          o("WmiErrorReport").reportWmiError(
            o("EBMinosErrors").EBMinosErrors.error(
              "payload_incomplete",
              "supplemental message encryption version %s is not recognized",
              u,
            ),
            t,
          ),
          null
        );
      var y = o(
        "EBMinosMessageMetadataVersion",
      ).MinosMessageMetadataVersion.cast(c);
      return y == null
        ? (o("WmiErrorReport").reportWmiError(
            o("EBMinosErrors").EBMinosErrors.error(
              "payload_incomplete",
              "supplemental message metadata version %s is not recognized",
              c,
            ),
            t,
          ),
          null)
        : {
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
              o("Base64Utils").toArrayBuffer(s),
            ),
            messageEncryptionVersion: h,
            messageMetadataVersion: y,
            protobufTimestamp: o("MpsTypes").toTimestamp(parseInt(d, 10)),
            reportingTag:
              m != null
                ? o("WAFrankingTypes").castToReportingTag(
                    new Uint8Array(o("Base64Utils").toArrayBuffer(m)),
                  )
                : null,
            supplementalKey: o("MpsTypes").toSupplementalKey(p),
            supplementalOtid: o("MpsTypes").toMessageId(_),
            transportSenderMessageSignature: o(
              "EBMinosTypes",
            ).unsafeCastToEncryptedMessageSignature(
              o("Base64Utils").toArrayBuffer(f),
            ),
            transportSenderSigningPk: o(
              "EBMinosTypes",
            ).unsafeCastToTransportSigningPK(o("Base64Utils").toArrayBuffer(g)),
          };
    }
    function _(t, n) {
      if (t == null) return [];
      var r = new Set(),
        a = new Set(),
        i = 0,
        l = 0,
        d = t
          .map(function (t) {
            var n = t.echo_document,
              d = t.otid,
              _ = t.protobuf_stanzas;
            if (d == null)
              return (
                o("WmiErrorReport").reportWmiError(
                  o("EBMinosErrors").EBMinosErrors.error(
                    "payload_incomplete",
                    "restored message has no otid",
                  ),
                  { loggerProject: "wmi_minos" },
                ),
                null
              );
            var f = { loggerProject: "wmi_minos", loggerSubject: d };
            if (_ == null)
              return (
                n == null &&
                  o("WmiErrorReport").reportWmiError(
                    o("EBMinosErrors").EBMinosErrors.error(
                      "payload_incomplete",
                      "restored message has neither protobuf_stanzas nor echo_document",
                    ),
                    f,
                  ),
                null
              );
            var g = _.message_tags,
              h = _.supplemental_protobufs_v2,
              y = h === void 0 ? [] : h,
              C = _.top_level_protobuf_v2;
            if (C == null) return null;
            var b = o(
                "EBMinosServerOriginGating",
              ).classifyServerOriginContentWithReason(
                C.server_origin_content_type,
              ),
              v = o("EBMinosServerOriginGating").serverOriginContentTypeName(
                C.server_origin_content_type,
              );
            if ((v != null && r.add(v), b.verdict === "unsupported"))
              return (
                l++,
                a.add(b.reason),
                o("EBMinosLogger").minosLogger.DEV(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "processMinosMessages: dropping server-origin content of unsupported type",
                    ])),
                ),
                null
              );
            var S = c(C, f);
            if (!S.success) return null;
            b.verdict === "supported" && i++;
            var R = y
                .map(function (e) {
                  var t = e == null ? void 0 : e.supplemental_key,
                    n = p(e, f);
                  if (t == null) {
                    o("EBMinosLogger").minosLogger.LOG(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "processMinosMessages: minos supplementalKey is null",
                        ])),
                    );
                    return;
                  }
                  if (n == null) {
                    o("EBMinosLogger").minosLogger.LOG(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "processMinosMessages: minosSupplementalProtobuf is null",
                        ])),
                    );
                    return;
                  }
                  return n;
                })
                .filter(Boolean),
              L = o("MpsTypes").toMessageId(d);
            return {
              messageTags: m(g),
              otid: L,
              supplementalProtobufsV2: R,
              topLevelProtobufV2: S.value,
            };
          })
          .filter(Boolean);
      return (
        n != null &&
          (n.addAnnotations({
            bool: { has_server_origin_content: r.size > 0 },
          }),
          r.size > 0 &&
            n.addAnnotations({
              int: {
                server_origin_content_accepted: i,
                server_origin_content_dropped: l,
              },
              string_array: {
                server_origin_content_types: Array.from(r),
                server_origin_drop_reasons: Array.from(a),
              },
            })),
        d
      );
    }
    function f(e, t, n) {
      return t ===
        o("EBMinosMessageMetadataVersion").MinosMessageMetadataVersion.V1
        ? e
        : isNaN(Number(n))
          ? (o("WmiErrorReport").reportWmiError(
              o("EBMinosErrors").EBMinosErrors.error(
                "timestamp_derivation_failed",
                "V2 message timestamp needs a numeric otid",
              ),
              { loggerProject: "wmi_minos", loggerSubject: n },
            ),
            o("MpsTypes").toTimestamp(0))
          : g(n);
    }
    function g(e) {
      return o("MpsTypes").toTimestamp(Number(BigInt(e) >> BigInt(22)));
    }
    ((l.convertArrayToMpsMessageTags = m),
      (l.processMinosMessages = _),
      (l.createMessageTimestamp = f),
      (l.extractTimestampFromOtid = g));
  },
  98,
);
