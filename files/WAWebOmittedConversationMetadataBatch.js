__d(
  "WAWebOmittedConversationMetadataBatch",
  [
    "WALongInt",
    "WAWebOmittedConversationMetadataIdentity",
    "WAWebOmittedConversationMetadataStorageTypes",
    "WAWebProtobufsHistorySync.pb",
    "asyncToGeneratorRuntime",
    "encodeProtobuf",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 100;
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            a = e.omittedConversationMetadata;
          if (a == null) throw r("err")("Omitted metadata envelope is missing");
          var i = o("WALongInt").maybeNumber(a.snapshotTimestampMs),
            l = a.batchIndex,
            s = a.batchCount,
            u = a.snapshotId,
            c = a.complete;
          if (i == null || l == null || s == null || u == null || c == null)
            throw r("err")("Omitted metadata controls are incomplete");
          var f = d(u);
          (m(i, l, s, c), p(e, t, l, c), _(e, a.conversations));
          var g = a.conversations.map(
            o("WAWebOmittedConversationMetadataIdentity")
              .getOmittedMetadataIdentity,
          );
          if (
            o(
              "WAWebOmittedConversationMetadataIdentity",
            ).hasDuplicateOmittedMetadataIdentities(g)
          )
            throw r("err")("Omitted metadata repeats a conversation identity");
          var h = o("encodeProtobuf")
              .encodeProtobuf(
                o("WAWebProtobufsHistorySync.pb").HistorySyncSpec,
                e,
              )
              .readByteArrayView(),
            y = yield self.crypto.subtle.digest("SHA-256", h);
          return {
            snapshotId: f,
            timestampMs: o(
              "WAWebOmittedConversationMetadataStorageTypes",
            ).asOmittedMetadataSnapshotTimestampMs(i),
            index: l,
            count: s,
            complete: c,
            transportOrder: l + 1,
            progress: (n = e.progress) != null ? n : 0,
            fingerprint: o(
              "WAWebOmittedConversationMetadataStorageTypes",
            ).asOmittedMetadataFingerprint(
              Array.from(new Uint8Array(y), function (e) {
                return e.toString(16).padStart(2, "0");
              }).join(""),
            ),
            conversations: a.conversations,
            identities: g,
            accounts: e.accounts,
            phoneNumberToLidMappings: e.phoneNumberToLidMappings,
          };
        })),
        u.apply(this, arguments)
      );
    }
    function c(e, t, n) {
      if (e.snapshotId !== t.snapshotId)
        throw r("err")("Omitted metadata does not match the INITIAL snapshot");
      var o = [
        t.expectedBatchCount != null && t.expectedBatchCount !== e.count,
        t.snapshotTimestampMs != null &&
          t.snapshotTimestampMs !== e.timestampMs,
      ];
      if (o.some(Boolean))
        throw r("err")("Omitted metadata snapshot controls changed");
      if (n != null) {
        var a = [
          n.kind !== "batch",
          n.snapshotId !== e.snapshotId,
          n.batchIndex !== e.index,
          n.transportOrder !== e.transportOrder,
          n.fingerprint !== e.fingerprint,
        ];
        if (a.some(Boolean))
          throw r("err")("Omitted metadata retry content changed");
        return !0;
      }
      if (e.index !== t.nextBatchIndex)
        throw r("err")("Omitted metadata batch is out of order");
      if (t.ordinaryHistoryObserved)
        throw r("err")(
          "Omitted metadata arrived after ordinary RECENT history",
        );
      return !1;
    }
    function d(e) {
      if (
        !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
          e,
        )
      )
        throw r("err")("Omitted metadata snapshot identifier is not a UUID");
      return o(
        "WAWebOmittedConversationMetadataStorageTypes",
      ).asOmittedMetadataSnapshotId(e);
    }
    function m(e, t, n, o) {
      var a = [
        Number.isSafeInteger(e),
        e >= 0,
        Number.isInteger(t),
        Number.isInteger(n),
        t >= 0,
        n > 0,
        t < n,
      ];
      if (!a.every(Boolean))
        throw r("err")("Omitted metadata batch controls are invalid");
      if (o !== (t === n - 1))
        throw r("err")(
          "Omitted metadata completion flag does not match its batch",
        );
    }
    function p(t, n, a, i) {
      var l,
        s,
        u = [
          t.syncType ===
            o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
              .RECENT,
          n.syncType ===
            o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
              .RECENT,
          t.chunkOrder === a + 1,
          n.chunkOrder == null || n.chunkOrder === t.chunkOrder,
          n.peerDataRequestSessionId == null,
          ((l = n.progress) != null ? l : 0) ===
            ((s = t.progress) != null ? s : 0),
          t.progress !== e || i,
        ];
      if (!u.every(Boolean))
        throw r("err")(
          "Omitted metadata transport does not match its notification",
        );
    }
    function _(e, t) {
      var n = [
          e.conversations,
          e.statusV3Messages,
          e.pushnames,
          e.recentStickers,
          e.favoriteStickers,
          e.callLogRecords,
          e.inlineContacts,
          e.pastParticipants,
        ],
        o = [
          e.globalSettings,
          e.threadIdUserSecret,
          e.threadDsTimeframeOffset,
          e.aiWaitListState,
          e.companionMetaNonce,
          e.shareableChatIdentifierEncryptionKey,
          e.nctSalt,
          e.inlineContactsProvided,
          e.omittedConversationMetadataSnapshotId,
        ];
      if (
        n.some(function (e) {
          return e.length !== 0;
        }) ||
        o.some(function (e) {
          return e != null;
        })
      )
        throw r("err")("Omitted metadata contains unrelated history data");
      if (
        t.some(function (e) {
          return e.messages.length !== 0;
        })
      )
        throw r("err")("Omitted metadata contains messages");
      if (
        t.some(function (e) {
          return [e.endOfHistoryTransfer, e.endOfHistoryTransferType].some(
            function (e) {
              return e != null;
            },
          );
        })
      )
        throw r("err")("Omitted metadata contains a history transfer boundary");
    }
    ((l.prepareOmittedMetadataBatch = s),
      (l.validateOmittedMetadataSession = c),
      (l.validateOmittedMetadataSnapshotId = d));
  },
  98,
);
