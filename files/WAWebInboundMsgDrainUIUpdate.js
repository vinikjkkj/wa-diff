__d(
  "WAWebInboundMsgDrainUIUpdate",
  [
    "WALogger",
    "WAWebMessagePostprocessRenderable",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            yield o(
              "WAWebMessagePostprocessRenderable",
            ).postprocessMessagesOfBatch(t);
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
        })),
        u.apply(this, arguments)
      );
    }
    l.updateUIOfDrainedBatch = s;
  },
  98,
);
