__d(
  "WAWebDebugWriteServerLeadStageAction",
  [
    "WAWebContactManagerCustomerProfileUpsertMutation",
    "WAWebDebugLidInput",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      (r("vulture")("G26JEtJ2MDG-h77pPFXwFgUXf1Y="),
        await o(
          "WAWebContactManagerCustomerProfileUpsertMutation",
        ).upsertCustomerProfileFieldToServer(
          o("WAWebDebugLidInput").parseLidChatJid(e),
          { field: "leadStage", value: t },
        ));
    }
    l.writeServerLeadStageForDebug = e;
  },
  98,
);
