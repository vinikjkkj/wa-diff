__d(
  "WAWebFindChat",
  [
    "WAAbortError",
    "WALogger",
    "WAWebApiContact",
    "WAWebBotUtils",
    "WAWebChatFindBridge",
    "WAWebCheckChatExistsOrCreate",
    "WAWebLid1X1MigrationGating",
    "WAWebLidMigrationUtils",
    "WAWebMessageProcessUtils",
    "WAWebSyncContactJob",
    "WAWebUsernameTypes",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p;
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return t != null
            ? t(e)
            : o("WAWebChatFindBridge").findLocal(e.toString());
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t, n) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a = e.equals(o("WAWebBotUtils").META_BOT_FBID_WID)
              ? o("WAWebBotUtils").META_BOT_PN_WID
              : e,
            i = n != null ? n : {},
            l = i.getExistingChat;
          if (!r("WAWebWid").isUser(a))
            return y(a, t, n).then(function (e) {
              var t = e.chat;
              return t;
            });
          var s = yield _(a, l);
          return (
            s ||
            y(a, t, n).then(function (e) {
              var t = e.chat;
              return t;
            })
          );
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t, n) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          var i = t.equals(o("WAWebBotUtils").META_BOT_FBID_WID)
              ? o("WAWebBotUtils").META_BOT_PN_WID
              : t,
            l = { chatId: i };
          if (i.isRegularUser()) {
            if (
              o(
                "WAWebLid1X1MigrationGating",
              ).Lid1X1MigrationUtils.isLidMigrated()
            ) {
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
              var f = o("WAWebLidMigrationUtils").toUserLid(i);
              (f == null &&
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
                (f = o("WAWebLidMigrationUtils").toUserLidOrThrow(i))),
                (l = yield o(
                  "WAWebMessageProcessUtils",
                ).selectChatForOneOnOneMessage({ lid: f })));
            } else if (i.isLid()) {
              var g = yield _(l.chatId, a == null ? void 0 : a.getExistingChat);
              if (g == null) {
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[findOrCreateLatestChat] pre-migration chat=",
                      " origin=",
                      "",
                    ])),
                  l.chatId.toLogString(),
                  n,
                );
                var h = o("WAWebApiContact").getPhoneNumber(i);
                if (h == null)
                  throw (
                    o("WALogger")
                      .ERROR(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "[findOrCreateLatestChat] phone not found for lid ",
                            "",
                          ])),
                        n,
                      )
                      .sendLogs(
                        "findOrCreateLatestChat: could not find phone number for lid while enforcing pre-migration rules",
                      ),
                    r("err")(
                      "findOrCreateLatestChat: could not find phone number for lid while enforcing pre-migration rules",
                    )
                  );
                l = { chatId: h };
              }
            }
          }
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[findOrCreateLatestChat] selected chat=",
                " origin=",
                "",
              ])),
            l.chatId.toLogString(),
            n,
          );
          var y = a != null ? a : {},
            C = y.forceUsync,
            b = y.getExistingChat,
            v = y.isGroupJoin,
            S = y.nextPrivacyMode,
            R = y.signal;
          if (R != null && R.aborted)
            throw new (o("WAAbortError").AbortError)();
          var L = yield _(l.chatId, b);
          if (L) return { chat: L, created: !1 };
          var E = { createdLocally: !0 };
          v === !0 && (E.notSpam = !0);
          var k = l.chatId;
          k.isLid() &&
            ((E.lidOriginType = o("WAWebUsernameTypes").LidOriginType.GENERAL),
            o(
              "WAWebLid1X1MigrationGating",
            ).Lid1X1MigrationUtils.isLidMigrated() ||
              o("WALogger")
                .ERROR(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "findOrCreateLatestChat will create Lid chat for origin ",
                      "",
                    ])),
                  n,
                )
                .sendLogs("findOrCreateLatestChat will create Lid chat"));
          var I = yield o(
              "WAWebCheckChatExistsOrCreate",
            ).checkChatExistsOrCreate({
              destinationChat: l,
              msgMeta: null,
              chatOriginType: n,
              initialProps: E,
              options: { forceUsync: C, nextPrivacyMode: S },
            }),
            T = yield _(l.chatId, b);
          if (T == null) {
            var D, x;
            throw (
              o("WALogger")
                .ERROR(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "findOrCreateLatestChat: new chat not found ",
                      "",
                    ])),
                  (D = l.chatId) == null ? void 0 : D.toLogString(),
                )
                .sendLogs("findOrCreateLatestChat-new-chat-not-found"),
              r("err")(
                "findChat: new chat not found " +
                  ((x = l.chatId) == null ? void 0 : x.toLogString()),
              )
            );
          }
          return { chat: T, created: !I };
        })),
        C.apply(this, arguments)
      );
    }
    ((l.findExistingChat = g), (l.findOrCreateLatestChat = y));
  },
  98,
);
