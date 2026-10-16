__d(
  "WAWebPollNameHashSeed",
  [
    "Promise",
    "WALogger",
    "WAWebCastToPollCreationMsg",
    "WAWebMsgType",
    "WAWebPollNameHashHistoryUtils",
    "WAWebPollNameHashUtils",
    "WAWebPollsGatingUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return !o("WAWebPollsGatingUtils").isPollTCReceivingEnabled() ||
            !e.some(function (e) {
              return e.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION;
            })
            ? e
            : (s || (s = n("Promise"))).all(
                e.map(function (e) {
                  return e.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION
                    ? p(e)
                    : e;
                }),
              );
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield f(e);
          return t == null
            ? e
            : babelHelpers.extends({}, e, { pollNameHashHistory: t });
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            return yield d(r("WAWebCastToPollCreationMsg")(t));
          } catch (n) {
            return (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[polls/tc] failed to seed poll name hash history",
                    ])),
                )
                .sendLogs("poll-name-hash-seed-failed"),
              t
            );
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            !o("WAWebPollsGatingUtils").isPollTCReceivingEnabled() ||
            o("WAWebPollNameHashHistoryUtils").hasPollNameHashHistory(e) ||
            e.id.remote.isNewsletter() ||
            e.pollName.length === 0
          )
            return null;
          var t = yield o("WAWebPollNameHashUtils").tryComputePollNameHash(
            e.pollName,
          );
          return t == null
            ? null
            : [
                {
                  editStanzaId: o("WAWebPollNameHashHistoryUtils")
                    .ORIGINAL_POLL_VERSION_EDIT_STANZA_ID,
                  pollNameHash: t,
                },
              ];
        })),
        g.apply(this, arguments)
      );
    }
    ((l.maybeSeedInitialPollNameHashes = u),
      (l.maybeSeedInitialPollNameHashForOutgoing = d));
  },
  98,
);
