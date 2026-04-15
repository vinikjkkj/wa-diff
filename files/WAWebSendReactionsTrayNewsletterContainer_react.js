__d(
  "WAWebSendReactionsTrayNewsletterContainer.react",
  [
    "WAWebDefaultReactions",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebNewsletterGatingUtils",
    "WAWebReactionsBEUtils",
    "WAWebReactionsUtils",
    "WAWebSendReactionsTray.react",
    "react",
    "react-compiler-runtime",
    "useWAWebNewsletterReactions",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useState;
    function m(e) {
      var t = o("react-compiler-runtime").c(47),
        n = e.disableAutoFocus,
        a = e.isInlineMode,
        i = e.msg,
        l = e.onMouseEnter,
        u = e.onMouseLeave,
        m = e.onMouseOver,
        p = e.ref,
        _ = e.selectedCallback,
        f = n === void 0 ? !1 : n,
        g;
      t[0] !== i.id ? ((g = [i.id]), (t[0] = i.id), (t[1] = g)) : (g = t[1]);
      var h = r("useWAWebNewsletterReactions")(g),
        y = h[0],
        C = d(null),
        b = C[0],
        v = C[1],
        S;
      t[2] !== (y == null ? void 0 : y.myReaction) || t[3] !== _
        ? ((S = function (t) {
            if (t === (y == null ? void 0 : y.myReaction))
              return (
                v(null),
                _(o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT)
              );
            (v(
              o("WAWebReactionsUtils")
                .getReactionsForTray(
                  o("WAWebDefaultReactions").DEFAULT_REACTIONS,
                  y == null ? void 0 : y.myReaction,
                )
                .indexOf(t),
            ),
              _(t));
          }),
          (t[2] = y == null ? void 0 : y.myReaction),
          (t[3] = _),
          (t[4] = S))
        : (S = t[4]);
      var R = S,
        L;
      t[5] !== (y == null ? void 0 : y.myReaction)
        ? ((L = function () {
            var e = y == null ? void 0 : y.myReaction;
            v(
              e != null
                ? o("WAWebReactionsUtils")
                    .getReactionsForTray(
                      o("WAWebDefaultReactions").DEFAULT_REACTIONS,
                      e,
                    )
                    .indexOf(e)
                : null,
            );
          }),
          (t[5] = y == null ? void 0 : y.myReaction),
          (t[6] = L))
        : (L = t[6]);
      var E = y == null ? void 0 : y.myReaction,
        k;
      (t[7] !== E ? ((k = [E]), (t[7] = E), (t[8] = k)) : (k = t[8]), c(L, k));
      var I = y == null ? void 0 : y.myReaction,
        T;
      t[9] !== I
        ? ((T = o("WAWebReactionsUtils").getReactionsForTray(
            o("WAWebDefaultReactions").DEFAULT_REACTIONS,
            I,
          )),
          (t[9] = I),
          (t[10] = T))
        : (T = t[10]);
      var D = T,
        x,
        $,
        P,
        N,
        M,
        w,
        A,
        F,
        O,
        B;
      if (
        t[11] !== a ||
        t[12] !== i ||
        t[13] !== l ||
        t[14] !== u ||
        t[15] !== m ||
        t[16] !== D ||
        t[17] !== p ||
        t[18] !== b ||
        t[19] !== R
      ) {
        var W = o("WAWebFrontendMsgGetters").getChat(i);
        ((w = p),
          (A = l),
          (F = m),
          (O = u),
          (x = o("WAWebSendReactionsTray.react").SendReactionsTray),
          (B = a),
          ($ = b),
          (P = R),
          (N = D),
          (M = o(
            "WAWebNewsletterGatingUtils",
          ).shouldShowAllReactionsForNewsletter(W)),
          (t[11] = a),
          (t[12] = i),
          (t[13] = l),
          (t[14] = u),
          (t[15] = m),
          (t[16] = D),
          (t[17] = p),
          (t[18] = b),
          (t[19] = R),
          (t[20] = x),
          (t[21] = $),
          (t[22] = P),
          (t[23] = N),
          (t[24] = M),
          (t[25] = w),
          (t[26] = A),
          (t[27] = F),
          (t[28] = O),
          (t[29] = B));
      } else
        ((x = t[20]),
          ($ = t[21]),
          (P = t[22]),
          (N = t[23]),
          (M = t[24]),
          (w = t[25]),
          (A = t[26]),
          (F = t[27]),
          (O = t[28]),
          (B = t[29]));
      var q;
      t[30] !== i
        ? ((q = o("WAWebMsgGetters").getIsSentByMe(i)),
          (t[30] = i),
          (t[31] = q))
        : (q = t[31]);
      var U;
      t[32] !== x ||
      t[33] !== f ||
      t[34] !== $ ||
      t[35] !== P ||
      t[36] !== N ||
      t[37] !== M ||
      t[38] !== q ||
      t[39] !== B
        ? ((U = s.jsx(x, {
            isInlineMode: B,
            selectedIndex: $,
            selectedCallback: P,
            reactions: N,
            showMoreOption: M,
            disableAutoFocus: f,
            isParentMsgSentByMe: q,
          })),
          (t[32] = x),
          (t[33] = f),
          (t[34] = $),
          (t[35] = P),
          (t[36] = N),
          (t[37] = M),
          (t[38] = q),
          (t[39] = B),
          (t[40] = U))
        : (U = t[40]);
      var V;
      return (
        t[41] !== w || t[42] !== A || t[43] !== F || t[44] !== O || t[45] !== U
          ? ((V = s.jsx("div", {
              ref: w,
              onMouseEnter: A,
              onMouseOver: F,
              onMouseLeave: O,
              children: U,
            })),
            (t[41] = w),
            (t[42] = A),
            (t[43] = F),
            (t[44] = O),
            (t[45] = U),
            (t[46] = V))
          : (V = t[46]),
        V
      );
    }
    l.SendReactionsTrayNewsletterContainer = m;
  },
  98,
);
