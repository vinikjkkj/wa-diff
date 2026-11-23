__d(
  "WAWebOmittedMetadataIndicationJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebOmittedConversationMetadataCapabilities",
    "WAWebOmittedConversationMetadataGating",
    "WAWebOmittedConversationMetadataLookup",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSchemaChat",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getOmittedMetadataIndication",
          function (e) {
            var t = e.chatId;
            return s(t);
          },
          { priority: o("WAJobOrchestratorTypes").JobPriority.UI_ACTION },
        )
        .waitUntilCompleted({ chatId: e });
    }
    async function s(e) {
      if (
        !o(
          "WAWebOmittedConversationMetadataGating",
        ).isOmittedConversationMetadataEnabled() ||
        !o(
          "WAWebOmittedConversationMetadataCapabilities",
        ).canReadOmittedMetadata()
      )
        return { status: "none" };
      var t = await o("WAWebSchemaChat").getChatTable().get(e.toString(), !1);
      if (t == null) return { status: "none" };
      var n = await o(
        "WAWebOmittedConversationMetadataLookup",
      ).getOmittedMetadataIdentityForChat(t);
      return n == null
        ? { status: "none" }
        : { status: "available", historyJid: n.historyId };
    }
    ((l.getOmittedMetadataIndication = e),
      (l.readOmittedMetadataIndication = s));
  },
  98,
);
