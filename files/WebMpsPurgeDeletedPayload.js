__d(
  "WebMpsPurgeDeletedPayload",
  [
    "MAWMpsCleanersContants",
    "MpsTypes",
    "WATimeUtils",
    "WebMpsPurgeDeletions",
    "WebReverbDB",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("WebReverbDB")
        .getWebReverbDB()
        .runInTransaction(
          o("WebMpsPurgeDeletions").PURGE_STORES,
          "readwrite",
          function (t) {
            return s(t, e);
          },
          "web-mps-purge-deletions",
        );
    }
    async function s(e, t) {
      var n = o("MpsTypes").toTimestamp(
          o("WATimeUtils").unixTimeMs() -
            o("MAWMpsCleanersContants").REPORTING_WINDOW_IN_MS,
        ),
        r = await e.stores.deleted.readIndexRange("deletionTimestampMs", {
          lessThanOrEqual: [n],
        }),
        a = r.filter(function (e) {
          return e.payload != null;
        });
      return (
        t == null || t.addAnnotations({ int: { num_deletions: a.length } }),
        await e.stores.deleted.bulkPut(
          a.map(function (e) {
            return babelHelpers.extends({}, e, {
              payload: null,
              timestampMs: null,
            });
          }),
        ),
        a.length
      );
    }
    function u() {
      return o("WebReverbDB")
        .getWebReverbDB()
        .runInTransaction(
          ["deleted"],
          "readonly",
          c,
          "web-mps-next-deletion-timestamp-ms",
        );
    }
    async function c(e) {
      var t = o("MpsTypes").toTimestamp(
          o("WATimeUtils").unixTimeMs() -
            o("MAWMpsCleanersContants").REPORTING_WINDOW_IN_MS,
        ),
        n = await e.stores.deleted.readIndexRange(
          "deletionTimestampMs",
          { greaterThan: [t] },
          { order: "asc" },
        ),
        r = n.filter(function (e) {
          return e.payload != null;
        });
      if (!(r.length === 0 || r[0].deletionTimestampMs == null))
        return o("WATimeUtils").castMilliSecondsToUnixTime(
          r[0].deletionTimestampMs +
            o("MAWMpsCleanersContants").REPORTING_WINDOW_IN_MS,
        );
    }
    ((l.purgeDeletedPayload = e),
      (l.purgeDeletedPayloadInTransaction = s),
      (l.getNextDeletionTimestampMs = u),
      (l.nextDeletionTimestampInTransaction = c));
  },
  98,
);
