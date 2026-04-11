__d(
  "WAWebMexUsersGetCountryCode",
  [
    "WALogger",
    "WAWebAsISOCountryCode",
    "WAWebMexUsync",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = yield o("WAWebMexUsync").mexUsyncQuery({
              users: t.map(function (e) {
                return { jid: e.toJid() };
              }),
              telemetry: { context: "INTERACTIVE" },
              fetch: { country_code: !0 },
            }),
            r = n.response;
          if (r != null) {
            var a = 0,
              i = r.map(function (e) {
                return e.country_code == null
                  ? (a++, { error: !0 })
                  : { usernameCountryCode: e.country_code };
              });
            return (
              a > 0 &&
                o("WALogger")
                  .WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "server missing ",
                        " user's country code",
                      ])),
                    a,
                  )
                  .sendLogs("missing-username-country-code-mex", {
                    sampling: 0.01,
                  }),
              i
            );
          }
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield s([e]),
            n = t == null ? void 0 : t[0];
          if (n == null || n.error === !0) return null;
          var r = n.usernameCountryCode;
          if (r != null) return o("WAWebAsISOCountryCode").asISOCountryCode(r);
        })),
        d.apply(this, arguments)
      );
    }
    l.getMexUserCountryCode = c;
  },
  98,
);
