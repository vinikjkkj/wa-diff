__d(
  "WAWebContactManagerUsernamesQuery",
  [
    "WALogger",
    "WAWebUsync",
    "WAWebUsyncUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (t.length === 0) return new Map();
          var n = new Map(),
            a = new (o("WAWebUsync").USyncQuery)().withUsernameProtocol();
          t.forEach(function (e) {
            var t = o("WAWebWidFactory").createUserWidOrThrow(e);
            (n.set(String(t), e),
              n.set(t.user, e),
              a.withUser(new (o("WAWebUsyncUser").USyncUser)().withId(t)));
          });
          var i = yield a.execute(),
            l = i.error.all || i.error.username;
          if (l != null)
            throw r("err")(
              "[cm:import] username usync failed: " +
                String(l.errorCode) +
                " " +
                String(l.errorText),
            );
          var c = new Map(),
            d = 0,
            m = 0;
          return (
            i.list.forEach(function (e) {
              var t;
              if (e.id != null) {
                var r =
                  (t = n.get(String(e.id))) != null ? t : n.get(e.id.user);
                if (r == null) {
                  d++;
                  return;
                }
                var o = "username" in e ? e.username : null;
                if (o != null && typeof o != "string") {
                  m++;
                  return;
                }
                c.set(r, o);
              }
            }),
            d > 0 &&
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[cm:import] ",
                      " username results did not match a requested lid",
                    ])),
                  d,
                )
                .sendLogs("cm-import-username-uncorrelated-result"),
            m > 0 &&
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[cm:import] ",
                      " username results carried a per-user error",
                    ])),
                  m,
                )
                .sendLogs("cm-import-username-per-user-error"),
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[cm:import] resolved ",
                  " of ",
                  " usernames",
                ])),
              c.size,
              t.length,
            ),
            c
          );
        })),
        d.apply(this, arguments)
      );
    }
    l.fetchUsernamesByLid = c;
  },
  98,
);
