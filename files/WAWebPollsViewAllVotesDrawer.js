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
    "WAWebSpoilerRevealLogger",
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
      var n,
        a = t.associatedMessages,
        i = t.mode,
        l = t.msgKey,
        u = t.onBack,
        c = t.onOpenContactInfo,
        m = t.optionLocalId,
        p = t.optionsToResults,
        _ = t.ref,
        f = t.withSectioning,
        g = r("useWAWebPollOptionDecorations")(l, p, a),
        h = g.addOptionMsgs,
        y = g.options,
        C = g.optionsMsgsMap,
        b = o("useWAWebMsgValues").useMsgValues(l, [
          (n = o("WAWebMsgGetters")).getSender,
          n.getPollCorrectOptionIndex,
          n.getPollHideVoterNames,
          n.getIsSentByMe,
          n.getIsSpoiler,
        ]),
        v = b[0],
        S = b[1],
        R = b[2],
        L = b[3],
        E = b[4],
        k = r("useWAWebIsMsgTrusted")(l),
        I = o("WAWebSpoilerRevealLogger").getSpoilerRevealContextFromValues(
          l.remote,
          L,
        ),
        T = y.find(function (e) {
          return e.localId === m;
        }),
        D = r("useLazyRef")(function () {
          return new (r("WAWebFlatListController"))();
        });
      if (T == null)
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
      var x = r("nullthrows")(p.get(T));
      return d.jsxs(
        r("WAWebDrawer.react"),
        {
          ref: _,
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
              onBack: u,
              focusBackOrCancel: !0,
            }),
            d.jsx(r("WAWebDrawerBody.react"), {
              flatListControllers: [D.current],
              children: d.jsx(r("WAWebPollsOptionSection"), {
                addOptionMsg: h.get(T),
                associatedMsg: C.get(T),
                mode: i,
                option: T,
                result: x,
                links: k
                  ? o("WAWebMsgLinks").getLinksFromText(T.name, v)
                  : null,
                trusted: k,
                isPollFromMe: l.fromMe,
                messageHasSpoiler: E,
                spoilerRevealContext: I,
                onOpenContactInfo: c,
                flatListController: D.current,
                withSectioning: f,
                testid: "poll-details-option-" + T.localId,
                isCorrectOption: o(
                  "WAWebPollOptionsRenderUtils",
                ).getIsCorrectOption(S, T),
                hideVoterNames: R === !0,
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
