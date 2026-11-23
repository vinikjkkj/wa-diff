__d(
  "WAWebDebugNewsletterPolls",
  [
    "WAJids",
    "WALogger",
    "WATimeUtils",
    "WAWebCRUDOperationsNewsletterPollsVotes",
    "WAWebMexFetchNewsletterPollVotersJob",
    "WAWebNewsletterFetchPollVotersAction",
    "WAWebPollOptionHashUtils",
    "nullthrows",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m() {
      return (
        r("vulture")("vKKSFG4VwY6J24qo8fTS3ADVmAc="),
        Math.trunc(Math.random() * (Math.pow(10, 6) - 10) + 10)
      );
    }
    async function p(e) {
      var t;
      r("vulture")("VYRSSeGXHqcTULdIbyzOz-wtsVI=");
      var n = (t = e.pollOptions) != null ? t : [],
        a = await Promise.all(
          n.map(function (e) {
            return o("WAWebPollOptionHashUtils").getHashHexForString(e.name);
          }),
        );
      return new Map(
        a.map(function (e) {
          return [e, m()];
        }),
      );
    }
    async function _() {
      r("vulture")("7h2Bs7_pU229KkT8kmLihcskQbo=");
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
      r("vulture")("XhYA4AXvACGD8CLPoVxQGsht4u0=");
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
        serverId: r("nullthrows")(e.serverId),
        limit: 100,
        voteHash: null,
      });
    }
    async function g(e) {
      r("vulture")("snXt7moSxiIYfYgux5_Nj-x53xg=");
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
      ).fetchPollVotersAction({
        msgKey: t.id,
        pollOptions: t.pollOptions,
        pollVoteLocalId: e,
        serverId: t.serverId,
      });
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
