__d(
  "WAWebInboundMsgDrainUIUpdate",
  ["WALogger", "WAWebMessagePostprocessRenderable", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t) {
      try {
        await o("WAWebMessagePostprocessRenderable").postprocessMessagesOfBatch(
          t,
        );
      } catch (t) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[inbound-msg-queue] updating the UI of a drained batch failed",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .tags("messaging")
          .sendLogs("inbound-msg-drain-ui-update-failed");
      }
    }
    l.updateUIOfDrainedBatch = s;
  },
  98,
);
