__d(
  "WAWebDebugWriteServerLeadStageAction",
  [
    "WAWebContactManagerCustomerProfileUpsertMutation",
    "WAWebDebugLidInput",
    "asyncToGeneratorRuntime",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          (r("vulture")("G26JEtJ2MDG-h77pPFXwFgUXf1Y="),
            yield o(
              "WAWebContactManagerCustomerProfileUpsertMutation",
            ).upsertCustomerProfileFieldToServer(
              o("WAWebDebugLidInput").parseLidChatJid(e),
              { field: "leadStage", value: t },
            ));
        })),
        s.apply(this, arguments)
      );
    }
    l.writeServerLeadStageForDebug = e;
  },
  98,
);
