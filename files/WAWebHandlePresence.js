__d(
  "WAWebHandlePresence",
  [
    "Promise",
    "WALogger",
    "WASmaxPresenceServerUpdateRPC",
    "WATimeUtils",
    "WAWebChangeGroupPresenceHandlerAction",
    "WAWebChangePresenceHandlerAction",
    "WAWebJidToWid",
    "WAWebLid1X1MigrationGating",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = ["deny", "none", "error"];
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            var a = o("WASmaxPresenceServerUpdateRPC").receiveServerUpdateRPC(
                t,
              ),
              i = a.parsedRequest.presenceUpdates;
            if (i.name === "GroupAvailable") {
              r("WAWebChangeGroupPresenceHandlerAction")({
                id: o("WAWebJidToWid").chatJidToChatWid(i.value.from),
                count: i.value.count,
              });
              return;
            }
            if (i.name === "GroupUnavailable") {
              r("WAWebChangeGroupPresenceHandlerAction")({
                id: o("WAWebJidToWid").chatJidToChatWid(i.value.from),
                count: 0,
              });
              return;
            }
            i.name;
            var l = o("WAWebJidToWid").lidUserJidToUserLid(i.value.from);
            if (
              !o(
                "WAWebLid1X1MigrationGating",
              ).Lid1X1MigrationUtils.isLidMigrated()
            )
              return;
            if (!l.isLid()) {
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[presence] Migrated client has a PN presence",
                  ])),
              );
              return;
            }
            var c = {
              id: l,
              type: i.value.type || "available",
              deny: i.value.last === "deny" || void 0,
              t: i.value.type === "unavailable" ? p(i.value.last) : void 0,
            };
            r("WAWebChangePresenceHandlerAction")(c);
          } catch (e) {
            return (
              o("WALogger").ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Parsing Error: ",
                    "",
                  ])),
                r("getErrorSafe")(e).toString(),
              ),
              (u || (u = n("Promise"))).reject(r("getErrorSafe")(e))
            );
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      if (e != null) {
        if (!c.includes(e)) return o("WATimeUtils").castToUnixTime(Number(e));
      } else return o("WATimeUtils").unixTime();
    }
    l.default = d;
  },
  98,
);
