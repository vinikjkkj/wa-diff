__d(
  "WAWebDBContactRemoveSoftDeletedUsernames",
  ["WALogger", "WAWebLidAwareContactsDB", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.map(function (e) {
              return e.toJid();
            }),
            a = yield r("WAWebLidAwareContactsDB").bulkGet(n),
            i = 0,
            l = a.reduce(function (e, t) {
              return t == null
                ? (i++, e)
                : (t.username != null &&
                    t.usernameSoftDeleted === !0 &&
                    e.push(t.id),
                  e);
            }, []);
          (i > 0 &&
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "removeSoftDeletedUsernames: ",
                  " missing contacts",
                ])),
              i,
            ),
            l.length > 0 &&
              (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "removeSoftDeletedUsernames: removing usernames for ",
                    " LIDs",
                  ])),
                l.length,
              ),
              yield r("WAWebLidAwareContactsDB").bulkCreateOrMerge(
                l.map(function (e) {
                  return {
                    id: e,
                    username: void 0,
                    usernameSoftDeleted: void 0,
                  };
                }),
                "DBContactRemoveSoftDeletedUsernames.removeSoftDeletedUsernames",
              )));
        })),
        c.apply(this, arguments)
      );
    }
    l.removeSoftDeletedUsernames = u;
  },
  98,
);
