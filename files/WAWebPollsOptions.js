__d(
  "WAWebPollsOptions",
  [
    "JSResourceForInteraction",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebPollCreationUtils",
    "WAWebPollOptionsRenderUtils",
    "WAWebPollsOptionRow",
    "compactMap",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues",
    "useWAWebPollAssociatedMessagesMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useMemo;
    function c(e) {
      var t = o("react-compiler-runtime").c(33),
        n = e.associatedMessages,
        a = e.checkedOptionLocalIds,
        i = e.correctOptionIndex,
        l = e.isPollEnded,
        u = e.isPollInvalid,
        c = e.msgKey,
        m = e.onDetailImageClick,
        p = e.onOptionToggle,
        _ = e.onPhotoThumbClick,
        f = e.options,
        g = e.readonly,
        h = e.selectableOptionsCount,
        y = e.trusted,
        C = e.view,
        b;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = [
            o("WAWebMsgGetters").getPollType,
            o("WAWebMsgGetters").getIsNewsletterMsg,
          ]),
          (t[0] = b))
        : (b = t[0]);
      var v = o("useWAWebMsgValues").useMsgValues(c, b),
        S = v[0],
        R = v[1],
        L;
      t[1] !== f
        ? ((L = Array.from(f.entries())), (t[1] = f), (t[2] = L))
        : (L = t[2]);
      var E = L,
        k;
      t[3] !== f
        ? ((k = Array.from(f.keys())), (t[3] = f), (t[4] = k))
        : (k = t[4]);
      var I = k,
        T = o("useWAWebPollAssociatedMessagesMap").usePollAssociatedMessagesMap(
          I,
          n,
        ),
        D = n.length > 0 && n.length > T.size,
        x;
      t[5] !== n
        ? ((x = r("compactMap")(n, d)), (t[5] = n), (t[6] = x))
        : (x = t[6]);
      var $ = x,
        P;
      if (t[7] !== R || t[8] !== c) {
        var N,
          M,
          w = o("WAWebFrontendMsgGetters").getMaybeChatByMsgKey(c, R);
        ((P =
          (N =
            w == null || (M = w.newsletterMetadata) == null
              ? void 0
              : M.iAmAdminOrOwner()) != null
            ? N
            : !1),
          (t[7] = R),
          (t[8] = c),
          (t[9] = P));
      } else P = t[9];
      var A = P,
        F =
          S === o("WAWebPollCreationUtils").PollType.QUIZ && !A && a.size === 0,
        O;
      t[10] !== S
        ? ((O =
            S === o("WAWebPollCreationUtils").PollType.QUIZ
              ? r("JSResourceForInteraction")("WAWebConfettiAnimationData")
                  .__setRef("WAWebPollsOptions")
                  .load()
              : null),
          (t[10] = S),
          (t[11] = O))
        : (O = t[11]);
      var B = O,
        W;
      return (
        t[12] !== B ||
        t[13] !== a ||
        t[14] !== i ||
        t[15] !== E ||
        t[16] !== F ||
        t[17] !== A ||
        t[18] !== l ||
        t[19] !== u ||
        t[20] !== D ||
        t[21] !== $ ||
        t[22] !== c ||
        t[23] !== m ||
        t[24] !== p ||
        t[25] !== _ ||
        t[26] !== T ||
        t[27] !== S ||
        t[28] !== g ||
        t[29] !== h ||
        t[30] !== y ||
        t[31] !== C
          ? ((W = s.jsx(s.Fragment, {
              children: E.map(function (e, t) {
                var n = e[0],
                  d = e[1],
                  f = a.has(n.localId),
                  b =
                    !u &&
                    !g &&
                    (f || h === 1 || a.size < h) &&
                    (S !== o("WAWebPollCreationUtils").PollType.QUIZ ||
                      a.size === 0),
                  v = o("WAWebPollOptionsRenderUtils").getIsCorrectOption(i, n);
                return s.jsx(
                  "div",
                  {
                    children: s.jsx(r("WAWebPollsOptionRow"), {
                      albumMsgs: $,
                      msgKey: c,
                      associatedMsg: T.get(n),
                      option: n,
                      result: d,
                      index: t,
                      onOptionToggle: p,
                      onDetailImageClick: m,
                      checked: f,
                      selectable: b,
                      trusted: y,
                      readonly: g,
                      isPollEnded: l,
                      onPhotoThumbClick: _,
                      view: C,
                      loadingPhotoThumb: D,
                      hideResults: F,
                      isCorrectOption: v,
                      animationPromise: B,
                      isAdminOrOwner: A,
                    }),
                  },
                  t,
                );
              }),
            })),
            (t[12] = B),
            (t[13] = a),
            (t[14] = i),
            (t[15] = E),
            (t[16] = F),
            (t[17] = A),
            (t[18] = l),
            (t[19] = u),
            (t[20] = D),
            (t[21] = $),
            (t[22] = c),
            (t[23] = m),
            (t[24] = p),
            (t[25] = _),
            (t[26] = T),
            (t[27] = S),
            (t[28] = g),
            (t[29] = h),
            (t[30] = y),
            (t[31] = C),
            (t[32] = W))
          : (W = t[32]),
        W
      );
    }
    function d(e) {
      return o("WAWebFrontendMsgGetters").getAsAlbumAsset(e.unsafe());
    }
    l.default = c;
  },
  98,
);
