__d(
  "WAWebPollsMessageComponent",
  [
    "WAWebCastToPollCreationMsg",
    "WAWebMessageAssociation.flow",
    "WAWebMsgCasts",
    "WAWebMsgGetters",
    "WAWebPollResultSnapshotUtils",
    "WAWebPollsMessageComponentView",
    "WAWebPollsUseResults",
    "react",
    "useWAWebMsgValues",
    "useWAWebNewsletterPollsResults",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["msgKey"],
      s = ["msgKey"],
      u = ["msgKey"],
      c = ["msgKey"],
      d,
      m = d || (d = o("react")),
      p = d.useMemo;
    function _(t) {
      var n = t.msgKey,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = o("useWAWebMsgValues").useMsgValues(
          n,
          r("WAWebCastToPollCreationMsg"),
          [o("WAWebMsgGetters").getIsNewsletterMsg],
        ),
        l = i[0],
        s = y(a.associatedMessages);
      return l
        ? m.jsx(
            g,
            babelHelpers.extends({ msgKey: n }, a, { associatedMessages: s }),
          )
        : m.jsx(
            f,
            babelHelpers.extends({ msgKey: n }, a, { associatedMessages: s }),
          );
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = e.msgKey,
        n = babelHelpers.objectWithoutPropertiesLoose(e, s),
        r = o("WAWebPollsUseResults").useResults(t);
      return m.jsx(
        o("WAWebPollsMessageComponentView").PollCreationMessageComponent,
        babelHelpers.extends({ msgKey: t }, n, { optionsToResults: r }),
      );
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      var t = e.msgKey,
        n = babelHelpers.objectWithoutPropertiesLoose(e, u),
        r = o("useWAWebNewsletterPollsResults").useNewsletterPollsResults(t);
      return m.jsx(
        o("WAWebPollsMessageComponentView").PollCreationMessageComponent,
        babelHelpers.extends({ msgKey: t }, n, { optionsToResults: r }),
      );
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      var t,
        n = e.msgKey,
        r = babelHelpers.objectWithoutPropertiesLoose(e, c),
        a = o("useWAWebMsgValues").useMsgValues(
          n,
          o("WAWebMsgCasts").castToPollResultSnapshotMsg,
          [o("WAWebMsgGetters").getPollVotesSnapshot],
        ),
        i = a[0],
        l = y(r.associatedMessages),
        s = o("WAWebPollResultSnapshotUtils").aggegateVoteSnapshot(
          (t = i == null ? void 0 : i.pollVotes) != null ? t : [],
        );
      return m.jsx(
        o("WAWebPollsMessageComponentView").PollSnapshotMessageComponent,
        babelHelpers.extends({ msgKey: n }, r, {
          associatedMessages: l,
          optionsToResults: s,
        }),
      );
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      return p(
        function () {
          return e.filter(function (e) {
            return (
              e.associationType ===
              o("WAWebMessageAssociation.flow").MessageAssociationType
                .MEDIA_POLL
            );
          });
        },
        [e],
      );
    }
    ((l.Poll = _), (l.PollResultSnapshot = h));
  },
  98,
);
