__d(
  "WAWebSignupMetadataFetcher",
  ["WALogger", "WAWebSignupMetadataQuery", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          try {
            var r = yield o(
              "WAWebSignupMetadataQuery",
            ).fetchSignupMetadataGraphQL(t, n);
            return r == null || r.id == null || r.signup_message == null
              ? (o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[fetchSignupMetadata] null/incomplete resp id=",
                      "",
                    ])),
                  t,
                ),
                null)
              : {
                  signupId: r.id,
                  signupMessage: r.signup_message,
                  privacyPolicyUrl: r.privacy_policy_url,
                };
          } catch (e) {
            return (
              o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[fetchSignupMetadata] GraphQL error for signupId=",
                    ": ",
                    "",
                  ])),
                t,
                e,
              ),
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
