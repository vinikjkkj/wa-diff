__d(
  "WAWebHandleMsgReceiptUtils",
  ["WAWebAck"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return (
        e === o("WAWebAck").ACK_STRING.READ ||
        e === o("WAWebAck").ACK_STRING.READ_SELF ||
        e === o("WAWebAck").ACK_STRING.PLAYED ||
        e === o("WAWebAck").ACK_STRING.PLAYED_SELF
      );
    }
    function s(e) {
      return e.receipts.map(function (t) {
        return {
          type: "simple",
          stanzaId: e.externalId,
          externalIds: [e.externalId],
          from: e.from,
          participant: t.participant,
          participantPn: t.participantPn,
          participantUsername: t.participantUsername,
          recipient: null,
          ts: t.ts,
          ack: e.ack,
          ackString: e.ackString,
          offline: e.offline,
          biz: null,
          isLidBot: !1,
        };
      });
    }
    function u(e) {
      return e.receipts.map(function (t) {
        return {
          type: "simple",
          stanzaId: e.externalId,
          externalIds: [e.externalId],
          from: e.from,
          participant: t.participant,
          participantPn: t.participantPn,
          participantUsername: t.participantUsername,
          recipient: null,
          ts: t.ts,
          ack: t.ack,
          ackString: t.ackString,
          offline: e.offline,
          biz: null,
          isLidBot: !1,
        };
      });
    }
    ((l.isReadOrPlayedReceipt = e),
      (l.deaggregateGroupedByTypeReceipt = s),
      (l.deaggregateGroupedByMessageReceipt = u));
  },
  98,
);
