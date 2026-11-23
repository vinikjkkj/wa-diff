__d(
  "WAWebMessageProcessUtils",
  [
    "WALogger",
    "WAWebCurrentUser",
    "WAWebGetChatRecordByAccountLid",
    "WAWebWidFactory",
    "err",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    async function m(t) {
      var n = t.lid;
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "selectChatForOneOnOneMessage input: ",
            "",
          ])),
        n.toLogString(),
      );
      var r = await p(n);
      return (
        o("WAWebCurrentUser").isEmployee() &&
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
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
    async function p(e) {
      var t = await o(
        "WAWebGetChatRecordByAccountLid",
      ).getChatRecordByAccountLid(e);
      if (t.length > 1)
        throw (
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "select chat (migrated): err: multiple chats for lid",
              ])),
          ),
          r("err")(
            "selectChatForOneOnOneMessageAfterMigration: found multiple chats for unique index account_lid",
          )
        );
      if (t.length === 1) {
        var n = r("nullthrows")(t[0].id, "chat id should never be null"),
          a = o("WAWebWidFactory").createWid(n);
        return (
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "select chat (migrated): found by lid. id=",
                " lid=",
                "",
              ])),
            a.toLogString(),
            e.toLogString(),
          ),
          { accountLid: e, chatId: o("WAWebWidFactory").asUserWidOrThrow(a) }
        );
      }
      return (
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "select chat (migrated): assigning lid for new chat",
            ])),
        ),
        { accountLid: e, chatId: e }
      );
    }
    l.selectChatForOneOnOneMessage = m;
  },
  98,
);
