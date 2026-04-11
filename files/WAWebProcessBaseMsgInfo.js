__d(
  "WAWebProcessBaseMsgInfo",
  [],
  function (t, n, r, o, a, i) {
    var e = function (t) {
        return {
          id: t.id,
          from: t.from,
          to: t.to,
          type: t.type,
          t: t.t,
          ack: t.ack,
          count: null,
          author: t.author,
          notifyName: t.notifyName,
          invis: t.invis,
          subtype: t.subtype,
          viewMode: t.viewMode,
        };
      },
      l = function (t) {
        return {
          id: t.id,
          from: t.from,
          to: t.to,
          type: t.type,
          t: t.t,
          ack: t.ack,
          count: null,
          author: t.author,
          notifyName: t.notifyName,
          invis: t.invis,
          subtype: t.subtype,
          viewMode: t.viewMode,
        };
      };
    ((i.msgToBaseMsgInfo = e), (i.msgDataToBaseMsgInfo = l));
  },
  66,
);
