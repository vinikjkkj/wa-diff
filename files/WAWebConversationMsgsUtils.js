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
    "WAWebThreadsGating",
    "WAWebViewMode.flow",
    "WAWebViewModeUtils",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e) {
      return e == null
        ? null
        : e.key != null
          ? babelHelpers.extends({}, e, {
              msg: o("WAWebMsgCollection").MsgCollection.get(e.key),
            })
          : e;
    }
    function m(e) {
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
    function p(t, n, r, a) {
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
    function _(e, t) {
      var n = e.chat,
        r = e.focusCtx,
        a = e.msgCollection,
        i = d(r) || f(e, t),
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
    function f(e, t) {
      var n = e.chat,
        a = e.focusCtx,
        i = e.msgCollection,
        l;
      if (
        (n.unreadCount ? (l = n.unreadCount) : (l = t), !((a && !g(e)) || !l))
      ) {
        var d = i
            .filter(function (e) {
              return o("WAWebMsgGetters").getIsUnreadType(e);
            })
            .reverse()
            .slice(0, l),
          m;
        if (d.length === l)
          (r("gkx")("26258") ||
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "unreadMsgs.length is: ",
                  "",
                ])),
              d.length,
            ),
            (m = d[d.length - 1]));
        else {
          r("gkx")("26258") ||
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "insufficient unreadMsgs.length: ",
                  "",
                ])),
              d.length,
            );
          return;
        }
        var p = n.unreadDividerOffset;
        if (p > 0) {
          var _ = i.filter(Boolean).reverse(),
            f = _.indexOf(m);
          _.slice(f + 1, f + p + 1).every(function (e) {
            return !!o("WAWebFrontendMsgGetters").getAsRevoked(e);
          })
            ? (m = _[f + p])
            : o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "invalid unreadDividerOffset: ",
                      "",
                    ])),
                  p,
                )
                .sendLogs("invalid-unread-divider-offset", { sampling: 0.001 });
        }
        return {
          msg: m,
          isUnreadDivider: o(
            "WAWebFrontendChatGetters",
          ).getShouldShowUnreadDivider(n),
          highlightMsg: !1,
        };
      }
    }
    function g(e) {
      var t = o("WAWebThreadModelResolver").resolveThreadOrChat(
        e.chat,
        e.threadId,
      );
      return t.msgs === e.msgCollection;
    }
    function h(e) {
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
    function y(e, t, n) {
      return o("WAWebViewModeUtils").isViewModeVisibleInSurface(
        o("WAWebViewMode.flow").ViewModeSurface.CHAT,
        e.viewMode,
      )
        ? t == null ||
          (n.threadId != null &&
            o("WAWebThreadsGating").isThreadLoadingInfraEnabled())
          ? !0
          : o("WAWebThreadMsgUtils").isMsgInThread(e, t) ||
            o("WAWebThreadMsgUtils").isMsgRootOfThread(e, t)
        : !1;
    }
    ((l.validateFocusCtx = d),
      (l.getMsgLoadState = m),
      (l.noEarlierMsgStateIsIncorrect = p),
      (l.getInitialCursorAndFocusContext = _),
      (l.getUnreadFocusCtx = f),
      (l.isMostRecentCMC = g),
      (l.isSimplifiedChatConversationMenuEnabled = h),
      (l.isMsgVisibleInConversation = y));
  },
  98,
);
