__d(
  "WAWebDBPollsPendingUpdatesStore",
  ["WATimeUtils", "WAWebModelStorageUtils", "WAWebPollsPendingUpdatesSchema"],
  function (t, n, r, o, a, i, l) {
    var e = "poll-pending-updates";
    async function s(t) {
      if (o("WAWebPollsPendingUpdatesSchema").canUsePollPendingUpdatesTable())
        return o("WAWebModelStorageUtils")
          .getStorage()
          .lock([e], async function (e) {
            var n = e[0],
              r = await n.get(p(t));
            (r != null && r.senderTimestampMs > t.senderTimestampMs) ||
              (await n.createOrReplace(
                babelHelpers.extends({}, t, { createdAtMs: Date.now() }),
              ));
          });
    }
    async function u(e) {
      return o("WAWebPollsPendingUpdatesSchema").canUsePollPendingUpdatesTable()
        ? o("WAWebPollsPendingUpdatesSchema")
            .getTable()
            .anyOf(["parentMsgKey"], [e])
        : [];
    }
    async function c(t) {
      var n = t.dependencyId,
        r = t.dependencyType,
        a = t.parentMsgKey;
      return o("WAWebPollsPendingUpdatesSchema").canUsePollPendingUpdatesTable()
        ? o("WAWebModelStorageUtils")
            .getStorage()
            .lock([e], async function (e) {
              var t = e[0],
                o = await t.anyOf(
                  ["parentMsgKey", "dependencyType", "dependencyId"],
                  [[a, r, n]],
                );
              return (o.length > 0 && (await t.bulkRemove(o.map(p))), o);
            })
        : [];
    }
    async function d(t) {
      t.length === 0 ||
        !o("WAWebPollsPendingUpdatesSchema").canUsePollPendingUpdatesTable() ||
        (await o("WAWebModelStorageUtils")
          .getStorage()
          .lock([e], async function (e) {
            var n = e[0],
              r = await n.anyOf(["parentMsgKey"], t);
            r.length > 0 && (await n.bulkRemove(r.map(p)));
          }));
    }
    async function m(t) {
      if (
        !(
          t <= 0 ||
          !o("WAWebPollsPendingUpdatesSchema").canUsePollPendingUpdatesTable()
        )
      ) {
        var n = Date.now() - t * o("WATimeUtils").DAY_MILLISECONDS;
        await o("WAWebModelStorageUtils")
          .getStorage()
          .lock([e], async function (e) {
            var t = e[0],
              r = await t.lessThan(["createdAtMs"], n);
            r.length > 0 && (await t.bulkRemove(r.map(p)));
          });
      }
    }
    function p(e) {
      return [e.parentMsgKey, e.sender, e.payloadType, e.payloadKey];
    }
    ((l.enqueuePollPendingUpdate = s),
      (l.fetchAllForPoll = u),
      (l.drainForDependency = c),
      (l.deleteForPollKeys = d),
      (l.purgeExpiredPendingUpdates = m));
  },
  98,
);
