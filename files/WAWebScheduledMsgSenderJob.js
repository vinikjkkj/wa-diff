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
    "asyncToGeneratorRuntime",
    "encodeProtobuf",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n,
            a = t.chatId,
            i = t.msgId,
            l = t.msgProtobuf,
            c = t.scheduledTimestampS;
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg] Preparing scheduled message ",
                " for chat ",
                "",
              ])),
            i,
            a,
          );
          var d = o("WAWebScheduledMsgCrypto").generateRevealKey(),
            m = o("WAWebScheduledMsgCrypto").generateRevealKeyId(),
            p = (n = l.messageContextInfo) == null ? void 0 : n.messageSecret,
            _ =
              p != null
                ? new Uint8Array(p)
                : self.crypto.getRandomValues(new Uint8Array(32)),
            f = babelHelpers.extends({}, l, {
              messageContextInfo: babelHelpers.extends(
                {},
                l.messageContextInfo,
                { messageSecret: _ },
              ),
            }),
            g = o("encodeProtobuf")
              .encodeProtobuf(o("WAWebProtobufsE2E.pb").MessageSpec, f)
              .readByteArrayView(),
            h = yield o("WAWebScheduledMsgCrypto").encryptWithRevealKey(g, d),
            y = h.encIv,
            C = h.encPayload,
            b = o("WAWebMessagingGatingUtils").getSenderReportingTokenVersion(),
            v =
              b > 0
                ? o(
                    "WAWebReportingTokenUtils",
                  ).calculateSenderReportingTokenContent(g, b)
                : null,
            S = {
              conditionalRevealMessage: {
                conditionalRevealMessageType: o("WAWebProtobufsE2E.pb")
                  .Message$ConditionalRevealMessage$ConditionalRevealMessageType
                  .SCHEDULED_MESSAGE,
                encIv: y,
                encPayload: C,
                revealKeyId: m,
              },
              messageContextInfo: { messageSecret: new Uint8Array(_) },
            },
            R = yield o("WAWebScheduledMsgStore").storeScheduledMessage({
              chatId: a,
              msgId: i,
              revealKey: d,
              revealKeyId: m,
              scheduledTimestampS: c,
              encPayload: new Uint8Array(C),
              encIv: new Uint8Array(y),
            });
          if (!R)
            throw (
              o("WALogger").ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg] per-chat limit reached for ",
                    "",
                  ])),
                a,
              ),
              r("err")(
                "[scheduled_msg] Per-chat scheduled message limit reached",
              )
            );
          return (
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg] Scheduled message prepared: ",
                  ", revealKeyId: ",
                  "",
                ])),
              i,
              m,
            ),
            {
              innerMessageSecret: _,
              reportingTokenContentInfo: v,
              revealKey: d,
              revealKeyId: m,
              scheduledTimestampS: c,
              wrappedProtobuf: S,
            }
          );
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.msgProtobuf,
            n = e.msgRecord,
            r = e.remoteWid,
            a = e.scheduledMsgMetadata;
          if (
            n.type !== o("WAWebSendMsgTypes").SendMessageRecordType.Message ||
            n.data.isScheduledMsg !== !0 ||
            a != null
          )
            return { msgProtobuf: t, scheduledMsgMetadata: a };
          var i = n.data.scheduledTimestampS;
          if (i == null) return { msgProtobuf: t, scheduledMsgMetadata: a };
          var l = o("WAWebWidToJid").widToChatJid(r),
            s = o("WATimeUtils").castToUnixTime(i),
            u = o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(t),
            d = o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(t),
            m = yield c({
              chatId: l,
              msgId: n.data.id.toString(),
              msgProtobuf: t,
              scheduledTimestampS: s,
            });
          return (
            (n.data.messageSecret = m.innerMessageSecret),
            m.reportingTokenContentInfo != null &&
              (n.data.reportingTokenContentInfo = m.reportingTokenContentInfo),
            {
              msgProtobuf: m.wrappedProtobuf,
              scheduledMsgMetadata: {
                kind: "schedule",
                scheduledTimestampS: m.scheduledTimestampS,
                revealKeyId: m.revealKeyId,
                revealKey: m.revealKey,
                originalStanzaType: u,
                originalMediaType: d,
              },
            }
          );
        })),
        p.apply(this, arguments)
      );
    }
    ((l.prepareScheduledMessage = c), (l.maybeWrapScheduledMessageForSend = m));
  },
  98,
);
