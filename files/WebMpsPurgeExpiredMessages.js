__d(
  "WebMpsPurgeExpiredMessages",
  ["MpsTypes", "WATimeUtils", "WebMps", "WebReverbDB"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
      "debugFlags",
      "expiryTimestampMs",
      "isLocalOnlyMessage",
      "isTransportErrorPlaceholder",
      "pk",
      "timestampMs",
    ];
    async function s(e, t) {
      var n = o("MpsTypes").toTimestamp(o("WATimeUtils").unixTimeMs()),
        r = await o("WebReverbDB")
          .getWebReverbDB()
          .runInTransaction(
            ["message", "deleted"],
            "readonly",
            function (e) {
              return u(e, n, t);
            },
            "web-mps-purge-deletions",
          );
      if (r.length === 0) return 0;
      var a = 0;
      return (
        await o("WebMps")
          .mps()
          .saveNewMessages(
            c(r, e, n),
            { source: "purge-expired-messages" },
            function (e) {
              a = e.size;
            },
          ),
        r.length - a
      );
    }
    async function u(e, t, n) {
      var r = await e.stores.message.readIndexRange("expiryTimestampMs", {
        lessThanOrEqual: [t],
      });
      return (
        n == null ||
          n.addAnnotations({ int: { num_expired_messages: r.length } }),
        r
      );
    }
    function c(t, n, r) {
      return t.map(function (t) {
        var a = t.debugFlags,
          i = t.expiryTimestampMs,
          l = t.isLocalOnlyMessage,
          s = t.isTransportErrorPlaceholder,
          u = t.pk,
          c = t.timestampMs,
          d = babelHelpers.objectWithoutPropertiesLoose(t, e);
        return {
          insertionSource: o("MpsTypes").InsertionSource.Send,
          message: n(babelHelpers.extends({}, d, { timestampMs: r })),
        };
      });
    }
    function d() {
      return o("WebReverbDB")
        .getWebReverbDB()
        .runInTransaction(
          ["message"],
          "readonly",
          m,
          "web-mps-next-expiry-timestamp-ms",
        );
    }
    async function m(e) {
      var t = o("MpsTypes").toTimestamp(o("WATimeUtils").unixTimeMs()),
        n = await e.stores.message.readIndexRange(
          "expiryTimestampMs",
          { greaterThan: [t] },
          { limit: 1, order: "asc" },
        );
      if (!(n.length === 0 || n[0].expiryTimestampMs == null))
        return o("WATimeUtils").castMilliSecondsToUnixTime(
          n[0].expiryTimestampMs,
        );
    }
    ((l.purgeExpiredMessages = s),
      (l.readExpiredInTransaction = u),
      (l.tombstonesOf = c),
      (l.getNextExpiryTimestampMs = d),
      (l.nextExpiryTimestampInTransaction = m));
  },
  98,
);
