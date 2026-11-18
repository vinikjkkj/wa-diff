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
    var e, s, u, c, d;
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.lid;
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "selectChatForOneOnOneMessage input: ",
                "",
              ])),
            n.toLogString(),
          );
          var r = yield _(n);
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
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
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
              {
                accountLid: e,
                chatId: o("WAWebWidFactory").asUserWidOrThrow(a),
              }
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
        })),
        f.apply(this, arguments)
      );
    }
    l.selectChatForOneOnOneMessage = m;
  },
  98,
);
