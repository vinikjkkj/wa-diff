__d(
  "MAWDebugSendMultipleMsgs",
  [
    "MAWBridge",
    "MAWExternalId",
    "MAWLoggerUtils",
    "Promise",
    "WADevToolsDebugFns",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = o("WADevToolsDebugFns").defineDebugFunction("sendMultipleMsgs", {
        desc: "Sends multiple messages to a thread",
        execute: function (a, i) {
          return (e || (e = n("Promise"))).all(
            Array.from(Array(i).keys()).map(function (e) {
              return o("MAWBridge")
                .getBridge()
                .sendAndReceive("backend", "sendMsg", {
                  args: { content: e + " message" },
                  chatJid: a,
                  externalId: o("MAWExternalId").generateExternalId(),
                  qplEventType: r("qpl")._(25313175, "1551"),
                  qplInstanceKey: o("MAWLoggerUtils").createInstanceKey(),
                });
            }),
          );
        },
        serializedArgs: [
          {
            desc: "ChatJid of the thread to send messages to",
            name: "chatJid",
            placeholder: "1234@msgr",
            type: "string",
          },
          {
            desc: "Number of messages to send",
            name: "numberOfMsgs",
            placeholder: "100",
            type: "number",
          },
        ],
      });
    l.sendMultipleMsgs = s;
  },
  98,
);
