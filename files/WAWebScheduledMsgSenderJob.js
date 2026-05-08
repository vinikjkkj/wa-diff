__d(
  "WAWebScheduledMsgSenderJob",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebE2EProtoUtils",
    "WAWebProtobufsE2E.pb",
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
            var l = o("WAWebScheduledMsgCrypto").generateRevealKey(),
              c = o("WAWebScheduledMsgCrypto").generateRevealKeyId(),
              d = o("encodeProtobuf")
                .encodeProtobuf(o("WAWebProtobufsE2E.pb").MessageSpec, a)
                .readByteArrayView(),
              m = yield o("WAWebScheduledMsgCrypto").encryptWithRevealKey(d, l),
              p = m.encIv,
              _ = m.encPayload,
              f = {
                conditionalRevealMessage: {
                  conditionalRevealMessageType: o("WAWebProtobufsE2E.pb")
                    .Message$ConditionalRevealMessage$ConditionalRevealMessageType
                    .SCHEDULED_MESSAGE,
                  encIv: p,
                  encPayload: _,
                  revealKeyId: c,
                },
                messageContextInfo: {
                  messageSecret: self.crypto.getRandomValues(
                    new Uint8Array(32),
                  ),
                },
              },
              g = yield o("WAWebScheduledMsgStore").storeScheduledMessage({
                chatId: n,
                msgId: t,
                revealKey: l,
                revealKeyId: c,
                scheduledTimestampS: i,
                encPayload: new Uint8Array(_),
                encIv: new Uint8Array(p),
              });
            if (!g)
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
                c,
              ),
              {
                revealKey: l,
                revealKeyId: c,
                scheduledTimestampS: i,
                wrappedProtobuf: f,
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
            return {
              msgProtobuf: u.wrappedProtobuf,
              scheduledMsgMetadata: {
                scheduledTimestampS: u.scheduledTimestampS,
                revealKeyId: u.revealKeyId,
                revealKey: u.revealKey,
                originalStanzaType: s,
              },
            };
          },
        )),
        p.apply(this, arguments)
      );
    }
    ((l.prepareScheduledMessage = c), (l.maybeWrapScheduledMessageForSend = m));
  },
  98,
);
