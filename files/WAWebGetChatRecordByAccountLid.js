__d(
  "WAWebGetChatRecordByAccountLid",
  ["WAWebSchemaChat"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebSchemaChat")
        .getChatTable()
        .anyOf(["accountLid"], [e.toString()]);
    }
    l.getChatRecordByAccountLid = e;
  },
  98,
);
