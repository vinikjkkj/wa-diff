__d(
  "WAWebPnlessStanzaMigration",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebApiChatCommon",
    "WAWebLid1X1MigrationGating",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      return (
        o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated() &&
        e.isRegularUserPn() &&
        o("WAWebABProps").getABPropConfigValue("web_pnless_stanzas") === !0
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebWidFactory").asUserWidOrThrow(e),
            n = yield o("WAWebApiChatCommon").getChatRecord(t),
            r = n == null ? void 0 : n.accountLid;
          return r == null
            ? null
            : o("WAWebWidFactory").createUserLidOrThrow(r);
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          if (!c(t)) return t;
          t.device !== 0 &&
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[pnless-stanza] getStanzaToFromChatId: received a device ",
                    " receiptType=",
                    "",
                  ])),
                t.toLogString(),
                n,
              )
              .sendLogs("pnless-device-wid");
          var r = yield d(t);
          return r == null
            ? (o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[pnless-stanza] getStanzaToFromChatId: no lid ",
                      "",
                    ])),
                  t.toLogString(),
                )
                .sendLogs("pnless-no-lid"),
              t)
            : r;
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.data.to;
          if (c(t)) {
            var n = yield d(t);
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
        })),
        g.apply(this, arguments)
      );
    }
    ((l.getStanzaToFromChatId = p), (l.maybeReplaceWidWithAccountLid = f));
  },
  98,
);
