__d(
  "WAWebOfflineSimulatorReceipt",
  ["WATimeUtils", "WAWap", "WAWebCommsWapMd", "WAWebWidFactory"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      for (var t = [], n = 0; n < e; n++) {
        var r,
          a = o("WAWebWidFactory").createWid("16505555555@c.us");
        t.push(
          (r = o("WAWap")).wap("receipt", {
            from: o("WAWebCommsWapMd").CHAT_JID(
              o("WAWebWidFactory").createWid("status@broadcast"),
            ),
            type: "read",
            id: r.CUSTOM_STRING(r.generateId()),
            participant: o("WAWebCommsWapMd").DEVICE_JID(a),
            offline: "0",
            t: r.CUSTOM_STRING(String(o("WATimeUtils").unixTime())),
          }),
        );
      }
      return t;
    }
    l.createReceiptStanza = e;
  },
  98,
);
