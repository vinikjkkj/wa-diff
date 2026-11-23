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
    "WAWebMaybeGetAiThreadInfo",
    "WAWebMsgType",
    "WAWebMultiSelectChatListTypes",
    "WAWebPttComposerRecordingStopReason",
    "WAWebResolveThreadForEntryPoint",
    "WAWebRichResponseMsgUtils",
    "WAWebSendTextMsgChatAction",
    "cr:19180",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e, u, c, d;
    async function m(e) {
      var t,
        r = (t = n("cr:19180")) != null ? t : {},
        a = r.logWindowsMetaAiStage,
        i = await D();
      a == null || a("chat-open-start");
      var l = await o("WAWebCmd")
        .Cmd.openChatFromUnread({ chat: i, chatEntryPoint: e })
        .catch(function (e) {
          throw (a == null || a("chat-open-failed"), e);
        });
      return l
        ? (a == null || a("chat-open-complete"),
          o("WAWebComposeBoxActions").ComposeBoxActions.focus(i),
          o("WAWebCmd").Cmd.scrollToActiveChat(),
          i)
        : (a == null || a("chat-open-cancelled"), null);
    }
    async function p(e, t) {
      if (o("WAWebBotGating").isAiChatThreadsEnabled()) {
        var n = await D();
        T(n, { type: "MetaAiSearchSuggestion", query: e });
      } else {
        var r = await m(t);
        if (r == null) return;
        o("WAWebSendTextMsgChatAction").sendTextMsgToChat(r, e);
      }
    }
    var _ = "";
    function f(e) {
      return g({ body: e.body, richResponse: e.richResponse, type: e.type });
    }
    function g(e) {
      var t = e.body,
        n = e.richResponse,
        r = e.type;
      return r === o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE && n != null
        ? o("WAWebRichResponseMsgUtils").getRichResponseBodyLength(n)
        : t == null
          ? void 0
          : t.length;
    }
    function h(e) {
      var t,
        n = e.msgs;
      return (
        n.length === 0 ||
        (n.length === 1 &&
          ((t = n.last()) == null ? void 0 : t.subtype) === "bot_init")
      );
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
      var e;
      return (e = o("WAWebContactCollection").ContactCollection.get(
        o("WAWebBotUtils").META_BOT_FBID_WID,
      )) != null
        ? e
        : o("WAWebContactCollection").ContactCollection.get(
            o("WAWebBotUtils").META_BOT_PN_WID,
          );
    }
    function v() {
      return o("WAWebContactCollection").ContactCollection.get(
        o("WAWebBotUtils").HATCH_BOT_FBID_WID,
      );
    }
    function S(e) {
      switch (e) {
        case o("WAWebBotLogging").BotEntryPointType.Search:
        case o("WAWebBotLogging").BotEntryPointType.Shortcut:
          return "shortcut";
        case o("WAWebBotLogging").BotEntryPointType.Invoke:
          return "invoke";
      }
    }
    async function R(e, t) {
      var n, r;
      if (o("WAWebBotGating").isImplicitThreadRoutingEnabled())
        ((n = o("WAWebResolveThreadForEntryPoint").resolveThreadIdForEntryPoint(
          e,
        )),
          I(e, n),
          (r = null));
      else {
        var a,
          i,
          l = (a = e.aiThreads) == null ? void 0 : a.head();
        ((n = (i = l == null ? void 0 : l.id) != null ? i : E(e)),
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
      o(
        "WAWebPttComposerRecordingStopReason",
      ).cancelChatRecordingForThreadSwitch(e);
      var t = o("WAWebAiThreadCreationUtils").createAiThreadId(e.id),
        n = new (r("WAWebAiThreadModel"))({
          id: t,
          title: void 0,
          aiThreadType: o("WAWebAiThreadTypeUtils").AiThreadType.Default,
          lastMessageTimestamp: o("WATimeUtils").unixTime(),
          unreadCount: 0,
          isPending: !0,
        });
      return (
        e.aiThreads == null &&
          (e.aiThreads = new (o(
            "WAWebAiThreadCollection",
          ).AiThreadCollection)()),
        e.aiThreads.add([n]),
        t
      );
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
      if (!(e.aiThreads != null && e.aiThreads.get(t) != null)) {
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
    function T(t, r) {
      var a,
        i = (a = n("cr:19180")) != null ? a : {},
        l = i.logWindowsMetaAiStage;
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[runMetaAiThreadsFlow] called with entryPoint type=",
            ", chatId=",
            "",
          ])),
        r.type,
        t.id.toString(),
      ),
        l == null || l("chat-open-start"));
      try {
        o("WAWebCmd").Cmd.openMetaAiThreadDrawer(t, r);
      } catch (e) {
        throw (l == null || l("chat-open-failed"), e);
      }
      l == null || l("chat-open-complete");
    }
    async function D() {
      var e,
        t = (e = n("cr:19180")) != null ? e : {},
        r = t.logWindowsMetaAiStage;
      (r == null || r("chat-lookup-start"),
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[getMetaAiChat] finding chat wid=",
              "",
            ])),
          o("WAWebBotUtils").META_BOT_PN_WID.toString(),
        ));
      try {
        var a = await o("WAWebFindChatAction").findOrCreateLatestChat(
            o("WAWebBotUtils").META_BOT_PN_WID,
            "metaBotChatListShortcut",
          ),
          i = a.chat;
        return (
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[getMetaAiChat] success, chatId=",
                "",
              ])),
            i.id.toString(),
          ),
          r == null || r("chat-lookup-complete"),
          i
        );
      } catch (e) {
        throw (
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[getMetaAiChat] failed with error",
              ])),
          ),
          r == null || r("chat-lookup-failed"),
          e
        );
      }
    }
    function x() {
      return s._(/*BTDS*/ "").toString();
    }
    ((l.openMetaBotChat = m),
      (l.sendMetaBotQuery = p),
      (l.META_AI_LLAMA_VERSION_TITLE = _),
      (l.getBotMsgBodyLength = f),
      (l.getBotMsgBodyLengthFor = g),
      (l.isMetaAiChatEmpty = h),
      (l.maybeGetTopMetaAiRow = C),
      (l.getMetaAiContact = b),
      (l.getHatchContact = v),
      (l.getBotNuxOriginType = S),
      (l.openLatestOrNewMetaAiThread = R),
      (l.openMetaAiThreadAndSendQuery = L),
      (l.createNewMetaAiThread = E),
      (l.createAndOpenNewMetaAiThread = k),
      (l.ensureThreadModelExists = I),
      (l.runMetaAiThreadsFlow = T),
      (l.getMetaAiChat = D),
      (l.getMetaAiTEEBotDisplayName = x));
  },
  226,
);
