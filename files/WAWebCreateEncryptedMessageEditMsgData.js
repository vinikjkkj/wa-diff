__d(
  "WAWebCreateEncryptedMessageEditMsgData",
  [
    "WALongInt",
    "WANullthrows",
    "WAWebAck",
    "WAWebAddonEncryption",
    "WAWebCompactMapString",
    "WAWebE2EProtoUtils",
    "WAWebMessageEditValidationError",
    "WAWebMsgGetters",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "WAWebViewMode.flow",
    "WAWebWamEnumE2eFailureReason",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            a,
            i,
            l,
            s,
            u = self.crypto.getRandomValues(new Uint8Array(12)),
            c = o("WAWebMsgGetters").getOriginalSender(t),
            d = e.messageSecret,
            m = o("WALongInt").maybeNumberOrThrowIfTooLarge(
              e.latestEditSenderTimestampMs,
            );
          if (d == null)
            throw new (o(
              "WAWebMessageEditValidationError",
            ).MessageEditValidationError)(
              o("WAWebMessageEditValidationError")
                .MessageEditValidationErrorCode.MISSING_MESSAGE_SECRET,
              o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                .MISSING_MESSAGE_SECRET,
            );
          if (c == null)
            throw new (o(
              "WAWebMessageEditValidationError",
            ).MessageEditValidationError)(
              o("WAWebMessageEditValidationError")
                .MessageEditValidationErrorCode.MISSING_ORIGINAL_SENDER,
              o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                .INVALID_MESSAGE,
            );
          if (m == null)
            throw new (o(
              "WAWebMessageEditValidationError",
            ).MessageEditValidationError)(
              o("WAWebMessageEditValidationError")
                .MessageEditValidationErrorCode.MISSING_SENDER_TIMESTAMP,
              o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                .INVALID_MESSAGE,
            );
          var p =
              (n = e.editMsgType) != null ? n : o("WAWebMsgType").MSG_TYPE.CHAT,
            _ = { mentionedJid: [], groupMentions: [], statusAttributions: [] };
          (e.mentionedJidList &&
            e.mentionedJidList.length > 0 &&
            (_.mentionedJid = r("WAWebCompactMapString")(
              e.mentionedJidList,
              o("WAWebE2EProtoUtils").encodeJid,
            )),
            e.groupMentions &&
              e.groupMentions.length > 0 &&
              (_.groupMentions = e.groupMentions.map(function (e) {
                var t, n;
                return {
                  groupSubject: (t = e.groupSubject) != null ? t : "",
                  groupJid:
                    (n = o("WAWebE2EProtoUtils").encodeJid(e.groupJid)) != null
                      ? n
                      : "",
                };
              })));
          var f = _.mentionedJid.length > 0 || _.groupMentions.length > 0,
            g;
          switch (p) {
            case o("WAWebMsgType").MSG_TYPE.CHAT: {
              var h,
                y = (h = e.body) != null ? h : "",
                C =
                  e.matchedText != null ||
                  e.description != null ||
                  e.title != null;
              if (C) {
                var b, v, S;
                g = {
                  type: o("WAWebMsgType").MsgKind.MessageEditDecrypted,
                  encode: {
                    protocolMessage: {
                      key: o("WAWebE2EProtoUtils").encodeKey(t.id),
                      type: o("WAWebProtobufsE2E.pb")
                        .Message$ProtocolMessage$Type.MESSAGE_EDIT,
                      timestampMs: m,
                      editedMessage: {
                        extendedTextMessage: {
                          text: y,
                          matchedText: (b = e.matchedText) != null ? b : void 0,
                          description: (v = e.description) != null ? v : void 0,
                          title: (S = e.title) != null ? S : void 0,
                          contextInfo: f ? _ : void 0,
                        },
                      },
                    },
                  },
                };
              } else
                g = {
                  type: o("WAWebMsgType").MsgKind.MessageEditDecrypted,
                  encode: {
                    protocolMessage: {
                      key: o("WAWebE2EProtoUtils").encodeKey(t.id),
                      type: o("WAWebProtobufsE2E.pb")
                        .Message$ProtocolMessage$Type.MESSAGE_EDIT,
                      timestampMs: m,
                      editedMessage: {
                        extendedTextMessage: {
                          text: y,
                          contextInfo: f ? _ : void 0,
                        },
                      },
                    },
                  },
                };
              break;
            }
            case o("WAWebMsgType").MSG_TYPE.IMAGE:
              g = {
                type: o("WAWebMsgType").MsgKind.MessageEditDecrypted,
                encode: {
                  protocolMessage: {
                    key: o("WAWebE2EProtoUtils").encodeKey(t.id),
                    type: o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
                      .MESSAGE_EDIT,
                    timestampMs: m,
                    editedMessage: {
                      imageMessage: {
                        caption: (a = e.caption) != null ? a : "",
                        contextInfo: f ? _ : void 0,
                      },
                    },
                  },
                },
              };
              break;
            case o("WAWebMsgType").MSG_TYPE.VIDEO:
              g = {
                type: o("WAWebMsgType").MsgKind.MessageEditDecrypted,
                encode: {
                  protocolMessage: {
                    key: o("WAWebE2EProtoUtils").encodeKey(t.id),
                    type: o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
                      .MESSAGE_EDIT,
                    timestampMs: m,
                    editedMessage: {
                      videoMessage: {
                        caption: (i = e.caption) != null ? i : "",
                        contextInfo: f ? _ : void 0,
                      },
                    },
                  },
                },
              };
              break;
            case o("WAWebMsgType").MSG_TYPE.DOCUMENT:
              g = {
                type: o("WAWebMsgType").MsgKind.MessageEditDecrypted,
                encode: {
                  protocolMessage: {
                    key: o("WAWebE2EProtoUtils").encodeKey(t.id),
                    type: o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
                      .MESSAGE_EDIT,
                    timestampMs: m,
                    editedMessage: {
                      documentWithCaptionMessage: {
                        message: {
                          documentMessage: {
                            caption: (l = e.caption) != null ? l : "",
                            contextInfo: f ? _ : void 0,
                          },
                        },
                      },
                    },
                  },
                },
              };
              break;
            default:
              throw r("err")("Unsupported edit msg type: " + p);
          }
          var R = yield o("WAWebAddonEncryption").encryptAddOn(g, {
              messageSecret: d,
              iv: u,
              stanzaId: t.id.id,
              originalMessageSender: c,
              addOnSender: o("WAWebWidFactory").asUserWidOrThrow(
                r("WANullthrows")(o("WAWebMsgGetters").getSender(e)),
              ),
            }),
            L = R.encPayload,
            E = R.reportingTokenContent;
          return babelHelpers.extends(
            { id: e.id },
            o("WAWebMsgKeyUtils").msgKeyToTargetInfo(
              e.id,
              o("WAWebMsgKeyUtils").TranslateMsgKeyType.EditMessage,
            ),
            {
              type: o("WAWebMsgType").MSG_TYPE.MESSAGE_EDIT_ENCRYPTED,
              kind: o("WAWebMsgType").MsgKind.MessageEditEncrypted,
              subtype: "message_edit",
              t: Math.floor(m / 1e3),
              ack: (s = e.ack) != null ? s : o("WAWebAck").ACK.CLOCK,
              targetMessageKey: t.id,
              protocolMessageKey: t.id,
              viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
              encPayload: L,
              encIv: u.buffer,
              latestEditMsgKey: e.latestEditMsgKey,
              latestEditSenderTimestampMs: m,
              editMsgType: e.editMsgType,
              mentionedJidList: e.mentionedJidList,
              groupMentions: e.groupMentions,
              errorCode: e.errorCode,
              messageSecret: d,
              reportingTokenContent: E,
            },
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.createEncryptedMessageEditMsgData = e;
  },
  98,
);
