__d(
  "ensureContactsExistAndUpdatedSync",
  ["MAWVerifyThreadCutover", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r, o) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a) {
            n != null &&
              (r == null ||
                r(
                  "update_target_ensure_contact_exists_with_improvements_start",
                ),
              yield o(
                "MAWVerifyThreadCutover",
              ).ensureContactCapabilities2IsLoaded(e, t, n, r, a));
          },
        )),
        s.apply(this, arguments)
      );
    }
    l.default = e;
  },
  98,
);
