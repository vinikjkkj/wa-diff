__d(
  "WAParseConsumerMessageProtocol",
  [
    "WACommon.pb",
    "WAConsumerApplication.pb",
    "WAGlobals",
    "WAHex",
    "WAJids",
    "WALogger",
    "WAMediaTransport.pb",
    "WAMessageKey",
    "WAMsgType",
    "WAParseConsumerMessagePollCreation",
    "WAParseConsumerMessagePollUpdate",
    "WAParseMediaTransportProtocol",
    "WAParseProtocolUtils",
    "WAParseReadOnlyMetadataDataclassUtils",
    "WAResultOrError",
    "WAStanzaUtils",
    "WATimeUtils",
    "decodeProtobuf",
    "err",
    "maybeConvertMessageTextMentionsV2ToV1",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 90 * o("WATimeUtils").DAY_SECONDS,
      c = 1,
      d = 0;
    function m(t, n, a, i, l, c) {
      var d,
        m,
        p,
        _,
        f = o("decodeProtobuf").decodeProtobufWithUnknowns(
          o("WAConsumerApplication.pb").ConsumerApplicationSpec,
          n,
        ),
        L =
          (d = f.payload) == null ||
          (d = d.applicationData) == null ||
          (d = d.revoke) == null ||
          (d = d.key) == null
            ? void 0
            : d.id;
      if (L != null)
        return {
          unstoredMsg: {
            type: o("WAMsgType").MSG_TYPE.REVOKED,
            id: a.id,
            ts: a.ts,
            sentTs: a.sentTs,
            serverTs: a.serverTs,
            ack: a.ack,
            reportingMeta: a.reportingMeta,
            revokedExternalId: o("WAStanzaUtils").toStanzaId(L),
            unsendMsgContentDeleteTs: null,
            msgContent: null,
            ebTimestampMs: c,
          },
          unstoredMedia: null,
          unstoredQuotedMedia: null,
        };
      var E = (l == null ? void 0 : l.isForwarded) || !1,
        k = o("WAParseProtocolUtils").parseEphemerality(a, l),
        I = k.deleteTs,
        T = k.ephemeralSetting,
        D = k.expirationTs;
      if (T != null && (T.expirationTs < 0 || T.expirationTs > u)) {
        var x = o("WAJids").interpretAndValidateJid(t),
          $ = x.jidType,
          P = T.expirationTs;
        o("WALogger").ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "WAParseConsumerMessageProtocol - ephemeralSetting duration is invalid ",
              ", jidType: ",
              "",
            ])),
          P,
          $,
        );
      }
      var N = o("WAParseProtocolUtils").enhanceReportingMeta(a, l),
        M = (m = h(l)) != null ? m : void 0,
        w = (p = f.payload) == null ? void 0 : p.content;
      if (!w)
        return {
          unstoredMsg: null,
          unstoredMedia: null,
          unstoredQuotedMedia: null,
        };
      var A = (_ = f.metadata) == null ? void 0 : _.specialTextSize,
        F = S(w),
        O = {
          type: o("WAMsgType").MSG_TYPE.FUTUREPROOF,
          msgContent: { protobuf: o("WAHex").bytesToBuffer(i), subtype: null },
          id: a.id,
          ts: a.ts,
          sentTs: a.sentTs,
          serverTs: a.serverTs,
          ack: a.ack,
          reportingMeta: N,
        },
        B = {
          contentTypeForLogging: F,
          unstoredMsg: O,
          unstoredMedia: null,
          unstoredQuotedMedia: null,
        },
        W = function (t) {
          return babelHelpers.extends({}, B, {
            unstoredMsg: babelHelpers.extends({}, O, {
              msgContent: babelHelpers.extends({}, O.msgContent, {
                subtype: t,
              }),
            }),
          });
        },
        q = (function () {
          try {
            switch (F) {
              case "messageText": {
                var e,
                  n = w[F] && r("maybeConvertMessageTextMentionsV2ToV1")(w[F]);
                if (n == null)
                  throw r("err")("consumerMessage has no messageText");
                var u =
                  ((e = n.commands) == null
                    ? void 0
                    : e.some(function (e) {
                        return (
                          e.commandType ===
                          o("WACommon.pb").COMMAND_COMMAND_TYPE.AI
                        );
                      })) === !0;
                if (
                  u &&
                  !o("WAGlobals")
                    .getConfig()
                    .isMetaAiInvocationMessageRenderEnabled()
                )
                  return W("metaAiMessage");
                if (o("WAParseReadOnlyMetadataDataclassUtils").isNoteMention(l))
                  return W("noteMention");
                if (n.text == null)
                  throw r("err")("consumerMessage has no messageText");
                return {
                  unstoredMsg: babelHelpers.extends(
                    {
                      type: o("WAMsgType").MSG_TYPE.TEXT,
                      msgContent: {
                        content: n.text,
                        mentionedJids: n.mentionedJid
                          .map(o("WAJids").validateUserJid)
                          .filter(Boolean),
                        commands: n.commands,
                      },
                      quote: M,
                      expirationTs: D,
                      deleteTs: I,
                      ephemeralSetting: T,
                      isForwarded: E,
                    },
                    a,
                    { specialTextSize: A, ebTimestampMs: c },
                  ),
                  unstoredMedia: null,
                  unstoredQuotedMedia: null,
                };
              }
              case "reactionMessage":
                return {
                  unstoredMsg: g(t, a, w[F]),
                  unstoredMedia: null,
                  unstoredQuotedMedia: null,
                };
              case "imageMessage": {
                var d = y(w, a.ts);
                return {
                  unstoredMsg: babelHelpers.extends(
                    {
                      type: o("WAMsgType").MSG_TYPE.IMAGE,
                      quote: M,
                      expirationTs: D,
                      deleteTs: I,
                      ephemeralSetting: T,
                      isForwarded: E,
                      mediaId: d.plaintextHash,
                    },
                    a,
                    { ebTimestampMs: c },
                  ),
                  unstoredMedia: d,
                  unstoredQuotedMedia: null,
                };
              }
              case "videoMessage": {
                var m,
                  p,
                  _,
                  f,
                  h = w[F];
                if (h == null)
                  throw r("err")("consumerMessage has no videoMessage");
                var S = o("decodeProtobuf").decodeProtobufWithUnknowns(
                    o("WAMediaTransport.pb").VideoTransportSpec,
                    h == null || (m = h.video) == null ? void 0 : m.payload,
                  ),
                  L =
                    S == null ||
                    (p = S.integral) == null ||
                    (p = p.transport) == null ||
                    (p = p.ancillary) == null
                      ? void 0
                      : p.mimetype,
                  k =
                    (S == null || (_ = S.ancillary) == null
                      ? void 0
                      : _.gifPlayback) === !0 && L === "image/gif",
                  x = o("WAParseMediaTransportProtocol").parseVideoMsg(
                    S,
                    a.ts,
                    k,
                  );
                if (x == null)
                  throw r("err")("consumerMessage has no video media info");
                if (
                  o("WAParseReadOnlyMetadataDataclassUtils").isPowerUp(l) &&
                  ((f = h.caption) == null ? void 0 : f.text) != null
                ) {
                  var $;
                  return {
                    unstoredMsg: babelHelpers.extends(
                      {
                        type: o("WAMsgType").MSG_TYPE.TEXT,
                        msgContent: {
                          content: ($ = h.caption) == null ? void 0 : $.text,
                          mentionedJids: h.caption.mentionedJid
                            .map(o("WAJids").validateUserJid)
                            .filter(Boolean),
                        },
                        quote: M,
                        expirationTs: D,
                        deleteTs: I,
                        ephemeralSetting: T,
                        isForwarded: E,
                      },
                      a,
                      { specialTextSize: A, ebTimestampMs: c },
                    ),
                    unstoredMedia: null,
                    unstoredQuotedMedia: null,
                  };
                }
                return {
                  unstoredMsg: k
                    ? babelHelpers.extends(
                        { type: o("WAMsgType").MSG_TYPE.GIF },
                        a,
                        {
                          quote: M,
                          expirationTs: D,
                          deleteTs: I,
                          ephemeralSetting: T,
                          isForwarded: E,
                          reportingMeta: N,
                          mediaId: x.plaintextHash,
                        },
                      )
                    : babelHelpers.extends(
                        { type: o("WAMsgType").MSG_TYPE.VIDEO },
                        a,
                        {
                          quote: M,
                          expirationTs: D,
                          deleteTs: I,
                          ephemeralSetting: T,
                          isForwarded: E,
                          mediaId: x.plaintextHash,
                        },
                      ),
                  unstoredMedia: x,
                  unstoredQuotedMedia: null,
                };
              }
              case "audioMessage": {
                var P = C(w, a.ts);
                return {
                  unstoredMsg: babelHelpers.extends(
                    {
                      type: o("WAMsgType").MSG_TYPE.PTT,
                      quote: M,
                      expirationTs: D,
                      deleteTs: I,
                      ephemeralSetting: T,
                      isForwarded: E,
                      mediaId: P.plaintextHash,
                    },
                    a,
                    { ebTimestampMs: c },
                  ),
                  unstoredMedia: P,
                  unstoredQuotedMedia: null,
                };
              }
              case "stickerMessage": {
                var O,
                  q,
                  U = b(w),
                  V = o("WAParseMediaTransportProtocol").parseStickerMsg(
                    U,
                    a.ts,
                  ),
                  H =
                    ((O = U.integral) == null ? void 0 : O.receiverFetchId) !=
                      null ||
                    ((q = U.ancillary) == null ? void 0 : q.receiverFetchId) !=
                      null;
                if (V == null) {
                  if (H) {
                    var G = o(
                      "WAParseMediaTransportProtocol",
                    ).parseStickerReceiverFetchInfo(U);
                    if (G == null)
                      throw r("err")(
                        "consumerMessage has no sticker receiver fetch info",
                      );
                    return {
                      unstoredMsg: babelHelpers.extends(
                        {
                          type: o("WAMsgType").MSG_TYPE.RECEIVER_FETCH,
                          quote: M,
                          expirationTs: D,
                          deleteTs: I,
                          ephemeralSetting: T,
                          isForwarded: E,
                          reportingMeta: N,
                        },
                        a,
                        { ebTimestampMs: c },
                      ),
                      unstoredMedia: null,
                      unstoredQuotedMedia: null,
                      unstoredReceiverFetchInfo: G,
                    };
                  }
                  throw r("err")("consumerMessage has no sticker media info");
                }
                return {
                  unstoredMsg: babelHelpers.extends(
                    {
                      type: o("WAMsgType").MSG_TYPE.STICKER,
                      quote: M,
                      expirationTs: D,
                      deleteTs: I,
                      ephemeralSetting: T,
                      isForwarded: E,
                      reportingMeta: N,
                      mediaId: V.plaintextHash,
                    },
                    a,
                    { ebTimestampMs: c },
                  ),
                  unstoredMedia: V,
                  unstoredQuotedMedia: null,
                };
              }
              case "documentMessage": {
                if (o("WAGlobals").getConfig().isDocumentReceiveEnabled()) {
                  var z = v(w, a.ts);
                  return {
                    unstoredMsg: babelHelpers.extends(
                      {
                        type: o("WAMsgType").MSG_TYPE.DOCUMENT_FILE,
                        quote: M,
                        expirationTs: D,
                        deleteTs: I,
                        ephemeralSetting: T,
                        isForwarded: E,
                        reportingMeta: N,
                        mediaId: z.plaintextHash,
                      },
                      a,
                      { ebTimestampMs: c },
                    ),
                    unstoredMedia: z,
                    unstoredQuotedMedia: null,
                  };
                }
                return B;
              }
              case "groupInviteMessage":
                return {
                  unstoredMsg: null,
                  unstoredMedia: null,
                  unstoredQuotedMedia: null,
                  unstoredIncomingGroupInvite: R(a, w),
                };
              case "editMessage": {
                var j,
                  K = w[F],
                  Q = K == null ? void 0 : K.message,
                  X = Q == null ? void 0 : Q.text,
                  Y = K == null || (j = K.key) == null ? void 0 : j.id;
                if (K == null || Q == null || X == null)
                  throw r("err")(
                    "consumerMessage with editMessage type has no editMessage",
                  );
                if (Y == null)
                  throw r("err")(
                    "consumerMessage with editMessage type has no original Msg External Id.",
                  );
                var J = o("WAStanzaUtils").toStanzaId(Y);
                return {
                  unstoredEditMsg: {
                    type: o("WAMsgType").MSG_TYPE.EDIT_ACTION,
                    editMsgContent: {
                      content: X,
                      mentionedJids: Q.mentionedJid
                        .map(o("WAJids").validateUserJid)
                        .filter(Boolean),
                      commands: Q.commands,
                    },
                    originalMsgExternalId: J,
                    id: a.id,
                    ts: a.ts,
                    sentTs: a.sentTs,
                    serverTs: a.serverTs,
                    ack: a.ack,
                    reportingMeta: N,
                    specialTextSize: A,
                  },
                  unstoredMsg: null,
                  unstoredMedia: null,
                  unstoredQuotedMedia: null,
                };
              }
              case "pollCreationMessage":
                return r("WAParseConsumerMessagePollCreation")(i, a, N, w[F]);
              case "pollUpdateMessage":
                return r("WAParseConsumerMessagePollUpdate")(i, a, N, w[F]);
              case "contactMessage":
              case "locationMessage":
              case "extendedTextMessage":
              case "statusTextMessage":
              case "contactsArrayMessage":
              case "liveLocationMessage":
              case "viewOnceMessage":
              default:
                return B;
            }
          } catch (e) {
            return (
              o("WALogger").ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "parseConsumerMessageProtocol error :",
                    "",
                  ])),
                e,
              ),
              {
                unstoredMsg: null,
                unstoredMedia: null,
                unstoredQuotedMedia: null,
              }
            );
          }
        })();
      return babelHelpers.extends({}, q, { contentTypeForLogging: F });
    }
    function p(e) {
      if (o("WAJids").isAuthorSystem(e)) throw r("err")("Got system author");
      return e;
    }
    var _ = 30;
    function f(e) {
      return e == null
        ? o("WAResultOrError").makeResult(null)
        : e.length > _
          ? o("WAResultOrError").makeError("invalid-reaction-text-length")
          : o("WAResultOrError").makeResult(e);
    }
    function g(e, t, n) {
      if (n == null) throw r("err")("consumerMessage has no reactionMessage");
      var a = p(t.id.author),
        i = o("WAMessageKey").extractProtocolMessageId(e, a, n.key),
        l = n.groupingKey,
        s = n.senderTimestampMs,
        u = n.text,
        c = f(u);
      if (!c.success)
        throw r("err")(
          '"' +
            (u != null ? u : "") +
            '" is not a valid reaction [' +
            c.error +
            "]",
        );
      return {
        type: o("WAMsgType").MSG_TYPE.REACTION,
        ack: t.ack,
        id: t.id,
        reactToExternalId: i.externalId,
        reactToAuthor: i.author,
        reaction: c.value,
        groupingKey: l,
        ts: t.ts,
        senderTimestampMs: s,
      };
    }
    function h(e) {
      var t,
        n,
        a,
        i = e == null || (t = e.quotedMessage) == null ? void 0 : t.stanzaId,
        l = e == null || (n = e.quotedMessage) == null ? void 0 : n.participant,
        s = e == null || (a = e.quotedMessage) == null ? void 0 : a.remoteJid,
        u = l != null ? o("WAJids").interpretAndValidateJid(l) : null,
        c;
      if (
        ((u == null ? void 0 : u.jidType) === "msgrUser" &&
        u.userJid === o("WAGlobals").getMyUserJid()
          ? (c = o("WAJids").AUTHOR_ME)
          : (u == null ? void 0 : u.jidType) === "msgrUser"
            ? (c = u.userJid)
            : (c = o("WAJids").AUTHOR_ME),
        i == null)
      )
        return null;
      var d = {
        type: o("WAMsgType").MSG_TYPE.UNAVAILABLE,
        author: c,
        externalId: o("WAStanzaUtils").toStanzaId(i),
        ts: null,
      };
      if (s != null) {
        var m = o("WAJids").interpretAndValidateJid(s);
        if (m.jidType === "group") return { remoteJid: m.groupJid, content: d };
        throw r("err")("not supported");
      } else return { remoteJid: null, content: d };
    }
    function y(e, t) {
      var n,
        a = e.imageMessage;
      if (a == null) throw r("err")("consumerMessage has no imageMessage");
      return o("WAParseMediaTransportProtocol").decodeImageTransport(
        a == null || (n = a.image) == null ? void 0 : n.payload,
        t,
        "image",
      );
    }
    function C(e, t) {
      var n,
        a = e.audioMessage;
      if (a == null) throw r("err")("consumerMessage has no audioMessage");
      var i = o("decodeProtobuf").decodeProtobufWithUnknowns(
          o("WAMediaTransport.pb").AudioTransportSpec,
          a == null || (n = a.audio) == null ? void 0 : n.payload,
        ),
        l = o("WAParseMediaTransportProtocol").parseAudioMsg(
          i,
          (a == null ? void 0 : a.ptt) || !1,
          t,
        );
      if (l == null) throw r("err")("consumerMessage has no audio media info");
      return l;
    }
    function b(e) {
      var t,
        n = e.stickerMessage;
      if (n == null) throw r("err")("consumerMessage has no stickerMessage");
      return o("decodeProtobuf").decodeProtobufWithUnknowns(
        o("WAMediaTransport.pb").StickerTransportSpec,
        n == null || (t = n.sticker) == null ? void 0 : t.payload,
      );
    }
    function v(e, t) {
      var n,
        a = e.documentMessage;
      if (a == null) throw r("err")("consumerMessage has no documentMessage");
      var i = o("decodeProtobuf").decodeProtobufWithUnknowns(
          o("WAMediaTransport.pb").DocumentTransportSpec,
          a == null || (n = a.document) == null ? void 0 : n.payload,
        ),
        l = a == null ? void 0 : a.fileName,
        s = o("WAParseMediaTransportProtocol").parseDocumentMsg(i, l, t);
      if (s == null)
        throw r("err")("consumerMessage has no document media info");
      return s;
    }
    function S(e) {
      var t = Object.keys(e).filter(function (e) {
        return e !== "$$unknownFieldCount";
      });
      if (t.length !== 1)
        throw r("err")(
          JSON.stringify(e) +
            " consumerMessage payload content should have exactly one field, instead found " +
            JSON.stringify(t),
        );
      return t[0];
    }
    function R(e, t) {
      var n = t.groupInviteMessage;
      if (n == null) throw r("err")("consumerMessage has no GroupInvite Data");
      return babelHelpers.extends(
        {
          ack: e.ack,
          author: e.id.author,
          externalId: e.id.externalId,
          ts: e.ts,
        },
        n,
      );
    }
    ((l.MINIMAL_MEDIA_DURATION = c),
      (l.DEFAULT_FILE_SIZE = d),
      (l.parseConsumerMessageProtocol = m),
      (l.interpretAsNonSystemAuthor = p),
      (l.parsedQuotedConsumerMessage = h),
      (l.parseOneOfContentType = S));
  },
  98,
);
