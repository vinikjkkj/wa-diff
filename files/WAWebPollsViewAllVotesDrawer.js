__d(
  "WAWebPollsViewAllVotesDrawer",
  [
    "fbt",
    "WALogger",
    "WANullthrows",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebFlatListController",
    "WAWebMsgGetters",
    "WAWebMsgLinks",
    "WAWebMsgModelPropUtils",
    "WAWebPollsOptionSection",
    "WAWebPollsUseResults",
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
      var t = o("react-compiler-runtime").c(7),
        n = e.associatedMessages,
        r = e.msg,
        a = e.onBack,
        i = e.optionLocalId,
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
              associatedMessages: n,
              mode: "e2ee",
              onBack: a,
              optionsToResults: s,
              optionLocalId: i,
              msg: r,
              ref: l,
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
      var t = o("react-compiler-runtime").c(9),
        n = e.associatedMessages,
        r = e.msg,
        a = e.onBack,
        i = e.optionLocalId,
        l = e.ref,
        s;
      t[0] !== i
        ? ((s = { pollVoteLocalId: i }), (t[0] = i), (t[1] = s))
        : (s = t[1]);
      var u = o("useWAWebNewsletterPollsResults").useNewsletterPollsResults(
          r,
          s,
        ),
        c;
      return (
        t[2] !== n ||
        t[3] !== r ||
        t[4] !== a ||
        t[5] !== i ||
        t[6] !== u ||
        t[7] !== l
          ? ((c = d.jsx(g, {
              associatedMessages: n,
              mode: "newsletter",
              withSectioning: !0,
              onBack: a,
              optionsToResults: u,
              optionLocalId: i,
              msg: r,
              ref: l,
            })),
            (t[2] = n),
            (t[3] = r),
            (t[4] = a),
            (t[5] = i),
            (t[6] = u),
            (t[7] = l),
            (t[8] = c))
          : (c = t[8]),
        c
      );
    }
    function g(t) {
      var n = t.associatedMessages,
        a = t.mode,
        i = t.msg,
        l = t.onBack,
        u = t.optionLocalId,
        c = t.optionsToResults,
        m = t.ref,
        p = t.withSectioning,
        _ = Array.from(c.keys()).find(function (e) {
          return e.localId === u;
        }),
        f = o("useWAWebPollAssociatedMessagesMap").usePollAssociatedMessagesMap(
          Array.from(c.keys()),
          n,
        ),
        g = r("useLazyRef")(function () {
          return new (r("WAWebFlatListController"))();
        });
      if (_ == null)
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
      var h = r("WANullthrows")(c.get(_)),
        y = o("WAWebMsgModelPropUtils").isTrusted(i.unsafe());
      return d.jsxs(
        r("WAWebDrawer.react"),
        {
          ref: m,
          theme: "striped",
          testid: void 0,
          tsNavigationData: {
            surface: "unknown",
            viewName: "polls-view-all-votes",
          },
          children: [
            d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
              title: s._(/*BTDS*/ "Poll results"),
              type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
              onBack: l,
              rtlFixIfOnDarwin: !0,
              focusBackOrCancel: !0,
            }),
            d.jsx(r("WAWebDrawerBody.react"), {
              flatListControllers: [g.current],
              children: d.jsx(r("WAWebPollsOptionSection"), {
                associatedMsg: f.get(_),
                mode: a,
                option: _,
                result: h,
                links: y
                  ? o("WAWebMsgLinks").getPollOptionLinks(i.unsafe(), _)
                  : null,
                trusted: y,
                isPollFromMe: i.id.fromMe,
                flatListController: g.current,
                withSectioning: p,
                testid: void 0,
                isCorrectOption:
                  i.correctOptionIndex == null
                    ? null
                    : _.localId === i.correctOptionIndex,
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
