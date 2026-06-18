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
    function m(e, t, n, r) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            if (
              e.type !== o("WAWebSendMsgTypes").SendMessageRecordType.Message ||
              e.data.isScheduledMsg !== !0 ||
              r != null
            )
              return { msgProtobuf: t, scheduledMsgMetadata: r };
            var a = e.data.scheduledTimestampS;
            if (a == null) return { msgProtobuf: t, scheduledMsgMetadata: r };
            var i = o("WAWebWidToJid").widToChatJid(n),
              l = o("WATimeUtils").castToUnixTime(a),
              s = o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(t),
              u = yield c(e.data.id.toString(), i, t, l);
            return (
              (e.data.messageSecret = u.innerMessageSecret),
              u.reportingTokenContent != null &&
                (e.data.reportingTokenContent = u.reportingTokenContent),
              {
                msgProtobuf: u.wrappedProtobuf,
                scheduledMsgMetadata: {
                  kind: "schedule",
                  scheduledTimestampS: u.scheduledTimestampS,
                  revealKeyId: u.revealKeyId,
                  revealKey: u.revealKey,
                  originalStanzaType: s,
                },
              }
            );
          },
        )),
        p.apply(this, arguments)
      );
    }
    ((l.prepareScheduledMessage = c), (l.maybeWrapScheduledMessageForSend = m));
  },
  98,
);
