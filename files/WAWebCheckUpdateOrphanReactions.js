__d(
  "WAWebCheckUpdateOrphanReactions",
  [
    "WALogger",
    "WAWebAddonProcessMsgs",
    "WAWebDBChangeOrphanStateReactions",
    "WAWebReactionDataUtils",
    "WAWebStoreOrphans",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            var n = yield o(
                "WAWebDBChangeOrphanStateReactions",
              ).changeOrphanStateReactions(t),
              r = yield o("WAWebAddonProcessMsgs").processMsgsAndGetOrphans(
                n.map(function (e) {
                  return o(
                    "WAWebReactionDataUtils",
                  ).reactionRowToReactionMsgData(e);
                }),
              ),
              a = r.orphans;
            yield o("WAWebStoreOrphans").storeOrphans(a);
          } catch (t) {
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "checkUpdateForOrphanReactions: error ",
                  "",
                ])),
              t,
            );
          }
        })),
        u.apply(this, arguments)
      );
    }
    l.checkUpdateForOrphanReactions = s;
  },
  98,
);
