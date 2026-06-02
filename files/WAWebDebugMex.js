__d(
  "WAWebDebugMex",
  ["WALogger", "WAWebMexUsync", "WAWebUserPrefsMeUser"],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t) {
      var n =
        t == null
          ? {
              users: [
                {
                  jid: o("WAWebUserPrefsMeUser")
                    .getMeDevicePnOrThrow_DO_NOT_USE()
                    .toJid(),
                },
              ],
              telemetry: { context: "INTERACTIVE" },
              fetch: { username: !0 },
            }
          : t;
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[DEBUG][MEX] executing MexUsync query",
          ])),
      );
      var r = await o("WAWebMexUsync").mexUsyncQuery(n);
      return (
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[DEBUG][MEX] MexUsync query result",
            ])),
        ),
        r
      );
    }
    u.doc = "Manually execute Usync queries through the MEX GraphQL API";
    var c = { executeMexUsyncQuery: u };
    l.default = c;
  },
  98,
);
