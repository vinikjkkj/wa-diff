__d(
  "WAWebHandlePresence",
  [
    "WALogger",
    "WASmaxPresenceServerUpdateRPC",
    "WATimeUtils",
    "WAWebChangeGroupPresenceHandlerAction",
    "WAWebChangePresenceHandlerAction",
    "WAWebJidToWid",
    "WAWebLid1X1MigrationGating",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = ["deny", "none", "error"];
    function c(e) {
      if (e != null) {
        if (!u.includes(e)) return o("WATimeUtils").castToUnixTime(Number(e));
      } else return o("WATimeUtils").unixTime();
    }
    async function d(t) {
      try {
        var n = o("WASmaxPresenceServerUpdateRPC").receiveServerUpdateRPC(t),
          a = n.parsedRequest.presenceUpdates;
        if (a.name === "GroupAvailable") {
          r("WAWebChangeGroupPresenceHandlerAction")({
            id: o("WAWebJidToWid").chatJidToChatWid(a.value.from),
            count: a.value.count,
          });
          return;
        }
        if (a.name === "GroupUnavailable") {
          r("WAWebChangeGroupPresenceHandlerAction")({
            id: o("WAWebJidToWid").chatJidToChatWid(a.value.from),
            count: 0,
          });
          return;
        }
        a.name;
        var i = o("WAWebJidToWid").lidUserJidToUserLid(a.value.from);
        if (
          !o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated()
        )
          return;
        if (!i.isLid()) {
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[presence] Migrated client has a PN presence",
              ])),
          );
          return;
        }
        var l = {
          id: i,
          type: a.value.type || "available",
          deny: a.value.last === "deny" || void 0,
          t: a.value.type === "unavailable" ? c(a.value.last) : void 0,
        };
        r("WAWebChangePresenceHandlerAction")(l);
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
          Promise.reject(r("getErrorSafe")(e))
        );
      }
    }
    l.default = d;
  },
  98,
);
