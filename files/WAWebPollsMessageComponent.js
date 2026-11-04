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
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(12),
        a,
        i;
      n[0] !== t
        ? ((a = t.msgKey),
          (i = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = [o("WAWebMsgGetters").getIsNewsletterMsg]), (n[3] = l))
        : (l = n[3]);
      var s = o("useWAWebMsgValues").useMsgValues(
          a,
          r("WAWebCastToPollCreationMsg"),
          l,
        ),
        u = s[0],
        c = y(i.associatedMessages);
      if (u) {
        var d;
        return (
          n[4] !== c || n[5] !== a || n[6] !== i
            ? ((d = m.jsx(
                g,
                babelHelpers.extends({ msgKey: a }, i, {
                  associatedMessages: c,
                }),
              )),
              (n[4] = c),
              (n[5] = a),
              (n[6] = i),
              (n[7] = d))
            : (d = n[7]),
          d
        );
      }
      var p;
      return (
        n[8] !== c || n[9] !== a || n[10] !== i
          ? ((p = m.jsx(
              f,
              babelHelpers.extends({ msgKey: a }, i, { associatedMessages: c }),
            )),
            (n[8] = c),
            (n[9] = a),
            (n[10] = i),
            (n[11] = p))
          : (p = n[11]),
        p
      );
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(7),
        n,
        r;
      t[0] !== e
        ? ((n = e.msgKey),
          (r = babelHelpers.objectWithoutPropertiesLoose(e, s)),
          (t[0] = e),
          (t[1] = n),
          (t[2] = r))
        : ((n = t[1]), (r = t[2]));
      var a = o("WAWebPollsUseResults").useResults(n),
        i;
      return (
        t[3] !== n || t[4] !== a || t[5] !== r
          ? ((i = m.jsx(
              o("WAWebPollsMessageComponentView").PollCreationMessageComponent,
              babelHelpers.extends({ msgKey: n }, r, { optionsToResults: a }),
            )),
            (t[3] = n),
            (t[4] = a),
            (t[5] = r),
            (t[6] = i))
          : (i = t[6]),
        i
      );
    }
    function g(e) {
      var t = o("react-compiler-runtime").c(7),
        n,
        r;
      t[0] !== e
        ? ((n = e.msgKey),
          (r = babelHelpers.objectWithoutPropertiesLoose(e, u)),
          (t[0] = e),
          (t[1] = n),
          (t[2] = r))
        : ((n = t[1]), (r = t[2]));
      var a = o("useWAWebNewsletterPollsResults").useNewsletterPollsResults(n),
        i;
      return (
        t[3] !== n || t[4] !== a || t[5] !== r
          ? ((i = m.jsx(
              o("WAWebPollsMessageComponentView").PollCreationMessageComponent,
              babelHelpers.extends({ msgKey: n }, r, { optionsToResults: a }),
            )),
            (t[3] = n),
            (t[4] = a),
            (t[5] = r),
            (t[6] = i))
          : (i = t[6]),
        i
      );
    }
    function h(e) {
      var t = o("react-compiler-runtime").c(13),
        n,
        r;
      t[0] !== e
        ? ((n = e.msgKey),
          (r = babelHelpers.objectWithoutPropertiesLoose(e, c)),
          (t[0] = e),
          (t[1] = n),
          (t[2] = r))
        : ((n = t[1]), (r = t[2]));
      var a;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = [o("WAWebMsgGetters").getPollVotesSnapshot]), (t[3] = a))
        : (a = t[3]);
      var i = o("useWAWebMsgValues").useMsgValues(
          n,
          o("WAWebMsgCasts").castToPollResultSnapshotMsg,
          a,
        ),
        l = i[0],
        s = y(r.associatedMessages),
        u;
      if (t[4] !== (l == null ? void 0 : l.pollVotes)) {
        var d;
        ((u = (d = l == null ? void 0 : l.pollVotes) != null ? d : []),
          (t[4] = l == null ? void 0 : l.pollVotes),
          (t[5] = u));
      } else u = t[5];
      var p;
      t[6] !== u
        ? ((p = o("WAWebPollResultSnapshotUtils").aggegateVoteSnapshot(u)),
          (t[6] = u),
          (t[7] = p))
        : (p = t[7]);
      var _ = p,
        f;
      return (
        t[8] !== s || t[9] !== n || t[10] !== _ || t[11] !== r
          ? ((f = m.jsx(
              o("WAWebPollsMessageComponentView").PollSnapshotMessageComponent,
              babelHelpers.extends({ msgKey: n }, r, {
                associatedMessages: s,
                optionsToResults: _,
              }),
            )),
            (t[8] = s),
            (t[9] = n),
            (t[10] = _),
            (t[11] = r),
            (t[12] = f))
          : (f = t[12]),
        f
      );
    }
    function y(e) {
      var t = o("react-compiler-runtime").c(2),
        n;
      return (
        t[0] !== e ? ((n = e.filter(C)), (t[0] = e), (t[1] = n)) : (n = t[1]),
        n
      );
    }
    function C(e) {
      return (
        e.associationType ===
        o("WAWebMessageAssociation.flow").MessageAssociationType.MEDIA_POLL
      );
    }
    ((l.Poll = _), (l.PollResultSnapshot = h));
  },
  98,
);
