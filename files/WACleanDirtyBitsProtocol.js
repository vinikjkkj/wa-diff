__d(
  "WACleanDirtyBitsProtocol",
  ["WALogger", "WASmaxDirtyBitsCleanRPC"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    async function u(t) {
      var n;
      t.type === "syncd_app_state"
        ? (n = { cleanTypeWithTimestamp: { cleanTimestamp: t.timestamp } })
        : (n = {
            cleanType: { cleanTimestamp: t.timestamp, cleanType: t.type },
          });
      var r = await o("WASmaxDirtyBitsCleanRPC").sendCleanRPC({
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
    }
    l.cleanDirtyBitsProtocol = u;
  },
  98,
);
