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
    var e, s;
    function u(e) {
      return (
        o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated() &&
        e.isRegularUserPn() &&
        o("WAWebABProps").getABPropConfigValue("web_pnless_stanzas") === !0
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebWidFactory").asUserWidOrThrow(e),
            n = yield o("WAWebApiChatCommon").getChatRecord(t),
            r = n == null ? void 0 : n.accountLid;
          return r == null
            ? null
            : o("WAWebWidFactory").createUserLidOrThrow(r);
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (!u(t)) return t;
          var n = yield c(t);
          return n == null
            ? (o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[pnless-stanza] getStanzaToFromChatId: no lid ",
                      "",
                    ])),
                  t.toLogString(),
                )
                .sendLogs("pnless-no-lid"),
              t)
            : n;
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.data.to;
          if (u(t)) {
            var n = yield c(t);
            if (n == null) {
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
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
        f.apply(this, arguments)
      );
    }
    ((l.getStanzaToFromChatId = m), (l.maybeReplaceWidWithAccountLid = _));
  },
  98,
);
