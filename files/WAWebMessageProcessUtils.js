__d(
  "WAWebMessageProcessUtils",
  [
    "WALogger",
    "WANullthrows",
    "WAWebApiChat",
    "WAWebApiContact",
    "WAWebCurrentUser",
    "WAWebLid1X1MigrationGating",
    "WAWebLidMigrationUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g;
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.lid,
            n = e.lidOrigin;
          if (
            (o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "selectChatForOneOnOneMessage input: ",
                  ", ",
                  "",
                ])),
              t.toLogString(),
              n,
            ),
            o(
              "WAWebLid1X1MigrationGating",
            ).Lid1X1MigrationUtils.isLidMigrated())
          ) {
            var r = yield b(t);
            return (
              o("WAWebCurrentUser").isEmployee() &&
                o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "selectChatForOneOnOneMessage migrated output: ",
                      ", ",
                      "",
                    ])),
                  r.accountLid,
                  r.chatId,
                ),
              r
            );
          }
          var a = C(t, n);
          return (
            o("WAWebCurrentUser").isEmployee() &&
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "selectChatForOneOnOneMessage pre-migrated output: ",
                    ", ",
                    "",
                  ])),
                a.accountLid,
                a.chatId,
              ),
            a
          );
        })),
        y.apply(this, arguments)
      );
    }
    function C(t, n) {
      if (
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "select chat (unmigrated): select for ",
              "",
            ])),
          t.toLogString(),
        ),
        n == null)
      ) {
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "select chat (unmigrated): general Lid chat -> PN",
            ])),
        );
        var a = r("WANullthrows")(
          o("WAWebApiContact").getPhoneNumber(t),
          "cannot select chat for incoming general Lid chat: no PN for Lid",
        );
        return { chatId: a };
      }
      return (
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "select chat (unmigrated): non-general Lid chat -> Lid",
            ])),
        ),
        { chatId: t }
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "select chat (migrated): select for lid ",
                "",
              ])),
            e.toLogString(),
          );
          var t = yield o("WAWebApiChat").getChatRecordByAccountLid(e);
          if (t.length > 1)
            throw (
              o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "select chat (migrated): err: multiple chats for lid",
                  ])),
              ),
              r("err")(
                "selectChatForOneOnOneMessageAfterMigration: found multiple chats for unique index account_lid",
              )
            );
          if (t.length === 1) {
            var n = r("WANullthrows")(t[0].id, "chat id should never be null");
            return (
              o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "select chat (migrated): found by lid. id=",
                    " lid=",
                    "",
                  ])),
                n.toString(),
                e.toLogString(),
              ),
              {
                accountLid: e,
                chatId: o("WAWebWidFactory").asUserWidOrThrow(
                  o("WAWebWidFactory").createWid(n),
                ),
              }
            );
          }
          return (
            o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "select chat (migrated): assigning lid for new chat",
                ])),
            ),
            { accountLid: e, chatId: e }
          );
        })),
        v.apply(this, arguments)
      );
    }
    l.selectChatForOneOnOneMessage = h;
  },
  98,
);
