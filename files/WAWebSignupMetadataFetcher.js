__d(
  "WAWebSignupMetadataFetcher",
  [
    "WALogger",
    "WAWebGraphQLServerError",
    "WAWebNetworkStatus",
    "WAWebSignupMetadataQuery",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = {
        2494162: "phone_number_mismatch",
        2494163: "signup_disabled",
        2494164: "signup_not_found",
      };
    function c(e) {
      if (!(e instanceof o("WAWebGraphQLServerError").GraphQLServerError))
        return r("WAWebNetworkStatus").online
          ? "unknown_error"
          : "network_error";
      for (var t of (n = (a = e.source) == null ? void 0 : a.errors) != null
        ? n
        : []) {
        var n,
          a,
          i = t.code,
          l = i == null ? null : u[i];
        if (l != null) return l;
      }
      return "server_error";
    }
    var d = null;
    function m(e) {
      r("gkx")("26256") && (d = e);
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          if (r("gkx")("26256") && d != null)
            return { metadata: d, reason: null };
          try {
            var a = yield o(
              "WAWebSignupMetadataQuery",
            ).fetchSignupMetadataGraphQL(t, n);
            return a == null || a.id == null || a.signup_message == null
              ? (o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[signup:metadata] invalid response signupId=",
                        "",
                      ])),
                    t,
                  )
                  .sendLogs("signup-metadata-invalid-response"),
                { metadata: null, reason: "invalid_response" })
              : {
                  metadata: {
                    signupId: a.id,
                    signupMessage: a.signup_message,
                    privacyPolicyUrl: a.privacy_policy_url,
                  },
                  reason: null,
                };
          } catch (e) {
            var i = c(e);
            return (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[signup:metadata] fetch failed signupId=",
                      " reason=",
                      "",
                    ])),
                  t,
                  i,
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("signup-metadata-fetch-failed"),
              { metadata: null, reason: i }
            );
          }
        })),
        _.apply(this, arguments)
      );
    }
    ((l.setSignupMetadataOverride = m), (l.fetchSignupMetadata = p));
  },
  98,
);
