__d(
  "WAWebPollsMessageComponent",
  [
    "WAWebMsgGetters",
    "WAWebPollResultSnapshotUtils",
    "WAWebPollsMessageComponentView",
    "WAWebPollsUseResults",
    "react",
    "useWAWebMsgValues",
    "useWAWebNewsletterPollsResults",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["msg"],
      s = ["msg"],
      u = ["msg"],
      c = ["msg"],
      d,
      m = d || (d = o("react"));
    function p(t) {
      var n = t.msg,
        r = babelHelpers.objectWithoutPropertiesLoose(t, e),
        a = o("useWAWebMsgValues").useMsgValues(n.id, [
          o("WAWebMsgGetters").getIsNewsletterMsg,
        ]),
        i = a[0];
      return i
        ? m.jsx(f, babelHelpers.extends({ msg: n }, r))
        : m.jsx(_, babelHelpers.extends({ msg: n }, r));
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      var t = e.msg,
        n = babelHelpers.objectWithoutPropertiesLoose(e, s),
        r = o("WAWebPollsUseResults").useResults(t);
      return m.jsx(
        o("WAWebPollsMessageComponentView").PollCreationMessageComponent,
        babelHelpers.extends({ msg: t }, n, { optionsToResults: r }),
      );
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = e.msg,
        n = babelHelpers.objectWithoutPropertiesLoose(e, u),
        r = o("useWAWebNewsletterPollsResults").useNewsletterPollsResults(t);
      return m.jsx(
        o("WAWebPollsMessageComponentView").PollCreationMessageComponent,
        babelHelpers.extends({ msg: t }, n, { optionsToResults: r }),
      );
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      var t = e.msg,
        n = babelHelpers.objectWithoutPropertiesLoose(e, c),
        r = o("WAWebPollResultSnapshotUtils").aggegateVoteSnapshot(
          t.pollVotesSnapshot.pollVotes,
        );
      return m.jsx(
        o("WAWebPollsMessageComponentView").PollSnapshotMessageComponent,
        babelHelpers.extends({ msg: t }, n, { optionsToResults: r }),
      );
    }
    ((g.displayName = g.name + " [from " + i.id + "]"),
      (l.Poll = p),
      (l.PollResultSnapshot = g));
  },
  98,
);
