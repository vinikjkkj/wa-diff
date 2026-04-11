__d(
  "WAWebStorageChatHookExpectLidOriginType",
  ["WAWebSchemaChat", "WAWebWid", "err"],
  function (t, n, r, o, a, i, l) {
    var e = {
      type: "creating",
      callback: function (t, n) {
        if (r("WAWebWid").isStringLid(n.id) && n.lidOriginType == null)
          throw r("err")("Lid origin type is missing in chat table");
      },
    };
    function s() {
      o("WAWebSchemaChat").getChatTable().addHook(e);
    }
    l.initializeHook = s;
  },
  98,
);
