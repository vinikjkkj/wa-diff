__d(
  "WAWebPollPendingUpdatesCleanup",
  [
    "WALogger",
    "WAWebDBPollsPendingUpdatesStore",
    "WAWebPollsGatingUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (!o("WAWebPollsGatingUtils").isPollTCReceivingEnabled() &&
            !o("WAWebPollsGatingUtils").isPollTCCleanupEnabled()) ||
            (yield o("WAWebDBPollsPendingUpdatesStore").deleteForPollKeys(e));
        })),
        u.apply(this, arguments)
      );
    }
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (o("WAWebPollsGatingUtils").isPollTCCleanupEnabled())
            try {
              yield o(
                "WAWebDBPollsPendingUpdatesStore",
              ).purgeExpiredPendingUpdates(
                o("WAWebPollsGatingUtils").getPollPendingUpdatesDaysValid(),
              );
            } catch (t) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[polls/tc] failed to purge expired poll pending updates",
                    ])),
                )
                .sendLogs("poll-tc-pending-updates-purge-failed");
            }
        })),
        d.apply(this, arguments)
      );
    }
    ((l.deletePollPendingUpdatesForParents = s),
      (l.cleanExpiredPollPendingUpdates = c));
  },
  98,
);
