__d(
  "WAWebFindChat",
  [
    "WAAbortError",
    "WALogger",
    "WAWebBotUtils",
    "WAWebChatFindBridge",
    "WAWebCheckChatExistsOrCreate",
    "WAWebLidMigrationUtils",
    "WAWebMaibaWASSMigration",
    "WAWebMessageProcessUtils",
    "WAWebSyncContactJob",
    "WAWebUsernameTypes",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return t != null
            ? t(e)
            : o("WAWebChatFindBridge").findLocal(e.toString());
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t, n) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a = e.equals(o("WAWebBotUtils").META_BOT_FBID_WID)
              ? o("WAWebBotUtils").META_BOT_PN_WID
              : o("WAWebMaibaWASSMigration").resolveMaibaAiHubFbidToLidOrChatId(
                  e,
                ),
            i = n != null ? n : {},
            l = i.getExistingChat;
          if (!r("WAWebWid").isUser(a))
            return f(a, t, n).then(function (e) {
              var t = e.chat;
              return t;
            });
          var s = yield d(a, l);
          return (
            s ||
            f(a, t, n).then(function (e) {
              var t = e.chat;
              return t;
            })
          );
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t, n) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          var i = t.equals(o("WAWebBotUtils").META_BOT_FBID_WID)
              ? o("WAWebBotUtils").META_BOT_PN_WID
              : o("WAWebMaibaWASSMigration").resolveMaibaAiHubFbidToLidOrChatId(
                  t,
                ),
            l = { chatId: i };
          if (i.isRegularUser()) {
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[findOrCreateLatestChat] migration rules chat=",
                  " origin=",
                  "",
                ])),
              l.chatId.toLogString(),
              n,
            );
            var m = o("WAWebLidMigrationUtils").toUserLid(i);
            (m == null &&
              (o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[findOrCreateLatestChat] id->lid failed ",
                      "",
                    ])),
                  n,
                )
                .sendLogs("findOrCreateLatestChat_lid_not_found", {
                  sampling: 0.01,
                }),
              yield o("WAWebSyncContactJob").syncContactListJob(
                [i],
                !0,
                "query",
              ),
              (m = o("WAWebLidMigrationUtils").toUserLidOrThrow(i))),
              (l = yield o(
                "WAWebMessageProcessUtils",
              ).selectChatForOneOnOneMessage({ lid: m })));
          }
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[findOrCreateLatestChat] selected chat=",
                " origin=",
                "",
              ])),
            l.chatId.toLogString(),
            n,
          );
          var p = a != null ? a : {},
            _ = p.forceUsync,
            f = p.getExistingChat,
            g = p.isGroupJoin,
            h = p.nextPrivacyMode,
            y = p.signal;
          if (y != null && y.aborted)
            throw new (o("WAAbortError").AbortError)();
          var C = yield d(l.chatId, f);
          if (C) return { chat: C, created: !1 };
          var b = { createdLocally: !0 };
          g === !0 && (b.notSpam = !0);
          var v = l.chatId;
          v.isLid() &&
            (b.lidOriginType = o("WAWebUsernameTypes").LidOriginType.GENERAL);
          var S = yield o(
              "WAWebCheckChatExistsOrCreate",
            ).checkChatExistsOrCreate({
              destinationChat: l,
              msgMeta: null,
              chatOriginType: n,
              initialProps: b,
              options: { forceUsync: _, nextPrivacyMode: h },
            }),
            R = yield d(l.chatId, f);
          if (R == null) {
            var L, E;
            throw (
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "findOrCreateLatestChat: new chat not found ",
                      "",
                    ])),
                  (L = l.chatId) == null ? void 0 : L.toLogString(),
                )
                .sendLogs("findOrCreateLatestChat-new-chat-not-found"),
              r("err")(
                "findChat: new chat not found " +
                  ((E = l.chatId) == null ? void 0 : E.toLogString()),
              )
            );
          }
          return { chat: R, created: !S };
        })),
        g.apply(this, arguments)
      );
    }
    ((l.findExistingChat = p), (l.findOrCreateLatestChat = f));
  },
  98,
);
