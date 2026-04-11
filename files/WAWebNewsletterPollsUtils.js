__d(
  "WAWebNewsletterPollsUtils",
  ["WATimeUtils", "WAWebNewsletterGatingUtils", "sumBy"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var a,
        i,
        l = new Map(),
        s = Array.from(
          (a =
            e == null || (i = e.pollVotesCountMap) == null
              ? void 0
              : i.values()) != null
            ? a
            : [],
        ),
        c = r("sumBy")(s, function (e) {
          return e;
        }),
        d = Math.max.apply(Math, s),
        m = e == null ? void 0 : e.pollVotersMap;
      for (var p of t) {
        var _,
          f,
          g,
          h,
          y,
          C,
          b = !!(!(e == null || (_ = e.myVote) == null) && _.has(p.localId)),
          v = Math.max(
            (f =
              e == null || (g = e.pollVotesCountMap) == null
                ? void 0
                : g.get(p.localId)) != null
              ? f
              : 0,
            b ? 1 : 0,
          ),
          S = m == null ? void 0 : m.get(p.localId),
          R = b ? u(n, e == null ? void 0 : e.myVoteTs) : null,
          L = (R != null ? [R] : []).concat(
            (h = S == null ? void 0 : S.contacts) != null ? h : [],
          );
        l.set(p, {
          isVotedForByMe: b,
          isCurrentLeader: d > 0 && v === d,
          percentageOfAll: c === 0 ? 0 : v / c,
          percentageOfMostVotedForOption: d === 0 ? 0 : v / d,
          votes: o(
            "WAWebNewsletterGatingUtils",
          ).isNewsletterPollsVotersEnabled()
            ? L.concat((y = S == null ? void 0 : S.others) != null ? y : [])
            : [],
          count: v,
          mode: "newsletter",
          contactVoters: L,
          otherVoters: (C = S == null ? void 0 : S.others) != null ? C : [],
        });
      }
      return l;
    }
    function s(e) {
      return {
        parentMsgKey: e.parentMsgKey.toString(),
        serverTimestamp: e.serverTimestamp,
        votesMap: e.voteCountMap,
      };
    }
    function u(e, t) {
      var n;
      return e == null
        ? null
        : {
            contact: e,
            id: e.id,
            time:
              (n = o("WATimeUtils").castMillisTimeToUnixTime(t)) != null
                ? n
                : o("WATimeUtils").unixTime(),
          };
    }
    ((l.aggregateNewsletterVotes = e), (l.mapNewsletterVoteToDbRecord = s));
  },
  98,
);
