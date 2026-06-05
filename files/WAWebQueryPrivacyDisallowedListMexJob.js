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
            i,
            l = yield o("WAWebSchemaPrivacyDisallowedList")
              .getPrivacyDisallowedListTable()
              .get(t),
            s = (r = l == null ? void 0 : l.dhash) != null ? r : "",
            u = yield o("WAWebMexGetPrivacyList").fetchPrivacyList({
              jid: n,
              dhash: s,
              category: e(t),
              type: "DENYLIST",
            }),
            c =
              (a = u.xwa2_fetch_wa_users) == null || (a = a[0]) == null
                ? void 0
                : a.privacy_contact_list,
            d = (i = c == null ? void 0 : c.contacts) != null ? i : [],
            m = [];
          for (var p of d) {
            var _;
            if (p != null) {
              var f = (_ = p.jid) != null ? _ : p.pn_jid;
              f != null &&
                f !== "" &&
                m.push(o("WAWebWidFactory").createUserWidOrThrow(f));
            }
          }
          return m.length === 0
            ? { status: "match" }
            : {
                status: "mismatch",
                users: m,
                dhash: (c == null ? void 0 : c.dhash) != null ? c.dhash : "",
              };
        })),
        u.apply(this, arguments)
      );
    }
    l.queryPrivacyDisallowedListMex = s;
  },
  98,
);
