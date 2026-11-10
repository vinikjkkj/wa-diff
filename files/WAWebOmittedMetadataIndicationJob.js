__d(
  "WAWebOmittedMetadataIndicationJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebOmittedConversationMetadataCapabilities",
    "WAWebOmittedConversationMetadataGating",
    "WAWebOmittedConversationMetadataLookup",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSchemaChat",
    "asyncToGeneratorRuntime",
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
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted({ chatId: e });
    }
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            !o(
              "WAWebOmittedConversationMetadataGating",
            ).isOmittedConversationMetadataEnabled() ||
            !o(
              "WAWebOmittedConversationMetadataCapabilities",
            ).canReadOmittedMetadata()
          )
            return { status: "none" };
          var t = yield o("WAWebSchemaChat")
            .getChatTable()
            .get(e.toString(), !1);
          if (t == null) return { status: "none" };
          var n = yield o(
            "WAWebOmittedConversationMetadataLookup",
          ).getOmittedMetadataIdentityForChat(t);
          return n == null
            ? { status: "none" }
            : { status: "available", historyJid: n.historyId };
        })),
        u.apply(this, arguments)
      );
    }
    ((l.getOmittedMetadataIndication = e),
      (l.readOmittedMetadataIndication = s));
  },
  98,
);
