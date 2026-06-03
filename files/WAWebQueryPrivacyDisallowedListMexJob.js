__d(
  "WAWebQueryPrivacyDisallowedListMexJob",
  [
    "WAWebMexGetPrivacyList",
    "WAWebSchemaPrivacyDisallowedList",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e ===
        o("WAWebSchemaPrivacyDisallowedList").PrivacyDisallowedListType.About
        ? "ABOUT"
        : e ===
            o("WAWebSchemaPrivacyDisallowedList").PrivacyDisallowedListType
              .GroupAdd
          ? "GROUPADD"
          : e ===
              o("WAWebSchemaPrivacyDisallowedList").PrivacyDisallowedListType
                .LastSeen
            ? "LAST"
            : e ===
                o("WAWebSchemaPrivacyDisallowedList").PrivacyDisallowedListType
                  .ProfilePicture
              ? "PROFILE"
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var r,
            a,
            i = yield o("WAWebMexGetPrivacyList").fetchPrivacyList({
              jid: n,
              dhash: "",
              category: e(t),
              type: "DENYLIST",
            }),
            l =
              (r = i.xwa2_fetch_wa_users) == null || (r = r[0]) == null
                ? void 0
                : r.privacy_contact_list,
            s = (a = l == null ? void 0 : l.contacts) != null ? a : [],
            u = [];
          for (var c of s) {
            var d;
            if (c != null) {
              var m = (d = c.jid) != null ? d : c.pn_jid;
              m != null &&
                m !== "" &&
                u.push(o("WAWebWidFactory").createUserWidOrThrow(m));
            }
          }
          return u.length === 0
            ? { status: "match" }
            : {
                status: "mismatch",
                users: u,
                dhash: (l == null ? void 0 : l.dhash) != null ? l.dhash : "",
              };
        })),
        u.apply(this, arguments)
      );
    }
    l.queryPrivacyDisallowedListMex = s;
  },
  98,
);
