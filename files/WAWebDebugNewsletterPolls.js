__d(
  "WAWebDebugNewsletterPolls",
  [
    "WAJids",
    "WALogger",
    "WANullthrows",
    "WATimeUtils",
    "WAWebCRUDOperationsNewsletterPollsVotes",
    "WAWebMexFetchNewsletterPollVotersJob",
    "WAWebNewsletterFetchPollVotersAction",
    "WAWebPollOptionHashUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m() {
      return Math.trunc(Math.random() * (Math.pow(10, 6) - 10) + 10);
    }
    async function p(e) {
      var t,
        n = (t = e.pollOptions) != null ? t : [],
        r = await Promise.all(
          n.map(function (e) {
            return o("WAWebPollOptionHashUtils").getHashHexForString(e.name);
          }),
        );
      return new Map(
        r.map(function (e) {
          return [e, m()];
        }),
      );
    }
    async function _() {
      var t = window.msg;
      if (t == null) {
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "No message selected (right click on the poll message)",
            ])),
        );
        return;
      }
      var n = [
        {
          parentMsgKey: t.id.toString(),
          serverTimestamp: o("WATimeUtils").unixTime(),
          votesMap: await p(t),
        },
      ];
      try {
        (await o(
          "WAWebCRUDOperationsNewsletterPollsVotes",
        ).bulkCreateOrUpdateVotes(n),
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "createOrUpdateNewsletterPollVoteDebug: SUCCESS",
              ])),
          ));
      } catch (e) {
        o("WALogger").WARN(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "createOrUpdateNewsletterReactionsDebug: ",
              "",
            ])),
          e,
        );
      }
    }
    async function f() {
      var e = window.msg;
      if (e == null) {
        o("WALogger").WARN(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "No message selected (right click on the poll message)",
            ])),
        );
        return;
      }
      var t = await r("WAWebMexFetchNewsletterPollVotersJob")({
        newsletterId: o("WAJids").toNewsletterJid(e.id.remote.toString()),
        serverId: r("WANullthrows")(e.serverId),
        limit: 100,
        voteHash: null,
      });
    }
    async function g(e) {
      var t = window.msg;
      if (t == null) {
        o("WALogger").WARN(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "No message selected (right click on the poll message)",
            ])),
        );
        return;
      }
      var n = await o(
        "WAWebNewsletterFetchPollVotersAction",
      ).fetchPollVotersAction({ msg: t, pollVoteLocalId: e });
    }
    var h = {
      createOrUpdateNewsletterPollVoteDebug: _,
      fetchNewsletterPollVotersDebug: f,
      fetchPollVotersActionDebug: g,
    };
    l.default = h;
  },
  98,
);
