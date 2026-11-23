__d(
  "WAWebLocalSchemaVersions",
  ["WALogger", "WAWeb-dexie", "WAWebSchemaVersions", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t) {
      try {
        var n = new (r("WAWeb-dexie"))(t),
          a = (await n.open()).verno;
        return (await n.close(), a - 1);
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
    }
    async function u() {
      var e = await Promise.all(
          Array.from(
            o("WAWebSchemaVersions").DatabaseNames.members(),
            async function (e) {
              var t = await s(e);
              return t != null ? [e, t] : null;
            },
          ),
        ),
        t = e.filter(Boolean);
      return new Map(t);
    }
    ((l.getLocalVersion = s), (l.getLocalSchemaVersions = u));
  },
  98,
);
