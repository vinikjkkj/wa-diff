__d(
  "WAWebSchemaGroupHistoryReportingTokenInfo",
  [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WAWebModelStorageUtils").getStorage(),
        t = o("WAWebStorageMutationBuilder").columnBuilder(e.config),
        n = t.addAutoIncrementingPrimaryKey,
        r = t.addColumn,
        a = t.addIndex;
      e.add("ghs-reporting-token-info")
        .version(
          o("WAWebModelStorageVersions").groupHistoryReportingTokenInfoTable(),
          [
            n("id"),
            r("bundleMsgKey"),
            r("stanzaId"),
            r("reportingToken"),
            r("reportingTokenVersion"),
            r("reportingTag"),
            r("sendTs"),
            r("addedTs"),
            r("isSend"),
            a("addedTs"),
            a("bundleMsgKey"),
          ],
        )
        .view(function (e) {
          return e;
        });
    }
    function s() {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .table("ghs-reporting-token-info");
    }
    function u() {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .doesLocalSchemaIncludeVersion(
          o("WAWebModelStorageVersions").groupHistoryReportingTokenInfoTable(),
        );
    }
    ((l.addTable = e),
      (l.getGroupHistoryReportingTokenInfoTable = s),
      (l.canUseGroupHistoryReportingTokenInfoTable = u));
  },
  98,
);
