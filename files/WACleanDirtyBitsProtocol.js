__d(
  "WACleanDirtyBitsProtocol",
  ["WALogger", "WASmaxDirtyBitsCleanRPC", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n;
          t.type === "syncd_app_state"
            ? (n = { cleanTypeWithTimestamp: { cleanTimestamp: t.timestamp } })
            : (n = {
                cleanType: { cleanTimestamp: t.timestamp, cleanType: t.type },
              });
          var r = yield o("WASmaxDirtyBitsCleanRPC").sendCleanRPC({
            typeCleanOrCleanWithTimestampMixinGroupArgs: n,
          });
          r.name !== "CleanResponseSuccess" &&
            (o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "sendCleanRPC error: ",
                  "",
                ])),
              r,
            ),
            o("WALogger").ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "Failed to clean dirty bits for type: ",
                  "",
                ])),
              t.type,
            ));
        })),
        c.apply(this, arguments)
      );
    }
    l.cleanDirtyBitsProtocol = u;
  },
  98,
);
