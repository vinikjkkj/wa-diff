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
    "WAWebFormatConfiguration",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebMsgLinks",
    "WAWebMsgModelPropUtils",
    "WAWebPollCreationUtils",
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
    "useWAWebPollAssociatedMessagesMap",
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
      var t = o("react-compiler-runtime").c(7),
        n = e.associatedMessages,
        r = e.msg,
        a = e.onClose,
        i = e.onViewAllVotes,
        l = e.ref,
        s = o("useWAWebNewsletterPollsResults").useNewsletterPollsResults(r),
        u;
      return (
        t[0] !== n ||
        t[1] !== r ||
        t[2] !== a ||
        t[3] !== i ||
        t[4] !== s ||
        t[5] !== l
          ? ((u = d.jsx(g, {
              ref: l,
              mode: "newsletter",
              msg: r,
              associatedMessages: n,
              optionsToResults: s,
              onClose: a,
              onViewAllVotes: i,
            })),
            (t[0] = n),
            (t[1] = r),
            (t[2] = a),
            (t[3] = i),
            (t[4] = s),
            (t[5] = l),
            (t[6] = u))
          : (u = t[6]),
        u
      );
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.associatedMessages,
        r = e.msg,
        a = e.onClose,
        i = e.onViewAllVotes,
        l = e.ref,
        s = o("WAWebPollsUseResults").useResults(r),
        u;
      return (
        t[0] !== n ||
        t[1] !== r ||
        t[2] !== a ||
        t[3] !== i ||
        t[4] !== s ||
        t[5] !== l
          ? ((u = d.jsx(g, {
              mode: "e2ee",
              ref: l,
              msg: r,
              associatedMessages: n,
              optionsToResults: s,
              onClose: a,
              onViewAllVotes: i,
            })),
            (t[0] = n),
            (t[1] = r),
            (t[2] = a),
            (t[3] = i),
            (t[4] = s),
            (t[5] = l),
            (t[6] = u))
          : (u = t[6]),
        u
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
        f = e.onViewAllVotes,
        g = e.optionsToResults,
        h = e.ref,
        y =
          o("WAWebTextSizeUtils").getWAWebTextSizeStyles()
            .pollDetailsQuestionTextSize,
        C = o("useWAWebPollAssociatedMessagesMap").usePollAssociatedMessagesMap(
          Array.from(g.keys()),
          i,
        ),
        b = o("WAWebPollsUseVoteCount").useVoteCount(c),
        v = o("useWAWebMsgValues").useMsgValues(c.id, [
          (a = o("WAWebMsgGetters")).getPollName,
          a.getId,
          a.getPollInvalidated,
          a.getPollHideVoterNames,
        ]),
        S = v[0],
        R = v[1],
        L = v[2],
        E = v[3],
        k = o("WAWebFrontendMsgGetters").getChat(c.unsafe()),
        I = o("WAWebPollsUseStickySortedResults").useStickySortedResults(g),
        T = o("WAWebMsgModelPropUtils").isTrusted(c.unsafe()),
        D = o("WAWebFormatConfiguration").Conversation({
          links:
            (t = o("WAWebMsgLinks").getLinksFromMsg(c.unsafe())) != null
              ? t
              : [],
          phoneNumbers: [],
          selectable: !0,
          trusted: T,
          fromMe: R.fromMe,
        }),
        x = m(function () {
          return new (r("WAWebFlatListController"))();
        }, []),
        $ = o("WAWebChatGetters").getIsGroup(k)
          ? (n = k.groupMetadata) == null
            ? void 0
            : n.participants.length
          : 0;
      return d.jsxs(
        r("WAWebDrawer.react"),
        {
          ref: h,
          theme: "striped",
          testid: void 0,
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
              rtlFixIfOnDarwin: !0,
              focusBackOrCancel: !0,
            }),
            d.jsxs(r("WAWebDrawerBody.react"), {
              flatListControllers: [x],
              children: [
                d.jsxs(r("WAWebDrawerSection.react"), {
                  theme: "no-padding",
                  children: [
                    L &&
                      d.jsx("div", {
                        className: "x1380le5 xefnzgg x1uvdrpn x14mko6t",
                        children: d.jsx(r("WDSBanner.react"), {
                          type: "warning",
                          body: s._(
                            /*BTDS*/ "Results only show votes made before you left the group.",
                          ),
                          testid: void 0,
                        }),
                      }),
                    d.jsxs("div", {
                      className: "x1h678fw xv6tirj x1m4z3lf x1evaxtz",
                      children: [
                        d.jsx(o("WAWebEmojiText.react").EmojiText, {
                          text: S,
                          selectable: !0,
                          formatters: D,
                          className: (u || (u = r("stylex")))(p.pollName, y),
                        }),
                        $ != null &&
                          $ > 1 &&
                          d.jsx("span", {
                            className: "x1nxh6w3 x1fc57z9 x1rg5ohu x1380le5",
                            children: s._(
                              /*BTDS*/ '_j{"*":"{vote_count} of {group_length} members voted","_1":"{vote_count} of 1 member voted"}',
                              [
                                s._plural($, "group_length"),
                                s._param("vote_count", b),
                              ],
                            ),
                          }),
                      ],
                    }),
                  ],
                }),
                I.map(function (e) {
                  var t = e[0],
                    n = e[1];
                  return d.jsx(
                    r("WAWebPollsOptionSection"),
                    {
                      associatedMsg: C.get(t),
                      mode: l,
                      option: t,
                      result: n,
                      isPollFromMe: R.fromMe,
                      links: T
                        ? o("WAWebMsgLinks").getPollOptionLinks(c.unsafe(), t)
                        : null,
                      trusted: T,
                      onViewAllVotes: function () {
                        f(t.localId);
                      },
                      flatListController: x,
                      testid: void 0,
                      isCorrectOption:
                        c.correctOptionIndex == null
                          ? null
                          : t.localId === c.correctOptionIndex,
                      hideVoterNames: E === !0,
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
