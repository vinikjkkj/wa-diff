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
    "WAWebLidMigrationUtils",
    "WAWebMsgGetters",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.id.id;
          if (o("WAWebMsgGetters").getIsNewsletterMsg(e))
            return (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[newsletter] RMR called on media with null mediaKey",
                    ])),
                )
                .tags("newsletter")
                .sendLogs("newsletter-called-rmr"),
              (d || (d = n("Promise"))).resolve()
            );
          if (e.mediaKey == null)
            return (
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[media][rmr] Called RMR with null mediaKey",
                    ])),
                )
                .tags("media", "non-sad")
                .sendLogs("rmr-called-with-null-media-key", { sampling: 0.01 }),
              (d || (d = n("Promise"))).resolve()
            );
          var r = o("WABase64").decodeB64(e.mediaKey),
            a = yield o("WAWebCryptoMediaRetry").encryptServerErrorReceipt(
              r,
              t,
            ),
            i = a.ciphertext,
            l = a.iv,
            m = o("WAWebFrontendMsgGetters").getChat(e),
            p = _(m);
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[media][rmr] Sending RMR for chat ",
                ", using jid ",
                "",
              ])),
            m.id.toLogString(),
            p.toJid(),
          );
          var f = o("WAWebMsgGetters").getSender(e),
            g =
              (o("WAWebChatGetters").getIsGroup(m) ||
                o("WAWebChatGetters").getIsBroadcast(m)) &&
              f != null
                ? o("WAWebCommsWapMd").USER_JID(f)
                : o("WAWap").DROP_ATTR,
            h = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
            y = o("WAWap").wap(
              "receipt",
              {
                type: "server-error",
                to: o("WAWebCommsWapMd").USER_JID(h),
                id: o("WAWap").CUSTOM_STRING(t),
              },
              o("WAWap").wap(
                "encrypt",
                null,
                o("WAWap").wap("enc_p", null, i),
                o("WAWap").wap("enc_iv", null, l),
              ),
              o("WAWap").wap("rmr", {
                jid: o("WAWebCommsWapMd").CHAT_JID(p),
                from_me: o("WAWap").CUSTOM_STRING(
                  String(o("WAWebMsgGetters").getIsSentByMe(e)),
                ),
                participant: g,
              }),
            );
          return o("WADeprecatedSendIq").deprecatedSendStanzaAndWaitForAck(
            y,
            o("WAWebCommsAckParser").toCoreAckTemplate({
              id: t,
              class: "receipt",
              type: "server-error",
              from: h,
              participant: null,
            }),
          );
        })),
        p.apply(this, arguments)
      );
    }
    function _(t) {
      if (o("WAWebLidMigrationUtils").shouldHaveAccountLid(t.id)) {
        if (t.accountLid != null) return t.accountLid;
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[pnless-stanza] no accountLid for chat ",
                "",
              ])),
            t.id.toLogString(),
          )
          .sendLogs("pnless-no-accountLid");
      }
      return t.id;
    }
    l.default = m;
  },
  98,
);
