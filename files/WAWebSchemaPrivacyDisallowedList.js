__d(
  "WAWebSchemaPrivacyDisallowedList",
  [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
      About: "status",
      GroupAdd: "groupadd",
      LastSeen: "last",
      ProfilePicture: "profile",
      Pix: "pix",
    };
    function s() {
      var e = o("WAWebModelStorageUtils").getStorage(),
        t = o("WAWebStorageMutationBuilder").columnBuilder(e.config),
        n = t.addColumn,
        r = t.addUserDefinedPrimaryKey;
      e.add("privacy-disallowed-list")
        .version(
          o("WAWebModelStorageVersions").privacyDisallowedListCreateTable(),
          [r("id"), n("disallowedList")],
        )
        .version(
          o("WAWebModelStorageVersions").privacyDisallowedListAddDhashField(),
          [n("dhash")],
        )
        .view(function (e) {
          return e;
        });
    }
    function u() {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .table("privacy-disallowed-list");
    }
    function c(e, t, n) {
      return e === "status"
        ? { id: "status", disallowedList: t, dhash: n }
        : e === "groupadd"
          ? { id: "groupadd", disallowedList: t, dhash: n }
          : e === "last"
            ? { id: "last", disallowedList: t, dhash: n }
            : e === "profile"
              ? { id: "profile", disallowedList: t, dhash: n }
              : e === "pix"
                ? { id: "pix", disallowedList: t, dhash: n }
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        e,
                    );
                  })();
    }
    ((l.PrivacyDisallowedListType = e),
      (l.addTable = s),
      (l.getPrivacyDisallowedListTable = u),
      (l.createPrivacyDisallowedListRow = c));
  },
  98,
);
