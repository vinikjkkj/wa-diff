__d(
  "WAWebBPAccessTokenAndSessionCookiesMutation",
  [
    "WAWebBPAccessTokenAndSessionCookiesMutation.graphql",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebBPAccessTokenAndSessionCookiesMutation.graphql"));
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebRelayClient").commitMutation(
              s,
              {
                application_id: 656096963291760,
                code: e != null ? { sensitive_string_value: e } : null,
              },
              { environmentType: "whatsapp_web" },
            ),
            n = t == null ? void 0 : t.xwa_bp_access_token_and_session_cookies;
          return n == null
            ? null
            : {
                status: n.status,
                access_token: n.access_token,
                session_cookies: n.session_cookies,
                bp_id: n.bp_id,
                access_token_type: n.access_token_type,
                email_attr: n.email_attr,
              };
        })),
        c.apply(this, arguments)
      );
    }
    l.fetchBPAccessTokenAndSessionCookies = u;
  },
  98,
);
