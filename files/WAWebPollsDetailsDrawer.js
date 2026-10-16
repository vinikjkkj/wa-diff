__d(
  "WAWebPollsDetailsDrawer",
  [
    "fbt",
    "WAWebChatGetters",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebEmojiText.react",
    "WAWebFlatListController",
    "WAWebFormatConfigurationConversation",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebMsgLinks",
    "WAWebPollCreationUtils",
    "WAWebPollOptionsRenderUtils",
    "WAWebPollsOptionSection",
    "WAWebPollsUseResults",
    "WAWebPollsUseStickySortedResults",
    "WAWebPollsUseVoteCount",
    "WAWebSpoilerRevealLogger",
    "WAWebTextSizeUtils",
    "WDSBanner.react",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebIsMsgTrusted",
    "useWAWebMsgValues",
    "useWAWebNewsletterPollsResults",
    "useWAWebPollOptionDecorations",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c,
      d = c || (c = o("react")),
      m = c.useMemo,
      p = {
        pollName: {
          display: "x1lliihq",
          fontSize: "xlm9qay",
          lineHeight: "x19gsaw2",
          wordBreak: "x13faqbe",
          $$css: !0,
        },
      };
    function _(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.associatedMessages,
        r = e.msgKey,
        a = e.onClose,
        i = e.onOpenContactInfo,
        l = e.onViewAllVotes,
        s = e.ref,
        u = o("useWAWebNewsletterPollsResults").useNewsletterPollsResults(r),
        c;
      return (
        t[0] !== n ||
        t[1] !== r ||
        t[2] !== a ||
        t[3] !== i ||
        t[4] !== l ||
        t[5] !== u ||
        t[6] !== s
          ? ((c = d.jsx(g, {
              ref: s,
              mode: "newsletter",
              msgKey: r,
              associatedMessages: n,
              optionsToResults: u,
              onClose: a,
              onOpenContactInfo: i,
              onViewAllVotes: l,
            })),
            (t[0] = n),
            (t[1] = r),
            (t[2] = a),
            (t[3] = i),
            (t[4] = l),
            (t[5] = u),
            (t[6] = s),
            (t[7] = c))
          : (c = t[7]),
        c
      );
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.associatedMessages,
        r = e.msgKey,
        a = e.onClose,
        i = e.onOpenContactInfo,
        l = e.onViewAllVotes,
        s = e.ref,
        u = o("WAWebPollsUseResults").useResults(r),
        c;
      return (
        t[0] !== n ||
        t[1] !== r ||
        t[2] !== a ||
        t[3] !== i ||
        t[4] !== l ||
        t[5] !== u ||
        t[6] !== s
          ? ((c = d.jsx(g, {
              mode: "e2ee",
              ref: s,
              msgKey: r,
              associatedMessages: n,
              optionsToResults: u,
              onClose: a,
              onOpenContactInfo: i,
              onViewAllVotes: l,
            })),
            (t[0] = n),
            (t[1] = r),
            (t[2] = a),
            (t[3] = i),
            (t[4] = l),
            (t[5] = u),
            (t[6] = s),
            (t[7] = c))
          : (c = t[7]),
        c
      );
    }
    function g(e) {
      var t,
        n,
        a = e.associatedMessages,
        i = e.mode,
        l = e.msgKey,
        c = e.onClose,
        _ = e.onOpenContactInfo,
        f = e.onViewAllVotes,
        g = e.optionsToResults,
        h = e.ref,
        y =
          o("WAWebTextSizeUtils").getWAWebTextSizeStyles()
            .pollDetailsQuestionTextSize,
        C = r("useWAWebPollOptionDecorations")(l, g, a),
        b = C.addOptionMsgs,
        v = C.optionsMsgsMap,
        S = o("WAWebPollsUseVoteCount").useVoteCount(l),
        R = o("useWAWebMsgValues").useMsgValues(l, [
          (n = o("WAWebMsgGetters")).getPollName,
          n.getId,
          n.getPollInvalidated,
          n.getPollHideVoterNames,
          n.getSender,
          n.getPollType,
          n.getPollCorrectOptionIndex,
          n.getIsNewsletterMsg,
          n.getIsSentByMe,
          n.getIsSpoiler,
        ]),
        L = R[0],
        E = R[1],
        k = R[2],
        I = R[3],
        T = R[4],
        D = R[5],
        x = R[6],
        $ = R[7],
        P = R[8],
        N = R[9],
        M = o("WAWebFrontendMsgGetters").getChatByMsgKey(l, $),
        w = o("WAWebPollsUseStickySortedResults").useStickySortedResults(g),
        A = r("useWAWebIsMsgTrusted")(l),
        F = o("WAWebSpoilerRevealLogger").getSpoilerRevealContextFromValues(
          l.remote,
          P,
        ),
        O = o("WAWebFormatConfigurationConversation").Conversation({
          links: L == null ? [] : o("WAWebMsgLinks").getLinksFromText(L, T),
          phoneNumbers: [],
          selectable: !0,
          trusted: A,
          fromMe: E.fromMe,
          messageHasSpoiler: N,
          spoilerRevealContext: F,
        }),
        B = m(function () {
          return new (r("WAWebFlatListController"))();
        }, []),
        W = o("WAWebChatGetters").getIsGroup(M)
          ? (t = M.groupMetadata) == null
            ? void 0
            : t.participants.length
          : 0;
      return d.jsxs(
        r("WAWebDrawer.react"),
        {
          ref: h,
          theme: "striped",
          testid: "poll-details-drawer",
          tsNavigationData: {
            surface: "polls-details",
            viewName: "polls-details",
          },
          children: [
            d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
              title:
                D === o("WAWebPollCreationUtils").PollType.QUIZ
                  ? s._(/*BTDS*/ "Quiz responses")
                  : s._(/*BTDS*/ "Poll details"),
              type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
              onCancel: c,
              focusBackOrCancel: !0,
            }),
            d.jsxs(r("WAWebDrawerBody.react"), {
              flatListControllers: [B],
              children: [
                d.jsxs(r("WAWebDrawerSection.react"), {
                  theme: "no-padding",
                  children: [
                    k &&
                      d.jsx("div", {
                        className: "x1380le5 xefnzgg x1uvdrpn x14mko6t",
                        children: d.jsx(r("WDSBanner.react"), {
                          type: "warning",
                          body: s._(
                            /*BTDS*/ "Results only show votes made before you left the group.",
                          ),
                          testid: "invalid-poll-details-view-warning",
                        }),
                      }),
                    d.jsxs("div", {
                      className: "x1h678fw xv6tirj x1m4z3lf x1evaxtz",
                      children: [
                        d.jsx(o("WAWebEmojiText.react").EmojiText, {
                          text: L,
                          selectable: !0,
                          formatters: O,
                          className: (u || (u = r("stylex")))(p.pollName, y),
                        }),
                        W != null &&
                          W > 1 &&
                          d.jsx("span", {
                            className: "x1nxh6w3 x1fc57z9 x1rg5ohu x1380le5",
                            children: s._(
                              /*BTDS*/ '_j{"*":"{vote_count} of {group_length} members voted","_1":"{vote_count} of 1 member voted"}',
                              [
                                s._plural(W, "group_length"),
                                s._param("vote_count", S),
                              ],
                            ),
                          }),
                      ],
                    }),
                  ],
                }),
                w.map(function (e) {
                  var t = e[0],
                    n = e[1];
                  return d.jsx(
                    r("WAWebPollsOptionSection"),
                    {
                      associatedMsg: v.get(t),
                      addOptionMsg: b.get(t),
                      mode: i,
                      option: t,
                      result: n,
                      isPollFromMe: E.fromMe,
                      messageHasSpoiler: N,
                      spoilerRevealContext: F,
                      links: A
                        ? o("WAWebMsgLinks").getLinksFromText(t.name, T)
                        : null,
                      trusted: A,
                      onViewAllVotes: function () {
                        f(t.localId);
                      },
                      onOpenContactInfo: _,
                      flatListController: B,
                      testid: "poll-details-option-" + t.localId,
                      isCorrectOption: o(
                        "WAWebPollOptionsRenderUtils",
                      ).getIsCorrectOption(x, t),
                      hideVoterNames: I === !0,
                    },
                    t.localId,
                  );
                }),
              ],
            }),
          ],
        },
        "poll-details-drawer",
      );
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(t) {
      var n = o("react-compiler-runtime").c(6),
        r,
        a;
      n[0] !== t
        ? ((a = t.ref),
          (r = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = r),
          (n[2] = a))
        : ((r = n[1]), (a = n[2]));
      var i;
      return (
        n[3] !== r || n[4] !== a
          ? ((i = r.msgKey.remote.isNewsletter()
              ? d.jsx(_, babelHelpers.extends({}, r, { ref: a }))
              : d.jsx(f, babelHelpers.extends({}, r, { ref: a }))),
            (n[3] = r),
            (n[4] = a),
            (n[5] = i))
          : (i = n[5]),
        i
      );
    }
    var y = h;
    l.DetailsDrawer = y;
  },
  226,
);
