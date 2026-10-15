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
    "WAWebPollOptionsRenderUtils",
    "WAWebPollsOptionSection",
    "WAWebPollsUseResults",
    "nullthrows",
    "react",
    "react-compiler-runtime",
    "useLazyRef",
    "useWAWebIsMsgTrusted",
    "useWAWebMsgValues",
    "useWAWebNewsletterPollsResults",
    "useWAWebPollOptionDecorations",
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
        i = a.msgKey,
        l;
      return (
        t[3] !== i.remote || t[4] !== n || t[5] !== r
          ? ((l = i.remote.isNewsletter()
              ? d.jsx(f, babelHelpers.extends({}, n, { ref: r }))
              : d.jsx(_, babelHelpers.extends({}, n, { ref: r }))),
            (t[3] = i.remote),
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
        r = e.msgKey,
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
              msgKey: r,
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
        r = e.msgKey,
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
              msgKey: r,
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
        i = t.msgKey,
        l = t.onBack,
        u = t.onOpenContactInfo,
        c = t.optionLocalId,
        m = t.optionsToResults,
        p = t.ref,
        _ = t.withSectioning,
        f = r("useWAWebPollOptionDecorations")(i, m, n),
        g = f.addOptionMsgs,
        h = f.options,
        y = f.optionsMsgsMap,
        C = o("useWAWebMsgValues").useMsgValues(i, [
          o("WAWebMsgGetters").getSender,
          o("WAWebMsgGetters").getPollCorrectOptionIndex,
          o("WAWebMsgGetters").getPollHideVoterNames,
        ]),
        b = C[0],
        v = C[1],
        S = C[2],
        R = r("useWAWebIsMsgTrusted")(i),
        L = h.find(function (e) {
          return e.localId === c;
        }),
        E = r("useLazyRef")(function () {
          return new (r("WAWebFlatListController"))();
        });
      if (L == null)
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
      var k = r("nullthrows")(m.get(L));
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
              flatListControllers: [E.current],
              children: d.jsx(r("WAWebPollsOptionSection"), {
                addOptionMsg: g.get(L),
                associatedMsg: y.get(L),
                mode: a,
                option: L,
                result: k,
                links: R
                  ? o("WAWebMsgLinks").getLinksFromText(L.name, b)
                  : null,
                trusted: R,
                isPollFromMe: i.fromMe,
                onOpenContactInfo: u,
                flatListController: E.current,
                withSectioning: _,
                testid: "poll-details-option-" + L.localId,
                isCorrectOption: o(
                  "WAWebPollOptionsRenderUtils",
                ).getIsCorrectOption(v, L),
                hideVoterNames: S === !0,
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
