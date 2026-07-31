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
    "WAWebPttComposerRecordingStopReason",
    "WAWebResolveThreadForEntryPoint",
    "WAWebRichResponseMsgUtils",
    "WAWebSendTextMsgChatAction",
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
          var t = yield P(),
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
            var n = yield P();
            $(n, { type: "MetaAiSearchSuggestion", query: e });
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
    function y(e) {
      var t,
        n = e.msgs;
      return (
        n.length === 0 ||
        (n.length === 1 &&
          ((t = n.last()) == null ? void 0 : t.subtype) === "bot_init")
      );
    }
    function C(e, t) {
      return e.length
        ? e.find(function (e) {
            return t(e).equals(o("WAWebBotUtils").META_BOT_PN_WID);
          }) || e[0]
        : null;
    }
    function b(e, t) {
      var n = e.filter(function (e) {
          return o("WAWebBotUtils").isMetaAiBot(e.id);
        }),
        r = C(n, function (e) {
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
        i = C(a, function (e) {
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
    function v() {
      var e;
      return (e = o("WAWebContactCollection").ContactCollection.get(
        o("WAWebBotUtils").META_BOT_FBID_WID,
      )) != null
        ? e
        : o("WAWebContactCollection").ContactCollection.get(
            o("WAWebBotUtils").META_BOT_PN_WID,
          );
    }
    function S() {
      return o("WAWebContactCollection").ContactCollection.get(
        o("WAWebBotUtils").HATCH_BOT_FBID_WID,
      );
    }
    function R(e, t) {
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
    function L(e) {
      switch (e) {
        case o("WAWebBotLogging").BotEntryPointType.Search:
        case o("WAWebBotLogging").BotEntryPointType.Shortcut:
          return "shortcut";
        case o("WAWebBotLogging").BotEntryPointType.Invoke:
          return "invoke";
      }
    }
    function E(e, t) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n, r;
          if (o("WAWebBotGating").isImplicitThreadRoutingEnabled())
            ((n = o(
              "WAWebResolveThreadForEntryPoint",
            ).resolveThreadIdForEntryPoint(e)),
              x(e, n),
              (r = null));
          else {
            var a,
              i,
              l = (a = e.aiThreads) == null ? void 0 : a.head();
            ((n = (i = l == null ? void 0 : l.id) != null ? i : T(e)),
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
        k.apply(this, arguments)
      );
    }
    function I(e, t, n) {
      var r;
      o("WAWebBotGating").isImplicitThreadRoutingEnabled()
        ? ((r = o(
            "WAWebResolveThreadForEntryPoint",
          ).resolveThreadIdForEntryPoint(e)),
          x(e, r),
          o("WAWebCmd").Cmd.openChatBottom({
            chat: e,
            chatEntryPoint: n,
            threadId: r,
          }))
        : (r = D(e, n));
      var a = o("WAWebMaybeGetAiThreadInfo").maybeGetAiThreadInfo(e, r);
      return (
        o("WAWebSendTextMsgChatAction").sendTextMsgToChat(e, t, {
          threadIds: [r],
          aiThreadInfo: a,
        }),
        r
      );
    }
    function T(e) {
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
    function D(e, t) {
      var n = T(e);
      return (
        o("WAWebCmd").Cmd.openChatBottom({
          chat: e,
          chatEntryPoint: t,
          threadId: n,
        }),
        n
      );
    }
    function x(e, t) {
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
    function $(t, n) {
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
    function P() {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
        N.apply(this, arguments)
      );
    }
    function M() {
      return s._(/*BTDS*/ "Meta AI").toString();
    }
    ((l.openMetaBotChat = m),
      (l.sendMetaBotQuery = _),
      (l.metaAiLlamaVersionTitleFbs = g),
      (l.getBotMsgBodyLength = h),
      (l.isMetaAiChatEmpty = y),
      (l.maybeGetTopMetaAiRow = b),
      (l.getMetaAiContact = v),
      (l.getHatchContact = S),
      (l.maybeGetTopHatchRow = R),
      (l.getBotNuxOriginType = L),
      (l.openLatestOrNewMetaAiThread = E),
      (l.openMetaAiThreadAndSendQuery = I),
      (l.createNewMetaAiThread = T),
      (l.createAndOpenNewMetaAiThread = D),
      (l.ensureThreadModelExists = x),
      (l.runMetaAiThreadsFlow = $),
      (l.getMetaAiChat = P),
      (l.getMetaAiTEEBotDisplayName = M));
  },
  226,
);
