__d(
  "WAWebPnlessStanzaMigration",
  [
    "WALogger",
    "WAWebApiChatCommon",
    "WAWebLid1X1MigrationGating",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(t, n) {
      return !o(
        "WAWebLid1X1MigrationGating",
      ).Lid1X1MigrationUtils.isLidMigrated() || !t.isRegularUserPn()
        ? !1
        : t.getDeviceId() !== 0
          ? (o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[pnless-stanza] shouldConvertToLid: device wid ",
                    " rcpt=",
                    "",
                  ])),
                t.toLogString(),
                n != null ? n : "n/a",
              )
              .sendLogs("pnless-device-wid"),
            !1)
          : !0;
    }
    async function d(e) {
      var t = o("WAWebWidFactory").asUserWidOrThrow(e),
        n = await o("WAWebApiChatCommon").getChatRecord(t),
        r = n == null ? void 0 : n.accountLid;
      return r == null ? null : o("WAWebWidFactory").createUserLidOrThrow(r);
    }
    async function m(e, t) {
      if (!c(e, t)) return e;
      var n = await d(e);
      return n == null
        ? (o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[pnless-stanza] getStanzaToFromChatId: no lid ",
                  " receiptType=",
                  "",
                ])),
              e.toLogString(),
              t,
            )
            .sendLogs("pnless-no-lid"),
          e)
        : n;
    }
    async function p(e) {
      var t = e.data.to;
      if (c(t)) {
        var n = await d(t);
        if (n == null) {
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[pnless-stanza] maybeReplaceWidWithAccountLid: no lid ",
                  "",
                ])),
              t.toLogString(),
            )
            .tags("pnless-stanzas")
            .sendLogs("pnless-no-lid-in-send");
          return;
        }
        e.type === "message"
          ? (e.data.to = n)
          : e.type === "addon" &&
            (e.data = babelHelpers.extends({}, e.data, { to: n }));
      }
    }
    ((l.getStanzaToFromChatId = m), (l.maybeReplaceWidWithAccountLid = p));
  },
  98,
);
