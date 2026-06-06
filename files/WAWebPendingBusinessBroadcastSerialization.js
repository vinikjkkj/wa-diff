__d(
  "WAWebPendingBusinessBroadcastSerialization",
  [],
  function (t, n, r, o, a, i) {
    async function e(e, t) {
      var n = null,
        r = null,
        o = e.mediaFile;
      return (
        o != null &&
          ((n = await o.arrayBuffer()),
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
    }
    function l(e, t) {
      var n = null,
        r = null,
        o = null,
        a = null,
        i = t.mediaData,
        l = t.mediaMetadata;
      if (l != null) {
        var s = JSON.parse(l);
        (s.catalogWid != null &&
          ((r = s.catalogWid), (o = s.productId), (a = s.productImageUrl)),
          i != null &&
            s.name != null &&
            (n = new File([i], s.name, {
              lastModified: s.lastModified,
              type: s.type,
            })));
      }
      return {
        adGroupId: e.adGroupId,
        broadcastJid: e.broadcastJid,
        catalogWid: r,
        ctaButtonJson: t.ctaButtonJson,
        freeReservedMsgs: e.freeReservedMsgs,
        mediaFile: n,
        messageBody: t.messageBody,
        productId: o,
        productImageUrl: a,
        sendTimestamp: e.sendTimestamp,
      };
    }
    ((i.serializePendingBusinessBroadcast = e),
      (i.deserializePendingBusinessBroadcast = l));
  },
  66,
);
