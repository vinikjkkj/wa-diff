__d(
  "WAWebScheduledMsgSenderJob",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebBackendJobsCommon",
    "WAWebE2EProtoUtils",
    "WAWebMessagingGatingUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebReportingTokenUtils",
    "WAWebScheduledMsgCrypto",
    "WAWebScheduledMsgStore",
    "WAWebSendMsgTypes",
    "WAWebWidToJid",
    "encodeProtobuf",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    async function c(t) {
      var n,
        a,
        i = t.chatId,
        l = t.msgId,
        c = t.msgProtobuf,
        d = t.scheduledTimestampS;
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[scheduled_msg] Preparing scheduled message ",
            " for chat ",
            "",
          ])),
        l,
        i,
      );
      var m = o("WAWebScheduledMsgCrypto").generateRevealKey(),
        p = o("WAWebScheduledMsgCrypto").generateRevealKeyId(),
        _ = (n = c.messageContextInfo) == null ? void 0 : n.messageSecret,
        f =
          _ != null
            ? new Uint8Array(_)
            : self.crypto.getRandomValues(new Uint8Array(32)),
        g = babelHelpers.extends({}, c, {
          messageContextInfo: babelHelpers.extends({}, c.messageContextInfo, {
            messageSecret: f,
          }),
        }),
        h = o("encodeProtobuf")
          .encodeProtobuf(o("WAWebProtobufsE2E.pb").MessageSpec, g)
          .readByteArrayView(),
        y = await o("WAWebScheduledMsgCrypto").encryptWithRevealKey(h, m),
        C = y.encIv,
        b = y.encPayload,
        v = o("WAWebMessagingGatingUtils").getSenderReportingTokenVersion(),
        S =
          v > 0
            ? o(
                "WAWebReportingTokenUtils",
              ).calculateSenderReportingTokenContent(h, v)
            : null,
        R = {
          conditionalRevealMessage: {
            conditionalRevealMessageType: o("WAWebProtobufsE2E.pb")
              .Message$ConditionalRevealMessage$ConditionalRevealMessageType
              .SCHEDULED_MESSAGE,
            encIv: C,
            encPayload: b,
            revealKeyId: p,
          },
          messageContextInfo: { messageSecret: new Uint8Array(f) },
        },
        L = await o("WAWebScheduledMsgStore").storeScheduledMessage({
          chatId: i,
          msgId: l,
          revealKey: m,
          revealKeyId: p,
          scheduledTimestampS: d,
          encPayload: new Uint8Array(b),
          encIv: new Uint8Array(C),
          isAssociationChild:
            ((a = c.messageContextInfo) == null
              ? void 0
              : a.messageAssociation) != null,
        });
      if (!L)
        throw (
          o("WALogger").ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg] per-chat limit reached for ",
                "",
              ])),
            i,
          ),
          r("err")("[scheduled_msg] Per-chat scheduled message limit reached")
        );
      return (
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[scheduled_msg] Scheduled message prepared: ",
              ", revealKeyId: ",
              "",
            ])),
          l,
          p,
        ),
        {
          innerMessageSecret: f,
          reportingTokenContentInfo: S,
          revealKey: m,
          revealKeyId: p,
          scheduledTimestampS: d,
          wrappedProtobuf: R,
        }
      );
    }
    async function d(e) {
      var t,
        n = e.msgProtobuf,
        r = e.msgRecord,
        a = e.remoteWid,
        i = e.scheduledMsgMetadata;
      if (
        r.type !== o("WAWebSendMsgTypes").SendMessageRecordType.Message ||
        r.data.isScheduledMsg !== !0 ||
        i != null
      )
        return { msgProtobuf: n, scheduledMsgMetadata: i };
      var l = r.data.scheduledTimestampS;
      if (l == null) return { msgProtobuf: n, scheduledMsgMetadata: i };
      var s = o("WAWebWidToJid").widToChatJid(a),
        u = o("WATimeUtils").castToUnixTime(l),
        d = o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(n),
        m = o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(n),
        p =
          (t = n.messageContextInfo) == null ||
          (t = t.messageAssociation) == null
            ? void 0
            : t.associationType,
        _ = await c({
          chatId: s,
          msgId: r.data.id.toString(),
          msgProtobuf: n,
          scheduledTimestampS: u,
        });
      return (
        (r.data.messageSecret = _.innerMessageSecret),
        _.reportingTokenContentInfo != null &&
          (r.data.reportingTokenContentInfo = _.reportingTokenContentInfo),
        {
          msgProtobuf: _.wrappedProtobuf,
          scheduledMsgMetadata: {
            kind: "schedule",
            scheduledTimestampS: _.scheduledTimestampS,
            revealKeyId: _.revealKeyId,
            revealKey: _.revealKey,
            originalStanzaType: d,
            originalMediaType: m,
            originalMessageAssociationType: p,
          },
        }
      );
    }
    ((l.prepareScheduledMessage = c), (l.maybeWrapScheduledMessageForSend = d));
  },
  98,
);
