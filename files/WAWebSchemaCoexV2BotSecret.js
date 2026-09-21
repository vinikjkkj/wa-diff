__d(
  "WAWebSchemaCoexV2BotSecret",
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
        r = t.addEncryptedColumn,
        a = t.addIndex,
        i = t.addUserDefinedPrimaryKey;
      e.add("coexv2-bot-secret")
        .version(o("WAWebModelStorageVersions").coexV2BotSecretCreateTable(), [
          i("msgKey"),
          r(
            "botMessageSecret",
            o("WAWebStorageSchema").EncryptedValueType.ARRAY_BUFFER,
          ),
          n("expiry"),
          a("expiry"),
        ])
        .view(function (e) {
          return e;
        });
    }
    function s() {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .table("coexv2-bot-secret");
    }
    function u() {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .doesLocalSchemaIncludeVersion(
          o("WAWebModelStorageVersions").coexV2BotSecretCreateTable(),
        );
    }
    ((l.addTable = e),
      (l.getCoexV2BotSecretTable = s),
      (l.canUseCoexV2BotSecretTable = u));
  },
  98,
);
