__d(
  "WAWebOmittedConversationMetadataLookup",
  [
    "WAJids",
    "WAWebOmittedConversationMetadataCapabilities",
    "WAWebOmittedConversationMetadataIdentity",
    "WAWebOmittedConversationMetadataStore",
    "WAWebSchemaOmittedConversationMetadata",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = await s(e);
      return t == null
        ? null
        : o(
            "WAWebOmittedConversationMetadataIdentity",
          ).getStoredOmittedMetadataIdentity(t);
    }
    async function s(e) {
      if (
        !o(
          "WAWebOmittedConversationMetadataCapabilities",
        ).canReadOmittedMetadata()
      )
        return null;
      var t = await o(
        "WAWebOmittedConversationMetadataStore",
      ).getCurrentOmittedMetadataSnapshot();
      if (t == null) return null;
      var n = o("WAJids").validateChatJid(
        o("WAWebWidFactory").createWid(e.id).toJid(),
      );
      if (n == null) return null;
      var r =
          e.historyChatId == null || e.historyChatId === ""
            ? null
            : o("WAJids").validateChatJid(
                o("WAWebWidFactory").createWid(e.historyChatId).toJid(),
              ),
        a =
          e.accountLid == null
            ? null
            : o("WAJids").validateLidUserJid(
                o("WAWebWidFactory").createWid(e.accountLid).toJid(),
              ),
        i = o(
          "WAWebSchemaOmittedConversationMetadata",
        ).getOmittedConversationMetadataTable(),
        l = await Promise.all([
          i.bulkGet([n, r, a].filter(Boolean)),
          i.equals(["accountLid"], a != null ? a : n),
        ]),
        s = l[0],
        u = l[1];
      return o(
        "WAWebOmittedConversationMetadataIdentity",
      ).selectOmittedMetadataForChat(
        []
          .concat(s, u)
          .filter(Boolean)
          .filter(function (e) {
            return e.snapshotId === t.snapshotId;
          }),
        { id: n, historyId: r, accountLid: a },
      );
    }
    l.getOmittedMetadataIdentityForChat = e;
  },
  98,
);
