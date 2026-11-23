__d(
  "WebMpsPurgeDeletions",
  ["MAWMpsCleanersContants", "MpsTypes", "WATimeUtils", "WebReverbDB"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["deleted", "supplemental", "tags", "message"];
    function s(t) {
      return o("WebReverbDB")
        .getWebReverbDB()
        .runInTransaction(
          e,
          "readwrite",
          function (e) {
            return u(e, t);
          },
          "web-mps-purge-deletions",
        );
    }
    async function u(e, t) {
      var n = o("MpsTypes").toTimestamp(
          o("WATimeUtils").unixTimeMs() -
            o("MAWMpsCleanersContants").PURGE_DELETED_MESSAGES_WINDOW_IN_MS,
        ),
        r = await e.stores.deleted.readIndexRange("deletionTimestampMs", {
          lessThanOrEqual: [n],
        }),
        a = r.map(function (e) {
          return [e.threadId, e.deletedMessageId];
        });
      t == null || t.addAnnotations({ int: { num_deletions: r.length } });
      var i = Promise.all(
          a.map(function (t) {
            return e.stores.supplemental.readKeysByIndexRange(
              "[threadId+topLevelMessageId+supplementalKey]",
              { only: t },
            );
          }),
        )
          .then(function (e) {
            return e.flat();
          })
          .then(function (t) {
            return e.stores.supplemental.bulkDelete(t);
          }),
        l = Promise.all(
          a.map(function (t) {
            return e.stores.tags.readKeysByIndexRange(
              "[threadId+messageId+tag]",
              { only: t },
            );
          }),
        )
          .then(function (e) {
            return e.flat();
          })
          .then(function (t) {
            return e.stores.tags.bulkDelete(t);
          }),
        s = e.stores.deleted.bulkDelete(
          r.map(function (e) {
            return e.pk;
          }),
        );
      return (await Promise.all([i, l, s]), r.length);
    }
    ((l.PURGE_STORES = e),
      (l.purgeDeletions = s),
      (l.purgeDeletionsInTransaction = u));
  },
  98,
);
