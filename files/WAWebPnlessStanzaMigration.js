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
    function c(t, n) {
      return !o(
        "WAWebLid1X1MigrationGating",
      ).Lid1X1MigrationUtils.isLidMigrated() ||
        !t.isRegularUserPn() ||
        o("WAWebABProps").getABPropConfigValue("web_pnless_stanzas") !== !0
        ? !1
        : t.getDeviceId() !== 0
          ? (o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[pnless-stanza] shouldConvertToLid: received a device ",
                    " receiptType=",
                    "",
                  ])),
                t.toLogString(),
                n != null ? n : "n/a",
              )
              .sendLogs("pnless-device-wid"),
            !1)
          : !0;
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
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (!c(e, t)) return e;
          var n = yield d(e);
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
