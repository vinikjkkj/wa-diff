__d(
  "WAWebAddonQueryUtils",
  [
    "WALogger",
    "WAWebDBMsgUtils",
    "WAWebLidMigrationUtils",
    "WAWebMaybe",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t) {
      var n = await o("WAWebDBMsgUtils").getMsgsByMsgKey(t.map(String)),
        a = new Map(
          n.map(function (e) {
            return [e.id.toString(), e];
          }),
        );
      if (a.size === t.length)
        return (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "getParentMsgsByMsgKey: found all parent messages (",
                ")",
              ])),
            a.size,
          ),
          a
        );
      var i = a.size,
        l = t.filter(function (e) {
          return !a.has(e.toString());
        }),
        u = r("compactMap")(l, o("WAWebLidMigrationUtils").getAlternateMsgKey);
      if (u.length > 0) {
        var c = await o("WAWebDBMsgUtils").getMsgsByMsgKey(u.map(String));
        c.forEach(function (e) {
          o("WAWebMaybe").ifSome(
            o("WAWebLidMigrationUtils").getAlternateMsgKey(e.id),
            function (t) {
              a.set(t.toString(), e);
            },
          );
        });
      }
      return (
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[getParentMsgsByMsgKey] ",
              "/",
              " parents, ",
              " w/o alt keys",
            ])),
          a.size,
          t.length,
          i,
        ),
        a
      );
    }
    l.getParentMsgsByMsgKey = u;
  },
  98,
);
