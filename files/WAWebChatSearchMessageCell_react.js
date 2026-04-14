__d(
  "WAWebChatSearchMessageCell.react",
  [
    "WATypeUtils",
    "WAWebBoolFunc",
    "WAWebChatCell.react",
    "WAWebChatLastMsg.react",
    "WAWebChatMessageSearch",
    "WAWebChatTimestamp.react",
    "WAWebDomScroll",
    "WAWebFocusTracer",
    "WAWebFrontendMsgGetters",
    "WAWebKeyboardHotKeys.react",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebPrivacyBlurWrapper.react",
    "WAWebStateUtils",
    "react",
    "useWAWebListener",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useRef,
      d = u.useState;
    function m(e) {
      var t,
        n,
        a = e.author,
        i = e.msg,
        l = e.onClick,
        u = e.searchText,
        m = o("useWAWebMsgValues").useMsgValues(e.msg.id, [
          (t = o("WAWebMsgGetters")).getId,
          t.getIsSentByMe,
          (n = o("WAWebFrontendMsgGetters")).getSenderObj,
          n.getRtl,
          n.getDir,
          t.getType,
          t.getT,
        ]),
        p = m[0],
        _ = m[1],
        f = m[2],
        g = m[3],
        h = m[4],
        y = m[5],
        C = m[6],
        b = n.getChat(i),
        v = c(null),
        S = c(null),
        R = d(function () {
          return e.active ? e.active.value === i : !1;
        }),
        L = R[0],
        E = R[1],
        k = function (t, n) {
          if (t === "focus") {
            var e = S.current;
            (r("WAWebFocusTracer").focus(e),
              n && e && o("WAWebDomScroll").scrollIntoViewIfNeeded(e));
          }
          E(!!t);
        };
      o("useWAWebListener").useListener(e.active, p.toString(), k);
      var I = function (t) {
          if (o("WATypeUtils").isFunction(l)) {
            var e,
              n = o("WAWebChatMessageSearch").getSearchContext({
                chat: b,
                msgKey: o("WAWebStateUtils").unproxy(i).id,
              });
            (u != null && (n.highlightTerms = u.toLowerCase().split(" ")),
              ((e = n.msg) == null ? void 0 : e.type) !==
                o("WAWebMsgType").MSG_TYPE.ALBUM && (n.msg = i),
              l(t, b, n, i));
          }
        },
        T = function (t) {
          (t.preventDefault(), t.stopPropagation(), I(t));
        },
        D = s.jsx(r("WAWebChatTimestamp.react"), { msg: i }),
        x = s.jsx(r("WAWebChatLastMsg.react"), {
          msg: i.safe(),
          msgType: "Search",
          author: a,
          searchQuery: u != null ? u.toLowerCase().split(" ") : [],
        }),
        $ = { enter: T };
      return s.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
        handlers: $,
        ref: S,
        children: s.jsx(r("WAWebPrivacyBlurWrapper.react"), {
          containerRef: S,
          children: s.jsx(r("WAWebChatCell.react"), {
            ref: v,
            contextEnabled: o("WAWebBoolFunc").returnFalse,
            theme: "chat-search",
            active: !!L,
            primaryDetail: D,
            secondary: x,
            primary: void 0,
            onClick: I,
          }),
        }),
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
