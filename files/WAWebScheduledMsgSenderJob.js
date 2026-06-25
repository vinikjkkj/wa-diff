__d(
  "WAWebScheduledMsgSenderJob",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebE2EProtoUtils",
    "WAWebMessagingGatingUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebReportingTokenConfig",
    "WAWebReportingTokenContent",
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
    function c(e, t, n, r) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, a, i) {
            var l;
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg] Preparing scheduled message ",
                  " for chat ",
                  "",
                ])),
              t,
              n,
            );
            var c = o("WAWebScheduledMsgCrypto").generateRevealKey(),
              d = o("WAWebScheduledMsgCrypto").generateRevealKeyId(),
              m = (l = a.messageContextInfo) == null ? void 0 : l.messageSecret,
              p =
                m != null
                  ? new Uint8Array(m)
                  : self.crypto.getRandomValues(new Uint8Array(32)),
              _ = babelHelpers.extends({}, a, {
                messageContextInfo: babelHelpers.extends(
                  {},
                  a.messageContextInfo,
                  { messageSecret: p },
                ),
              }),
              f = o("encodeProtobuf")
                .encodeProtobuf(o("WAWebProtobufsE2E.pb").MessageSpec, _)
                .readByteArrayView(),
              g = yield o("WAWebScheduledMsgCrypto").encryptWithRevealKey(f, c),
              h = g.encIv,
              y = g.encPayload,
              C = o(
                "WAWebMessagingGatingUtils",
              ).isReportingTokenSendingEnabled()
                ? new (o(
                    "WAWebReportingTokenContent",
                  ).ReportingTokenContentCalculator)(
                    f,
                    o("WAWebReportingTokenConfig").getReportingTokenConfig(
                      o(
                        "WAWebMessagingGatingUtils",
                      ).getSenderReportingTokenVersion(),
                    ),
                  ).getReportingTokenContent()
                : null,
              b = {
                conditionalRevealMessage: {
                  conditionalRevealMessageType: o("WAWebProtobufsE2E.pb")
                    .Message$ConditionalRevealMessage$ConditionalRevealMessageType
                    .SCHEDULED_MESSAGE,
                  encIv: h,
                  encPayload: y,
                  revealKeyId: d,
                },
                messageContextInfo: {
                  messageSecret: self.crypto.getRandomValues(
                    new Uint8Array(32),
                  ),
                },
              },
              v = yield o("WAWebScheduledMsgStore").storeScheduledMessage({
                chatId: n,
                msgId: t,
                revealKey: c,
                revealKeyId: d,
                scheduledTimestampS: i,
                encPayload: new Uint8Array(y),
                encIv: new Uint8Array(h),
              });
            if (!v)
              throw (
                o("WALogger").ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[scheduled_msg] per-chat limit reached for ",
                      "",
                    ])),
                  n,
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
                t,
                d,
              ),
              {
                innerMessageSecret: p,
                reportingTokenContent: C,
                revealKey: c,
                revealKeyId: d,
                scheduledTimestampS: i,
                wrappedProtobuf: b,
              }
            );
          },
        )),
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
            d = yield c(n.data.id.toString(), l, t, s);
          return (
            (n.data.messageSecret = d.innerMessageSecret),
            d.reportingTokenContent != null &&
              (n.data.reportingTokenContent = d.reportingTokenContent),
            {
              msgProtobuf: d.wrappedProtobuf,
              scheduledMsgMetadata: {
                kind: "schedule",
                scheduledTimestampS: d.scheduledTimestampS,
                revealKeyId: d.revealKeyId,
                revealKey: d.revealKey,
                originalStanzaType: u,
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
