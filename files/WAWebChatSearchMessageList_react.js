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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(5),
        n = e.msg,
        a = e.onClick,
        i = e.searchText,
        l = e.selection,
        s;
      return (
        t[0] !== n || t[1] !== a || t[2] !== i || t[3] !== l
          ? ((s =
              o("WAWebMsgGetters").getSender(n) &&
              o("WAWebMsgGetters").getIsGroupMsg(n) &&
              !o("WAWebMsgGetters").getIsNotification(n) &&
              !o("WAWebMsgGetters").getIsSentByMe(n)
                ? u.jsx(
                    r("WAWebChatSearchMessageWithAuthorCell.react"),
                    {
                      contact: n.senderObj,
                      msg: n,
                      chat: o("WAWebFrontendMsgGetters").getChat(n),
                      searchText: i,
                      onClick: a,
                      active: l,
                    },
                    n.id.toString(),
                  )
                : u.jsx(
                    r("WAWebChatSearchMessageCell.react"),
                    {
                      msg: n,
                      chat: o("WAWebFrontendMsgGetters").getChat(n),
                      searchText: i,
                      onClick: a,
                      active: l,
                    },
                    n.id.toString(),
                  )),
            (t[0] = n),
            (t[1] = a),
            (t[2] = i),
            (t[3] = l),
            (t[4] = s))
          : (s = t[4]),
        s
      );
    }
    function g(t) {
      var n = o("react-compiler-runtime").c(55),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l = a,
        s = l.ftsResult,
        c = l.onFocusSearch,
        d = l.searchText,
        g = l.selection,
        y = l.threadId,
        C = r("useWAWebUIM")(),
        b = _(null),
        v;
      n[3] !== y || n[4] !== C
        ? ((v = function (t, n, r, a) {
            (t.preventDefault(),
              t.stopPropagation(),
              o("WAWebFindChatAction")
                .findExistingChat(n.id, "chatSearchMessageList")
                .then(function (e) {
                  (o("WAWebColumnChangeDispatch").Column.column === 2 &&
                    (C == null || C.requestDismiss()),
                    o("WAWebComposeBoxActions").ComposeBoxActions.focus(e),
                    o("WAWebCmd").Cmd.openChatAt({
                      chat: e,
                      msgContext: r,
                      threadId: y,
                      onSuccess: { mediaMsgToOpenInMediaViewer: a },
                    }));
                }));
          }),
          (n[3] = y),
          (n[4] = C),
          (n[5] = v))
        : (v = n[5]);
      var S = v,
        R;
      n[6] !== s || n[7] !== d || n[8] !== y
        ? ((R = function (t) {
            var e = s[t];
            if (e) {
              var n = o("WAWebFrontendMsgGetters").getChat(e),
                r = o("WAWebChatMessageSearch").getSearchContext({
                  chat: n,
                  msgKey: e.id,
                });
              ((r.enableAnimation = !0),
                (r.highlightMsg = !0),
                d != null && (r.highlightTerms = d.toLowerCase().split(" ")),
                o("WAWebCmd").Cmd.openChatAt({
                  chat: n,
                  msgContext: r,
                  threadId: y,
                  noFocus: !0,
                }));
            }
          }),
          (n[6] = s),
          (n[7] = d),
          (n[8] = y),
          (n[9] = R))
        : (R = n[9]);
      var L = R,
        E;
      n[10] !== g
        ? ((E = function () {
            g.reset(!0);
          }),
          (n[10] = g),
          (n[11] = E))
        : (E = n[11]);
      var k = E,
        I;
      n[12] !== L || n[13] !== g
        ? ((I = function () {
            (g.setFirst(!0), L(0));
          }),
          (n[12] = L),
          (n[13] = g),
          (n[14] = I))
        : (I = n[14]);
      var T = I,
        D;
      n[15] !== T || n[16] !== g
        ? ((D = function (t) {
            t.target === b.current && (g.index < 0 ? T() : g.reset(!0));
          }),
          (n[15] = T),
          (n[16] = g),
          (n[17] = D))
        : (D = n[17]);
      var x = D,
        $;
      n[18] !== L || n[19] !== g
        ? (($ = function (t) {
            t && (t.preventDefault(), t.stopPropagation());
            var e = g.next();
            g.index !== e && (g.setNext(!0), L(e));
          }),
          (n[18] = L),
          (n[19] = g),
          (n[20] = $))
        : ($ = n[20]);
      var P = $,
        N;
      n[21] !== c || n[22] !== L || n[23] !== g
        ? ((N = function (t) {
            t && (t.stopPropagation(), t.preventDefault());
            var e = g.prev();
            e > -1 ? (g.setPrev(!0), L(e)) : c();
          }),
          (n[21] = c),
          (n[22] = L),
          (n[23] = g),
          (n[24] = N))
        : (N = n[24]);
      var M = N,
        w;
      n[25] !== s
        ? ((w = function () {
            return s.map(h);
          }),
          (n[25] = s),
          (n[26] = w))
        : (w = n[26]);
      var A = w,
        F,
        O;
      (n[27] !== s || n[28] !== g
        ? ((O = function () {
            g.init(s, !0);
          }),
          (F = [s, g]),
          (n[27] = s),
          (n[28] = g),
          (n[29] = F),
          (n[30] = O))
        : ((F = n[29]), (O = n[30])),
        m(O, F));
      var B;
      (n[31] !== T || n[32] !== k
        ? ((B = function () {
            return { focusFirst: T, restoreFocus: k };
          }),
          (n[31] = T),
          (n[32] = k),
          (n[33] = B))
        : (B = n[33]),
        p(i, B));
      var W;
      n[34] !== P
        ? ((W = function (t) {
            return P(t);
          }),
          (n[34] = P),
          (n[35] = W))
        : (W = n[35]);
      var q;
      n[36] !== M
        ? ((q = function (t) {
            return M(t);
          }),
          (n[36] = M),
          (n[37] = q))
        : (q = n[37]);
      var U;
      n[38] !== W || n[39] !== q
        ? ((U = { down: W, up: q }), (n[38] = W), (n[39] = q), (n[40] = U))
        : (U = n[40]);
      var V = U,
        H = a.flatListController,
        G;
      n[41] !== A ? ((G = A()), (n[41] = A), (n[42] = G)) : (G = n[42]);
      var z;
      n[43] !== S || n[44] !== d || n[45] !== g
        ? ((z = function (t) {
            var e = t.msg;
            return u.jsx(f, {
              msg: e,
              selection: g,
              searchText: d,
              onClick: S,
            });
          }),
          (n[43] = S),
          (n[44] = d),
          (n[45] = g),
          (n[46] = z))
        : (z = n[46]);
      var j;
      n[47] !== a.flatListController || n[48] !== G || n[49] !== z
        ? ((j = u.jsx(o("WAWebFlatList.react").FlatList, {
            testid: void 0,
            flatListController: H,
            direction: "vertical",
            data: G,
            renderItem: z,
            forceConsistentRenderCount: !1,
          })),
          (n[47] = a.flatListController),
          (n[48] = G),
          (n[49] = z),
          (n[50] = j))
        : (j = n[50]);
      var K;
      return (
        n[51] !== x || n[52] !== V || n[53] !== j
          ? ((K = u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
              handlers: V,
              onFocus: x,
              "data-tab": o("WAWebTabOrder").TAB_ORDER.CHAT_SEARCH_MSG_LIST,
              ref: b,
              children: j,
            })),
            (n[51] = x),
            (n[52] = V),
            (n[53] = j),
            (n[54] = K))
          : (K = n[54]),
        K
      );
    }
    function h(e) {
      return { itemKey: e.id.toString(), msg: e };
    }
    l.default = g;
  },
  98,
);
