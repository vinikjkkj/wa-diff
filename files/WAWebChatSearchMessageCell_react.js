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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(36),
        n = e.author,
        a = e.msg,
        i = e.onClick,
        l = e.searchText,
        u;
      if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
        var m;
        ((u = [
          (m = o("WAWebMsgGetters")).getId,
          m.getIsSentByMe,
          o("WAWebFrontendMsgGetters").getSenderObj,
          o("WAWebFrontendMsgGetters").getRtl,
          o("WAWebFrontendMsgGetters").getDir,
          m.getType,
          m.getT,
        ]),
          (t[0] = u));
      } else u = t[0];
      var p = o("useWAWebMsgValues").useMsgValues(e.msg.id, u),
        _ = p[0],
        f;
      t[1] !== a
        ? ((f = o("WAWebFrontendMsgGetters").getChat(a)),
          (t[1] = a),
          (t[2] = f))
        : (f = t[2]);
      var g = f,
        h = c(null),
        y = c(null),
        C;
      t[3] !== a || t[4] !== e.active
        ? ((C = function () {
            return e.active ? e.active.value === a : !1;
          }),
          (t[3] = a),
          (t[4] = e.active),
          (t[5] = C))
        : (C = t[5]);
      var b = d(C),
        v = b[0],
        S = b[1],
        R;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = function (t, n) {
            if (t === "focus") {
              var e = y.current;
              (r("WAWebFocusTracer").focus(e),
                n && e && o("WAWebDomScroll").scrollIntoViewIfNeeded(e));
            }
            S(!!t);
          }),
          (t[6] = R))
        : (R = t[6]);
      var L = R,
        E = e.active,
        k;
      (t[7] !== _ ? ((k = _.toString()), (t[7] = _), (t[8] = k)) : (k = t[8]),
        o("useWAWebListener").useListener(E, k, L));
      var I;
      t[9] !== g || t[10] !== a || t[11] !== i || t[12] !== l
        ? ((I = function (t) {
            if (o("WATypeUtils").isFunction(i)) {
              var e,
                n = o("WAWebChatMessageSearch").getSearchContext({
                  chat: g,
                  msgKey: o("WAWebStateUtils").unproxy(a).id,
                });
              (l != null && (n.highlightTerms = l.toLowerCase().split(" ")),
                ((e = n.msg) == null ? void 0 : e.type) !==
                  o("WAWebMsgType").MSG_TYPE.ALBUM && (n.msg = a),
                i(t, g, n, a));
            }
          }),
          (t[9] = g),
          (t[10] = a),
          (t[11] = i),
          (t[12] = l),
          (t[13] = I))
        : (I = t[13]);
      var T = I,
        D;
      t[14] !== T
        ? ((D = function (t) {
            (t.preventDefault(), t.stopPropagation(), T(t));
          }),
          (t[14] = T),
          (t[15] = D))
        : (D = t[15]);
      var x = D,
        $;
      t[16] !== a
        ? (($ = s.jsx(r("WAWebChatTimestamp.react"), { msg: a })),
          (t[16] = a),
          (t[17] = $))
        : ($ = t[17]);
      var P = $,
        N;
      t[18] !== a ? ((N = a.safe()), (t[18] = a), (t[19] = N)) : (N = t[19]);
      var M;
      t[20] !== l
        ? ((M = l != null ? l.toLowerCase().split(" ") : []),
          (t[20] = l),
          (t[21] = M))
        : (M = t[21]);
      var w;
      t[22] !== n || t[23] !== M || t[24] !== N
        ? ((w = s.jsx(r("WAWebChatLastMsg.react"), {
            msg: N,
            msgType: "Search",
            author: n,
            searchQuery: M,
          })),
          (t[22] = n),
          (t[23] = M),
          (t[24] = N),
          (t[25] = w))
        : (w = t[25]);
      var A = w,
        F;
      t[26] !== x
        ? ((F = { enter: x }), (t[26] = x), (t[27] = F))
        : (F = t[27]);
      var O = F,
        B = !!v,
        W;
      t[28] !== T || t[29] !== P || t[30] !== A || t[31] !== B
        ? ((W = s.jsx(r("WAWebPrivacyBlurWrapper.react"), {
            containerRef: y,
            children: s.jsx(r("WAWebChatCell.react"), {
              ref: h,
              contextEnabled: o("WAWebBoolFunc").returnFalse,
              theme: "chat-search",
              active: B,
              primaryDetail: P,
              secondary: A,
              primary: void 0,
              onClick: T,
            }),
          })),
          (t[28] = T),
          (t[29] = P),
          (t[30] = A),
          (t[31] = B),
          (t[32] = W))
        : (W = t[32]);
      var q;
      return (
        t[33] !== O || t[34] !== W
          ? ((q = s.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
              handlers: O,
              ref: y,
              children: W,
            })),
            (t[33] = O),
            (t[34] = W),
            (t[35] = q))
          : (q = t[35]),
        q
      );
    }
    l.default = m;
  },
  98,
);
