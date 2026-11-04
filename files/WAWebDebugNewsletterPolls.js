__d(
  "WAWebDebugNewsletterPolls",
  [
    "Promise",
    "WAJids",
    "WALogger",
    "WATimeUtils",
    "WAWebCRUDOperationsNewsletterPollsVotes",
    "WAWebMexFetchNewsletterPollVotersJob",
    "WAWebNewsletterFetchPollVotersAction",
    "WAWebPollOptionHashUtils",
    "asyncToGeneratorRuntime",
    "nullthrows",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    function p() {
      return (
        r("vulture")("vKKSFG4VwY6J24qo8fTS3ADVmAc="),
        Math.trunc(Math.random() * (Math.pow(10, 6) - 10) + 10)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          r("vulture")("VYRSSeGXHqcTULdIbyzOz-wtsVI=");
          var a = (t = e.pollOptions) != null ? t : [],
            i = yield (m || (m = n("Promise"))).all(
              a.map(function (e) {
                return o("WAWebPollOptionHashUtils").getHashHexForString(
                  e.name,
                );
              }),
            );
          return new Map(
            i.map(function (e) {
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
          var t = yield r("WAWebMexFetchNewsletterPollVotersJob")({
            newsletterId: o("WAJids").toNewsletterJid(e.id.remote.toString()),
            serverId: r("nullthrows")(e.serverId),
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
          var n = yield o(
            "WAWebNewsletterFetchPollVotersAction",
          ).fetchPollVotersAction({
            msgKey: t.id,
            pollOptions: t.pollOptions,
            pollVoteLocalId: e,
            serverId: t.serverId,
          });
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
