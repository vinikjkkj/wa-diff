__d(
  "WAWebCustomerManagerContactTypeQuery",
  [
    "WAWebContactManagerContactIdentity",
    "WAWebDBContactManagerMetadataDatabaseApi",
    "WAWebLidAwareContactsDB",
    "WAWebSchemaContactManagerMetadata",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e === "all"
        ? r("WAWebLidAwareContactsDB").all()
        : e === "saved_contacts"
          ? u(c)
          : e === "not_in_contacts"
            ? u(function (e) {
                return !c(e);
              })
            : e === "hidden"
              ? s()
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    async function s() {
      if (
        !o(
          "WAWebSchemaContactManagerMetadata",
        ).canUseContactManagerMetadataTable()
      )
        return [];
      var e = await Promise.all([
          o(
            "WAWebDBContactManagerMetadataDatabaseApi",
          ).getAllContactManagerMetadata(),
          r("WAWebLidAwareContactsDB").all(),
        ]),
        t = e[0],
        n = e[1],
        a = new Set(
          t
            .filter(function (e) {
              return e.isHidden;
            })
            .map(function (e) {
              return String(e.id);
            }),
        );
      return a.size === 0
        ? []
        : n.filter(function (e) {
            var t = o(
              "WAWebContactManagerContactIdentity",
            ).toContactManagerMetadataJid(e.id);
            return t != null && a.has(String(t));
          });
    }
    async function u(e) {
      return (await r("WAWebLidAwareContactsDB").all()).filter(e);
    }
    function c(e) {
      return e.isAddressBookContact === 1 || e.isUsernameContact === !0;
    }
    ((l.fetchContactRowsForType = e), (l.isSavedContact = c));
  },
  98,
);
