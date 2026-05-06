__d(
  "WAWebMexFetchNewsletterPollVotersJob",
  [
    "WATimeUtils",
    "WAWebMexClient",
    "WAWebMexFetchNewsletterPollVotersJobQuery.graphql",
    "WAWebNewsletterPollsUtils",
    "WAWebPollOptionHashUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebMexFetchNewsletterPollVotersJobQuery.graphql"));
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.limit,
            n = e.newsletterId,
            a = e.serverId,
            i = e.voteHash,
            l = {
              input: {
                limit: t,
                server_id: a.toString(10),
                newsletter_id: n,
                vote_hash: i,
              },
            },
            u = yield o("WAWebMexClient").fetchQuery(s, l),
            c = u.voter_list,
            m = new Map();
          return (c == null ? void 0 : c.votes) == null
            ? m
            : c.votes.reduce(function (e, t) {
                return t.vote_hash == null
                  ? e
                  : e.set(
                      o("WAWebPollOptionHashUtils").base64ToHex(t.vote_hash),
                      r("compactMap")(t.voter_list.edges, d),
                    );
              }, m);
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      var t = e.action_time,
        n = e.node,
        r = n == null ? void 0 : n.id;
      if (r == null || t == null) return null;
      var a = parseInt(t, 10) / 1e6,
        i = o("WAWebWidFactory").createWid(r);
      return (
        o("WAWebNewsletterPollsUtils").logIfPollVoterIdNotPlainUser(i),
        { id: i, time: o("WATimeUtils").castToUnixTime(a) }
      );
    }
    l.default = u;
  },
  98,
);
