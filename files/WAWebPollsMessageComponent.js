__d(
  "WAWebPollsMessageComponent",
  [
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
    var e = ["msg"],
      s = ["msg"],
      u = ["msg"],
      c = ["msg"],
      d,
      m = d || (d = o("react"));
    function p(t) {
      var n = o("react-compiler-runtime").c(10),
        r,
        a;
      n[0] !== t
        ? ((r = t.msg),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = r),
          (n[2] = a))
        : ((r = n[1]), (a = n[2]));
      var i;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = [o("WAWebMsgGetters").getIsNewsletterMsg]), (n[3] = i))
        : (i = n[3]);
      var l = o("useWAWebMsgValues").useMsgValues(r.id, i),
        s = l[0];
      if (s) {
        var u;
        return (
          n[4] !== r || n[5] !== a
            ? ((u = m.jsx(f, babelHelpers.extends({ msg: r }, a))),
              (n[4] = r),
              (n[5] = a),
              (n[6] = u))
            : (u = n[6]),
          u
        );
      }
      var c;
      return (
        n[7] !== r || n[8] !== a
          ? ((c = m.jsx(_, babelHelpers.extends({ msg: r }, a))),
            (n[7] = r),
            (n[8] = a),
            (n[9] = c))
          : (c = n[9]),
        c
      );
    }
    function _(e) {
      var t = o("react-compiler-runtime").c(7),
        n,
        r;
      t[0] !== e
        ? ((n = e.msg),
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
              babelHelpers.extends({ msg: n }, r, { optionsToResults: a }),
            )),
            (t[3] = n),
            (t[4] = a),
            (t[5] = r),
            (t[6] = i))
          : (i = t[6]),
        i
      );
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(7),
        n,
        r;
      t[0] !== e
        ? ((n = e.msg),
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
              babelHelpers.extends({ msg: n }, r, { optionsToResults: a }),
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
      var t = o("react-compiler-runtime").c(9),
        n,
        r;
      t[0] !== e
        ? ((n = e.msg),
          (r = babelHelpers.objectWithoutPropertiesLoose(e, c)),
          (t[0] = e),
          (t[1] = n),
          (t[2] = r))
        : ((n = t[1]), (r = t[2]));
      var a;
      t[3] !== n.pollVotesSnapshot.pollVotes
        ? ((a = o("WAWebPollResultSnapshotUtils").aggegateVoteSnapshot(
            n.pollVotesSnapshot.pollVotes,
          )),
          (t[3] = n.pollVotesSnapshot.pollVotes),
          (t[4] = a))
        : (a = t[4]);
      var i = a,
        l;
      return (
        t[5] !== n || t[6] !== i || t[7] !== r
          ? ((l = m.jsx(
              o("WAWebPollsMessageComponentView").PollSnapshotMessageComponent,
              babelHelpers.extends({ msg: n }, r, { optionsToResults: i }),
            )),
            (t[5] = n),
            (t[6] = i),
            (t[7] = r),
            (t[8] = l))
          : (l = t[8]),
        l
      );
    }
    ((l.Poll = p), (l.PollResultSnapshot = g));
  },
  98,
);
