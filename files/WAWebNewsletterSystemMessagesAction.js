__d(
  "WAWebNewsletterSystemMessagesAction",
  [
    "Promise",
    "WAWebMsgModelFromData",
    "WAWebNewsletterSystemMessages",
    "WAWebNewsletterUpdateMsgsRecordsJob",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      return t.addQueue.enqueue(
        (e || (e = n("Promise"))).resolve().then(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e,
              n,
              r = o(
                "WAWebNewsletterSystemMessages",
              ).genNewsletterCreationSystemMessages({
                id: t.id,
                name: t.name,
                t: (e = t.newsletterMetadata) == null ? void 0 : e.creationTime,
                role:
                  (n = t.newsletterMetadata) == null
                    ? void 0
                    : n.membershipType,
              }),
              a = r.map(o("WAWebMsgModelFromData").msgModelFromMsgData);
            return (
              yield o(
                "WAWebNewsletterUpdateMsgsRecordsJob",
              ).addNewsletterMsgsRecords(r),
              t.msgs.add(a, { at: 0 }),
              a
            );
          }),
        ),
      );
    }
    l.addSystemMessagesToChat = s;
  },
  98,
);
