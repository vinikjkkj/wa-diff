__d(
  "WAWebPnlessStanzaMigration",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebApiChatCommon",
    "WAWebLid1X1MigrationGating",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return (
        o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated() &&
        e.isRegularUserPn() &&
        o("WAWebABProps").getABPropConfigValue("web_pnless_stanzas") === !0
      );
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.data.to;
          if (s(n)) {
            var a = yield o("WAWebApiChatCommon").getChatRecord(n),
              i = a == null ? void 0 : a.accountLid;
            if (i == null)
              throw (
                o("WALogger").ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[pnless-stanza] maybeReplaceWidWithAccountLid: no lid ",
                      "",
                    ])),
                  n.toLogString(),
                ),
                r("err")("[pnless-stanza] no accountLid for user")
              );
            var l = o("WAWebWidFactory").createUserLidOrThrow(i);
            t.type === "message"
              ? (t.data.to = l)
              : t.type === "addon" &&
                (t.data = babelHelpers.extends({}, t.data, { to: l }));
          }
        })),
        c.apply(this, arguments)
      );
    }
    l.maybeReplaceWidWithAccountLid = u;
  },
  98,
);
