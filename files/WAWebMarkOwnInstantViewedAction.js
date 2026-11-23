__d(
  "WAWebMarkOwnInstantViewedAction",
  [
    "WALogger",
    "WAWebAck",
    "WAWebDBUpdateMessageTable",
    "WAWebFrontendMsgGetters",
    "WAWebInstantMsgTypes",
    "WAWebMsgGetters",
    "WAWebSchemaMessage",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t) {
      var n;
      if (
        !(
          !o("WAWebInstantMsgTypes").isInstantMsgType(t.type) ||
          !o("WAWebMsgGetters").getIsSentByMe(t) ||
          t.instantPlayedSelf === !0 ||
          t.ack < o("WAWebAck").ACK.SENT ||
          t.ack >= o("WAWebAck").ACK.PLAYED ||
          ((n = o("WAWebFrontendMsgGetters").getMaybeChat(t)) == null
            ? void 0
            : n.contact.isContactBlocked) === !0 ||
          !o("WAWebInstantMsgTypes").isInstantTypeReceiverEnabled(t.type)
        )
      ) {
        t.instantPlayedSelf = !0;
        try {
          if (
            (await o("WAWebSchemaMessage")
              .getMessageTable()
              .get(t.id.toString())) == null
          ) {
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "instants: my own Zap is not stored under its in-memory key",
                  ])),
              )
              .sendLogs("instants-own-zap-viewed-not-stored");
            return;
          }
          await o("WAWebDBUpdateMessageTable").updateMessageTable(t.id, {
            instantPlayedSelf: !0,
          });
        } catch (e) {
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "instants: storing that I viewed my own Zap failed",
                ])),
            )
            .catching(r("getErrorSafe")(e));
        }
      }
    }
    l.markOwnInstantViewed = u;
  },
  98,
);
