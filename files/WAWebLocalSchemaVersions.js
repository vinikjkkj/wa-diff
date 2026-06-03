__d(
  "WAWebLocalSchemaVersions",
  [
    "Promise",
    "WALogger",
    "WAWeb-dexie",
    "WAWebSchemaVersions",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            var n = new (r("WAWeb-dexie"))(t),
              a = (yield n.open()).verno;
            return (yield n.close(), a - 1);
          } catch (t) {
            var i = r("getErrorSafe")(t);
            return (
              i.name === "NoSuchDatabaseError" ||
                o("WALogger").ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[storage] error while getting db local version: ",
                      "",
                    ])),
                  i,
                ),
              null
            );
          }
        })),
        c.apply(this, arguments)
      );
    }
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield (s || (s = n("Promise"))).all(
              Array.from(
                o("WAWebSchemaVersions").DatabaseNames.members(),
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var t = yield u(e);
                      return t != null ? [e, t] : null;
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
            ),
            t = e.filter(Boolean);
          return new Map(t);
        })),
        m.apply(this, arguments)
      );
    }
    ((l.getLocalVersion = u), (l.getLocalSchemaVersions = d));
  },
  98,
);
