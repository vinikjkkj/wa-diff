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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
                yield o("WAWebSetPrivacyTokensJob").issuePrivacyToken(
                  a,
                  [o("WAWebSetPrivacyTokensJob").TokenType.TrustedContact],
                  r,
                );
                var i = { tcTokenSenderTimestamp: r };
                (n.set(i),
                  yield o("WAWebSchemaChat")
                    .getChatTable()
                    .merge(t.toString(), i));
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
        })),
        u.apply(this, arguments)
      );
    }
    l.sendTcToken = s;
  },
  98,
);
