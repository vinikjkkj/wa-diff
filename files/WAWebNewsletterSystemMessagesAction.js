__d(
  "WAWebNewsletterSystemMessagesAction",
  [
    "WAWebMsgModelFromData",
    "WAWebNewsletterSystemMessages",
    "WAWebNewsletterUpdateMsgsRecordsJob",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e.addQueue.enqueue(
        Promise.resolve().then(async function () {
          var t,
            n,
            r = o(
              "WAWebNewsletterSystemMessages",
            ).genNewsletterCreationSystemMessages({
              id: e.id,
              name: e.name,
              t: (t = e.newsletterMetadata) == null ? void 0 : t.creationTime,
              role:
                (n = e.newsletterMetadata) == null ? void 0 : n.membershipType,
            }),
            a = r.map(o("WAWebMsgModelFromData").msgModelFromMsgData);
          return (
            await o(
              "WAWebNewsletterUpdateMsgsRecordsJob",
            ).addNewsletterMsgsRecords(r),
            e.msgs.add(a, { at: 0 }),
            a
          );
        }),
      );
    }
    l.addSystemMessagesToChat = e;
  },
  98,
);
