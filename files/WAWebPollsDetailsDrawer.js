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
        u = o("useWAWebNewsletterPollsResults").useNewsletterPollsResults(r.id),
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
        u = o("WAWebPollsUseResults").useResults(r.id),
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
        a = e.associatedMessages,
        i = e.mode,
        l = e.msg,
        c = e.onClose,
        _ = e.onOpenContactInfo,
        f = e.onViewAllVotes,
        g = e.optionsToResults,
        h = e.ref,
        y =
          o("WAWebTextSizeUtils").getWAWebTextSizeStyles()
            .pollDetailsQuestionTextSize,
        C = r("useWAWebPollOptionDecorations")(l.id, g, a),
        b = C.addOptionMsgs,
        v = C.optionsMsgsMap,
        S = o("WAWebPollsUseVoteCount").useVoteCount(l),
        R = o("useWAWebMsgValues").useMsgValues(l.id, [
          (n = o("WAWebMsgGetters")).getPollName,
          n.getId,
          n.getPollInvalidated,
          n.getPollHideVoterNames,
          n.getSender,
        ]),
        L = R[0],
        E = R[1],
        k = R[2],
        I = R[3],
        T = R[4],
        D = o("WAWebFrontendMsgGetters").getChat(l.unsafe()),
        x = o("WAWebPollsUseStickySortedResults").useStickySortedResults(g),
        $ = o("WAWebMsgModelPropUtils").isTrusted(l.unsafe()),
        P = o("WAWebFormatConfigurationConversation").Conversation({
          links: L == null ? [] : o("WAWebMsgLinks").getLinksFromText(L, T),
          phoneNumbers: [],
          selectable: !0,
          trusted: $,
          fromMe: E.fromMe,
        }),
        N = m(function () {
          return new (r("WAWebFlatListController"))();
        }, []),
        M = o("WAWebChatGetters").getIsGroup(D)
          ? (t = D.groupMetadata) == null
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
                l.pollType === o("WAWebPollCreationUtils").PollType.QUIZ
                  ? s._(/*BTDS*/ "Quiz responses")
                  : s._(/*BTDS*/ "Poll details"),
              type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
              onCancel: c,
              focusBackOrCancel: !0,
            }),
            d.jsxs(r("WAWebDrawerBody.react"), {
              flatListControllers: [N],
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
                          formatters: P,
                          className: (u || (u = r("stylex")))(p.pollName, y),
                        }),
                        M != null &&
                          M > 1 &&
                          d.jsx("span", {
                            className: "x1nxh6w3 x1fc57z9 x1rg5ohu x1380le5",
                            children: s._(
                              /*BTDS*/ '_j{"*":"{vote_count} of {group_length} members voted","_1":"{vote_count} of 1 member voted"}',
                              [
                                s._plural(M, "group_length"),
                                s._param("vote_count", S),
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
                      associatedMsg: v.get(t),
                      addOptionMsg: b.get(t),
                      mode: i,
                      option: t,
                      result: n,
                      isPollFromMe: E.fromMe,
                      links: $
                        ? o("WAWebMsgLinks").getPollOptionLinks(l.unsafe(), t)
                        : null,
                      trusted: $,
                      onViewAllVotes: function () {
                        f(t.localId);
                      },
                      onOpenContactInfo: _,
                      flatListController: N,
                      testid: "poll-details-option-" + t.localId,
                      isCorrectOption: o(
                        "WAWebPollOptionsRenderUtils",
                      ).getIsCorrectOption(l.correctOptionIndex, t),
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
          ? ((i = o("WAWebMsgGetters").getIsNewsletterMsg(r.msg.unsafe())
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
