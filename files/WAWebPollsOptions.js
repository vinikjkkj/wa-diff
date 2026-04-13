__d(
  "WAWebPollsOptions",
  [
    "JSResourceForInteraction",
    "WAWebFrontendMsgGetters",
    "WAWebNewsletterMembershipUtil",
    "WAWebPollCreationUtils",
    "WAWebPollsOptionRow",
    "react",
    "react-compiler-runtime",
    "useWAWebPollAssociatedMessagesMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useMemo;
    function c(e) {
      var t = o("react-compiler-runtime").c(30),
        n = e.associatedMessages,
        a = e.checkedOptionLocalIds,
        i = e.correctOptionIndex,
        l = e.isPollEnded,
        u = e.isPollInvalid,
        c = e.msg,
        m = e.onDetailImageClick,
        p = e.onOptionToggle,
        _ = e.onPhotoThumbClick,
        f = e.options,
        g = e.readonly,
        h = e.selectableOptionsCount,
        y = e.trusted,
        C = e.view,
        b;
      t[0] !== f
        ? ((b = Array.from(f.entries())), (t[0] = f), (t[1] = b))
        : (b = t[1]);
      var v = b,
        S;
      t[2] !== f
        ? ((S = Array.from(f.keys())), (t[2] = f), (t[3] = S))
        : (S = t[3]);
      var R = S,
        L = o("useWAWebPollAssociatedMessagesMap").usePollAssociatedMessagesMap(
          R,
          n,
        ),
        E = n.length > 0 && n.length > L.size,
        k;
      t[4] !== n
        ? ((k = n.map(d).filter(Boolean)), (t[4] = n), (t[5] = k))
        : (k = t[5]);
      var I = k,
        T;
      if (t[6] !== c) {
        var D = o("WAWebFrontendMsgGetters").getChat(c.unsafe());
        ((T = o("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(
          D.newsletterMetadata,
        )),
          (t[6] = c),
          (t[7] = T));
      } else T = t[7];
      var x = T,
        $ =
          c.pollType === o("WAWebPollCreationUtils").PollType.QUIZ &&
          !x &&
          a.size === 0,
        P;
      t[8] !== c.pollType
        ? ((P =
            c.pollType === o("WAWebPollCreationUtils").PollType.QUIZ
              ? r("JSResourceForInteraction")("WAWebConfettiAnimationData")
                  .__setRef("WAWebPollsOptions")
                  .load()
              : null),
          (t[8] = c.pollType),
          (t[9] = P))
        : (P = t[9]);
      var N = P,
        M;
      return (
        t[10] !== N ||
        t[11] !== a ||
        t[12] !== i ||
        t[13] !== v ||
        t[14] !== $ ||
        t[15] !== x ||
        t[16] !== l ||
        t[17] !== u ||
        t[18] !== E ||
        t[19] !== I ||
        t[20] !== c ||
        t[21] !== m ||
        t[22] !== p ||
        t[23] !== _ ||
        t[24] !== L ||
        t[25] !== g ||
        t[26] !== h ||
        t[27] !== y ||
        t[28] !== C
          ? ((M = s.jsx(s.Fragment, {
              children: v.map(function (e, t) {
                var n = e[0],
                  o = e[1],
                  d = a.has(n.localId),
                  f = !u && !g && (d || h === 1 || a.size < h),
                  b = i != null ? i === t : null;
                return s.jsx(
                  "div",
                  {
                    children: s.jsx(r("WAWebPollsOptionRow"), {
                      albumMsgs: I,
                      msg: c,
                      associatedMsg: L.get(n),
                      option: n,
                      result: o,
                      index: t,
                      onOptionToggle: p,
                      onDetailImageClick: m,
                      checked: d,
                      selectable: f,
                      trusted: y,
                      readonly: g,
                      isPollEnded: l,
                      onPhotoThumbClick: _,
                      view: C,
                      loadingPhotoThumb: E,
                      hideResults: $,
                      isCorrectOption: b,
                      animationPromise: N,
                      isAdminOrOwner: x,
                    }),
                  },
                  t,
                );
              }),
            })),
            (t[10] = N),
            (t[11] = a),
            (t[12] = i),
            (t[13] = v),
            (t[14] = $),
            (t[15] = x),
            (t[16] = l),
            (t[17] = u),
            (t[18] = E),
            (t[19] = I),
            (t[20] = c),
            (t[21] = m),
            (t[22] = p),
            (t[23] = _),
            (t[24] = L),
            (t[25] = g),
            (t[26] = h),
            (t[27] = y),
            (t[28] = C),
            (t[29] = M))
          : (M = t[29]),
        M
      );
    }
    function d(e) {
      return o("WAWebFrontendMsgGetters").getAsAlbumAsset(e.unsafe());
    }
    l.default = c;
  },
  98,
);
