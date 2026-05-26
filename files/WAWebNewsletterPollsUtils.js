__d(
  "WAWebNewsletterPollsUtils",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebIdentityFunction",
    "WAWebNewsletterGatingUtils",
    "sumBy",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t, n) {
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
        u = r("sumBy")(s, o("WAWebIdentityFunction").identityFunction),
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
          R = b ? c(n, e == null ? void 0 : e.myVoteTs) : null,
          L = (R != null ? [R] : []).concat(
            (h = S == null ? void 0 : S.contacts) != null ? h : [],
          );
        l.set(p, {
          isVotedForByMe: b,
          isCurrentLeader: d > 0 && v === d,
          percentageOfAll: u === 0 ? 0 : v / u,
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
    function u(e) {
      return {
        parentMsgKey: e.parentMsgKey.toString(),
        serverTimestamp: e.serverTimestamp,
        votesMap: e.voteCountMap,
      };
    }
    function c(t, n) {
      var r;
      return t == null
        ? null
        : !t.id.isLid() || t.id.getDeviceId() !== 0
          ? (o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter] my poll voter id is not a user lid: ",
                    "",
                  ])),
                t.id.toLogString(),
              )
              .sendLogs("newsletter-pollvoter-not-user-lid"),
            null)
          : {
              contact: t,
              id: t.id,
              time:
                (r = o("WATimeUtils").castMillisTimeToUnixTime(n)) != null
                  ? r
                  : o("WATimeUtils").unixTime(),
            };
    }
    ((l.aggregateNewsletterVotes = s), (l.mapNewsletterVoteToDbRecord = u));
  },
  98,
);
