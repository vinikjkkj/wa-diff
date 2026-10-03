__d(
  "WAWebCustomerManagerContactTypeQuery",
  [
    "Promise",
    "WAWebContactManagerContactIdentity",
    "WAWebDBContactManagerMetadataDatabaseApi",
    "WAWebLidAwareContactsDB",
    "WAWebSchemaContactManagerMetadata",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return e === "all"
        ? r("WAWebLidAwareContactsDB").all()
        : e === "saved_contacts"
          ? d(p)
          : e === "not_in_contacts"
            ? d(function (e) {
                return !p(e);
              })
            : e === "hidden"
              ? u()
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            !o(
              "WAWebSchemaContactManagerMetadata",
            ).canUseContactManagerMetadataTable()
          )
            return [];
          var t = yield (e || (e = n("Promise"))).all([
              o(
                "WAWebDBContactManagerMetadataDatabaseApi",
              ).getAllContactManagerMetadata(),
              r("WAWebLidAwareContactsDB").all(),
            ]),
            a = t[0],
            i = t[1],
            l = new Set(
              a
                .filter(function (e) {
                  return e.isHidden;
                })
                .map(function (e) {
                  return String(e.id);
                }),
            );
          return l.size === 0
            ? []
            : i.filter(function (e) {
                var t = o(
                  "WAWebContactManagerContactIdentity",
                ).toContactManagerMetadataJid(e.id);
                return t != null && l.has(String(t));
              });
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return (yield r("WAWebLidAwareContactsDB").all()).filter(e);
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return e.isAddressBookContact === 1 || e.isUsernameContact === !0;
    }
    ((l.fetchContactRowsForType = s), (l.isSavedContact = p));
  },
  98,
);
