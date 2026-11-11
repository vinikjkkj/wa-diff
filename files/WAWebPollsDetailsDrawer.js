__d(
  "WAWebPollsDetailsDrawer",
  [
    "fbt",
    "WAWebCastToPollCreationMsg",
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
      var t = o("react-compiler-runtime").c(9),
        n = e.associatedMessages,
        r = e.msgKey,
        a = e.onClose,
        i = e.onOpenContactInfo,
        l = e.onOpenGroupAgentProfile,
        s = e.onViewAllVotes,
        u = e.ref,
        c = o("useWAWebNewsletterPollsResults").useNewsletterPollsResults(r),
        m;
      return (
        t[0] !== n ||
        t[1] !== r ||
        t[2] !== a ||
        t[3] !== i ||
        t[4] !== l ||
        t[5] !== s ||
        t[6] !== c ||
        t[7] !== u
          ? ((m = d.jsx(g, {
              ref: u,
              mode: "newsletter",
              msgKey: r,
              associatedMessages: n,
              optionsToResults: c,
              onClose: a,
              onOpenContactInfo: i,
              onOpenGroupAgentProfile: l,
              onViewAllVotes: s,
            })),
            (t[0] = n),
            (t[1] = r),
            (t[2] = a),
            (t[3] = i),
            (t[4] = l),
            (t[5] = s),
            (t[6] = c),
            (t[7] = u),
            (t[8] = m))
          : (m = t[8]),
        m
      );
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.associatedMessages,
        r = e.msgKey,
        a = e.onClose,
        i = e.onOpenContactInfo,
        l = e.onOpenGroupAgentProfile,
        s = e.onViewAllVotes,
        u = e.ref,
        c = o("WAWebPollsUseResults").useResults(r),
        m;
      return (
        t[0] !== n ||
        t[1] !== r ||
        t[2] !== a ||
        t[3] !== i ||
        t[4] !== l ||
        t[5] !== s ||
        t[6] !== c ||
        t[7] !== u
          ? ((m = d.jsx(g, {
              mode: "e2ee",
              ref: u,
              msgKey: r,
              associatedMessages: n,
              optionsToResults: c,
              onClose: a,
              onOpenContactInfo: i,
              onOpenGroupAgentProfile: l,
              onViewAllVotes: s,
            })),
            (t[0] = n),
            (t[1] = r),
            (t[2] = a),
            (t[3] = i),
            (t[4] = l),
            (t[5] = s),
            (t[6] = c),
            (t[7] = u),
            (t[8] = m))
          : (m = t[8]),
        m
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
        f = e.onOpenGroupAgentProfile,
        g = e.onViewAllVotes,
        h = e.optionsToResults,
        y = e.ref,
        C =
          o("WAWebTextSizeUtils").getWAWebTextSizeStyles()
            .pollDetailsQuestionTextSize,
        b = r("useWAWebPollOptionDecorations")(l, h, a),
        v = b.addOptionMsgs,
        S = b.optionsMsgsMap,
        R = o("WAWebPollsUseVoteCount").useVoteCount(l),
        L = o("useWAWebMsgValues").useMsgValues(
          l,
          r("WAWebCastToPollCreationMsg"),
          [
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
          ],
        ),
        E = L[0],
        k = L[1],
        I = L[2],
        T = L[3],
        D = L[4],
        x = L[5],
        $ = L[6],
        P = L[7],
        N = L[8],
        M = L[9],
        w = o("WAWebFrontendMsgGetters").getChatByMsgKey(l, P),
        A = o("WAWebPollsUseStickySortedResults").useStickySortedResults(h),
        F = r("useWAWebIsMsgTrusted")(l),
        O = o("WAWebSpoilerRevealLogger").getSpoilerRevealContextFromValues(
          l.remote,
          N,
        ),
        B = o("WAWebFormatConfigurationConversation").Conversation({
          links: E == null ? [] : o("WAWebMsgLinks").getLinksFromText(E, D),
          phoneNumbers: [],
          selectable: !0,
          trusted: F,
          fromMe: k.fromMe,
          messageHasSpoiler: M,
          spoilerRevealContext: O,
        }),
        W = m(function () {
          return new (r("WAWebFlatListController"))();
        }, []),
        q = o("WAWebChatGetters").getIsGroup(w)
          ? (t = w.groupMetadata) == null
            ? void 0
            : t.participants.length
          : 0;
      return d.jsxs(
        r("WAWebDrawer.react"),
        {
          ref: y,
          theme: "striped",
          testid: "poll-details-drawer",
          tsNavigationData: {
            surface: "polls-details",
            viewName: "polls-details",
          },
          children: [
            d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
              title:
                x === o("WAWebPollCreationUtils").PollType.QUIZ
                  ? s._(/*BTDS*/ "Quiz responses")
                  : s._(/*BTDS*/ "Poll details"),
              type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
              onCancel: c,
              focusBackOrCancel: !0,
            }),
            d.jsxs(r("WAWebDrawerBody.react"), {
              flatListControllers: [W],
              children: [
                d.jsxs(r("WAWebDrawerSection.react"), {
                  theme: "no-padding",
                  children: [
                    I &&
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
                          text: E,
                          selectable: !0,
                          formatters: B,
                          className: (u || (u = r("stylex")))(p.pollName, C),
                        }),
                        q != null &&
                          q > 1 &&
                          d.jsx("span", {
                            className: "x1nxh6w3 x1fc57z9 x1rg5ohu x1380le5",
                            children: s._(
                              /*BTDS*/ '_j{"*":"{vote_count} of {group_length} members voted","_1":"{vote_count} of 1 member voted"}',
                              [
                                s._plural(q, "group_length"),
                                s._param("vote_count", R),
                              ],
                            ),
                          }),
                      ],
                    }),
                  ],
                }),
                A.map(function (e) {
                  var t = e[0],
                    n = e[1];
                  return d.jsx(
                    r("WAWebPollsOptionSection"),
                    {
                      associatedMsg: S.get(t),
                      addOptionMsg: v.get(t),
                      mode: i,
                      option: t,
                      result: n,
                      isPollFromMe: k.fromMe,
                      messageHasSpoiler: M,
                      spoilerRevealContext: O,
                      links: F
                        ? o("WAWebMsgLinks").getLinksFromText(t.name, D)
                        : null,
                      trusted: F,
                      onViewAllVotes: function () {
                        g(t.localId);
                      },
                      onOpenContactInfo: _,
                      onOpenGroupAgentProfile: f,
                      flatListController: W,
                      testid: "poll-details-option-" + t.localId,
                      isCorrectOption: o(
                        "WAWebPollOptionsRenderUtils",
                      ).getIsCorrectOption($, t),
                      hideVoterNames: T === !0,
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
    l.DetailsDrawer = h;
  },
  226,
);
