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
              {
                about: null,
                groupadd: null,
                last: null,
                profile: null,
                pix: null,
              }
            );
          }
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      var t = {
        about: null,
        groupadd: null,
        last: null,
        profile: null,
        pix: null,
      };
      return (
        e.forEach(function (e) {
          e: {
            var n = e;
            if (
              ((typeof n == "object" && n !== null) ||
                typeof n == "function") &&
              n.id === "status"
            ) {
              var r = n;
              t.about = r;
              break e;
            }
            if (
              ((typeof n == "object" && n !== null) ||
                typeof n == "function") &&
              n.id === "groupadd"
            ) {
              var o = n;
              t.groupadd = o;
              break e;
            }
            if (
              ((typeof n == "object" && n !== null) ||
                typeof n == "function") &&
              n.id === "last"
            ) {
              var a = n;
              t.last = a;
              break e;
            }
            if (
              ((typeof n == "object" && n !== null) ||
                typeof n == "function") &&
              n.id === "profile"
            ) {
              var i = n;
              t.profile = i;
              break e;
            }
            if (
              ((typeof n == "object" && n !== null) ||
                typeof n == "function") &&
              n.id === "pix"
            ) {
              var l = n;
              t.pix = l;
              break e;
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                n,
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
