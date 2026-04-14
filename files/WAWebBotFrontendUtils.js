__d(
  "WAWebBotFrontendUtils",
  [
    "fbt",
    "WALogger",
    "WATimeUtils",
    "WAWebAiThreadCollection",
    "WAWebAiThreadCreationUtils",
    "WAWebAiThreadModel",
    "WAWebAiThreadTypeUtils",
    "WAWebBotGating",
    "WAWebBotLogging",
    "WAWebBotUtils",
    "WAWebCmd",
    "WAWebComposeBoxActions",
    "WAWebContactCollection",
    "WAWebFindChatAction",
    "WAWebFrontendMsgGetters",
    "WAWebMaybeGetAiThreadInfo",
    "WAWebMultiSelectChatListTypes",
    "WAWebResolveThreadForEntryPoint",
    "WAWebRichResponseMsgUtils",
    "WAWebSendTextMsgChatAction",
    "WAWebThreadsGating",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e, u, c, d;
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield D(),
            n = yield o("WAWebCmd").Cmd.openChatFromUnread({
              chat: t,
              chatEntryPoint: e,
            });
          return n
            ? (o("WAWebComposeBoxActions").ComposeBoxActions.focus(t),
              o("WAWebCmd").Cmd.scrollToActiveChat(),
              t)
            : null;
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (o("WAWebBotGating").isAiChatThreadsEnabled()) {
            var n = yield D();
            T(n, { type: "MetaAiSearchSuggestion", query: e });
          } else {
            var r = yield m(t);
            if (r == null) return;
            o("WAWebSendTextMsgChatAction").sendTextMsgToChat(r, e);
          }
        })),
        f.apply(this, arguments)
      );
    }
    function g() {
      return "";
    }
    function h(e) {
      var t,
        n = o("WAWebFrontendMsgGetters").getAsRichResponse(e);
      return n != null
        ? o("WAWebRichResponseMsgUtils").getRichResponseBodyLength(
            n.richResponse,
          )
        : (t = e.body) == null
          ? void 0
          : t.length;
    }
    function y(e, t) {
      return e.length
        ? e.find(function (e) {
            return t(e).equals(o("WAWebBotUtils").META_BOT_PN_WID);
          }) || e[0]
        : null;
    }
    function C(e, t) {
      var n = e.filter(function (e) {
          return o("WAWebBotUtils").isMetaAiBot(e.id);
        }),
        r = y(n, function (e) {
          return e.id;
        });
      if (r != null)
        return {
          itemKey: r.id.toString(),
          type: o("WAWebMultiSelectChatListTypes").Row.ROW_CHATS,
          data: r,
        };
      var a = t.filter(function (e) {
          return o("WAWebBotUtils").isMetaAiBot(e.id);
        }),
        i = y(a, function (e) {
          return e.id;
        });
      return i != null
        ? {
            itemKey: i.id.toString(),
            type: o("WAWebMultiSelectChatListTypes").Row.ROW_CONTACTS,
            data: i,
          }
        : null;
    }
    function b() {
      return o("WAWebContactCollection").ContactCollection.get(
        o("WAWebBotUtils").META_BOT_PN_WID,
      );
    }
    function v(e) {
      switch (e) {
        case o("WAWebBotLogging").BotEntryPointType.Agent:
          return "agent";
        case o("WAWebBotLogging").BotEntryPointType.Search:
        case o("WAWebBotLogging").BotEntryPointType.Shortcut:
          return "shortcut";
        case o("WAWebBotLogging").BotEntryPointType.Invoke:
          return "invoke";
      }
    }
    function S(e, t) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n, r;
          if (o("WAWebBotGating").isImplicitThreadRoutingEnabled())
            ((n = o(
              "WAWebResolveThreadForEntryPoint",
            ).resolveThreadIdForEntryPoint(e)),
              I(e, n),
              (r = null));
          else {
            var a,
              i,
              l = (a = e.aiThreads) == null ? void 0 : a.head();
            ((n = (i = l == null ? void 0 : l.id) != null ? i : E(e)),
              (r = l == null ? void 0 : l.creationTimestamp));
          }
          var s = yield o("WAWebCmd").Cmd.openChatBottom({
            chat: e,
            chatEntryPoint: t,
            threadId: n,
          });
          return s
            ? { threadId: n, threadCreationTs: r, success: !0 }
            : { success: !1 };
        })),
        R.apply(this, arguments)
      );
    }
    function L(e, t, n) {
      var r;
      o("WAWebBotGating").isImplicitThreadRoutingEnabled()
        ? ((r = o(
            "WAWebResolveThreadForEntryPoint",
          ).resolveThreadIdForEntryPoint(e)),
          I(e, r),
          o("WAWebCmd").Cmd.openChatBottom({
            chat: e,
            chatEntryPoint: n,
            threadId: r,
          }))
        : (r = k(e, n));
      var a = o("WAWebMaybeGetAiThreadInfo").maybeGetAiThreadInfo(e, r);
      return (
        o("WAWebSendTextMsgChatAction").sendTextMsgToChat(e, t, {
          threadIds: [r],
          aiThreadInfo: a,
        }),
        r
      );
    }
    function E(e) {
      var t = o("WAWebAiThreadCreationUtils").createAiThreadId(e.id);
      if (o("WAWebThreadsGating").isThreadLoadingInfraEnabled()) {
        var n = new (r("WAWebAiThreadModel"))({
          id: t,
          title: void 0,
          aiThreadType: o("WAWebAiThreadTypeUtils").AiThreadType.Default,
          lastMessageTimestamp: o("WATimeUtils").unixTime(),
          unreadCount: 0,
          isPending: !0,
        });
        (e.aiThreads == null &&
          (e.aiThreads = new (o(
            "WAWebAiThreadCollection",
          ).AiThreadCollection)()),
          e.aiThreads.add([n]));
      }
      return t;
    }
    function k(e, t) {
      var n = E(e);
      return (
        o("WAWebCmd").Cmd.openChatBottom({
          chat: e,
          chatEntryPoint: t,
          threadId: n,
        }),
        n
      );
    }
    function I(e, t) {
      if (
        o("WAWebThreadsGating").isThreadLoadingInfraEnabled() &&
        !(e.aiThreads != null && e.aiThreads.get(t) != null)
      ) {
        var n = new (r("WAWebAiThreadModel"))({
          id: t,
          title: void 0,
          aiThreadType: o("WAWebAiThreadTypeUtils").AiThreadType.Default,
          lastMessageTimestamp: o("WATimeUtils").unixTime(),
          unreadCount: 0,
          isPending: !0,
        });
        (e.aiThreads == null &&
          (e.aiThreads = new (o(
            "WAWebAiThreadCollection",
          ).AiThreadCollection)()),
          e.aiThreads.add([n]));
      }
    }
    function T(t, n) {
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[runMetaAiThreadsFlow] called with entryPoint type=",
            ", chatId=",
            "",
          ])),
        n.type,
        t.id.toString(),
      ),
        o("WAWebCmd").Cmd.openMetaAiThreadDrawer(t, n));
    }
    function D() {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[getMetaAiChat] finding chat wid=",
                "",
              ])),
            o("WAWebBotUtils").META_BOT_PN_WID.toString(),
          );
          try {
            var e = yield o("WAWebFindChatAction").findOrCreateLatestChat(
                o("WAWebBotUtils").META_BOT_PN_WID,
                "metaBotChatListShortcut",
              ),
              t = e.chat;
            return (
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[getMetaAiChat] success, chatId=",
                    "",
                  ])),
                t.id.toString(),
              ),
              t
            );
          } catch (e) {
            throw (
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[getMetaAiChat] failed with error",
                  ])),
              ),
              e
            );
          }
        })),
        x.apply(this, arguments)
      );
    }
    function $(e, t) {
      return !o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e) ||
        !t.includePrivateProcessing
        ? s._(/*BTDS*/ "Meta AI").toString()
        : s._(/*BTDS*/ "Meta AI with Private Processing").toString();
    }
    function P(e) {
      return o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e)
        ? s._(/*BTDS*/ "with Private Processing").toString()
        : null;
    }
    ((l.openMetaBotChat = m),
      (l.sendMetaBotQuery = _),
      (l.metaAiLlamaVersionTitleFbs = g),
      (l.getBotMsgBodyLength = h),
      (l.maybeGetTopMetaAiRow = C),
      (l.getMetaAiContact = b),
      (l.getBotNuxOriginType = v),
      (l.openLatestOrNewMetaAiThread = S),
      (l.openMetaAiThreadAndSendQuery = L),
      (l.createNewMetaAiThread = E),
      (l.createAndOpenNewMetaAiThread = k),
      (l.ensureThreadModelExists = I),
      (l.runMetaAiThreadsFlow = T),
      (l.getMetaAiChat = D),
      (l.getMetaAiTEEBotDisplayName = $),
      (l.getMetaAiTEEBotSecondaryLine = P));
  },
  226,
);
