__d(
  "WAWebQueryPrivacyDisallowedListUtil",
  [
    "WALogger",
    "WAWebPrivacyGatingUtils",
    "WAWebQueryPrivacyDisallowedListLidJob",
    "WAWebQueryPrivacyDisallowedListMexJob",
    "WAWebSchemaPrivacyDisallowedList",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (o("WAWebPrivacyGatingUtils").isMexPrivacyContactListEnabled()) {
            var n = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid();
            if (n != null)
              try {
                return yield o(
                  "WAWebQueryPrivacyDisallowedListMexJob",
                ).queryPrivacyDisallowedListMex(t, n.toString());
              } catch (n) {
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[queryPrivacyDisallowedList] mex failed ",
                        " ",
                        " -> smax",
                      ])),
                    t,
                    n,
                  )
                  .sendLogs("queryPrivacyDisallowedList-with-mex-failed");
              }
          }
          try {
            return yield o(
              "WAWebQueryPrivacyDisallowedListLidJob",
            ).queryPrivacyDisallowedListLid(t);
          } catch (e) {
            throw (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[queryPrivacyDisallowedList] lid failed ",
                      " ",
                      "",
                    ])),
                  t,
                  e,
                )
                .sendLogs("queryPrivacyDisallowedList-with-lid-failed"),
              e
            );
          }
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return r("justknobx")._("5326")
        ? !1
        : e ===
            o("WAWebSchemaPrivacyDisallowedList").PrivacyDisallowedListType
              .About
          ? o(
              "WAWebPrivacyGatingUtils",
            ).isPrivacyListLidMigrationForStatusEnabled()
          : e ===
              o("WAWebSchemaPrivacyDisallowedList").PrivacyDisallowedListType
                .GroupAdd
            ? o(
                "WAWebPrivacyGatingUtils",
              ).isPrivacyListLidMigrationForGroupAddEnabled()
            : e ===
                o("WAWebSchemaPrivacyDisallowedList").PrivacyDisallowedListType
                  .LastSeen
              ? o(
                  "WAWebPrivacyGatingUtils",
                ).isPrivacyListLidMigrationForLastSeenEnabled()
              : e ===
                  o("WAWebSchemaPrivacyDisallowedList")
                    .PrivacyDisallowedListType.ProfilePicture
                ? o(
                    "WAWebPrivacyGatingUtils",
                  ).isPrivacyListLidMigrationForProfilePictureEnabled()
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        e,
                    );
                  })();
    }
    ((l.queryPrivacyDisallowedList = u),
      (l.isPrivacyDisallowedListTypeLidMigrated = d));
  },
  98,
);
