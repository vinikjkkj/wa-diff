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
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g;
    async function h(t) {
      var n = t.lid,
        r = t.lidOrigin;
      if (
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "selectChatForOneOnOneMessage input: ",
              ", ",
              "",
            ])),
          n.toLogString(),
          r,
        ),
        o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated())
      ) {
        var a = await C(n);
        return (
          o("WAWebCurrentUser").isEmployee() &&
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "selectChatForOneOnOneMessage migrated output: ",
                  ", ",
                  "",
                ])),
              a.accountLid,
              a.chatId,
            ),
          a
        );
      }
      var i = y(n, r);
      return (
        o("WAWebCurrentUser").isEmployee() &&
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "selectChatForOneOnOneMessage pre-migrated output: ",
                ", ",
                "",
              ])),
            i.accountLid,
            i.chatId,
          ),
        i
      );
    }
    function y(e, t) {
      if (
        (o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "select chat (unmigrated): select for ",
              "",
            ])),
          e.toLogString(),
        ),
        t == null)
      ) {
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "select chat (unmigrated): general Lid chat -> PN",
            ])),
        );
        var n = r("WANullthrows")(
          o("WAWebApiContact").getPhoneNumber(e),
          "cannot select chat for incoming general Lid chat: no PN for Lid",
        );
        return { chatId: n };
      }
      return (
        o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "select chat (unmigrated): non-general Lid chat -> Lid",
            ])),
        ),
        { chatId: e }
      );
    }
    async function C(e) {
      o("WALogger").LOG(
        p ||
          (p = babelHelpers.taggedTemplateLiteralLoose([
            "select chat (migrated): select for lid ",
            "",
          ])),
        e.toLogString(),
      );
      var t = await o("WAWebApiChat").getChatRecordByAccountLid(e);
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
    }
    l.selectChatForOneOnOneMessage = h;
  },
  98,
);
