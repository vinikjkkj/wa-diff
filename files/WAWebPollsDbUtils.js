__d(
  "WAWebPollsDbUtils",
  ["invariant", "WANullthrows", "WAWebPollOptionHashUtils"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      return e == null
        ? void 0
        : e
            .slice()
            .sort(function (e, t) {
              return e.localId - t.localId;
            })
            .map(function (e, t) {
              var n = e.hash,
                r = e.localId,
                o = e.name;
              return (
                r === t || s(0, 59784),
                n != null ? { name: o, hash: n } : { name: o }
              );
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
            var n = e.hash,
              a = e.name;
            return n == null
              ? { name: r("WANullthrows")(a), localId: t }
              : {
                  name: r("WANullthrows")(a),
                  localId: t,
                  hash: o(
                    "WAWebPollOptionHashUtils",
                  ).createOptionHashHexFromString(n),
                };
          });
    }
    function d(e) {
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
                    name: r("WANullthrows")(n == null ? void 0 : n.name),
                    localId: t,
                  },
                  optionVoteCount: r("WANullthrows")(o),
                };
              });
      return { pollVotes: o };
    }
    ((l.compressPollOptions = e),
      (l.compressPollVotesSnapshot = u),
      (l.expandPollOptions = c),
      (l.expandPollVotesSnapshot = d));
  },
  98,
);
