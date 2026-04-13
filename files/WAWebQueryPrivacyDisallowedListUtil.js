__d(
  "WAWebQueryPrivacyDisallowedListUtil",
  [
    "WALogger",
    "WAWebPrivacyGatingUtils",
    "WAWebQueryPrivacyDisallowedListLidJob",
    "WAWebQueryPrivacyDisallowedListMexJob",
    "WAWebQueryPrivacyDisallowedListPnJob",
    "WAWebSchemaPrivacyDisallowedList",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
          if (m(t))
            try {
              return yield o(
                "WAWebQueryPrivacyDisallowedListLidJob",
              ).queryPrivacyDisallowedListLid(t);
            } catch (e) {
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[queryPrivacyDisallowedList] lid failed ",
                      " ",
                      " -> pn",
                    ])),
                  t,
                  e,
                )
                .sendLogs("queryPrivacyDisallowedList-with-lid-failed");
            }
          try {
            return yield o(
              "WAWebQueryPrivacyDisallowedListPnJob",
            ).queryPrivacyDisallowedListPn(t);
          } catch (e) {
            throw (
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[queryPrivacyDisallowedList] pn failed ",
                      " ",
                      "",
                    ])),
                  t,
                  e,
                )
                .sendLogs("queryPrivacyDisallowedList-with-pn-failed"),
              e
            );
          }
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
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
    ((l.queryPrivacyDisallowedList = c),
      (l.isPrivacyDisallowedListTypeLidMigrated = m));
  },
  98,
);
