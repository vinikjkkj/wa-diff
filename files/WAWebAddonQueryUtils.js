__d(
  "WAWebAddonQueryUtils",
  [
    "WALogger",
    "WAWebDBMsgUtils",
    "WAWebLidMigrationUtils",
    "WAWebMaybe",
    "WAWebMsgKey",
    "asyncToGeneratorRuntime",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = yield o("WAWebDBMsgUtils").getMsgsByMsgKey(t.map(String)),
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
            u = r("compactMap")(
              l,
              o("WAWebLidMigrationUtils").getAlternateMsgKey,
            );
          if (u.length > 0) {
            var c = yield o("WAWebDBMsgUtils").getMsgsByMsgKey(u.map(String));
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
            yield d(t, a),
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
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = new Map();
          for (var a of e)
            if (
              !(
                t.has(a.toString()) ||
                a.participant == null ||
                !a.remote.isUser() ||
                !a.remote.equals(a.participant)
              )
            ) {
              var i = new (r("WAWebMsgKey"))({
                fromMe: a.fromMe,
                remote: a.remote,
                id: a.id,
              });
              n.set(i.toString(), a.toString());
            }
          if (n.size !== 0) {
            var l = yield o("WAWebDBMsgUtils").getMsgsByMsgKey(
              Array.from(n.keys()),
            );
            l.forEach(function (e) {
              o("WAWebMaybe").ifSome(n.get(e.id.toString()), function (n) {
                t.set(n, e);
              });
            });
          }
        })),
        m.apply(this, arguments)
      );
    }
    l.getParentMsgsByMsgKey = u;
  },
  98,
);
