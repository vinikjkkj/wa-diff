__d(
  "WAWebMexUsync",
  [
    "WAWebBackendErrors",
    "WAWebMexClient",
    "WAWebMexUsyncQuery.graphql",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e !== void 0 ? e : (e = n("WAWebMexUsyncQuery.graphql"));
    async function u(e) {
      try {
        var t = e.users.filter(function (e) {
          var t = e.jid;
          return o("WAWebWidFactory").createWid(t).isEligibleForUSync();
        });
        if (t.length) {
          var n = await o("WAWebMexClient").fetchQuery(s, {
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
    }
    l.mexUsyncQuery = u;
  },
  98,
);
