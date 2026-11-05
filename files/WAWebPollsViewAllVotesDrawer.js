__d(
  "WAWebPollsViewAllVotesDrawer",
  [
    "fbt",
    "WALogger",
    "WAWebCastToPollCreationMsg",
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
      var t = o("react-compiler-runtime").c(9),
        n = e.associatedMessages,
        r = e.msgKey,
        a = e.onBack,
        i = e.onOpenContactInfo,
        l = e.onOpenGroupAgentProfile,
        s = e.optionLocalId,
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
              associatedMessages: n,
              mode: "e2ee",
              onBack: a,
              onOpenContactInfo: i,
              onOpenGroupAgentProfile: l,
              optionsToResults: c,
              optionLocalId: s,
              msgKey: r,
              ref: u,
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
      var t = o("react-compiler-runtime").c(11),
        n = e.associatedMessages,
        r = e.msgKey,
        a = e.onBack,
        i = e.onOpenContactInfo,
        l = e.onOpenGroupAgentProfile,
        s = e.optionLocalId,
        u = e.ref,
        c;
      t[0] !== s
        ? ((c = { pollVoteLocalId: s }), (t[0] = s), (t[1] = c))
        : (c = t[1]);
      var m = o("useWAWebNewsletterPollsResults").useNewsletterPollsResults(
          r,
          c,
        ),
        p;
      return (
        t[2] !== n ||
        t[3] !== r ||
        t[4] !== a ||
        t[5] !== i ||
        t[6] !== l ||
        t[7] !== s ||
        t[8] !== m ||
        t[9] !== u
          ? ((p = d.jsx(g, {
              associatedMessages: n,
              mode: "newsletter",
              withSectioning: !0,
              onBack: a,
              onOpenContactInfo: i,
              onOpenGroupAgentProfile: l,
              optionsToResults: m,
              optionLocalId: s,
              msgKey: r,
              ref: u,
            })),
            (t[2] = n),
            (t[3] = r),
            (t[4] = a),
            (t[5] = i),
            (t[6] = l),
            (t[7] = s),
            (t[8] = m),
            (t[9] = u),
            (t[10] = p))
          : (p = t[10]),
        p
      );
    }
    function g(t) {
      var n,
        a = t.associatedMessages,
        i = t.mode,
        l = t.msgKey,
        u = t.onBack,
        c = t.onOpenContactInfo,
        m = t.onOpenGroupAgentProfile,
        p = t.optionLocalId,
        _ = t.optionsToResults,
        f = t.ref,
        g = t.withSectioning,
        h = r("useWAWebPollOptionDecorations")(l, _, a),
        y = h.addOptionMsgs,
        C = h.options,
        b = h.optionsMsgsMap,
        v = o("useWAWebMsgValues").useMsgValues(
          l,
          r("WAWebCastToPollCreationMsg"),
          [
            (n = o("WAWebMsgGetters")).getSender,
            n.getPollCorrectOptionIndex,
            n.getPollHideVoterNames,
            n.getIsSentByMe,
            n.getIsSpoiler,
          ],
        ),
        S = v[0],
        R = v[1],
        L = v[2],
        E = v[3],
        k = v[4],
        I = r("useWAWebIsMsgTrusted")(l),
        T = o("WAWebSpoilerRevealLogger").getSpoilerRevealContextFromValues(
          l.remote,
          E,
        ),
        D = C.find(function (e) {
          return e.localId === p;
        }),
        x = r("useLazyRef")(function () {
          return new (r("WAWebFlatListController"))();
        });
      if (D == null)
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
      var $ = r("nullthrows")(_.get(D));
      return d.jsxs(
        r("WAWebDrawer.react"),
        {
          ref: f,
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
              flatListControllers: [x.current],
              children: d.jsx(r("WAWebPollsOptionSection"), {
                addOptionMsg: y.get(D),
                associatedMsg: b.get(D),
                mode: i,
                option: D,
                result: $,
                links: I
                  ? o("WAWebMsgLinks").getLinksFromText(D.name, S)
                  : null,
                trusted: I,
                isPollFromMe: l.fromMe,
                messageHasSpoiler: k,
                spoilerRevealContext: T,
                onOpenContactInfo: c,
                onOpenGroupAgentProfile: m,
                flatListController: x.current,
                withSectioning: g,
                testid: "poll-details-option-" + D.localId,
                isCorrectOption: o(
                  "WAWebPollOptionsRenderUtils",
                ).getIsCorrectOption(R, D),
                hideVoterNames: L === !0,
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
