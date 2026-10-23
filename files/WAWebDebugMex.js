__d(
  "WAWebDebugMex",
  [
    "WALogger",
    "WAWebMexUsync",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          r("vulture")("vTi1jSAjDrbXEnHS79wZM33Uatc=");
          var n =
            t == null
              ? {
                  users: [
                    {
                      jid: o("WAWebUserPrefsMeUser")
                        .getMeDeviceLidOrThrow()
                        .toJid(),
                    },
                  ],
                  telemetry: { context: "INTERACTIVE" },
                  fetch: { orgs: !0, username: !0 },
                }
              : t;
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[DEBUG][MEX] executing MexUsync query",
              ])),
          );
          var a = yield o("WAWebMexUsync").mexUsyncQuery(n);
          return (
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[DEBUG][MEX] MexUsync query result",
                ])),
            ),
            a
          );
        })),
        c.apply(this, arguments)
      );
    }
    u.doc = "Manually execute Usync queries through the MEX GraphQL API";
    var d = { executeMexUsyncQuery: u };
    l.default = d;
  },
  98,
);
