__d(
  "WAWebPollPendingUpdatesCleanup",
  ["WALogger", "WAWebDBPollsPendingUpdatesStore", "WAWebPollsGatingUtils"],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(e) {
      (!o("WAWebPollsGatingUtils").isPollTCReceivingEnabled() &&
        !o("WAWebPollsGatingUtils").isPollTCCleanupEnabled()) ||
        (await o("WAWebDBPollsPendingUpdatesStore").deleteForPollKeys(e));
    }
    async function u() {
      if (o("WAWebPollsGatingUtils").isPollTCCleanupEnabled())
        try {
          await o("WAWebDBPollsPendingUpdatesStore").purgeExpiredPendingUpdates(
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
    }
    ((l.deletePollPendingUpdatesForParents = s),
      (l.cleanExpiredPollPendingUpdates = u));
  },
  98,
);
