__d(
  "WAWebContactManagerContactTypeQuery",
  ["Promise", "WAWebLidAwareContactsDB", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      return t === "all"
        ? r("WAWebLidAwareContactsDB").all()
        : t === "saved_contacts"
          ? u(d)
          : t === "not_in_contacts"
            ? u(function (e) {
                return !d(e);
              })
            : t === "hidden"
              ? (e || (e = n("Promise"))).resolve(null)
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      t,
                  );
                })();
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return (yield r("WAWebLidAwareContactsDB").all()).filter(e);
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return e.isAddressBookContact === 1 || e.isUsernameContact === !0;
    }
    ((l.fetchContactRowsForType = s), (l.isSavedContact = d));
  },
  98,
);
