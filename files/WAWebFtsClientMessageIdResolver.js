__d(
  "WAWebFtsClientMessageIdResolver",
  ["WAWebDBMessageSerialization", "WAWebSchemaMessage"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.map(function (e) {
          return +e.id;
        }),
        n = new Map(
          e.map(function (e) {
            return [+e.id, e];
          }),
        );
      return o("WAWebSchemaMessage")
        .getMessageTable()
        .anyOf(["rowId"], t)
        .then(function (e) {
          var t = [];
          e.forEach(function (e) {
            var r = o("WAWebDBMessageSerialization").messageFromDbRow(e),
              a = r.rowId,
              i = a != null ? n.get(a) : void 0;
            i != null &&
              a != null &&
              i.id === String(r.rowId) &&
              i.timestamp === r.t &&
              i.chatId === r.id.remote.toString() &&
              (t.push(r), n.delete(a));
          });
          var r = Array.from(n.keys(), function (e) {
            return String(e);
          });
          return (
            t.sort(function (e, t) {
              return t.t - e.t;
            }),
            { resolved: t, unresolved: r }
          );
        });
    }
    l.resolveMsgIds = e;
  },
  98,
);
