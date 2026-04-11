__d(
  "WAWebGetSearchMatchFromMsg",
  ["WANullthrows", "WAWebFuzzySearch", "WAWebMsgType", "err"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.length === 0) return null;
      switch (e.type) {
        case o("WAWebMsgType").MSG_TYPE.POLL_CREATION:
          return s(e, t);
        case o("WAWebMsgType").MSG_TYPE.POLL_RESULT_SNAPSHOT:
          return u(e, t);
        default:
          throw r("err")(
            "Unimplemented getMatchedPropertyFromMsg for msg type: " + e.type,
          );
      }
    }
    function s(e, t) {
      var n;
      return c(
        r("WANullthrows")(e.pollName),
        (n = e.pollOptions) != null ? n : [],
        t,
      );
    }
    function u(e, t) {
      var n,
        o = (n = e.pollVotesSnapshot.pollVotes) != null ? n : [],
        a = o.map(function (e) {
          return e.option;
        });
      return c(r("WANullthrows")(e.pollName), a, t);
    }
    function c(e, t, n) {
      var r = n.join(" ").toLowerCase(),
        a = o("WAWebFuzzySearch").fuzzyMatches(r, e.toLowerCase());
      if (a.length > 0) return e;
      var i =
        t == null
          ? void 0
          : t
              .map(function (e) {
                return e.name;
              })
              .find(function (e) {
                return (
                  o("WAWebFuzzySearch").fuzzyMatches(r, e.toLowerCase())
                    .length > 0
                );
              });
      return i != null ? i : e;
    }
    l.getSearchMatchFromMsg = e;
  },
  98,
);
