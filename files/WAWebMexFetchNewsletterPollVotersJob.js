__d(
  "WAWebMexFetchNewsletterPollVotersJob",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebMexClient",
    "WAWebMexFetchNewsletterPollVotersJobQuery.graphql",
    "WAWebPollOptionHashUtils",
    "WAWebWidFactory",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u =
        e !== void 0
          ? e
          : (e = n("WAWebMexFetchNewsletterPollVotersJobQuery.graphql"));
    async function c(e) {
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
        s = await o("WAWebMexClient").fetchQuery(u, l),
        c = s.voter_list,
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
    }
    function d(e) {
      var t = e.action_time,
        n = e.node,
        r = n == null ? void 0 : n.id;
      if (r == null || t == null) return null;
      var a = o("WAWebWidFactory").createWid(r);
      if (!a.isLid() || a.getDeviceId() !== 0)
        return (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[newsletter] poll voter id is not a user lid: ",
                  "",
                ])),
              a.toLogString(),
            )
            .sendLogs("newsletter-pollvoter-not-user-lid"),
          null
        );
      var i = parseInt(t, 10) / 1e6;
      return { id: a, time: o("WATimeUtils").castToUnixTime(i) };
    }
    l.default = c;
  },
  98,
);
