__d(
  "WAWebMexUsync",
  [
    "WAWebBackendErrors",
    "WAWebMexClient",
    "WAWebMexUsyncQuery.graphql",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e !== void 0 ? e : (e = n("WAWebMexUsyncQuery.graphql"));
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = e.users.filter(function (e) {
              var t = e.jid;
              return o("WAWebWidFactory").createWid(t).isEligibleForUSync();
            });
            if (t.length) {
              var n = yield o("WAWebMexClient").fetchQuery(s, {
                input: { query_input: t, telemetry: e.telemetry },
                include_username: e.fetch.username === !0,
                include_about_status: e.fetch.about_status === !0,
                include_country_code: e.fetch.country_code === !0,
              });
              if (n.xwa2_fetch_wa_users != null)
                return { response: n.xwa2_fetch_wa_users, error: null };
            }
            return {
              response: null,
              error: { code: 500, text: "xwa2_fetch_wa_users null" },
            };
          } catch (e) {
            if (e instanceof o("WAWebBackendErrors").ServerStatusCodeError)
              return {
                response: null,
                error: { code: e.statusCode, text: e.message },
              };
            throw e;
          }
        })),
        c.apply(this, arguments)
      );
    }
    l.mexUsyncQuery = u;
  },
  98,
);
