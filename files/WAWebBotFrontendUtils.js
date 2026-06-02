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
  ],
  function (t, n, r, o, a, i, l, s) {
    var e, u, c, d;
    async function m(e) {
      var t = await T(),
        n = await o("WAWebCmd").Cmd.openChatFromUnread({
          chat: t,
          chatEntryPoint: e,
        });
      return n
        ? (o("WAWebComposeBoxActions").ComposeBoxActions.focus(t),
          o("WAWebCmd").Cmd.scrollToActiveChat(),
          t)
        : null;
    }
    async function p(e, t) {
      if (o("WAWebBotGating").isAiChatThreadsEnabled()) {
        var n = await T();
        I(n, { type: "MetaAiSearchSuggestion", query: e });
      } else {
        var r = await m(t);
        if (r == null) return;
        o("WAWebSendTextMsgChatAction").sendTextMsgToChat(r, e);
      }
    }
    function _() {
      return "";
    }
    function f(e) {
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
    function g(e, t) {
      return e.length
        ? e.find(function (e) {
            return t(e).equals(o("WAWebBotUtils").META_BOT_PN_WID);
          }) || e[0]
        : null;
    }
    function h(e, t) {
      var n = e.filter(function (e) {
          return o("WAWebBotUtils").isMetaAiBot(e.id);
        }),
        r = g(n, function (e) {
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
        i = g(a, function (e) {
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
    function y() {
      var e;
      return (e = o("WAWebContactCollection").ContactCollection.get(
        o("WAWebBotUtils").META_BOT_FBID_WID,
      )) != null
        ? e
        : o("WAWebContactCollection").ContactCollection.get(
            o("WAWebBotUtils").META_BOT_PN_WID,
          );
    }
    function C() {
      return o("WAWebContactCollection").ContactCollection.get(
        o("WAWebBotUtils").HATCH_BOT_FBID_WID,
      );
    }
    function b(e, t) {
      var n = e.find(function (e) {
        return o("WAWebBotUtils").isHatchBot(e.id);
      });
      if (n != null)
        return {
          itemKey: n.id.toString(),
          type: o("WAWebMultiSelectChatListTypes").Row.ROW_CHATS,
          data: n,
        };
      var r = t.find(function (e) {
        return o("WAWebBotUtils").isHatchBot(e.id);
      });
      return r != null
        ? {
            itemKey: r.id.toString(),
            type: o("WAWebMultiSelectChatListTypes").Row.ROW_CONTACTS,
            data: r,
          }
        : null;
    }
    function v(e) {
      switch (e) {
        case o("WAWebBotLogging").BotEntryPointType.Search:
        case o("WAWebBotLogging").BotEntryPointType.Shortcut:
          return "shortcut";
        case o("WAWebBotLogging").BotEntryPointType.Invoke:
          return "invoke";
      }
    }
    async function S(e, t) {
      var n, r;
      if (o("WAWebBotGating").isImplicitThreadRoutingEnabled())
        ((n = o("WAWebResolveThreadForEntryPoint").resolveThreadIdForEntryPoint(
          e,
        )),
          k(e, n),
          (r = null));
      else {
        var a,
          i,
          l = (a = e.aiThreads) == null ? void 0 : a.head();
        ((n = (i = l == null ? void 0 : l.id) != null ? i : L(e)),
          (r = l == null ? void 0 : l.creationTimestamp));
      }
      var s = await o("WAWebCmd").Cmd.openChatBottom({
        chat: e,
        chatEntryPoint: t,
        threadId: n,
      });
      return s
        ? { threadId: n, threadCreationTs: r, success: !0 }
        : { success: !1 };
    }
    function R(e, t, n) {
      var r;
      o("WAWebBotGating").isImplicitThreadRoutingEnabled()
        ? ((r = o(
            "WAWebResolveThreadForEntryPoint",
          ).resolveThreadIdForEntryPoint(e)),
          k(e, r),
          o("WAWebCmd").Cmd.openChatBottom({
            chat: e,
            chatEntryPoint: n,
            threadId: r,
          }))
        : (r = E(e, n));
      var a = o("WAWebMaybeGetAiThreadInfo").maybeGetAiThreadInfo(e, r);
      return (
        o("WAWebSendTextMsgChatAction").sendTextMsgToChat(e, t, {
          threadIds: [r],
          aiThreadInfo: a,
        }),
        r
      );
    }
    function L(e) {
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
    function E(e, t) {
      var n = L(e);
      return (
        o("WAWebCmd").Cmd.openChatBottom({
          chat: e,
          chatEntryPoint: t,
          threadId: n,
        }),
        n
      );
    }
    function k(e, t) {
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
    function I(t, n) {
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
    async function T() {
      o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "[getMetaAiChat] finding chat wid=",
            "",
          ])),
        o("WAWebBotUtils").META_BOT_PN_WID.toString(),
      );
      try {
        var e = await o("WAWebFindChatAction").findOrCreateLatestChat(
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
    }
    function D(e, t) {
      return !o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e) ||
        !t.includePrivateProcessing
        ? s._(/*BTDS*/ "Meta AI").toString()
        : s._(/*BTDS*/ "Meta AI with Private Processing").toString();
    }
    function x(e) {
      return o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e)
        ? s._(/*BTDS*/ "with Private Processing").toString()
        : null;
    }
    ((l.openMetaBotChat = m),
      (l.sendMetaBotQuery = p),
      (l.metaAiLlamaVersionTitleFbs = _),
      (l.getBotMsgBodyLength = f),
      (l.maybeGetTopMetaAiRow = h),
      (l.getMetaAiContact = y),
      (l.getHatchContact = C),
      (l.maybeGetTopHatchRow = b),
      (l.getBotNuxOriginType = v),
      (l.openLatestOrNewMetaAiThread = S),
      (l.openMetaAiThreadAndSendQuery = R),
      (l.createNewMetaAiThread = L),
      (l.createAndOpenNewMetaAiThread = E),
      (l.ensureThreadModelExists = k),
      (l.runMetaAiThreadsFlow = I),
      (l.getMetaAiChat = T),
      (l.getMetaAiTEEBotDisplayName = D),
      (l.getMetaAiTEEBotSecondaryLine = x));
  },
  226,
);
