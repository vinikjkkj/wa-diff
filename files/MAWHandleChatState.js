__d(
  "MAWHandleChatState",
  [
    "MAWBridge",
    "MAWBridgeTypesCreators",
    "Promise",
    "WAJids",
    "WALogger",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(t, a, i) {
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "handleChatStatus status for ",
            ": ",
            "",
          ])),
        t,
        i,
      );
      var l = {
        tag: "ReceivedChatState",
        value: o("MAWBridgeTypesCreators").createBridgeReceivedChatState(
          t,
          a,
          i,
        ),
      };
      return (
        r("promiseDone")(
          o("MAWBridge")
            .getBridge()
            .sendAndReceive("event", "receivedChatState", {
              senderId: o("WAJids").extractUserId(a),
              state: i,
              threadJid: t,
            }),
          null,
          function (e) {
            (o("WALogger").ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "ReceivedChatState route was unsupported, falling back on UI handler ",
                  "",
                ])),
              e == null ? void 0 : e.message,
            ),
              o("MAWBridge")
                .getBridge()
                .fireAndForget("event", "uiUpdate", { events: [l] }));
          },
        ),
        (u || (u = n("Promise"))).resolve("NO_ACK")
      );
    }
    var d = function (t) {
        var e = t.jid,
          n = t.participant,
          r = t.status;
        return c(e, n, r);
      },
      m = function (t) {
        var e = t.jid,
          n = t.status;
        return c(e, e, n);
      };
    ((l.handleGroupChatState = d), (l.handleIndividualChatState = m));
  },
  98,
);
