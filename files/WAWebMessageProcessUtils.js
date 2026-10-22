__d(
  "WAWebMessageProcessUtils",
  [
    "WALogger",
    "WAWebCurrentUser",
    "WAWebGetChatRecordByAccountLid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.lid;
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "selectChatForOneOnOneMessage input: ",
                "",
              ])),
            n.toLogString(),
          );
          var r = yield f(n);
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
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "select chat (migrated): select for lid ",
                "",
              ])),
            e.toLogString(),
          );
          var t = yield o(
            "WAWebGetChatRecordByAccountLid",
          ).getChatRecordByAccountLid(e);
          if (t.length > 1)
            throw (
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "select chat (migrated): err: multiple chats for lid",
                  ])),
              ),
              r("err")(
                "selectChatForOneOnOneMessageAfterMigration: found multiple chats for unique index account_lid",
              )
            );
          if (t.length === 1) {
            var n = r("nullthrows")(t[0].id, "chat id should never be null");
            return (
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
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
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "select chat (migrated): assigning lid for new chat",
                ])),
            ),
            { accountLid: e, chatId: e }
          );
        })),
        g.apply(this, arguments)
      );
    }
    l.selectChatForOneOnOneMessage = p;
  },
  98,
);
