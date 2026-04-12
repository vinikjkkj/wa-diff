__d(
  "WAWebChatSearchMessageList.react",
  [
    "WAWebChatMessageSearch",
    "WAWebChatSearchMessageCell.react",
    "WAWebChatSearchMessageWithAuthorCell.react",
    "WAWebCmd",
    "WAWebColumnChangeDispatch",
    "WAWebComposeBoxActions",
    "WAWebFindChatAction",
    "WAWebFlatList.react",
    "WAWebFrontendMsgGetters",
    "WAWebKeyboardHotKeys.react",
    "WAWebMsgGetters",
    "WAWebTabOrder",
    "react",
    "useWAWebUIM",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useCallback,
      m = c.useEffect,
      p = c.useImperativeHandle,
      _ = c.useRef;
    function f(e) {
      var t = e.msg,
        n = e.onClick,
        a = e.searchText,
        i = e.selection;
      return o("WAWebMsgGetters").getSender(t) &&
        o("WAWebMsgGetters").getIsGroupMsg(t) &&
        !o("WAWebMsgGetters").getIsNotification(t) &&
        !o("WAWebMsgGetters").getIsSentByMe(t)
        ? u.jsx(
            r("WAWebChatSearchMessageWithAuthorCell.react"),
            {
              contact: t.senderObj,
              msg: t,
              chat: o("WAWebFrontendMsgGetters").getChat(t),
              searchText: a,
              onClick: n,
              active: i,
            },
            t.id.toString(),
          )
        : u.jsx(
            r("WAWebChatSearchMessageCell.react"),
            {
              msg: t,
              chat: o("WAWebFrontendMsgGetters").getChat(t),
              searchText: a,
              onClick: n,
              active: i,
            },
            t.id.toString(),
          );
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.ftsResult,
        l = a.onFocusSearch,
        s = a.searchText,
        c = a.selection,
        g = a.threadId,
        h = r("useWAWebUIM")(),
        y = _(null),
        C = function (t, n, r, a) {
          (t.preventDefault(),
            t.stopPropagation(),
            o("WAWebFindChatAction")
              .findExistingChat(n.id, "chatSearchMessageList")
              .then(function (e) {
                (o("WAWebColumnChangeDispatch").Column.column === 2 &&
                  (h == null || h.requestDismiss()),
                  o("WAWebComposeBoxActions").ComposeBoxActions.focus(e),
                  o("WAWebCmd").Cmd.openChatAt({
                    chat: e,
                    msgContext: r,
                    threadId: g,
                    onSuccess: { mediaMsgToOpenInMediaViewer: a },
                  }));
              }));
        },
        b = d(
          function (e) {
            var t = i[e];
            if (t) {
              var n = o("WAWebFrontendMsgGetters").getChat(t),
                r = o("WAWebChatMessageSearch").getSearchContext({
                  chat: n,
                  msgKey: t.id,
                });
              ((r.enableAnimation = !0),
                (r.highlightMsg = !0),
                s != null && (r.highlightTerms = s.toLowerCase().split(" ")),
                o("WAWebCmd").Cmd.openChatAt({
                  chat: n,
                  msgContext: r,
                  threadId: g,
                  noFocus: !0,
                }));
            }
          },
          [i, s, g],
        ),
        v = function () {
          c.reset(!0);
        },
        S = function () {
          (c.setFirst(!0), b(0));
        },
        R = function (t) {
          t.target === y.current && (c.index < 0 ? S() : c.reset(!0));
        },
        L = function (t) {
          t && (t.preventDefault(), t.stopPropagation());
          var e = c.next();
          c.index !== e && (c.setNext(!0), b(e));
        },
        E = function (t) {
          t && (t.stopPropagation(), t.preventDefault());
          var e = c.prev();
          e > -1 ? (c.setPrev(!0), b(e)) : l();
        },
        k = function () {
          return i.map(function (e) {
            return { itemKey: e.id.toString(), msg: e };
          });
        };
      (m(
        function () {
          c.init(i, !0);
        },
        [i, c],
      ),
        p(n, function () {
          return { focusFirst: S, restoreFocus: v };
        }));
      var I = {
        down: function (t) {
          return L(t);
        },
        up: function (t) {
          return E(t);
        },
      };
      return u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
        handlers: I,
        onFocus: R,
        "data-tab": o("WAWebTabOrder").TAB_ORDER.CHAT_SEARCH_MSG_LIST,
        ref: y,
        children: u.jsx(o("WAWebFlatList.react").FlatList, {
          testid: void 0,
          flatListController: a.flatListController,
          direction: "vertical",
          data: k(),
          renderItem: function (t) {
            var e = t.msg;
            return u.jsx(f, {
              msg: e,
              selection: c,
              searchText: s,
              onClick: C,
            });
          },
          forceConsistentRenderCount: !1,
        }),
      });
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  98,
);
