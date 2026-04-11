__d(
  "WAWebSchemaCustomerData",
  [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = o("WAWebModelStorageUtils").getStorage(),
        t = o("WAWebStorageMutationBuilder").columnBuilder(e.config),
        n = t.addColumn,
        r = t.addUserDefinedPrimaryKey;
      e.add("customerData2")
        .version(o("WAWebModelStorageVersions").customerData2CreateTable(), [
          r("chatJid"),
          n("contactType"),
          n("email"),
          n("altPhoneNumbers"),
          n("birthday"),
          n("address"),
          n("acquisitionSource"),
          n("leadStage"),
          n("lastOrder"),
          n("createdAt"),
          n("modifiedAt"),
        ])
        .view(function (e) {
          return e;
        });
    }
    function s() {
      return o("WAWebModelStorageUtils").getStorage().table("customerData2");
    }
    function u() {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .doesLocalSchemaIncludeVersion(
          o("WAWebModelStorageVersions").customerData2CreateTable(),
        );
    }
    ((l.addTable = e),
      (l.getCustomerDataTable = s),
      (l.canUseCustomerDataTable = u));
  },
  98,
);
