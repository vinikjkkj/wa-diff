__d(
  "WAWebWrapperGroupProfilePicture.react",
  [
    "WAWebDisplayType",
    "WAWebFrontendMsgGetters",
    "WAWebGetDisplayType",
    "WAWebGroupChatProfilePicture.react",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebNoop",
    "WAWebViewMode.flow",
    "WAWebWrapperShouldHaveTail",
    "react",
    "react-compiler-runtime",
    "useWAWebAssociatedMessages",
    "useWAWebMsgValues",
    "useWAWebReactions",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useMemo,
      c = [
        o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION,
        o("WAWebDisplayType").DISPLAY_TYPE.ALL_REPLIES,
      ];
    function d(e) {
      var t = o("react-compiler-runtime").c(39),
        n = e.selectable,
        a = e.msg,
        i = e.position,
        l = e.tailOverride,
        u = e.sticky,
        d = e.lastMsgs,
        g;
      t[0] !== d
        ? ((g = d === void 0 ? [] : d), (t[0] = d), (t[1] = g))
        : (g = t[1]);
      var h = g,
        y;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = [
            o("WAWebFrontendMsgGetters").getSenderObj,
            o("WAWebMsgGetters").getIsGroupMsg,
            o("WAWebMsgGetters").getIsSentByMe,
            o("WAWebMsgGetters").getIsNotification,
          ]),
          (t[2] = y))
        : (y = t[2]);
      var C = o("useWAWebMsgValues").useMsgValues(a.id, y),
        b = C[0],
        v = C[1],
        S = C[2],
        R = C[3],
        L;
      t[3] !== h[0] || t[4] !== h.length || t[5] !== a
        ? ((L = h.length > 0 ? h[0].unsafe() : a),
          (t[3] = h[0]),
          (t[4] = h.length),
          (t[5] = a),
          (t[6] = L))
        : (L = t[6]);
      var E = o("useWAWebAssociatedMessages").useHiddenAssociatedMessages(
          L,
          o("WAWebViewMode.flow").ViewModeSurface.CHAT,
        ),
        k;
      t[7] !== E || t[8] !== h
        ? ((k = [].concat(h, E).map(f)), (t[7] = E), (t[8] = h), (t[9] = k))
        : (k = t[9]);
      var I = k,
        T;
      t[10] !== E || t[11] !== h
        ? ((T = h.some(_) || E.some(p)), (t[10] = E), (t[11] = h), (t[12] = T))
        : (T = t[12]);
      var D = r("useWAWebReactions")(I, r("WAWebNoop"), T),
        x = D.reactionsModels,
        $;
      t[13] !== x ? (($ = x.some(m)), (t[13] = x), (t[14] = $)) : ($ = t[14]);
      var P = $,
        N;
      t[15] !== a
        ? ((N = o("WAWebGetDisplayType").getDisplayType(a)),
          (t[15] = a),
          (t[16] = N))
        : (N = t[16]);
      var M = N,
        w;
      t[17] !== a
        ? ((w = o("WAWebFrontendMsgGetters").getChat(a)),
          (t[17] = a),
          (t[18] = w))
        : (w = t[18]);
      var A = w,
        F;
      t[19] !== A || t[20] !== M || t[21] !== R || t[22] !== i || t[23] !== l
        ? ((F = o("WAWebWrapperShouldHaveTail").shouldHaveTail({
            chat: A,
            isDisplayedAsNotification: R,
            displayType: M,
            tailOverride: l,
            position: i,
          })),
          (t[19] = A),
          (t[20] = M),
          (t[21] = R),
          (t[22] = i),
          (t[23] = l),
          (t[24] = F))
        : (F = t[24]);
      var O = F,
        B;
      t[25] !== M ||
      t[26] !== O ||
      t[27] !== v ||
      t[28] !== S ||
      t[29] !== a.type ||
      t[30] !== n ||
      t[31] !== (b == null ? void 0 : b.id)
        ? ((B =
            v &&
            !S &&
            (!!O || a.type === o("WAWebMsgType").MSG_TYPE.PTV) &&
            c.includes(M) &&
            n !== !0 &&
            (b == null ? void 0 : b.id) != null),
          (t[25] = M),
          (t[26] = O),
          (t[27] = v),
          (t[28] = S),
          (t[29] = a.type),
          (t[30] = n),
          (t[31] = b == null ? void 0 : b.id),
          (t[32] = B))
        : (B = t[32]);
      var W = B,
        q;
      return (
        t[33] !== A || t[34] !== W || t[35] !== P || t[36] !== b || t[37] !== u
          ? ((q = W
              ? s.jsx(r("WAWebGroupChatProfilePicture.react"), {
                  userContact: b,
                  chatWid: A.id,
                  sticky: u,
                  lastMessageHasReaction: P,
                })
              : null),
            (t[33] = A),
            (t[34] = W),
            (t[35] = P),
            (t[36] = b),
            (t[37] = u),
            (t[38] = q))
          : (q = t[38]),
        q
      );
    }
    function m(e) {
      return e.reactions.length > 0;
    }
    function p(e) {
      return o("WAWebMsgGetters").getHasReaction(e);
    }
    function _(e) {
      return o("WAWebMsgGetters").getHasReaction(e);
    }
    function f(e) {
      return e.id.toString();
    }
    l.default = d;
  },
  98,
);
