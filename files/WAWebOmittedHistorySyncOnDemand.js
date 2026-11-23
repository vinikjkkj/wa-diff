__d(
  "WAWebOmittedHistorySyncOnDemand",
  [
    "WAJids",
    "WAWebDBMessageUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebOmittedConversationMetadataCapabilities",
    "WAWebOmittedConversationMetadataGating",
    "WAWebOmittedConversationMetadataIdentity",
    "WAWebOmittedConversationMetadataStore",
    "WAWebProtobufsHistorySync.pb",
    "WAWebSchemaChat",
    "WAWebSchemaMessage",
    "WAWebSchemaOmittedConversationMetadata",
    "WAWebSyncGatingUtils",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        o(
          "WAWebOmittedConversationMetadataGating",
        ).isOmittedConversationMetadataEnabled() && s()
      );
    }
    function s() {
      return (
        o("WAWebSyncGatingUtils").isHistorySyncOnDemandSupportedByPrimary() &&
        o(
          "WAWebOmittedConversationMetadataCapabilities",
        ).canReadOmittedMetadata()
      );
    }
    var u = 100,
      c = [
        "ciphertext",
        "debug_placeholder",
        "message_history_notice",
        "unknown",
      ];
    function d(e) {
      return p(e, o("WAWebDBMessageUtils").beginningOfChat(e));
    }
    async function m(e, t) {
      var n;
      if (
        t.syncType !==
        o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.ON_DEMAND
      )
        return null;
      var r = t.peerDataRequestChatId;
      if (
        e.syncType !==
          o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
            .ON_DEMAND ||
        e.conversations.length !== 1 ||
        t.peerDataRequestSessionId == null ||
        r == null ||
        !s()
      )
        return null;
      var a = await o(
          "WAWebOmittedConversationMetadataStore",
        ).getCurrentOmittedMetadataSnapshot(),
        i = await o("WAWebSchemaOmittedConversationMetadata")
          .getOmittedConversationMetadataTable()
          .get(
            o(
              "WAWebOmittedConversationMetadataIdentity",
            ).parseOmittedMetadataChatJid(r),
          );
      if (
        a == null ||
        (i == null ? void 0 : i.kind) !== "metadata" ||
        i.snapshotId !== a.snapshotId
      )
        return null;
      var l = o(
          "WAWebOmittedConversationMetadataIdentity",
        ).getStoredOmittedMetadataIdentity(i),
        u = e.conversations[0],
        c = o(
          "WAWebOmittedConversationMetadataIdentity",
        ).parseOmittedMetadataChatJid(u.id);
      if (c !== l.historyId && c !== l.accountLid) return null;
      var m =
        (n = l.accountLid) != null
          ? n
          : o("WAJids").validateLidUserJid(l.historyId);
      if (
        u.accountLid != null &&
        o(
          "WAWebOmittedConversationMetadataIdentity",
        ).parseOmittedMetadataAccountLid(u.accountLid) !== m
      )
        return null;
      var p = await o("WAWebSchemaChat")
          .getChatTable()
          .bulkGet(
            [l.accountLid, l.historyId].filter(Boolean).map(function (e) {
              return o("WAWebWidFactory").createWid(e).toString();
            }),
          ),
        _ = p.find(function (e) {
          return (
            e != null &&
            o("WAWebOmittedConversationMetadataIdentity").metadataMatchesChat(
              l,
              e,
            )
          );
        });
      return _ == null ||
        (await d(o("WAWebWidFactory").createWid(_.id))) == null
        ? null
        : _;
    }
    async function p(e, t) {
      var n,
        a = await o("WAWebSchemaMessage")
          .getMessageTable()
          .between(["internalId"], t, o("WAWebDBMessageUtils").endOfChat(e), {
            limit: u,
            reverse: !1,
            shouldDecrypt: !1,
          }),
        i = a.find(function (e) {
          return (
            e.t > 0 &&
            !o("WAWebMsgType").SYSTEM_MESSAGE_TYPES.includes(e.type) &&
            !c.includes(e.type)
          );
        });
      if (i != null)
        return {
          id: r("WAWebMsgKey").fromString(i.id),
          timestampMs: i.t * 1e3,
        };
      var l = (n = a[a.length - 1]) == null ? void 0 : n.internalId;
      return a.length < u || l == null ? null : p(e, l + "\0");
    }
    ((l.isOmittedHistorySyncOnDemandEnabled = e),
      (l.isOmittedHistorySyncOnDemandSupported = s),
      (l.getOmittedHistorySyncAnchor = d),
      (l.getOmittedHistorySyncChat = m));
  },
  98,
);
