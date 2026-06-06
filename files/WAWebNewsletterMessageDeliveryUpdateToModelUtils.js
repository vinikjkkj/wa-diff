__d(
  "WAWebNewsletterMessageDeliveryUpdateToModelUtils",
  [
    "WAWebNewsletterDBUtils",
    "WAWebNewsletterGetMessagesJob",
    "WAWebNewsletterUpdateMsgsRecordsJob",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t, n) {
      var r = await o("WAWebNewsletterDBUtils").bulkGetMessagesByServerIds(
          t.map(function (e) {
            return e.id;
          }),
          e,
        ),
        a = [],
        i = t.map(async function (t) {
          var n = t.id,
            i = r.get(t.id);
          if (i == null) {
            var l = await o(
                "WAWebNewsletterGetMessagesJob",
              ).getNewsletterMessages(e, 1, { after: n - 1 }),
              s = l.msgs[0];
            if (s == null) return null;
            ((i = s), a.push(i));
          }
          return babelHelpers.extends({}, t, {
            msgData: i,
            serverId: t.id,
            id: i.id,
          });
        });
      a.length > 0 &&
        (await o(
          "WAWebNewsletterUpdateMsgsRecordsJob",
        ).addNewsletterMsgsRecords(a));
      var l = await o("WAWebNewsletterDBUtils").bulkGetMessagesByServerIds(
          n,
          e,
        ),
        s = n.map(async function (e) {
          var t = l.get(e);
          return t == null ? null : t.id;
        });
      return {
        modelUpdatesToAdd: (await Promise.all(i)).filter(Boolean),
        modelUpdatesToRemove: (await Promise.all(s)).filter(Boolean),
      };
    }
    l.getMessageDeliveryUpdatesModelToUpdate = e;
  },
  98,
);
