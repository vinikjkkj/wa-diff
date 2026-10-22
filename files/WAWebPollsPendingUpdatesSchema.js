__d(
  "WAWebPollsPendingUpdatesSchema",
  [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder",
    "WAWebStorageSchema",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WAWebModelStorageUtils").getStorage(),
        t = o("WAWebStorageMutationBuilder").columnBuilder(e.config),
        n = t.addColumn,
        r = t.addCompositeIndex,
        a = t.addCompositePrimaryKey,
        i = t.addEncryptedColumn,
        l = t.addIndex;
      e.add("poll-pending-updates")
        .version(
          o("WAWebModelStorageVersions").pollPendingUpdatesCreateTable(),
          [
            a(["parentMsgKey", "sender", "payloadType", "payloadKey"]),
            n("dependencyType"),
            n("dependencyId"),
            n("msgKey"),
            n("senderTimestampMs"),
            n("pollNameHash"),
            i(
              "selectedOptionLocalIds",
              o("WAWebStorageSchema").EncryptedValueType.ARRAY_BUFFER,
            ),
            i(
              "unresolvedOptionHashes",
              o("WAWebStorageSchema").EncryptedValueType.ARRAY_BUFFER,
            ),
            n("t"),
            n("parkedMsgPayload"),
            i(
              "parkedMsgOpaqueData",
              o("WAWebStorageSchema").EncryptedValueType.ARRAY_BUFFER,
            ),
            n("reportingTokenInfo"),
            n("createdAtMs"),
            r(["parentMsgKey", "dependencyType", "dependencyId"]),
            l("parentMsgKey"),
            l("createdAtMs"),
          ],
        )
        .view(function (e) {
          return e;
        });
    }
    function s() {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .table("poll-pending-updates");
    }
    function u() {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .doesLocalSchemaIncludeVersion(
          o("WAWebModelStorageVersions").pollPendingUpdatesCreateTable(),
        );
    }
    ((l.addTable = e), (l.getTable = s), (l.canUsePollPendingUpdatesTable = u));
  },
  98,
);
