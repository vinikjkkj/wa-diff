__d(
  "WAWebConversationMsgsUtils",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebChatGetters",
    "WAWebContactGetters",
    "WAWebEnvironment",
    "WAWebFrontendChatGetters",
    "WAWebFrontendMsgGetters",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebRenderCursor",
    "WAWebThreadModelResolver",
    "WAWebThreadMsgUtils",
    "WAWebViewMode.flow",
    "WAWebViewModeUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      var t;
      return (t = e.getBubbleElement == null ? void 0 : e.getBubbleElement()) !=
        null
        ? t
        : e.getContainerElement();
    }
    function c(e) {
      return e == null
        ? null
        : e.key != null
          ? babelHelpers.extends({}, e, {
              msg: o("WAWebMsgCollection").MsgCollection.get(e.key),
            })
          : e;
    }
    function d(e) {
      var t = e.msgLoadState;
      return {
        noEarlierMsgs: t.noEarlierMsgs,
        isLoadingEarlierMsgs: t.isLoadingEarlierMsgs,
        isLoadingRecentMsgs: t.isLoadingRecentMsgs,
        isLoadingAroundMsgs: t.isLoadingAroundMsgs,
        contextLoaded: t.contextLoaded,
        isRepairingMsgHistory: t.isRepairingMsgHistory,
      };
    }
    function m(t, n, r, a) {
      var i = o("WAWebThreadModelResolver").resolveThreadOrChat(t, a),
        l =
          r.noEarlierMsgs &&
          o("WAWebFrontendChatGetters").getShouldAppearInList(t) &&
          n &&
          i.msgChunks.some(function (e) {
            return e.some(function (t) {
              return t.getMsgChunk(a != null ? a : void 0) === e;
            });
          });
      return (
        l &&
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "MRM noEarlierMsgs chat=",
                  " threadId=",
                  " chunks=",
                  " msgs=",
                  "",
                ])),
              String(t.id),
              String(a != null ? a : ""),
              i.msgChunks.length,
              i.msgs.length,
            )
            .sendLogs("noEarlierMsgs-error"),
        l
      );
    }
    function p(e, t) {
      var n = e.chat,
        r = e.focusCtx,
        a = e.msgCollection,
        i = c(r) || _(e, t),
        l = i == null ? void 0 : i.msg,
        s = l == null ? void 0 : l.id;
      return {
        cursor: o("WAWebRenderCursor").RenderCursor.create({
          msgCollection: a,
          focusedMsgKey: s,
          type: o("WAWebChatGetters").getIsGroup(n)
            ? o("WAWebRenderCursor").RENDER_CURSOR.GROUP_CONVERSATION
            : o("WAWebRenderCursor").RENDER_CURSOR.CONVERSATION,
        }),
        focusCtx: i,
      };
    }
    function _(e, t) {
      var n = e.chat,
        r = e.focusCtx,
        a = e.msgCollection,
        i;
      if (
        (n.unreadCount ? (i = n.unreadCount) : (i = t), !((r && !f(e)) || !i))
      ) {
        var l = a
            .filter(function (e) {
              return o("WAWebMsgGetters").getIsUnreadType(e);
            })
            .reverse()
            .slice(0, i),
          u;
        if (l.length === i) u = l[l.length - 1];
        else return;
        var c = n.unreadDividerOffset;
        if (c > 0) {
          var d = a.filter(Boolean).reverse(),
            m = d.indexOf(u);
          d.slice(m + 1, m + c + 1).every(function (e) {
            return !!o("WAWebFrontendMsgGetters").getAsRevoked(e);
          })
            ? (u = d[m + c])
            : o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "invalid unreadDividerOffset: ",
                      "",
                    ])),
                  c,
                )
                .sendLogs("invalid-unread-divider-offset", { sampling: 0.001 });
        }
        return {
          msg: u,
          isUnreadDivider: o(
            "WAWebFrontendChatGetters",
          ).getShouldShowUnreadDivider(n),
          highlightMsg: !1,
        };
      }
    }
    function f(e) {
      var t = o("WAWebThreadModelResolver").resolveThreadOrChat(
        e.chat,
        e.threadId,
      );
      return t.msgs === e.msgCollection;
    }
    function g(e) {
      var t =
        o("WAWebContactGetters").getIsUser(e) ||
        o("WAWebContactGetters").getIsGroup(e) ||
        o("WAWebContactGetters").getIsBroadcast(e);
      return t
        ? r("WAWebEnvironment").isWindows === !0
          ? !0
          : o("WAWebABProps").getABPropConfigValue(
              "wa_web_hybrid_simple_chat_conversation_context_menu_enabled",
            ) === !0
        : !1;
    }
    function h(e) {
      var t = e.msg,
        n = e.msgCollection,
        r = e.threadId;
      return o("WAWebViewModeUtils").isViewModeVisibleInSurface(
        o("WAWebViewMode.flow").ViewModeSurface.CHAT,
        t.viewMode,
      )
        ? r == null || n.threadId != null
          ? !0
          : o("WAWebThreadMsgUtils").isMsgInThread(t, r) ||
            o("WAWebThreadMsgUtils").isMsgRootOfThread(t, r)
        : !1;
    }
    ((l.getMessageAnchor = u),
      (l.validateFocusCtx = c),
      (l.getMsgLoadState = d),
      (l.noEarlierMsgStateIsIncorrect = m),
      (l.getInitialCursorAndFocusContext = p),
      (l.getUnreadFocusCtx = _),
      (l.isMostRecentCMC = f),
      (l.isSimplifiedChatConversationMenuEnabled = g),
      (l.isMsgVisibleInConversation = h));
  },
  98,
);
