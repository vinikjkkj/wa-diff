__d(
  "WAWebSendServerErrorReceiptJob",
  [
    "Promise",
    "WABase64",
    "WADeprecatedSendIq",
    "WALogger",
    "WAWap",
    "WAWebChatGetters",
    "WAWebCommsAckParser",
    "WAWebCommsWapMd",
    "WAWebCryptoMediaRetry",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = t.id.id;
          if (o("WAWebMsgGetters").getIsNewsletterMsg(t))
            return (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[newsletter] RMR called on media with null mediaKey",
                    ])),
                )
                .tags("newsletter")
                .sendLogs("newsletter-called-rmr"),
              (c || (c = n("Promise"))).resolve()
            );
          if (t.mediaKey == null)
            return (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[media][rmr] Called RMR with null mediaKey",
                    ])),
                )
                .tags("media", "non-sad")
                .sendLogs("rmr-called-with-null-media-key", { sampling: 0.01 }),
              (c || (c = n("Promise"))).resolve()
            );
          var a = o("WABase64").decodeB64(t.mediaKey),
            i = yield o("WAWebCryptoMediaRetry").encryptServerErrorReceipt(
              a,
              r,
            ),
            l = i.ciphertext,
            d = i.iv,
            m = o("WAWebFrontendMsgGetters").getChat(t),
            p =
              m.historyChatId != null
                ? o("WAWebWidFactory").createWid(m.historyChatId).toJid()
                : m.id.toJid();
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[media][rmr] Sending RMR for chat ",
                ", using jid ",
                "",
              ])),
            m.id.toLogString(),
            p,
          );
          var _ = o("WAWap").CUSTOM_STRING(p),
            f =
              o("WAWebChatGetters").getIsGroup(m) ||
              o("WAWebChatGetters").getIsBroadcast(m)
                ? o("WAWap").CUSTOM_STRING(
                    o("WAWebMsgGetters").getSender(t).toString({ legacy: !0 }),
                  )
                : o("WAWap").DROP_ATTR,
            g = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
            h = o("WAWap").wap(
              "receipt",
              {
                type: "server-error",
                to: o("WAWebCommsWapMd").USER_JID(g),
                id: o("WAWap").CUSTOM_STRING(r),
              },
              o("WAWap").wap(
                "encrypt",
                null,
                o("WAWap").wap("enc_p", null, l),
                o("WAWap").wap("enc_iv", null, d),
              ),
              o("WAWap").wap("rmr", {
                jid: _,
                from_me: o("WAWap").CUSTOM_STRING(
                  String(o("WAWebMsgGetters").getIsSentByMe(t)),
                ),
                participant: f,
              }),
            );
          return o("WADeprecatedSendIq").deprecatedSendStanzaAndWaitForAck(
            h,
            o("WAWebCommsAckParser").toCoreAckTemplate({
              id: r,
              class: "receipt",
              type: "server-error",
              from: g,
              participant: null,
            }),
          );
        })),
        m.apply(this, arguments)
      );
    }
    l.default = d;
  },
  98,
);
