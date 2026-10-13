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
              error: d({
                backoffMs: null,
                code: 500,
                retryable: !0,
                text: "xwa2_fetch_wa_users null",
              }),
            };
          } catch (e) {
            if (e instanceof o("WAWebBackendErrors").ServerStatusCodeError) {
              var r =
                e instanceof o("WAWebBackendErrors").MexServerStatusCodeError
                  ? { backoffMs: e.backoffMs, retryable: e.retryable !== !1 }
                  : { backoffMs: null, retryable: !0 };
              return {
                response: null,
                error: d({
                  backoffMs: r.backoffMs,
                  code: e.statusCode,
                  retryable: r.retryable,
                  text: e.message,
                }),
              };
            }
            throw e;
          }
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      var t = e.backoffMs,
        n = e.code,
        r = e.retryable,
        o = e.text;
      return { backoffMs: t, code: n, retryable: r, text: o };
    }
    l.mexUsyncQuery = u;
  },
  98,
);
