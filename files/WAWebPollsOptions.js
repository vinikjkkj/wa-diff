__d(
  "WAWebPollsOptions",
  [
    "JSResourceForInteraction",
    "WAWebFrontendMsgGetters",
    "WAWebMsgCasts",
    "WAWebMsgGetters",
    "WAWebPollCreationUtils",
    "WAWebPollOptionsRenderUtils",
    "WAWebPollsOptionRow",
    "compactMap",
    "react",
    "useWAWebMsgValues",
    "useWAWebPollAssociatedMessagesMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useMemo;
    function c(e) {
      var t,
        n,
        a = e.associatedMessages,
        i = e.checkedOptionLocalIds,
        l = e.correctOptionIndex,
        c = e.isPollEnded,
        d = e.isPollInvalid,
        m = e.msgKey,
        p = e.onDetailImageClick,
        _ = e.onOptionToggle,
        f = e.onPhotoThumbClick,
        g = e.options,
        h = e.readonly,
        y = e.selectableOptionsCount,
        C = e.trusted,
        b = e.view,
        v = o("useWAWebMsgValues").useMsgValues(
          m,
          o("WAWebMsgCasts").castToPollMsg,
          [
            o("WAWebMsgGetters").getPollType,
            o("WAWebMsgGetters").getIsNewsletterMsg,
          ],
        ),
        S = v[0],
        R = v[1],
        L = u(
          function () {
            return Array.from(g.entries());
          },
          [g],
        ),
        E = u(
          function () {
            return Array.from(g.keys());
          },
          [g],
        ),
        k = o("useWAWebPollAssociatedMessagesMap").usePollAssociatedMessagesMap(
          E,
          a,
        ),
        I = u(
          function () {
            return a.length > 0 && a.length > k.size;
          },
          [a.length, k.size],
        ),
        T = u(
          function () {
            return r("compactMap")(a, function (e) {
              return o("WAWebFrontendMsgGetters").getAsAlbumAsset(e.unsafe());
            });
          },
          [a],
        ),
        D = o("WAWebFrontendMsgGetters").getMaybeChatByMsgKey(m, R),
        x =
          (t =
            D == null || (n = D.newsletterMetadata) == null
              ? void 0
              : n.iAmAdminOrOwner()) != null
            ? t
            : !1,
        $ =
          S === o("WAWebPollCreationUtils").PollType.QUIZ && !x && i.size === 0,
        P =
          S === o("WAWebPollCreationUtils").PollType.QUIZ
            ? r("JSResourceForInteraction")("WAWebConfettiAnimationData")
                .__setRef("WAWebPollsOptions")
                .load()
            : null;
      return s.jsx(s.Fragment, {
        children: L.map(function (e, t) {
          var n = e[0],
            a = e[1],
            u = i.has(n.localId),
            g =
              !d &&
              !h &&
              (u || y === 1 || i.size < y) &&
              (S !== o("WAWebPollCreationUtils").PollType.QUIZ || i.size === 0),
            v = o("WAWebPollOptionsRenderUtils").getIsCorrectOption(l, n);
          return s.jsx(
            "div",
            {
              children: s.jsx(r("WAWebPollsOptionRow"), {
                albumMsgs: T,
                msgKey: m,
                associatedMsg: k.get(n),
                option: n,
                result: a,
                index: t,
                onOptionToggle: _,
                onDetailImageClick: p,
                checked: u,
                selectable: g,
                trusted: C,
                readonly: h,
                isPollEnded: c,
                onPhotoThumbClick: f,
                view: b,
                loadingPhotoThumb: I,
                hideResults: $,
                isCorrectOption: v,
                animationPromise: P,
                isAdminOrOwner: x,
              }),
            },
            t,
          );
        }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
