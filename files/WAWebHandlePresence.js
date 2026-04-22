__d(
  "WAWebHandlePresence",
  [
    "Promise",
    "WALogger",
    "WASmaxPresenceServerUpdateRPC",
    "WATimeUtils",
    "WAWebApiContact",
    "WAWebChangeGroupPresenceHandlerAction",
    "WAWebChangePresenceHandlerAction",
    "WAWebChatCollection",
    "WAWebJidToWid",
    "WAWebLid1X1MigrationGating",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = ["deny", "none", "error"];
    function d(e) {
      if (e != null) {
        if (!c.includes(e)) return o("WATimeUtils").castToUnixTime(Number(e));
      } else return o("WATimeUtils").unixTime();
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
            var l = o("WAWebJidToWid").chatJidToChatWid(i.value.from),
              c = l.isLid(),
              m = o(
                "WAWebLid1X1MigrationGating",
              ).Lid1X1MigrationUtils.isLidMigrated();
            if (!m && l.isLid()) {
              var p = o("WAWebApiContact").getPhoneNumber(l);
              if (p == null) return;
              l = p;
            }
            if (m && !c) {
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[presence] Migrated client has a PN presence",
                  ])),
              );
              return;
            }
            var _ = l;
            if (m) {
              var f = o(
                "WAWebChatCollection",
              ).ChatCollection.getChatByAccountLid(
                o("WAWebWidFactory").asUserLidOrThrow(l),
              );
              if (!f) return;
              _ = o("WAWebWidFactory").asChatWid(f.id);
            }
            var g = {
              id: _,
              type: i.value.type || "available",
              deny: i.value.last === "deny" || void 0,
              t: i.value.type === "unavailable" ? d(i.value.last) : void 0,
            };
            return r("WAWebChangePresenceHandlerAction")(g);
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
        p.apply(this, arguments)
      );
    }
    l.default = m;
  },
  98,
);
