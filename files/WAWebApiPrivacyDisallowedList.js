__d(
  "WAWebApiPrivacyDisallowedList",
  ["WALogger", "WAWebSchemaPrivacyDisallowedList"],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s() {
      try {
        var t = await o("WAWebSchemaPrivacyDisallowedList")
          .getPrivacyDisallowedListTable()
          .all();
        return u(t);
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
          { about: null, groupadd: null, last: null, profile: null, pix: null }
        );
      }
    }
    function u(e) {
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
            if (
              ((typeof n == "object" && n !== null) ||
                typeof n == "function") &&
              (n.id === "pn_sharing:deny" ||
                n.id === "pn_sharing:allow" ||
                n.id === "pn_sharing:contact_exclude")
            )
              return;
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                n,
            );
          }
        }),
        t
      );
    }
    ((l.queryDisallowedLists = s), (l.disallowedRowsToLists = u));
  },
  98,
);
