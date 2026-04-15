__d(
  "WAWebSignupMetadataFetcher",
  [
    "WALogger",
    "WAWebSignupMetadataQuery",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
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
                null)
              : {
                  signupId: a.id,
                  signupMessage: a.signup_message,
                  privacyPolicyUrl: a.privacy_policy_url,
                };
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[signup:metadata] fetch failed signupId=",
                      "",
                    ])),
                  t,
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("signup-metadata-fetch-failed"),
              null
            );
          }
        })),
        c.apply(this, arguments)
      );
    }
    l.fetchSignupMetadata = u;
  },
  98,
);
