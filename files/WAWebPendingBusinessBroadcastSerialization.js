__d(
  "WAWebPendingBusinessBroadcastSerialization",
  ["asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i) {
    function e(e, t) {
      return l.apply(this, arguments);
    }
    function l() {
      return (
        (l = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = null,
            r = null,
            o = e.mediaFile;
          return (
            o != null &&
              ((n = yield o.arrayBuffer()),
              (r = JSON.stringify({
                lastModified: o.lastModified,
                name: o.name,
                type: o.type,
              }))),
            {
              messageRow: {
                ctaButtonJson: e.ctaButtonJson,
                mediaData: n,
                mediaMetadata: r,
                messageBody: e.messageBody,
                pendingBroadcastMessageId: t,
              },
              parentRow: {
                adGroupId: e.adGroupId,
                broadcastJid: e.broadcastJid,
                freeReservedMsgs: e.freeReservedMsgs,
                pendingBroadcastMessageId: t,
                sendTimestamp: e.sendTimestamp,
              },
            }
          );
        })),
        l.apply(this, arguments)
      );
    }
    function s(e, t) {
      var n = null,
        r = t.mediaData,
        o = t.mediaMetadata;
      if (r != null && o != null) {
        var a = JSON.parse(o);
        n = new File([r], a.name, {
          lastModified: a.lastModified,
          type: a.type,
        });
      }
      return {
        adGroupId: e.adGroupId,
        broadcastJid: e.broadcastJid,
        ctaButtonJson: t.ctaButtonJson,
        freeReservedMsgs: e.freeReservedMsgs,
        mediaFile: n,
        messageBody: t.messageBody,
        sendTimestamp: e.sendTimestamp,
      };
    }
    ((i.serializePendingBusinessBroadcast = e),
      (i.deserializePendingBusinessBroadcast = s));
  },
  66,
);
