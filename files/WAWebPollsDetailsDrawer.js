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
    "WAWebMsgModelPropUtils",
    "WAWebPollCreationUtils",
    "WAWebPollOptionsRenderUtils",
    "WAWebPollsOptionSection",
    "WAWebPollsUseResults",
    "WAWebPollsUseStickySortedResults",
    "WAWebPollsUseVoteCount",
    "WAWebTextSizeUtils",
    "WDSBanner.react",
    "react",
    "react-compiler-runtime",
    "stylex",
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
        r = e.msg,
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
              msg: r,
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
        r = e.msg,
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
              msg: r,
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
        a,
        i = e.associatedMessages,
        l = e.mode,
        c = e.msg,
        _ = e.onClose,
        f = e.onOpenContactInfo,
        g = e.onViewAllVotes,
        h = e.optionsToResults,
        y = e.ref,
        C =
          o("WAWebTextSizeUtils").getWAWebTextSizeStyles()
            .pollDetailsQuestionTextSize,
        b = r("useWAWebPollOptionDecorations")(c.id, h, i),
        v = b.addOptionMsgs,
        S = b.optionsMsgsMap,
        R = o("WAWebPollsUseVoteCount").useVoteCount(c),
        L = o("useWAWebMsgValues").useMsgValues(c.id, [
          (a = o("WAWebMsgGetters")).getPollName,
          a.getId,
          a.getPollInvalidated,
          a.getPollHideVoterNames,
        ]),
        E = L[0],
        k = L[1],
        I = L[2],
        T = L[3],
        D = o("WAWebFrontendMsgGetters").getChat(c.unsafe()),
        x = o("WAWebPollsUseStickySortedResults").useStickySortedResults(h),
        $ = o("WAWebMsgModelPropUtils").isTrusted(c.unsafe()),
        P = o("WAWebFormatConfigurationConversation").Conversation({
          links:
            (t = o("WAWebMsgLinks").getLinksFromMsg(c.unsafe())) != null
              ? t
              : [],
          phoneNumbers: [],
          selectable: !0,
          trusted: $,
          fromMe: k.fromMe,
        }),
        N = m(function () {
          return new (r("WAWebFlatListController"))();
        }, []),
        M = o("WAWebChatGetters").getIsGroup(D)
          ? (n = D.groupMetadata) == null
            ? void 0
            : n.participants.length
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
                c.pollType === o("WAWebPollCreationUtils").PollType.QUIZ
                  ? s._(/*BTDS*/ "Quiz responses")
                  : s._(/*BTDS*/ "Poll details"),
              type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
              onCancel: _,
              focusBackOrCancel: !0,
            }),
            d.jsxs(r("WAWebDrawerBody.react"), {
              flatListControllers: [N],
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
                          formatters: P,
                          className: (u || (u = r("stylex")))(p.pollName, C),
                        }),
                        M != null &&
                          M > 1 &&
                          d.jsx("span", {
                            className: "x1nxh6w3 x1fc57z9 x1rg5ohu x1380le5",
                            children: s._(
                              /*BTDS*/ '_j{"*":"{vote_count} of {group_length} members voted","_1":"{vote_count} of 1 member voted"}',
                              [
                                s._plural(M, "group_length"),
                                s._param("vote_count", R),
                              ],
                            ),
                          }),
                      ],
                    }),
                  ],
                }),
                x.map(function (e) {
                  var t = e[0],
                    n = e[1];
                  return d.jsx(
                    r("WAWebPollsOptionSection"),
                    {
                      associatedMsg: S.get(t),
                      addOptionMsg: v.get(t),
                      mode: l,
                      option: t,
                      result: n,
                      isPollFromMe: k.fromMe,
                      links: $
                        ? o("WAWebMsgLinks").getPollOptionLinks(c.unsafe(), t)
                        : null,
                      trusted: $,
                      onViewAllVotes: function () {
                        g(t.localId);
                      },
                      onOpenContactInfo: f,
                      flatListController: N,
                      testid: "poll-details-option-" + t.localId,
                      isCorrectOption: o(
                        "WAWebPollOptionsRenderUtils",
                      ).getIsCorrectOption(c.correctOptionIndex, t),
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
          ? ((i = o("WAWebMsgGetters").getIsNewsletterMsg(r.msg)
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
