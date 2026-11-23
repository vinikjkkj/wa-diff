__d(
  "MpsFtsPostProcessor",
  [
    "FtsIndexEntity",
    "MawMpsMessagePayloadUtils",
    "MpsErrors",
    "MpsTypes",
    "WebMps",
    "cr:19391",
    "isWAFTSContentSearchEnabled",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = n("cr:19391");
      return t == null
        ? o("WebMps")
            .mps()
            .loadMessage(e)
            .then(function (e) {
              var t = e.value;
              return t;
            })
        : t
            .runMps(
              {
                boundary: "load_message",
                code: "read_failed",
                subject: e.debug.purpose,
              },
              function (n) {
                return t.loadMessage(n, e);
              },
            )
            .then(function (e) {
              return e.getOrNull();
            });
    }
    async function s(e) {
      if (!r("isWAFTSContentSearchEnabled")()) return new Map();
      var t = [];
      for (var n of e) {
        if (await u(n)) {
          t.push(
            o("FtsIndexEntity").toIndexMessageEntity(
              n.directive.targetMessageId,
            ),
          );
          continue;
        }
        if (c(n)) {
          t.push(
            o("FtsIndexEntity").toIndexMessageEntity(
              n.directive.targetMessageId,
            ),
          );
          continue;
        }
        if (d(n)) {
          t.push(
            o("FtsIndexEntity").toPurgeMessageEntity(
              n.directive.targetMessageId,
            ),
          );
          continue;
        }
        if (m(n)) {
          t.push(o("FtsIndexEntity").toPurgeThreadEntity(n.message.threadId));
          continue;
        }
      }
      if (t.length === 0) return new Map();
      var a = new Map();
      return (
        await o("FtsIndexEntity")
          .FTS_INDEX_QUEUE.add(t)
          .catch(function (t) {
            var n = o("MpsErrors").MpsErrors.classify(
              t,
              "fts_index_queue",
              "write_failed",
            );
            for (var r of e) a.set(r.message.messageId, n);
          }),
        a
      );
    }
    async function u(t) {
      return (
        t.directive.actionType ===
          o("MpsTypes").ActionType.UpsertSupplemental &&
        o("MawMpsMessagePayloadUtils").MawMpsMessagePayloadUtils.getContent(
          t.message.payload,
          "edit",
        ) != null &&
        (await e({
          config: {
            shouldFetchSupplementals: !1,
            shouldFetchTags: !1,
            strategy: "local-only",
          },
          debug: { purpose: "MpsFtsPostProcessor_shouldIndexSupplemental" },
          messageId: t.directive.targetMessageId,
          threadId: t.message.threadId,
        }).then(function (e) {
          return e != null ? e.expiryTimestampMs == null : !1;
        }))
      );
    }
    function c(e) {
      return (
        e.directive.actionType === o("MpsTypes").ActionType.UpsertTopLevel &&
        e.directive.expiryTimestampMs == null &&
        o("MawMpsMessagePayloadUtils").MawMpsMessagePayloadUtils.getContent(
          e.message.payload,
          "create",
        ) != null
      );
    }
    function d(e) {
      return e.directive.actionType === o("MpsTypes").ActionType.DeleteTopLevel;
    }
    function m(e) {
      return e.directive.actionType === o("MpsTypes").ActionType.DeleteThread;
    }
    var p = { name: "MpsFtsPostProcessor", process: s };
    l.MpsFtsPostProcessor = p;
  },
  98,
);
