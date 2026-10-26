__d(
  "WAWebCustomerManagerUsernamesQuery",
  [
    "WALogger",
    "WAWebContactSyncPrivacyHints",
    "WAWebUsernameTypes",
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
            a = new (o("WAWebUsync").USyncQuery)().withUsernameProtocol(),
            i = [],
            l = o("WAWebContactSyncPrivacyHints").usyncPrivacyHintsEnabled();
          (t.forEach(function (e) {
            var t = e.expectedUsername,
              r = e.lid,
              s = o("WAWebWidFactory").createUserWidOrThrow(r);
            (n.set(String(s), r), n.set(s.user, r));
            var u = new (o("WAWebUsyncUser").USyncUser)().withId(s),
              c = l ? m(t) : null;
            (c != null && u.withUsername(c),
              i.push({ user: u, wid: s }),
              a.withUser(u));
          }),
            yield o("WAWebContactSyncPrivacyHints").attachUsyncPrivacyHints(i));
          var c = yield a.execute(),
            d = c.error.all || c.error.username;
          if (d != null)
            throw r("err")(
              "[cm:import] username usync failed: " +
                String(d.errorCode) +
                " " +
                String(d.errorText),
            );
          var p = new Map(),
            _ = 0,
            f = 0;
          return (
            c.list.forEach(function (e) {
              var t;
              if (e.id != null) {
                var r =
                  (t = n.get(String(e.id))) != null ? t : n.get(e.id.user);
                if (r == null) {
                  _++;
                  return;
                }
                var o = "username" in e ? e.username : null;
                if (o != null && typeof o != "string") {
                  f++;
                  return;
                }
                p.set(r, o);
              }
            }),
            _ > 0 &&
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[cm:import] ",
                      " username results did not match a requested lid",
                    ])),
                  _,
                )
                .sendLogs("cm-import-username-uncorrelated-result"),
            f > 0 &&
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[cm:import] ",
                      " username results carried a per-user error",
                    ])),
                  f,
                )
                .sendLogs("cm-import-username-per-user-error"),
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[cm:import] resolved ",
                  " of ",
                  " usernames",
                ])),
              p.size,
              t.length,
            ),
            p
          );
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      if (e == null) return null;
      var t = e.trim(),
        n = t.startsWith("@") ? t.slice(1) : t;
      return o("WAWebUsernameTypes").isUsername(n) ? n : null;
    }
    l.fetchUsernamesByLid = c;
  },
  98,
);
