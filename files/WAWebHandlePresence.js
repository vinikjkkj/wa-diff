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
    "WAWebPresenceCollection",
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
      var t = o("WAWebWidFactory").asUserLidOrThrow(e),
        n = o("WAWebChatCollection").ChatCollection.getChatByAccountLid(t);
      if (n != null) {
        var r = o("WAWebWidFactory").asChatWid(n.id),
          a = o("WAWebWidFactory").asChatWid(t).toString() !== r.toString(),
          i =
            a && o("WAWebPresenceCollection").PresenceCollection.get(t) != null
              ? o("WAWebWidFactory").asChatWid(t)
              : null;
        return { resolvedChatId: r, lidDispatchTarget: i };
      }
      return o("WAWebPresenceCollection").PresenceCollection.get(t) != null
        ? {
            resolvedChatId: o("WAWebWidFactory").asChatWid(t),
            lidDispatchTarget: null,
          }
        : null;
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
              p = o(
                "WAWebLid1X1MigrationGating",
              ).Lid1X1MigrationUtils.isLidMigrated();
            if (!p && l.isLid()) {
              var _ = o("WAWebApiContact").getPhoneNumber(l);
              if (_ == null) return;
              l = _;
            }
            if (p && !c) {
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[presence] Migrated client has a PN presence",
                  ])),
              );
              return;
            }
            var f = l,
              g = null;
            if (p) {
              var h = m(l);
              if (h == null) return;
              ((f = h.resolvedChatId), (g = h.lidDispatchTarget));
            }
            var y = {
              id: f,
              type: i.value.type || "available",
              deny: i.value.last === "deny" || void 0,
              t: i.value.type === "unavailable" ? d(i.value.last) : void 0,
            };
            (yield r("WAWebChangePresenceHandlerAction")(y),
              g != null &&
                (yield r("WAWebChangePresenceHandlerAction")(
                  babelHelpers.extends({}, y, { id: g }),
                )));
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
        _.apply(this, arguments)
      );
    }
    l.default = p;
  },
  98,
);
