__d(
  "WAWebPollsDbSerialization",
  ["WAWebMsgKey", "WAWebWidFactory"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = {
        msgKey: e.msgKey.toString(),
        parentMsgKey: e.parentMsgKey.toString(),
        selectedOptionLocalIds: new Uint8Array(e.selectedOptionLocalIds).buffer,
        senderTimestampMs: e.senderTimestampMs,
        sender: e.sender.toString(),
        read: e.read,
      };
      return (
        e.t != null && (t.t = e.t),
        e.ack != null && (t.ack = e.ack),
        e.lastSuccessfulSelectedOptionLocalIds != null &&
          (t.lastSuccessfulSelectedOptionLocalIds = new Uint8Array(
            e.lastSuccessfulSelectedOptionLocalIds,
          ).buffer),
        t
      );
    }
    function s(e) {
      var t;
      return {
        msgKey: r("WAWebMsgKey").fromString(e.msgKey),
        parentMsgKey: r("WAWebMsgKey").fromString(e.parentMsgKey),
        selectedOptionLocalIds: Array.from(
          new Uint8Array(e.selectedOptionLocalIds),
        ),
        senderTimestampMs: e.senderTimestampMs,
        t: e.t,
        sender: o("WAWebWidFactory").createUserWidOrThrow(e.sender),
        ack: e.ack,
        read: (t = e.read) != null ? t : !0,
        lastSuccessfulSelectedOptionLocalIds:
          e.lastSuccessfulSelectedOptionLocalIds != null
            ? Array.from(new Uint8Array(e.lastSuccessfulSelectedOptionLocalIds))
            : void 0,
      };
    }
    ((l.dbRowFromVote = e), (l.voteFromDbRow = s));
  },
  98,
);
