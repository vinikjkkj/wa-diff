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
    "react-compiler-runtime",
    "useWAWebActiveSelection",
    "useWAWebChatValues",
    "useWAWebMsgValues",
    "useWAWebSearchQuery",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(37),
        n = e.chat,
        a = e.filterPreset,
        i = e.msg,
        l = e.onClick,
        u = e.searchQuery,
        d = e.testid,
        m;
      if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
        var p;
        ((m = [
          (p = o("WAWebMsgGetters")).getId,
          p.getIsSentByMe,
          p.getIsGroupMsg,
          p.getIsNotification,
          o("WAWebFrontendMsgGetters").getSenderObj,
          o("WAWebFrontendMsgGetters").getDir,
          o("WAWebFrontendMsgGetters").getRtl,
          p.getType,
          p.getLabels,
        ]),
          (t[0] = m));
      } else m = t[0];
      var _ = o("useWAWebMsgValues").useOptionalMsgValues(e.msg.id, m),
        f = _ != null ? _[0] : e.msg.id,
        g;
      t[1] !== _
        ? ((g = _ != null ? _[8] : []), (t[1] = _), (t[2] = g))
        : (g = t[2]);
      var h = g,
        y;
      (t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = [
            o("WAWebChatGetters").getId,
            o("WAWebChatGetters").getIsUser,
            o("WAWebFrontendChatGetters").getContact,
            o("WAWebFrontendChatGetters").getFormattedTitle,
            o("WAWebFrontendChatGetters").getGroupMetadata,
            o("WAWebChatGetters").getIsNewsletter,
          ]),
          (t[3] = y))
        : (y = t[3]),
        o("useWAWebChatValues").useChatValues(e.chat.id, y));
      var C = e.active,
        b;
      t[4] !== f ? ((b = f.toString()), (t[4] = f), (t[5] = b)) : (b = t[5]);
      var v = r("useWAWebActiveSelection")(C, b),
        S = v[0],
        R = v[1],
        L = o("useWAWebSearchQuery").useHighlightedText(u),
        E;
      t[6] !== n || t[7] !== L || t[8] !== f || t[9] !== l
        ? ((E = function (t) {
            if (o("WATypeUtils").isFunction(l)) {
              var e,
                r,
                a = o("WAWebMsgCollection").MsgCollection.assertGet(f),
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
          }),
          (t[6] = n),
          (t[7] = L),
          (t[8] = f),
          (t[9] = l),
          (t[10] = E))
        : (E = t[10]);
      var k = E,
        I;
      t[11] !== k
        ? ((I = { enter: k, space: k }), (t[11] = k), (t[12] = I))
        : (I = t[12]);
      var T = I,
        D = c,
        x;
      t[13] !== i
        ? ((x = s.jsx(r("WAWebChatTimestamp.react"), { msg: i })),
          (t[13] = i),
          (t[14] = x))
        : (x = t[14]);
      var $ = x,
        P;
      t[15] !== i ? ((P = i.safe()), (t[15] = i), (t[16] = P)) : (P = t[16]);
      var N;
      t[17] !== L || t[18] !== P
        ? ((N = s.jsx(r("WAWebChatLastMsg.react"), {
            msg: P,
            msgType: "FTSMessage",
            searchQuery: L,
          })),
          (t[17] = L),
          (t[18] = P),
          (t[19] = N))
        : (N = t[19]);
      var M = N,
        w =
          e.theme === "chat-checkbox"
            ? "cell-message-checkbox"
            : "cell-message",
        A = a == null ? void 0 : a.label,
        F;
      t[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((F = o("WAWebBizGatingUtils").canDisplayLabel()), (t[20] = F))
        : (F = t[20]);
      var O;
      t[21] !== n || t[22] !== h || t[23] !== A
        ? ((O = s.jsx(o("WAWebName.react").Name, {
            chat: n,
            labels: h,
            firstLabel: A,
            showLabelIcon: F,
            titlify: !0,
            ellipsify: !0,
          })),
          (t[21] = n),
          (t[22] = h),
          (t[23] = A),
          (t[24] = O))
        : (O = t[24]);
      var B;
      t[25] !== R ||
      t[26] !== k ||
      t[27] !== $ ||
      t[28] !== M ||
      t[29] !== w ||
      t[30] !== O ||
      t[31] !== d
        ? ((B = s.jsx(r("WAWebChatCell.react"), {
            contextEnabled: o("WAWebBoolFunc").returnFalse,
            theme: w,
            active: R,
            primary: O,
            primaryDetail: $,
            secondary: M,
            onClick: k,
            testid: void 0,
          })),
          (t[25] = R),
          (t[26] = k),
          (t[27] = $),
          (t[28] = M),
          (t[29] = w),
          (t[30] = O),
          (t[31] = d),
          (t[32] = B))
        : (B = t[32]);
      var W;
      return (
        t[33] !== T || t[34] !== S || t[35] !== B
          ? ((W = s.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
              handlers: T,
              onFocus: D,
              ref: S,
              children: B,
            })),
            (t[33] = T),
            (t[34] = S),
            (t[35] = B),
            (t[36] = W))
          : (W = t[36]),
        W
      );
    }
    function c(e) {
      (e.stopPropagation(), e.preventDefault());
    }
    l.default = u;
  },
  98,
);
