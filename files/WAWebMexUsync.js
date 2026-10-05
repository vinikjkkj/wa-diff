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
                include_orgs: e.fetch.orgs === !0,
              });
              if (n.xwa2_fetch_wa_users != null)
                return { response: n.xwa2_fetch_wa_users, error: null };
            }
            return {
              response: null,
              error: d(500, "xwa2_fetch_wa_users null", !0, null),
            };
          } catch (e) {
            if (e instanceof o("WAWebBackendErrors").ServerStatusCodeError) {
              var r =
                e instanceof o("WAWebBackendErrors").MexServerStatusCodeError
                  ? { backoffMs: e.backoffMs, retryable: e.retryable !== !1 }
                  : { backoffMs: null, retryable: !0 };
              return {
                response: null,
                error: d(e.statusCode, e.message, r.retryable, r.backoffMs),
              };
            }
            throw e;
          }
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t, n, r) {
      return { backoffMs: r, code: e, retryable: n, text: t };
    }
    l.mexUsyncQuery = u;
  },
  98,
);
