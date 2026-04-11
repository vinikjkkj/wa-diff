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
              a = n.get(r.rowId);
            a != null &&
              a.id === String(r.rowId) &&
              a.timestamp === r.t &&
              a.chatId === r.id.remote.toString() &&
              (t.push(r), n.delete(r.rowId));
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
