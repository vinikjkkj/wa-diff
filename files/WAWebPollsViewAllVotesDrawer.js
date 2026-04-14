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
      var t = e.ref,
        n = babelHelpers.objectWithoutPropertiesLoose(e, u),
        r = n.msg;
      return r.id.remote.isNewsletter()
        ? d.jsx(f, babelHelpers.extends({}, n, { ref: t }))
        : d.jsx(_, babelHelpers.extends({}, n, { ref: t }));
    }
    m.displayName = m.name + " [from " + i.id + "]";
    var p = m;
    function _(e) {
      var t = e.associatedMessages,
        n = e.msg,
        r = e.onBack,
        a = e.optionLocalId,
        i = e.ref,
        l = o("WAWebPollsUseResults").useResults(n);
      return d.jsx(g, {
        associatedMessages: t,
        mode: "e2ee",
        onBack: r,
        optionsToResults: l,
        optionLocalId: a,
        msg: n,
        ref: i,
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = e.associatedMessages,
        n = e.msg,
        r = e.onBack,
        a = e.optionLocalId,
        i = e.ref,
        l = o("useWAWebNewsletterPollsResults").useNewsletterPollsResults(n, {
          pollVoteLocalId: a,
        });
      return d.jsx(g, {
        associatedMessages: t,
        mode: "newsletter",
        withSectioning: !0,
        onBack: r,
        optionsToResults: l,
        optionLocalId: a,
        msg: n,
        ref: i,
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
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
