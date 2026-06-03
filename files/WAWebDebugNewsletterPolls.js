__d(
  "WAWebDebugNewsletterPolls",
  [
    "Promise",
    "WAJids",
    "WALogger",
    "WANullthrows",
    "WATimeUtils",
    "WAWebCRUDOperationsNewsletterPollsVotes",
    "WAWebMexFetchNewsletterPollVotersJob",
    "WAWebNewsletterFetchPollVotersAction",
    "WAWebPollOptionHashUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    function p() {
      return Math.trunc(Math.random() * (Math.pow(10, 6) - 10) + 10);
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            r = (t = e.pollOptions) != null ? t : [],
            a = yield (m || (m = n("Promise"))).all(
              r.map(function (e) {
                return o("WAWebPollOptionHashUtils").getHashHexForString(
                  e.name,
                );
              }),
            );
          return new Map(
            a.map(function (e) {
              return [e, p()];
            }),
          );
        })),
        f.apply(this, arguments)
      );
    }
    function g() {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
              votesMap: yield _(t),
            },
          ];
          try {
            (yield o(
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
        })),
        h.apply(this, arguments)
      );
    }
    function y() {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
          var t = yield r("WAWebMexFetchNewsletterPollVotersJob")({
            newsletterId: o("WAJids").toNewsletterJid(e.id.remote.toString()),
            serverId: r("WANullthrows")(e.serverId),
            limit: 100,
            voteHash: null,
          });
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
          var n = yield o(
            "WAWebNewsletterFetchPollVotersAction",
          ).fetchPollVotersAction({ msg: t, pollVoteLocalId: e });
        })),
        v.apply(this, arguments)
      );
    }
    var S = {
      createOrUpdateNewsletterPollVoteDebug: g,
      fetchNewsletterPollVotersDebug: y,
      fetchPollVotersActionDebug: b,
    };
    l.default = S;
  },
  98,
);
