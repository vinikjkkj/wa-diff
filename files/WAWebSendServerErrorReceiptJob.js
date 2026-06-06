__d(
  "WAWebSendServerErrorReceiptJob",
  [
    "WABase64",
    "WADeprecatedSendIq",
    "WALogger",
    "WAWap",
    "WAWebChatGetters",
    "WAWebCommsAckParser",
    "WAWebCommsWapMd",
    "WAWebCryptoMediaRetry",
    "WAWebFrontendMsgGetters",
    "WAWebLidMigrationUtils",
    "WAWebMsgGetters",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    async function d(t) {
      var n = t.id.id;
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
          Promise.resolve()
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
          Promise.resolve()
        );
      var r = o("WABase64").decodeB64(t.mediaKey),
        a = await o("WAWebCryptoMediaRetry").encryptServerErrorReceipt(r, n),
        i = a.ciphertext,
        l = a.iv,
        c = o("WAWebFrontendMsgGetters").getChat(t),
        d = m(c);
      o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "[media][rmr] Sending RMR for chat ",
            ", using jid ",
            "",
          ])),
        c.id.toLogString(),
        d.toJid(),
      );
      var p = o("WAWebMsgGetters").getSender(t),
        _ =
          (o("WAWebChatGetters").getIsGroup(c) ||
            o("WAWebChatGetters").getIsBroadcast(c)) &&
          p != null
            ? o("WAWebCommsWapMd").USER_JID(p)
            : o("WAWap").DROP_ATTR,
        f = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
        g = o("WAWap").wap(
          "receipt",
          {
            type: "server-error",
            to: o("WAWebCommsWapMd").USER_JID(f),
            id: o("WAWap").CUSTOM_STRING(n),
          },
          o("WAWap").wap(
            "encrypt",
            null,
            o("WAWap").wap("enc_p", null, i),
            o("WAWap").wap("enc_iv", null, l),
          ),
          o("WAWap").wap("rmr", {
            jid: o("WAWebCommsWapMd").CHAT_JID(d),
            from_me: o("WAWap").CUSTOM_STRING(
              String(o("WAWebMsgGetters").getIsSentByMe(t)),
            ),
            participant: _,
          }),
        );
      return o("WADeprecatedSendIq").deprecatedSendStanzaAndWaitForAck(
        g,
        o("WAWebCommsAckParser").toCoreAckTemplate({
          id: n,
          class: "receipt",
          type: "server-error",
          from: f,
          participant: null,
        }),
      );
    }
    function m(e) {
      if (o("WAWebLidMigrationUtils").shouldHaveAccountLid(e.id)) {
        if (e.accountLid != null) return e.accountLid;
        o("WALogger")
          .ERROR(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[pnless-stanza] no accountLid for chat ",
                "",
              ])),
            e.id.toLogString(),
          )
          .sendLogs("pnless-no-accountLid");
      }
      return e.id;
    }
    l.default = d;
  },
  98,
);
