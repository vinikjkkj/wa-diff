__d(
  "WAWebRemoveExpiredWebTPSharedSessions",
  ["WALogger", "WATimeUtils", "WAWebSchemaWebTPSharedSession"],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s() {
      try {
        var t = o("WAWebSchemaWebTPSharedSession").getWebTPSharedSessionTable(),
          n = o("WATimeUtils").unixTime(),
          r = await t.bulkDeleteRange(["expiresAt"], 0, n);
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
    }
    l.removeExpiredWebTPSharedSessions = s;
  },
  98,
);
