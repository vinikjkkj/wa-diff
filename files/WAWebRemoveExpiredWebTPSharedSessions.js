__d(
  "WAWebRemoveExpiredWebTPSharedSessions",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebSchemaWebTPSharedSession",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var t = o(
                "WAWebSchemaWebTPSharedSession",
              ).getWebTPSharedSessionTable(),
              n = o("WATimeUtils").unixTime(),
              r = yield t.bulkDeleteRange(["expiresAt"], 0, n);
          } catch (t) {
            throw (
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[PDF3PBridge] Failed to remove expired sessions: ",
                    "",
                  ])),
                t,
              ),
              t
            );
          }
        })),
        u.apply(this, arguments)
      );
    }
    l.removeExpiredWebTPSharedSessions = s;
  },
  98,
);
