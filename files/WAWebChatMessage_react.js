__d(
  "WAWebChatMessage.react",
  [
    "WATypeUtils",
    "WAWebBizGatingUtils",
    "WAWebBoolFunc",
    "WAWebBotGating",
    "WAWebChatCell.react",
    "WAWebChatGetters",
    "WAWebChatLastMsg.react",
    "WAWebChatMessageSearch",
    "WAWebChatTimestamp.react",
    "WAWebFrontendChatGetters",
    "WAWebFrontendMsgGetters",
    "WAWebKeyboardHotKeys.react",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebName.react",
    "WAWebStateUtils",
    "WAWebThreadMsgUtils",
    "react",
    "useWAWebActiveSelection",
    "useWAWebChatValues",
    "useWAWebMsgValues",
    "useWAWebSearchQuery",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t,
        n = e.chat,
        a = e.filterPreset,
        i = e.msg,
        l = e.onClick,
        u = e.searchQuery,
        c = e.testid,
        d = o("useWAWebMsgValues").useOptionalMsgValues(e.msg.id, [
          (t = o("WAWebMsgGetters")).getId,
          t.getIsSentByMe,
          t.getIsGroupMsg,
          t.getIsNotification,
          o("WAWebFrontendMsgGetters").getSenderObj,
          o("WAWebFrontendMsgGetters").getDir,
          o("WAWebFrontendMsgGetters").getRtl,
          t.getType,
          t.getLabels,
        ]),
        m = d != null ? d[0] : e.msg.id,
        p = d != null ? d[8] : [],
        _ = o("useWAWebChatValues").useChatValues(e.chat.id, [
          o("WAWebChatGetters").getId,
          o("WAWebChatGetters").getIsUser,
          o("WAWebFrontendChatGetters").getContact,
          o("WAWebFrontendChatGetters").getFormattedTitle,
          o("WAWebFrontendChatGetters").getGroupMetadata,
          o("WAWebChatGetters").getIsNewsletter,
        ]),
        f = _[0],
        g = _[1],
        h = _[2],
        y = _[3],
        C = _[4],
        b = _[5],
        v = r("useWAWebActiveSelection")(e.active, m.toString()),
        S = v[0],
        R = v[1],
        L = o("useWAWebSearchQuery").useHighlightedText(u),
        E = function (t) {
          if (o("WATypeUtils").isFunction(l)) {
            var e,
              r,
              a = o("WAWebMsgCollection").MsgCollection.assertGet(m),
              i = o("WAWebThreadMsgUtils").getMsgAiThread(a);
            if (i != null && o("WAWebBotGating").isAiChatThreadsEnabled()) {
              l(
                t,
                o("WAWebStateUtils").unproxy(n),
                { msg: a, key: a.id, collection: n.msgs },
                a,
              );
              return;
            }
            var s = o("WAWebChatMessageSearch").getSearchContext({
              chat: n,
              msgKey: a.id,
            });
            (((e = L == null ? void 0 : L.length) != null ? e : 0) > 0 &&
              (s.highlightTerms = L),
              ((r = s.msg) == null ? void 0 : r.type) !==
                o("WAWebMsgType").MSG_TYPE.ALBUM && (s.msg = a),
              l(t, o("WAWebStateUtils").unproxy(n), s, a));
          }
        },
        k = { enter: E, space: E },
        I = function (t) {
          (t.stopPropagation(), t.preventDefault());
        },
        T = s.jsx(r("WAWebChatTimestamp.react"), { msg: i }),
        D = s.jsx(r("WAWebChatLastMsg.react"), {
          msg: i.safe(),
          msgType: "FTSMessage",
          searchQuery: L,
        });
      return s.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
        handlers: k,
        onFocus: I,
        ref: S,
        children: s.jsx(r("WAWebChatCell.react"), {
          contextEnabled: o("WAWebBoolFunc").returnFalse,
          theme:
            e.theme === "chat-checkbox"
              ? "cell-message-checkbox"
              : "cell-message",
          active: R,
          primary: s.jsx(o("WAWebName.react").Name, {
            chat: n,
            labels: p,
            firstLabel: a == null ? void 0 : a.label,
            showLabelIcon: o("WAWebBizGatingUtils").canDisplayLabel(),
            titlify: !0,
            ellipsify: !0,
          }),
          primaryDetail: T,
          secondary: D,
          onClick: E,
          testid: void 0,
        }),
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
