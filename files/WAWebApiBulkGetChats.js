__d(
  "WAWebApiBulkGetChats",
  ["WAWebSchemaChat"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebSchemaChat")
        .getChatTable()
        .bulkGet(
          e.map(function (e) {
            return e.toString();
          }),
        );
    }
    l.bulkGetChats = e;
  },
  98,
);
