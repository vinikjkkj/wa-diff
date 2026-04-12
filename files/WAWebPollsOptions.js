__d(
  "WAWebPollsOptions",
  [
    "JSResourceForInteraction",
    "WAWebFrontendMsgGetters",
    "WAWebNewsletterMembershipUtil",
    "WAWebPollCreationUtils",
    "WAWebPollsOptionRow",
    "react",
    "useWAWebPollAssociatedMessagesMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useMemo;
    function c(e) {
      var t = e.associatedMessages,
        n = e.checkedOptionLocalIds,
        a = e.correctOptionIndex,
        i = e.isPollEnded,
        l = e.isPollInvalid,
        c = e.msg,
        d = e.onDetailImageClick,
        m = e.onOptionToggle,
        p = e.onPhotoThumbClick,
        _ = e.options,
        f = e.readonly,
        g = e.selectableOptionsCount,
        h = e.trusted,
        y = e.view,
        C = u(
          function () {
            return Array.from(_.entries());
          },
          [_],
        ),
        b = u(
          function () {
            return Array.from(_.keys());
          },
          [_],
        ),
        v = o("useWAWebPollAssociatedMessagesMap").usePollAssociatedMessagesMap(
          b,
          t,
        ),
        S = u(
          function () {
            return t.length > 0 && t.length > v.size;
          },
          [t.length, v.size],
        ),
        R = u(
          function () {
            return t
              .map(function (e) {
                return o("WAWebFrontendMsgGetters").getAsAlbumAsset(e.unsafe());
              })
              .filter(Boolean);
          },
          [t],
        ),
        L = o("WAWebFrontendMsgGetters").getChat(c.unsafe()),
        E = o("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(
          L.newsletterMetadata,
        ),
        k =
          c.pollType === o("WAWebPollCreationUtils").PollType.QUIZ &&
          !E &&
          n.size === 0,
        I =
          c.pollType === o("WAWebPollCreationUtils").PollType.QUIZ
            ? r("JSResourceForInteraction")("WAWebConfettiAnimationData")
                .__setRef("WAWebPollsOptions")
                .load()
            : null;
      return s.jsx(s.Fragment, {
        children: C.map(function (e, t) {
          var o = e[0],
            u = e[1],
            _ = n.has(o.localId),
            C = !l && !f && (_ || g === 1 || n.size < g),
            b = a != null ? a === t : null;
          return s.jsx(
            "div",
            {
              children: s.jsx(r("WAWebPollsOptionRow"), {
                albumMsgs: R,
                msg: c,
                associatedMsg: v.get(o),
                option: o,
                result: u,
                index: t,
                onOptionToggle: m,
                onDetailImageClick: d,
                checked: _,
                selectable: C,
                trusted: h,
                readonly: f,
                isPollEnded: i,
                onPhotoThumbClick: p,
                view: y,
                loadingPhotoThumb: S,
                hideResults: k,
                isCorrectOption: b,
                animationPromise: I,
                isAdminOrOwner: E,
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
