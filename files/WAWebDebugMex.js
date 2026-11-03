__d(
  "WAWebDebugMex",
  ["WALogger", "WAWebMexUsync", "WAWebUserPrefsMeUser", "vulture"],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t) {
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
      var a = await o("WAWebMexUsync").mexUsyncQuery(n);
      return (
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[DEBUG][MEX] MexUsync query result",
            ])),
        ),
        a
      );
    }
    u.doc = "Manually execute Usync queries through the MEX GraphQL API";
    var c = { executeMexUsyncQuery: u };
    l.default = c;
  },
  98,
);
