__d(
  "WAWebApiPrivacyDisallowedList",
  ["WALogger", "WAWebSchemaPrivacyDisallowedList", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var t = yield o("WAWebSchemaPrivacyDisallowedList")
              .getPrivacyDisallowedListTable()
              .all();
            return c(t);
          } catch (t) {
            return (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[privacy_settings_drawer] get disallowed lists failed",
                    ])),
                )
                .verbose()
                .sendLogs(
                  "privacy_settings_drawer: get all privacy disallowed lists failed",
                ),
              { about: null, groupadd: null, last: null, profile: null }
            );
          }
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      var t = { about: null, groupadd: null, last: null, profile: null };
      return (
        e.forEach(function (e) {
          e: {
            if (
              e.id ===
              o("WAWebSchemaPrivacyDisallowedList").PrivacyDisallowedListType
                .About
            ) {
              t.about = e;
              break e;
            }
            if (
              e.id ===
              o("WAWebSchemaPrivacyDisallowedList").PrivacyDisallowedListType
                .GroupAdd
            ) {
              t.groupadd = e;
              break e;
            }
            if (
              e.id ===
              o("WAWebSchemaPrivacyDisallowedList").PrivacyDisallowedListType
                .LastSeen
            ) {
              t.last = e;
              break e;
            }
            if (
              e.id ===
              o("WAWebSchemaPrivacyDisallowedList").PrivacyDisallowedListType
                .ProfilePicture
            ) {
              t.profile = e;
              break e;
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                e.id,
            );
          }
        }),
        t
      );
    }
    ((l.queryDisallowedLists = s), (l.disallowedRowsToLists = c));
  },
  98,
);
