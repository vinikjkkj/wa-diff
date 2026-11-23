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
    "useWAWebIsMsgTrusted",
    "useWAWebMsgValues",
    "useWAWebNewsletterPollsResults",
    "useWAWebPollOptionDecorations",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = ["ref"],
      c,
      d = c || (c = o("react")),
      m = c.useState;
    function p(e) {
      var t = e.ref,
        n = babelHelpers.objectWithoutPropertiesLoose(e, u),
        r = n.msgKey;
      return r.remote.isNewsletter()
        ? d.jsx(f, babelHelpers.extends({}, n, { ref: t }))
        : d.jsx(_, babelHelpers.extends({}, n, { ref: t }));
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      var t = e.associatedMessages,
        n = e.msgKey,
        r = e.onBack,
        a = e.onOpenContactInfo,
        i = e.onOpenGroupAgentProfile,
        l = e.optionLocalId,
        s = e.ref,
        u = o("WAWebPollsUseResults").useResults(n);
      return d.jsx(g, {
        associatedMessages: t,
        mode: "e2ee",
        onBack: r,
        onOpenContactInfo: a,
        onOpenGroupAgentProfile: i,
        optionsToResults: u,
        optionLocalId: l,
        msgKey: n,
        ref: s,
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = e.associatedMessages,
        n = e.msgKey,
        r = e.onBack,
        a = e.onOpenContactInfo,
        i = e.onOpenGroupAgentProfile,
        l = e.optionLocalId,
        s = e.ref,
        u = o("useWAWebNewsletterPollsResults").useNewsletterPollsResults(n, {
          pollVoteLocalId: l,
        });
      return d.jsx(g, {
        associatedMessages: t,
        mode: "newsletter",
        withSectioning: !0,
        onBack: r,
        onOpenContactInfo: a,
        onOpenGroupAgentProfile: i,
        optionsToResults: u,
        optionLocalId: l,
        msgKey: n,
        ref: s,
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(t) {
      var n,
        a = t.associatedMessages,
        i = t.mode,
        l = t.msgKey,
        u = t.onBack,
        c = t.onOpenContactInfo,
        p = t.onOpenGroupAgentProfile,
        _ = t.optionLocalId,
        f = t.optionsToResults,
        g = t.ref,
        h = t.withSectioning,
        y = r("useWAWebPollOptionDecorations")(l, f, a),
        C = y.addOptionMsgs,
        b = y.options,
        v = y.optionsMsgsMap,
        S = o("useWAWebMsgValues").useMsgValues(
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
        R = S[0],
        L = S[1],
        E = S[2],
        k = S[3],
        I = S[4],
        T = r("useWAWebIsMsgTrusted")(l),
        D = o("WAWebSpoilerRevealLogger").getSpoilerRevealContextFromValues(
          l.remote,
          k,
        ),
        x = b.find(function (e) {
          return e.localId === _;
        }),
        $ = m(function () {
          return new (r("WAWebFlatListController"))();
        }),
        P = $[0];
      if (x == null)
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
      var N = r("nullthrows")(f.get(x));
      return d.jsxs(
        r("WAWebDrawer.react"),
        {
          ref: g,
          theme: "striped",
          testid: "poll-details-drawer",
          tsNavigationData: {
            surface: "unknown",
            viewName: "polls-view-all-votes",
          },
          children: [
            d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
              title: s._(/*BTDS*/ ""),
              type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
              onBack: u,
              focusBackOrCancel: !0,
            }),
            d.jsx(r("WAWebDrawerBody.react"), {
              flatListControllers: [P],
              children: d.jsx(r("WAWebPollsOptionSection"), {
                addOptionMsg: C.get(x),
                associatedMsg: v.get(x),
                mode: i,
                option: x,
                result: N,
                links: T
                  ? o("WAWebMsgLinks").getLinksFromText(x.name, R)
                  : null,
                trusted: T,
                isPollFromMe: l.fromMe,
                messageHasSpoiler: I,
                spoilerRevealContext: D,
                onOpenContactInfo: c,
                onOpenGroupAgentProfile: p,
                flatListController: P,
                withSectioning: h,
                testid: "poll-details-option-" + x.localId,
                isCorrectOption: o(
                  "WAWebPollOptionsRenderUtils",
                ).getIsCorrectOption(L, x),
                hideVoterNames: E === !0,
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
