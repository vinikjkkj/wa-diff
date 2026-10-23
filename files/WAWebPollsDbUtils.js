__d(
  "WAWebPollsDbUtils",
  ["invariant", "WAWebPollOptionHashUtils", "nullthrows"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      return e == null
        ? void 0
        : e.map(function (e) {
            var t = e.addOptionMsgKey,
              n = e.addOptionMsgT,
              r = e.hash,
              o = e.localId,
              a = e.name;
            return r != null
              ? {
                  name: a,
                  hash: r,
                  addOptionMsgKey: t,
                  localId: o,
                  addOptionMsgT: n,
                }
              : { name: a, addOptionMsgKey: t, localId: o, addOptionMsgT: n };
          });
    }
    function u(e) {
      var t,
        n = (t = e == null ? void 0 : e.pollVotes) != null ? t : [],
        r =
          n == null
            ? void 0
            : n
                .slice()
                .sort(function (e, t) {
                  return e.option.localId - t.option.localId;
                })
                .map(function (e, t) {
                  var n = e.option,
                    r = e.optionVoteCount;
                  return (
                    n.localId === t || s(0, 59784),
                    { option: { name: n.name }, optionVoteCount: r }
                  );
                });
      return { pollVotes: r };
    }
    function c(e) {
      return e == null
        ? void 0
        : e.map(function (e, t) {
            var n = e.addOptionMsgKey,
              a = e.addOptionMsgT,
              i = e.hash,
              l = e.localId,
              s = e.name;
            return i == null
              ? {
                  name: r("nullthrows")(s),
                  localId: l != null ? l : t,
                  addOptionMsgKey: n,
                  addOptionMsgT: a,
                }
              : {
                  name: r("nullthrows")(s),
                  localId: l != null ? l : t,
                  hash: o(
                    "WAWebPollOptionHashUtils",
                  ).createOptionHashHexFromString(i),
                  addOptionMsgKey: n,
                  addOptionMsgT: a,
                };
          });
    }
    function d(e) {
      return e != null ? { name: e, localId: -1 } : null;
    }
    function m(e) {
      var t,
        n = (t = e == null ? void 0 : e.pollVotes) != null ? t : [],
        o =
          n == null
            ? void 0
            : n.map(function (e, t) {
                var n = e.option,
                  o = e.optionVoteCount;
                return {
                  option: {
                    name: r("nullthrows")(n == null ? void 0 : n.name),
                    localId: t,
                  },
                  optionVoteCount: r("nullthrows")(o),
                };
              });
      return { pollVotes: o };
    }
    ((l.compressPollOptions = e),
      (l.compressPollVotesSnapshot = u),
      (l.expandPollOptions = c),
      (l.expandPollAddedOption = d),
      (l.expandPollVotesSnapshot = m));
  },
  98,
);
