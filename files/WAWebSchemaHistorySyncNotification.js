__d(
  "WAWebSchemaHistorySyncNotification",
  ["WAWebModelStorageUtils", "WAWebModelStorageVersions", "WAWebStorageSchema"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WAWebModelStorageUtils").getStorage();
      e.add_OPTIMIZED_EXPERIMENT("history-sync-notification", function (e, t) {
        var n,
          r,
          a = t.addColumn,
          i = t.addCompositeIndex,
          l = t.addEncryptedColumn,
          s = t.addIndex,
          u = t.addUserDefinedPrimaryKey;
        return e
          .version(
            (n = o(
              "WAWebModelStorageVersions",
            )).historySyncNotificationsCreateTable(),
            [
              u("msgKey"),
              a("downloadOptions"),
              a("syncType"),
              l(
                "chunkEncryptionKey",
                (r = o("WAWebStorageSchema")).EncryptedValueType.STRING,
              ),
              a("chunkOrder"),
              a("processed"),
              s("syncType"),
              s("chunkOrder"),
              s("processed"),
              a("isReupload"),
              a("historySyncStepStartedTs"),
              a("historySyncPayloadSize"),
              a("reuploadPending"),
              a("downloadedHistorySyncPayload"),
            ],
          )
          .version(n.encryptHistorySyncDirectPath(), [
            l("directPath", r.EncryptedValueType.STRING),
          ])
          .version(n.encryptHistorySyncFilehash(), [
            l("filehash", r.EncryptedValueType.STRING),
            l("encFilehash", r.EncryptedValueType.STRING),
          ])
          .version(n.addInitialHistBootstrapInlinePayloadColumn(), [
            l(
              "initialHistBootstrapInlinePayload",
              r.EncryptedValueType.ARRAY_BUFFER,
            ),
          ])
          .version(n.addPeerDataRequestSessionIdColumn(), [
            a("peerDataRequestSessionId"),
          ])
          .version(n.addPeerDataRequestChatIdColumn(), [
            a("peerDataRequestChatId"),
          ])
          .version(n.addProgressColumn(), [a("progress")])
          .version(n.addProcessedAndSyncTypeCompositeIndex(), [
            i(["processed", "syncType"]),
            l("encHandle", r.EncryptedValueType.STRING),
          ])
          .view(function (e) {
            return e;
          })
          .useDbMsgEncKeyForEncryptedCol(!0)
          .commit();
      });
    }
    function s() {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .table("history-sync-notification");
    }
    ((l.addTable = e), (l.getHistorySyncNotificationTable = s));
  },
  98,
);
