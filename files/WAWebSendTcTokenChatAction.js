__d(
  "WAWebSendTcTokenChatAction",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebChatCollection",
    "WAWebLidMigrationUtils",
    "WAWebSchemaChat",
    "WAWebSetPrivacyTokensJob",
    "WAWebTrustedContactsUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t) {
      if (!(!t.isUserNotPSA() || t.isBot())) {
        var n = o("WAWebChatCollection").ChatCollection.get(t);
        if (
          n != null &&
          o("WAWebTrustedContactsUtils").shouldSendNewToken(
            n.tcTokenSenderTimestamp,
          )
        )
          try {
            var r = o("WATimeUtils").unixTime(),
              a;
            if (
              (o("WAWebABProps").getABPropConfigValue(
                "lid_trusted_token_issue_to_lid",
              )
                ? (a = o("WAWebLidMigrationUtils").toLid(t))
                : (a = o("WAWebLidMigrationUtils").toPn(t)),
              a == null)
            )
              return;
            await o("WAWebSetPrivacyTokensJob").issuePrivacyToken(
              a,
              [o("WAWebSetPrivacyTokensJob").TokenType.TrustedContact],
              r,
            );
            var i = { tcTokenSenderTimestamp: r };
            (n.set(i),
              await o("WAWebSchemaChat").getChatTable().merge(t.toString(), i));
          } catch (t) {
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "sendTcToken failed - ",
                    "",
                  ])),
                t,
              )
              .verbose()
              .sendLogs("send-tc-token-failed");
          }
      }
    }
    l.sendTcToken = s;
  },
  98,
);
