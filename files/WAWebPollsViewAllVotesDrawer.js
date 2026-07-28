__d(
  "WAWebPollsViewAllVotesDrawer",
  [
    "fbt",
    "WALogger",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebFlatListController",
    "WAWebMsgGetters",
    "WAWebMsgLinks",
    "WAWebMsgModelPropUtils",
    "WAWebPollsOptionSection",
    "WAWebPollsUseResults",
    "nullthrows",
    "react",
    "react-compiler-runtime",
    "useLazyRef",
    "useWAWebNewsletterPollsResults",
    "useWAWebPollAssociatedMessagesMap",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = ["ref"],
      c,
      d = c || (c = o("react"));
    function m(e) {
      var t = o("react-compiler-runtime").c(7),
        n,
        r;
      t[0] !== e
        ? ((r = e.ref),
          (n = babelHelpers.objectWithoutPropertiesLoose(e, u)),
          (t[0] = e),
          (t[1] = n),
          (t[2] = r))
        : ((n = t[1]), (r = t[2]));
      var a = n,
        i = a.msg,
        l;
      return (
        t[3] !== i.id.remote || t[4] !== n || t[5] !== r
          ? ((l = i.id.remote.isNewsletter()
              ? d.jsx(f, babelHelpers.extends({}, n, { ref: r }))
              : d.jsx(_, babelHelpers.extends({}, n, { ref: r }))),
            (t[3] = i.id.remote),
            (t[4] = n),
            (t[5] = r),
            (t[6] = l))
          : (l = t[6]),
        l
      );
    }
    var p = m;
    function _(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.associatedMessages,
        r = e.msg,
        a = e.onBack,
        i = e.onOpenContactInfo,
        l = e.optionLocalId,
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
              associatedMessages: n,
              mode: "e2ee",
              onBack: a,
              onOpenContactInfo: i,
              optionsToResults: u,
              optionLocalId: l,
              msg: r,
              ref: s,
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
      var t = o("react-compiler-runtime").c(10),
        n = e.associatedMessages,
        r = e.msg,
        a = e.onBack,
        i = e.onOpenContactInfo,
        l = e.optionLocalId,
        s = e.ref,
        u;
      t[0] !== l
        ? ((u = { pollVoteLocalId: l }), (t[0] = l), (t[1] = u))
        : (u = t[1]);
      var c = o("useWAWebNewsletterPollsResults").useNewsletterPollsResults(
          r,
          u,
        ),
        m;
      return (
        t[2] !== n ||
        t[3] !== r ||
        t[4] !== a ||
        t[5] !== i ||
        t[6] !== l ||
        t[7] !== c ||
        t[8] !== s
          ? ((m = d.jsx(g, {
              associatedMessages: n,
              mode: "newsletter",
              withSectioning: !0,
              onBack: a,
              onOpenContactInfo: i,
              optionsToResults: c,
              optionLocalId: l,
              msg: r,
              ref: s,
            })),
            (t[2] = n),
            (t[3] = r),
            (t[4] = a),
            (t[5] = i),
            (t[6] = l),
            (t[7] = c),
            (t[8] = s),
            (t[9] = m))
          : (m = t[9]),
        m
      );
    }
    function g(t) {
      var n = t.associatedMessages,
        a = t.mode,
        i = t.msg,
        l = t.onBack,
        u = t.onOpenContactInfo,
        c = t.optionLocalId,
        m = t.optionsToResults,
        p = t.ref,
        _ = t.withSectioning,
        f = Array.from(m.keys()).find(function (e) {
          return e.localId === c;
        }),
        g = o("useWAWebPollAssociatedMessagesMap").usePollAssociatedMessagesMap(
          Array.from(m.keys()),
          n,
        ),
        h = r("useLazyRef")(function () {
          return new (r("WAWebFlatListController"))();
        });
      if (f == null)
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[Polls] Unable to find poll option in ViewAllVotesDrawer",
                ])),
            )
            .sendLogs("null-poll-option"),
          null
        );
      var y = r("nullthrows")(m.get(f)),
        C = o("WAWebMsgModelPropUtils").isTrusted(i.unsafe());
      return d.jsxs(
        r("WAWebDrawer.react"),
        {
          ref: p,
          theme: "striped",
          testid: "poll-details-drawer",
          tsNavigationData: {
            surface: "unknown",
            viewName: "polls-view-all-votes",
          },
          children: [
            d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
              title: s._(/*BTDS*/ "Poll results"),
              type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
              onBack: l,
              focusBackOrCancel: !0,
            }),
            d.jsx(r("WAWebDrawerBody.react"), {
              flatListControllers: [h.current],
              children: d.jsx(r("WAWebPollsOptionSection"), {
                associatedMsg: g.get(f),
                mode: a,
                option: f,
                result: y,
                links: C
                  ? o("WAWebMsgLinks").getPollOptionLinks(i.unsafe(), f)
                  : null,
                trusted: C,
                isPollFromMe: i.id.fromMe,
                onOpenContactInfo: u,
                flatListController: h.current,
                withSectioning: _,
                testid: "poll-details-option-" + f.localId,
                isCorrectOption:
                  i.correctOptionIndex == null
                    ? null
                    : f.localId === i.correctOptionIndex,
                hideVoterNames:
                  o("WAWebMsgGetters").getPollHideVoterNames(i) === !0,
              }),
            }),
          ],
        },
        "poll-details-drawer",
      );
    }
    ((g.displayName = g.name + " [from " + i.id + "]"),
      (l.ViewAllVotesDrawer = p));
  },
  226,
);
