__d(
  "WAWebCoexV2HostedContactUtils",
  [
    "WALogger",
    "WAWebApiChatCommon",
    "WAWebApiContact",
    "WAWebBlocklistMigration",
    "WAWebSchemaBlocklist",
    "WAWebWidFactory",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t) {
      try {
        var n = await o("WAWebApiContact").getContactRecord(t);
        return (n == null ? void 0 : n.isHosted) === !0;
      } catch (t) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[coexv2] relay: failed to read peer contact record",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("coexv2-peer-hosted-read-failed"),
          !1
        );
      }
    }
    async function c(e) {
      if (!e.isUser()) return !1;
      try {
        return o("WAWebBlocklistMigration").applyBlocklistV2Rules()
          ? await d(e)
          : await m(e);
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[coexv2] relay: failed to read peer blocklist; treating peer as blocked",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("coexv2-peer-blocklist-read-failed"),
          !0
        );
      }
    }
    async function d(e) {
      if (e.isRegularUserPn()) {
        var t,
          n =
            (t = await o("WAWebApiChatCommon").getChatRecord(e)) == null
              ? void 0
              : t.accountLid;
        return n == null
          ? !1
          : (await o("WAWebSchemaBlocklist").getBlocklistTable().get(n)) !=
              null;
      }
      return p(e);
    }
    async function m(e) {
      if (await p(e)) return !0;
      var t = o("WAWebApiContact").getAlternateUserWid(
        o("WAWebWidFactory").asUserWidOrThrow(e),
      );
      return t != null && (await p(t));
    }
    async function p(e) {
      return (
        (await o("WAWebSchemaBlocklist")
          .getBlocklistTable()
          .get(e.toString())) != null
      );
    }
    ((l.isPeerCoexV2Hosted = u), (l.isPeerCoexV2Blocked = c));
  },
  98,
);
