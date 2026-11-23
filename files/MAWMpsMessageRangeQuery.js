__d(
  "MAWMpsMessageRangeQuery",
  [
    "EBLS",
    "EBMessageRangeQueryForThreads",
    "LSMEBTaskCreationSource",
    "MSGDataclassTypes.flow",
    "MpsTypes",
    "WAJids",
    "first",
    "last",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.args,
        n = e.messageRangeInfo,
        a = e.messages,
        i = [].concat(a).sort(function (e, t) {
          return (
            e.toplevelProtobuf.protobufTimestampMS -
            t.toplevelProtobuf.protobufTimestampMS
          );
        }),
        l = t.direction === "after" ? n.has_more_after : n.has_more_before,
        s = t.direction === "after" ? n.has_more_before : n.has_more_after,
        u = r("first")(i),
        c = r("last")(i);
      return {
        cursorInfo: {
          endCursor:
            u != null
              ? [
                  o("MpsTypes").toTimestamp(
                    u.toplevelProtobuf.protobufTimestampMS,
                  ),
                  o("MpsTypes").toMessageId(u.otid),
                ]
              : null,
          hasNext: l,
          hasPrevious: s,
          startCursor:
            c != null
              ? [
                  o("MpsTypes").toTimestamp(
                    c.toplevelProtobuf.protobufTimestampMS,
                  ),
                  o("MpsTypes").toMessageId(c.otid),
                ]
              : null,
        },
        messages: i,
      };
    }
    function s(e, t) {
      return t != null && t === r("LSMEBTaskCreationSource").MSGR_DYI
        ? "messenger_dyi"
        : e === "all"
          ? "unknown"
          : e.size === 2 &&
              e.has(o("MSGDataclassTypes.flow").MpsMessageTag.Video) &&
              e.has(o("MSGDataclassTypes.flow").MpsMessageTag.Photo)
            ? "media_gallery_restore"
            : e.size === 1 &&
                e.has(o("MSGDataclassTypes.flow").MpsMessageTag.File)
              ? "file_gallery_restore"
              : "unknown";
    }
    function u(e) {
      var t = Date.now() + 6e4,
        n = Math.max(0, Math.min(e[0], t));
      return ["" + n, void 0];
    }
    async function c(t) {
      var n,
        a = t.ctx,
        i = t.ranges,
        l = t.source,
        c = t.tagsFilter;
      (n = a.metric) == null ||
        n.addAnnotations({ int: { batchSize: i.length } });
      var d = (await o("EBLS").init()).db,
        m = s(c, l),
        p = await o(
          "EBMessageRangeQueryForThreads",
        ).messageRangeQueryForThreads({
          restoreType: "range",
          source: m,
          storage: d,
          threads: i.map(function (e) {
            return {
              chatJid: r("nullthrows")(o("WAJids").validateChatJid(e.threadId)),
              direction: e.direction === "asc" ? "after" : "before",
              from: u(e.from),
              numMessages: e.numMessages,
            };
          }),
        });
      return p.map(function (t) {
        return t.success === !1 ? null : e(t.value);
      });
    }
    l.MAWMpsMessageRangeQuery = c;
  },
  98,
);
