__d(
  "WAParseProtocol",
  [
    "WAAckLevel",
    "WAAssertUnreachable",
    "WAE2E.pb",
    "WAGlobals",
    "WAHashUtils",
    "WAHex",
    "WAJids",
    "WALogger",
    "WALongInt",
    "WAMedia",
    "WAMediaUtils",
    "WAMsgMap",
    "WAMsgType",
    "WASortedLists",
    "WAStanzaUtils",
    "WATimeUtils",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S,
      R = {};
    function L() {
      return {
        unstoredMsg: null,
        unstoredMedia: null,
        unstoredQuotedMedia: null,
      };
    }
    function E(e) {
      var t = e.unstoredMedia,
        n = t === void 0 ? null : t,
        r = e.unstoredMsg,
        o = e.unstoredQuotedMedia,
        a = o === void 0 ? null : o;
      return r == null && n == null
        ? L()
        : { unstoredMsg: r, unstoredMedia: n, unstoredQuotedMedia: a };
    }
    function k(e) {
      var t = P(e.proto);
      if (!t) return L();
      var n = D(e, t),
        a = I(e, t),
        i = a.quote,
        l = a.quotedMedia;
      switch (t.type) {
        case "conversation": {
          var s = babelHelpers.extends(
            {
              type: o("WAMsgType").MSG_TYPE.TEXT,
              msgContent: { content: t.value },
              quote: i != null ? i : void 0,
            },
            n,
          );
          return E({ unstoredMsg: s, unstoredQuotedMedia: l });
        }
        case "imageMessage": {
          var u = t.value,
            c = N(u, n.ts),
            d = babelHelpers.extends(
              {
                type: o("WAMsgType").MSG_TYPE.IMAGE,
                mediaId: c == null ? void 0 : c.plaintextHash,
                quote: i != null ? i : void 0,
              },
              n,
            );
          return E({ unstoredMsg: d, unstoredMedia: c });
        }
        case "videoMessage": {
          var m = t.value,
            p = M(m, n.ts),
            _ = babelHelpers.extends(
              {
                type: o("WAMsgType").MSG_TYPE.VIDEO,
                mediaId: p == null ? void 0 : p.plaintextHash,
                quote: i != null ? i : void 0,
              },
              n,
            );
          return E({ unstoredMsg: _, unstoredMedia: p });
        }
        case "audioMessage": {
          var f = t.value,
            g = w(f, n.ts),
            h = babelHelpers.extends(
              {
                type: o("WAMsgType").MSG_TYPE.PTT,
                mediaId: g == null ? void 0 : g.plaintextHash,
              },
              n,
            );
          return E({ unstoredMsg: h, unstoredMedia: g });
        }
        case "documentMessage": {
          var y = t.value,
            C = W(y, n.ts),
            b = babelHelpers.extends(
              {
                type: o("WAMsgType").MSG_TYPE.DOCUMENT_FILE,
                mediaId: C == null ? void 0 : C.plaintextHash,
                quote: i != null ? i : void 0,
              },
              n,
            );
          return E({ unstoredMsg: b, unstoredMedia: C });
        }
        case "futureproof": {
          var v = {
            type: o("WAMsgType").MSG_TYPE.FUTUREPROOF,
            msgContent: {
              protobuf: o("WAHex").bytesToBuffer(e.bytes),
              subtype: R[t.type] || null,
            },
            id: n.id,
            ts: n.ts,
            sentTs: n.sentTs,
            serverTs: n.serverTs,
            ack: n.ack,
            reportingMeta: n.reportingMeta,
          };
          return E({ unstoredMsg: v });
        }
        case "reactionMessage": {
          var S = t.value,
            k = A(S, n);
          return E({ unstoredMsg: k });
        }
        case "protocolMessage": {
          var T = B(t.value, n);
          return E({ unstoredMsg: T });
        }
        case "extendedTextMessage":
          return F(t.value, n, i);
        default:
          return r("WAAssertUnreachable")(t.type);
      }
    }
    function I(t, n) {
      var r = x(n),
        a = r == null ? void 0 : r.quotedMessage;
      if (r == null || a == null) return { quote: null, quotedMedia: null };
      var i = P(a);
      if (i == null)
        return (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Received quote from a type that us not supported ",
                "",
              ])),
            a,
          ),
          { quote: null, quotedMedia: null }
        );
      var l = r.participant,
        d = r.stanzaId;
      if (d == null || l == null)
        return (
          o("WALogger").ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "Received quote with missing data in the protobuf",
              ])),
          ),
          { quote: null, quotedMedia: null }
        );
      var m = l
        ? o("WAJids").validateUserJid(l)
        : o("WAJids").interpretAsUserJid(t.jid);
      if (m == null)
        return (
          o("WALogger").ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "Received quote invalid author ",
                "",
              ])),
            m,
          ),
          { quote: null, quotedMedia: null }
        );
      var p = {
        externalId: o("WAStanzaUtils").toStanzaId(d),
        ts: null,
        author: m,
        serverTs: t.ts,
      };
      switch (i.type) {
        case "conversation": {
          var _ = babelHelpers.extends(
            {
              type: o("WAMsgType").MSG_TYPE.TEXT,
              msgContent: { content: i.value },
            },
            p,
          );
          return { quote: { content: _, remoteJid: null }, quotedMedia: null };
        }
        case "imageMessage": {
          var f = i.value,
            g = N(f, t.ts),
            h = babelHelpers.extends(
              {
                type: o("WAMsgType").MSG_TYPE.IMAGE,
                mediaId: g == null ? void 0 : g.plaintextHash,
              },
              p,
            );
          return { quote: { content: h, remoteJid: null }, quotedMedia: g };
        }
        default:
          return (
            o("WALogger").ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "Received a quote of a type that is not yet supported: ",
                  "",
                ])),
              i.type,
            ),
            { quote: null, quotedMedia: null }
          );
      }
    }
    var T = [
      "conversation",
      "imageMessage",
      "videoMessage",
      "audioMessage",
      "reactionMessage",
      "protocolMessage",
      "extendedTextMessage",
      "documentMessage",
    ];
    function D(e, t) {
      var n = x(t);
      return {
        id: { externalId: e.externalId, author: e.author, chat: e.jid },
        ts: e.ts,
        ack: o("WAAckLevel").ACK.RECEIVED,
        serverTs: e.ts,
        forwardingScore: $(t, n),
      };
    }
    function x(e) {
      switch (e.type) {
        case "imageMessage":
        case "videoMessage":
        case "extendedTextMessage":
        case "audioMessage":
        case "documentMessage":
          return e.value.contextInfo;
        default:
          return (e.type, null);
      }
    }
    function $(e, t) {
      return e.type === "futureproof"
        ? 0
        : (t == null ? void 0 : t.forwardingScore) != null
          ? t == null
            ? void 0
            : t.forwardingScore
          : (t == null ? void 0 : t.isForwarded) === !0
            ? 1
            : 0;
    }
    function P(e) {
      for (var t = null, n = 0; n < T.length; n++)
        if (e[T[n]] != null) {
          if (t)
            return (
              o("WALogger").ERROR(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "interpretProto msg came with tags ",
                    " and ",
                    "",
                  ])),
                t,
                T[n],
              ),
              null
            );
          t = T[n];
        }
      if (t == null)
        return (
          o("WALogger").ERROR(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "We dont support this message type yet",
              ])),
          ),
          { type: "futureproof" }
        );
      switch (t) {
        case "audioMessage":
          return e.audioMessage != null
            ? { type: "audioMessage", value: e.audioMessage }
            : null;
        case "videoMessage":
          return e.videoMessage != null
            ? { type: "videoMessage", value: e.videoMessage }
            : null;
        case "imageMessage":
          return e.imageMessage != null
            ? { type: "imageMessage", value: e.imageMessage }
            : null;
        case "documentMessage":
          return e.documentMessage != null
            ? { type: "documentMessage", value: e.documentMessage }
            : null;
        case "conversation":
          return e.conversation != null
            ? { type: "conversation", value: e.conversation }
            : null;
        case "protocolMessage":
          return e.protocolMessage != null
            ? { type: "protocolMessage", value: e.protocolMessage }
            : null;
        case "extendedTextMessage":
          return e.extendedTextMessage != null
            ? { type: "extendedTextMessage", value: e.extendedTextMessage }
            : null;
        case "reactionMessage":
          return e.reactionMessage != null
            ? { type: "reactionMessage", value: e.reactionMessage }
            : null;
        default:
          r("WAAssertUnreachable")(t);
      }
    }
    function N(e, t) {
      var n = U(e, "image");
      if (!n) return null;
      var r = q(n, t);
      return babelHelpers.extends({}, r, {
        mediaType: o("WAMedia").IMAGE,
        validatedVideoInfo: null,
        validatedImageInfo: {
          width: e.width,
          height: e.height,
          jpegThumbnail: e.jpegThumbnail,
        },
        validatedAudioInfo: null,
        validatedDocumentFileInfo: null,
      });
    }
    function M(e, t) {
      var n = U(e, "video");
      if (!n) return null;
      var r = q(n, t);
      return babelHelpers.extends({}, r, {
        mediaType: o("WAMedia").VIDEO,
        validatedVideoInfo: {
          duration: e.seconds != null && e.seconds > 1 ? e.seconds : 1,
          width: e.width,
          height: e.height,
          mimetype: e.mimetype,
          jpegThumbnail: e.jpegThumbnail,
        },
        validatedImageInfo: null,
        validatedAudioInfo: null,
        validatedDocumentFileInfo: null,
      });
    }
    function w(e, t) {
      var n = U(e, "ptt");
      if (!n) return null;
      var r = q(n, t);
      return babelHelpers.extends({}, r, {
        mediaType: o("WAMedia").PTT,
        validatedVideoInfo: null,
        validatedImageInfo: null,
        validatedAudioInfo: {
          duration: e.seconds != null && e.seconds > 1 ? e.seconds : 1,
          mimetype: e.mimetype,
          played: !1,
        },
        validatedDocumentFileInfo: null,
      });
    }
    function A(e, t) {
      var n,
        r = (n = e.key) == null ? void 0 : n.id,
        a = t.id.author;
      return o("WAJids").isAuthorSystem(a)
        ? (o("WALogger").ERROR(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "There are no admin made reactions",
              ])),
          ),
          null)
        : r == null
          ? null
          : {
              type: o("WAMsgType").MSG_TYPE.REACTION,
              reactToAuthor: a,
              reaction: e.text,
              reactToExternalId: o("WAStanzaUtils").toStanzaId(r),
              groupingKey: e.groupingKey,
              id: t.id,
              ts: t.ts,
              ack: o("WAAckLevel").ACK.RECEIVED,
              serverTs: t.ts,
              senderTimestampMs: e.senderTimestampMs,
            };
    }
    function F(e, t, n) {
      var r,
        a = e.text;
      if (a == null)
        return (
          o("WALogger").ERROR(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "Received extendedTextMsg with no text content",
              ])),
          ),
          L()
        );
      var i = O((r = e.contextInfo) == null ? void 0 : r.mentionedJid, a),
        l = babelHelpers.extends(
          {
            type: o("WAMsgType").MSG_TYPE.TEXT,
            msgContent: { content: a, mentionedJids: i != null ? i : void 0 },
            quote: n != null ? n : void 0,
          },
          t,
        );
      return E({ unstoredMsg: l });
    }
    function O(e, t) {
      var n = t;
      if (e == null || n == null) return null;
      for (var r = [], a = 0; a < e.length; a++) {
        var i = o("WAJids").interpretAndValidateJid(e[a]);
        i.jidType === "phoneUser" &&
          n.includes("@" + o("WAJids").phoneNumberFromJid(i.userJid)) &&
          r.push(i.userJid);
      }
      return r.length ? o("WASortedLists").sortAndDedupe(r) : void 0;
    }
    function B(e, t) {
      var n = t.id.author,
        a = e.type;
      if (o("WAJids").isAuthorSystem(n))
        throw r("err")("There are no admin made reactions");
      if (a == null)
        throw r("err")("Received invalid protocol message with no type");
      switch (a) {
        case o("WAE2E.pb").Message$ProtocolMessage$Type.REVOKE: {
          var i = e.key,
            l = t.id.chat;
          if (
            i &&
            (i.remoteJid === o("WAGlobals").getMyUserJid()
              ? n === l
              : i.remoteJid === l) &&
            i.id != null
          ) {
            var s = i.fromMe,
              u = i.id,
              c = s != null ? s : !1;
            return c
              ? {
                  id: t.id,
                  ts: t.ts,
                  sentTs: t.sentTs,
                  serverTs: t.serverTs,
                  ack: t.ack,
                  reportingMeta: t.reportingMeta,
                  type: o("WAMsgType").MSG_TYPE.REVOKED,
                  revokedExternalId: o("WAStanzaUtils").toStanzaId(u),
                  unsendMsgContentDeleteTs: null,
                  msgContent: null,
                  ebTimestampMs: null,
                }
              : (o("WALogger").ERROR(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "received a non supported revoke",
                    ])),
                ),
                null);
          } else
            return (
              o("WALogger").ERROR(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "received invalid revoke key",
                  ])),
              ),
              null
            );
        }
        case o("WAE2E.pb").Message$ProtocolMessage$Type.EPHEMERAL_SETTING:
        case o("WAE2E.pb").Message$ProtocolMessage$Type.EPHEMERAL_SYNC_RESPONSE:
        case o("WAE2E.pb").Message$ProtocolMessage$Type
          .APP_STATE_SYNC_KEY_REQUEST:
          return (
            o("WALogger").ERROR(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "received unsupported protocol message with type ",
                  "",
                ])),
              a,
            ),
            null
          );
        default:
          return (
            o("WALogger").ERROR(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "received protocol message with unknown type ",
                  "",
                ])),
              a,
            ),
            null
          );
      }
    }
    function W(e, t) {
      var n = U(e, "document");
      if (!n) return null;
      var r = q(n, t);
      return babelHelpers.extends({}, r, {
        mediaType: o("WAMedia").DOCUMENT_FILE,
        validatedVideoInfo: null,
        validatedImageInfo: null,
        validatedAudioInfo: null,
        validatedDocumentFileInfo: {
          filename: e.fileName,
          mimetype: e.mimetype,
        },
      });
    }
    function q(e, t) {
      return {
        mediaEntry: e.mediaEntry,
        plaintextHash: e.plaintextHash,
        size: e.size,
        msgIds: [],
        mediaEntries: new (o("WAMsgMap").MsgMap)(),
        ts: t,
      };
    }
    function U(e, t) {
      var n = e.fileSha256;
      if (!n)
        return (
          o("WALogger").ERROR(
            C ||
              (C = babelHelpers.taggedTemplateLiteralLoose([
                "protobuf msg with no plaintext hash",
              ])),
          ),
          null
        );
      var r = e.fileLength;
      if (r == null || r === 0)
        return (
          o("WALogger").ERROR(
            b ||
              (b = babelHelpers.taggedTemplateLiteralLoose([
                "protobuf msg with bad size ",
                "",
              ])),
            r,
          ),
          null
        );
      try {
        r = o("WALongInt").numberOrThrowIfTooLarge(r);
      } catch (e) {
        return (
          o("WALogger").ERROR(
            v ||
              (v = babelHelpers.taggedTemplateLiteralLoose([
                "protobuf msg with too large size ",
                "",
              ])),
            r,
          ),
          null
        );
      }
      if (
        e.fileSha256 == null ||
        e.fileEncSha256 == null ||
        e.mediaKey == null ||
        e.directPath == null ||
        e.mediaKeyTimestamp == null
      )
        return (
          o("WALogger").ERROR(
            S ||
              (S = babelHelpers.taggedTemplateLiteralLoose([
                "cannot compose mediaEntry with the media message",
              ])),
          ),
          null
        );
      var a = o("WAMediaUtils").rawDataToMediaEntry({
        fileSha256: e.fileSha256,
        fileEncSha256: e.fileEncSha256,
        mediaKey: e.mediaKey,
        directPath: e.directPath,
        mediaKeyTimestamp: o("WATimeUtils").castLongIntToUnixTime(
          e.mediaKeyTimestamp,
        ),
        size: r,
        serverMediaType: t,
      });
      return {
        size: r,
        plaintextHash: o("WAHashUtils").toPlaintextHash(new Uint8Array(n)),
        mediaEntry: a,
      };
    }
    l.parseProtocol = k;
  },
  98,
);
